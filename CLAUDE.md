# Sniper Training App — plan projektu

## Cel

Interaktywna aplikacja webowa (SPA) do nauki treści z podręcznika **FM 3-05.222
(TC 31-32) "Special Forces Sniper Training and Employment"** (US Army, kwiecień
2003, 474 strony, plik źródłowy: `FM3-05.222(03).pdf` w katalogu głównym repo).
Aplikacja pokrywa **całość podręcznika**: rozdziały 1-6 oraz wszystkie dodatki
A-O, w formie lekcji, quizów, fiszek i interaktywnych narzędzi/kalkulatorów.

**Hosting: w 100% lokalne użycie** (`npm run dev` / lokalny build). Kod
wersjonowany na GitHubie w **prywatnym repozytorium** wyłącznie jako
backup/historia zmian — bez GitHub Pages i bez żadnego publicznego wdrożenia
(zdecydowane świadomie, m.in. ze względu na klauzulę ograniczonej dystrybucji
źródłowego PDF-a — patrz niżej). Jeśli w przyszłości pojawi się potrzeba
publicznego/współdzielonego dostępu, wrócić do tej decyzji.

## Uwaga dot. źródła

Dokument ma na stronie tytułowej klauzulę: *"Distribution authorized to U.S.
Government agencies and their contractors only... Other requests for this
document must be referred to Commander, USAJFKSWCS..."* — formalnie to nie jest
dokument o nieograniczonej dystrybucji, mimo że krąży publicznie w sieci od lat.
Dlatego repo pozostaje **prywatne** i **bez publicznego wdrożenia** (patrz wyżej).

## Stos technologiczny

- **Vite + React + TypeScript** — SPA, szybki dev server, łatwy build statyczny
- **React Router** — routing rozdziałów/lekcji (bez `basename`, aplikacja nie jest wdrażana pod subpath GitHub Pages)
- **Tailwind CSS** — stylowanie
- **localStorage** — zapis postępu użytkownika (bez backendu)
- Brak CI/CD do wdrożenia — repo na GitHubie służy wyłącznie jako backup/historia (`git push` do prywatnego repo, bez Actions/Pages)

## Model danych treści

Każdy rozdział/dodatek to jeden plik TS w `src/content/`, zgodny z typami z
`src/types/content.ts`:

```ts
interface Section {
  id: string;
  title: string;
  page: string;        // np. "3-40" — referencja do oryginału
  body: string;         // markdown
  figures?: { id: string; src: string; caption: string }[];
}

interface Chapter {
  id: string;            // "ch01".."ch06", "app-a".."app-o", "glossary"
  number: string;        // "1", "A", ...
  title: string;
  summary: string;
  sections: Section[];
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface Flashcard { id: string; term: string; definition: string; }
```

## Struktura katalogów (docelowa)

```
sniper/
  FM3-05.222(03).pdf
  CLAUDE.md
  scripts/
    extract-text.sh       # pdftotext -layout -f <start> -l <end>
    render-page.sh         # pdftoppm -png -r 200 dla stron z rysunkami/tabelami
  raw/                      # surowy tekst wyciągnięty z PDF, per rozdział (nieużywany w buildzie)
  public/images/chXX|appX/  # wyeksportowane rysunki/tabele jako PNG
  src/
    main.tsx, App.tsx, router.tsx
    types/content.ts
    content/
      ch01.ts ... ch06.ts
      app-a.ts ... app-o.ts
      glossary.ts
    components/
      Layout.tsx, Sidebar.tsx, ProgressBar.tsx
      QuizRunner.tsx, FlashcardDeck.tsx
      tools/BallisticsCalculator.tsx, tools/UnitConverter.tsx, tools/RangeEstimator.tsx
    pages/
      Home.tsx, ChapterPage.tsx, QuizPage.tsx, FlashcardsPage.tsx, ToolsPage.tsx, GlossaryPage.tsx
    hooks/useProgress.ts     # localStorage: ukończone sekcje/quizy per rozdział
  vite.config.ts
```

## Proces ekstrakcji treści (powtarzany dla każdego rozdziału/dodatku)

1. `pdftotext -layout -f <start> -l <end> "FM3-05.222(03).pdf" raw/chXX.txt`
2. Przejrzenie tekstu, oczyszczenie z nagłówków/stopek/numerów stron powtarzających się na każdej stronie
3. Dla stron z rysunkami (Figure X-Y): najpierw sprawdzić renderem `pdftoppm -png -r 200 -f <page> -l <page>`, czy to tabela/lista tekstowa czy prawdziwa grafika/schemat/zdjęcie.
   - Jeśli to tabela/lista tekstowa (najczęstszy przypadek w rozdz. 1) — przepisać jako natywną tabelę/listę markdown w `body`, NIE jako obraz (lepsza czytelność, spójny styl, tryb ciemny, przeszukiwalność).
   - Jeśli to faktyczna grafika (zdjęcie broni, schemat, diagram, wykres) — dopiero wtedy wyeksportować jako PNG do `public/images/...` i dodać do `figures`.
