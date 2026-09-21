import type { Chapter } from "../types/content";

export const appG: Chapter = {
  id: "app-g",
  kind: "appendix",
  number: "G",
  title: "Sniper Rifle Telescopes",
  summary:
    "Luneta pozwala snajperowi wykrywać i angażować cele skuteczniej oraz powiększać obraz celu — ale sama w sobie nie czyni z żołnierza lepszego strzelca, jedynie pomaga mu lepiej widzieć. Dodatek opisuje ogólne cechy lunet oraz konkretne modele: amerykańskie i sowieckie.",
  sections: [
    {
      id: "characteristics",
      title: "Charakterystyka lunet",
      page: "G-1",
      body: `**Powiększenie:** ogólna zasada to **1x powiększenia na 100 m** zasięgu skutecznego broni — luneta 5x wystarcza do 500 m, 10x do 1000 m. **10x** uznano za najlepsze uniwersalne powiększenie do snajpingu polowego, bo umożliwia precyzyjne poprawki do 1000 m przy wciąż wystarczającym polu widzenia na bliskich dystansach. Lunety o bardzo dużym powiększeniu mają ograniczone pole widzenia, co utrudnia cele bliskie i snap. Nowoczesne lunety zmiennej krotności (typowo 2,5-10x lub 2,5-14x) eliminują dawne problemy z przesunięciem POI przy zmianie powiększenia i pozwalają "zejść" z mocy, by nie przeciążać matrycy fosforowej NVD lub zyskać szersze pole widzenia z bliska.

**Paralaksa:** występuje, gdy cel nie jest zogniskowany na tej samej płaszczyźnie co siatka — przy ruchu głowy cel „przesuwa się" względem siatki, co przekłada się na błąd trafienia. Efekt silniejszy przy dużych powiększeniach. Zasada zerowania elewacji: robić to na możliwie największym dystansie (np. dla systemu na 1000 m potwierdzić zero elewacji na 500 m), a początkowe zero elewacji/windażu ustawić na 100 lub 200 m. Modele M1A i M3A (Leupold) mają osobne pokrętło focus/parallax — regulację trzeba wykonać dla każdego dystansu z osobna i zapisać w dzienniku strzeleckim; przykładowy zapis: *„Range 650+1, windage left 1 click spin drift, parallax second ball"*. Jeśli przy regulacji paralaksy między dystansami pojawia się przesunięcie zera — luneta jest wadliwa i wymaga wymiany.

**Regulowany obiektyw:** niektóre lunety celownicze (M1A, M3A) mają trzecie pokrętło do ogniskowania soczewki obiektywu, eliminujące paralaksę. Bez takiego pokrętła: wyeliminować cień w polu widzenia, upewnić się, że siatka przesuwa się tak samo we wszystkich kierunkach na celu — cień wskazuje stronę, w którą pozornie „przesunęła się" siatka (uderzenie pocisku będzie po **przeciwnej** stronie od cienia).

**Ustawianie pod strzelca:**
- **Ogniskowanie:** spojrzeć na odległy obiekt (kilka sekund bez lunety), po czym szybko spojrzeć przez lunetę na jednolite tło — siatka musi być ostra od razu. Regulacja: przytrzymać pierścień blokujący okular, obrócić okular o dwa obroty zgodnie z ruchem wskazówek (krótkowzroczność) lub przeciwnie (dalekowzroczność); typowo potrzeba dwóch pełnych obrotów, by zauważyć różnicę. Po ustawieniu odpocząć wzrokiem 5-10 minut i sprawdzić ponownie — wymuszanie ostrości powoduje zmęczenie oka i „podwójną siatkę" po dłuższym strzelaniu.
- **Eye relief:** poluzować śruby Allena pierścieni, przyjąć najczęściej używaną pozycję strzelecką, przesunąć lunetę w przód/tył aż obraz będzie pełny i ostry bez zacienienia (zwykle 2-4 cale od oka), obrócić lunetę do pionowego/poziomego ustawienia siatki, dokręcić pierścienie. M24 ma jednoczęściową podstawę z dwoma zestawami rowków (montaż do przodu/tyłu) dla wygody strzelca.

> **Przestroga:** nigdy nie patrzeć przez lunetę na słońce — skupione promienie słoneczne mogą trwale uszkodzić wzrok.`,
    },
    {
      id: "us-telescopes",
      title: "Lunety amerykańskie",
      page: "G-4",
      body: `**M84** — powiększenie 2,2x, pole widzenia 27 stóp na 100 jardów, eye relief 3,5-5 cali. Siatka: pionowy słupek (3 MOA szerokości) i pozioma kreska. Uszczelniona gumowo (teoretycznie może być zanurzona, niezalecane ze względu na wiek). Windaż: 60 MOA regulacji (po 30 MOA w każdą stronę od środka), łącznie 100 MOA dostępnych do skorygowania błędu wyosiowania. 1 klik = 1 MOA, pełny obrót pokrętła elewacji = 40 MOA. Skala elewacji: 0-900 jardów co 50 jardów (numerowana co 100 jardów). Montowana na M1C/M1D, M1 Marine sniper i 1903A4 (mocowanie Redfield).

**ART I (Adjustable Ranging Telescope I)** — zmienna 3-9x, automatycznie kompensuje trajektorię po „wpasowaniu" celu między linie stadiametryczne, zakres 300-900 m. Kamera balistyczna skalibrowana pod M118 Match/SB (173 gr @ 2610 fps). 1 klik = 1/2 MOA. Zerowana na 300 m (pierścień mocy ustawiony na 3). Siatka ma 4 linie stadiametryczne: dwie poziome na pionowym krzyżu (30 cali rozstawu w danej odległości, do namierzania sylwetki od pasa do czubka głowy — numer na pierścieniu mocy = odległość celu w setkach metrów) oraz dwie pionowe na poziomym krzyżu (60 cali rozstawu, do poprawek na wiatr i wyprzedzeń). **Utrzymanie czystości podstawy montażowej jest krytyczne** — kamera balistyczna ślizga się po niej i zanieczyszczenia zakłócają precyzję.

**ART II** — podobna do ART I, ale kamera balistyczna i pierścień mocy są rozłączne (można zwiększyć powiększenie po namierzeniu celu) — w praktyce mechanizm zawodny (pierścienie „ząbkowane jak żetony" powinny być zablokowane razem i pozostawione tak). Siatka: standardowy krzyż z grubymi belkami po lewej, prawej i na dole oraz dwiema kropkami na poziomej kresce (30 cali od środka, 60 cali między sobą). Grube belki mają wysokość 1 m w danej odległości — celuje się dopasowując belkę od krocza do czubka głowy celu.

**Leupold & Stevens M1A / M3 / M3A** — wszystkie modele Leupold & Stevens dla snajperów używają siatki mil-dot. M1A dostępny w 10x lub 16x, M3A tylko w 10x; oba mają 3 duże pokrętła (lewe: focus/parallax, górne: elewacja, prawe: windaż).

| Model | Elewacja | Windaż | Pełny obrót |
|---|---|---|---|
| M1A | 1/4 MOA | 1/4 MOA | 15 MOA |
| M3 | 1 MOA | 1 MOA | 100-1000 m |
| M3A | 1 MOA | 1/2 MOA | 100-1000 m |

Kołnierz balistyczny M3A (kompensacja 100-1000 m) dostępny dla: 7,62 mm NATO M118 (173 gr @ 2610 fps), .300 Win Mag (190 gr HPBT @ 2900 fps — kołnierz błędnie oznaczony jako 220 gr), .30-06 Springfield (180 gr HPBT @ 2700 fps), 5,56 mm M193/.223 Rem (55 gr FMJBT @ 3200 fps).

**Bausch & Lomb Tactical** — stała 10×40, regulacja 1/4 MOA, pierścień ostrości w okularze kalibrowany od 50 jardów do nieskończoności, siatka mil-dot (jak Leupold i Unertl USMC), 12 MOA na pełny obrót. Już nieprodukowana, nieliczne egzemplarze w systemie.

**Unertl USMC** — stała 10x, tuba stalowa, siatka mil-dot, BDC pod amunicję M118. Powłoka HELR przepuszcza do 91% światła otoczenia. Elewacja: 1 MOA (regulacja standardowa) + precyzyjna regulacja drobna ±3 MOA po 0,5 MOA (kompensacja różnic zera, temperatury, partii amunicji). Windaż: 60 MOA regulacji głównej po 0,5 MOA + ±4 MOA drobnej. Nie jest wodoszczelna — podatna na zaparowanie w wysokiej wilgotności.`,
      figures: [
        {
          id: "fig-g1",
          src: "/images/app-g/fig-g1-art1.png",
          caption: "Figure G-1. ART I Telescope Reticle (oryginał z FM 3-05.222).",
        },
        {
          id: "fig-g2",
          src: "/images/app-g/fig-g2-art2.png",
          caption: "Figure G-2. ART II Telescope Reticle (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "soviet-telescopes",
      title: "Lunety sowieckie",
      page: "G-8",
      body: `Lunety sowieckie produkowano na maszynach zakupionych od Carla Zeissa (Niemcy) w latach 30. — stąd dobra do doskonałej jakość optyczna. Górna wieżyczka to elewacja z kamerą balistyczną skalibrowaną pod amunicję 7,62×54R L ball (150 gr FMJ flat base @ 2800 fps), lewa wieżyczka — windaż.

| Model | Powiększenie | BDC (do) | Średnica tuby |
|---|---|---|---|
| PE | 4x | 1400 m | 1 cal |
| PU | 3,5x | 1300 m | 30 mm |
| PV | 3,5x | 1300 m | 30 mm |

Tylko PE ma indywidualną regulację ostrości pod oko obserwującego — PU nie ma regulacji ogniskowania, obserwujący dostosowuje ostrość ruchem głowy.

**Procedura zerowania (identyczna dla wszystkich modeli sowieckich):** zerować na 100 m. Poluzować małe śruby wieżyczek (nie wykręcać całkowicie — nie są to śruby imbusowe, łatwo je zgubić), rozdzielić delikatnie płytę górną od kamery z nacięciami. Oddając serie po 3 strzały, regulować elewację/windaż aż POA = POI — **przy czym przesuwa się siatkę (reticle) do grupy trafień**, w przeciwieństwie do nowoczesnych lunet US, gdzie przesuwa się grupę trafień do siatki (POA). Po zerowaniu „wyzerować" kamery: ustawić „1" (100 m) na indeksie elewacji bez obracania płyty górnej, wycentrować windaż na „0", docisnąć płyty i dokręcić śrubki.

**PSO-1** (na sowieckim SVD i rumuńskim FPK) — 4x, podświetlana bateryjnie siatka (komora baterii z tyłu na dole mocowania). Dalmierz w dolnej lewej części siatki skalibrowany pod wzrost człowieka (5 stóp 7 cali) w zakresie 200-1000 m — dopasowuje się poziomą kreskę do stóp i górną (zakrzywioną) linię do czubka głowy celu, numer wskazuje odległość w setkach metrów. Skala pozioma przy górnym chevronie służy do doraźnych poprawek na wiatr/wyprzedzenie: 1 kreska = 1 mil sowiecki (6000 mili sowieckich na 360°). Pokrętło windażu: 2 kliki na kreskę, każdy klik = 0,5 mila (na 1000 m: klik przesuwa trafienie o 0,5 m, kreska o 1 m). Numery windażu: czarne = korekta w prawo (obrót zgodnie z ruchem wskazówek), czerwone = w lewo (przeciwnie). Trzy dolne chevrony służą do strzelania na 1100/1200/1300 m przy pokrętle elewacji ustawionym na „10". Wykrywacz aktywnych źródeł podczerwieni: ustawić bęben zasięgu na „4", przełączyć detektor IR — aktywne źródła IR przeciwnika pojawią się jako pomarańczowo-czerwone plamy.

**Ekspediencyjne baterie do PSO-1:** sowiecka bateria to ogniwo suche 5,0 V. Zamiennik: dwie baterie fotograficzne litowe 1,25 V/625, jedna litowa 3,0 V/DL2025 oraz plastikowa tulejka dystansowa (śr. zewn. 0,85 cala, śr. wewn. 0,60 cala, długość 0,73 cala) — bieguny „+” wkładać jako pierwsze, kolejność: DL2025 → tulejka → dwie baterie 625.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaka jest ogólna zasada doboru powiększenia lunety do zasięgu skutecznego broni?",
      options: ["2x na 100 m", "1x na 100 m", "1x na 50 m", "5x niezależnie od dystansu"],
      correctIndex: 1,
      explanation: "Ogólna zasada to 1x powiększenia na 100 m zasięgu skutecznego — stąd 10x jako uniwersalny wybór do 1000 m.",
    },
    {
      id: "q2",
      question: "Na jakim dystansie zaleca się początkowe zerowanie elewacji/windażu przed dalszym dostrajaniem na większe odległości?",
      options: ["50 m", "100 lub 200 m", "500 m", "1000 m"],
      correctIndex: 1,
      explanation: "Początkowe zero elewacji i windażu ustawia się na 100 lub 200 m, by „utrzymać się na tarczy”, a elewację potwierdza się później na największym możliwym dystansie.",
    },
    {
      id: "q3",
      question: "Na jakim dystansie zeruje się celownik ART I?",
      options: ["100 m", "300 m", "600 m", "900 m"],
      correctIndex: 1,
      explanation: "ART I zeruje się na 300 m, z pierścieniem mocy ustawionym na 3 (3x/300 m).",
    },
    {
      id: "q4",
      question: "Czym różni się procedura zerowania sowieckich lunet od nowoczesnych lunet amerykańskich?",
      options: [
        "Sowieckie zeruje się na 300 m, amerykańskie na 100 m",
        "W lunetach sowieckich przesuwa się siatkę do grupy trafień, w amerykańskich grupę trafień do siatki",
        "Sowieckie nie wymagają zerowania",
        "Różnicy nie ma",
      ],
      correctIndex: 1,
      explanation: "W procedurze sowieckiej reticle jest przesuwane do grupy trafień (POI), odwrotnie niż w typowej praktyce amerykańskiej, gdzie POI przesuwa się do POA/reticle.",
    },
    {
      id: "q5",
      question: "Jaka jest wartość jednego klika windażu w celowniku PSO-1?",
      options: ["1/4 MOA", "1/2 MOA", "0,5 mila sowieckiego", "1 cal na 100 jardów"],
      correctIndex: 2,
      explanation: "Pokrętło windażu PSO-1 ma 2 kliki na kreskę, każdy klik = 0,5 mila sowieckiego (na 1000 m to przesunięcie trafienia o 0,5 m).",
    },
    {
      id: "q6",
      question: "Które lunety Leupold & Stevens mają siatkę mil-dot?",
      options: ["Tylko M3A", "Tylko M1A", "Wszystkie modele Leupold & Stevens dla snajperów", "Żadna, mil-dot jest tylko w Unertl"],
      correctIndex: 2,
      explanation: "Wszystkie snajperskie lunety Leupold & Stevens (M1A, M3, M3A) używają siatki mil-dot.",
    },
    {
      id: "q7",
      question: "Co oznacza cień widoczny w polu widzenia lunety przy problemie z paralaksą?",
      options: [
        "Awarię lunety wymagającą wymiany",
        "Że trafienie pocisku będzie po stronie przeciwnej do cienia",
        "Że luneta jest idealnie wyzerowana",
        "Zbyt niskie powiększenie",
      ],
      correctIndex: 1,
      explanation: "Cień wskazuje stronę, w którą pozornie przesunęła się siatka — strzelec kompensuje, przesuwając broń, co powoduje, że uderzenie pocisku wypada po stronie przeciwnej do cienia.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Zasada 1x/100m", definition: "Ogólna reguła doboru powiększenia lunety: 1x powiększenia na każde 100 m zasięgu skutecznego broni; 10x uznane za optymalne uniwersalne powiększenie do 1000 m." },
    { id: "f2", term: "Paralaksa (luneta)", definition: "Efekt widoczny, gdy cel nie jest na tej samej płaszczyźnie ogniskowej co siatka — cel pozornie przesuwa się względem siatki przy ruchu głowy strzelca." },
    { id: "f3", term: "M84", definition: "Amerykańska luneta 2,2x z siatką słupkową, montowana na M1C/M1D, M1 Marine sniper i 1903A4; 1 klik = 1 MOA." },
    { id: "f4", term: "ART I", definition: "Adjustable Ranging Telescope I — zmienna luneta 3-9x automatycznie kompensująca trajektorię wg wielkości celu między liniami stadiametrycznymi (300-900 m), kalibrowana pod M118." },
    { id: "f5", term: "ART II", definition: "Rozwinięcie ART I z rozłącznym pierścieniem mocy i kamerą balistyczną (w praktyce zawodne) oraz siatką z grubymi belkami 1 m wysokości." },
    { id: "f6", term: "Unertl USMC", definition: "Stała luneta 10x używana przez USMC, tuba stalowa, siatka mil-dot, powłoka HELR (do 91% transmisji światła), niewodoszczelna." },
    { id: "f7", term: "PE / PU / PV", definition: "Sowieckie lunety na M1891/30: PE (4x, BDC do 1400 m, tylko PE ma regulację ostrości), PU i PV (3,5x, BDC do 1300 m)." },
    { id: "f8", term: "Procedura zerowania lunet sowieckich", definition: "Zerowanie na 100 m; w przeciwieństwie do lunet US, siatkę przesuwa się do grupy trafień (POI), nie odwrotnie." },
    { id: "f9", term: "PSO-1", definition: "Sowiecki celownik 4x montowany na SVD i rumuńskim FPK, z podświetlaną siatką, wbudowanym dalmierzem (wzrost człowieka) i wykrywaczem aktywnych źródeł IR." },
    { id: "f10", term: "Mil sowiecki", definition: "Jednostka kątowa używana w celownikach sowieckich: 6000 mili sowieckich na pełne 360°, wykorzystywana w skali PSO-1 do poprawek na wiatr." },
    { id: "f11", term: "M3A — kołnierz balistyczny", definition: "Wymienny kołnierz kompensacji spadku toru lotu (100-1000 m) dostępny dla M118, .300 Win Mag, .30-06 i 5,56 mm M193/.223." },
  ],
};
