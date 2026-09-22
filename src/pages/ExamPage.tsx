import { useMemo, useState } from "react";
import { QuizRunner } from "../components/QuizRunner";
import { getAllQuizQuestions, sampleExamQuestions } from "../lib/exam";

const COUNT_OPTIONS = [20, 30, 40, 60];

export function ExamPage() {
  const totalAvailable = useMemo(() => getAllQuizQuestions().length, []);
  const [count, setCount] = useState(30);
  const [seed, setSeed] = useState(0);
  const questions = useMemo(() => sampleExamQuestions(count), [count, seed]);

  return (
    <div>
      <p className="text-sm font-medium text-amber-400">Egzamin końcowy</p>
      <h1 className="mt-1 text-2xl font-bold text-neutral-50">Losowy test wiedzy</h1>
      <p className="mt-3 text-neutral-400">
        Zestaw losowych pytań ze wszystkich rozdziałów i dodatków ({totalAvailable} pytań w puli
        łącznie). Wybierz liczbę pytań i wylosuj nowy zestaw w dowolnym momencie.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 rounded-md border border-neutral-800 p-1">
          {COUNT_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                count === n
                  ? "bg-amber-500 text-neutral-950"
                  : "text-neutral-300 hover:bg-neutral-900"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <button
          onClick={() => setSeed((s) => s + 1)}
          className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 hover:border-neutral-500"
        >
          Wylosuj nowy zestaw
        </button>
      </div>

      <div className="mt-6">
        <QuizRunner key={`${count}-${seed}`} chapterId="exam" quiz={questions} />
      </div>
    </div>
  );
}