3b. Dla kluczowego sprzętu/obiektów opisywanych w sekcji — wyszukać i pobrać 1 dobre zdjęcie poglądowe z internetu wg zasad w sekcji „Grafiki uzupełniające z internetu” poniżej, zapisać do `public/images/chXX/web-*.jpg` i odnotować w `SOURCES.md`.
4. Przepisanie treści na markdown w `src/content/chXX.ts`, podział na sekcje wg nagłówków z oryginału
5. Napisanie 5-10 pytań quizowych + 8-15 fiszek per rozdział na bazie kluczowych faktów/liczb/procedur
6. Podłączenie do routera, wizualna weryfikacja w przeglądarce (dev server)
7. Odhaczenie w tabeli statusu poniżej

## Grafiki uzupełniające z internetu

Oprócz rysunków/schematów wyciąganych z samego PDF-a, lekcje uzupełniamy o
**dodatkowe zdjęcia z internetu**, tam gdzie realnie pomagają zwizualizować
sprzęt lub sytuację (np. rzeczywiste zdjęcie karabinu M24, lunety M3A,
konkretnego typu amunicji, urządzenia obserwacyjnego) — PDF z 2003 roku ma
rysunki kreskowe/skany słabej jakości, a dobre zdjęcie referencyjne ułatwia
naukę.

Zasady:

- **Źródła priorytetowo public domain / jasno licencjonowane**: oficjalne
  zdjęcia rządu/wojska USA (`*.mil`, `*.gov`, DVIDS) są z definicji public
  domain; poza tym Wikimedia Commons z jasną licencją (public domain, CC-BY,
  CC-BY-SA). Unikać zdjęć produktowych sklepów/producentów i przypadkowych
  stron bez jasnej licencji.
- Każde pobrane zdjęcie trafia do `public/images/chXX/web-<opis>.jpg`
  (prefiks `web-` odróżnia je od `fig-*` pochodzących z oryginału PDF).
- Każde pobranie **musi być odnotowane** w `public/images/chXX/SOURCES.md`:
  nazwa pliku, adres URL źródła, autor/licencja, data pobrania.
- W `caption` figury w treści lekcji jasno zaznaczyć, że to zdjęcie
  poglądowe spoza podręcznika, np. „Zdjęcie poglądowe: karabin M24 SWS
  (źródło: Wikimedia Commons, public domain)” — żeby nie sugerować, że
  pochodzi z oryginalnego FM 3-05.222.
- Dodawać oszczędnie — tylko tam, gdzie zdjęcie faktycznie pomaga zrozumieć
  fragment tekstu (konkretny model sprzętu, rozpoznawalny obiekt), a nie jako
  ozdobnik do każdej sekcji.

## Mapa treści i status realizacji

Legenda: ☐ nie rozpoczęte · 🔶 tekst wyciągnięty · 🔷 ustrukturyzowane (sekcje+markdown) · ✅ gotowe (+ quiz + fiszki + zweryfikowane w UI)

| # | Tytuł | Strony PDF (pdftoppm/pdftotext -f/-l) | Status |
|---|-------|-------------------|--------|
| Ch.1 | The Special Forces Sniper | 6 – 12 | ✅ |
| Ch.2 | Equipment | 13 – 53 | ✅ |
| Ch.3 | Marksmanship Training | 54 – 133 | ✅ |
| Ch.4 | Field Skills | 134 – 225 | ✅ |
| Ch.5 | Employment | 226 – 265 | ✅ |
| Ch.6 | Sniper Operations in Urban Terrain | 266 – 290 | ✅ |
| App.A | Weights, Measures, and Conversion Tables | 291 – 295 | ✅ (kandydat na kalkulator) |
| App.B | Mission-Essential Tasks List | 296 – 305 | ✅ |
| App.C | Sustainment Program | 306 – 321 | ✅ |
| App.D | Mission Packing List | 322 – 326 | ✅ |
| App.E | M82A1 Caliber .50 Sniper Weapon System | 327 – 335 | ☐ |
| App.F | Foreign/Nonstandard Sniper Weapon Systems Data | 336 – 352 | ☐ |
| App.G | Sniper Rifle Telescopes | 353 – 363 | ☐ |
| App.H | Ballistics Chart | 364 – 381 | ☐ (kandydat na kalkulator) |
| App.I | Sniper Training Exercises | 382 – 387 | ☐ |
| App.J | Range Estimation Table | 388 – 389 | ☐ (kandydat na kalkulator) |
| App.K | Sniper's Logbook | 390 – 426 | ☐ (głównie puste formularze — opisać jako referencję, nie przepisywać pustych tabel) |
| App.L | Tricks of the Trade | 427 – 430 | ☐ |
| App.M | Sniper Team Debriefing Format | 431 – 433 | ☐ |
| App.N | Sniper Range Complex | 434 – 436 | ☐ |
| App.O | Aerial Platforms | 437 – 453 | ☐ |
| — | Glossary | 454 – 466 | ☐ (osobna przeszukiwalna strona) |
| — | Bibliography | 467 – 469 | ☐ (statyczna lista źródeł, niski priorytet) |
| — | Index | 470 – 474 | pominięty celowo (niepotrzebny w aplikacji szkoleniowej) |

