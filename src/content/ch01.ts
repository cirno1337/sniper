import type { Chapter } from "../types/content";

export const ch01: Chapter = {
  id: "ch01",
  kind: "chapter",
  number: "1",
  title: "Snajper Sił Specjalnych",
  summary:
    "Snajper SF (Special Forces) to specjalnie wyselekcjonowany ochotnik, wyszkolony w zaawansowanym strzelectwie i fieldcrafcie. Wspiera misje specjalne, angażując wybrane cele ze stanowisk ukrytych, na dystansach i w warunkach niedostępnych dla zwykłego strzelca.",
  sections: [
    {
      id: "mission",
      title: "Misja",
      page: "1-1",
      body: `Siły Specjalne (SF) prowadzą misje realizowane przez specjalnie zorganizowane, wyszkolone i wyposażone jednostki wojskowe i paramilitarne. Ich celem jest osiąganie celów wojskowych, politycznych, ekonomicznych lub psychologicznych metodami niekonwencjonalnymi na obszarach wrogich, zamkniętych lub politycznie wrażliwych.

Operacje SF różnią się od konwencjonalnych stopniem ryzyka, technikami operacyjnymi, sposobem użycia, niezależnością od wsparcia sojuszniczego oraz zależnością od wywiadu operacyjnego i zasobów lokalnych.

Snajper SF wspiera podstawowe funkcje Sił Specjalnych poprzez:
- Angażowanie celów na dużym dystansie precyzyjnym ogniem.
- Zdobywanie i raportowanie informacji wywiadowczych o przeciwniku.
- Prowadzenie szkoleń.

| Misje podstawowe (Principal Missions) | Działania towarzyszące (Collateral Activities) |
|---|---|
| Unconventional Warfare (UW) | Coalition Support |
| Foreign Internal Defense (FID) | Combat Search and Rescue (CSAR) |
| Information Operations (IO) | Counterdrug (CD) Activities |
| Direct Action (DA) | Humanitarian Demining (HD) Activities |
| Special Reconnaissance (SR) | Countermine (CM) Activities |
| Combatting Terrorism (CBT) | Foreign Humanitarian Assistance |
| Counterproliferation (CP) | Security Assistance |
| | Special Activities |

*Dodatek B zawiera listę zadań kluczowych misji snajpera (mission-essential task list).*`,
    },
    {
      id: "selection",
      title: "Selekcja kandydatów",
      page: "1-1",
      body: `Dowódcy i osoby oceniające muszą dokładnie przesiewać wszystkich kandydatów do szkolenia snajperskiego. Rygorystyczny program szkolenia i wysokie ryzyko osobiste w walce wymagają silnej motywacji i zdolności do nauki wielu umiejętności jednocześnie — odpowiedniego nastawienia mentalnego nie da się w pełni wyszkolić ani wpoić.

Nie istnieją absolutne kryteria selekcji, ale dowódca korzysta z testów diagnostycznych, wskaźników organizacyjnych i trendów pomagających zidentyfikować potencjalnych snajperów.

**Wymagania administracyjne kandydata (Figure 1-2):**
- Członek jednostki SOF z zatwierdzoną misją snajperską.
- Spełnia wymagania sprawności fizycznej (wzrost/waga wg AR 600-9).
- Wynik "expert" z M4/M16A2 wg FM 23-9 (najlepiej powtarzalnie, co pół roku).
- Brak historii nadużywania alkoholu lub narkotyków.
- Brak kary dyscyplinarnej wg UCMJ w bieżącym okresie służby.
- Wynik GT ≥ 110 i CO ≥ 110, lub SC ≥ 110.
- Stopień E4 lub wyższy oraz poświadczenie bezpieczeństwa SECRET.
- Wzrok 20/20 (lub korygowalny wg AR 40-501) — okulary są utrudnieniem, chyba że kandydat jest wybitnie wykwalifikowany.
- Ocena psychologiczna zatwierdzona przez wykwalifikowanego specjalistę medycznego, obejmująca minimum test MMPI-2 oraz wywiad psychiatryczny.
- Co najmniej 12 miesięcy pozostałej służby czynnej po ukończeniu kursu.
- Brak wyroku za przemoc domową wykluczającego wydanie broni wg Lautenberg Amendment.

*Większość powyższych wymagań jest konieczna do wstąpienia na SOTIC (Special Operations Target Interdiction Course) prowadzony przez USAJFKSWCS w Fort Bragg.*

**Pożądane cechy osobiste (Figure 1-3):**
- Doświadczenie jako myśliwy lub człowiek lasu.
- Doświadczenie jako strzelec sportowy/zawodnik.
- Zainteresowanie bronią.
- Zdolność szybkiej, dokładnej oceny sytuacji i obliczeń w głowie.
- Stabilność emocjonalna w życiu osobistym.
- Zdolność efektywnego działania pod presją.
- Cierpliwość, dbałość o szczegóły, wytrwałość, wytrzymałość fizyczna.
- Zdolność do pełnego skupienia.
- Zdolność znoszenia samotności.
- Obiektywizm — umiejętność spojrzenia na sytuację "z zewnątrz".
- Zdolność bliskiej współpracy z drugą osobą w ciasnej przestrzeni pod presją.
- Wolność od nałogów (tytoń, alkohol) — nie jest to jednak samodzielny dyskwalifikator.
- Bardzo dobre wyniki APFT, dobra kondycja i zdolności atletyczne.

Trzy pierwsze cechy są szczególnie istotne dla utrzymania umiejętności snajperskich w czasie, ponieważ sniper z takimi cechami traktuje trening jako pasję, a nie obowiązek.

**Ocena psychologiczna:** zalecane jest użycie testu MMPI-2, który daje dowódcy profil osobowości kandydata — pomaga ocenić, czy kandydat poradzi sobie w zamkniętych przestrzeniach, pracy niezależnej, i czy ma potencjał na snajpera. Badania eliminują kandydatów, którzy nie poradziliby sobie w walce.

**Proces oceny (assessment):** trwa zwykle 2-3 dni i obejmuje testy obiektywne oraz subiektywne:
- *Obiektywne:* strzeleckie, obserwacji i pamięci, inteligencji, szybkiego podejmowania decyzji, zdolności motorycznych.
- *Subiektywne:* wywiad (motywacja kandydata), inwentarz predyspozycji (porównanie do profilu wzorcowego snajpera).

Ostateczną selekcję przeprowadza komisja asesorów (nie sam dowódca), aby zachować spójność i wyeliminować indywidualne uprzedzenia. Zasady komisji:
- Nie informować kandydatów o ich statusie w trakcie selekcji.
- Nie brać pod uwagę osób niebędących ochotnikami.
- Wybierać najlepiej wykwalifikowanych kandydatów jako pierwszych.
- Nie dopuszczać do programu żołnierzy niespełniających wymagań wstępnych.
- Kontynuować selekcję po SOTIC pod kątem "best qualified" i doboru do misji.`,
    },
    {
      id: "sotic-qualifications",
      title: "Kwalifikacje absolwentów SOTIC",
      page: "1-5",
      body: `Aby ukończyć SOTIC, snajper musi uzyskać minimum **700 punktów kursu** i zaliczyć wszystkie elementy "must pass". Absolwent musi być zdolny do:

- Wykrywania, określania odległości i angażowania wielu celów na dystansie **150–800 m**.
- Skradania się (stalk) i osiągnięcia ukrytej pozycji nie dalej niż **220 m** od obserwatora (indywidualnie) lub **330 m** (jako zespół).
- Angażowania celów okazjonalnych (opportunity targets) na **800 m**.
- Precyzyjnego angażowania celów typu snap na **200 i 400 m** z ekspozycją 3-sekundową oraz na **300 m** z ekspozycją 6-sekundową.
- Angażowania celów ruchomych na **200 i 300 m**.
- Rozumienia kamuflażu, technik obserwacji i raportowania, wyboru i budowy stanowisk (hide).
- Trafienia pierwszym strzałem celu wielkości człowieka: **90% skuteczności do 600 m** i **50% skuteczności do 800 m**.

Jedyną drogą utrzymania i rozwoju umiejętności jest program podtrzymujący (**sustainment program**, Dodatek C) — obowiązkowy zgodnie z USASOC Regulation 350-1, stosowany **co najmniej 2 tygodnie co 6 miesięcy**. Umiejętności snajperskie są bardzo nietrwałe (perishable) i bez tego programu szybko zanikają.`,
    },
    {
      id: "sniper-team",
      title: "Zespół snajperski",
      page: "1-5",
      body: `Snajperzy działają **parami**, co zwiększa skuteczność zespołu, zapewnia wzajemne bezpieczeństwo i stałe wsparcie. Dzięki obniżonemu poziomowi stresu para snajperska angażuje cele szybciej i dłużej wytrzymuje w terenie niż pojedynczy snajper.

Bardziej doświadczony członek pary pełni podczas strzału rolę obserwatora — jest w stanie lepiej odczytać wiatr i wskazać strzelcowi skompensowany punkt celowania, zapewniając trafienie pierwszym strzałem. Przy celach wysokiego priorytetu obaj snajperzy mogą angażować cel jednocześnie — daje to elastyczność koncepcji dwuosobowej.

Doświadczenie pokazuje, że działanie w parze sniper/obserwator znacząco zwiększa skuteczność misji. Snajperzy działający pojedynczo szybko tracą efektywność — przytłacza ich troska o własne bezpieczeństwo, zadania do wykonania oraz emocje (strach, samotność).`,
    },
    {
      id: "team-organization",
      title: "Organizacja zespołu snajperskiego",
      page: "1-6",
      body: `Każdy z dwóch członków zespołu może pełnić funkcję strzelca (z M24 lub bronią specjalnie dobraną); drugi pełni funkcję obserwatora. Dwuosobowy zespół to najmniejsza zalecana organizacja — oferuje mobilność, skrytość i elastyczność, umożliwiając ciągłą obserwację obszaru przy rotacji ochrony, snu, jedzenia i odpoczynku od stresu.

Relacja sniper/obserwator jest kluczowa dla: namierzania celu, szacowania odległości, obserwacji śladu pocisku (bullet trace) i trafienia oraz podawania korekt.

**Wzmocnienie zespołu:** w pewnych okolicznościach zespół może zostać wzmocniony elementem wielkości drużyny/plutonu (ochrona, budowa stanowiska, osłona dla operacji "stay-behind"). Jeśli wzmocnienie służy ochronie, musi być rozmieszczone wystarczająco daleko, by nie zagrozić dekonspiracją zespołu — punktem wyjścia jest dystans **800–1000 m**, modyfikowany wg sytuacji i terenu.

**Zasady organizacyjne:**
- Zespoły snajperskie **nie powinny być rozdzielane** — są najskuteczniejsze pracując w wyszkolonych parach.
- Zespół może zostać wzmocniony dodatkowymi obserwatorami/snajperami, by wydłużyć cykle odpoczynku podczas długotrwałej obserwacji 24-godzinnej — podstawowa para pełni funkcję strzelec/obserwator, gdy potrzebny jest strzał, a dodatkowi członkowie działają wyłącznie jako obserwatorzy.`,
    },
    {
      id: "sniper-training",
      title: "Szkolenie snajperskie",
      page: "1-6",
      body: `Szkolenie snajperskie odbywa się w **dwóch środowiskach**:

**1. Środowisko szkoły (SOTIC)** — prowadzone przez USAJFKSWCS w Fort Bragg. Produkuje snajperów **Level I** dla społeczności SO; absolwenci otrzymują identyfikator **W3**.

**2. Środowisko jednostki (Unit Training SOTIC)** — pozwala dowódcy jednostki dopasować szkolenie do własnych potrzeb misyjnych. Absolwent zostaje snajperem **Level II**, w pełni zdolnym do obsadzenia etatu snajpera w zespole. Zgodnie z USASFC 350-1 każdy SFODA (Special Forces Operational Detachment A) musi mieć przydzielonych dwóch snajperów (Level I lub II). Po przydziale do SFODA snajper staje się snajperem **CAT I** (Category I) do celów zamawiania amunicji szkoleniowej, sprzętu i poligonów.

Dwa razy w roku USAJFKSWCS prowadzi tygodniowy **Challenge Course** — snajperzy Level II, którzy go ukończą, otrzymują dyplom SOTIC i oznaczenie Level I.

**Różnice Level I vs Level II:**
- Level I muszą być zdolni do strzału w bliskiej odległości od osób niewalczących i sił własnych (Close Combat Situation), prowadzą Group Sustainment Program i szkolą siły US do poziomu Level II. Level II **nie mogą** szkolić innych sił US do statusu Level II, ale mogą prowadzić szkolenia dla kursów sił partnerskich (host nation).
- Zasięg testowy: Level I do maksymalnego zasięgu skutecznego M24 — **800 m**; Level II — **600 jardów** (dowódca jednostki może podnieść wymagany standard).
- Kurs Level I to **6-tygodniowy** kurs oparty o program nauczania (POI-driven); kurs jednostkowy (Level II) trwa **2 tygodnie lub dłużej**, zależnie od wymagań dowództwa.
- Instruktorzy Level I przechodzą Instructor Training Course prowadzony przez instruktorów SOTIC i zajmują się wyłącznie szkoleniem — bez udziału w tempie operacyjnym jednostki liniowej. Instruktorów kursu jednostkowego (Level II) warto wyznaczyć z 6-8-tygodniowym wyprzedzeniem.

Po wyszkoleniu (Level I lub II) snajper musi utrzymywać biegłość poprzez połączenie **środowiska nauki** (szkoła, eliminacja zmiennych) i **środowiska treningowego** (jednostka, dodawanie zmiennych). Zakres scenariuszy treningowych ogranicza jedynie wyobraźnia i chęci snajpera.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Ile minimum punktów kursu musi zdobyć kandydat, aby ukończyć SOTIC?",
      options: ["500", "600", "700", "800"],
      correctIndex: 2,
      explanation: "Absolwent SOTIC musi uzyskać minimum 700 punktów kursu i zaliczyć wszystkie elementy „must pass”.",
    },
    {
      id: "q2",
      question: "Jaki jest wymagany procent trafień pierwszym strzałem na dystansie do 800 m dla absolwenta SOTIC?",
      options: ["30%", "50%", "70%", "90%"],
      correctIndex: 1,
      explanation: "Absolwent musi trafiać pierwszym strzałem cele wielkości człowieka: 90% do 600 m i 50% do 800 m.",
    },
    {
      id: "q3",
      question: "Jak często minimalnie powinien być realizowany program podtrzymujący (sustainment program)?",
      options: [
        "1 tydzień co 3 miesiące",
        "2 tygodnie co 6 miesięcy",
        "1 miesiąc raz w roku",
        "Tylko przed misją",
      ],
      correctIndex: 1,
      explanation: "Program jest obowiązkowy wg USASOC Reg. 350-1 i powinien być realizowany co najmniej 2 tygodnie co 6 miesięcy.",
    },
    {
      id: "q4",
      question: "Jaki identyfikator otrzymują absolwenci SOTIC (Level I)?",
      options: ["W3", "S1", "L2", "M24"],
      correctIndex: 0,
      explanation: "Absolwenci formalnego kursu SOTIC (Level I) otrzymują identyfikator W3.",
    },
    {
      id: "q5",
      question: "Jaki jest maksymalny testowany zasięg dla snajpera Level II?",
      options: ["400 m", "600 jardów", "800 m", "1000 m"],
      correctIndex: 1,
      explanation: "Level I testowany jest do 800 m (maks. zasięg skuteczny M24), Level II do 600 jardów.",
    },
    {
      id: "q6",
      question: "Jaka jest zalecana orientacyjna odległość elementu wzmocnienia (ochrony) od zespołu snajperskiego?",
      options: ["100–200 m", "300–500 m", "800–1000 m", "2000–3000 m"],
      correctIndex: 2,
      explanation: "Punkt wyjścia to 800–1000 m, modyfikowane w zależności od sytuacji i terenu, by uniknąć dekonspiracji zespołu.",
    },
    {
      id: "q7",
      question: "Który test psychologiczny jest rekomendowany jako minimum w ocenie kandydata na snajpera?",
      options: ["MMPI-2", "IQ Stanford-Binet", "Rorschach", "Big Five"],
      correctIndex: 0,
      explanation: "Zalecane jest użycie MMPI-2 jako minimum, uzupełnione wywiadem/badaniem psychiatrycznym.",
    },
    {
      id: "q8",
      question: "Ile snajperów (Level I lub II) musi być przydzielonych do każdego SFODA zgodnie z USASFC 350-1?",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      explanation: "Każdy SFODA musi mieć przydzielonych dwóch snajperów, Level I lub Level II.",
    },
  ],
  flashcards: [
    { id: "f1", term: "SOTIC", definition: "Special Operations Target Interdiction Course — formalny kurs szkoły snajperskiej prowadzony przez USAJFKSWCS w Fort Bragg, produkujący snajperów Level I." },
    { id: "f2", term: "USAJFKSWCS", definition: "United States Army John F. Kennedy Special Warfare Center and School — proponent podręcznika FM 3-05.222, prowadzi SOTIC w Fort Bragg." },
    { id: "f3", term: "SFODA", definition: "Special Forces Operational Detachment A — podstawowa jednostka operacyjna Sił Specjalnych, do której musi być przydzielonych dwóch snajperów." },
    { id: "f4", term: "Level I sniper", definition: "Snajper wyszkolony w formalnym środowisku szkoły (SOTIC), identyfikator W3, testowany do 800 m, może szkolić innych do Level II." },
    { id: "f5", term: "Level II sniper", definition: "Snajper wyszkolony w środowisku jednostki (Unit Training SOTIC), testowany do 600 jardów, nie może szkolić innych sił US do Level II." },
    { id: "f6", term: "CAT I sniper", definition: "Kategoria snajpera po przydziale do SFODA, uprawniająca do zamawiania amunicji szkoleniowej, sprzętu i poligonów." },
    { id: "f7", term: "MMPI-2", definition: "Minnesota Multi-Phasic Personality Inventory — test psychologiczny rekomendowany jako minimum oceny psychologicznej kandydata na snajpera." },
    { id: "f8", term: "Challenge Course", definition: "Tygodniowy kurs prowadzony dwa razy w roku przez USAJFKSWCS — ukończenie przez snajpera Level II daje dyplom SOTIC i oznaczenie Level I." },
    { id: "f9", term: "Sustainment program", definition: "Obowiązkowy program podtrzymujący umiejętności snajperskie (Dodatek C), min. 2 tygodnie co 6 miesięcy, bo umiejętności są bardzo nietrwałe." },
    { id: "f10", term: "Zasada pracy w parach", definition: "Snajperzy zawsze działają w dwuosobowych zespołach (sniper/obserwator) — zwiększa to skuteczność, bezpieczeństwo i wytrzymałość psychiczną w terenie." },
    { id: "f11", term: "Opportunity target", definition: "Cel okazjonalny — absolwent SOTIC musi umieć angażować takie cele na dystansie do 800 m." },
    { id: "f12", term: "Snap target", definition: "Cel pojawiający się na krótko (ekspozycja) — SOTIC wymaga precyzyjnego trafienia na 200/400 m przy 3 s ekspozycji i 300 m przy 6 s." },
  ],
};
