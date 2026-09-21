import type { Chapter } from "../types/content";

export const appC: Chapter = {
  id: "app-c",
  kind: "appendix",
  number: "C",
  title: "Program podtrzymujący (Sustainment Program)",
  summary:
    "Umiejętności snajperskie — zwłaszcza strzelectwo i stalking — są wyjątkowo nietrwałe. Ten dodatek opisuje częstotliwość i strukturę szkolenia podtrzymującego, przykładowy program nauczania SOTIC Level II, wymagania amunicyjne oraz ćwiczenia i formuły do treningu na skróconym dystansie.",
  sections: [
    {
      id: "training-frequency",
      title: "Częstotliwość szkolenia i wymagania amunicyjne",
      page: "C-1",
      body: `Snajper powinien być testowany/oceniany ze wszystkich umiejętności **co najmniej raz w roku, lepiej co pół roku**. Kwalifikacja strzelecka — **co najmniej raz na kwartał**, wg standardów programu nauczania SOTIC.

Doświadczenie pokazuje, że utrzymanie biegłości w angażowaniu celów na nieznanych odległościach wymaga poświęcenia **co najmniej 8 godzin tygodniowo** na trening strzelecki snajperski.

Podstawowe wymagania amunicyjne (wg DA Pam 350-39, wyciąg z Table C-1) na snajpera rocznie (AC/RC — komponent aktywny/rezerwowy):

| Wydarzenie | Amunicja Match (7,62 mm) |
|---|---|
| Zero/potwierdzenie zera | 20 |
| Strzelanie na znanej odległości 200-1000 m | 100 |
| Field fire | 100 |
| LFX | 10 |
| Zapoznanie nocne/zero NVG | 40 |
| Sustainment (7,62 mm) | 40 |
| Kwalifikacja rejestrowana | 100 |
| **Suma na snajpera** | **~1280 (AC) / 420 (RC)** |

Dodatkowo: 40 naboi .50 cal i 40 naboi .300 Win na sustainment tych kalibrów. To wymaganie **minimalne, nie maksymalne**.`,
    },
    {
      id: "poi",
      title: "Przykładowy program nauczania SOTIC II",
      page: "C-2",
      body: `**Kurs:** Special Operations Target Interdiction Course, Level II (SOTIC II) — prowadzony w jednostce, przygotowuje też do formalnego SOTIC Level I w USAJFKSWCS.

**Parametry:** długość 2-5 tygodni (140,5-200 godzin), minimalna liczebność klasy 4, instruktorzy muszą być absolwentami SOTIC Level I, stosunek instruktor:student na stanowisku strzeleckim 2:1 do 4:1.

**Podsumowanie godzin (wariant 5-tygodniowy / 2-tygodniowy):**

| Blok | Zawartość | Godziny (5 tyg. / 2 tyg.) |
|---|---|---|
| **Ogólny** | wdrożenie, wprowadzenie do kursu, planowanie misji | 5,0 / 4,0 |
| **Strzelectwo** | SWS i sprzęt; zaawansowane strzelectwo; strzelectwo snajperskie; regulacja/zero; poprawki meteo; odczyt wiatru; 7 ćwiczeń strzeleckich (pozycje, grupowanie/zero lunety, snap 200-400m, cele ruchome 200-300m, strzelanie o zmierzchu, cele świadome 400-600m, strzelanie z NVD); balistyka stosowana; field shooting; szacowanie odległości + ćwiczenia | 130,5 / 93,5 |
| **Obserwacja** | obserwacja terenu i ćwiczenia; dziennik obserwatora i karta ostrzału; szkic panoramiczny i raportowanie elektroniczne; Kim's Game | 15,0 / 7,0 |
| **Ukrycie** | kamuflaż indywidualny; budowa ghillie suit; ruch indywidualny (stalking); wybór linii natarcia; ćwiczenie stalkingu; stanowiska i loopholes; budowa stanowiska | 32,5 / 19,0 |
| **Egzaminy** | pisemny; strzelectwo snajperskie; field shoot | 17,0 / 17,0 |

Dowódca jednostki może rozszerzyć program o moduły specjalistyczne: **operacje miejskie** (stanowiska miejskie, ankiety budynków, strzelanie przez materiały, platformy powietrzne), **strzelanie górskie** (efekt tunelu wiatrowego terenu, strzelanie pod kątem, duża wysokość), **strzelanie pustynne** (wysoka temperatura, mirage, inwersja termiczna).`,
    },
    {
      id: "exercises",
      title: "Ćwiczenia treningowe",
      page: "C-11",
      body: `**Ćwiczenia strzeleckie:**
- **Grupowanie** — serie 5-strzałowe na dystansach 100-800 m; analiza grup pozwala wykryć błędy strzeleckie i zebrać dane środowiskowe/cold-bore.
- **Strzelanie do celów ruchomych** — 100-600 m; sylwetki „chodzone" na maszcie w rowie strzeleckim, szerokość celu 12 cali, snajper nie zna z góry kierunku/prędkości. Cele stop-and-go (zatrzymanie na 3-5 s) na 600-800 m.
- **Strzelanie na nieznaną odległość** — 200-800 m, cele częściowo odsłonięte, wymusza szacowanie odległości metodą range card/sector sketch.
- **Strzelanie w sztucznym oświetleniu / z NVD** — 100-600 m; powyżej 400 m wiatr >5 mph powoduje chybienie niezależnie od umiejętności, jeśli snajper go nie skompensuje.
- **Stress shooting** — dodanie presji czasowej, podchodzenia (stalk) lub wysiłku fizycznego przed strzałem.
- **Wiatrówki match-grade** (np. RWS 75, Daisy Gamo) — trening na dystansie już od 10 m, z użyciem przeskalowanych celów.

**Ćwiczenia stalkingu:** rozwijają ruch, kamuflaż, czytanie mapy, planowanie misji i wybór stanowiska — zawsze w parach, opcjonalnie z ostrym strzałem potwierdzającym trafienie.

**Szacowanie odległości:** przez lunetę (miling) — dokładność wymagana **±5%** do 800 m; nieuzbrojonym okiem — **±12%** do 500 m (powyżej 600 m bardzo trudne, wymaga stałej praktyki).

**Trening M24 z systemem MILES:** nadajnik laserowy montowany równolegle do osi lufy, wzmocniona i zawężona wiązka do 1000 m. Zalety: wymusza dobrą pozycję (przeszkody blokują wiązkę), trenuje selekcję celu, daje natychmiastowy feedback trafienia. **Ograniczenia MILES:** brak treningu szacowania odległości (wiązka nie uwzględnia ustawienia elewacji na odległość), brak treningu balistyki zewnętrznej (wiązka niewrażliwa na wiatr/temperaturę/wilgotność), brak potrzeby wyprzedzenia celu ruchomego (wiązka porusza się z prędkością światła) — instruktor musi świadomie wymuszać uwzględnianie tych czynników mimo ich braku w symulacji.`,
    },
    {
      id: "reduced-scale",
      title: "Strzelnica w skali zredukowanej",
      page: "C-14",
      body: `Przy treningu z wiatrówką można symulować większe dystanse na krótkim torze, stosując proporcję trójkąta podobieństwa.

**Wzór na zredukowaną wysokość celu:**

*(R1 × H1) / R2 = H2*

gdzie R1 = odległość zredukowana, R2 = odległość symulowana, H1 = wysokość rzeczywistego celu, H2 = wysokość zredukowanego celu (R1 i R2 muszą być w tej samej jednostce; wynik H2 w tej samej jednostce co H1).

*Przykład:* R1 = 35 m, R2 = 500 m, H1 = 72 cale → H2 = (35 × 72) / 500 = **5,04 cala**.

**Wzór na symulowaną odległość:**

*(R1 × H1) / H2 = R2*

*Przykład:* cel 3-calowy na 35 m symuluje jaką odległość dla człowieka 72 cale wysokiego? R2 = (35 × 72) / 3 = **840 m**.

**Tabela zredukowanych celów (Table C-2)** — wysokość (w calach) symulująca sylwetkę 6-stopowego człowieka przy różnych kombinacjach odległości symulowanej i zredukowanej:

| Symulowana ↓ / Zredukowana → | 15 yd/m | 20 yd/m | 25 yd/m | 30 yd/m | 35 yd/m |
|---|---|---|---|---|---|
| 1000 | 1,08″ | 1,44″ | 1,80″ | 2,16″ | 2,52″ |
| 600 | 1,80″ | 2,40″ | 3,00″ | 3,60″ | 4,20″ |
| 500 | 2,16″ | 2,88″ | 3,60″ | 4,32″ | 5,04″ |
| 300 | 3,60″ | 4,80″ | 6,00″ | 7,20″ | 8,40″ |
| 100 | 10,80″ | 14,40″ | 18,00″ | 21,60″ | 25,20″ |

Alternatywna metoda: obliczyć MOA rzeczywistego celu (np. 36 cali na 600 jardów = 6 MOA), a następnie zastosować tę samą wartość MOA na zredukowanym dystansie (6 MOA = 1,5 cala na 25 jardów) — cel 1,5-calowy na 25 jardach symuluje więc cel 36-calowy na 600 jardach.

Dodatkowa korzyść: przy użyciu skali mil lunety M3A Ultra 10x, zredukowane cele dają te same odczyty mil co prawdziwy cel na symulowanej odległości (np. człowiek 6-stopowy na 500 jardów ma wysokość 4 mile — cel 3,60-calowy na 25 jardach też ma 4 mile).`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Ile godzin tygodniowo snajper powinien minimalnie poświęcać na trening strzelecki, by utrzymać biegłość?",
      options: ["2 godziny", "4 godziny", "8 godzin", "16 godzin"],
      correctIndex: 2,
      explanation: "Doświadczenie wskazuje na minimum 8 godzin tygodniowo treningu strzeleckiego snajperskiego.",
    },
    {
      id: "q2",
      question: "Jak często snajper powinien być testowany ze wszystkich umiejętności?",
      options: ["Co miesiąc", "Co najmniej raz w roku, lepiej co pół roku", "Raz na 2 lata", "Tylko przed misją"],
      correctIndex: 1,
      explanation: "Sniper powinien być testowany/oceniany co najmniej raz do roku; częstotliwość semiannual (co pół roku) jest lepsza.",
    },
    {
      id: "q3",
      question: "Jaka jest wymagana dokładność szacowania odległości przez lunetę (miling) do 800 m wg ćwiczeń sustainment?",
      options: ["±1%", "±5%", "±12%", "±20%"],
      correctIndex: 1,
      explanation: "Przy szacowaniu odległości przez lunetę wymagana dokładność to ±5% do 800 m; nieuzbrojonym okiem ±12% do 500 m.",
    },
    {
      id: "q4",
      question: "Czego NIE trenuje system MILES na M24?",
      options: [
        "Wyboru stanowiska ogniowego",
        "Selekcji celu",
        "Szacowania odległości i balistyki zewnętrznej (wiatr, wyprzedzenie)",
        "Fundamentów marksmanship",
      ],
      correctIndex: 2,
      explanation: "MILES emituje wiązkę światła niewrażliwą na balistykę zewnętrzną i porusza się z prędkością światła — nie wymusza korekt na odległość, wiatr ani wyprzedzenia celu ruchomego.",
    },
    {
      id: "q5",
      question: "Ile wynosi zredukowana wysokość celu dla R1=35m, R2=500m, H1=72 cale?",
      options: ["3,60 cala", "5,04 cala", "7,20 cala", "10,08 cala"],
      correctIndex: 1,
      explanation: "(35 × 72) / 500 = 5,04 cala — to przykład podany wprost w podręczniku dla wzoru na zredukowaną wysokość celu.",
    },
    {
      id: "q6",
      question: "Ile godzin łącznie obejmuje blok „Strzelectwo” w 5-tygodniowym programie SOTIC II?",
      options: ["15 godzin", "32,5 godziny", "93,5 godziny", "130,5 godziny"],
      correctIndex: 3,
      explanation: "Blok Marksmanship w wariancie 5-tygodniowym to 130,5 godziny (w wariancie 2-tygodniowym: 93,5 godziny).",
    },
  ],
  flashcards: [
    { id: "f1", term: "Sustainment program", definition: "Program podtrzymujący umiejętności snajperskie — kluczowy, bo marksmanship i stalking to najbardziej nietrwałe kompetencje snajpera." },
    { id: "f2", term: "8 godzin tygodniowo", definition: "Minimalny zalecany czas cotygodniowego treningu strzeleckiego, potrzebny do utrzymania biegłości w angażowaniu celów na nieznanych odległościach." },
    { id: "f3", term: "SOTIC II (POI)", definition: "Przykładowy program nauczania kursu jednostkowego Level II, 2-5 tygodni (140,5-200 godzin), prowadzony przez instruktorów będących absolwentami SOTIC Level I." },
    { id: "f4", term: "DA Pam 350-39", definition: "Dokument określający roczne minimalne wymagania amunicyjne i strategię treningową dla karabinu snajperskiego M21/M24 (CAT I)." },
    { id: "f5", term: "Stop-and-go target", definition: "Cel ruchomy zatrzymujący się na 3-5 sekund podczas ruchu, używany w ćwiczeniach na dystansie 600-800 m." },
    { id: "f6", term: "MILES", definition: "Multiple Integrated Laser Engagement System — laserowy system treningowy na M24; realistyczny w ocenie trafień, ale nie trenuje szacowania odległości, balistyki zewnętrznej ani wyprzedzenia celu." },
    { id: "f7", term: "Wzór zredukowanej wysokości celu", definition: "(R1 × H1) / R2 = H2 — pozwala obliczyć wysokość miniaturowego celu symulującego rzeczywisty cel na większej odległości." },
    { id: "f8", term: "Wzór symulowanej odległości", definition: "(R1 × H1) / H2 = R2 — pozwala obliczyć, jaką rzeczywistą odległość symuluje dany zredukowany cel." },
    { id: "f9", term: "Reduced-scale range", definition: "Strzelnica w skali zredukowanej używana z wiatrówkami match-grade do symulacji dystansów do 1000 m na krótkim torze (już od 10 m)." },
    { id: "f10", term: "Kwalifikacja strzelecka co kwartał", definition: "Minimalna wymagana częstotliwość formalnej kwalifikacji strzeleckiej snajpera, wg standardów POI SOTIC." },
  ],
};