Powyższe zakresy stron PDF są zweryfikowane (`pdftotext -f <start> -l <start>`
pokazuje nagłówek rozdziału/dodatku na pierwszej stronie zakresu). Używać ich
bezpośrednio zamiast ponownie przeszukiwać dokument.

**Wszystkie sześć głównych rozdziałów (1-6) jest ukończonych.** Pozostała
praca to wyłącznie Dodatki A-O oraz Glosariusz/Bibliografia (Faza 3-4 planu).

## Funkcje aplikacji

1. **Lekcje** — treść rozdziału podzielona na sekcje z nawigacją boczną, rysunki/tabele osadzone jako obrazy, linki do powiązanych fiszek/glosariusza
2. **Quizy** — quiz per rozdział (natychmiastowy feedback + wyjaśnienie), oraz opcjonalny "egzamin końcowy" losujący pytania ze wszystkich rozdziałów
3. **Fiszki** — talia per rozdział + widok "wszystkie fiszki" z filtrowaniem, tryb powtórek (spaced-repetition uproszczony: karty oznaczone "umiem"/"powtórz")
4. **Śledzenie postępu** — % ukończenia per rozdział i całości kursu, zapis w localStorage, widoczne na stronie głównej jako grid rozdziałów z paskami postępu
5. **Kalkulatory/narzędzia** — zbudowane na bazie dodatków:
   - Konwerter jednostek (Appendix A)
   - Tabela/kalkulator balistyczny (Appendix H + sekcja "Ballistics" w rozdz. 3)
   - Pomoc do szacowania odległości (Appendix J + "Range Estimation" rozdz. 4)

## Fazy realizacji

- **Faza 0 — szkielet projektu**: `npm create vite` (react-ts), Tailwind, router,
  typy treści, layout (Sidebar + strona główna z gridem rozdziałów), hook
  `useProgress`, pusty deploy workflow. Bez treści merytorycznej.
- **Faza 1 — wzorzec na Rozdziale 1**: pełny cykl ekstrakcji (patrz wyżej) na
  jednym rozdziale jako referencyjna implementacja (sekcje, obrazy, quiz,
  fiszki, routing, weryfikacja w przeglądarce). Ustala konwencje dla reszty.
- **Faza 2 — Rozdziały 2-6**: powtórzenie procesu, rozdział po rozdziale,
  aktualizacja tabeli statusu po każdym.
- **Faza 3 — Dodatki A-O**: jw., dla dodatków — priorytet na te oznaczone jako
  kandydaci na kalkulatory (A, H, J), potem reszta jako strony referencyjne.
- **Faza 4 — Glosariusz**: strona z wyszukiwarką pojęć.
- **Faza 5 — Funkcje przekrojowe**: egzamin końcowy (mix pytań), zbiorczy widok
  fiszek, dashboard postępu, dopięcie kalkulatorów.
- **Faza 6 — Polish**: responsywność (mobile), tryb ciemny, dostępność (a11y),
  wyszukiwarka pełnotekstowa po treści lekcji.
- **Faza 7 — Repo GitHub (prywatne, backup)**: `git init`, `.gitignore`
  (`node_modules`, `dist`), utworzenie prywatnego repo przez
  `gh repo create --private`, pierwszy push. Bez Pages, bez Actions — repo
  służy wyłącznie jako historia zmian i backup kodu.

## Zasady pracy nad treścią

- **Język**: UI aplikacji i treść lekcji/quizów/fiszek po polsku (przyjęte na
  podstawie języka konwersacji), z zachowaniem oryginalnych angielskich
  terminów, akronimów i nazw własnych (np. SOTIC, SFODA, M24, MMPI-2) —
  tłumaczenie ich zniekształcałoby precyzję źródła.
- Parafrazować/streszczać, nie kopiować całych akapitów 1:1 tam, gdzie to
  możliwe bez utraty precyzji technicznej (dane liczbowe, procedury,
  specyfikacje sprzętu — zachować dokładnie, bo to dane techniczne, nie proza).
- Każda sekcja lekcji krótka i skanowalna (nagłówek, 3-6 akapitów/list, obraz
  jeśli oryginał go zawiera).
- Pytania quizowe i fiszki tworzyć na podstawie faktów z danego rozdziału,
  nie zgadywać spoza źródła.
- Po zbudowaniu każdego rozdziału/dodatku: odhaczyć w tabeli statusu w tym
  pliku i zrobić commit obejmujący dokładnie ten zakres treści.
