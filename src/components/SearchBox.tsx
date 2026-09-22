import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { search, type SearchResult } from "../lib/search";
import { kindLabel } from "../lib/kindLabel";
import { chapters } from "../content";

export function SearchBox({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results: SearchResult[] = query.trim().length >= 2 ? search(query, 8) : [];

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function goTo(r: SearchResult) {
    navigate(`/rozdzial/${r.chapterId}#${r.sectionId}`);
    setQuery("");
    setOpen(false);
    onNavigate?.();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      goTo(results[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const totalSections = chapters.reduce((n, c) => n + c.sections.length, 0);

  return (
    <div ref={containerRef} className="relative">
      <label htmlFor="global-search" className="sr-only">
        Szukaj w treści kursu
      </label>
      <input
        id="global-search"
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder={`Szukaj w ${totalSections} sekcjach…`}
        className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none"
        role="combobox"
        aria-expanded={open && results.length > 0}
        aria-controls="global-search-results"
        aria-autocomplete="list"
      />
      {open && query.trim().length >= 2 && (
        <ul
          id="global-search-results"
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-96 overflow-y-auto rounded-md border border-neutral-700 bg-neutral-900 shadow-xl"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-neutral-500">Brak wyników dla „{query}”.</li>
          ) : (
            results.map((r, i) => (
              <li key={`${r.chapterId}:${r.sectionId}`} role="option" aria-selected={i === activeIndex}>
                <button
                  onClick={() => goTo(r)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`block w-full px-3 py-2 text-left text-sm transition-colors ${
                    i === activeIndex ? "bg-amber-500/15" : "hover:bg-neutral-800"
                  }`}
                >
                  <p className="text-xs text-amber-400">
                    {kindLabel[chapters.find((c) => c.id === r.chapterId)!.kind]} {r.chapterNumber} ·{" "}
                    {r.sectionTitle}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-neutral-400">{r.snippet}</p>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
