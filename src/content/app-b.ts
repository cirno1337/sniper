import type { Chapter } from "../types/content";

export const appB: Chapter = {
  id: "app-b",
  kind: "appendix",
  number: "B",
  title: "Lista zadań kluczowych misji (METL)",
  summary:
    "Oficjalna lista zadań indywidualnych i zespołowych (Mission-Essential Task List) dla MOS 18, poziom umiejętności 3, w ramach SOTIC. Definiuje, co dokładnie snajper i zespół snajperski muszą umieć wykonać — z konkretnymi standardami i krokami oceny (GO/NO-GO).",
  sections: [
    {
      id: "individual-tasks",
      title: "Zadania indywidualne (Critical Individual Tasks)",
      page: "B-1",
      body: `Zadania krytyczne SOTIC (MOS 18, Skill Level 3) pogrupowane w 6 obszarów tematycznych:

**1. Special Operations Target Interdiction:** wykrywanie celów na podstawie wskaźników (target indicators); sporządzanie szkicu panoramicznego; prowadzenie dziennika obserwacji snajpera; przygotowanie rozkazu misji snajperskiej; prowadzenie szkoleń snajperów SO; stosowanie metod wskazywania celów; określanie procedur oceny i selekcji snajperów; określanie możliwości i ról snajperów SO; obserwacja sektora (arc of observation); realizacja wybranych zadań zespołu snajper/obserwator w ramach misji SOF.

**2. Sniper Weapon System:** konserwacja osobistego i zespołowego sprzętu optycznego; montaż NVD na SWS; konserwacja SWS; przygotowanie SWS do infiltracji.

**3. Ballistics:** określanie odległości nieuzbrojonym okiem; określanie odległości środkami mechanicznymi/optycznymi; angażowanie celów wg teorii balistycznej systemu; korekty celownika na wiatr i warunki meteo; określanie punktu trafienia poprzez odczyt śladu pocisku (bullet trace).

**4. Tracking:** stosowanie technik/kategorii obserwacji wzmacniających zapamiętywanie szczegółów; unikanie zespołów tropiących (psy/tropiciele wzrokowi); demonstrowanie technik tropienia wzrokowego.

**5. Concealment:** wybór linii natarcia; stosowanie metod cichego przemieszczania; maskowanie siebie i sprzętu; konstrukcja ghillie suit; budowa stanowisk snajperskich (hides); kamuflaż siebie i sprzętu.

**6. Marksmanship:** stosowanie czterech fundamentów strzelania; przyjmowanie wspartych pozycji strzeleckich; regulacja przyrządów mechanicznych i celownika optycznego M24; angażowanie celów stacjonarnych/ruchomych/snap; zerowanie SWS; przygotowanie karty ostrzału; angażowanie celów z NVD i przy ograniczonej widoczności; strzelanie z wybranych systemów US/obcych/specjalnych/przestarzałych; zerowanie NVD w świetle dziennym; angażowanie celów na maksymalnym zasięgu skutecznym; planowanie operacji w terenie miejskim; angażowanie celów na nierównym terenie.`,
    },
    {
      id: "collective-tasks",
      title: "Zadania zespołowe (Collective Tasks)",
      page: "B-3",
      body: `Pięć głównych zadań zespołowych ocenianych metodą GO/NO-GO, każde z warunkami (conditions), standardami i przeciwstawnym zadaniem OPFOR:

**Move Tactically (7-5-1825)** — zespół porusza się niewykryty, zgodnie z METT-TC i środkami kontroli graficznej. Standardy: brak strat własnych, dotarcie na miejsce w wyznaczonym czasie i trasie. Kluczowe elementy: trasa omija znane pozycje OPFOR, oferuje ukrycie; obserwator jako point man (sektor 9-3 zegara), snajper za nim (sektor 3-9); interwał ≤ 20 m; techniki poruszania się (low/medium/high crawl, hand-and-knee, marsz). *OPFOR:* wykrywa i opóźnia zespół, zadaje straty.

**Select/Engage Targets (7-5-1869)** — zespół niszczy cel priorytetowy max. dwoma strzałami, bez strat własnych. Priorytety celów: snajper OPFOR, oficerowie, podoficerowie, zespół psa tropiącego, obsługa broni wsparcia, dowódcy/kierowcy pojazdów, personel łączności, obserwatorzy, sprzęt krytyczny (optyka, radia). Zasięg zaangażowania: **300-800 m**. Procedura: obserwator podaje poprawkę wiatru → snajper ustawia celownik → obserwator potwierdza wiatr → strzał → obserwator śledzi ślad i trafienie, przygotowuje poprawkę.

**Select/Occupy Firing Position (7-5-1871)** — stanowisko końcowe nie bliżej niż **300 m** od celu, niewykryte przy zajmowaniu. Kryteria wyboru: maksymalne pole ostrzału/obserwacji, maksymalne ukrycie przed OPFOR, ukryte drogi dojścia/odejścia, przeszkoda naturalna/sztuczna między stanowiskiem a celem.

**Estimate Range (7-5-1872)** — uśredniony szacunek odległości musi mieścić się w **±10%** rzeczywistej odległości. Metody: mapy, przyrost 100-metrowy, wygląd obiektów (appearance of objects), wzór mil-relation, użycie SWS, karta ostrzału, metoda bracketingu, kombinacja metod. Dowódca zespołu porównuje szacunki obu snajperów i podejmuje ostateczną decyzję.

**Debrief (7-5-1809)** — po misji, wszyscy członkowie zespołu i oficer zatrudnienia snajperów (sniper employment officer) obecni; komplet informacji (karta ostrzału, szkic terenu, dziennik) zebrany i zapisany w prawidłowym formacie, w bezpiecznym miejscu za FLOT, odprawa w porządku chronologicznym.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "W jakim zakresie odległości zespół snajperski ma angażować cel priorytetowy wg zadania Select/Engage Targets?",
      options: ["100-300 m", "300-800 m", "500-1000 m", "800-1500 m"],
      correctIndex: 1,
      explanation: "Standard zadania 7-5-1869 wymaga zaangażowania celu priorytetowego w zasięgu 300-800 m, maksymalnie dwoma strzałami.",
    },
    {
      id: "q2",
      question: "Jaka jest dopuszczalna tolerancja błędu przy szacowaniu odległości w zadaniu Estimate Range?",
      options: ["±2%", "±5%", "±10%", "±20%"],
      correctIndex: 2,
      explanation: "Uśredniony szacunek zespołu musi mieścić się w granicach ±10% rzeczywistej odległości.",
    },
    {
      id: "q3",
      question: "Jaki jest minimalny dystans stanowiska ogniowego od celu wg zadania Select/Occupy Firing Position?",
      options: ["100 m", "200 m", "300 m", "600 m"],
      correctIndex: 2,
      explanation: "Stanowisko końcowe nie może być bliżej niż 300 m od obszaru celu.",
    },
    {
      id: "q4",
      question: "Jaki jest maksymalny interwał między obserwatorem a snajperem podczas taktycznego przemieszczania się?",
      options: ["5 metrów", "20 metrów", "50 metrów", "100 metrów"],
      correctIndex: 1,
      explanation: "Interwał między obserwatorem (point man) a snajperem nie powinien przekraczać 20 metrów.",
    },
    {
      id: "q5",
      question: "Który obszar tematyczny METL obejmuje budowę ghillie suit i stanowisk snajperskich?",
      options: ["Ballistics", "Tracking", "Concealment", "Marksmanship"],
      correctIndex: 2,
      explanation: "Obszar 5, Concealment, obejmuje m.in. konstrukcję ghillie suit i budowę stanowisk (hides).",
    },
    {
      id: "q6",
      question: "Kto musi być obecny podczas odprawy (Debrief) po misji?",
      options: [
        "Tylko snajper",
        "Zespół snajperski, S-2, oficer zatrudnienia snajperów i dowódca batalionu (lub przedstawiciel)",
        "Wyłącznie dowódca jednostki",
        "Zespół snajperski i lekarz",
      ],
      correctIndex: 1,
      explanation: "Odprawa wymaga obecności całego zespołu snajperskiego, S-2, oficera zatrudnienia snajperów oraz dowódcy batalionu lub jego przedstawiciela.",
    },
  ],
  flashcards: [
    { id: "f1", term: "METL", definition: "Mission-Essential Task List — lista zadań kluczowych definiująca, co snajper (MOS 18, Skill Level 3) musi umieć wykonać, z podziałem na zadania indywidualne i zespołowe." },
    { id: "f2", term: "GO/NO-GO", definition: "System oceny zadań zespołowych — każdy krok zadania oceniany binarnie jako wykonany poprawnie lub nie." },
    { id: "f3", term: "OPFOR", definition: "Opposing Force — siła przeciwna symulowana podczas ćwiczeń, z własnymi zadaniami i standardami reakcji na działania snajpera." },
    { id: "f4", term: "Sniper employment officer", definition: "Oficer odpowiedzialny m.in. za wyznaczenie miejsca i prowadzenie odprawy (debriefingu) zespołu snajperskiego po misji." },
    { id: "f5", term: "FLOT", definition: "Forward Line of Own Troops — odprawa zespołu snajperskiego musi się odbywać w bezpiecznym miejscu za tą linią." },
    { id: "f6", term: "Arc of observation", definition: "Wyznaczony sektor obserwacji, który snajper/obserwator musi stale monitorować — jedno z zadań indywidualnych obszaru 1." },
    { id: "f7", term: "Bracketing method", definition: "Jedna z metod szacowania odległości wymienionych w zadaniu Estimate Range, obok map, przyrostu 100 m, wyglądu obiektów, wzoru mil-relation i użycia SWS." },
    { id: "f8", term: "Priorytety celów zespołu snajperskiego", definition: "Kolejność wg METL: snajper OPFOR, oficerowie, podoficerowie, zespół psa tropiącego, obsługa broni wsparcia, dowódcy/kierowcy pojazdów, łączność, obserwatorzy, sprzęt krytyczny." },
    { id: "f9", term: "Task steps and performance measures", definition: "Szczegółowe kroki każdego zadania zespołowego METL, oceniane indywidualnie jako GO lub NO-GO, z oznaczeniem zadań liderskich (*) i krytycznych (+)." },
    { id: "f10", term: "Sector obserwatora i snajpera podczas ruchu", definition: "Obserwator (point man) obserwuje sektor od 9 do 3 zegara, snajper od 3 do 9 — wzajemnie uzupełniające się pola obserwacji." },
  ],
};
