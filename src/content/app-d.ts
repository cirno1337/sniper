import type { Chapter } from "../types/content";

export const appD: Chapter = {
  id: "app-d",
  kind: "appendix",
  number: "D",
  title: "Lista sprzętu misyjnego",
  summary:
    "Zespół snajperski dobiera rodzaj i ilość sprzętu w oparciu o analizę METT-TC i nosi wyłącznie to, co niezbędne do misji. Ten dodatek zbiera przykładowe listy: broń i amunicję, sprzęt specjalny, umundurowanie, wyposażenie opcjonalne oraz narzędzia specjalne (MOUT) — nie jest to lista zamknięta ani obowiązkowa w całości.",
  sections: [
    {
      id: "arms-special",
      title: "Broń, amunicja i sprzęt specjalny",
      page: "D-1",
      body: `**Broń i amunicja (Table D-1):**

| Snajper | Obserwator |
|---|---|
| M24 SWS z celownikiem M3A | M4/M16/M203 (z NVD wg potrzeb) |
| Naboje M118/M852 | Amunicja do karabinka, magazynki |
| Dziennik strzelecki, dziennik misji, karty ostrzału, tabele wiatru, dane na nachylenie | M9 (pistolet 9 mm) + magazynki + amunicja 9 mm |
| M9 (pistolet 9 mm) + magazynki + amunicja 9 mm | Bagnet M9 |
| Bagnet M9 | Naboje 40 mm HE / antypersonalne (jeśli M203) |
| Granaty odłamkowe M67 | Granaty M67, 2× CS, 2× hukowe (MOUT) |
| 2× CS, 2× hukowe (MOUT) | — |
| Mina M18A1 Claymore, komplet | — |

**Sprzęt specjalny (Table D-2):** zestawy czyszczące (SWS/broń obserwatora/pistolet), zestaw wdrożeniowy M24, zapasowa słuchawka i baterie do radia (BA-4386 lub litowe), instrukcje łączności (SOI), gogle NVD AN/PVS-5/7 + zapasowe baterie, pace cord (sznur do liczenia kroków), saperka z pokrowcem, 50 stóp linki 550, race sygnalizacyjne (zielona/czerwona), 2× granaty dymne HC, taśma miernicza 25 stóp.

Po stronie obserwatora dodatkowo: radio AN/PRC-77/119/104 z kompletem akcesoriów (antena długa i taśmowa, słuchawka, bateria), luneta obserwacyjna M49 20x na trójnogu M15 (lub równoważna 15-20x/15-45x), lornetka M19/M22 (najlepiej 7×50 ze skalą mil), „cheat book" do szacowania odległości, 300 stóp przewodu polowego WD-1, taśma „100 mph", kalkulator z zapasową baterią, ładownica, 10× woreczki wodoszczelne, narzędzie liniowca.`,
    },
    {
      id: "uniform-optional",
      title: "Umundurowanie i sprzęt opcjonalny",
      page: "D-3",
      body: `**Umundurowanie i wyposażenie osobiste (Table D-3):** obuwie (dżungla/pustynia/zima/bojowe), 2× komplet BDU, czarne rękawice skórzane, bielizna, 8 par skarpet wełnianych OD, pas, nakrycie głowy, identyfikatory (ID tags/karta), zegarek wodoodporny ze wskazówką sekundową, nóż survivalowy, plecak ALICE z ramą, 2× worek wodoodporny, 2× manierka 2-kwartowa, tabletki do uzdatniania wody, kompletne LBE, latarka z czerwonym filtrem, MRE, kabura pistoletu, 2× kredka kamuflażowa, przybory do pisania, kompas lensatic, mapy, protraktor, poncho + wkładka, **2× kompletny ghillie suit**, 2× maska ochronna/kombinezon MOPP, przybory higieniczne.

**Sprzęt opcjonalny (Table D-4)** — dobierany wg misji: kamizelka pod M203, siatka maskująca pustynna, naturalna juta, taśma refleksyjna, panel VS-17, światło stroboskopowe z filtrami, uprząż SPIE, lina 12 stóp, karabinki (snap links), lina 120 stóp, balsam/krem z filtrem, lusterko sygnalizacyjne, race z pistoletu sygnałowego, światła chemiczne (w tym IR), kamizelka kuloodporna, welon snajperski (sniper veil), zestaw do szycia, środek na owady, śpiwór, ochraniacze kolan/łokci, zestaw przetrwania — a po stronie sprzętu technicznego: worek transportowy na karabin (drag bag), tłumik pistoletu, 2,5 funta C4 z zapalnikami, dwójnóg/trójnóg do karabinu, puste worki na piasek, ochronniki słuchu, termometr, **dalmierz laserowy, termowizor, wzmacniacz obrazu KN-200/250**, lornetka kieszonkowa, aparat 35 mm, kamera wideo, sprzęt satelitarny, radio krótkiego zasięgu z mikrofonem szeptowym, anteny polowe, formaty raportowania, urządzenie szyfrujące, egzemplarz podręcznika szkoleniowego SO.`,
    },
    {
      id: "mout-transport",
      title: "Narzędzia specjalne (MOUT) i transport sprzętu",
      page: "D-5",
      body: `**Narzędzia specjalne do działań w terenie miejskim (Table D-5):** łom, obcęgi, śrubokręt, młotek z gumową głowicą, przecinak do szkła, wiertarka z wiertłami do muru, nożyce do metalu, dłuto, świder, wytrychy (skeleton keys, cobra pick), nożyce do bolców, piła (ręczna/do metalu), młot kowalski, siekiera, taran, piła spalinowa, palnik tnący, strzelba, farba w spray'u, stetoskop, mapy/plany ulic, zdjęcia lotnicze i panoramiczne, gwizdek, taśma fluorescencyjna, kajdanki jednorazowe (flex cuffs), kłódki, system wykrywania wtargnięcia (pułapki), przenośne reflektory, gotówka (US i lokalna), strój cywilny.

**Transport dodatkowego sprzętu:** planowane zrzuty lotnicze/pojazdowe i techniki cachowania eliminują potrzebę noszenia nadmiaru sprzętu. Alternatywnie, przy współpracy z patrolem bezpieczeństwa (technika stay-behind, patrz Rozdział 5), sprzęt zespołu może zostać rozdzielony między członków patrolu i pozostawiony w ORP (objective rally point) po dotarciu na miejsce. Po zakończeniu misji zespół może zdeponować sprzęt w skrytce do późniejszego odbioru lub wynieść go tą samą drogą, którą przybył.

*Uwaga: to nie jest lista zamknięta — nie wszystkie pozycje są noszone na każdej misji; dobór następuje zawsze poprzez analizę METT-TC.*`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaka mina jest wymieniona w standardowym wyposażeniu snajpera (Table D-1)?",
      options: ["M15", "M18A1 Claymore", "M21", "M14"],
      correctIndex: 1,
      explanation: "Table D-1 wymienia kompletną minę M18A1 (Claymore) w wyposażeniu snajpera.",
    },
    {
      id: "q2",
      question: "Ile kompletnych zestawów ghillie suit przewiduje standardowa lista umundurowania zespołu?",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      explanation: "Table D-3 wymienia 2 kompletne ghillie suit — po jednym dla snajpera i obserwatora.",
    },
    {
      id: "q3",
      question: "Która metoda pozwala uniknąć noszenia nadmiaru sprzętu przez zespół snajperski wg Dodatku D?",
      options: [
        "Zawsze noszenie pełnego wyposażenia",
        "Zrzuty lotnicze/pojazdowe, cachowanie i technika stay-behind z patrolem bezpieczeństwa",
        "Rezygnacja z map i kompasu",
        "Współdzielenie broni między członkami zespołu",
      ],
      correctIndex: 1,
      explanation: "Zrzuty, cachowanie i stay-behind z patrolem bezpieczeństwa (rozdzielenie sprzętu wśród członków patrolu do ORP) eliminują potrzebę noszenia całego sprzętu przez sam zespół.",
    },
    {
      id: "q4",
      question: "Który z poniższych przedmiotów NIE znajduje się na liście sprzętu opcjonalnego (Table D-4)?",
      options: ["Dalmierz laserowy", "Termowizor", "M24 SWS", "Tłumik pistoletu"],
      correctIndex: 2,
      explanation: "M24 SWS to podstawowa broń snajpera z Table D-1 (broń i amunicja), a nie sprzęt opcjonalny.",
    },
    {
      id: "q5",
      question: "Jakie narzędzie z listy specjalnej (MOUT) służy do cichego wejścia bez klucza?",
      options: ["Przecinak do szkła", "Wytrychy (skeleton keys, cobra pick)", "Stetoskop", "Taśma fluorescencyjna"],
      correctIndex: 1,
      explanation: "Wytrychy typu skeleton keys i cobra pick służą do otwierania zamków bez klucza podczas działań MOUT.",
    },
  ],
  flashcards: [
    { id: "f1", term: "METT-TC", definition: "Mission, Enemy, Terrain and weather, Troops and support available, Time available, Civil considerations — analiza determinująca dobór i ilość sprzętu zespołu snajperskiego." },
    { id: "f2", term: "Table D-1", definition: "Lista broni i amunicji: M24 SWS z M3A dla snajpera, karabinek serwisowy z NVD dla obserwatora, pistolety M9, granaty, mina M18A1 Claymore." },
    { id: "f3", term: "Table D-2", definition: "Lista sprzętu specjalnego: zestawy czyszczące, radio z akcesoriami, luneta obserwacyjna, lornetka, kalkulator, zapasowe baterie." },
    { id: "f4", term: "ORP", definition: "Objective Rally Point — miejsce, w którym patrol bezpieczeństwa może pozostawić sprzęt zespołu snajperskiego przy technice stay-behind." },
    { id: "f5", term: "Sniper veil", definition: "Welon snajperski z listy sprzętu opcjonalnego, maskujący głowę, lunetę i wyrzucane łuski." },
    { id: "f6", term: "Cheat book", definition: "Poglądowy zeszyt pomocniczy do szacowania odległości, wymieniony w sprzęcie specjalnym obserwatora." },
    { id: "f7", term: "Drag bag", definition: "Worek transportowy na karabin z listy sprzętu opcjonalnego, ułatwiający dyskretne przenoszenie/ciągnięcie SWS." },
    { id: "f8", term: "Stay-behind technique", definition: "Metoda, w której zespół snajperski pozostaje w terenie po odejściu patrolu bezpieczeństwa, minimalizując ilość noszonego sprzętu (opisana też w Rozdziale 5)." },
    { id: "f9", term: "Table D-5 (MOUT)", definition: "Narzędzia specjalne do działań w terenie miejskim: łom, wiertarka, wytrychy, piła, taran, kajdanki jednorazowe, gotówka, strój cywilny." },
    { id: "f10", term: "KN-200/250", definition: "Wzmacniacz obrazu (image intensifier) z listy sprzętu opcjonalnego, opisany szerzej w Rozdziale 2 jako nakładka na celownik dzienny M3A." },
  ],
};
