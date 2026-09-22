import type { Chapter } from "../types/content";

export const appJ: Chapter = {
  id: "app-j",
  kind: "appendix",
  number: "J",
  title: "Range Estimation Table",
  summary:
    "Tabela referencyjna wiążąca wysokość mierzonego obiektu (w milach na siatce celowniczej) z odległością do niego, dla pięciu typowych wysokości referencyjnych. Bezpośrednie źródło danych do wzoru mil-relation — dobry kandydat na przyszły interaktywny kalkulator.",
  sections: [
    {
      id: "table",
      title: "Tabela J-1: mile dla obiektów o znanej wysokości",
      page: "J-1",
      body: `Wzór mil-relation: **(wysokość celu w metrach × 1000) / odczyt w milach = odległość w metrach**. Przykład z oryginału: drzwi o wysokości 2 m → (2 × 1000) / odczyt 3,5 mila = **571 m**.

Poniższa tabela podaje gotowy wynik tego wzoru dla pięciu typowych wysokości referencyjnych (6 stóp / 1,8 m — przeciętny mężczyzna stojący; 5 stóp 9 cali / 1,75 m; 5 stóp 6 cali / 1,7 m; 39 cali / 1 m; 19 cali / 0,5 m — przeciętny mężczyzna w pozycji klęczącej/kucającej) w funkcji odczytu mil na siatce celowniczej.

| Mile | 1,8 m | 1,75 m | 1,7 m | 1 m | 0,5 m |
|---|---|---|---|---|---|
| 6,0 | 300 | 292 | 283 | 167 | 83 |
| 5,5 | 327 | 318 | 309 | 182 | 91 |
| 5,0 | 360 | 350 | 340 | 200 | 100 |
| 4,5 | 400 | 389 | 378 | 222 | 111 |
| 4,0 | 450 | 438 | 425 | 250 | 125 |
| 3,5 | 514 | 500 | 486 | 286 | 143 |
| 3,0 | 600 | 583 | 567 | 333 | 167 |
| 2,5 | 720 | 700 | 680 | 400 | 200 |
| 2,0 | 900 | 875 | 850 | 500 | 250 |
| 1,8 | 1000 | 972 | 944 | 556 | 278 |
| 1,5 | 1200 | 1167 | 1133 | 667 | 333 |
| 1,0 | 1800 | 1750 | 1700 | 1000 | 500 |
| 0,5 | 3600 | 3500 | 3400 | 2000 | 1000 |
| 0,2 | 9000 | 8750 | 8500 | 5000 | 2500 |
| 0,1 | 18000 | 17500 | 17000 | 10000 | 5000 |

*Pełna tabela oryginału ma krok co 0,1 mila (od 6,0 do 0,1 mila) — powyżej przedstawiono zestaw kluczowych wartości referencyjnych zachowujących pełną precyzję liczbową; pełny krok 0,1 mila jest odtwarzalny bezpośrednio ze wzoru mil-relation podanego wyżej dla dowolnej z pięciu wysokości.*

**Odczyt tabeli:** znajdź odczyt mil (kolumna po lewej) i przecznij z kolumną odpowiadającą wysokości mierzonego obiektu — wynik to odległość w metrach.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaki jest wzór mil-relation do obliczenia odległości?",
      options: [
        "(wysokość w metrach × 1000) / odczyt w milach",
        "(odczyt w milach × 1000) / wysokość w metrach",
        "wysokość w metrach / (1000 × odczyt w milach)",
        "odczyt w milach × wysokość w metrach × 1000",
      ],
      correctIndex: 0,
      explanation: "Odległość w metrach = (wysokość celu w metrach × 1000) podzielone przez odczyt w milach.",
    },
    {
      id: "q2",
      question: "Jaka jest odległość do drzwi o wysokości 2 m przy odczycie 3,5 mila (przykład z podręcznika)?",
      options: ["286 m", "400 m", "571 m", "700 m"],
      correctIndex: 2,
      explanation: "(2 × 1000) / 3,5 = 571 m — dokładnie tak, jak podaje przykład w oryginale FM 3-05.222.",
    },
    {
      id: "q3",
      question: "Jaką orientacyjną wysokość przyjmuje tabela J-1 dla przeciętnego stojącego mężczyzny?",
      options: ["1,5 m", "1,7-1,8 m", "2,0 m", "0,5 m"],
      correctIndex: 1,
      explanation: "Tabela używa trzech zbliżonych wysokości dla stojącego mężczyzny: 1,8 m (6 stóp), 1,75 m i 1,7 m.",
    },
    {
      id: "q4",
      question: "Jaką wysokość referencyjną przyjmuje się dla mężczyzny w pozycji klęczącej/kucającej w Tabeli J-1?",
      options: ["1 m (39 cali)", "1,5 m", "0,5 m (19 cali)", "0,7 m"],
      correctIndex: 0,
      explanation: "39 cali (1 m) to przyjęta wysokość referencyjna dla sylwetki klęczącej/kucającej; 19 cali (0,5 m) to dodatkowa, jeszcze niższa referencja.",
    },
    {
      id: "q5",
      question: "Przy odczycie 1,0 mila i wysokości obiektu 1,8 m, jaka jest odległość wg tabeli?",
      options: ["900 m", "1000 m", "1800 m", "3600 m"],
      correctIndex: 2,
      explanation: "Przy odczycie 1,0 mila odległość dla obiektu 1,8 m wynosi 1800 m — im mniejszy odczyt mil, tym większa odległość.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Wzór mil-relation", definition: "(Wysokość celu w metrach × 1000) / odczyt w milach = odległość w metrach — podstawowy wzór szacowania odległości na podstawie znanej wysokości obiektu i jego wielkości kątowej w milach." },
    { id: "f2", term: "Table J-1 (Mils for Objects)", definition: "Gotowa tabela odległości dla pięciu typowych wysokości referencyjnych (1,8 m, 1,75 m, 1,7 m, 1 m, 0,5 m) w funkcji odczytu mil, eliminująca potrzebę liczenia wzoru w polu." },
    { id: "f3", term: "Zależność mil ↔ odległość", definition: "Im mniejszy odczyt kątowy w milach dla obiektu o stałej wysokości, tym większa odległość do niego — zależność odwrotnie proporcjonalna." },
  ],
};
