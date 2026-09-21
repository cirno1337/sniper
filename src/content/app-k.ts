import type { Chapter } from "../types/content";

export const appK: Chapter = {
  id: "app-k",
  kind: "appendix",
  number: "K",
  title: "Sniper's Logbook",
  summary:
    "Dziennik strzelecki snajpera — zestaw list kontrolnych (dziewięć kroków do trafienia pierwszym strzałem, dane wiatrowe) oraz pakiet formularzy referencyjnych i wpisowych (matryca zerowania, karty balistyczne, karta wiatru, strony notatek), które SOTIC wykorzystuje do rejestrowania danych strzeleckich w trakcie kursu. Oryginał to głównie puste formularze do wypełnienia w polu — ten dodatek opisuje ich strukturę i przeznaczenie, zamiast reprodukować puste strony.",
  sections: [
    {
      id: "nine-steps",
      title: "Dziewięć kroków do trafienia pierwszym strzałem",
      page: "K-1",
      body: `Lista kontrolna, którą snajper przechodzi przed każdym strzałem o znaczeniu bojowym:

1. **Określ odległość w metrach** — ustaw na celowniku, uwzględniając nachylenie terenu (slope).
2. **Określ wiatr bazowy** — w MOA (tylko przy przyrządach mechanicznych) lub w milach jako hold-off (1 mil = 3,5 MOA, 1/4 mila = 0,87 MOA, 1/2 mila = 1,75 MOA, 3/4 mila = 2,62 MOA).
3. **Określ poprawkę na spin drift** (znos żyroskopowy pocisku): 600-700 m w lewo 0,5 MOA; 800-900 m w lewo 0,75 MOA; 1000 m w lewo 1 MOA (dla M118).
4. **Określ zmianę temperatury** względem zera referencyjnego i ustaw poprawkę: 100-500 m: ±20°F = ±1 MOA; 600-900 m: ±15°F = ±1 MOA; 1000 m: ±10°F = ±1 MOA.
5. **Określ zmianę ciśnienia** względem ciśnienia referencyjnego i ustaw poprawkę.
6. **Określ zmianę wysokości n.p.m.** względem referencyjnej i ustaw poprawkę.
7. **Określ wyprzedzenie** (lead), jeśli cel jest ruchomy.
8. **Przyjmij dobrą pozycję**: oparcie na kościach, rozluźnienie mięśniowe, naturalny punkt celowania (natural POA).
9. **Oddaj strzał**: naturalna pauza oddechowa, skupienie na muszce/siatce, kontynuacja (follow-through).

*Uwaga z oryginału: amunicja powinna pozostawać osłonięta, by utrzymać stałą temperaturę — rozgrzana broń "ciągnie" grupę w górę (ciepło resztkowe podnosi ciśnienie w komorze, zwiększając prędkość pocisku). Każdy strzał i każda zmiana poprawek powinny być logowane.*

**Dane wiatrowe (Wind Data) — osobna lista kontrolna dla obserwatora:**
1. Określ kierunek: wiatr średni, porywy, cisze.
2. Określ prędkość: wiatr średni, porywy, cisze.
3. Określ hold w milach dla poprawki na wiatr.
4. Bądź gotów zmienić odczyt przy porywie lub ciszy — **cisze są bardziej niebezpieczne niż porywy**.
5. Odnieś wymiary celu do MOA: **center** (środek celu), **favor** (połowa między osią a krawędzią), **hold** (krawędź celu).
6. Miraż nie służy jako wskaźnik prędkości, dopóki nie poznasz jego wyglądu przy wietrze bazowym — jego obraz zmienia się w ciągu dnia.
7. Strzelaj do warunku (shoot the condition), nie "goń" korekt.
8. Ignoruj drobne wahania — czekaj, aż warunek w pełni się zmieni; miraż zmienia się, zanim zmienią się warunki (wrzenie miażu = zapowiedź zmiany).
9. Trawa daje wyobrażenie o sile wiatru, ale kierunek/prędkość wymagają wprawy.
10. Obserwator liczy poprawkę w minutach kąta i podaje strzelcowi jako hold-off w milach.`,
    },
    {
      id: "logbook-structure",
      title: "Struktura dziennika: matryca zerowania i karty referencyjne",
      page: "K-2",
      body: `Dziennik snajpera (Sniper's Logbook) to fizyczny skoroszyt złożony z dwóch typów zawartości:

**Figure K-1 — Consolidated Zero Data (matryca zerowania):** pusta tabela krzyżująca dystans (100-1000 m) z temperaturą (50-95°F), w której snajper zapisuje ustawienia celownika (come-ups) zweryfikowane dla własnego egzemplarza SWS w danych warunkach — pozwala szybko odtworzyć właściwe ustawienie bez ponownego liczenia przy znanej kombinacji dystans/temperatura.

**Figure K-2 — SOTIC Shooter's Log:** rozbudowany pakiet (w oryginale ok. 35 stron), na który składają się:
- Strona tytułowa kursu (SOTIC).
- Diagramy standardowych tarcz NRA (np. SR-2 na 200 i 300 jardów) do rejestrowania grup strzeleckich.
- **Gotowe karty balistyczne (data cards)** dla konkretnej amunicji (M118 i M118LR) — patrz obrazy niżej: tabele "come-ups" w 0,25 MOA / 1 MOA / milach dla zasięgów 200-1000 jardów/metrów, wyprzedzenia dla celów ruchomych (base leads) w zależności od prędkości, oraz tabela hold-off na wiatr w funkcji zasięgu i prędkości wiatru.
- **Kartę informacji o wietrze (SOTIC Data Book — Wind Information Adjustment)**: wzory na poprawkę wiatru, stałe balistyczne dla czterech typów amunicji (M80, M852, M118SB/M118LR, .300 Win Mag), skalę siły wiatru metodą dotykowo-obserwacyjną oraz tarczę zegara (clock method) do określania wartości wiatru względem kierunku strzału.
- Puste strony wpisowe do rejestrowania kolejnych sesji strzeleckich w trakcie kursu.
- Ostatnia strona: wolne miejsce na notatki ("Notes:").

Poniżej dwa przykłady wypełnionych kart referencyjnych z oryginalnego pakietu — pokazują dokładnie ten rodzaj danych, jaki snajper ma pod ręką przy strzelaniu.`,
      figures: [
        {
          id: "fig-k2-data-card",
          src: "/images/app-k/fig-k2-data-card.png",
          caption:
            "Figure K-2 (fragment). Przykładowa karta balistyczna SOTIC dla amunicji M118 / M118LR — come-ups, wyprzedzenia dla celów ruchomych, hold-off na wiatr (oryginał z FM 3-05.222).",
        },
        {
          id: "fig-k2-wind-card",
          src: "/images/app-k/fig-k2-wind-card.png",
          caption:
            "Figure K-2 (fragment). Karta informacji o wietrze SOTIC Data Book — wzory, stałe amunicji i metoda zegara do oceny wartości wiatru (oryginał z FM 3-05.222).",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Ile kroków obejmuje lista kontrolna „Nine Steps for a First-Shot Hit”?",
      options: ["5", "7", "9", "12"],
      correctIndex: 2,
      explanation: "Lista obejmuje dziewięć kroków, od określenia odległości po follow-through po strzale.",
    },
    {
      id: "q2",
      question: "Ile MOA odpowiada 1 milowi hold-off wg listy dziewięciu kroków?",
      options: ["1,75 MOA", "2,62 MOA", "3,5 MOA", "4,0 MOA"],
      correctIndex: 2,
      explanation: "1 mil = 3,5 MOA (a 1/2 mila = 1,75 MOA, 1/4 mila = 0,87 MOA, 3/4 mila = 2,62 MOA).",
    },
    {
      id: "q3",
      question: "Dlaczego amunicja powinna pozostawać osłonięta przed strzelaniem?",
      options: [
        "Żeby nie zardzewiała",
        "Rozgrzana broń podnosi ciśnienie w komorze i zwiększa prędkość pocisku, ciągnąc grupę w górę",
        "Żeby nie było widać jej koloru",
        "To tylko kwestia estetyki",
      ],
      correctIndex: 1,
      explanation: "Ciepło resztkowe rozgrzanej broni podnosi temperaturę komory, a więc i ciśnienie, zwiększając V0 i przesuwając trafienia w górę.",
    },
    {
      id: "q4",
      question: "Co według listy „Wind Data” jest bardziej niebezpieczne dla strzału: porywy czy cisze wiatru?",
      options: ["Porywy (gusts)", "Cisze (lulls)", "Oba jednakowo", "Żadne, liczy się tylko średnia"],
      correctIndex: 1,
      explanation: "Lista explicite zaznacza, że cisze (lulls) są bardziej niebezpieczne niż porywy (gusts).",
    },
    {
      id: "q5",
      question: "Co zapisuje snajper w matrycy Figure K-1 (Consolidated Zero Data)?",
      options: [
        "Listę wyposażenia zespołu",
        "Ustawienia celownika (come-ups) dla własnego SWS w funkcji dystansu i temperatury",
        "Dane osobowe członków zespołu",
        "Harmonogram misji",
      ],
      correctIndex: 1,
      explanation: "Figure K-1 to pusta matryca dystans×temperatura do zapisania zweryfikowanych ustawień celownika własnej broni.",
    },
    {
      id: "q6",
      question: "Jaki jest \"pole constant\" (field constant) ułatwiający obliczenia wiatru dla amunicji 7,62×51 mm (M852, M118SB, M118LR) przy większości zasięgów?",
      options: ["5", "10", "15", "20"],
      correctIndex: 1,
      explanation: "Karta wiatru SOTIC Data Book podaje stałą polową 10 jako upraszczającą matematykę dla tych trzech typów amunicji na większości zasięgów.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Nine Steps for a First-Shot Hit", definition: "Dziewięciopunktowa lista kontrolna snajpera: dystans, wiatr bazowy, spin drift, temperatura, ciśnienie, wysokość, wyprzedzenie, pozycja, oddanie strzału." },
    { id: "f2", term: "Spin drift", definition: "Boczny znos pocisku spowodowany jego wirowaniem żyroskopowym — dla M118 wynosi ok. 0,5 MOA (600-700 m) do 1 MOA (1000 m), zawsze w tę samą stronę (w lewo przy prawoskrętnym gwincie)." },
    { id: "f3", term: "Shoot the condition", definition: "Zasada strzelania w konkretnym, rozpoznanym warunku wiatrowym zamiast pogoni za drobnymi wahaniami odczytów." },
    { id: "f4", term: "Center / Favor / Hold", definition: "Trzy poziomy odniesienia poprawki na cel w MOA: środek celu, połowa między środkiem a krawędzią, oraz sama krawędź celu." },
    { id: "f5", term: "Figure K-1 (Consolidated Zero Data)", definition: "Pusta matryca dystans×temperatura do zapisywania zweryfikowanych ustawień celownika (come-ups) własnego egzemplarza SWS." },
    { id: "f6", term: "Figure K-2 (SOTIC Shooter's Log)", definition: "Rozbudowany pakiet ok. 35 stron: tarcze NRA, gotowe karty balistyczne dla M118/M118LR, karta informacji o wietrze i puste strony wpisowe używane w trakcie kursu SOTIC." },
    { id: "f7", term: "Clock method (wiatr)", definition: "Metoda oceny wartości wiatru względem kierunku strzału przy użyciu tarczy zegara: full value (3/4 wartości), 3/4, 1/2, 1/4, no value — w zależności od kąta między wiatrem a linią strzału." },
    { id: "f8", term: "Field constant 10", definition: "Uproszczona stała amunicji (zamiast dokładnych A136/A171 itd.) używana w polu do szybkiego liczenia poprawki na wiatr dla amunicji 7,62×51 mm na większości zasięgów." },
  ],
};
