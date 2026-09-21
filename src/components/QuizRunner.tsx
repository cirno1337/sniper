import { useMemo, useState } from "react";
import type { QuizQuestion } from "../types/content";
import { useProgressContext } from "../context/ProgressContext";

export function QuizRunner({ chapterId, quiz }: { chapterId: string; quiz: QuizQuestion[] }) {
  const { setQuizBest, getChapterProgress } = useProgressContext();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quiz[index];
  const best = getChapterProgress(chapterId).quizBest;

  const isLast = index === quiz.length - 1;

  function choose(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (isLast) {
      const total = quiz.length;
      const finalCorrect = correctCount;
      setQuizBest(chapterId, finalCorrect, total);
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setFinished(false);
  }

  const percentScore = useMemo(
    () => (quiz.length === 0 ? 0 : Math.round((correctCount / quiz.length) * 100)),
    [correctCount, quiz.length],
  );

  if (quiz.length === 0) {
    return <p className="text-neutral-400">Quiz dla tego rozdziału nie jest jeszcze gotowy.</p>;
  }

  if (finished) {
    return (
      <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
        <h3 className="text-lg font-semibold text-neutral-100">Wynik: {correctCount}/{quiz.length} ({percentScore}%)</h3>
        {best && (
          <p className="mt-1 text-sm text-neutral-400">
            Najlepszy wynik: {best.correct}/{best.total}
          </p>
        )}
        <button
          onClick={restart}
          className="mt-4 rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-amber-400"
        >
          Powtórz quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-6">
      <p className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
        Pytanie {index + 1} / {quiz.length}
      </p>
      <h3 className="mb-4 text-base font-medium text-neutral-100">{question.question}</h3>
      <div className="flex flex-col gap-2">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;
          let style = "border-neutral-700 hover:border-neutral-500";
          if (selected !== null) {
            if (isCorrect) style = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
            else if (isSelected) style = "border-red-500 bg-red-500/10 text-red-300";
            else style = "border-neutral-800 opacity-60";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`rounded-md border px-4 py-2 text-left text-sm transition-colors ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-4 rounded-md bg-neutral-800/60 p-3 text-sm text-neutral-300">
          {question.explanation}
        </div>
      )}
      {selected !== null && (
        <button
          onClick={next}
          className="mt-4 rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-amber-400"
        >
          {isLast ? "Zakończ quiz" : "Następne pytanie"}
        </button>
      )}
    </div>
  );
}
