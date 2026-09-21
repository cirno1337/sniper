import type { Chapter } from "../types/content";

export const appE: Chapter = {
  id: "app-e",
  kind: "appendix",
  number: "E",
  title: "M82A1 Caliber .50 Sniper Weapon System",
  summary:
    "Nowoczesne pole walki wymagało rozszerzenia roli snajpera na cele poza zasięgiem klasycznego 7,62 mm. Dodatek opisuje karabin wielkokalibrowy M82A1 (.50 cal) — jego role, charakterystykę, celownik Swarovski, wymagania dot. zastosowania oraz konserwację.",
  sections: [
    {
      id: "role-characteristics",
      title: "Rola i charakterystyka M82A1",
      page: "E-1",
      body: `M82A1 pełni trzy role:
- **Karabin dalekiego zasięgu** — eliminacja cennych celów poza zasięgiem/możliwościami broni konwencjonalnej, często w sytuacjach wykluczających użycie bardziej wyrafinowanego uzbrojenia.
- **Wsparcie piechoty** — angażowanie lekko opancerzonych pojazdów i przebijanie lekkich fortyfikacji, których nie pokonają pociski 5,56 mm ani 7,62 mm.
- **Narzędzie saperskie (EOD)** — niszczenie/uszkadzanie amunicji na dystansie 100-500 m, zwykle pojedynczym trafieniem, bez detonacji wysokiego rzędu.

**Barrett Caliber .50 Model 82A1** — karabin półautomatyczny, krótki odrzut lufy, zasilany z magazynka, chłodzony powietrzem.

| Parametr | Wartość |
|---|---|
| Kaliber | .50 Browning (12,7×99 mm) |
| Waga | 30 funtów (13,6 kg) |
| Długość całkowita | 57 cali (144,78 cm) |
| Długość lufy | 29 cali (73,67 cm) |
| Prędkość wylotowa | 2850 fps (nabój M33 ball) |
| Zasięg maksymalny (M2 Ball) | 6800 m (7450 jardów) |
| Zasięg skuteczny maksymalny | 1830 m (cel powierzchniowy); 1200-1400 m (cel punktowy, zależnie od wielkości) |
| Pojemność magazynka | 10 naboi |

**Celownik Swarovski Ranging Reticle:** tuba 30 mm (kompatybilna z pierścieniami montażowymi SWS), stop aluminium, system okularowy NOVA wypełniony suchym azotem (odporność na zaparowanie), opcjonalny podświetlacz siatki na baterie, cofający się okular (ochrona przed „ugryzieniem" lunety przy odrzucie), pochylona szyna montażowa (0,030-0,035 cala wyżej z tyłu — ułatwia zerowanie na dużych dystansach). **Szyny nigdy nie wolno demontować.**

| Dane techniczne celownika | Wartość |
|---|---|
| Powiększenie | 10x |
| Średnica obiektywu | 42 mm |
| Pole widzenia | 12 stóp na 100 jardów (4 m na 100 m) |
| Dystans wolny od paralaksy | 500 m (tolerancja 250 m do nieskończoności) |
| Regulacja windażu/elewacji | 1 klik = 1/5 cala na 100 jardów (1/5 MOA); maks. 80 cali na 100 jardów (80 MOA) |
| Temperatura pracy | od –4°F do 131°F |
| Waga | ok. 13,5 uncji |

Siatka celownika oferuje możliwości „rangingu" od 500 do 1800 m (bez pełnego szacowania odległości — linie stadiametryczne ok. 1 mil/3,5 MOA w zakresie 500-600 m), poprawki na wiatr 5 i 10 mph (także do celów ruchomych). Brak kropek mil-dot oznacza inne niż w M3A metody poprawek na wiatr i znos.`,
      figures: [
        {
          id: "fig-e1",
          src: "/images/app-e/fig-e1-m82a1.png",
          caption: "Figure E-1. The Barrett Caliber .50 Model 82A1 (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "employment",
      title: "Zastosowanie i wymagania wsparcia",
      page: "E-3",
      body: `Zasady użycia sniper team ze SWS 7,62 mm pozostają aktualne, ale wiele niuansów się zmienia — zasięg skuteczny, sygnatura, waga, wymagania wsparcia i skutek terminalny pocisku .50 są znacząco większe.

**Maksymalizacja zasięgu:** zawsze angażować cele na maksymalnym dystansie dopuszczalnym przez broń, cel i teren. Dobrać amunicję pod kątem zasięgu i skutku terminalnego, używać dalmierza gdy to możliwe. Przy niepewności co do odległości: celować nisko i korygować metodą „sight-to-burst" (obserwacja miejsca uderzenia). W przeciwieństwie do SWS 7,62 mm, przy celach opancerzonych/ufortyfikowanych drugi strzał jest akceptowalny — BWP nie może „się położyć", a załoga bunkra/pojazdu rzadko jest równie czujna jak żołnierz w polu.

**Ruch i zajmowanie stanowiska (FFP):**
- Zmodyfikować technikę ruchu: większa waga systemu/amunicji/sprzętu zespołu, lepszy dobór trasy (mniej czołgania), staranny dobór trasy wycofania (po strzale snajper staje się celem wyższego priorytetu).
- Przy zajmowaniu FFP: znacznie większa sygnatura z przodu (oczyścić obszar, zwilżyć glebę), sygnatura także pod kątem ~65° na boki, rozmiar 3-osobowego zespołu w stałym stanowisku może być niepraktyczny, FFP powinno uniemożliwiać zarysowanie na tle nieba (skyline) na dużym dystansie.

**Dodatkowe wymagania wsparcia:**
- Konserwacja: czyścić po 10 strzałach dla lepszej celności; ciśnienie w komorze 55 000 CUP może powodować krytyczne awarie przy zaniedbaniu.
- Szkolenie: nie da się strzelać z M82A1 na standardowych strzelnicach dla broni strzeleckiej; specjalne wymagania dla amunicji innej niż standardowa (np. wielozadaniowa, przeciwpancerno-zapalająca API).
- Transport: dodatkowa waga sprawia, że transport pojazdem jest pożądany; brak zatwierdzonej metody infiltracji spadochronowej/podwodnej z M82A1 — konieczne planowanie alternatywnych metod dostarczenia SWS na pole walki.`,
    },
    {
      id: "maintenance",
      title: "Montaż, demontaż i konserwacja",
      page: "E-5",
      body: `**Montaż wstępny** (z futerału transportowego): wyjąć dolny odbiornik, rozłożyć nóżki dwójnogu; wyjąć tylny kołek blokujący; uwolnić zespół zamkowy przytrzymując uchwyt ładowania (napięcie sprężyny głównej) i wyjmując środkowy kołek blokujący; wyjąć górny odbiornik z lufą (zwrócić uwagę na orientację — rampa podająca w dół), w pełni wysunąć lufę; osadzić bufor uderzeniowy na występie lufy, wsunąć klucz lufy w gniazdo (napięcie sprężyny lufy ok. **70 funtów**); połączyć górny odbiornik z dolnym (hak z przodu), zamknąć górny odbiornik zwalniając napięcie zamka, osadzić kołki blokujące (środkowy i tylny); ustawić bezpiecznik kciukowy w pozycji „on safe" (poziomo).

> **Przestroga:** nigdy nie wyciągać środkowego kołka blokującego bez pełnej kontroli nad zespołem zamkowym ręką — może zostać wyrzucony z dolnego odbiornika.

**Demontaż ogólny** (tylko personel SOTIC jest upoważniony do pełnego demontażu): trzy główne zespoły to górny odbiornik, zespół zamkowy i dolny odbiornik. Kolejność: rozładować broń na dwójnogu (bez magazynka) → wyjąć środkowy i tylny kołek → wycofać zamek z lufy uchwytem ładowania → unieść tylną część górnego odbiornika, powoli zwolnić napięcie → odłączyć przedni zawias i zdjąć górny odbiornik → wysunąć lufę (opierając zespół na tłumiku płomieni) → ostrożnie wyjąć klucz lufy (napięcie sprężyn ok. 70 funtów — nigdy nie ciągnąć za same sprężyny) → zdjąć dolny odbiornik z lufy → wyjąć zespół zamkowy → rozbroić mechanizm spustowy tylnym kołkiem → wyjąć zamek i jego sprężynę (ekstraktor wypychany przez otwór kołkiem/spinaczem w razie potrzeby). Montaż to odwrócona kolejność.

**Inspekcja po demontażu (Figure E-3):**

| Zespół | Co sprawdzić |
|---|---|
| Górny odbiornik | Sprężyny lufy nieprzeciągnięte, zwoje ciasno przylegają; stan bufora uderzeniowego; dokręcenie tłumika płomieni; brak pęknięć/wygięć/zadziorów; dokręcenie pierścieni montażowych lunety |
| Zespół zamkowy | Wyrzutnik/ekstraktor pod naciskiem sprężyny, bez wyszczerbień; płynność ruchu zamka; wystawanie iglicy i stan otworu iglicy; brak deformacji zapadki zamka; przechwycenie iglicy przez kurek przy zamykaniu |
| Dolny odbiornik | Swobodny ruch sprężyny głównej; brak nadmiernego luzu blokującego spust; brak pęknięć/wygięć dolnego odbiornika; sprawność dwójnogu |

**Czyszczenie i smarowanie:** czyścić po zakończeniu strzelań danego dnia (lub w trakcie, jeśli osad powoduje zacięcia). Lufa: min. 6 przejść szczotką z brązu + płatki aż czyste, suszenie i cienka warstwa oleju, zawsze od strony komory. Reszta broni: szczoteczka do zębów, szmatki, rozpuszczalnik (unikać kontaktu z plastikiem/gumą). Lekko smarować: rygle i rowek krzywkowy zamka, powierzchnie łożyskowe zespołu zamkowego, powierzchnie ryglujące lufy, powierzchnie łożyskowe odbiornika — wg warunków w rejonie działań. Lunetę odkurzać pędzelkiem, czyścić wyłącznie płynem do soczewek i bibułką.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaki jest zasięg maksymalny skuteczny M82A1 przeciwko celowi powierzchniowemu?",
      options: ["800 m", "1200 m", "1830 m", "6800 m"],
      correctIndex: 2,
      explanation: "Zasięg skuteczny maksymalny wynosi 1830 m na cel powierzchniowy (1200-1400 m na cel punktowy).",
    },
    {
      id: "q2",
      question: "Jaka jest pojemność magazynka M82A1?",
      options: ["5 naboi", "10 naboi", "20 naboi", "30 naboi"],
      correctIndex: 1,
      explanation: "M82A1 zasilany jest z magazynka o pojemności 10 naboi .50 (12,7×99 mm).",
    },
    {
      id: "q3",
      question: "Dlaczego drugi strzał z M82A1 do celu opancerzonego/ufortyfikowanego jest akceptowalny, w przeciwieństwie do SWS 7,62 mm?",
      options: [
        "Bo amunicja .50 jest tańsza",
        "Bo BWP/bunkier nie może się „położyć” jak człowiek, a załoga jest mniej czujna",
        "Bo celownik Swarovski jest szybszy w regulacji",
        "Bo M82A1 nie ma sygnatury dźwiękowej",
      ],
      correctIndex: 1,
      explanation: "Pojazdy opancerzone i załogi w bunkrach/pojazdach nie reagują jak człowiek pod ostrzałem, więc drugi strzał jest praktyczny mimo ujawnienia pozycji.",
    },
    {
      id: "q4",
      question: "Ile wynosi napięcie sprężyny lufy M82A1, o którym trzeba pamiętać przy montażu/demontażu?",
      options: ["10 funtów", "30 funtów", "70 funtów", "150 funtów"],
      correctIndex: 2,
      explanation: "Sprężyna lufy ma napięcie ok. 70 funtów — klucz lufy trzeba wyjmować/wkładać ostrożnie, nigdy nie ciągnąc za same sprężyny.",
    },
    {
      id: "q5",
      question: "Kto jest upoważniony do pełnego (szczegółowego) demontażu M82A1?",
      options: ["Każdy członek zespołu snajperskiego", "Tylko personel SOTIC", "Tylko armorer batalionu", "Tylko producent (Barrett)"],
      correctIndex: 1,
      explanation: "Tylko personel SOTIC jest upoważniony do przeprowadzania pełnego (detailed) demontażu M82A1.",
    },
    {
      id: "q6",
      question: "Co ile strzałów zaleca się czyszczenie M82A1 dla zachowania celności?",
      options: ["Po każdym strzale", "Po 10 strzałach", "Po 50 strzałach", "Raz dziennie niezależnie od liczby strzałów"],
      correctIndex: 1,
      explanation: "Zalecane jest czyszczenie po 10 strzałach dla lepszej celności.",
    },
    {
      id: "q7",
      question: "Jakie jest ciśnienie w komorze M82A1, które przy zaniedbaniu konserwacji może powodować krytyczne awarie?",
      options: ["15 000 CUP", "35 000 CUP", "55 000 CUP", "80 000 CUP"],
      correctIndex: 2,
      explanation: "Ciśnienie komory 55 000 CUP (copper units of pressure) może powodować fatalne w skutkach awarie przy braku odpowiedniej konserwacji.",
    },
  ],
  flashcards: [
    { id: "f1", term: "M82A1", definition: "Barrett Caliber .50 Model 82A1 — półautomatyczny karabin wielkokalibrowy o krótkim odrzucie lufy, kaliber .50 Browning (12,7×99 mm), waga 30 funtów." },
    { id: "f2", term: "Trzy role M82A1", definition: "Karabin dalekiego zasięgu, wsparcie piechoty (lekko opancerzone cele/fortyfikacje), narzędzie EOD do niszczenia amunicji." },
    { id: "f3", term: "Zasięg skuteczny M82A1", definition: "1830 m na cel powierzchniowy; 1200-1400 m na cel punktowy, zależnie od wielkości celu." },
    { id: "f4", term: "Celownik Swarovski Ranging Reticle", definition: "Luneta 10x dedykowana M82A1, tuba 30 mm, pochylona szyna montażowa, siatka rangingowa 500-1800 m, bez mil-dotów." },
    { id: "f5", term: "Sight-to-burst", definition: "Metoda korekty przy niepewnej odległości: celować nisko i korygować na podstawie obserwowanego miejsca uderzenia pocisku." },
    { id: "f6", term: "CUP", definition: "Copper units of pressure — jednostka ciśnienia komory; M82A1 pracuje przy 55 000 CUP, co wymaga starannej konserwacji." },
    { id: "f7", term: "Napięcie sprężyny lufy M82A1", definition: "Ok. 70 funtów — kluczowy punkt uwagi przy montażu/demontażu klucza lufy." },
    { id: "f8", term: "Sygnatura M82A1 przy strzale", definition: "Znacznie większa niż SWS 7,62 mm — z przodu (wymaga oczyszczenia terenu i zwilżenia gleby) oraz pod kątem ok. 65° na boki." },
    { id: "f9", term: "Ograniczenia infiltracji z M82A1", definition: "Brak zatwierdzonej metody infiltracji spadochronowej lub podwodnej — konieczne planowanie alternatywnego dostarczenia broni na pole walki." },
    { id: "f10", term: "Amunicja M2 Ball", definition: "Referencyjna amunicja dla zasięgu maksymalnego M82A1: 6800 m (7450 jardów)." },
  ],
};
