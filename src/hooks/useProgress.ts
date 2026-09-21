import { useCallback, useEffect, useState } from "react";
import type { Chapter } from "../types/content";

const STORAGE_KEY = "sniper-training-progress-v1";

interface ChapterProgress {
  completedSections: string[];
  quizBest: { correct: number; total: number } | null;
  knownFlashcards: string[];
}

type ProgressState = Record<string, ChapterProgress>;

function emptyChapterProgress(): ChapterProgress {
  return { completedSections: [], quizBest: null, knownFlashcards: [] };
}

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    return {};
  }
}

function saveState(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable — progress simply won't persist
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const getChapterProgress = useCallback(
    (chapterId: string): ChapterProgress => state[chapterId] ?? emptyChapterProgress(),
    [state],
  );

  const toggleSectionComplete = useCallback((chapterId: string, sectionId: string) => {
    setState((prev) => {
      const current = prev[chapterId] ?? emptyChapterProgress();
      const has = current.completedSections.includes(sectionId);
      const completedSections = has
        ? current.completedSections.filter((id) => id !== sectionId)
        : [...current.completedSections, sectionId];
      return { ...prev, [chapterId]: { ...current, completedSections } };
    });
  }, []);

  const setQuizBest = useCallback((chapterId: string, correct: number, total: number) => {
    setState((prev) => {
      const current = prev[chapterId] ?? emptyChapterProgress();
      const best =
        current.quizBest && current.quizBest.correct >= correct
          ? current.quizBest
          : { correct, total };
      return { ...prev, [chapterId]: { ...current, quizBest: best } };
    });
  }, []);

  const toggleFlashcardKnown = useCallback((chapterId: string, cardId: string) => {
    setState((prev) => {
      const current = prev[chapterId] ?? emptyChapterProgress();
      const has = current.knownFlashcards.includes(cardId);
      const knownFlashcards = has
        ? current.knownFlashcards.filter((id) => id !== cardId)
        : [...current.knownFlashcards, cardId];
      return { ...prev, [chapterId]: { ...current, knownFlashcards } };
    });
  }, []);

  const chapterCompletionPercent = useCallback(
    (chapter: Chapter): number => {
      if (chapter.sections.length === 0) return 0;
      const progress = getChapterProgress(chapter.id);
      return Math.round((progress.completedSections.length / chapter.sections.length) * 100);
    },
    [getChapterProgress],
  );

  const overallCompletionPercent = useCallback(
    (chapters: Chapter[]): number => {
      const totalSections = chapters.reduce((sum, c) => sum + c.sections.length, 0);
      if (totalSections === 0) return 0;
      const completed = chapters.reduce(
        (sum, c) => sum + getChapterProgress(c.id).completedSections.length,
        0,
      );
      return Math.round((completed / totalSections) * 100);
    },
    [getChapterProgress],
  );

  return {
    getChapterProgress,
    toggleSectionComplete,
    setQuizBest,
    toggleFlashcardKnown,
    chapterCompletionPercent,
    overallCompletionPercent,
  };
}
