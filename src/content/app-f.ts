import type { Chapter } from "../types/content";

export const appF: Chapter = {
  id: "app-f",
  kind: "appendix",
  number: "F",
  title: "Foreign/Nonstandard Sniper Weapon Systems Data",
  summary:
    "Katalog systemów broni snajperskiej innych krajów, które snajper SF może napotkać podczas rozmieszczenia — jako uzbrojenie sojusznika, przeciwnika lub siły partnerskiej. Lista nie jest wyczerpująca; kraj podany to ostatni kraj użytkowania lub producent.",
  sections: [
    {
      id: "continental-europe",
      title: "Europa kontynentalna",
      page: "F-1",
      body: `| Kraj | Model | Kaliber | Waga | Długość całk. | Celownik (BDC) | Uwagi |
|---|---|---|---|---|---|---|
| Austria | Steyr SSG-69 | 7,62×51 NATO (lub .243 Win) | 10,3 funta | 44,5 cala | Kahles ZF69 6×42, 100-800 m | Kolba syntetyczna z regulacją, spust dwustopniowy (set trigger), szybkozłączne pierścienie bez utraty zera |
| Austria | Steyr SSG-PII | 7,62×51 NATO | — | — | Jak SSG-69 | Wersja policyjna, ciężka lufa, bez przyrządów mechanicznych |
| Belgia | FN Model 30-11 | 7,62×51 NATO | 15,5 funta | 45,2 cala | FN 4×28, 100-600 m | Akcja Mauser, dwójnóg z km MAG |
| Kanada | Parker Hale C3 | 7,62×51 NATO | 12,8 funta | 48,0 cala | Kahles ZF69 6×42, 100-800 m | Zmodyfikowany karabin sportowy Model 82, akcja Mauser, przyjęty 1975 |
| Czechy/Słowacja | VZ 54 (Model 54) | 7,62×54R | 9,0 funta (z lunetą) | 45,2 cala | — | Magazynek pudełkowy 10 naboi, V0 2659 fps, zasięg skuteczny 1000 m; podobny do sowieckiego M1891/30, krótszy i lżejszy |
| Finlandia | Vaime SSR Mk2 | 7,62×51 NATO | 11 funtów | 46,5 cala | różne (adaptery) | Zintegrowany, samooczyszczający się tłumik; amunicja subsoniczna (185 gr @ 1050 fps); zasięg skuteczny z tłumikiem 200 m; brak przyrządów mechanicznych |
| Francja | FR-F1 | 7,62×51 NATO lub 7,5×54 Fr. | 11,9 funta | 44,8 cala | Model 53, 3,8× | Akcja MAS 1936, przyjęty 1966, dwójnóg składany do wnęk łoża |
| Francja | FR-F2 | 7,62×51 NATO | 13,6 funta | 47,2 cala | 6×42 lub 1,5-6×42 Schmidt & Bender, 100-600 m | Zaktualizowany F1; termiczna osłona lufy redukująca miraż i sygnaturę cieplną |
| Niemcy | Mauser SP66 | 7,62×51 NATO | — | — | Zeiss-Diavari ZA 1,5-6× | Akcja Mauser short-action, kolba typu thumbhole, tłumik płomieni i hamulec wylotowy |
| Niemcy | Walther WA 2000 | .300 Win Mag (lub 7,62×51/7,5×55 Szwajc.) | 18,3 funta | 35,6 cala (bull-pup!) | Schmidt & Bender 2,5-10×56, 100-600 m | Samopowtarzalny gazowy bull-pup zbudowany specjalnie do snajpingu; demontowalna luneta bez utraty zera |
| Niemcy | H&K PSG-1 | 7,62×51 NATO | 17,8 funta | 47,5 cala | Hensoldt 6×42 z podświetlaną siatką, 100-600 m | Samopowtarzalny na bazie G-3; regulacje elewacji/windażu = 1 cm (0,4 cala) przesunięcia na 100 m na klik |
| Rumunia | FPK (Model FPK, 1970) | 7,62×54R | 10,6 funta | 45,4 cala | LSP (rumuńska kopia PSO-1), 100-1000 m (+ punkty odn. 1100/1200/1300 m) | Zmodyfikowana akcja AKM pod dłuższy nabój M1891 Mosin/Nagant; magazynek własnej konstrukcji 10 naboi |
| Hiszpania | C-75 | 7,62×51 NATO | 8,14 funta | — | różne (mocowanie frezowane w komorze) | Akcja Mauser 98, siły specjalne |
| Szwajcaria | SIG Model 510-4 | 7,62×51 NATO | 12,3 funta | 39,9 cala | — | Odrzut opóźniony (delayed blowback), magazynek 20 naboi, semi- lub full-auto, V0 2591 fps |
| Włochy | Beretta Sniper Rifle | 7,62×51 NATO | 15,8 funta (z dwójnogiem) | 45,9 cala | Zeiss-Diavari ZA 1,5-6× | Akcja bolt-action, magazynek pudełkowy 5 naboi, kolba drewniana typu thumbhole |
| była Jugosławia | M76 | 7,92×57, 7,62×54R lub 7,62×51 NATO | 11,2 funta | 44,7 cala | 4×, 100-1000 m | Samopowtarzalny na bazie rodziny FAZ; mocowanie umożliwia montaż noktowizji |`,
    },
    {
      id: "united-kingdom",
      title: "Wielka Brytania",
      page: "F-8",
      body: `| Model | Kaliber | Waga | Długość całk. | Celownik (BDC) | Uwagi |
|---|---|---|---|---|---|
| Lee Enfield No. 4 Mk 1 (T) | .303 British | 11,5 funta | 44,5 cala | Telescope No. 32, 3×, 100-1000 jardów | Przestarzały, ale wciąż spotykany na świecie; mocowanie lunety z lewej strony komory, drewniany podpoliczek |
| **L42A1** (obecny standard) | 7,62×51 NATO | 12,5 funta | 46,5 cala | L1A1, 3×, 0-1000 m | Konwersja No. 4 Mk 1 (T), przyjęty 1970; luneta No. 32 odnowiona i przekalibrowana na metry |
| Parker-Hale Model 82 | 7,62×51 NATO | 12,8 funta | 48,0 cala | Pecar V2S 4-10× | Akcja Mauser 98, zmilitaryzowana wersja karabinu sportowego Model 1200 TX |
| Parker-Hale Model 85 | 7,62×51 NATO | 12,5 funta | 47,5 cala | Swarovski ZFM 6×42 (100-800 m) lub 10×42 (100-1000 m) | Kolba McMillan z włókna szklanego; szybkozłączna luneta odsłania zapasowy celownik mechaniczny 100-900 m |
| **L96A1** (Accuracy International PM) | 7,62×51 NATO, .243 Win, 7 mm Rem Mag, .300 WM | 15 funtów | 47,0 cala | 6×42 lub 12×42 Schmidt & Bender | Rama aluminiowa, kolba typu thumbhole; celność 0,75 MOA na 1000 m; ukryty monopod sprężynowy w kolbie zastępujący „sand sock” |

*L96A1 i jego następca L115A3 (kaliber .338 Lapua Magnum) to obecnie najbardziej rozpoznawalne brytyjskie systemy snajperskie.*`,
      figures: [
        {
          id: "web-l115a3",
          src: "/images/app-f/web-l115a3.jpg",
          caption:
            "Zdjęcie poglądowe: brytyjski karabin snajperski L115A3 (rodzina Accuracy International, następca L96A1; źródło: Wikimedia Commons, Open Government Licence, UK MOD) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "soviet-warsaw-pact",
      title: "Blok sowiecki/Warszawski i Chiny",
      page: "F-10",
      body: `**SVD (Dragunov)** — samopowtarzalny karabin snajperski, zastąpił M1891/30 w 1963 r. Mechanizm zamkowy podobny do AK/AKM, ale z systemem tłoka o krótkim skoku niezwiązanym z suwadłem zamkowym. Tłumik płomienia typu prong podobny do współczesnej broni US. Przyrządy mechaniczne kalibrowane do 2000 m; celownik **PSO-1 4×** z podświetlaną siatką (bateryjnie) i wbudowanym metaskopem wykrywającym aktywne źródła podczerwieni. Pokrętło windażu: 2 MOA/klik, 4 MOA/cyfra; siatka ma 10 linii pionowych po każdej stronie celownika (co 4 MOA = 40 MOA zasięgu w każdą stronę).

| Model | Kaliber | Waga | Długość całk. | Celownik (BDC) | Amunicja |
|---|---|---|---|---|---|
| SVD (Dragunov) | 7,62×54R | 9,7 funta | 47,9 cala | PSO-1 4×, 0-1300 m | LPS ball (149 gr @ 2800 fps) |
| M1891/30 (Mosin-Nagant) | 7,62×54R | 11,3 funta | 48,5 cala | PU 3,5× lub PE 4×, 100-2000 m | L lub LPS ball (149 gr @ 2800 fps) |
| Norinco Type 79 (Chiny, ozn. importu USA: NDM-86) | jak SVD | jak SVD | jak SVD | jak SVD | Wierna kopia sowieckiego SVD, przyjęta 1980; często przerobione/przemarkowane oryginalne SVD sprzedane do ChRL |

**Identyfikacja amunicji sowieckiej/Warszawskiej:**
- **M1908 L ball** — pocisk ołowiany 149 gr, gładka miedziana koszulka bez malowania, ok. 2800 fps z M1891/30.
- **LPS ball** — 149 gr boat-tail, koszulka stalowa platerowana, rdzeń miękkiej stali; grot biały/srebrny (odróżnia od L ball), ok. 2820 fps.
- **M1930 heavy ball (Type D)** — 182 gr, grot żółty, ok. 2680 fps z M1891/30 lub SVD.
- Zasada ogólna: gdy denko łuski zorientowane tak, by odczytać oba numery, numer fabryki jest na godz. 12, data produkcji na godz. 6.`,
      figures: [
        {
          id: "web-svd",
          src: "/images/app-f/web-svd-dragunov.jpg",
          caption:
            "Zdjęcie poglądowe: instruktor demonstrujący sowiecki karabin SVD Dragunov (źródło: Wikimedia Commons, public domain, US DoD, 1984) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "other-nations",
      title: "Izrael i inne systemy",
      page: "F-6",
      body: `**Izrael — Galil Sniping Rifle:** rozwinięcie sowieckiej konstrukcji AK-47 (podobnie jak cała rodzina Galil), z cięższą lufą i tłumikiem płomieni; może być wyposażony w tłumik dźwięku i strzelać amunicją subsoniczną. Kolba pistoletowa, regulowany podpoliczek, spust dwustopniowy, dwójnóg z tyłu łoża.

| Model | Kaliber | Waga | Długość całk. | Celownik (BDC) |
|---|---|---|---|---|
| Galil Sniping Rifle | 7,62×51 NATO | 18,3 funta | 43,9 cala | Nimrod 6×40, 100-1000 m, z celownikami trytowymi do strzelania nocnego |

Prędkość wylotowa: 2672 fps (amunicja FN Match) lub 2557 fps (M118 Special Ball). Specyfikacja karabinu M21 używanego również przez Izrael — patrz sekcja o systemach USA.

*Specyfikacje karabinu M21 znajdują się w sekcji poświęconej systemom Stanów Zjednoczonych.*`,
    },
    {
      id: "us-nonstandard",
      title: "Systemy USA poza M24",
      page: "F-12",
      body: `**M21 Sniper System** — od 1968 r. National Match M-14 dostosowywane do roli snajperskiej w Wietnamie; typ-klasyfikowany jako M21 w 1975 r. z celownikiem ART I (potem ART II, później modernizowany do M3A Ultra).

| Model | Typ | Kaliber | Waga | Długość całk. | Celownik (BDC) | Amunicja |
|---|---|---|---|---|---|---|
| **M21** | Samopowtarzalny, magazynek 20 naboi | 7,62×51 NATO | 14,4 funta | 44,3 cala | ART I/II, 300-900 m | M118 Match/SB (173 gr @ 2610 fps) |
| **USMC M40A1** | Bolt-action, magazynek wewn. 5 naboi | 7,62×51 NATO | 14,4 funta | 44 cale | Unertl 10×, mil-dot, 100-1000 jardów | M118 Match/SB lub Federal Match (180 gr Sierra MatchKing) |
| Remington 40X/40XB/40XC/700 | Bolt-action (40XB — pojedynczy strzał) | 7,62×51 NATO, .300 WM i inne | 10-15 funtów | ~42 cale (zal. od lufy) | Leupold M1A/M3A, Unertl 10×, Bausch & Lomb 10×40 | zależna |
| Winchester Model 70 | Bolt-action, akcja square-bottom | .308 lub .300 WM | — | — | — | — |
| Iver Johnson Convertible LR | Bolt-action | 7,62×51 NATO lub 8,58×71 mm (.338/.416) | 15 funtów | 46,5 cala | różne | 8,58 mm: 250 gr HPBT @ 3000 fps |

**Systemy McMillan** — karabiny na własnych akcjach McMillan: M-86SR (.308 Win), M-86LR (.300 Win Mag), M-89 (.308, wersja tłumiona), M-87ELR/M-87R/M-88ELR (kaliber .50), M-40 (lufa McMillan .308 na akcji Remington short-action).

**Barrett Firearms** — M82, M82A1 (samopowtarzalne, kal. .50) i M90 (bolt-action, kal. .50); pełny opis M82A1 w Dodatku E. Model 82A1: 11-nabojowy magazynek, lufa żłobkowana 36,9 cala z 6-portowym hamulcem wylotowym (redukcja odrzutu o 30%), 65,9 cala długości, waga 32,9 funta, V0 2849 fps.

**Przestarzałe karabiny USA:**

| Model | Kaliber | Waga | Celownik | Uwagi |
|---|---|---|---|---|
| M1903A4 Springfield (1942) | .30 M1/M2 ball (30-06) | 9,4 funta | M84 2,2×, M73B1 Weaver lub M73 Lyman Alaska, 0-900 jardów | Standardowy karabin służbowy z chwytem pistoletowym i celownikiem optycznym; niska krotność lunety utrudniała strzelanie dalekodystansowe |
| M1C / M1D (Garand) | .30 M1/M2 ball (30-06) | 11,8 funta | M84 2,2×, 0-900 jardów | Boczne mocowanie lunety (kolba ładowana od góry); skórzana wkładka na łożu to podpora policzka pod boczną lunetę, NIE ochraniacz policzka |

Zasada ogólna dla amunicji .30-06 tych karabinów: 150 gr FMJ flat base @ 2800 fps.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaki karabin jest obecnym standardowym karabinem snajperskim Wielkiej Brytanii wg tego dodatku (konwersja Lee Enfield No. 4)?",
      options: ["L96A1", "L42A1", "Parker-Hale Model 85", "AWM"],
      correctIndex: 1,
      explanation: "L42A1, przyjęty w 1970 r., to konwersja Lee Enfield No. 4 Mark 1 (T) — oznaczony jako obecny standard w tym dodatku.",
    },
    {
      id: "q2",
      question: "Który niemiecki karabin snajperski ma unikalną konstrukcję bull-pup?",
      options: ["Mauser SP66", "H&K PSG-1", "Walther WA 2000", "G-3 SG/1"],
      correctIndex: 2,
      explanation: "Walther WA 2000 to samopowtarzalny karabin bull-pup zbudowany specjalnie do snajpingu, długość całkowita tylko 35,6 cala mimo 25,6-calowej lufy.",
    },
    {
      id: "q3",
      question: "Jaki jest kaliber sowieckiego karabinu SVD (Dragunov)?",
      options: ["7,62×39 mm", "7,62×51 mm NATO", "7,62×54 mm rimmed", "9×39 mm"],
      correctIndex: 2,
      explanation: "SVD strzela nabojem 7,62×54R (rimmed), tym samym co M1891/30, który zastąpił w 1963 roku.",
    },
    {
      id: "q4",
      question: "Po czym można odróżnić sowiecki nabój LPS ball od starszego M1908 L ball?",
      options: [
        "LPS ma dłuższą łuskę",
        "LPS ma biały/srebrny grot pocisku, L ball ma gładki miedziany grot",
        "LPS jest cięższy o 50 gr",
        "Nie da się ich odróżnić wizualnie",
      ],
      correctIndex: 1,
      explanation: "LPS ball (149 gr, boat-tail, rdzeń stalowy) ma biały lub srebrny grot, odróżniający go od gładkiego, niemalowanego miedzianego grotu starszego L ball.",
    },
    {
      id: "q5",
      question: "Jaki karabin był poprzednikiem M21 w służbie US Army w Wietnamie?",
      options: ["M1903A4", "National Match M-14", "M1D Garand", "M40"],
      correctIndex: 1,
      explanation: "Od 1968 r. National Match M-14 dostosowywano do roli snajperskiej, co doprowadziło do typ-klasyfikacji M21 w 1975 roku.",
    },
    {
      id: "q6",
      question: "Jaka jest charakterystyczna cecha stada L96A1 (Accuracy International), zastępująca funkcję amerykańskiego „sand sock”?",
      options: [
        "Wbudowany poziomnica",
        "Sprężynowy monopod ukryty w kolbie",
        "Dodatkowy uchwyt na magazynek",
        "Chłodzenie wodne lufy",
      ],
      correctIndex: 1,
      explanation: "L96A1 ma sprężynowy monopod ukryty w kolbie, w pełni regulowany co do elewacji — pełni tę samą funkcję co worek z piaskiem w US Army.",
    },
    {
      id: "q7",
      question: "Jaki celownik ma wbudowany metaskop wykrywający aktywne źródła podczerwieni?",
      options: ["Kahles ZF69", "PSO-1 (SVD)", "Unertl 10×", "L1A1"],
      correctIndex: 1,
      explanation: "Celownik PSO-1 na SVD (Dragunov) zawiera metaskop zdolny wykryć aktywne źródło podczerwieni przeciwnika.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Steyr SSG-69", definition: "Austriacki karabin snajperski, kaliber 7,62×51 NATO lub .243 Win, kolba syntetyczna, celownik Kahles ZF69 6×42." },
    { id: "f2", term: "Walther WA 2000", definition: "Niemiecki samopowtarzalny karabin bull-pup zbudowany specjalnie do snajpingu, kaliber .300 Win Mag, długość 35,6 cala." },
    { id: "f3", term: "SVD (Dragunov)", definition: "Sowiecki samopowtarzalny karabin snajperski kal. 7,62×54R, zastąpił M1891/30 w 1963 r., celownik PSO-1 4× z metaskopem IR." },
    { id: "f4", term: "PSO-1", definition: "Celownik 4× karabinu SVD z podświetlaną siatką, kalibrowany pod amunicję LPS ball, zasięg 0-1300 m." },
    { id: "f5", term: "L42A1", definition: "Brytyjski karabin snajperski, konwersja Lee Enfield No. 4 Mk 1 (T) na 7,62×51 NATO, przyjęty 1970 r., obecny standard UK wg tego dodatku." },
    { id: "f6", term: "L96A1 (Accuracy International PM)", definition: "Brytyjski karabin z ramą aluminiową i kolbą thumbhole, celność 0,75 MOA na 1000 m, sprężynowy monopod w kolbie." },
    { id: "f7", term: "LPS ball", definition: "Sowiecki nabój 7,62×54R, 149 gr boat-tail, biały/srebrny grot, ok. 2820 fps — odróżnia się od starszego L ball." },
    { id: "f8", term: "M21 Sniper System", definition: "Amerykański karabin samopowtarzalny na bazie National Match M-14, celownik ART I/II, typ-klasyfikowany 1975 r." },
    { id: "f9", term: "USMC M40A1", definition: "Karabin snajperski Korpusu Piechoty Morskiej USA na bazie Remington 700, luneta Unertl 10× z siatką mil-dot." },
    { id: "f10", term: "NDM-86", definition: "Oznaczenie importowe chińskiego Norinco Type 79 (wierna kopia SVD) sprowadzanego do USA." },
    { id: "f11", term: "Norinco Type 79", definition: "Chiński standardowy karabin snajperski, wierna kopia sowieckiego SVD, przyjęty 1980 r." },
    { id: "f12", term: "Galil Sniping Rifle", definition: "Izraelski karabin na bazie AK-47, celownik Nimrod 6×40 z celownikami trytowymi, kaliber 7,62×51 NATO." },
  ],
};
