import { useMemo, useState } from "react";
import type { Flashcard } from "../types/content";
import { useProgressContext } from "../context/ProgressContext";

export function FlashcardDeck({ chapterId, cards }: { chapterId: string; cards: Flashcard[] }) {
  const { getChapterProgress, toggleFlashcardKnown } = useProgressContext();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const known = getChapterProgress(chapterId).knownFlashcards;

  const card = cards[index];
  const knownCount = useMemo(
    () => cards.filter((c) => known.includes(c.id)).length,
    [cards, known],
  );

  if (cards.length === 0) {
    return <p className="text-neutral-400">Fiszki dla tego rozdziału nie są jeszcze gotowe.</p>;
  }

  function go(delta: number) {
    setFlipped(false);
    setIndex((i) => (i + delta + cards.length) % cards.length);
  }

  function markKnown() {
    toggleFlashcardKnown(chapterId, card.id);
    go(1);
  }

  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-wide text-neutral-500">
        Fiszka {index + 1} / {cards.length} · Umiem: {knownCount}/{cards.length}
      </p>
      <button
        onClick={() => setFlipped((f) => !f)}
        className="flex min-h-40 w-full flex-col items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-center transition-colors hover:border-neutral-600"
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
          className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 hover:border-neutral-500"
        >
          Poprzednia
        </button>
        <div className="flex gap-2">
          <button
            onClick={markKnown}
            className={`rounded-md px-3 py-1.5 text-sm font-medium ${
              known.includes(card.id)
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-emerald-500 text-neutral-950 hover:bg-emerald-400"
            }`}
          >
            {known.includes(card.id) ? "Oznaczona jako umiana ✓" : "Umiem"}
          </button>
        </div>
        <button
          onClick={() => go(1)}
          className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm text-neutral-300 hover:border-neutral-500"
        >
          Następna
        </button>
      </div>
    </div>
  );
}
