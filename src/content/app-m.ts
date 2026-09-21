import type { Chapter } from "../types/content";

export const appM: Chapter = {
  id: "app-m",
  kind: "appendix",
  number: "M",
  title: "Sniper Team Debriefing Format",
  summary:
    "Struktura odprawy powymisyjnej (debriefing) zespołu snajperskiego — od przygotowania sprzętu i materiałów zdobycznych, przez szczegółowe odtworzenie wydarzeń misji z oficerem S-3, po wypełnienie formalnego raportu z misji.",
  sections: [
    {
      id: "debrief-process",
      title: "Przebieg odprawy",
      page: "M-1",
      body: `Po zakończeniu misji oficer ds. zatrudnienia snajperów (sniper employment officer) lub przedstawiciel S-3 kieruje zespół snajperski do wyznaczonego miejsca przygotowania, gdzie zespół czeka na wezwanie do centrum operacyjnego.

**Zadania zespołu snajperskiego przed odprawą:**
- Rozłożyć i rozliczyć cały sprzęt zespołowy i indywidualny.
- Skonsolidować wszystkie zdobyte materiały i sprzęt.
- Przejrzeć i omówić wydarzenia zapisane w dzienniku misji — od wejścia (insertion) do powrotu, łącznie ze szczegółami każdego zauważenia przeciwnika.
- Przygotować nakładkę (overlay) trasy zespołu, obszaru działania (AO), punktu wejścia, punktu ewakuacji i lokalizacji istotnych obserwacji.

**Rola przedstawiciela S-3:** kontroluje przebieg odprawy i kieruje dowódcę zespołu do:
- Omówienia zauważeń przeciwnika od czasu ostatniej łączności ze stacją bazową radiową.
- Przedstawienia krok po kroku każdego wydarzenia z dziennika misji, od wejścia aż do powrotu przez FLOT (Forward Line of Own Troops), łącznie ze szczegółami wszystkich zauważeń przeciwnika.
- Uzupełnienia raportu z misji (Figure M-1) i sporządzenia nakładki. Dowódca zespołu może wypełnić raport samodzielnie lub podzielić zadanie z obserwatorem — dowódca zwraca raport i nakładkę przedstawicielowi S-3, podczas gdy obserwator wykonuje czynności konserwacyjne po misji.

Po zakończeniu odprawy przedstawiciel S-3 zwalnia zespół snajperski z powrotem do jednostki macierzystej.`,
    },
    {
      id: "mission-report",
      title: "Zawartość raportu z misji (Figure M-1)",
      page: "M-2",
      body: `Formalny raport z misji to formularz wypełniany podczas odprawy. Kluczowe sekcje formularza:

| Sekcja | Zawartość |
|---|---|
| Dane zespołu | Numer zespołu, DTG, dla kogo raport, użyte mapy (1:25 000, 1:50 000, 1:250 000), skład zespołu (dowódca, obserwator) |
| Misja | Opis zadania, priorytetowe (PIR) i ciągłe (CIR) wymagania wywiadowcze |
| Wejście (insertion) | DTG wyjścia, metoda wejścia, punkt wyjścia (współrzędne 6-cyfrowe) |
| Zauważenia przeciwnika (trasa dojścia) | Aktywność naziemna, powietrzna, inna |
| Trasy (wyjście) | Pieszo, pojazdem, statkiem powietrznym — z nakładką |
| Teren | Teren kluczowy, znaczący, decydujący, kierunki podejścia, korytarze terenowe, poprawki do map |
| Siły i instalacje przeciwnika | — |
| Informacje różne | Brak/dziwne zachowanie zwierząt, zniszczona roślinność, nietypowe owady, porzucony sprzęt wojskowy (wyczerpane paliwo, niesprawny, celowo zniszczony, pozostawiony sprawny), opuszczone miejscowości |
| Wyniki starć z przeciwnikiem i ludnością lokalną | — |
| Stan zespołu | Łącznie z ewentualnymi stratami (zabici/ranni) |
| Zwrot map i materiałów identyfikowalnych | Tak/nie, co brakuje, gdzie przypuszczalnie utracono |
| Wnioski i rekomendacje | — |
| Zdobyty sprzęt i materiał przeciwnika | — |
| Ewakuacja | DTG, metoda, punkt ewakuacji (współrzędne), trasa powrotna (pieszo/E&E, trasa lotu) |
| Zauważenia przeciwnika (trasa powrotna) | Aktywność naziemna, powietrzna, inna |
| Powrót | DTG, punkt powrotu, dane dowódcy zespołu (imię, stopień, jednostka, podpis) |
| Uwagi dodatkowe przesłuchującego/debriefera | — |

Ten szczegółowy format zapewnia, że żadna informacja wywiadowcza zebrana podczas misji — od zachowania zwierząt po stan porzuconego sprzętu przeciwnika — nie zostanie utracona przy przekazywaniu jej dalej w łańcuchu dowodzenia.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Kto kontroluje przebieg odprawy powymisyjnej zespołu snajperskiego?",
      options: ["Dowódca zespołu", "Przedstawiciel S-3", "Obserwator", "Oficer łączności"],
      correctIndex: 1,
      explanation: "Przedstawiciel S-3 kontroluje debriefing i kieruje dowódcę zespołu przez kolejne kroki raportowania.",
    },
    {
      id: "q2",
      question: "Co zespół snajperski przygotowuje oprócz raportu z misji?",
      options: [
        "Nakładkę (overlay) trasy, AO, punktów wejścia/ewakuacji i istotnych obserwacji",
        "Nowy plan misji na przyszłość",
        "Listę zakupów sprzętu",
        "Raport medyczny dla całej jednostki",
      ],
      correctIndex: 0,
      explanation: "Zespół przygotowuje nakładkę przedstawiającą trasę, obszar działania, punkty wejścia/ewakuacji i lokalizacje istotnych zauważeń.",
    },
    {
      id: "q3",
      question: "Jakie „dziwne” obserwacje przyrodnicze zespół ma raportować w formularzu?",
      options: [
        "Tylko zauważenia przeciwnika",
        "Brak/dziwne zachowanie zwierząt oraz zniszczoną roślinność i nietypowe owady",
        "Wyłącznie warunki pogodowe",
        "Stan dróg",
      ],
      correctIndex: 1,
      explanation: "Sekcja „Informacje różne” obejmuje m.in. brak/dziwne zachowanie zwierząt, zniszczoną roślinność i nietypowe owady — wskaźniki mogące zdradzać obecność przeciwnika.",
    },
    {
      id: "q4",
      question: "Kto może wykonywać czynności konserwacyjne sprzętu, podczas gdy dowódca zespołu kończy raport z S-3?",
      options: ["Obserwator", "Kierowca", "Medyk", "Oficer wywiadu"],
      correctIndex: 0,
      explanation: "Podczas gdy dowódca zwraca raport i nakładkę przedstawicielowi S-3, obserwator wykonuje zadania konserwacyjne po misji.",
    },
    {
      id: "q5",
      question: "Co dzieje się z zespołem snajperskim po zakończeniu debriefingu?",
      options: [
        "Zostaje natychmiast wysłany na kolejną misję",
        "Zostaje zwolniony przez przedstawiciela S-3 do jednostki macierzystej",
        "Pozostaje w centrum operacyjnym na stałe",
        "Przechodzi dodatkowe szkolenie",
      ],
      correctIndex: 1,
      explanation: "Po zakończeniu odprawy przedstawiciel S-3 zwalnia zespół z powrotem do jednostki macierzystej.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Sniper employment officer", definition: "Oficer kierujący zespół snajperski po misji do miejsca przygotowania do debriefingu." },
    { id: "f2", term: "Figure M-1 (Sample Mission Report)", definition: "Wzorcowy formularz raportu z misji wypełniany podczas odprawy powymisyjnej, obejmujący dane misji, teren, zauważenia przeciwnika i wnioski." },
    { id: "f3", term: "PIR / CIR", definition: "Priority Intelligence Requirements / Continuing Intelligence Requirements — priorytetowe i ciągłe wymagania wywiadowcze wpisywane do raportu z misji." },
    { id: "f4", term: "FLOT", definition: "Forward Line of Own Troops — linia własnych wojsk, przez którą zespół wraca z misji; jeden z punktów odniesienia w opisie wydarzeń misji." },
    { id: "f5", term: "Overlay", definition: "Nakładka mapowa przygotowywana przez zespół, pokazująca trasę, AO, punkty wejścia/ewakuacji i lokalizacje istotnych zauważeń." },
    { id: "f6", term: "E&E (trasa powrotna)", definition: "Evasion and Escape — opis trasy powrotnej pieszo/naziemnie w sekcji raportu dotyczącej ewakuacji." },
  ],
};
