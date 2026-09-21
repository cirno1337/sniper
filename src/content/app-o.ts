import type { Chapter } from "../types/content";

export const appO: Chapter = {
  id: "app-o",
  kind: "appendix",
  number: "O",
  title: "Aerial Platforms",
  summary:
    "Zatrudnienie snajpera z pokładu statku powietrznego (śmigłowca), gdy pozostanie na ziemi nie jest wykonalne lub taktycznie korzystne — planowanie misji, szkolenie, łączność, pozycje strzeleckie, dobór broni i rygowanie statku powietrznego.",
  sections: [
    {
      id: "mission-planning",
      title: "Planowanie misji z platform lotniczych",
      page: "O-1",
      body: `Zespoły snajperskie mogą stwierdzić, że pozostanie na ziemi nie jest wykonalne lub taktycznie korzystne — wtedy platforma lotnicza (statek powietrzny, A/C) staje się najbardziej korzystnym sposobem zatrudnienia. Elementy SOF, we współpracy ze środkami lotniczymi, wspierają operacje sił szybkiego reagowania (QRF), dając dowódcy naziemnemu precyzyjne wsparcie ogniowe z powietrza.

**Cel:** selektywne angażowanie i neutralizowanie celów punktowych wysokiej wartości z różnych kątów (wysokości) na dystansach do **250 m**, oraz tłumienie celów obszarowych na dystansach do **400 m**, przy minimalizacji szkód ubocznych wśród ludności cywilnej.

**Pierwszy krok planowania:** ustalenie zamiaru dowódcy i dostępności śmigłowców. Jeśli zamiarem jest szturm zdecydowany (deliberate assault), śmigłowce mogą nie być platformą pierwszego wyboru ze względu na ryzyko utraty zaskoczenia.

**Pięć pytań planistycznych (5 Ws):**
- **Kto** — leci misję i kto stanowi zespół snajperski?
- **Co** — za typ misji (szturm, SFAUC) i jaki typ statku powietrznego?
- **Kiedy** — misja jest wykonywana i kiedy odbywają się próby?
- **Gdzie** — misja jest wykonywana (teren miejski czy wiejski)?
- **Dlaczego** — jednostka wykonuje misję i jakie są pożądane rezultaty?

**Czynniki analizy zdolności:** odległość FOB–rejon kryzysowy, czas na stanowisku (wymagania paliwowe), liczba statków powietrznych potrzebnych do wsparcia snajperów i sił szturmowych, zdolność lotu nocnego, znajomość misji SOF przez załogę, skład sił przeciwnika i jego zdolności ogniowe, zdolności CSAR na wypadek zestrzelenia.

**Wsparcie snajperów naziemnych:** platforma lotnicza może pełnić rolę stanowiska obserwacyjnego, pozycji blokującej, precyzyjnej platformy ogniowej redukującej cele punktowe/zespołowe, pojazdu ewakuacyjnego dla rannych, a w środowisku miejskim — środka odstraszającego tłum (np. podmuch wirnika). Śmigłowce mają własne systemy uzbrojenia (**M-60, M-240, M-134 minigun**) — snajperzy i ASO muszą umieć wskazywać cele załodze i być gotowi przejąć obsługę tych systemów.

**Operacje miejskie:** szturm zdecydowany lub misje SFAUC (SF Advanced Urban Combat) mogą wymagać użycia snajperów przenoszonych śmigłowcem. Trasy lotu powinny być starannie planowane, by nie zdradzić nadchodzącego szturmu — możliwe jest wykorzystanie nielotniczych przelotów cywilnych śmigłowców jako "oswojenia" przeciwnika z ruchem powietrznym, choć niestandardowe wzorce lotu mogą też wzbudzić podejrzenia.`,
    },
    {
      id: "training-phases",
      title: "Szkolenie lotnicze — pięć faz",
      page: "O-4",
      body: `Szkolenie snajperów powietrznych prowadzone jest w pięciu fazach:

**Faza I — Planowanie:** koordynacja i deconflikcja między SOF, kontrolą strzelnicy i środkami lotniczymi, w tym uzyskanie zwolnień (waivers) na usunięcie foteli i pasów z pokładu. Zalecany czas planowania: **2-3 tygodnie** wcześniej (po wyszkoleniu zespołu planowanie pojedynczej misji zajmuje już tylko kilka godzin).

**Faza II — Przygotowanie:** pozyskanie celów i amunicji, przygotowanie strzelnicy/celów, rygowanie statku powietrznego, odprawa załogi, odprawa bezpieczeństwa strzelnicy i próby. Oficer bezpieczeństwa strzelnicy (RSO) wyznacza oficera bezpieczeństwa lotu (ASO) dla każdej zmiany (lift).

**Przykładowa odprawa pilota i zespołu snajperskiego (Figure O-1)** obejmuje m.in.:
- Przedstawienie się (starszy snajper, dowódcy zespołów i obserwatorzy, pilot, kopilot, mechanicy pokładowi).
- Pytania do załogi (typ i liczba statków powietrznych, czas dolotu i czas nad celem, liczba przenoszonych osób/sprzętu).
- Informacje ogólne (typ operacji, częstotliwości radiowe, znaki wywoławcze, opis rejonu celu z powietrza, przeszkody).
- Dane koordynacyjne (czas prób, czas rygowania, prędkość i kierunek dolotu, wysokość początkowa, sektory odpowiedzialności).
- Zarys przebiegu operacji (zezwolenie na otwarcie ognia, infiltracja, czas na celu, ewakuacja).
- Sygnały ręka-ramię (czas do celu, gotowość do ładowania, "cleared hot", "cease fire", polecenia dla pilota: slide, nose, tail, hover, zmiana wysokości).
- Procedury awaryjne (problem statku powietrznego, utrata łączności, awaria broni, pomoc rannym, wyjście awaryjne).

**Faza III — Strzelanie na strzelnicy:** po zatwierdzeniu przez RSO statek powietrzny startuje; snajperzy odpinają pasy i przyjmują pozycje strzeleckie na komendę ASO. Sekwencja komend: RSO → "CLEAR TO FIRE" → dowódca statku → "WEAPONS FREE" → ASO → zezwolenie dla snajpera. **Każdy, w każdej chwili, jest uprawniony do wywołania "CEASE FIRE"** przy zaobserwowaniu niebezpiecznego działania.

**Faza IV — Analiza powykonawcza (AAR):** natychmiastowa odprawa ze wszystkimi uczestnikami w celu udoskonalenia TTP i zebrania wniosków, obejmująca fazy I-III.

**Faza V — Odtworzenie gotowości:** rozliczenie sprzętu, policja strzelnicy, oczyszczenie strzelnicy i czyszczenie broni.`,
    },
    {
      id: "communications",
      title: "Łączność i sygnały ręka-ramię",
      page: "O-8",
      body: `Łączność jest jednym z najbardziej złożonych aspektów misji lotniczej — dodanie statku powietrznego do już zatłoczonych sieci radiowych SOF wymaga starannej koordynacji.

**Plan łączności musi obejmować:** metody podstawowe, zapasowe, awaryjne i kontyngencyjne, oraz sieci: ziemia-powietrze i powietrze-ziemia, ziemia-ziemia, żądanie ewakuacji medycznej (DUSTOFF/MEDEVAC), snajper-dowódca naziemny.

**Sieci radiowe do zapewnienia:** statek powietrzny–statek powietrzny (przy wielu A/C), statek powietrzny–C2 sił naziemnych, zespół snajperski–pilot (przez ICS), zespół–C2 sił naziemnych, zespół–zespoły naziemne, statek powietrzny–FOB.

**Podstawowa łączność:** bezpośrednia, przez hełmy z dwoma kanałami komunikacyjnymi (ograniczona dostępność w jednostkach SF — możliwa improwizacja z hełmu marynarki wojennej lub załogi pojazdów bojowych, których kształt nie koliduje z przyłożeniem policzka do kolby).

**Łączność zapasowa (pośrednia):** ASO odbiera informacje o celu od dowódcy naziemnego przez słuchawki i radia, następnie wskazuje cel snajperowi bezpośrednio (np. wskaźnikiem laserowym) lub pośrednio (punkty odniesienia, metoda zegarowa). Snajper przekazuje ASO sygnały ręka-ramię do korekty ustawienia statku powietrznego, a ASO przekazuje je pilotowi.

**Kluczowe sygnały ręka-ramię snajper → ASO:**

| Sygnał | Gest | Znaczenie |
|---|---|---|
| „UP” | Kciuk w górę | Nabrać wysokości |
| „DOWN” | Kciuk w dół | Stracić wysokość |
| „HOVER” | Zaciśnięta pięść (freeze) | Zatrzymać ruch statku powietrznego |
| „SLIDE LEFT/RIGHT” | Otwarta dłoń pchająca w bok / wyciągnięty palec wskazujący | Przesunąć się bokiem |
| „FLY FORWARD/BACKWARD” | Wyciągnięty palec wskazujący do przodu/tyłu | Lot do przodu/tyłu |
| „PIVOT LEFT/RIGHT” | Dłoń pozioma wskazująca kierunek | Obrót wokół osi |

*Uwaga terminologiczna:* komenda „TAIL LEFT” porusza **dziób** statku powietrznego **w prawo** (i odwrotnie) — pilot myśli o ustawieniu w kategoriach ruchu ogona, bo tak działają jego sterowniki. To najczęściej mylona para komend.`,
    },
    {
      id: "employment-roe",
      title: "Zatrudnienie snajpera w powietrzu i zasady użycia siły",
      page: "O-10",
      body: `Kluczowym wyzwaniem strzelectwa z platformy powietrznej jest precyzyjne angażowanie celów na szybko zmieniających się dystansach i kątach, w ruchu, przy zachowaniu świadomości sytuacyjnej i bezpieczeństwa lufy.

**Strzał pod kątem:** pocisk trafia wyżej niż normalnie — im większy kąt, tym wyższe trafienie. Skuteczna technika do **200 m i poniżej**: wyzerować karabin lub ustawić celownik na 175-200 m i celować (lub stosować hold-off) na rzeczywistą odległość do celu. Powyżej 200 m decyduje doświadczenie snajpera i znajomość wartości hold-off dla ustalonych zer (np. 300/400/500 m) — pozwala to na pojedynczą zmianę elewacji obejmującą dalsze odległości.

**Identyfikacja/wskazanie celu:** dwie metody, zależnie od dostępnej łączności — bezpośrednia (dowódca naziemny rozmawia wprost ze snajperem przez zintegrowany hełm) lub przez ASO jako obserwatora (zalecane lornetki o niskim powiększeniu i szerokim polu widzenia w dzień).

**Trzy pozycje strzeleckie na pokładzie:**
- **Leżąca (prone)** — wibracje śmigłowca przenoszą się bezpośrednio na broń przez dwójnóg lub ramię.
- **Siedząca na podłodze (floor-seated) z pasem nośnym** — prawdopodobnie najlepsza: oba łokcie wsparte od wewnątrz kolan, nogi działają jak amortyzator wibracji, dobre pole ostrzału.
- **Wariant siedzący w fotelu** — dla wyższych snajperów w UH-60, w jednym z tylnych foteli przy drzwiach, z pozycją siedzącą wspartą pasem.

**Dodatkowe wsparcie pozycji:** maty strzeleckie złożone i przyklejone taśmą do fotela, wykorzystanie drzwi załogowych serii H-60, plecaki z częściowo napompowanym materacem jako podpórka, pas użytkowy w poprzek drzwi/rampy (przeciwwskazany dla zwykłych SWS — obniża celność; uzasadniony tylko dla ciężkich systemów jak Barrett .50 lub M500 .50), koce balistyczne na podłodze (tłumią wibracje, zalecane dodatkowe wyściełanie).

**Zasady użycia siły (ROE) — kluczowe wytyczne:**
- Jeśli statek powietrzny zostanie ostrzelany, snajperzy odpowiadają ogniem zgodnie z ROE, dążąc do natychmiastowej neutralizacji przeciwnika.
- Jeśli siły naziemne zostaną zaangażowane, snajperzy prowadzą celny ogień wg ROE.
- Snajperzy selektywnie angażują tylko cele wskazane przez dowódcę naziemnego jako spełniające ROE.
- Uciekający uzbrojeni przeciwnicy: ogień w stopniu potrzebnym do powstrzymania/stłumienia zgodnie z ROE.
- Uciekający bez potwierdzonej broni: strzały ostrzegawcze, kontynuacja osłony QRF.`,
    },
    {
      id: "sws-equipment",
      title: "Dobór broni, sprzęt i rygowanie statku powietrznego",
      page: "O-12",
      body: `**Dobór broni wg typu statku powietrznego:** systemy 7,62 mm i mniejsze zalecane w lżejszych śmigłowcach z drzwiami bocznymi (UH-60, UH-1) — podmuch wylotowy broni .50 cal może rozpraszać pilota. Systemy do .50 cal dopuszczalne w statkach z rampą tylną (CH-47, CH-53).

| System | Zalety | Wady |
|---|---|---|
| **M4 / karabinek specjalny** | Lekki, wysoka szybkostrzelność, szeroki wybór optyki niskiego powiększenia, dobre osprzęty NVD | 5,56 mm ma słabszą siłę zatrzymującą i balistykę terminalną niż 7,62 mm; zalecany pocisk 77-grainowy zamiast standardowego |
| **7,62 mm gazowe (M21, AR-10, Knight SR25)** | Wysoka szybkostrzelność, dobra balistyka zewnętrzna/terminalna, średnia waga, wsparcie pasem | Wysokie powiększenie (10x+) niesie te same wady co M24 |
| **M24 SWS (bolt-action)** | Działa, ale z zastrzeżeniami | Relatywnie ciężki, wolna szybkostrzelność, trudność utrzymania wysokiego powiększenia przy wibracjach — wymaga strzelania obydwoma oczami otwartymi |

**Optyka:** Aimpoint (z lub bez powiększalnika 2x), ACOG/Day Optical Scope 4x, zmiennopowiększeniowe Leupold 3,5-10x lub 4,5-14x przy niskim powiększeniu. Amerykańskie lunety (Leupold i większość innych) mają siatkę na **drugiej płaszczyźnie ogniskowej** — mil-doty kalibrowane tylko przy jednym powiększeniu (zwykle maksymalnym); europejskie lunety (Kahles, Schmidt & Bender, Swarovski, Zeiss) mają **pierwszą płaszczyznę ogniskową** — mil-doty zachowują skalę przy każdym powiększeniu. Nowsze serie Leupold LR i siatki Premier Gen II również są na pierwszej płaszczyźnie.

**Wyposażenie osobiste:** kamizelka kuloodporna i hełm ochronny obowiązkowe. Day pack (amunicja, sygnalizacja) zabezpieczony karabińczykiem/klamrą fastex, dostępny do szybkiego przeładowania; dodatkowo: optyka noktowizyjna, mapy, sprzęt łączności awaryjnej, apteczka, żywność i woda. LBE nie jest noszone na sobie (dla celności), ale zabezpieczone w zasięgu ręki.

**Rygowanie UH-60 (modyfikować wg typu statku powietrznego):**
- **Fotele:** usunięcie wszystkich (wymaga zwolnienia FAA) lub pozostawienie 1 fotela centralnego + 4 tylnych (4 snajperów + 1 ASO).
- **Koce balistyczne:** cała podłoga pokryta min. jedną warstwą (preferowane dwie), mocno zabezpieczone taśmą 100-mph przy drzwiach.
- **Dodatkowe wyściełanie:** pianka lub maty do spania, zabezpieczone przed przesuwaniem.
- **Zaczep bezpieczeństwa:** pierścień bezpieczeństwa z liny wspinaczkowej/taśmy rurowej 1-calowej, min. 4 punkty mocowania, podwójna redundancja (dwie oddzielne liny lub jedna z zapętleniem), węzły typu ósemka, karabińczyki blokujące.
- **Uprząż bezpieczeństwa:** uprząż lotnicza (monkey harness), komercyjna uprząż wspinaczkowa, siedzisko rappelowe (Swiss seat) z liną bezpieczeństwa.

**Personel naziemny:** OIC, NCOIC, asystent NCOIC, oficer bezpieczeństwa strzelnicy (RSO), kontroler naziemny statku powietrznego, osoby bezpieczeństwa, medyk. **Personel powietrzny:** dowódca statku powietrznego (airborne OIC), ASO, snajperzy, załoga.

**Materiały celów (od najlepszych do najgorszych):** cele stalowe/żelazne (natychmiastowa informacja zwrotna, minimalna obsługa, ale ciężkie i trudne w budowie) → gliniane rzutki/dachówki (dobra informacja zwrotna, tanie, ale wymagają wymiany) → balony/nadmuchane rękawice chirurgiczne (słabe, niszczone przez podmuch wirnika i upał) → cele papierowe (najgorsze — brak informacji zwrotnej, czasochłonna obsługa).`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Na jakim maksymalnym dystansie snajper powietrzny ma selektywnie angażować cele punktowe wysokiej wartości?",
      options: ["100 m", "250 m", "400 m", "600 m"],
      correctIndex: 1,
      explanation: "Cele punktowe wysokiej wartości są angażowane selektywnie na dystansach do 250 m; cele obszarowe tłumione są do 400 m.",
    },
    {
      id: "q2",
      question: "Ile faz obejmuje szkolenie snajperów powietrznych?",
      options: ["Trzy", "Cztery", "Pięć", "Sześć"],
      correctIndex: 2,
      explanation: "Szkolenie prowadzone jest w pięciu fazach: Planowanie, Przygotowanie, Strzelanie na strzelnicy, Analiza powykonawcza (AAR), Odtworzenie gotowości.",
    },
    {
      id: "q3",
      question: "Kto ma prawo wywołać „CEASE FIRE” podczas fazy strzelania na strzelnicy lotniczej?",
      options: ["Tylko RSO", "Tylko dowódca statku powietrznego", "Każdy, kto zaobserwuje niebezpieczne działanie", "Tylko ASO"],
      correctIndex: 2,
      explanation: "Każdy, w każdej chwili, jest uprawniony do wywołania „CEASE FIRE” przy zaobserwowaniu niebezpiecznego działania.",
    },
    {
      id: "q4",
      question: "Która pozycja strzelecka na pokładzie jest opisana jako prawdopodobnie najlepsza?",
      options: ["Leżąca (prone)", "Siedząca na podłodze z pasem nośnym", "Stojąca", "Klęcząca"],
      correctIndex: 1,
      explanation: "Pozycja siedząca na podłodze z pasem nośnym pozwala nogom działać jak amortyzator wibracji i daje dobre pole ostrzału.",
    },
    {
      id: "q5",
      question: "Jaki efekt ma komenda „TAIL LEFT” przekazywana pilotowi?",
      options: [
        "Porusza dziób statku powietrznego w lewo",
        "Porusza dziób statku powietrznego w prawo",
        "Zwiększa wysokość lotu",
        "Zatrzymuje statek powietrzny",
      ],
      correctIndex: 1,
      explanation: "„TAIL LEFT” porusza ogon w lewo, co w efekcie kieruje dziób statku powietrznego w prawo — to najczęściej mylona para komend.",
    },
    {
      id: "q6",
      question: "W jakich statkach powietrznych zaleca się używanie broni kalibru do .50, takiej jak Barrett?",
      options: [
        "W lekkich śmigłowcach z drzwiami bocznymi (UH-60, UH-1)",
        "W statkach powietrznych z tylną rampą (CH-47, CH-53)",
        "W żadnych — .50 cal jest zabroniony w powietrzu",
        "Tylko w samolotach stałopłatowych",
      ],
      correctIndex: 1,
      explanation: "Podmuch broni .50 cal może rozpraszać pilota w małych śmigłowcach, dlatego cięższe systemy dopuszcza się w statkach z rampą tylną typu CH-47/CH-53.",
    },
    {
      id: "q7",
      question: "Czym różnią się amerykańskie lunety (druga płaszczyzna ogniskowa) od europejskich (pierwsza płaszczyzna) w kontekście mil-dotów?",
      options: [
        "Nie ma żadnej różnicy",
        "W europejskich mil-doty zachowują skalę przy każdym powiększeniu, w amerykańskich są dokładne tylko przy jednym ustawieniu",
        "Europejskie lunety nie mają mil-dotów",
        "Amerykańskie lunety są zawsze dokładniejsze",
      ],
      correctIndex: 1,
      explanation: "Lunety pierwszej płaszczyzny ogniskowej (typowo europejskie) zachowują poprawną skalę mil-dotów przy każdym powiększeniu; lunety drugiej płaszczyzny (typowo amerykańskie) są kalibrowane tylko przy jednym ustawieniu, zwykle najwyższym.",
    },
    {
      id: "q8",
      question: "Które materiały celów są ocenione jako najlepszy wybór do treningu lotniczego?",
      options: ["Cele papierowe", "Balony", "Cele stalowe/żelazne", "Kartonowe pudła"],
      correctIndex: 2,
      explanation: "Cele stalowe/żelazne dają natychmiastową informację zwrotną i wymagają minimalnej obsługi, mimo trudności w budowie i wagi.",
    },
    {
      id: "q9",
      question: "Ile punktów mocowania minimalnie powinien mieć pierścień bezpieczeństwa w rygowaniu UH-60?",
      options: ["Dwa", "Trzy", "Cztery", "Sześć"],
      correctIndex: 2,
      explanation: "Zalecany pierścień bezpieczeństwa jest połączony z minimum czterema punktami mocowania (hard points) na podłodze, z podwójną redundancją.",
    },
  ],
  flashcards: [
    { id: "f1", term: "QRF", definition: "Quick Reaction Force — siły szybkiego reagowania, którym snajperzy powietrzni zapewniają precyzyjne wsparcie ogniowe z pokładu statku powietrznego." },
    { id: "f2", term: "5 Ws (planowanie lotnicze)", definition: "Kto, Co, Kiedy, Gdzie, Dlaczego — pięć podstawowych pytań planistycznych misji z platformy lotniczej." },
    { id: "f3", term: "ASO", definition: "Air Safety Officer — oficer bezpieczeństwa lotu, wyznaczany przez RSO na każdą zmianę (lift); wskazuje cele, przekazuje sygnały pilotowi i nadzoruje bezpieczeństwo." },
    { id: "f4", term: "RSO", definition: "Range Safety Officer — oficer bezpieczeństwa strzelnicy, odpowiedzialny za bezpieczny przebieg treningu, rygowanie statku powietrznego i instruktaż ASO." },
    { id: "f5", term: "Figure O-1 (Air Brief)", definition: "Wzorcowa odprawa pilota i zespołu snajperskiego przed misją/treningiem lotniczym, obejmująca przedstawienie się, dane koordynacyjne, sygnały i procedury awaryjne." },
    { id: "f6", term: "ICS", definition: "Intercom system — pokładowy system łączności wewnętrznej, podstawowy kanał komunikacji zespołu snajperskiego z pilotem." },
    { id: "f7", term: "Floor-seated position", definition: "Pozycja strzelecka siedząca na podłodze statku powietrznego z pasem nośnym, uznawana za najlepszą — nogi amortyzują wibracje." },
    { id: "f8", term: "Druga płaszczyzna ogniskowa (SFP)", definition: "Typowe umiejscowienie siatki w amerykańskich lunetach zmiennopowiększeniowych — mil-doty dokładne tylko przy jednym (zwykle maksymalnym) powiększeniu." },
    { id: "f9", term: "Pierwsza płaszczyzna ogniskowa (FFP)", definition: "Typowe umiejscowienie siatki w europejskich lunetach (Kahles, Schmidt & Bender, Swarovski, Zeiss) — mil-doty zachowują skalę przy każdym powiększeniu." },
    { id: "f10", term: "Ballistic blanket", definition: "Koc balistyczny mocowany do podłogi statku powietrznego, tłumiący wibracje i chroniący snajpera w pozycji siedzącej/leżącej." },
    { id: "f11", term: "Bight (w rygowaniu)", definition: "Zapętlenie liny tworzące dodatkowy punkt mocowania w pierścieniu bezpieczeństwa, izolowane węzłami (np. ósemkowymi) dla redundancji." },
    { id: "f12", term: "Racetrack (orbitowanie)", definition: "Wzorzec lotu okrężnego (racetrack) wykonywany przez statek powietrzny wokół celu, z ustalonym kierunkiem (zgodnie/przeciwnie do ruchu wskazówek zegara)." },
    { id: "f13", term: "SFAUC", definition: "SF Advanced Urban Combat — zaawansowane działania bojowe w terenie miejskim Sił Specjalnych, jeden ze scenariuszy wymagających snajpera powietrznego." },
    { id: "f14", term: "VBSS", definition: "Visit, Board, Search, and Seizure — operacja abordażowa na morzu, podczas której platforma lotnicza staje się główną platformą strzelecką i ewakuacyjną." },
  ],
};
