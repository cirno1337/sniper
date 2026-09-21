import type { Chapter } from "../types/content";

export const appH: Chapter = {
  id: "app-h",
  kind: "appendix",
  number: "H",
  title: "Ballistics Chart",
  summary:
    "Dane balistyczne (Sierra Ballistics III) dla dziewięciu nabojów używanych w systemach snajperskich: trzech typów 7,62×51 mm NATO, 5,56 mm, .300 Win Mag, dwóch wariantów .338 Lapua Magnum oraz dwóch .50 cal. Dobry kandydat na przyszły interaktywny kalkulator balistyczny w aplikacji.",
  sections: [
    {
      id: "intro",
      title: "Warunki referencyjne",
      page: "H-1",
      body: `Wszystkie tabele w tym dodatku wygenerowano programem **Sierra Ballistics III** przy stałych warunkach referencyjnych (o ile nie zaznaczono inaczej): temperatura **59°F**, ciśnienie **29,53 cala Hg**, wilgotność **78%**, wiatr boczny **10 mph**, brak wiatru czołowego, kąt podniesienia lufy 0°, wysokość n.p.m. 0 stóp. Prędkość dźwięku przy tych warunkach: **1121 fps**.

Kolumny: **Range** (dystans, m), **Velocity** (prędkość, fps), **Energy** (energia, ft-lb), **Bullet Path** (wysokość toru lotu względem linii celowania — zależna od przyjętego dystansu zerowania danego naboju), **Drop** (czysty spadek balistyczny względem osi lufy), **Drift** (znos od wiatru bocznego 10 mph, cale), **Time of Flight** (czas lotu, s).

*Uwaga: oryginalne tabele w podręczniku podają wartości co 25 m do ok. 1000-1200 m. Poniżej, dla czytelności, zachowano pełną precyzję liczbową, ale z krokiem co 100 m — ten sam poziom szczegółowości, jaki sam podręcznik wybrał do własnych tabel podsumowujących. To docelowe źródło danych dla przyszłego interaktywnego kalkulatora balistycznego w aplikacji.*`,
    },
    {
      id: "nato-762",
      title: "7,62×51 mm NATO (M118, M852, M118LR)",
      page: "H-1",
      body: `**M118 Special Ball** — pocisk 173 gr, BC 0,515(H)/0,503(M)/0,491(L), zero na **100 m**, wysokość celownika 1,7 cala.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2610,0 | 2616 | −1,7 | +0,0 | +0,0 | 0,000 |
| 100 | 2420,6 | 2250 | +0,0 | −3,1 | −0,9 | 0,131 |
| 200 | 2239,1 | 1925 | −5,4 | −13,2 | −3,5 | 0,271 |
| 300 | 2065,3 | 1638 | −19,1 | −31,6 | −8,3 | 0,424 |
| 400 | 1899,8 | 1386 | −42,5 | −59,8 | −15,3 | 0,590 |
| 500 | 1742,0 | 1165 | −77,5 | −99,5 | −24,9 | 0,770 |
| 600 | 1591,9 | 973 | −126,1 | −152,9 | −37,5 | 0,967 |
| 700 | 1454,1 | 812 | −191,2 | −222,8 | −53,3 | 1,183 |
| 800 | 1330,6 | 680 | −276,1 | −312,4 | −72,7 | 1,419 |
| 900 | 1223,9 | 575 | −384,4 | −425,5 | −95,9 | 1,676 |
| 1000 | 1136,3 | 496 | −520,7 | −566,5 | −122,9 | 1,955 |

**M852 National Match** — pocisk 168 gr Match King, BC 0,462(H)/0,447(M)/0,424(L), zero na **600 m**, wysokość celownika 1,5 cala.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2600,0 | 2521 | −1,50 | 0,00 | 0,00 | 0,000 |
| 100 | 2388,5 | 2128 | 22,81 | 3,22 | −0,95 | 0,132 |
| 200 | 2187,1 | 1784 | 39,82 | 13,74 | −4,00 | 0,275 |
| 300 | 1991,0 | 1478 | 48,12 | 32,97 | −9,43 | 0,432 |
| 400 | 1801,5 | 1210 | 45,90 | 62,71 | −17,70 | 0,605 |
| 500 | 1624,2 | 984 | 30,84 | 105,30 | −29,24 | 0,797 |
| 600 | 1458,0 | 793 | −0,04 | 163,70 | −44,54 | 1,010 |
| 700 | 1310,7 | 641 | −50,52 | 241,71 | −64,13 | 1,248 |
| 800 | 1189,0 | 527 | −125,22 | 343,93 | −88,22 | 1,511 |
| 900 | 1096,1 | 448 | −229,30 | 475,54 | −116,68 | 1,799 |
| 1000 | 1026,0 | 393 | −367,95 | 641,72 | −149,00 | 2,108 |

*Zero na 600 m tłumaczy dodatnie („nad linią celowania") wartości Bullet Path na dystansach pośrednich — typowe dla naboju zerowanego na dystans maksymalny skuteczny.*

**M118 Long Range (LR)** — pocisk 175 gr Match King, BC 0,505(H)/0,496(M)/0,485(L), zero na **600 m**, wysokość celownika 1,5 cala.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2600,0 | 2626 | −1,50 | 0,00 | 0,00 | 0,000 |
| 100 | 2409,0 | 2255 | 2,84 | 3,20 | −0,85 | 0,131 |
| 200 | 2226,1 | 1925 | 0,00 | 13,58 | −3,57 | 0,273 |
| 300 | 2051,9 | 1636 | −11,24 | 32,35 | −8,37 | 0,426 |
| 400 | 1886,2 | 1382 | −32,37 | 61,02 | −15,50 | 0,593 |
| 500 | 1727,3 | 1159 | −65,20 | 101,39 | −25,27 | 0,774 |
| 600 | 1577,2 | 966 | −112,00 | 155,72 | −38,04 | 0,973 |
| 700 | 1440,5 | 806 | −175,53 | 226,79 | −54,14 | 1,191 |
| 800 | 1318,0 | 675 | −259,14 | 317,94 | −73,87 | 1,429 |
| 900 | 1213,8 | 572 | −366,70 | 433,03 | −97,35 | 1,689 |
| 1000 | 1128,7 | 495 | −502,49 | 576,36 | −124,56 | 1,970 |`,
    },
    {
      id: "556-300wm",
      title: "5,56 mm i .300 Winchester Magnum",
      page: "H-7",
      body: `**5,56 mm** — pocisk 77 gr SPR, BC 0,372, zero na **200 m**, wysokość celownika 2,0 cale.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2600,0 | 1156 | −2,00 | 0,00 | +0,00 | 0,000 |
| 100 | 2347,1 | 942 | 2,78 | 3,26 | −1,15 | 0,133 |
| 200 | 2109,0 | 760 | 0,00 | 14,08 | −4,89 | 0,280 |
| 300 | 1886,1 | 608 | −12,16 | 34,29 | −11,62 | 0,445 |
| 400 | 1678,2 | 481 | −36,06 | 66,22 | −21,85 | 0,629 |
| 500 | 1490,8 | 380 | −74,76 | 112,97 | −36,15 | 0,836 |
| 600 | 1326,4 | 301 | −132,23 | 178,48 | −55,03 | 1,070 |
| 700 | 1192,0 | 243 | −213,36 | 267,65 | −78,79 | 1,331 |
| 800 | 1091,3 | 204 | −323,72 | 386,05 | −107,32 | 1,619 |
| 900 | 1016,9 | 177 | −468,96 | 539,34 | −140,02 | 1,931 |
| 1000 | 958,8 | 157 | −654,42 | 732,85 | −176,40 | 2,264 |

*Efektywny BC na stanowisku: 0,372. Dodatkowo podano w oryginale orientacyjne wyprzedzenia dla ruchomych celów zwierzęcych na 100 m (dane referencyjne kalkulatora, nie doktryna wojskowa): idący cel 3 mph ≈ 7 cali, biegnący jeleń ≈ 3 stopy, łoś ≈ 5 stóp, antylopa ≈ 8 stóp.*

**.300 Winchester Magnum** — pocisk 190 gr Match King, BC 0,533(H)/0,525(M)/0,515(L), zero na **200 m**, wysokość celownika 1,5 cala.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2900,0 | 3547 | −1,50 | 0,00 | 0,00 | 0,000 |
| 100 | 2725,5 | 3133 | 1,59 | 2,13 | −0,57 | 0,107 |
| 200 | 2558,0 | 2760 | 0,00 | 8,95 | −2,35 | 0,220 |
| 300 | 2396,4 | 2422 | −6,91 | 21,07 | −5,46 | 0,341 |
| 400 | 2240,8 | 2118 | −19,87 | 39,26 | −10,04 | 0,471 |
| 500 | 2091,3 | 1845 | −39,77 | 64,38 | −16,21 | 0,609 |
| 600 | 1945,9 | 1597 | −67,62 | 97,45 | −24,17 | 0,758 |
| 700 | 1806,9 | 1377 | −104,66 | 139,71 | −34,12 | 0,918 |
| 800 | 1674,2 | 1182 | −152,36 | 192,64 | −46,26 | 1,090 |
| 900 | 1549,6 | 1013 | −212,48 | 257,98 | −60,83 | 1,277 |
| 1000 | 1433,3 | 867 | −287,09 | 337,81 | −78,05 | 1,478 |`,
    },
    {
      id: "338-lapua",
      title: ".338 Lapua Magnum (250 gr i 300 gr)",
      page: "H-13",
      body: `**.338 Lapua Magnum, 250 gr** — BC 0,675, zero na **200 m**, wysokość celownika 2,0 cale. Tabela sięga do **1200 m**.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2750,0 | 4197 | −2,00 | 0,00 | 0,00 | 0,000 |
| 100 | 2604,1 | 3764 | 2,06 | 2,79 | −0,57 | 0,123 |
| 200 | 2463,0 | 3367 | 0,00 | 11,71 | −2,36 | 0,252 |
| 300 | 2325,9 | 3002 | −8,92 | 27,49 | −5,47 | 0,389 |
| 400 | 2193,5 | 2670 | −25,52 | 50,94 | −10,03 | 0,534 |
| 500 | 2065,8 | 2369 | −50,76 | 83,04 | −16,14 | 0,688 |
| 600 | 1942,7 | 2095 | −85,74 | 124,88 | −23,95 | 0,852 |
| 700 | 1824,2 | 1847 | −131,74 | 177,73 | −33,61 | 1,026 |
| 800 | 1710,2 | 1623 | −190,23 | 243,08 | −45,29 | 1,212 |
| 900 | 1602,0 | 1424 | −262,94 | 322,64 | −59,17 | 1,410 |
| 1000 | 1500,9 | 1250 | −351,85 | 418,41 | −75,40 | 1,621 |
| 1100 | 1406,4 | 1098 | −459,23 | 532,64 | −94,15 | 1,847 |
| 1200 | 1320,0 | 967 | −587,63 | 667,90 | −115,55 | 2,088 |

**.338 Lapua Magnum, 300 gr** — BC 0,768(H)/0,76(M)/0,75(L), zero na **200 m**, wysokość celownika 2,0 cale.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2750,0 | 5037 | −2,00 | 0,00 | 0,00 | 0,000 |
| 100 | 2621,5 | 4577 | 2,02 | 2,78 | −0,50 | 0,122 |
| 200 | 2496,9 | 4152 | 0,00 | 11,61 | −2,06 | 0,250 |
| 300 | 2375,1 | 3757 | −8,69 | 27,10 | −4,76 | 0,385 |
| 400 | 2256,6 | 3392 | −24,75 | 49,96 | −8,69 | 0,527 |
| 500 | 2141,0 | 3053 | −48,97 | 80,98 | −13,95 | 0,676 |
| 600 | 2029,0 | 2742 | −82,25 | 121,07 | −20,65 | 0,833 |
| 700 | 1920,7 | 2457 | −125,64 | 171,26 | −28,89 | 0,999 |
| 800 | 1816,0 | 2196 | −180,29 | 232,71 | −38,79 | 1,175 |
| 900 | 1713,7 | 1956 | −247,55 | 306,77 | −50,52 | 1,361 |
| 1000 | 1615,8 | 1739 | −328,97 | 394,99 | −64,21 | 1,558 |
| 1100 | 1523,7 | 1546 | −426,31 | 499,14 | −80,01 | 1,767 |
| 1200 | 1437,1 | 1376 | −541,57 | 621,20 | −98,03 | 1,989 |

*Cięższy pocisk 300 gr ma wyraźnie lepszą zachowaną energię i mniejszy znos na każdym dystansie niż wariant 250 gr, kosztem niższej prędkości początkowej.*`,
    },
    {
      id: "50cal",
      title: ".50 cal (MK 211 i M8 API)",
      page: "H-19",
      body: `**.50 cal MK 211** — pocisk 671 gr, BC 0,701, zero na **500 m**, wysokość celownika 3,25 cala, wiatr boczny **−10 mph** (z przeciwnego kierunku niż pozostałe tabele). Tabela sięga do **1200 m**.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2740,0 | 11 184 | −3,25 | 0,00 | 0,00 | 0,000 |
| 100 | 2600,0 | 10 070 | 11,19 | 2,81 | −0,55 | 0,123 |
| 200 | 2464,4 | 9047 | 19,48 | 11,76 | −2,27 | 0,252 |
| 300 | 2332,4 | 8104 | 20,93 | 27,57 | −5,27 | 0,389 |
| 400 | 2204,9 | 7242 | 14,73 | 51,01 | −9,65 | 0,534 |
| 500 | 2081,6 | 6455 | −0,01 | 83,00 | −15,51 | 0,687 |
| 600 | 1962,7 | 5738 | −24,34 | 124,58 | −22,99 | 0,849 |
| 700 | 1847,9 | 5087 | −59,47 | 176,95 | −32,22 | 1,021 |
| 800 | 1737,4 | 4496 | −106,77 | 241,50 | −43,36 | 1,204 |
| 900 | 1631,6 | 3966 | −167,85 | 319,82 | −56,57 | 1,399 |
| 1000 | 1532,5 | 3499 | −244,54 | 413,76 | −72,00 | 1,606 |
| 1100 | 1439,6 | 3087 | −338,94 | 525,40 | −89,79 | 1,827 |
| 1200 | 1353,2 | 2728 | −453,40 | 657,11 | −110,10 | 2,062 |

**.50 cal M8 API** — pocisk 622,5 gr, BC 0,701, zero na **500 m**, wysokość celownika 3,25 cala, temperatura 60°F, wiatr boczny **−10 mph**.

| Zasięg (m) | V (fps) | Energia (ft-lb) | Bullet Path (cale) | Drop (cale) | Znos (cale) | Czas lotu (s) |
|---|---|---|---|---|---|---|
| 0 | 2910,0 | 11 703 | −3,25 | 0,00 | 0,00 | 0,000 |
| 100 | 2764,3 | 10 560 | 9,56 | 2,49 | −0,51 | 0,116 |
| 200 | 2623,4 | 9512 | 16,93 | 10,41 | −2,10 | 0,237 |
| 300 | 2487,3 | 8550 | 18,26 | 24,38 | −4,85 | 0,366 |
| 400 | 2354,6 | 7662 | 12,88 | 45,06 | −8,85 | 0,501 |
| 500 | 2226,3 | 6850 | −0,01 | 73,24 | −14,21 | 0,645 |
| 600 | 2102,4 | 6108 | −21,28 | 109,81 | −21,05 | 0,796 |
| 700 | 1982,7 | 5433 | −51,95 | 155,78 | −29,47 | 0,957 |
| 800 | 1867,2 | 4818 | −93,20 | 212,33 | −39,62 | 1,127 |
| 900 | 1755,9 | 4261 | −146,37 | 280,80 | −51,66 | 1,308 |
| 1000 | 1649,2 | 3759 | −213,03 | 362,75 | −65,73 | 1,501 |
| 1100 | 1549,0 | 3316 | −294,98 | 460,00 | −82,01 | 1,706 |
| 1200 | 1455,1 | 2926 | −394,25 | 574,57 | −100,62 | 1,925 |

*Oba naboje .50 cal zachowują ponad 2900 ft-lb energii nawet na 1200 m — rząd wielkości większy niż amunicja 7,62 mm na tym samym dystansie, co tłumaczy zdolność M82A1 do rażenia celów opancerzonych/ufortyfikowanych (patrz Dodatek E).*`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Przy jakim stałym wietrze bocznym wygenerowano większość tabel balistycznych w tym dodatku?",
      options: ["5 mph", "10 mph", "15 mph", "20 mph"],
      correctIndex: 1,
      explanation: "Referencyjne warunki dla większości tabel zakładają stały wiatr boczny 10 mph (dla obu nabojów .50 cal jest to −10 mph, czyli z przeciwnego kierunku).",
    },
    {
      id: "q2",
      question: "Na jaki dystans jest zerowany nabój M852 w tabelach tego dodatku?",
      options: ["100 m", "200 m", "600 m", "1000 m"],
      correctIndex: 2,
      explanation: "M852 w tym dodatku jest zerowany na 600 m, w przeciwieństwie do M118, który jest zerowany na 100 m.",
    },
    {
      id: "q3",
      question: "Ile wynosi prędkość początkowa (V0) naboju .300 Winchester Magnum (190 gr) w tabeli?",
      options: ["2600 fps", "2740 fps", "2900 fps", "3200 fps"],
      correctIndex: 2,
      explanation: "Tabela dla .300 Win Mag (190 gr Match King) podaje prędkość początkową 2900,0 fps.",
    },
    {
      id: "q4",
      question: "Który nabój .338 Lapua Magnum ma mniejszy znos od wiatru na każdym dystansie — 250 gr czy 300 gr?",
      options: ["250 gr", "300 gr", "Identyczny znos", "Zależy tylko od BC, nie od wagi"],
      correctIndex: 1,
      explanation: "Cięższy pocisk 300 gr ma korzystniejszy współczynnik balistyczny i mniejszy znos na każdym dystansie niż wariant 250 gr, kosztem niższej prędkości początkowej.",
    },
    {
      id: "q5",
      question: "Ile energii (w przybliżeniu) zachowuje amunicja .50 cal (MK 211/M8 API) na dystansie 1200 m?",
      options: ["Poniżej 500 ft-lb", "Około 1000 ft-lb", "Ponad 2700 ft-lb", "Ponad 8000 ft-lb"],
      correctIndex: 2,
      explanation: "Oba naboje .50 cal zachowują ponad 2700-2900 ft-lb energii nawet na 1200 m, znacząco więcej niż amunicja 7,62 mm na tym dystansie.",
    },
    {
      id: "q6",
      question: "Jaki program wygenerował dane balistyczne w tym dodatku?",
      options: ["JBM Ballistics", "Sierra Ballistics III", "Hornady 4DOF", "Applied Ballistics"],
      correctIndex: 1,
      explanation: "Wszystkie tabele w tym dodatku pochodzą z programu Sierra Ballistics III.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Bullet Path", definition: "Wysokość toru lotu pocisku względem linii celowania (zależna od przyjętego dystansu zerowania) — w odróżnieniu od Drop, który jest czystym spadkiem względem osi lufy." },
    { id: "f2", term: "BC (Ballistic Coefficient)", definition: "Współczynnik balistyczny opisujący zdolność pocisku do zachowania prędkości w locie; podawany w trzech wariantach H/M/L (wysoki/średni/niski) w zależności od prędkości." },
    { id: "f3", term: "M118 — zero referencyjne", definition: "W tabelach Dodatku H nabój M118 (173 gr) jest zerowany na 100 m, V0 = 2610 fps." },
    { id: "f4", term: "M852 — zero referencyjne", definition: "Nabój M852 (168 gr) w tabelach Dodatku H jest zerowany na 600 m, V0 = 2600 fps." },
    { id: "f5", term: ".338 Lapua Magnum", definition: "Nabój dostępny w tym dodatku w dwóch wariantach wagowych: 250 gr (BC 0,675) i 300 gr (BC 0,768) — obie wersje zerowane na 200 m." },
    { id: "f6", term: ".50 cal MK 211", definition: "Nabój .50 cal, 671 gr, BC 0,701, zerowany na 500 m, zachowuje ponad 2700 ft-lb energii na 1200 m." },
    { id: "f7", term: "Warunki referencyjne Sierra Ballistics III", definition: "Temperatura 59°F, ciśnienie 29,53 cala Hg, wilgotność 78%, wiatr boczny 10 mph — stałe warunki większości tabel w tym dodatku." },
    { id: "f8", term: "Drift", definition: "Znos pocisku od wiatru bocznego (w calach), rosnący nieliniowo z dystansem — silnie zależny od czasu lotu pocisku." },
  ],
};
