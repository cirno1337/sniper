import type { Chapter } from "../types/content";

export const appI: Chapter = {
  id: "app-i",
  kind: "appendix",
  number: "I",
  title: "Sniper Training Exercises",
  summary:
    "Pięć standardowych ćwiczeń sprawdzających i utrzymujących kluczowe umiejętności snajpera: skradanie się (stalking), szacowanie odległości, obserwację, budowę stanowiska (hide) oraz kamuflaż i maskowanie. Każde ma jasno zdefiniowany przebieg i próg zaliczenia.",
  sections: [
    {
      id: "stalking",
      title: "Ćwiczenie: skradanie się (stalking)",
      page: "I-1",
      body: `**Cel:** dać snajperowi pewność w zdolności podejścia i zajęcia stanowiska ogniowego bez wykrycia.

**Przebieg:** po analizie mapy (i zdjęcia lotniczego, jeśli dostępne) snajper skrada się na zadaną odległość — zwykle ok. **1000 m w limicie 3 godzin**. Musi dotrzeć na **220 m** (indywidualnie) lub **330 m** (zespołowo) od dwóch wyszkolonych obserwatorów skanujących teren lornetkami i oddać tam dwa strzały ślepe bez wykrycia.

**Wymagania terenowe dla prowadzącego:** teren maksymalnie widoczny dla obserwatora (wymusza prawidłowe wykorzystanie ukształtowania terenu), zmienna roślinność/pokrycie — malejące w miarę zbliżania się do obserwatora (zmusza do większej ostrożności bliżej celu), start poza polem widzenia obserwatora, granice oznaczone naturalnymi cechami terenu lub znacznikami.

**Zaliczenie:** po dotarciu na dystans ogniowy snajper oddaje pierwszy strzał ślepy (sygnał gotowości) → obserwator wysyła "walkera" (idącego) na 3 m od siebie i szuka snajpera w promieniu 3 m → jeśli niewykryty, obserwator eksponuje tabliczkę 6×6 cali (litera/cyfra), snajper ma **30 sekund** na jej odczytanie i musi oddać drugi strzał ślepy (obserwator sprawdza błysk wylotowy) → jeśli nadal niewykryty, walker podchodzi i kładzie rękę na głowie snajpera → snajper musi podać dokładny dystans, prędkość wiatru i zastosowaną poprawkę na celowniku.`,
    },
    {
      id: "range-observation",
      title: "Ćwiczenia: szacowanie odległości i obserwacja",
      page: "I-2",
      body: `**Szacowanie odległości** — cel: biegłość w dokładnym ocenianiu dystansu. Trainer pokazuje różne obiekty na dystansie do **800 m**; snajper (używając tylko lornetki i lunety, bez dalmierza) zapisuje szacunek dla **10 obiektów**, po 3 minuty na obiekt. Musi mieścić się w **10% błędu**. **Próg niezaliczenia:** 4 lub więcej błędnych szacunków na 10.

**Obserwacja** — cel: poprawa zdolności obserwacji przeciwnika i dokładnego raportowania wyników. Snajperowi przydziela się sektor ok. **1800 mil** do obserwacji. Pierwsze 20 minut poświęca na szkic panoramiczny, potem kolejne 20 minut (łącznie 40 min) na wykrywanie zamaskowanych obiektów — niewidocznych gołym okiem, nierozróżnialnych lornetką, ale rozpoznawalnych przez lunetę obserwacyjną. **Punktacja:** 0,5 pkt za prawidłowe wskazanie obiektu na szkicu + 0,5 pkt za jego prawidłowe rozpoznanie (razem 12 zamaskowanych obiektów wojskowych = 12 pkt). **Próg niezaliczenia:** poniżej 8 punktów.`,
    },
    {
      id: "hide-camouflage",
      title: "Ćwiczenia: budowa stanowiska (hide) i kamuflaż",
      page: "I-4",
      body: `**Budowa stanowiska (hide)** — cel: nauczyć budowy stanowiska (hide) i pozostawania niewykrytym pod obserwacją. Snajper ma **8 godzin** na budowę tymczasowego stanowiska mieszczącego zespół z całym wyposażeniem (łopata, siekiera, kilof, ok. 20 worków z piaskiem), plus **1,5 godziny** na fazę testową (łącznie ok. 9,5 h).

**Test:** obserwator z lornetką i lunetą M49 20x zaczyna obserwację z **300 jardów** → nieznalazłszy stanowiska, przesuwa się na **150 jardów** → walker z radiem podchodzi na **10 jardów** od stanowiska i każe snajperowi oddać jedyny strzał ślepy (obserwator szuka błysku wylotowego) → na koniec obserwator schodzi na **25 jardów**, próbując znaleźć stanowisko gołym okiem. Wykrycie na 25 jardach = niezaliczenie. Snajper dodatkowo wypełnia kartę ostrzału, dziennik i szkic terenowy — wszystkie podlegają ocenie.

**Kamuflaż i maskowanie** — cel: trening wyboru ostatecznego stanowiska ogniowego. Snajper ukrywa się w **200 jardach** od obserwatora; ma **5 minut** na maskowanie (obserwator odwrócony), potem obserwator szuka go przez ok. **30 minut**. Procedura weryfikacji identyczna jak przy stalkingu (walker na 10 m → strzał ślepy → wskazanie ręką → dotknięcie głowy), a na końcu snajper podaje elewację, windaż i opisuje ruch obserwatora oraz odczytuje tabliczkę z literą/cyfrą. Obszar ćwiczenia powinien mieć co najmniej dwa razy więcej potencjalnych pozycji niż liczba snajperów, a różne odsłony ćwiczenia prowadzi się w zróżnicowanym terenie (otwarty, linia lasu, zarośla, teren pofałdowany).`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Na jaki dystans od obserwatora musi się skradać pojedynczy snajper w ćwiczeniu stalkingu?",
      options: ["100 m", "220 m", "330 m", "500 m"],
      correctIndex: 1,
      explanation: "Indywidualny stalking wymaga dotarcia na nie więcej niż 220 m od obserwatora (330 m dla zespołu).",
    },
    {
      id: "q2",
      question: "Ile czasu ma snajper na odczytanie tabliczki z literą/cyfrą podczas testu stalkingu?",
      options: ["10 sekund", "30 sekund", "1 minuta", "2 minuty"],
      correctIndex: 1,
      explanation: "Po ekspozycji tabliczki 6×6 cali snajper ma 30 sekund na poprawne odczytanie litery lub cyfry.",
    },
    {
      id: "q3",
      question: "Przy ilu błędnych szacunkach na 10 snajper nie zalicza ćwiczenia szacowania odległości?",
      options: ["2 lub więcej", "3 lub więcej", "4 lub więcej", "6 lub więcej"],
      correctIndex: 2,
      explanation: "Próg niezaliczenia to 4 lub więcej błędnych szacunków spośród 10 dystansów.",
    },
    {
      id: "q4",
      question: "Ile punktów (na 12 możliwych) musi zdobyć snajper, by zaliczyć ćwiczenie obserwacji?",
      options: ["Co najmniej 6", "Co najmniej 8", "Co najmniej 10", "Wszystkie 12"],
      correctIndex: 1,
      explanation: "Próg niezaliczenia to mniej niż 8 punktów z 12 możliwych (12 zamaskowanych obiektów, po 0,5 pkt za lokalizację i 0,5 pkt za rozpoznanie).",
    },
    {
      id: "q5",
      question: "Ile godzin ma snajper na budowę stanowiska (hide) w ćwiczeniu hide construction?",
      options: ["4 godziny", "6 godzin", "8 godzin", "12 godzin"],
      correctIndex: 2,
      explanation: "Snajper otrzymuje 8 godzin na budowę, plus dodatkowe 1,5 godziny na fazę testową obserwatora.",
    },
    {
      id: "q6",
      question: "Z jakiej odległości obserwator ostatecznie próbuje wykryć stanowisko (hide) gołym okiem?",
      options: ["10 jardów", "25 jardów", "150 jardów", "300 jardów"],
      correctIndex: 1,
      explanation: "Po etapach z 300 i 150 jardów, finalna próba wykrycia gołym okiem odbywa się z 25 jardów.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Stalking exercise", definition: "Ćwiczenie skradania się na ok. 1000 m w 3-godzinnym limicie, kończące się dwoma strzałami ślepymi z odległości ≤220 m (indywidualnie) lub ≤330 m (zespołowo) od obserwatorów." },
    { id: "f2", term: "Walker", definition: "Osoba w terenie kierowana radiowo przez obserwatora, podchodząca do domniemanej pozycji snajpera w celu weryfikacji jego wykrycia (dotyk głowy, wskazanie ręką)." },
    { id: "f3", term: "Range estimation exercise", definition: "Ćwiczenie szacowania odległości do 10 obiektów (do 800 m) z tolerancją błędu 10%; niezaliczenie przy 4+ błędnych szacunkach." },
    { id: "f4", term: "Observation exercise", definition: "40-minutowe ćwiczenie obserwacji sektora ok. 1800 mil, szkic panoramiczny i wykrywanie 12 zamaskowanych obiektów wojskowych; próg zaliczenia 8/12 pkt." },
    { id: "f5", term: "Hide construction exercise", definition: "8-godzinna budowa tymczasowego stanowiska dla zespołu, testowana przez obserwatora schodzącego z 300 przez 150 do 25 jardów." },
    { id: "f6", term: "Camouflage and concealment exercise", definition: "Ukrycie się w 200 jardach od obserwatora w 5 minut, z ok. 30-minutową obserwacją i tą samą procedurą weryfikacji co w stalkingu." },
    { id: "f7", term: "OP (Observation Post)", definition: "Stanowisko obserwacyjne, do którego wysyłany jest snajper wykryty podczas ćwiczenia, by uczyć się na obserwacji cudzych błędów." },
    { id: "f8", term: "Flash cards (w ćwiczeniu hide)", definition: "Karty pokazywane snajperowi z odległości 150 jardów w trakcie testu stanowiska — musi zapisać wszystko, co zaobserwuje, ćwicząc jednocześnie prowadzenie dziennika." },
  ],
};
