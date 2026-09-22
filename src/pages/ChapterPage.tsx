import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getChapter } from "../content";
import { ChapterTabs } from "../components/ChapterTabs";
import { useProgressContext } from "../context/ProgressContext";
import { kindLabel } from "../lib/kindLabel";

export function ChapterPage() {
  const { id = "" } = useParams();
  const chapter = getChapter(id);
  const { getChapterProgress, toggleSectionComplete } = useProgressContext();

  if (!chapter) {
    return (
      <p className="text-neutral-400">
        Nie znaleziono rozdziału. <Link to="/" className="text-amber-400">Wróć do strony głównej</Link>.
      </p>
    );
  }

  const progress = getChapterProgress(chapter.id);

  return (
    <div>
      <p className="text-sm font-medium text-amber-400">
        {kindLabel[chapter.kind]} {chapter.number}
      </p>
      <h1 className="mt-1 text-2xl font-bold text-neutral-50">{chapter.title}</h1>
      <p className="mt-3 text-neutral-400">{chapter.summary}</p>

      <ChapterTabs chapterId={chapter.id} />

      <div className="flex flex-col gap-10">
        {chapter.sections.map((section) => {
          const done = progress.completedSections.includes(section.id);
          return (
            <section key={section.id} id={section.id}>
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-neutral-100">
                  {section.title}{" "}
                  <span className="text-xs font-normal text-neutral-500">str. {section.page}</span>
                </h2>
                <label className="flex shrink-0 items-center gap-2 text-xs text-neutral-400">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleSectionComplete(chapter.id, section.id)}
                    className="size-4 accent-amber-500"
                  />
                  Ukończone
                </label>
              </div>
              <div className="prose prose-invert prose-sm max-w-none prose-headings:text-neutral-100 prose-strong:text-neutral-100 prose-a:text-amber-400">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.body}</ReactMarkdown>
              </div>
              {section.figures && section.figures.length > 0 && (
                <div className="mt-4 flex flex-col gap-4">
                  {section.figures.map((fig) => (
                    <figure key={fig.id}>
                      <img src={fig.src} alt={fig.caption} className="rounded-md border border-neutral-800" />
                      <figcaption className="mt-1 text-center text-xs text-neutral-500">
                        {fig.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
