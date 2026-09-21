import { Link } from "react-router-dom";
import { chapters } from "../content";
import { useProgressContext } from "../context/ProgressContext";
import { ProgressBar } from "../components/ProgressBar";

export function Home() {
  const { chapterCompletionPercent, overallCompletionPercent } = useProgressContext();
  const overall = overallCompletionPercent(chapters);

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
                {c.kind === "chapter" ? "Rozdział" : "Dodatek"} {c.number}
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
