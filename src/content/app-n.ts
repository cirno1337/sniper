import type { Chapter } from "../types/content";

export const appN: Chapter = {
  id: "app-n",
  kind: "appendix",
  number: "N",
  title: "Sniper Range Complex",
  summary:
    "Wymagania i przykładowy układ kompleksu poligonowego do szkolenia snajperów — grupowanie strzelnic ognia ostrego dla ograniczenia kosztów budowy i terenu, oraz zaplecze administracyjno-szkoleniowe SOTIC.",
  sections: [
    {
      id: "range-requirements",
      title: "Wymagania kompleksu poligonowego",
      page: "N-1",
      body: `Szkolenie snajperskie wymaga blisko rozmieszczonych strzelnic zaprojektowanych do prowadzenia programów szkolenia początkowego lub podtrzymującego. Poszczególne strzelnice powinny umożliwiać szkolenie i testowanie w zakresie: strzelania polowego (field fire), obserwacji, szacowania odległości i ćwiczeń skradania się (stalking).

**Zasady projektowania kompleksu:**
- Strzelnice ognia ostrego powinny być zgrupowane razem, by ograniczyć koszty budowy i zajęcie terenu poprzez łączenie stref zagrożenia (surface danger areas).
- Ustawianie celów, ocena wyników i omawianie błędów ze studentami wymaga poruszania się wzdłuż strzelnicy, podczas gdy sąsiednie strzelnice są w użyciu — trzeba to uwzględnić w układzie.
- Obszary do szkolenia fieldcraft i innych ćwiczeń powinny być wystarczająco blisko, by utrzymać tempo szkolenia, ale nie kolidować z trwającymi ćwiczeniami ognia ostrego.
- Strzelnice powinny być samowystarczalne, z zintegrowanymi budynkami administracyjnymi, salami wykładowymi i magazynami.

**Przykładowy plan rozwoju kompleksu (Figure N-1):**
- **Strzelnica polowa 1600 m** (do kalibru .338) — po jednej stronie kompleksu.
- **Strzelnica polowa 2000 m** (do kalibru .50) — po drugiej stronie.
- **Strzelnica KD (known distance) 1000 m z fasadą miejską** (oświetlona) — do treningu miejskiego w warunkach ograniczonej widoczności.
- **Druga strzelnica KD 1000 m** (bez fasady miejskiej).
- Centralnie usytuowany budynek administracyjny/magazynowy.`,
      figures: [
        {
          id: "fig-n1",
          src: "/images/app-n/fig-n1-range-complex.png",
          caption: "Figure N-1. Sniper Range Complex — układ kompleksu poligonowego (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "kd-ranges-sotic",
      title: "Strzelnice KD i kompleks SOTIC",
      page: "N-2",
      body: `**Proponowane strzelnice KD (Figure N-2):** 12 stanowisk ognia (8 pokazanych na diagramie) w odstępach co 100 m od 100 do 900 m, z reflektorami między stanowiskami dla szkolenia nocnego. Po stronie celów: 4-piętrowe stanowisko miejskie (urban hide) z platformą strzelecką na dachu, oraz 3-piętrowa fasada miejska z celami typu snap i ruchomymi (movers) na dystansach 0–100 m — obejmująca cele nieruchome/pochylone (oblique), typu snap/deliberate oraz ruchome, poruszane na wózkach (target dolleys).

**Kompleks SOTIC (Figure N-3):** dwie strzelnice KD 1000 m (A i B), każda z 12 stanowiskami ognia, rozdzielone centralnym budynkiem. Zaplecze administracyjne obejmuje: symulator, magazyn/czyszczenie broni studentów, zbrojownię SOTIC, magazyn SOTIC, biura/latryny/sale wykładowe, parking dla studentów i kadry, punkt ASP (Ammunition Supply Point) oraz przestrzeń zarezerwowaną pod przyszłą rozbudowę.

Taki układ pozwala prowadzić jednocześnie kilka grup studentów na różnych dystansach i w różnych scenariuszach (pole otwarte / teren miejski / dzień / noc), przy minimalnym przemieszczaniu się między obszarem szkolenia a zapleczem administracyjnym.`,
      figures: [
        {
          id: "fig-n2",
          src: "/images/app-n/fig-n2-kd-ranges.png",
          caption: "Figure N-2. Proposed KD Ranges — proponowany układ strzelnic KD (oryginał z FM 3-05.222).",
        },
        {
          id: "fig-n3",
          src: "/images/app-n/fig-n3-sotic-compound.png",
          caption: "Figure N-3. SOTIC Compound — kompleks szkoleniowy SOTIC (oryginał z FM 3-05.222).",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Dlaczego strzelnice ognia ostrego powinny być zgrupowane razem?",
      options: [
        "By ograniczyć koszty budowy i zajęcie terenu poprzez łączenie stref zagrożenia",
        "Bo tak jest łatwiej dojechać",
        "Żeby uniknąć hałasu",
        "To wymóg prawny bez uzasadnienia taktycznego",
      ],
      correctIndex: 0,
      explanation: "Grupowanie strzelnic pozwala łączyć strefy zagrożenia (surface danger areas), redukując koszty budowy i zajęcie terenu.",
    },
    {
      id: "q2",
      question: "Do jakiego maksymalnego kalibru przeznaczona jest strzelnica polowa 2000 m z Figure N-1?",
      options: [".308", ".338", ".50", "7,62 mm NATO"],
      correctIndex: 2,
      explanation: "Strzelnica polowa 2000 m jest przeznaczona do kalibru .50, podczas gdy strzelnica 1600 m obsługuje do .338.",
    },
    {
      id: "q3",
      question: "Ile stanowisk ognia przewiduje proponowany układ strzelnic KD?",
      options: ["8", "10", "12", "20"],
      correctIndex: 2,
      explanation: "Figure N-2 pokazuje 12 stanowisk ognia (8 z nich zilustrowano na diagramie) w odstępach co 100 m.",
    },
    {
      id: "q4",
      question: "Co charakteryzuje jedną z dwóch strzelnic KD 1000 m w proponowanym kompleksie?",
      options: [
        "Fasadę miejską oświetloną do treningu nocnego",
        "Tor przeszkód wodnych",
        "Wyłącznie cele stacjonarne",
        "Brak stanowisk ognia",
      ],
      correctIndex: 0,
      explanation: "Jedna ze strzelnic KD 1000 m ma fasadę miejską (urban facade), oświetloną, umożliwiającą trening w warunkach ograniczonej widoczności.",
    },
    {
      id: "q5",
      question: "Co obejmuje zaplecze administracyjne kompleksu SOTIC pokazane na Figure N-3?",
      options: [
        "Tylko parking",
        "Symulator, zbrojownię, magazyny, biura/sale wykładowe i punkt ASP",
        "Wyłącznie kwatery mieszkalne",
        "Basen szkoleniowy",
      ],
      correctIndex: 1,
      explanation: "Kompleks SOTIC obejmuje symulator, zbrojownię SOTIC, magazyny, biura/latryny/sale wykładowe, parkingi oraz punkt zaopatrzenia w amunicję (ASP).",
    },
  ],
  flashcards: [
    { id: "f1", term: "Surface danger area", definition: "Strefa zagrożenia wokół strzelnicy ogniowej — łączenie tych stref dla sąsiadujących strzelnic ogranicza koszty budowy i zajęcie terenu." },
    { id: "f2", term: "KD range (Known Distance)", definition: "Strzelnica o znanych, stałych odległościach do celów, używana do treningu strzeleckiego i testowania celności." },
    { id: "f3", term: "Target dolleys", definition: "Wózki do przesuwania celów na strzelnicy KD, używane przy celach ruchomych (movers)." },
    { id: "f4", term: "Field shoot", definition: "Strzelnica polowa na duży dystans (1600 m lub 2000 m w przykładowym kompleksie) do strzelań dalekiego zasięgu odpowiednim kalibrem." },
    { id: "f5", term: "ASP (Ammunition Supply Point)", definition: "Punkt zaopatrzenia w amunicję w kompleksie SOTIC, zlokalizowany przy zapleczu administracyjnym." },
    { id: "f6", term: "Urban facade (na strzelnicy)", definition: "Fasada budynku miejskiego wbudowana w strzelnicę KD, z celami typu snap i movers, do treningu w warunkach miejskich." },
  ],
};
