import type { Chapter } from "../types/content";

export const ch02: Chapter = {
  id: "ch02",
  kind: "chapter",
  number: "2",
  title: "Sprzęt",
  summary:
    "Snajper musi maksymalnie wykorzystywać potencjał całego swojego sprzętu — karabinu, celownika, amunicji, urządzeń obserwacyjnych i wyposażenia zespołowego — nosząc przy tym tylko to, co niezbędne do wykonania misji.",
  sections: [
    {
      id: "sws",
      title: "Karabin snajperski M24 (SWS)",
      page: "2-1",
      body: `Obecny system broni snajperskiej (Sniper Weapon System, SWS) to **karabin M24** z celownikiem **Leupold & Stevens Ultra 10x M3A**. M24 bazuje na akcji Remington Model 700 long action z regulowanym spustem.

**Specyfikacja M24:**
- Lufa: ciężka, ze stali nierdzewnej, 5 bruzd, skok gwintu 11,2 cala.
- Kolba: włókno szklane, grafit i Kevlar, z regulowaną płytą oporową.
- Celność: 1/2 MOA (grupa 1/2 cala na 100 jardów).
- Kaliber: 7,62 mm NATO.
- Przydział: dwa egzemplarze M24 na oddział operacyjny (ODA).

**Elementy zestawu M24 SWS (Figure 2-1):**
- Karabin bolt-action
- Stały celownik 10x, L&S M3A
- Skrzynia transportowa systemu (system case)
- Futerał na celownik
- Odczepiane przyrządy celownicze mechaniczne (przód i tył)
- Skrzynia i zestaw wdrożeniowy (deployment case and kit)
- Opcjonalny dwójnóg
- Zestaw do czyszczenia
- Miękki pokrowiec na karabin
- Instrukcja obsługi

**Bezpiecznik:** znajduje się z prawej tylnej strony komory zamkowej. Pozycja „S” (safe) — zawsze przed przenoszeniem/ładowaniem/rozładowaniem broni. Pozycja „F” (fire) — dopiero gdy broń ma zostać oddana strzał.

**Zespół zamkowy:** blokuje nabój w komorze i go wyciąga. Aby wyjąć zamek: bezpiecznik w „S”, podnieść uchwyt zamka, odciągnąć do oporu, wcisnąć zwolnik zamka (bolt stop release) i wysunąć zamek.

**Zespół spustowy:** siła spustu regulowana kluczem imbusowym 1/16 cala w zakresie **2,5–8 funtów** (nie można ustawić mniej niż 2,5 funta). Obrót zgodnie z ruchem wskazówek zegara zwiększa siłę, przeciwnie — zmniejsza.

**Regulacja kolby:** gruba tarcza reguluje długość ciągu (length of pull), cienka tarcza blokuje ustawienie. Kolbę można wydłużyć maksymalnie o szerokość trzech palców — dalej płyta oporowa staje się niestabilna.

**Przyrządy mechaniczne (iron sights):** zapasowy system celowniczy, odczepiany. Montaż wymaga wcześniejszego zdjęcia lunety.

**Kontrola przy inspekcji:** kompletność części; numer seryjny zamka zgodny z komorą; płynność ruchu bezpiecznika (S/F); spust (broń nie strzela przy „S”, płynny i czysty pociąg spustu); moment dokręcenia śrub akcji i pierścieni montażowych lunety — **65 cali-funtów (inch-pounds)**; stan kolby (pęknięcia, kontakt z lufą); czystość i stan lunety.

**Ładowanie:** wewnętrzny magazynek na **5 naboi** 7,62 mm. Procedura: bezpiecznik w „S” → podnieść i odciągnąć zamek → wepchnąć po kolei 5 naboi grotem w stronę komory → docisnąć naboje w dół, powoli wsuwając zamek nad pierwszym nabojem → zamknąć zamek. Aby naładować komorę: podnieść zamek, odciągnąć do oporu (zbyt wczesne zatrzymanie powoduje „override”), popchnąć zamek do przodu i zamknąć całkowicie — niepełne zamknięcie powoduje słabe uderzenie w spłonkę i niewypał.`,
      figures: [
        {
          id: "web-m24-sws",
          src: "/images/ch02/web-m24-sws.jpg",
          caption:
            "Zdjęcie poglądowe: warianty karabinu snajperskiego M24 SWS z lunetą M3A (źródło: Wikimedia Commons, CC BY-SA 3.0, na podstawie zdjęć PEO Soldier / US Army) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "scope",
      title: "Celownik optyczny M3A",
      page: "2-6",
      body: `Celownik optyczny umożliwia wykrywanie i angażowanie celów skuteczniej niż przyrządy mechaniczne — obraz celu i siatki (reticle) leżą na tej samej płaszczyźnie ogniskowej, co pozwala oku ostrzyć oba jednocześnie.

Przeciętne nieuzbrojone oko rozróżnia detal ok. 1 cala na 100 jardów (3 cm na 100 m = 1 MOA). Powiększenie dzieli tę wartość — np. luneta 4x pozwala dostrzec 1/4 MOA szczegółu, a 6x pozwala rozróżnić 3 cm detalu na 600 m. Luneta dodatkowo wzmacnia światło otoczenia, wydłużając okno strzeleckie o świcie i zmierzchu. *Dodatek G zawiera więcej informacji o lunetach snajperskich.*

**Leupold & Stevens M3A** — stała luneta **10x** z kompensatorem spadku toru lotu pocisku (BDC) kalibrowanym na 100–1000 m:
- Pokrętło elewacji: skok co 100 m do 600 m, potem co 50 m do 1000 m; 1 kliknięcie = **1 MOA**.
- Pokrętło windażu (bocznego): skok **1/2 MOA** na kliknięcie.
- Trzecie pokrętło: ostrość/paralaksa.
- Siatka: krzyż typu duplex z kropkami mil-dot co **3/4 MOA**, rozstaw **1 mil środek-środek**, do 10 mili w pionie i 10 mili w poziomie — używane do szacowania odległości, przewyższenia (holdover), poprawek na wiatr i wyprzedzeń celów ruchomych.

**Ustawienia:** snajper zawsze najpierw ustawia ostrość siatki pod własne oko (okular), dopiero potem koryguje ostrość/paralaksę. Paralaksa to pozorne przesunięcie obrazu na siatce przy ruchu oka — pokrętło focus/parallax reguluje ostrość obrazu celu na tej samej płaszczyźnie co siatka, minimalizując ten efekt.

**Wariant Leupold Vari-X III M3A-LR** (3,5-10x40mm) — zmienne powiększenie, kalibrowane i wymienne tarcze M3, tuba 30 mm, siatka mil-dot, wielowarstwowe powłoki soczewek.

**Montaż celownika:** podstawa (baseplate) z 4 śrubami + para pierścieni z 8 śrubami. Długie śruby montażowe idą z tyłu, krótkie z przodu. Docelowy moment dokręcenia pierścieni: **65 cali-funtów** kluczem dynamometrycznym typu T. Docelowy eye relief: ok. **3–3,5 cala**. Wypoziomowanie siatki (brak przechyłu/cant) sprawdza się poziomicą i pionem — przechył powoduje chybienia na dużych dystansach.

**Obsługa:** nałożyć siatkę na cel → oszacować odległość z mil-dotów → ustawić paralaksę → ustawić elewację na oszacowaną odległość → nałożyć krzyż na punkt trafienia → zgłosić obserwatorowi „READY” i czekać na poprawkę wiatru.`,
      figures: [
        {
          id: "fig2-9",
          src: "/images/ch02/fig2-9.png",
          caption: "Figure 2-9. The M24 Optical Day Sight Reticle — siatka mil-dot celownika M24 (oryginał z FM 3-05.222).",
        },
        {
          id: "fig2-10",
          src: "/images/ch02/fig2-10.png",
          caption:
            "Figure 2-10. Focus/Parallax, Elevation, and Windage Knobs — rozmieszczenie pokręteł lunety M3A (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "ammo",
      title: "Amunicja",
      page: "2-10",
      body: `Snajper powinien zawsze dążyć do użycia amunicji klasy match ze względu na większą celność i mniejszą wrażliwość na warunki środowiskowe. **Każda zmiana typu lub partii (lot) amunicji wymaga ponownego wyzerowania SWS.**

| Typ | Waga pocisku | V0 (prędkość wylotowa) | Standard celności | Uwagi |
|---|---|---|---|---|
| **M118 Special Ball (SB)** | 173 grainy, boat-tail | 2600 fps (podawane 2550 fps @ 78 ft) | 10-strzał: ≤12 cali/600 jardów (2 MOA) | Podstawowy wybór dla M24 — luneta balistycznie dopasowana do 1000 m; wypierana przez M118LR |
| **M852 National Match** | 168 grainów (Sierra Match King), open tip | — | 9,5 cala śr./600 jardów (~1,5 MOA) | Otwarty czubek ≠ pocisk dum-dum (nie narusza prawa wojennego); nieoptymalny powyżej 700 m (poddźwiękowy) |
| **M118 Long Range (LR)** | 175 grainów (Sierra Match King), open tip | — | ~1 MOA poziom / 1,4 MOA pion @ 1000 jardów | Docelowo zastępuje M118SB i M852; tor lotu zbliżony do M118SB |
| **M82 Blank** | — | — | — | Amunicja ślepa do treningu polowego, aktywuje system MILES |
| **M80/M80E1 Ball** | 147 grainów, boat-tail | 2800 fps | ≤24 cali/600 jardów (4 MOA) | Standardowa amunicja NATO — awaryjny substytut, wymaga testowania partii |
| **M62 Tracer** | 141 grainów | — | ≤36 cali/600 jardów (6 MOA) | Grot pomarańczowy (oznaczenie NATO); ogranicza żywotność lufy — używać oszczędnie |

**M852 — ograniczenia jako substytut M118:** różnica trajektorii rośnie z dystansem (700 m → celuj jak na 725 m, 800 m → jak na 850 m); niezalecany powyżej 700 m, bo 168-grainowy pocisk spada poniżej prędkości dźwięku i traci celność w strefie przejścia transsonicznego.

**Alternatywy:** przy braku amunicji match-grade można użyć standardowej 7,62×51 mm NATO ball — ale kompensator BDC lunety M3A jest kalibrowany pod M118SB, więc zero znacząco się zmieni. Tylko w sytuacjach awaryjnych, zawsze po testowym ostrzale i zapisaniu danych w dzienniku strzeleckim.

**Książka liczby strzałów (round count book):** snajper musi prowadzić bieżący rejestr liczby i typu naboi wystrzelonych z SWS. Żywotność lufy wynosi ok. **8000–10 000 strzałów** — po tym progu (lub wcześniej przy spadku celności) należy sprawdzić erozję gardzieli lufy i ewentualnie zaplanować wymianę lufy.`,
      figures: [
        {
          id: "web-m118lr",
          src: "/images/ch02/web-m118lr-ammo.jpg",
          caption:
            "Zdjęcie poglądowe: amunicja M118 Long Range 7,62×51 mm NATO (źródło: Wikimedia Commons, public domain, US Marine Corps) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "observation",
      title: "Sprzęt obserwacyjny",
      page: "2-13",
      body: `Poza karabinem i celownikiem, najważniejszym narzędziem snajpera są przyrządy optyczne: **lornetki, lunety obserwacyjne, urządzenia noktowizyjne (NVD) i dalmierze**.

**Lornetki** — podstawowe narzędzie obserwacji każdego snajpera. Kryteria wyboru: wytrzymałość i wodoszczelność, kompaktowość, umiarkowane powiększenie **6-8x** (wyższe ogranicza pole widzenia i wzmacnia drżenie rąk), obiektyw **35-50 mm** (większy = lepszy w słabym świetle), oraz skala mil do szacowania odległości.

| Model | Obiektyw | Powiększenie | Pole widzenia | Uwagi |
|---|---|---|---|---|
| M19 | 50 mm | 7x | 130 mil na 1000 m | — |
| M22 | 50 mm | 7x | 130 mil na 1000 m | Nowszy, składane muszle oczne, filtry laserowe (odbijają światło — ryzyko demaskacji!) |

Trzymanie lornetki: lekko, oparta na nasadach dłoni, kciuki blokują boczne światło. Okresy obserwacji ograniczone do **30 minut** + min. **15 minut** przerwy, by uniknąć zmęczenia oczu.

**Lunety obserwacyjne zespołu:**

| Model | Powiększenie | Uwagi |
|---|---|---|
| M48/M49 | ~20x (19,6x / 20x) | Na trójnogu (M14/M15); obserwator wspiera strzelca w analizie celu i odczycie śladu pocisku |
| M144 | 15x–45x zmienne, obiektyw 60 mm | Nowszy standard; przy odczycie wiatru/śladu nie przekraczać 20x powiększenia |
| 100-mm lunetka zespołowa (Unertl / Optolyth) | — | Standard szkoleniowy, szersze pole widzenia w pozycjach statycznych |

**Urządzenia noktowizyjne (NVD)** wzmacniają światło otoczenia (nie działają w pełnej ciemności, poza wyjątkami z iluminatorem IR). Ograniczenia: mgła, dym, kurz, deszcz zmniejszają zasięg i rozdzielczość. Wstępna ekspozycja ograniczona do **10 minut + 15 minut przerwy**.

| Urządzenie | Typ / generacja | Kluczowe cechy |
|---|---|---|
| AN/PVS-2 | Gen. I | Najlepsza rozdzielczość w bardzo słabym świetle, ale duże i ciężkie |
| AN/PVS-4 | Gen. II | Mniejszy/lżejszy, montowany na M4/M16/M21/M24; zasięg 400 m (światło gwiazd) / 600 m (księżyc) |
| KN200/250 (SIMRAD, PVS-9/9A) | Gen. II/III | Nakładka na celownik dzienny M3A — celowanie dzień i noc bez zdejmowania lunety |
| NADS 750/850/1000 | Gen. III | Podobny montaż do SIMRAD; wodoszczelny do 66 stóp/2h |
| AN/PVS-10 | Gen. II/III/III+ | Zintegrowany celownik dzień/noc — zastępuje celownik dzienny |
| Model 007 „Universal Clip-On” | Gen. III | Nakładany z przodu lunety dziennej; dewiacja przy montażu < 1 MOA |
| AN/PVS-17 | Gen. III/IV | Kompaktowy, do pracy miejskiej z bliska (M4 SOPMOD/M24) |
| **AN/PAS-13** | Gen. II FLIR (termowizja) | Wykrywa cele w dzień i noc, skuteczny we mgle/dymie/kurzu; siatka jak M3A (wersja Heavy) |
| AN/PVS-5 / PVS-7 | Gogle noktowizyjne | PVS-7 ma lepszą rozdzielczość i mocowanie do hełmu |
| **AN/PVS-14** | Gen. III, monokular | Zastępca PVS-7; 1x (ruch) lub 3-5x (obserwacja z adapterem); mocowany do hełmu lub ręczny |

**Dalmierze laserowe:**
- **AN/GVS-5** — zasięg 200-9990 m (błąd ±10 m), pomiar czasu powrotu wiązki IR; filtr żółty (bezpieczny przy obserwacji filtrowanej optyką) i czerwony (bezpieczny dla oka).
- **AN/PVS-6** (mini-eyesafe) — zasięg 50-9995 m, krok 5 m, może być montowany i boresightowany z AN/TAS-6.

Snajperzy używają NVD do: wzmocnienia obserwacji nocnej, lokalizowania i tłumienia ognia wroga w nocy, ograniczania ruchu przeciwnika oraz demoralizującego, celnego ognia pierwszym strzałem po zmroku. Generalnie PVS-2 lepiej sprawdza się przy bardzo słabym świetle, a PVS-4 w terenie zabudowanym.`,
      figures: [
        {
          id: "web-pvs14",
          src: "/images/ch02/web-pvs14.jpg",
          caption:
            "Zdjęcie poglądowe: monokular noktowizyjny AN/PVS-14 (źródło: Wikimedia Commons, public domain, US Army) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
        {
          id: "web-pas13",
          src: "/images/ch02/web-pas13-thermal.jpg",
          caption:
            "Zdjęcie poglądowe: celownik termowizyjny broni strzeleckiej (rodzina AN/PAS-13, wariant LWTS; źródło: Wikimedia Commons, public domain, US Army) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "team-equipment",
      title: "Wyposażenie zespołu snajperskiego",
      page: "2-29",
      body: `Zespół snajperski nosi tylko sprzęt i zapasy potrzebne do realizacji misji w szacowanym czasie, korzystając w razie potrzeby z punktów wsparcia lub skrytek (cache).

**Wyposażenie standardowe:** M24 SWS (100 naboi M118/M852), dziennik strzelecki i dziennik misji, karabinek serwisowy z NVD (200-210 naboi), luneta obserwacyjna M144/M49 na trójnogu M15, lornetka (7x, 50 mm, ze skalą mil), pistolet M9 (45 naboi 9 mm), NVD wg potrzeb, radia, umundurowanie kamuflażowe (wykonane przez snajpera), kompas (najlepiej M2), zegarek wodoodporny ze wskazówką sekundową, mapy i materiały do szkiców sektora.

**Wyposażenie dodatkowe:**
- **Pas nośny (sling)** — preferowany skórzany lub zmodyfikowany pas webowy M14 (pas M16 nieodpowiedni do pozycji wspieranych pasem).
- **Ghillie suit** — kombinezon kamuflażowy pokryty nieregularnymi pasami materiału (juty), przycinanymi dla rozbicia sylwetki. Osłona na tył głowy/ramion (veil) maskuje lunetę i wyłapuje wyrzucane łuski.

  > **Uwaga:** przy działaniu z jednostkami regularnymi snajper nosi ich umundurowanie — ghillie suit w takiej sytuacji "prześwietla" snajpera jako priorytetowy cel, zwłaszcza dla snajperów przeciwnika.

- **Sprzęt konserwacyjny** — dobierany wg długości misji i dostępnego wsparcia logistycznego w rejonie działań.
- **Kalkulator** — kieszonkowy, do wzoru mil-relation; w warunkach ograniczonej widoczności lepszy zasilany bateryjnie (podświetlany wyświetlacz), ale nigdy jako jedyne narzędzie.
- Noże, bagnety, saperki, przecinaki do drutu, sekatory, plecaki — wg zdrowego rozsądku i misji.

**Wyposażenie specjalne** musi łączyć trzy cechy: trwałość, prostotę i celność (grupowanie do 2 MOA na 600 m). Obejmuje broń specjalną (karabiny bolt-action, obce systemy snajperskie, broń wielkokalibrowa dalekiego zasięgu, pistolety z lunetą typu XP-100/Contender), tłumiki oraz urządzenia obserwacyjne (aparaty SLR/cyfrowe/wideo, 100-mm lunety zespołowe, NVD dla broni zespołowej typu AN/TVS-4/5, termowizja AN/PAS-7, radary i czujniki).

**Fizyka tłumika:** tłumik zwodzi obserwatora co do lokalizacji strzelca na dwa sposoby — redukuje huk wylotowy (muzzle blast) czyniąc go niesłyszalnym z niewielkiej odległości, oraz tłumi błysk wylotowy w nocy. Dźwięk strzału ma **dwa źródła**: huk wylotowy (z jednego stałego punktu — łatwy do zlokalizowania) oraz **trzask balistyczny** (sonic boom pocisku naddźwiękowego) — promieniujący stożkowo do tyłu z punktu tuż przed poruszającym się pociskiem, uderzający w ucho pod kątem bliskim 90°, co kieruje uwagę obserwatora w złym kierunku (nie ku stanowisku strzelca).

Im dalej od broni znajduje się obserwator, tym wyraźniej rozdzielają się oba dźwięki (np. na 600 m dzieli je ok. 1 sekunda).`,
      figures: [
        {
          id: "web-ghillie",
          src: "/images/ch02/web-ghillie-suit.jpg",
          caption:
            "Zdjęcie poglądowe: żołnierze US Army w strojach ghillie (źródło: Wikimedia Commons, public domain, US Army) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
        {
          id: "fig2-27",
          src: "/images/ch02/fig2-27.png",
          caption:
            "Figure 2-27. Deception Caused by the Sonic Waves of the Bullet Breaking the Speed of Sound (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "maintenance",
      title: "Konserwacja i czyszczenie SWS",
      page: "2-33",
      body: `Konserwacja to każde działanie utrzymujące system w pełnej sprawności: inspekcja, naprawa, czyszczenie i smarowanie.

**Kiedy czyścić:**
- **Przed strzelaniem** — zawsze; olej lub brud w lufie/komorze zmienia ciśnienie, obniża celność pierwszego strzału i może spowodować zacięcie łuski, a przy strzale wywołuje charakterystyczny kłąb dymu demaskujący stanowisko.
- **Po strzelaniu** — w ciągu kilku godzin od zaprzestania ognia; osad prochowy i miedziany wymagają różnych rozpuszczalników.

**Demontaż** (tylko gdy absolutnie konieczny, nie do codziennego czyszczenia): bezpiecznik „S” → wyjąć zamek → poluzować nakrętki pierścieni lunety i zdjąć lunetę → wykręcić dwie śruby akcji spustu → zdjąć kolbę z lufy. Broń zawsze składać w tej samej kolejności co ostatnio — utrzyma to zero w granicach 0,5 MOA.

**Procedura czyszczenia lufy** (skrót): patchem nasączonym **SCBS** (Shooter's Choice Bore Solvent) rozluźnia się osad prochowy → szczotka z brązu (nigdy stalowa — rysuje lufę!) ok. 20 przejść → patche SCBS aż wychodzą czyste (bez czarno-szarego osadu) → usunąć SCBS czystymi patchami → **Sweets 7.62** na osad miedziany, max **30 minut** działania → patche aż bez śladu niebiesko-zielonego zabarwienia → osuszyć lufę i komorę → w razie dłuższego przechowywania: **Shooter's Choice Rust Prevent** (nie CLP), usunąć przed strzelaniem.

**Docieranie nowej/relufowanej lufy (barrel break-in):** 1 strzał → pełne czyszczenie (SCBS + Sweets) — powtórzyć **10 razy**, następnie 5 serii po 3 strzały z pełnym czyszczeniem między seriami (łącznie 15 strzałów). Potem czyścić co najmniej co 100 strzałów.

**Konserwacja optyki:** powłoka fluorku magnezu — czyścić pędzelkiem z sierści wielbłąda, tłuszcz/olej usuwać kroplą płynu do soczewek lub denaturatu na bibułce (ruchem kolistym od środka na zewnątrz); nigdy płynu bezpośrednio na szkło. Nie zostawiać lunety w bezpośrednim słońcu (soczewki skupiają promienie na siatce — ryzyko uszkodzenia). Chronić przed upadkiem i uderzeniami — może to trwale zmienić zero.

**Konserwacja wg środowiska:**
- **Zimno:** broń wolna od wilgoci i gęstego oleju (zamarzają); aklimatyzować przed przejściem zimno↔ciepło, by uniknąć oblodzenia; iglica czyszczona odtłuszczaczem i CLP (smar stwardnieje).
- **Woda słona:** częste czyszczenie, obfite smarowanie (poza strzelaniem), suchy patch przez lufę przed strzałem.
- **Dżungla/wilgoć:** więcej smaru, futerał gdy broń nieużywana, codzienne czyszczenie lufy/komory/kolby, waciki między osłonami a soczewkami lunety.
- **Pustynia:** broń sucha, bez nadmiaru CLP (poza tylną częścią ryglowania zamka), osłona przed piaskiem, szczoteczka do zębów do czyszczenia zamka i komory.

We wszystkich środowiskach: pasek materiału zawiązany na końcach, wsuwany między lufę a kolbę na czas przemieszczania się, usuwany na stanowisku — zbiera zanieczyszczenia i piasek z wolnopływającej lufy.`,
    },
    {
      id: "troubleshooting",
      title: "Rozwiązywanie problemów SWS",
      page: "2-41",
      body: `Tabela 2-1 z podręcznika zawiera typowe usterki M24 SWS, ich przyczyny i sposoby usunięcia. Jeśli usterki nie da się usunąć w polu, cały system trafia do kanału zaopatrzenia/serwisu w celu zwrotu do kontraktora.

| Usterka | Przyczyna | Sposób usunięcia |
|---|---|---|
| **Niewypał (Fail to Fire)** | Bezpiecznik w „S” | Przełączyć na „F” |
| | Wadliwa amunicja | Wyrzucić nabój |
| | Uszkodzona/zakleszczona/wystająca iglica | Wymienić zespół iglicy |
| | Mechanizm spustowy rozregulowany | Przekazać cały system do serwisu |
| **Zamek się zacina (Bolt Binds)** | Śruba akcji wystaje w tor zamka | Przekazać do serwisu |
| | Śruba podstawy lunety wystaje w tor zamka | Przekazać do serwisu |
| **Błąd podawania (Fail to Feed)** | Zamek nie w pełni odciągnięty (override) | Upewnić się, że zamek jest cofnięty do końca |
| | Nabój zakleszczony w komorze | Cofnąć zamek, usunąć nabój, poprawnie umieścić w magazynku |
| | Podajnik magazynka odwrócony | Zdjąć sprężynę, zamontować z długim ramieniem podajnika |
| | Słaba/pęknięta sprężyna magazynka | Wymienić sprężynę |
| **Błąd wyrzutu (Fail to Eject)** | Złamany wyrzutnik | Przekazać cały system do serwisu |
| | Zanieczyszczony trzpień wyrzutnika | Sprawdzić i oczyścić czoło zamka; jeśli nie pomoże — do serwisu |
| **Błąd ekstrakcji (Fail to Extract)** | Złamany ekstraktor | Przekazać do serwisu |
| **Zwolnik zamka nie działa** | Zanieczyszczony mechanizm zwolnika zamka | Rozłożyć karabin, oczyścić mechanizm, nasmarować smarem grafitowym |

*Pełne informacje o wysyłce niedających się naprawić elementów zawiera TM 9-1005-306-10.*`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaka jest deklarowana celność karabinu M24?",
      options: ["1 MOA", "1/2 MOA (1/2 cala na 100 jardów)", "2 MOA", "1/4 MOA"],
      correctIndex: 1,
      explanation: "M24 jest konstruowany, by osiągać celność 1/2 MOA, czyli grupy 1/2-calowe na 100 jardów.",
    },
    {
      id: "q2",
      question: "W jakim zakresie można regulować siłę spustu M24?",
      options: ["1-5 funtów", "2,5-8 funtów", "5-10 funtów", "3-6 funtów"],
      correctIndex: 1,
      explanation: "Spust reguluje się kluczem imbusowym 1/16 cala w zakresie od 2,5 do 8 funtów — mniej niż 2,5 funta nie jest możliwe.",
    },
    {
      id: "q3",
      question: "Jaki jest rozstaw kropek mil-dot na siatce celownika M3A?",
      options: ["1/2 mila", "3/4 MOA", "1 mil środek-środek", "2 mile"],
      correctIndex: 2,
      explanation: "Kropki mil-dot są rozstawione co 1 mil, licząc środek do środka, z 3/4-MOA wielkością samej kropki.",
    },
    {
      id: "q4",
      question: "Ile wynosi zalecany moment dokręcenia śrub akcji i pierścieni lunety M24?",
      options: ["25 cali-funtów", "45 cali-funtów", "65 cali-funtów", "90 cali-funtów"],
      correctIndex: 2,
      explanation: "Zarówno śruby akcji, jak i nakrętki pierścieni lunety, dokręca się do 65 cali-funtów.",
    },
    {
      id: "q5",
      question: "Która amunicja jest podstawowym wyborem dla M24, ponieważ luneta M3A jest do niej balistycznie dopasowana do 1000 m?",
      options: ["M852 National Match", "M80 Ball", "M118 Special Ball", "M62 Tracer"],
      correctIndex: 2,
      explanation: "M118 Special Ball jest podstawowym wyborem — BDC lunety M3A jest skalibrowany właśnie pod tę amunicję.",
    },
    {
      id: "q6",
      question: "Dlaczego amunicja M852 nie jest zalecana powyżej 700 metrów?",
      options: [
        "Jest zbyt droga",
        "168-grainowy pocisk staje się poddźwiękowy i traci celność",
        "Nie mieści się w magazynku",
        "Powoduje uszkodzenie lufy",
      ],
      correctIndex: 1,
      explanation: "Pocisk M852 spada poniżej prędkości dźwięku tuż za 700 m, a towarzysząca temu turbulencja pogarsza celność.",
    },
    {
      id: "q7",
      question: "Jaka jest orientacyjna żywotność lufy M24 SWS?",
      options: ["1000-2000 strzałów", "3000-4000 strzałów", "8000-10 000 strzałów", "20 000-25 000 strzałów"],
      correctIndex: 2,
      explanation: "Żywotność lufy wynosi około 8000-10 000 strzałów, po czym należy sprawdzić erozję gardzieli lufy.",
    },
    {
      id: "q8",
      question: "Ile wynosi maksymalny czas działania rozpuszczalnika Sweets 7.62 w lufie?",
      options: ["5 minut", "30 minut", "2 godziny", "całą noc"],
      correctIndex: 1,
      explanation: "Sweets nigdy nie powinien pozostawać w lufie dłużej niż 30 minut.",
    },
    {
      id: "q9",
      question: "Z ilu źródeł dźwięku składa się huk strzału z broni naddźwiękowej?",
      options: [
        "Tylko z huku wylotowego",
        "Z huku wylotowego i trzasku balistycznego (sonic boom pocisku)",
        "Tylko z trzasku balistycznego",
        "Z echa i pogłosu",
      ],
      correctIndex: 1,
      explanation: "Dźwięk strzału to dwa oddzielne zjawiska: huk wylotowy (stały punkt) i trzask balistyczny promieniujący stożkowo od poruszającego się pocisku — co utrudnia namierzenie strzelca.",
    },
    {
      id: "q10",
      question: "Jaka jest zalecana czynność, gdy podajnik magazynka M24 powoduje błąd podawania (fail to feed)?",
      options: [
        "Wymienić cały zamek",
        "Zdjąć sprężynę magazynka i zamontować ją z długim ramieniem podajnika",
        "Wysłać broń do kontraktora",
        "Zwiększyć siłę spustu",
      ],
      correctIndex: 1,
      explanation: "Wg Table 2-1, gdy podajnik magazynka jest odwrócony, rozwiązaniem jest zdjęcie sprężyny i ponowny montaż z long-leg follower.",
    },
  ],
  flashcards: [
    { id: "f1", term: "SWS", definition: "Sniper Weapon System — obecnie karabin M24 z celownikiem Leupold & Stevens Ultra 10x M3A, oparty na akcji Remington 700 long action." },
    { id: "f2", term: "MOA", definition: "Minute of Angle — jednostka kątowa precyzji strzeleckiej; 1 MOA ≈ 1 cal na 100 jardów. M24 gwarantuje celność 1/2 MOA." },
    { id: "f3", term: "Mil-dot", definition: "System kropek na siatce celownika M3A rozstawionych co 1 mil (środek-środek), używany do szacowania odległości, przewyższenia i poprawek na wiatr." },
    { id: "f4", term: "BDC", definition: "Bullet Drop Compensator — kompensator spadku toru lotu pocisku w pokrętle elewacji lunety M3A, kalibrowany na 100-1000 m pod amunicję M118SB." },
    { id: "f5", term: "Paralaksa", definition: "Pozorne przesunięcie obrazu celu względem siatki celowniczej przy ruchu oka; eliminowana pokrętłem focus/parallax." },
    { id: "f6", term: "M118LR", definition: "M118 Long Range — nowsza amunicja 7,62×51 mm (175 grainów, open tip), docelowo zastępująca M118SB i M852." },
    { id: "f7", term: "M852 National Match", definition: "Amunicja treningowo-bojowa 168 grainów z otwartym czubkiem (open tip); niezalecana powyżej 700 m ze względu na przejście poddźwiękowe." },
    { id: "f8", term: "Boat-tail", definition: "Kształt tylnej części pocisku zwężający się stożkowo, redukujący opór aerodynamiczny — stosowany m.in. w M118SB, M852, M118LR i M80." },
    { id: "f9", term: "SCBS", definition: "Shooter's Choice Bore Solvent — rozpuszczalnik do usuwania osadu prochowego z lufy, używany przed rozpuszczalnikiem miedziowym Sweets." },
    { id: "f10", term: "Barrel break-in", definition: "Procedura docierania nowej/relufowanej lufy: 10× (1 strzał + pełne czyszczenie), potem 5 serii po 3 strzały z czyszczeniem między seriami." },
    { id: "f11", term: "AN/PVS-14", definition: "Monokular noktowizyjny generacji III, następca PVS-7; używany jako urządzenie ruchowe (1x) lub obserwacyjne (3-5x z adapterem)." },
    { id: "f12", term: "AN/PAS-13", definition: "Pasywny celownik termowizyjny (FLIR), skuteczny w dzień i noc oraz przy mgle/dymie/kurzu, z siatką odpowiadającą celownikowi dziennemu M3A." },
    { id: "f13", term: "Ghillie suit", definition: "Kombinezon kamuflażowy pokryty pasami materiału rozbijającymi sylwetkę snajpera; nie noszony przy współdziałaniu z jednostkami regularnymi." },
    { id: "f14", term: "Trzask balistyczny (ballistic crack)", definition: "Dźwięk sonic boom generowany przez naddźwiękowy pocisk, promieniujący stożkowo z punktu przed pociskiem — myli obserwatora co do kierunku strzelca." },
    { id: "f15", term: "Round count book", definition: "Dziennik prowadzony przez snajpera z bieżącą liczbą i typem naboi wystrzelonych z SWS, kluczowy dla oceny żywotności lufy (8000-10 000 strzałów)." },
  ],
};
