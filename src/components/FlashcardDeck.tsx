import { useEffect, useMemo, useState } from "react";
import type { Flashcard } from "../types/content";
import { useProgressContext } from "../context/ProgressContext";

export interface FlashcardDeckItem {
  chapterId: string;
  card: Flashcard;
}

export function FlashcardDeck({ items }: { items: FlashcardDeckItem[] }) {
  const { getChapterProgress, toggleFlashcardKnown } = useProgressContext();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Sygnatura oparta na wartościach (id kart), nie na referencji tablicy `items` —
  // ta ostatnia zmienia się przy KAŻDEJ aktualizacji postępu (np. oznaczeniu "Umiem"),
  // bo getChapterProgress dostaje nową referencję ze stanu. Reset pozycji ma się
  // wykonać tylko wtedy, gdy realnie zmienił się skład talii (np. inny filtr rozdziałów).
  const signature = useMemo(
    () => items.map(({ chapterId, card }) => `${chapterId}:${card.id}`).join("|"),
    [items],
  );

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [signature]);

  const knownCount = useMemo(
    () =>
      items.filter(({ chapterId, card }) =>
        getChapterProgress(chapterId).knownFlashcards.includes(card.id),
      ).length,
    [items, getChapterProgress],
  );

  if (items.length === 0) {
    return <p className="text-neutral-400">Brak fiszek do wyświetlenia.</p>;
  }

  const safeIndex = Math.min(index, items.length - 1);
  const { chapterId, card } = items[safeIndex];
  const isKnown = getChapterProgress(chapterId).knownFlashcards.includes(card.id);

  function go(delta: number) {
    setFlipped(false);
    setIndex((i) => (i + delta + items.length) % items.length);
  }

  function markKnown() {
    toggleFlashcardKnown(chapterId, card.id);
    go(1);
  }

  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-wide text-neutral-500" aria-live="polite">
        Fiszka {safeIndex + 1} / {items.length} · Umiem: {knownCount}/{items.length}
      </p>
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={flipped ? "Pokazano definicję — kliknij, aby wrócić do terminu" : "Pokazano termin — kliknij, aby zobaczyć definicję"}
        className="flex min-h-40 w-full flex-col items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-center transition-colors hover:border-neutral-600 focus-visible:outline-2 focus-visible:outline-amber-500"
      >
        {!flipped ? (
          <span className="text-lg font-semibold text-neutral-100">{card.term}</span>
        ) : (
          <span className="text-sm text-neutral-300">{card.definition}</span>
        )}
        <span className="mt-3 text-xs text-neutral-600">(kliknij, aby odwrócić)</span>
      </button>
      <div className="mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => go(-1)}
          aria-label="Poprzednia fiszka"
          className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 hover:border-neutral-500 focus-visible:outline-2 focus-visible:outline-amber-500"
        >
          Poprzednia
        </button>
        <div className="flex gap-2">
          <button
            onClick={markKnown}
            aria-pressed={isKnown}
            className={`rounded-md px-3 py-1.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-amber-500 ${
              isKnown
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
            }`}
          >
            {isKnown ? "Oznaczona jako umiana ✓" : "Umiem"}
          </button>
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Następna fiszka"
          className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 hover:border-neutral-500 focus-visible:outline-2 focus-visible:outline-amber-500"
        >
          Następna
        </button>
      </div>
    </div>
  );
}
