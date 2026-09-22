import { Link } from "react-router-dom";
import { chapters } from "../content";
import { useProgressContext } from "../context/ProgressContext";
import { ProgressBar } from "../components/ProgressBar";
import { kindLabel } from "../lib/kindLabel";

const quickLinks = [
  { to: "/egzamin", title: "Egzamin końcowy", desc: "Losowy test z pytań ze wszystkich rozdziałów i dodatków." },
  { to: "/fiszki", title: "Wszystkie fiszki", desc: "Zbiorcza talia fiszek z możliwością filtrowania po rozdziale." },
  { to: "/narzedzia", title: "Kalkulatory", desc: "Konwerter jednostek, balistyka i szacowanie odległości." },
];

export function Home() {
  const { chapterCompletionPercent, overallCompletionPercent, getChapterProgress } = useProgressContext();
  const overall = overallCompletionPercent(chapters);

  const totalSections = chapters.reduce((sum, c) => sum + c.sections.length, 0);
  const doneSections = chapters.reduce(
    (sum, c) => sum + getChapterProgress(c.id).completedSections.length,
    0,
  );
  const totalFlashcards = chapters.reduce((sum, c) => sum + c.flashcards.length, 0);
  const knownFlashcards = chapters.reduce(
    (sum, c) => sum + getChapterProgress(c.id).knownFlashcards.length,
    0,
  );
  const attemptedQuizzes = chapters.filter((c) => getChapterProgress(c.id).quizBest !== null);
  const avgQuizScore =
    attemptedQuizzes.length === 0
      ? null
      : Math.round(
          (attemptedQuizzes.reduce((sum, c) => {
            const best = getChapterProgress(c.id).quizBest!;
            return sum + best.correct / best.total;
          }, 0) /
            attemptedQuizzes.length) *
            100,
        );

  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral-50">Szkolenie snajperskie SF</h1>
      <p className="mt-2 text-neutral-400">
        Interaktywny kurs na bazie FM 3-05.222 „Special Forces Sniper Training and Employment”.
      </p>

      <div className="mt-6 rounded-lg border border-neutral-800 bg-neutral-900 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-300">Postęp całego kursu</span>
          <span className="text-neutral-400">{overall}%</span>
        </div>
        <div className="mt-2">
          <ProgressBar percent={overall} />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <StatTile label="Sekcje ukończone" value={`${doneSections} / ${totalSections}`} />
          <StatTile label="Fiszki opanowane" value={`${knownFlashcards} / ${totalFlashcards}`} />
          <StatTile
            label="Średni wynik quizów"
            value={avgQuizScore === null ? "—" : `${avgQuizScore}%`}
            hint={attemptedQuizzes.length === 0 ? "brak podejść" : `${attemptedQuizzes.length} rozdziałów`}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {quickLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 transition-colors hover:border-amber-500/60 hover:bg-amber-500/10"
          >
            <h2 className="font-semibold text-amber-400">{l.title}</h2>
            <p className="mt-1 text-sm text-neutral-400">{l.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {chapters.map((c) => {
          const percent = chapterCompletionPercent(c);
          return (
            <Link
              key={c.id}
              to={`/rozdzial/${c.id}`}
              className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-colors hover:border-neutral-600"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-amber-400">
                {kindLabel[c.kind]} {c.number}
              </p>
              <h2 className="mt-1 font-semibold text-neutral-100">{c.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-neutral-500">{c.summary}</p>
              <div className="mt-3">
                <ProgressBar percent={percent} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function StatTile({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-md bg-neutral-800/60 p-3">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-neutral-100">{value}</p>
      {hint && <p className="mt-0.5 text-[11px] text-neutral-600">{hint}</p>}
    </div>
  );
}
