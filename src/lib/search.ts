import { chapters } from "../content";

export interface SearchEntry {
  chapterId: string;
  chapterTitle: string;
  chapterNumber: string;
  sectionId: string;
  sectionTitle: string;
  page: string;
  body: string;
}

export interface SearchResult extends SearchEntry {
  snippet: string;
}

let indexCache: SearchEntry[] | null = null;

function buildIndex(): SearchEntry[] {
  return chapters.flatMap((c) =>
    c.sections.map((s) => ({
      chapterId: c.id,
      chapterTitle: c.title,
      chapterNumber: c.number,
      sectionId: s.id,
      sectionTitle: s.title,
      page: s.page,
      body: s.body,
    })),
  );
}

function getIndex(): SearchEntry[] {
  if (!indexCache) indexCache = buildIndex();
  return indexCache;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, ""); // usuń diakrytyki dla wygodniejszego wyszukiwania
}

function makeSnippet(body: string, query: string): string {
  const plain = body.replace(/[`*_#>|-]/g, " ").replace(/\s+/g, " ").trim();
  const idx = normalize(plain).indexOf(normalize(query));
  if (idx === -1) return plain.slice(0, 140) + (plain.length > 140 ? "…" : "");
  const start = Math.max(0, idx - 50);
  const end = Math.min(plain.length, idx + query.length + 90);
  return (start > 0 ? "…" : "") + plain.slice(start, end) + (end < plain.length ? "…" : "");
}

export function search(query: string, limit = 10): SearchResult[] {
  const q = query.trim();
  if (q.length < 2) return [];
  const nq = normalize(q);

  const scored = getIndex()
    .map((entry) => {
      const titleHit = normalize(entry.sectionTitle).includes(nq);
      const chapterHit = normalize(entry.chapterTitle).includes(nq);
      const bodyHit = normalize(entry.body).includes(nq);
      if (!titleHit && !chapterHit && !bodyHit) return null;
      const score = (titleHit ? 3 : 0) + (chapterHit ? 2 : 0) + (bodyHit ? 1 : 0);
      return { entry, score };
    })
    .filter((x): x is { entry: SearchEntry; score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ entry }) => ({ ...entry, snippet: makeSnippet(entry.body, q) }));
}
