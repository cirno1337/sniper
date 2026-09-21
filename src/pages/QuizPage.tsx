import { useParams, Link } from "react-router-dom";
import { getChapter } from "../content";
import { ChapterTabs } from "../components/ChapterTabs";
import { QuizRunner } from "../components/QuizRunner";

export function QuizPage() {
  const { id = "" } = useParams();
  const chapter = getChapter(id);

  if (!chapter) {
    return (
      <p className="text-neutral-400">
        Nie znaleziono rozdziału. <Link to="/" className="text-amber-400">Wróć do strony głównej</Link>.
      </p>
    );
  }

  return (
    <div>
      <p className="text-sm font-medium text-amber-400">
        {chapter.kind === "chapter" ? "Rozdział" : "Dodatek"} {chapter.number}
      </p>
      <h1 className="mt-1 text-2xl font-bold text-neutral-50">{chapter.title} — Quiz</h1>
      <ChapterTabs chapterId={chapter.id} />
      <QuizRunner chapterId={chapter.id} quiz={chapter.quiz} />
    </div>
  );
}
