import { chapters } from "../content";
import type { QuizQuestion } from "../types/content";

export function getAllQuizQuestions(): QuizQuestion[] {
  return chapters.flatMap((c) => c.quiz);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sampleExamQuestions(count: number): QuizQuestion[] {
  const pool = getAllQuizQuestions();
  return shuffle(pool).slice(0, Math.min(count, pool.length));
}
