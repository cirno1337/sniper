import type { Chapter } from "../types/content";

export const ch05: Chapter = {
  id: "ch05",
  kind: "chapter",
  number: "5",
  title: "Zastosowanie taktyczne (Employment)",
  summary:
    "Użycie snajpera SF jest złożone — dobrze zaplanowane i wykorzystane z pomysłowością, daje efekt niewspółmiernie duży do zaangażowanych zasobów. Planista musi rozumieć unikalne możliwości i ograniczenia snajpera: metody użycia, organizację, dowodzenie, analizę celu, planowanie misji oraz wsparcie w operacjach specjalnych, kontrsnajpingu, działaniach konwencjonalnych i przy zamieszkach cywilnych.",
  sections: [
    {
      id: "methods",
      title: "Metody zastosowania",
      page: "5-1",
      body: `Planista musi dobrać metodę działania snajpera do celu i pożądanego efektu. Zastosowanie snajperów SF dzieli się na cztery kategorie:

- **Obserwacja i rozpoznanie** — skryty ruch, infiltracja, optyka dalekiego zasięgu i działanie w ograniczonej widoczności czynią snajpera zbliżonym do zwiadowcy. Zbieranie danych wywiadowczych (HUMINT) jest funkcją drugorzędną — nie należy używać snajperów wyłącznie do HUMINT, ale wykorzystywać tę możliwość, gdy się nadarza.
- **Interdykcja punktowa** — "polowanie" na konkretny cel (osobowy lub materialny), często wymagające trudnej infiltracji, precyzyjnej nawigacji, unikania sił wroga i pokonania systemów zabezpieczeń. Obejmuje też sytuacje strzeleckie typu kontrterrorystycznego.
- **Nękanie dalekiego zasięgu (long-range harassment)** — celem nie jest rozstrzygnięcie starcia, lecz wywołanie strachu psychologicznego i ograniczenie swobody działania wroga. Największa swoboda działania snajpera — może angażować cele okazjonalne wg własnej oceny. Standardowo nie angażuje się celów bliżej niż **400 m** (100 m poza typowym zasięgiem skutecznym broni strzeleckiej przeciwnika); średni dystans nękania to **600 m**.
- **Operacje zabezpieczające** — seria wzajemnie wspierających się posterunków/kordonów snajperskich odmawiająca wrogowi swobody działania w danym rejonie (przykład: operacje USMC w Bejrucie). Ze względu na ograniczoną siłę ognia i brak zdolności manewrowych snajperzy w tej roli powinni być zintegrowani z konwencjonalnymi siłami zabezpieczenia i odwodowymi — inaczej łatwo ich stłumić i zmanewrować.`,
      figures: [
        {
          id: "web-competition",
          src: "/images/ch05/web-competition-rangefinder.jpg",
          caption:
            "Zdjęcie poglądowe: żołnierz podczas zawodów USASOC International Sniper Competition używa cyfrowego dalmierza (źródło: Wikimedia Commons, public domain, US Army) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "planning",
      title: "Planowanie zatrudnienia snajpera",
      page: "5-2",
      body: `Ogień snajpera, w przeciwieństwie do konwencjonalnego ognia strzeleckiego (nacisk na objętość), kładzie nacisk na **precyzję**. Dwuosobowy zespół dostarcza ograniczoną objętość ognia — źle użyty snajper staje się zwykłym żołnierzem, tyle że z wolnostrzelną bronią. Kluczowe czynniki planowania:

**Standoff (dystans bezpieczny):** planowanie opiera się na zdolności snajpera do utrzymania grupy strzałów w **2 MOA** w warunkach zbliżonych do bojowych. Standardy planistyczne:

| Cel | Skuteczność |
|---|---|
| Natychmiastowa eliminacja (nonreflexive), cel stacjonarny do 200 m | pierwszy strzał |
| Cel stacjonarny do 600 m | 90% |
| Cel stacjonarny do 800 m | 50% |
| Cel ruchomy na 200 m | 100% |
| Cel ruchomy na 300 m | 90% |
| Cel typu snap (ekspozycja 3 s) na 200 m | 100% |
| Cel typu snap (ekspozycja 3 s) na 300 m | 90% |

**Zwodzenie (deception):** operacyjne (np. użycie broni innego kraju dla „podpisu" balistycznego, upozorowanie awarii/sabotażu zamiast interdykcji) i taktyczne (bezpieczeństwo infiltracji, łączności, C2). Snajper rzadko odda więcej niż dwa strzały z jednej pozycji — dźwięk (nawet tłumiony) staje się coraz łatwiejszy do namierzenia przy powtórzeniach; wbrew filmowym wyobrażeniom, snajper prowadzący przedłużony pojedynek ogniowy z tej samej pozycji zwykle przegrywa.

**Czas:** misja snajperska zwykle wymaga więcej czasu niż konwencjonalna — jedyną obroną jest pozostanie niewykrytym; pośpiech grozi kompromitacją misji.

**Użycie zespołowe:** nigdy mniej niż dwuosobowy zespół; 3-4-osobowe elementy możliwe zależnie od misji, czasu trwania, widoczności i wielkości obszaru celu. Największą zaletą pracy w parze jest odseparowanie obserwatora od procesu strzelania — strzelec może w pełni skupić się na akcie strzału.

**Teren:** tereny gęsto zalesione/pokawałkowane ograniczają pełne wykorzystanie zasięgu broni — wróg łatwo tłumi snajpera działającego poniżej minimalnego standoff (zwykle 400 m).

**Innowacyjność:** zdolność do improwizacji to najważniejsza cecha snajpera — i planisty. Snajper to broń okazji, nie rutyny; zespoły snajperskie warto włączać w proces planowania.`,
    },
    {
      id: "organization",
      title: "Organizacja",
      page: "5-5",
      body: `Zespoły snajperskie **nigdy nie powinny być rozdzielane** — działają najskuteczniej w wyszkolonych parach. Ponadzespołowe grupowanie odbywa się doraźnie wg potrzeb misji, zawsze pod zarządem specjalisty snajperskiego jednostki.

| Poziom | Skład | Szczebel przydziału |
|---|---|---|
| **Zespół (team)** | 2 równorzędnie wyszkolonych snajperów | Kompania (najniższy szczebel centralizacji z zachowaniem efektywności) |
| **Drużyna (squad)** | Dowódca, zastępca, 3 starszych + 3 młodszych snajperów (pary starszy+młodszy) = 3-4 zespoły | Batalion |
| **Sekcja (section)** | Element dowodzenia (dowódca sekcji, zastępca) + wsparcia (rusznikarz, radiooperator) + 8-10 zespołów operacyjnych | Brygada/pułk (przy S-2 lub S-3; dowódca sekcji = koordynator snajperski brygady) |
| **Pluton (platoon)** | Dowódca plutonu, sierżant, radiotelefonista/kierowca, rusznikarz + 3 drużyny (dowódca drużyny + 5 zespołów) | Dywizja (pod kontrolą oficera wywiadu dywizji) |

Zespół w organizacji zapewnia: wzajemne bezpieczeństwo, obniżenie stresu, wydłużenie czasu użycia i szybsze angażowanie celów. Pluton może prowadzić głęboką penetrację tyłów wroga, operacje "stay-behind" i ochronę tyłów.`,
      figures: [
        {
          id: "web-team-org",
          src: "/images/ch05/web-team-organization.jpg",
          caption:
            "Zdjęcie poglądowe: wielonarodowe pary snajperskie NATO na strzelnicy w Grafenwöhr (źródło: Wikimedia Commons, public domain, US Army/International Special Training Centre) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "command-control",
      title: "Dowodzenie i łączność (C2)",
      page: "5-7",
      body: `Snajper często działa tam, gdzie bezpośrednia kontrola jest niemożliwa — musi wykonywać misję z własnej inicjatywy w ramach zamiaru dowódcy. To jeden z powodów, dla których selekcja wymaga wysokiej motywacji i samodzielności.

**Kontrola pośrednia:** zasady użycia siły (ROE) i środki kontroli ognia (strefy zakazu/dozwolonego ognia, linie koordynacji ognia). Problem: typowe ROE pokoju wymagają, by cel stanowił bezpośrednie zagrożenie — a modus operandi snajpera to angażowanie celów, które zagrożeniem *jeszcze nie są*, poza zasięgiem broni strzeleckiej. Gdy przeciwnik wejdzie w minimalny standoff snajpera, 12-funtowy karabin z lunetą nie ma szans z AK-47/M16 na krótkim dystansie — ROE musi więc zapewniać snajperowi ochronę (element zabezpieczenia lub wycofanie z operacji).

**Kontrola bezpośrednia:** radio i łączność przewodowa (wire).
- *Nietechniczna* (rendezvous, zrzuty/odbiory wiadomości) — bezpieczna, ale wolna i złożona w wykonaniu; jedyna opcja w obszarach zamkniętych/z możliwościami przechwytu elektronicznego.
- *Radio* — niemal natychmiastowa, dwukierunkowa, mobilna — ale sygnatura elektroniczna to główne ryzyko: wykrycie transmisji jest równie groźne jak przechwycenie treści. Zespół musi zawsze mieć sposób na natychmiastowy odwrót (recall).
- *Przewodowa (wire)* — odporna na zagłuszanie/przechwyt, dobra do stanowisk statycznych, ale czasochłonna w instalacji i mało mobilna.

**Koordynacja** z jednostkami wspieranymi i niewspieranymi w AO obejmuje m.in.: patrole, plany ognia, zabezpieczenie lokalne, przeszkody, punkty spotkań, przejścia przez linie własne, plan łączności — ale nigdy na tyle szczegółowo, by pojmany zespół mógł skompromitować cały sektor.

**Relacje wsparcia:**
- **OPCON (operational control)** — snajperzy podlegają jednostce wspieranej tylko na czas operacji, potem wracają do macierzystej jednostki — najbardziej elastyczna, optymalna metoda.
- **Attachment (przydział)** — dla dłuższych operacji/większych odległości; jednostka przyjmująca zapewnia pełne zaopatrzenie; najlepiej razem z koordynatorem snajperskim (jeśli niemożliwe — funkcję przejmuje najbardziej doświadczony snajper).`,
    },
    {
      id: "target-analysis",
      title: "Analiza celu i CARVER",
      page: "5-10",
      body: `Cele snajperskie dzielą się na **osobowe i materiałowe**, każdy z wartością **taktyczną** (lokalną, krótkoterminową — np. snajperzy wroga, kluczowi dowódcy, zwiadowcy, obsługa broni zespołowej) lub **strategiczną**. Rozróżnienie zamachu (assassination, nielegalny) od zasadzki wojskowej (legalna) zależy od charakteru zamierzonego efektu — politycznego vs wojskowego.

**Krytyczne węzły (critical nodes)** systemu dowodzenia i kontroli (C2) wroga — snajper celuje w komponenty, bez których cały system traci funkcjonalność:
- **Procedury** — snajper wywołuje strach zmuszający wroga do zmiany rutyn i przekierowania zasobów na bezpieczeństwo.
- **Personel** — niekoniecznie wysoki stopniem, może być kluczowa grupa zawodowa.
- **Sprzęt** — pojedynczy element rzadko krytyczny, ale komponent wspólny wielu systemom (np. antena radaru) może mieć duży efekt zbiorczy.
- **Obiekty** — snajper skupia się na krytycznych elementach dużego kompleksu (węzły C2, zasilanie, transport), nie na całości.
- **Łączność** — najbardziej krucha i rozpoznawalna część systemów C2, często najłatwiejsza do interdykcji.

**Proces CARVER** — model analizy celu dla operacji specjalnych, stosowany też przy interdykcji snajperskiej:

| Litera | Kryterium | Znaczenie |
|---|---|---|
| **C** | Criticality (krytyczność) | Wpływ zniszczenia celu na przeciwnika |
| **A** | Accessibility (dostępność) | Możliwość dotarcia do celu i wycofania się po strzale |
| **R** | Recuperability (odtwarzalność) | Czas potrzebny wrogowi na naprawę/zastąpienie celu |
| **V** | Vulnerability (podatność) | Czy snajper ma broń i umiejętności do trafienia krytycznego punktu |
| **E** | Effect (efekt) | Pożądany skutek — polityczny, ekonomiczny, społeczny, psychologiczny |
| **R** | Recognizability (rozpoznawalność) | Czy cel da się jednoznacznie zidentyfikować i zaangażować |

Interdykcja celów materiałowych jest trudniejsza niż osobowych — kluczowym wyzwaniem jest identyfikacja podatnych węzłów, tak by ogień precyzyjny zastąpił skuteczność broni znacznie potężniejszej.`,
    },
    {
      id: "mission-planning",
      title: "Planowanie misji",
      page: "5-14",
      body: `Planowanie odbywa się na dwóch poziomach: **ponadzespołowym** (oficer zatrudnienia snajperów/SEO koordynuje kilka zespołów) i **zespołowym** (rozkaz operacyjny snajpera pełni funkcję narzędzia planistycznego, rozkazy ostrzegawcze nie są tu potrzebne).

**Rozkaz operacyjny snajpera (5 akapitów, Figure 5-1):**

1. **SYTUACJA** — siły wroga (pogoda, teren, jednostki wroga); siły własne (sąsiednie jednostki — ale zespół, ze względu na ryzyko schwytania, nie powinien otrzymywać ich lokalizacji, tylko np. strefy wolnego/zakazanego ognia).
2. **MISJA** — kto, co, gdzie, kiedy.
3. **WYKONANIE** — zamiar dowódcy; koncepcja operacji (fazowo: od preinfiltracji do ewakuacji i odprawy); wsparcie ogniowe; misje następcze; instrukcje koordynacyjne obejmujące m.in.: działania w rejonie celu (bezpieczeństwo, budowa stanowiska, usuwanie urobku, kamuflaż i sektory ognia, dziennik obserwacji/karta ostrzału/szkic wojskowy), techniki ruchu, trasę, przejście przez linie własne, punkty zbiórki (dla pary lepszy rendezvous niż rally point), działania przy kontakcie z wrogiem (unikać walki, przy ataku lotniczym — ukryć się, nigdy nie angażować samolotu), działania w obszarach niebezpiecznych, działania na postojach, próby (rehearsals), inspekcje (przed infiltracją, po infiltracji, w ORP przed zajęciem stanowiska), odprawa (debriefing), PIR/IR, załączniki.
4. **ZABEZPIECZENIE LOGISTYCZNE** — racje żywnościowe, uzbrojenie/amunicja, umundurowanie/sprzęt, postępowanie z zabitymi/rannymi, jeńcami, skrytki (caches) i punkty wsparcia misji (MSS).
5. **DOWODZENIE I ŁĄCZNOŚĆ** — częstotliwości/znaki wywoławcze (wg SOI), pirotechnika i sygnały, hasło i odzew, słowa kodowe/meldunki, struktura dowodzenia.

**Profil terenu** — przesadzony widok z boku fragmentu terenu, budowany z mapy warstwicowej, pozwala określić dostępność linii obserwacji (LOS), pozycje defiladowe, martwe pole i potencjalne stanowiska broni bezpośredniej. Jeśli linia prosta start-cel przecina narysowany profil — LOS nie istnieje.

**Nakładka wschodu/zachodu słońca (SSO)** — graficzne przedstawienie azymutu wschodzącego/zachodzącego słońca względem celu (na bazie tabeli azymutów dla danej daty/szerokości geograficznej), pomocne przy planowaniu kierunku natarcia i lokalizacji stanowisk tak, by światło działało na korzyść zespołu.`,
    },
    {
      id: "so-uw-fid",
      title: "Wsparcie UW i FID",
      page: "5-18",
      body: `**Unconventional Warfare (UW):** snajper SF szkoli i koordynuje snajperów sił oporu, ucząc zarówno taktyk konwencjonalnych, jak i niekonwencjonalnych. UW/wojna partyzancka (GW) obejmuje trzy fazy:

- **Rozbudowa (buildup):** snajperzy głównie szkolą i pełnią funkcję koordynatorów; skuteczni w roli nękania i zasadzek snajperskich — uderzają przy minimalnej ekspozycji, odbierają wrogowi poczucie bezpiecznego zaplecza, budują morale siły UW przy minimalnym ryzyku i ograniczają straty cywilne (ogień wybiórczy). **Kluczowe rozróżnienie:** zasadzka służy celom wojskowym, zamach (assassination) celom politycznym — nielegalny wg Executive Order 12333 (1981).
- **Konsolidacja:** rola snajpera wraca do modelu konwencjonalnego wraz ze wzrostem sił UW.
- **Połączenie (linkup):** snajperzy działają głównie jako siły zabezpieczenia i ochrony tyłów (RAP) — znają teren z wcześniejszego okresu działania.

Typowe zadania w fazie początkowej: nękanie (>500 m), infiltracja tyłów przed atakiem, interdykcja sił wzmocnienia, obserwacja/zabezpieczenie długoterminowe, wsparcie ofensywne i defensywne.

**Foreign Internal Defense (FID):** rola snajpera SF to głównie **nauczyciel** — w FID pasywnym wyłącznie szkolenie/doradztwo, w aktywnym także rola operacyjna (kordony, posterunki obwodowe, zasadzki, nadzór miejski, zamieszki cywilne). W ramach RAP snajper chroni obiekty krytyczne, kryje luki między jednostkami, zapobiega usuwaniu przeszkód i tropi patrole, które przeniknęły na tyły. *Dodatek N zawiera przykładowy kompleks poligonowy (SRC) do szkolenia.*

**Organizacja w UW/FID:** elementy powyżej szczebla zespołu — drużyna (10 ludzi/5 zespołów) na szczeblu batalionu, sekcja na szczeblu pułku/brygady. Koordynator snajperski wymagany na szczeblu pułku (pożądany w batalionie), przypisany do S-2/G-2, ściśle współpracujący z S-3/G-3.`,
    },
    {
      id: "da-operations",
      title: "Działania bezpośrednie (DA)",
      page: "5-24",
      body: `W misjach DA (krótkie, ograniczone uderzenia) snajper pełni jedną lub więcej z czterech funkcji: **nękanie**, **zasadzka wieloelementowa (multiple team area sniper ambush)** — kilka zespołów angażuje cele ogniem zsynchronizowanym lub jednoczesnym, ustalona liczba strzałów kończy zasadzkę; **kordon snajperski** — seria posterunków uniemożliwiająca wejście/wyjście z obszaru celu; **interdykcja** — utrudnianie użycia obszaru/trasy (ograniczona wobec pojazdów, poza bronią wielkokalibrową, ale skuteczna w zmuszaniu załóg pancernych do "zamknięcia się", co zwiększa ich podatność na broń przeciwpancerną).

**Siły uderzeniowe DA** dzielą się na cztery elementy, w których snajper może wspierać:

| Element | Rola snajpera |
|---|---|
| **Dowodzenia** | Rozpoznanie ORP/tras/miejsc ewakuacji, obserwacja celu, odwód ogniowy, osłona skrzydeł i tyłów wroga |
| **Zabezpieczenia** | Ochrona punktów zbiórki, wczesne ostrzeganie, blokowanie dróg dojścia, zapobieganie ucieczce wroga — **nie kolokować z bronią zespołową** (by nie dzielić z nią stłumienia ogniem) |
| **Wsparcia** | Precyzyjny ogień wspierający szturm — optyka umożliwia identyfikację celu blisko sił własnych bez efektu "lift and shift" (przesuwania ognia); organizacja w 4-osobowe zespoły (dwie pary); zadania: zakłócanie C2, tłumienie ochrony, redukcja punktów oporu, opóźnianie sił ścigających |
| **Szturmowy** | Rzadko — szybki ruch i walka z bliska niweczą standoff snajpera; może osłaniać przemieszczanie przez martwe pole lub wspierać z platform powietrznych (Dodatek O) |

**Rozważania nt. wroga:** pojazdy opancerzone zwykle na obwodzie (cele dowódców/kierowców jako punkty zborne); pozycje obronne doraźne (hasty) łatwiejsze do angażowania z większego dystansu niż stałe (bunkry, worki z piaskiem, wąskie otwory strzelnicze — wymagają zbliżenia i zwiększają ryzyko wykrycia); siły reakcyjne wroga to główny cel elementu zabezpieczenia/wsparcia.`,
    },
    {
      id: "sr-ct-csar",
      title: "Rozpoznanie specjalne, kontrterroryzm i CSAR",
      page: "5-28",
      body: `**Special Reconnaissance (SR):** snajper dobrze pasuje do misji SR dzięki wyszkoleniu w obserwacji i zdolności interdykcji celów materiałowych na dużym dystansie (w tym bronią wielkokalibrową przy celach C2). Prowadzi obserwację stałą/ruchomą, dokumentuje w dzienniku obserwacji (dowód dla odprawy), raportuje PIR/IR. Typowe cele rozpoznania: stanowiska dowodzenia ognia (FDC), broń zespołowa, centra operacji taktycznych (TOC), luki w zasiekach, posterunki nasłuchowe/obserwacyjne, trasy infiltracji.

**Counterterrorism (CT):** snajper dostarcza trzy funkcje: ogień wybiórczy na cele wrogie, osłona zespołów wejściowych, najdokładniejsze źródło informacji o celu dla dowódcy (często jedyny wgląd dowódcy w sytuację). Wymaga ścisłej koordynacji — snajper musi znać plany zespołu wejściowego i strzelać wyłącznie na rozkaz.

> **Przykłady historyczne:** w zamachu na Igrzyskach Olimpijskich w Monachium (1972) snajperzy nie zneutralizowali terrorystów na rozkaz — terroryści zdążyli zabić zakładników, a zdezorientowani snajperzy ustrzelili też kilku swoich. Odwrotny błąd (nadgorliwość) miał miejsce w Los Angeles, gdzie policyjny snajper zastrzelił prezesa banku wskazującego napastnika palcem, biorąc gest za broń.

**Zespół Sztokholmski (Stockholm Syndrome) u snajperów CT** — po długiej obserwacji cel staje się „zbyt ludzki, zbyt znajomy", by do niego strzelić; zdarza się też odwrotność (nadmierna chęć oddania strzału z pobudek osobistych). Selekcja i szkolenie muszą dążyć do snajpera pomiędzy tymi skrajnościami.

**Combat Search and Rescue (CSAR):** rola snajpera bardzo ograniczona (misja to ratunek, nie interdykcja) — zapewnia zabezpieczenie dalekiego zasięgu i wczesne ostrzeganie sił ratowniczych, może infiltrować przed akcją i prowadzić niezauważoną obserwację rejonu. US Air Force rozważało użycie snajperów zamiast karabinów maszynowych w jednostkach pararatownictwa.`,
    },
    {
      id: "countersniper",
      title: "Kontrsnajping",
      page: "5-30",
      body: `Zespół snajperski to najlepszy zasób dowódcy do eliminacji zagrożenia snajperskiego wroga — starcie dwóch wysoko wyszkolonych elementów, z których każdy zna możliwości i ograniczenia drugiego.

**Wskaźniki obecności wrogiego snajpera:**
- Żołnierze w niestandardowym kamuflażu.
- Broń w pokrowcach/drag bagach: nietypowa konfiguracja, długa lufa, zamontowana luneta, akcja typu bolt-action.
- Pojedyncze strzały do kluczowego personelu (dowódcy, dowódcy plutonów, starsi podoficerowie, obsługa broni zespołowej).
- Spadek/brak patroli wroga w czasie występowania pojedynczych strzałów.
- Odblask światła od soczewek optyki.
- Meldunki patroli o małych grupach (1-3 ludzi) — obserwacja lub tropienie.
- Pojedyncze wystrzelone łuski (typowo kalibrów 7,62×54R, 7,62 NM, .300 WM, .338 Lapua).

**Metoda działania:** zbieranie informacji (pory dnia ognia precyzyjnego, lokalizacje ostrzału/obserwacji, dowody materialne) → określenie wzorca/rutyny wroga (rekonesans mapowy, zdjęcia lotnicze, rekonesans naziemny; pytanie kluczowe: „jak ja bym to zrobił?") → wybór najlepszego miejsca/czasu zaangażowania, z ewentualnym wsparciem: skoordynowane trasy i ognie, dodatkowe cele wsparcia ogniowego, wsparcie piechoty (kanalizowanie/zasadzka), dodatkowe zespoły snajperskie, prowokacja (baiting) zmuszająca wrogiego snajpera do strzału. Elementy powinny być gotowe **12 godzin przed** spodziewanym zaangażowaniem.

**Bierne środki zaradcze dla jednostki** (gdy działa wrogi snajper): unikać rutyn (posiłki, uzupełnianie amunicji), zbierać się pod osłoną/w ograniczonej widoczności, maskować sprzęt, usunąć oznaki stopnia z hełmów/kołnierzy (nie salutować), zwiększyć liczbę posterunków obserwacyjnych, informować patrole, o co mają pytać (pojedyncze łuski, nietypowy kamuflaż), nie okazywać świadomości obecności wroga. **Uwaga:** część wrogich snajperów to kobiety — z zamontowaną lunetą są równie śmiertelnym przeciwnikiem; obserwować też dostawy prowadzone przez kobiety/dzieci pod kątem wzorców ruchu.`,
    },
    {
      id: "offensive-ops",
      title: "Konwencjonalne działania zaczepne",
      page: "5-32",
      body: `Snajperzy dodają element zwodzenia i ekonomii sił, pozwalając dowódcy skupić siłę bojową gdzie indziej — efekt pojedynczych par jest niewielki, ale skoordynowane działanie na szerokim froncie może być znaczące na całym polu walki.

**Przed natarciem (preoffensive):** głównie HUMINT w głębi ugrupowania wroga; wzorem partyzantów radzieckich przeciw Niemcom w II wojnie światowej — dywersja sił wroga, zakłócenie logistyki. Zadania: rozpoznanie (dyslokacja wroga, penetracja stref bezpieczeństwa, potwierdzanie wywiadu, lokalizacja tras), nękanie (>500 m), infiltracja luk między jednostkami przed atakiem (cele: snajperzy wroga, C2, obsługa broni zespołowej, artyleria/FAC, odwody, żandarmeria, grupy naprawcze/zaopatrzeniowe).

**Podczas natarcia:** przydzieleni do jednostek wsparcia bezpośredniego — głównie tłumienie broni zespołowej, snajperów wroga i personelu C2; osłona skrzydeł, pokrycie martwego pola, utrzymywanie presji na wycofujące się siły do osiągnięcia granicy natarcia.

**Po natarciu (postoffensive):** obserwacja z przodu linii OP/LP pod kątem koncentracji do kontrataku (nękanie ogniem bezpośrednim lub wezwanie ognia pośredniego); zmuszanie nacierającego wroga do wczesnego rozwinięcia szyku (koszt utraty kontroli formacji); zasadzki doraźne na patrole/elementy rozpoznawcze poprzedzające kontratak. Funkcje: **interdykcja** (poza zasięgiem wsparcia własnego, przeciw obronie pierwszego/drugiego rzutu), **zabezpieczenie** (utrzymanie kontaktu z przesuniętymi siłami wroga, wczesne ostrzeganie), **kontrsnajping** (eliminacja odciętych grup/pojedynczych żołnierzy pozostawionych do zakłócania konsolidacji).

**Odwód:** wzmocnienie (dołączenie do zaangażowanej jednostki) lub interwencja (oskrzydlenie lokalnego oporu ogniem precyzyjnym); możliwe zabezpieczenie korytarza ruchu do **1500 m** szerokości (zależnie od terenu i liczby zespołów).`,
    },
    {
      id: "defensive-ops",
      title: "Konwencjonalne działania obronne",
      page: "5-35",
      body: `Wsparcie snajpera SF w obronie jest podobne do natarcia — może działać na każdym szczeblu pola walki (głębokim, tyłowym, głównym), ale najważniejsza rola przypada **rejonowi walki głębokiej**, bo konwencjonalni snajperzy zwykle już pokrywają rejon główny w ramach macierzystych jednostek.

**Typy operacji obronnych, w których uczestniczy snajper:** obrona rejonowa, obrona okrężna, siły zabezpieczenia, obrona zbocza odwrotnego, obrona terenu zabudowanego/ufortyfikowanego, obrona linii rzeki, obrona mobilna, ekonomia sił, wycofanie.

- **Nękanie** — poza FLOT, wczesne ostrzeganie, dezorganizacja ataku, zmuszanie pojazdów pancernych do „zamknięcia się"; blisko zintegrowane z siłami zabezpieczenia. Stanowisk nie należy lokować blisko oczywistych celów ognia pośredniego — nawet dobrze zamaskowane stanowisko w promieniu rażenia pocisku artyleryjskiego jest zagrożone.
- **Opóźnianie (delay)** — seria wzajemnie powiązanych pozycji opóźniających wzdłuż dróg dojścia pieszego, umożliwiająca wycofującym się siłom reorganizację; zespoły muszą pozostać mobilne, by uniknąć decydującego starcia; mogą pozostać jako element "stay-behind" uderzający na tyły i kolumny zaopatrzeniowe.
- **Ochrona tyłów (RAP)** — posterunki na trasach dostępu, siła reakcyjna po penetracji tyłów, patrolowanie (zawsze jako część większego patrolu bezpieczeństwa, nie samodzielnie).

**Wsparcie zbierania danych HUMINT w obronie** — snajperzy zakładają serię posterunków obserwacyjnych (OP) dominujących nad sektorem, dwóch typów:

- **OP jawny (overt)** — lokalizacja/funkcja nieznana wrogowi z góry, ale ostrzał z niego ujawnia obecność snajpera (nie zawsze dokładną pozycję).
- **OP skryty (covert)** — nigdy nie oddaje się z niego strzału, niezależnie od pokusy; wartość zbieranych informacji przewyższa wartość ewentualnych trafionych celów.`,
    },
    {
      id: "civil-disturbance",
      title: "Wsparcie przy zamieszkach cywilnych",
      page: "5-37",
      body: `Armia USA wspiera władze cywilne przy zamieszkach wyłącznie na wniosek/nakaz zgodny z obowiązującym prawem, jako **ostateczność**, z zasadą **minimalnej siły** koniecznej do przywrócenia porządku przy minimalnych stratach życia i mienia.

**Charakter przemocy miejskiej:** zachowanie tłumu jest emocjonalne i pozbawione racjonalności — grupa zaczyna działać jak jej najgorsi członkowie; podżegacze wykorzystują te mechanizmy. Podpalenia mogą służyć blokowaniu wojsk, wywoływaniu zamieszania lub maskowaniu grabieży/ostrzału; zorganizowani prowokatorzy mogą używać ognia snajperskiego, by sprowokować nadmierną reakcję sił rządowych.

**Czynniki planistyczne wsparcia zespołu snajperskiego:**
- **Odprawy** — szczegółowa znajomość rejonu i tras; przedstawiciel władz lokalnych przypisany do zespołu (ochrona, łączność).
- **Wystarczająca liczba personelu** — co najmniej jeden zespół reakcyjny przypisany do zespołu snajperskiego (można zatrzymać sprawcę bez oddawania strzału).
- **Obszary obserwacji i pola ognia** — wykorzystanie dominujących dachów/budynków; zespoły wzajemnie kryjące martwe pole, rozstawione na różnych wysokościach.
- **Ukrycie i maskowanie** — zabudowa daje dobre możliwości obu stronom.
- **Drogi dojścia** — najlepiej wnętrzami budynków (ruch ulicami łatwo wykrywalny); rozważyć przejścia podziemne/kanały kablowe.
- **Stanowiska ogniowe** — maksymalna stabilność, bo ogień precyzyjny ma **ranić, nie zabijać** (przypadkowe trafienie kobiety/dziecka/nieuzbrojonego może zaogniać sytuację); strzał z okna best z głębi pomieszczenia (tłumi błysk i huk); rozważyć tłumik.
- **Kamuflaż** — barwy stonowane/wtapiające się, ale z widocznym oznaczeniem rozpoznawczym dla sił własnych.
- **Władze cywilne** — bezpośrednia linia łączności z cywilnym decydentem uprawnionym do zezwolenia na ogień; to władze cywilne określają kaliber/typ amunicji (typowo **5.56 mm do 300 m**, chyba że wymagana większa penetracja).
- **Kontrola zespołu** — szybkie i precyzyjne działanie pod stałą kontrolą dowódcy snajperów.
- **ROE** — przy kontrsnajpingu celem jest **zranić, nie zabić**, chyba że w bezpośredniej obronie życia ludzkiego (wyjątek: snajper strzelający do strażaków/ratowników — tu ogień ma na celu zabicie sprawcy).

Użycie snajperów bywa źródłem dodatkowej agitacji tłumu — władze cywilne mogą celowo publicznie wycofać "skompromitowanego" snajpera, zachowując pozostałych w ukryciu, co często usypia czujność prowokatorów i ułatwia ich identyfikację. Optyka nocna (w tym NVD) pozwala zespołowi działać efektywnie także po zmroku.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaki jest typowy minimalny dystans angażowania celów przy misji nękania dalekiego zasięgu?",
      options: ["100 m", "200 m", "400 m", "1000 m"],
      correctIndex: 2,
      explanation: "Snajperzy standardowo nie angażują celów bliżej niż 400 m — 100 m poza typowym zasięgiem skutecznym broni strzeleckiej wroga. Średni dystans nękania to 600 m.",
    },
    {
      id: "q2",
      question: "W jakim procencie snajper powinien trafiać cele stacjonarne na dystansie do 800 m wg standardów planistycznych?",
      options: ["30%", "50%", "70%", "90%"],
      correctIndex: 1,
      explanation: "Standard planistyczny to 90% skuteczności do 600 m i 50% do 800 m dla celów stacjonarnych.",
    },
    {
      id: "q3",
      question: "Z ilu zespołów snajperskich składa się typowa drużyna (squad) na szczeblu batalionu?",
      options: ["1-2", "3-4", "8-10", "15-20"],
      correctIndex: 1,
      explanation: "Drużyna snajperska liczy 3-4 zespoły (dowódca, zastępca, 3 starszych i 3 młodszych snajperów w parach).",
    },
    {
      id: "q4",
      question: "Co oznacza litera „R” występująca dwukrotnie w akronimie CARVER?",
      options: [
        "Recognizability i Recuperability",
        "Range i Reliability",
        "Reconnaissance i Reporting",
        "Readiness i Reaction",
      ],
      correctIndex: 0,
      explanation: "CARVER: Criticality, Accessibility, Recuperability, Vulnerability, Effect, Recognizability — dwa \"R\" to Recuperability (odtwarzalność) i Recognizability (rozpoznawalność).",
    },
    {
      id: "q5",
      question: "Czym różni się OPCON od przydziału (attachment) w relacjach wsparcia?",
      options: [
        "OPCON jest trwały, attachment tymczasowy",
        "OPCON obowiązuje tylko na czas konkretnej operacji, potem zespół wraca do jednostki macierzystej",
        "Attachment dotyczy tylko amunicji",
        "Nie ma między nimi różnicy",
      ],
      correctIndex: 1,
      explanation: "OPCON to kontrola operacyjna wyłącznie na czas danej operacji — po niej snajperzy wracają do jednostki macierzystej. Attachment jest dla dłuższych operacji i wiąże się z pełnym zaopatrzeniem od jednostki przyjmującej.",
    },
    {
      id: "q6",
      question: "Czym różni się zasadzka wojskowa (military ambush) od zamachu (assassination) wg podręcznika?",
      options: [
        "Wyłącznie liczbą zaangażowanych snajperów",
        "Charakterem zamierzonego efektu — wojskowym vs politycznym",
        "Rodzajem użytej amunicji",
        "Porą dnia przeprowadzenia akcji",
      ],
      correctIndex: 1,
      explanation: "Jeśli efekt jest wojskowy, cel klasyfikuje się jako zasadzkę; jeśli polityczny — jako zamach, potencjalnie nielegalny wg Executive Order 12333 (1981).",
    },
    {
      id: "q7",
      question: "Jakie były konsekwencje nieudanej akcji kontrsnajperskiej podczas zamachu na Igrzyskach Olimpijskich w Monachium 1972?",
      options: [
        "Snajperzy trafili wszystkich terrorystów bez strat własnych",
        "Terroryści zdążyli zabić zakładników, a zdezorientowani snajperzy ustrzelili też własnych ludzi",
        "Akcję odwołano przed rozpoczęciem",
        "Użyto wyłącznie negocjacji",
      ],
      correctIndex: 1,
      explanation: "Snajperzy nie zneutralizowali terrorystów na rozkaz, przez co ci zdołali wykonać egzekucję zakładników, a w zamieszaniu doszło do postrzelenia własnych żołnierzy.",
    },
    {
      id: "q8",
      question: "Co opisuje w kontekście snajpera CT tzw. syndrom sztokholmski?",
      options: [
        "Strach przed bronią palną",
        "Niechęć do strzału po zbyt długiej obserwacji, gdy cel staje się „zbyt ludzki”",
        "Chorobę wysokościową na stanowiskach dachowych",
        "Uzależnienie od kofeiny podczas długich obserwacji",
      ],
      correctIndex: 1,
      explanation: "Po długotrwałej obserwacji celu snajper może stać się z nim zbyt \"zaznajomiony\", by oddać strzał — zjawisko nazwane syndromem sztokholmskim.",
    },
    {
      id: "q9",
      question: "Które kalibry łusek podręcznik wymienia jako typowy dowód materialny obecności wrogiego snajpera?",
      options: [
        "5.56 mm i 9 mm",
        "7,62×54R, 7,62 NM, .300 WM, .338 Lapua",
        "12,7 mm i 14,5 mm wyłącznie",
        ".22 LR i .223",
      ],
      correctIndex: 1,
      explanation: "Podręcznik wskazuje pojedyncze wystrzelone łuski kalibrów 7,62×54R, 7,62 NM, .300 Winchester Magnum i .338 Lapua jako typowy ślad wrogiego snajpera.",
    },
    {
      id: "q10",
      question: "Ile godzin przed spodziewanym zaangażowaniem elementy kontrsnajperskie powinny być w gotowości?",
      options: ["1 godzinę", "3 godziny", "12 godzin", "48 godzin"],
      correctIndex: 2,
      explanation: "Wszystkie elementy operacji kontrsnajperskiej powinny być na miejscu co najmniej 12 godzin przed spodziewanym czasem zaangażowania.",
    },
    {
      id: "q11",
      question: "Jaka jest zasadnicza różnica między jawnym (overt) a skrytym (covert) posterunkiem obserwacyjnym snajperów w obronie?",
      options: [
        "Jawny jest większy fizycznie",
        "Ze skrytego nigdy nie oddaje się strzału, niezależnie od pojawiających się celów",
        "Skryty wymaga więcej ludzi",
        "Nie ma między nimi różnicy operacyjnej",
      ],
      correctIndex: 1,
      explanation: "OP skryty nigdy nie strzela, bo wartość zbieranych informacji przewyższa wartość ewentualnych celów; OP jawny może angażować cele wysokiego priorytetu, choć to ujawnia obecność snajpera.",
    },
    {
      id: "q12",
      question: "Jaka jest podstawowa zasada użycia ognia snajperskiego przy kontrsnajpingu podczas zamieszek cywilnych?",
      options: [
        "Zawsze strzelać na zabicie",
        "Ranić, nie zabijać (poza bezpośrednią obroną życia ludzkiego)",
        "Nigdy nie angażować celu",
        "Strzelać wyłącznie amunicją ślepą",
      ],
      correctIndex: 1,
      explanation: "Zasadą jest celowanie tak, by ranić, a nie zabijać — wyjątkiem jest bezpośrednia obrona życia (np. snajper strzelający do strażaków/ratowników, gdzie celem jest zabicie sprawcy).",
    },
    {
      id: "q13",
      question: "Jaki typ amunicji jest standardowo używany przy zamieszkach cywilnych na dystansie do 300 m?",
      options: ["7,62 mm NATO", "5,56 mm", ".50 BMG", "9 mm"],
      correctIndex: 1,
      explanation: "Cele do 300 m są zwykle angażowane amunicją 5,56 mm, chyba że wymagana jest specjalna zdolność penetracji.",
    },
    {
      id: "q14",
      question: "Które zadanie NIE jest typowe dla snajpera w elemencie szturmowym (assault) operacji DA?",
      options: [
        "Bycie integralną częścią szybkiego natarcia w walce z bliska",
        "Osłona ruchu elementu szturmowego przez martwe pole",
        "Wsparcie z platform powietrznych",
        "Rzadkie uczestnictwo ze względu na utratę standoff",
      ],
      correctIndex: 0,
      explanation: "Snajperzy rzadko operują bezpośrednio z elementem szturmowym — szybki ruch i walka z bliska niwelują ich przewagę dystansu (standoff); zamiast tego mogą osłaniać ruch lub wspierać z powietrza.",
    },
  ],
  flashcards: [
    { id: "f1", term: "CARVER", definition: "Criticality, Accessibility, Recuperability, Vulnerability, Effect, Recognizability — model analizy celu używany przy planowaniu interdykcji snajperskiej." },
    { id: "f2", term: "Standoff", definition: "Zdolność snajpera do angażowania celów z dużego dystansu, poza zasięgiem skutecznym broni przeciwnika — podstawa planowania jego użycia." },
    { id: "f3", term: "SEO", definition: "Sniper Employment Officer — oficer planujący i koordynujący działania więcej niż jednego zespołu snajperskiego (poziom ponadzespołowy)." },
    { id: "f4", term: "OPCON", definition: "Operational Control — kontrola operacyjna nad zespołem snajperskim ograniczona czasowo do konkretnej operacji; po niej zespół wraca do jednostki macierzystej." },
    { id: "f5", term: "Critical node", definition: "Krytyczny węzeł systemu C2 wroga (procedury, personel, sprzęt, obiekty, łączność) — bez którego cały system traci funkcjonalność." },
    { id: "f6", term: "Sniper cordon", definition: "Seria wzajemnie wspierających się posterunków snajperskich uniemożliwiająca wejście lub wyjście z określonego obszaru." },
    { id: "f7", term: "Multiple team area sniper ambush", definition: "Zasadzka, w której kilka zespołów snajperskich angażuje cele ogniem zsynchronizowanym lub jednoczesnym, kończąca się po ustalonej liczbie strzałów lub zaangażowaniu celów." },
    { id: "f8", term: "Lift and shift", definition: "Konieczność przesunięcia/zaprzestania ognia wsparcia (np. artylerii) w miarę zbliżania się sił własnych do celu — problem, którego unika precyzyjny ogień snajperski." },
    { id: "f9", term: "Executive Order 12333", definition: "Rozporządzenie wykonawcze USA z 1981 r. zakazujące zamachów (assassination) — kluczowe rozróżnienie prawne od legalnej zasadzki wojskowej." },
    { id: "f10", term: "Stockholm Syndrome (u snajpera CT)", definition: "Niechęć do oddania strzału po zbyt długiej obserwacji celu, gdy staje się on \"zbyt ludzki\" dla snajpera." },
    { id: "f11", term: "Terrain profile", definition: "Przesadzony boczny widok fragmentu terenu budowany z mapy warstwicowej, używany do określenia dostępności linii obserwacji (LOS) i pozycji defiladowych." },
    { id: "f12", term: "Sunrise/sunset overlay (SSO)", definition: "Graficzna nakładka pokazująca azymut wschodu/zachodu słońca względem celu — pomaga zaplanować stanowiska i trasy wykorzystujące światło na korzyść zespołu." },
    { id: "f13", term: "Sniper operation order", definition: "Pięcioakapitowy rozkaz operacyjny zespołu snajperskiego (Sytuacja, Misja, Wykonanie, Zabezpieczenie logistyczne, Dowodzenie i łączność) — narzędzie planowania na poziomie zespołu." },
    { id: "f14", term: "Overt observation post", definition: "Jawny posterunek obserwacyjny — jego lokalizacja może pozostać nieznana, ale oddanie strzału ujawnia obecność snajpera." },
    { id: "f15", term: "Covert observation post", definition: "Skryty posterunek obserwacyjny, z którego nigdy nie oddaje się strzału — wartość zbieranych informacji jest ważniejsza niż potencjalne cele." },
    { id: "f16", term: "RAP", definition: "Rear Area Protection — ochrona tyłów: zadanie snajpera obejmujące obronę obiektów krytycznych, kontrolę luk między jednostkami i tropienie sił, które przeniknęły na tyły." },
    { id: "f17", term: "UW — trzy fazy", definition: "Unconventional Warfare przebiega przez fazy: rozbudowa (buildup), konsolidacja i połączenie (linkup) — rola snajpera zmienia się w każdej z nich." },
    { id: "f18", term: "CSAR", definition: "Combat Search and Rescue — rola snajpera ograniczona do zabezpieczenia dalekiego zasięgu i wczesnego ostrzegania sił ratowniczych, bez aktywnej interdykcji." },
    { id: "f19", term: "MSS", definition: "Mission Support Site — punkt wsparcia misji/skrytka wykorzystywana przez zespół snajperski do uzupełnienia zaopatrzenia." },
    { id: "f20", term: "Zasada „ranić, nie zabić”", definition: "Wytyczna dla ognia snajperskiego podczas zamieszek cywilnych — celem jest zranienie sprawcy, nie zabicie, poza sytuacją bezpośredniej obrony życia ludzkiego." },
  ],
};
