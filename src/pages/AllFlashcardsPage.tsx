import { useMemo, useState } from "react";
import { chapters } from "../content";
import { FlashcardDeck, type FlashcardDeckItem } from "../components/FlashcardDeck";
import { useProgressContext } from "../context/ProgressContext";
import { kindLabel } from "../lib/kindLabel";

export function AllFlashcardsPage() {
  const { getChapterProgress } = useProgressContext();
  const candidates = useMemo(() => chapters.filter((c) => c.flashcards.length > 0), []);
  const [selected, setSelected] = useState<Set<string>>(() => new Set(candidates.map((c) => c.id)));
  const [onlyUnknown, setOnlyUnknown] = useState(false);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function selectAll() {
    setSelected(new Set(candidates.map((c) => c.id)));
  }
  function selectNone() {
    setSelected(new Set());
  }

  const items: FlashcardDeckItem[] = useMemo(() => {
    const chosen = candidates.filter((c) => selected.has(c.id));
    const all = chosen.flatMap((c) => c.flashcards.map((card) => ({ chapterId: c.id, card })));
    if (!onlyUnknown) return all;
    return all.filter(({ chapterId, card }) => !getChapterProgress(chapterId).knownFlashcards.includes(card.id));
  }, [candidates, selected, onlyUnknown, getChapterProgress]);

  return (
    <div>
      <p className="text-sm font-medium text-amber-400">Fiszki</p>
      <h1 className="mt-1 text-2xl font-bold text-neutral-50">Wszystkie fiszki</h1>
      <p className="mt-3 text-neutral-400">
        Zbiorcza talia ze wszystkich rozdziałów i dodatków — wybierz, z których części kursu mają
        pochodzić fiszki, i opcjonalnie pokaż tylko te, których jeszcze nie oznaczono jako umiane.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={selectAll}
          className="rounded-md border border-neutral-700 px-3 py-1 text-xs text-neutral-300 hover:border-neutral-500"
        >
          Zaznacz wszystko
        </button>
        <button
          onClick={selectNone}
          className="rounded-md border border-neutral-700 px-3 py-1 text-xs text-neutral-300 hover:border-neutral-500"
        >
          Odznacz wszystko
        </button>
        <label className="ml-2 flex items-center gap-2 text-xs text-neutral-300">
          <input
            type="checkbox"
            checked={onlyUnknown}
            onChange={(e) => setOnlyUnknown(e.target.checked)}
            className="size-4 accent-amber-500"
          />
          Tylko nieznane
        </label>
      </div>

      <div className="mt-3 flex max-h-40 flex-wrap gap-1.5 overflow-y-auto rounded-md border border-neutral-800 p-2">
        {candidates.map((c) => (
          <label
            key={c.id}
            className={`flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 text-xs ${
              selected.has(c.id) ? "bg-amber-500/15 text-amber-400" : "text-neutral-400 hover:bg-neutral-900"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.has(c.id)}
              onChange={() => toggle(c.id)}
              className="size-3.5 accent-amber-500"
            />
            {kindLabel[c.kind]} {c.number} — {c.title}
          </label>
        ))}
      </div>

      <div className="mt-6">
        <FlashcardDeck items={items} />
      </div>
    </div>
  );
}
