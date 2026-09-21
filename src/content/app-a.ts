import type { Chapter } from "../types/content";

export const appA: Chapter = {
  id: "app-a",
  kind: "appendix",
  number: "A",
  title: "Wagi, miary i tabele konwersji",
  summary:
    "Snajper wyraża większość pomiarów w jednostkach amerykańskich (US standard), nie metrycznych. Ten dodatek zbiera definicje jednostek metrycznych i ich odpowiedniki US oraz współczynniki przeliczeniowe — przydatne przy zmianie środowiska/misji na obszar posługujący się innym systemem miar.",
  sections: [
    {
      id: "base-units",
      title: "Jednostki metryczne i ich odpowiedniki US",
      page: "A-1",
      body: `**Miara liniowa (Table A-1):**

| Jednostka | Odpowiednik metryczny | Odpowiednik US |
|---|---|---|
| 1 centymetr | 10 milimetrów | 0,39 cala |
| 1 decymetr | 10 centymetrów | 3,94 cala |
| 1 metr | 10 decymetrów | 39,37 cala |
| 1 dekametr | 10 metrów | 32,8 stopy |
| 1 hektometr | 10 dekametrów | 328,08 stopy |
| 1 kilometr | 10 hektometrów | 3280,8 stopy |

**Miara płynów (Table A-2):** 1 centylitr = 10 mililitrów = 0,34 uncji płynu; 1 decylitr = 10 centylitrów = 3,38 uncji; 1 litr = 10 decylitrów = 33,81 uncji; 1 dekalitr = 10 litrów = 2,64 galona; 1 hektolitr = 10 dekalitrów = 26,42 galona; 1 kilolitr = 10 hektolitrów = 264,18 galona.

**Waga (Table A-3):** 1 centygram = 10 miligramów = 0,15 grana; 1 decygram = 10 centygramów = 1,54 grana; 1 gram = 10 decygramów = 0,035 uncji; 1 dekagram = 10 gramów = 0,35 uncji; 1 hektogram = 10 dekagramów = 3,52 uncji; 1 kilogram = 10 hektogramów = 2,2 funta; 1 kwintal = 100 kilogramów = 220,46 funta; 1 tona metryczna = 10 kwintali = 1,1 tony krótkiej (short ton).

**Miara powierzchni (Table A-4):** 1 cm² = 100 mm² = 0,155 cala²; 1 dm² = 100 cm² = 15,5 cala²; 1 m² (centiar) = 100 dm² = 10,76 stopy²; 1 dekametr² (ar) = 100 m² = 1076,4 stopy²; 1 hektometr² (hektar) = 100 arów = 2,47 akra; 1 km² = 100 hektarów = 0,386 mili².

**Miara sześcienna (Table A-5):** 1 cm³ = 1000 mm³ = 0,06 cala³; 1 dm³ = 1000 cm³ = 61,02 cala³; 1 m³ = 1000 dm³ = 35,31 stopy³.

**Temperatura (Table A-6):**
- °F → °C: odjąć 32, pomnożyć przez 5, podzielić przez 9.
- °C → °F: pomnożyć przez 9, podzielić przez 5, dodać 32.`,
    },
    {
      id: "conversion-factors",
      title: "Współczynniki przeliczeniowe",
      page: "A-2",
      body: `**Wybrane współczynniki z Table A-7 (Approximate Conversion Factors)** — mnożnik przelicza wartość z kolumny „Z" na kolumnę „Na":

| Z | Na | ×Mnożnik | Z | Na | ×Mnożnik |
|---|---|---|---|---|---|
| Cale | Centymetry | 2,540 | Centymetry | Cale | 3,94 |
| Stopy | Metry | 0,305 | Metry | Stopy | 3,280 |
| Jardy | Metry | 0,914 | Metry | Jardy | 1,094 |
| Mile | Kilometry | 1,609 | Kilometry | Mile | 0,621 |
| Akry | Hektometry² | 0,405 | Hektometry² | Akry | 2,471 |
| Uncje | Gramy | 28,349 | Gramy | Uncje | 0,035 |
| Funty | Kilogramy | 0,454 | Kilogramy | Funty | 2,205 |
| Tony krótkie | Tony metryczne | 0,907 | Tony metryczne | Tony krótkie | 1,102 |
| Galony | Litry | 3,785 | Litry | Galony | 0,264 |
| Mile morskie | Kilometry | 1,852 | — | — | — |

**Powierzchnia (Table A-8), objętość (Table A-9), pojemność (Table A-10)** — pełne tabele w oryginale zawierają dwukierunkowe współczynniki dla mm²/cal², m²/stopa²/jard²/mila², cm³/cal³, m³/stopa³/jard³ oraz mililitrów/litrów na uncje płynu, pinty, kwarty i galony — wartości analogiczne do Table A-7, z tą samą zasadą mnożenia.

**Tabele odległości (Table A-11 do A-15)** — oryginał zawiera rozbudowane tabele przeliczeniowe mila lądowa ↔ kilometr ↔ mila morska (do 1000 jednostek) oraz jardy ↔ metry (do 9000). Kluczowe współczynniki bazowe do zapamiętania:
- 1 mila lądowa (statute mile) = **1,61 km** = **0,869 mili morskiej**.
- 1 mila morska (nautical mile) = **1,85 km** = **1,15 mili lądowej**.
- 1 jard = **0,914 m** (dokładniej: 100 jardów = 91 m; 1000 jardów = 914 m).
- 1000 metrów = **1094 jardy**.

*Uwaga: pełne tabele lookup (co jednostkę, do 1000/9000) są w oryginalnym podręczniku wyłącznie jako gotowe do odczytu tabele wartości — matematycznie wynikają z powyższych współczynników bazowych, więc w tej aplikacji nie są powielane wiersz po wierszu. Dobry kandydat na przyszły interaktywny konwerter jednostek w tej aplikacji.*`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Ile wynosi 1 kilometr w stopach (US)?",
      options: ["328,08 stopy", "1000 stóp", "3280,8 stopy", "620 stóp"],
      correctIndex: 2,
      explanation: "1 kilometr = 10 hektometrów = 3280,8 stopy.",
    },
    {
      id: "q2",
      question: "Jak przeliczyć stopnie Fahrenheita na Celsjusza?",
      options: [
        "Pomnożyć przez 9, podzielić przez 5, dodać 32",
        "Odjąć 32, pomnożyć przez 5, podzielić przez 9",
        "Podzielić przez 2",
        "Odjąć 32, podzielić przez 2",
      ],
      correctIndex: 1,
      explanation: "°F → °C: odjąć 32, pomnożyć przez 5, podzielić przez 9.",
    },
    {
      id: "q3",
      question: "Ile wynosi współczynnik przeliczenia mil na kilometry?",
      options: ["0,621", "1,609", "1,852", "0,914"],
      correctIndex: 1,
      explanation: "Aby zmienić mile na kilometry, mnoży się przez 1,609 (odwrotnie: km na mile ×0,621).",
    },
    {
      id: "q4",
      question: "Ile wynosi 1 mila morska w kilometrach?",
      options: ["1,61 km", "1,85 km", "2,0 km", "1,15 km"],
      correctIndex: 1,
      explanation: "1 mila morska (nautical mile) = 1,85 km = 1,15 mili lądowej.",
    },
    {
      id: "q5",
      question: "Ile funtów odpowiada 1 kilogramowi?",
      options: ["0,454 funta", "1,1 funta", "2,2 funta", "2,205 funta (tabela A-7) / 2,2 funta (tabela A-3)"],
      correctIndex: 3,
      explanation: "Table A-3 podaje 1 kg = 2,2 funta (zaokrąglenie bazowe), a Table A-7 dokładniejszy współczynnik 2,205 funta na kilogram.",
    },
  ],
  flashcards: [
    { id: "f1", term: "1 metr", definition: "= 10 decymetrów = 39,37 cala (odpowiednik US)." },
    { id: "f2", term: "1 kilogram", definition: "= 10 hektogramów ≈ 2,2 funta." },
    { id: "f3", term: "1 mila (statute mile)", definition: "= 1,609 km = 0,869 mili morskiej." },
    { id: "f4", term: "1 mila morska (nautical mile)", definition: "= 1,852 km = 1,15 mili lądowej." },
    { id: "f5", term: "1 jard", definition: "≈ 0,914 m (1000 jardów = 914 m)." },
    { id: "f6", term: "°F → °C", definition: "Odjąć 32, pomnożyć przez 5, podzielić przez 9." },
    { id: "f7", term: "°C → °F", definition: "Pomnożyć przez 9, podzielić przez 5, dodać 32." },
    { id: "f8", term: "1 akr", definition: "= 0,405 hektometra kwadratowego (hektara)." },
    { id: "f9", term: "1 galon (US)", definition: "= 3,785 litra." },
    { id: "f10", term: "Table A-1 do A-15", definition: "Kompletny zestaw tabel konwersji w Dodatku A: miary liniowe, płynów, wagi, powierzchni, objętości, temperatury oraz gotowe tabele odległości mila/km/mila morska i jard/metr." },
  ],
};
