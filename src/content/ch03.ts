import type { Chapter } from "../types/content";

export const ch03: Chapter = {
  id: "ch03",
  kind: "chapter",
  number: "3",
  title: "Strzelectwo (Marksmanship Training)",
  summary:
    "Umiejętność precyzyjnego strzelania to najważniejsza i najbardziej nietrwała kompetencja snajpera. Rozdział obejmuje pozycje strzeleckie, celowanie, oddech i pociąg spustu, balistykę, zerowanie broni, wpływ warunków środowiskowych oraz angażowanie celów ruchomych i pojawiających się na krótko.",
  sections: [
    {
      id: "firing-positions",
      title: "Pozycje strzeleckie",
      page: "3-1",
      body: `Standardy minimalne, jakie snajper musi utrzymywać: **90%** trafień pierwszym strzałem na celach stacjonarnych do 600 m, **50%** na 600–900 m, **70%** na celach ruchomych do 300 m i **70%** na celach typu snap do 400 m.

Pozycja strzelecka musi być **solidna** (odporna na czynniki zewnętrzne), **stabilna** (minimalny ruch broni) i **wytrzymała** (możliwa do utrzymania przez dłuższy czas). W przeciwieństwie do strzelca sportowego, snajper zawsze szuka najbardziej stabilnej pozycji — nie sprawdza, czy trafi, musi to *wiedzieć*.

**Podstawowe zasady przyjmowania pozycji:**
- Zawsze preferować leżącą (prone) lub jej warianty — jest najbardziej stabilna.
- Używać każdego solidnego podparcia, gdy dwójnóg niedostępny lub za krótki.
- Nigdy nie dotykać lufą podpory — zakłóca to harmoniczne drgania lufy i przesuwa POI (punkt trafienia).
- Stosować poduszkę (np. czapkę, rękawicę, skarpetę z piaskiem) między bronią a twardą podporą.
- Nie opierać boku broni o podporę — wpływa na zachowanie broni przy odrzucie.
- Nigdy nie przechylać broni (cant) — to głowa dostosowuje się do broni, nie odwrotnie.

**Trzy elementy dobrej pozycji:** oparcie na kościach (bone support, nie na mięśniach), rozluźnienie mięśniowe oraz naturalny punkt celowania (natural POA) na punkcie celowania — pozycję koryguje się przesuwając całe ciało, nigdy „dociskając" broń mięśniami.

**Czynniki wspólne dla wszystkich pozycji:** ręka niestrzelająca podpiera (nie ściska) łoże lub kolbę; kolba mocno osadzona w zagłębieniu barku; ręka strzelająca chwyta szyjkę kolby bez „duszenia"; stały styk policzka z kolbą (stock weld) w tym samym miejscu przy każdym strzale.

**Typy pozycji** (każda ma swój numer figury w oryginale — dwie najważniejsze, skrajne pod względem stabilności, pokazano niżej):

| Pozycja | Zastosowanie |
|---|---|
| **Prone Supported** (leżąca wsparta) | Podstawowa, najbardziej stabilna; dwójnóg lub podpora, broń jak najniżej |
| **Hawkins** | Bardzo niska sylwetka (dach, niewielkie wzniesienie); podparcie na pięści ręki niestrzelającej |
| **Sling-Supported Prone** (leżąca z pasem) | Pas nośny wsparty na ramieniu, klasyczna pozycja treningowa |
| **Prone Backward / Creedmore** | Pozycja ekstremalna do strzału pod większym kątem lub do tyłu; niezalecana poza wyjątkami |
| **Sitting Supported / Sling-Supported Sitting** | Siedząca, łokcie na kolanach lub pas nośny |
| **Supported / Sling-Supported Kneeling** | Klęcząca, szybka do przyjęcia, oparcie o drzewo/obiekt |
| **Squatting** | Doraźne starcia lub strzelanie ze śmigłowca (mniej kontaktu z wibracjami) |
| **Supported Standing** | Oparcie pionowe lub poziome (ściana, drzewo); najmniej stabilna z pozycji wspartych |
| **Standing Unsupported (off-hand)** | Najmniej stabilna i najbardziej eksponowana ze wszystkich — ostateczność |

**Pozycje niestandardowe:** okop/stanowisko wykopane (foxhole — pas/worki z piaskiem jako platforma), stanowisko na drzewie (ograniczone drogi odwrotu!), stanowisko typu bench rest (budynek/jaskinia/głęboki cień — bardzo stabilne, mało męczące).

**Doraźne podpory broni:** skarpeta z piaskiem (sand sock) pod tylnym strzemieniem pasa; plecak; ładownica (buttpack); worek z piaskiem; trójnóg lub „krzyżak" (cross sticks) z patyków związanych sznurkiem 550; wideł wbity w ziemię (forked stake — najmniej pożądany, wymaga trzymania ręką).

**Pasy nośne:** skórzany pas M1907 National Match jest lepszy od pasa webowego M16. Użycie pasa może zmienić zero broni po jego zdjęciu — trzeba liczyć i zapisywać liczbę dziurek dla każdej pozycji.`,
      figures: [
        {
          id: "fig3-1",
          src: "/images/ch03/fig3-1.png",
          caption: "Figure 3-1. Prone Supported Position — najbardziej stabilna pozycja strzelecka (oryginał z FM 3-05.222).",
        },
        {
          id: "fig3-9",
          src: "/images/ch03/fig3-9.png",
          caption:
            "Figure 3-9. Standing Unsupported or Off-Hand Position — najmniej stabilna z pozycji, ostateczność (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "team-firing",
      title: "Techniki strzelania zespołowego",
      page: "3-17",
      body: `Zespół snajperski to dwie wszechstronne osoby: **snajper** i **obserwator**. Wspólnie muszą: obliczyć odległość do celu, określić wpływ środowiska na balistykę, wykonać potrzebne poprawki celownika, obserwować trafienie i szybko ocenić skuteczność przed kolejnym strzałem.

**Obowiązki snajpera:** buduje stabilną pozycję, lokalizuje wskazany cel, odczytuje wysokość celu w mil obserwatorowi, wprowadza poprawki elewacji podane przez obserwatora, zgłasza gotowość, kontroluje oddech w naturalnej pauzie oddechowej, stosuje prawidłowy pociąg spustu, kontynuuje follow-through, dokładnie „woła" strzał (calls the shot).

**Obowiązki obserwatora:** pozycjonuje się tak, by nie zakłócać pozycji snajpera; wybiera cel (bliższy cel = większe zagrożenie, a jego zaangażowanie pozwala potwierdzić zero); z odczytu mil od snajpera oblicza odległość i przekazuje poprawkę elewacji; oblicza wpływ pogody na balistykę i poprawkę wiatru (mil hold-off); obserwuje strzał przez lunetę obserwacyjną; ocenia wynik i koryguje kolejny strzał.

**Ustawienie obserwatora względem snajpera:** pozycja **4–5 „na tarczy zegara"** od strony strzelającego barku (7–8 dla leworęcznych), blisko snajpera, ale go nie dotykając — im bliżej linii strzelec-cel znajdzie się luneta obserwatora, tym łatwiej śledzić ślad pocisku (trace) i obserwować trafienie.`,
      figures: [
        {
          id: "web-observer",
          src: "/images/ch03/web-observer-spotting.jpg",
          caption:
            "Zdjęcie poglądowe: obserwator z lunetą obserwacyjną i wiatromierzem (źródło: Wikimedia Commons, Open Government Licence, UK MOD/Stuart A Hill) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "sighting-aiming",
      title: "Celowanie",
      page: "3-19",
      body: `Celowanie obejmuje trzy elementy: **eye relief** (odległość oka od lunety/przyrządu), **wyrównanie przyrządów celowniczych** (sight alignment) i **obraz celowniczy** (sight picture).

**Eye relief:** odległość oka od tylnego przyrządu/lunety — dla M24 to zwykle **2–3 cale**. Musi być stała strzał po strzale (ta sama pozycja głowy = ten sam stock weld), inaczej zmienia się wyrównanie przyrządów.

**Wyrównanie przyrządów (sight alignment)** to najbardziej krytyczny czynnik celowania — błąd rośnie proporcjonalnie do odległości. Z przyrządami mechanicznymi: środkowanie muszki w aperturze szczerbinki. Z lunetą: krzyż wyśrodkowany w pełnym polu widzenia, pionowa kreska idealnie pionowo (brak przechyłu).

**Obraz celowniczy (sight picture)** to relacja muszki/krzyża, pełnego pola widzenia i celu. Cztery sposoby trzymania (hold):
- **Center hold** — muszka na POI; najlepszy do walki, najbardziej naturalny.
- **6 o'clock hold** — cel „siedzi" na muszce; ryzyko podbicia muszki w cel (strzał za wysoko).
- **Line-of-white hold** — pasek kontrastu widoczny między celem a muszką; pozwala widzieć cały cel.
- **Reference point hold** — celowanie w punkt odniesienia wskazany przez obserwatora, gdy cel niewidoczny; najmniej dokładny z przyrządami mechanicznymi.

**Błąd wyrównania przyrządów** przemieszcza pocisk w kierunku przeciwnym do błędu (kątowe przesunięcie LOS względem osi lufy, mierzone w MOA) i rośnie z dystansem. **Błąd obrazu celowniczego** to zwykłe złe wycelowanie — nie tworzy przesunięcia kątowego, więc błąd jest taki sam niezależnie od odległości (efekt „obszaru chwiania" — wobble area).

**Oko dominujące:** test — trzymając palec 15–20 cm przed oczami, zamykać na przemian oczy; oko, przy którym palec „nie przeskakuje", jest dominujące. Przy braku konfliktu najlepiej celować obydwoma oczami otwartymi (relaks, szybsze wykrywanie celów, lepsza percepcja peryferyjna).

**Przewagi lunety optycznej:** bardzo precyzyjne celowanie w słabo widoczne/zamaskowane cele, szybkie celowanie (krzyż i cel w tej samej płaszczyźnie ogniskowej), skuteczny ogień przy słabym oświetleniu. Wada: powiększa też błędy trzymania broni.

**Cieniowanie (shadowing):** złe ustawienie oka względem osi optycznej lunety tworzy półksiężycowate cienie na krawędziach pola widzenia — pocisk trafia po stronie przeciwnej do cienia. Powodem jest zwykle złe ułożenie głowy na kolbie (można pomóc sobie tymczasową nakładką na policzek).

**Punkt celowania (POA) — zasady taktyczne:** dla dystansu 300–600 m najlepszy POA to trójkąt między nasadą szyi a brodawkami (maksymalizuje trafienie organów/naczyń życiowych); alternatywnie linia środkowa poniżej pasa (skuteczna też przeciw kamizelkom kuloodpornym, które zwykle chronią górną klatkę piersiową). Dla dystansów poniżej 300 m — trafienie w pień mózgu (punkt na linii nosa i obu kanałów usznych) daje natychmiastowe obezwładnienie (przydatne np. w sytuacjach zakładniczych).`,
      figures: [
        {
          id: "fig3-14",
          src: "/images/ch03/fig3-14.png",
          caption: "Figure 3-14. Proper Sight Alignment With the M24 Sniper Weapon Iron Sight System (oryginał z FM 3-05.222).",
        },
        {
          id: "fig3-16",
          src: "/images/ch03/fig3-16.png",
          caption: "Figure 3-16. Correlation of Sight Picture Using Telescopic Sights (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "breath-trigger",
      title: "Kontrola oddechu i pociąg spustu",
      page: "3-28",
      body: `**Kontrola oddechu:** ruch klatki piersiowej przy oddychaniu przesuwa broń w pionie. Cykl oddechowy trwa **4–5 sekund**, a naturalna pauza między wdechem a wydechem — **2–3 sekundy**, którą można bezpiecznie wydłużyć do **8–10 sekund** (maksymalnie 12–15 s bez wysiłku). Procedura: wdech, normalny wydech, zatrzymanie w naturalnej pauzie oddechowej i oddanie strzału. Zbyt długa pauza powoduje niedotlenienie, mimowolne ruchy przepony i pogorszenie ostrości wzroku.

**Kontrola spustu** to spowodowanie wystrzału w momencie najlepszego obrazu celowniczego, bez poruszenia bronią. Palec umieszcza się nisko na spuście (maksymalna przewaga mechaniczna), pociąga prosto do tyłu, bez dotykania łoża („światło" między palcem a łożem). Większość chybień wynika z **szarpnięcia spustu** (jerking) lub **odruchu na odrzut** (flinching).

**Dwie metody pociągu spustu:**
- **Płynny ruch/stały nacisk** — po wybraniu luzu jednym płynnym ruchem, gdy obraz celowniczy się ustabilizuje; do celów stacjonarnych ze stabilnej pozycji.
- **Przerywany pociąg** — nacisk rośnie, gdy obraz celowniczy jest dobry lub się poprawia, utrzymywany na stałym poziomie gdy się pogarsza; do pozycji stojącej i mniej stabilnych.

Kontrola spustu to najważniejszy, a zarazem najtrudniejszy do opanowania fundament strzelectwa — z czasem, dzięki suchemu treningowi (dry fire), staje się reakcją odruchową niewymagającą świadomego wysiłku.`,
    },
    {
      id: "integrated-act",
      title: "Zintegrowany akt oddania strzału",
      page: "3-31",
      body: `Cel: **jeden strzał — jeden cel trafiony**. Zintegrowany akt dzieli się na cztery fazy.

**1. Faza przygotowania:** kondycja mentalna zespołu, kompletność i sprawność sprzętu (czysta, naoliwiona broń, prawidłowo dokręcona i wyzerowana luneta, dane w dzienniku strzeleckim), analiza warunków pogodowych.

**2. Faza przed strzałem:** wybór pozycji zgodnej z celem misji, zdjęcie osłon lunety i sprawdzenie pola ostrzału, kontrola linii strzału pod kątem przeszkód, suchy trening/sprawdzenie naturalnego POA, kontrola amunicji i załadowanie magazynka, zgłoszenie gotowości obserwatorowi.

**3. Faza strzału — akronim BRASS:**
- **B**reathe (oddech) — wdech/wydech do naturalnej pauzy, kontrola stock weld i eye relief.
- **R**elax (rozluźnienie) — rozluźnienie mięśni przy zachowaniu kontroli nad bronią.
- **A**im (celowanie) — przy dobrym naturalnym POA broń sama celuje w cel podczas pauzy oddechowej.
- **S**lack (luz spustu) — wybranie pierwszego stopnia spustu (nie dotyczy M24 w standardowej konfiguracji).
- **S**queeze (ściśnięcie) — płynny nacisk prosto do tyłu, dopóki obraz celowniczy jest zadowalający.

**4. Faza po strzale:** follow-through, obserwacja rejonu celu (potwierdzenie trafienia, reakcja wroga), dokładne zawołanie strzału.

**Follow-through** to dalsze stosowanie fundamentów tuż po i podczas wystrzału: utrzymanie stock weld, palec na spuście do końca ruchu, patrzenie przez przyrządy, skupienie na muszce/krzyżu, rozluźnione mięśnie, brak reakcji na odrzut/huk, zwolnienie spustu dopiero po ustaniu odrzutu.

**Zawołanie strzału (calling the shot)** to przewidzenie miejsca trafienia na podstawie położenia muszki/krzyża w momencie wystrzału (final focus point). Z przyrządami mechanicznymi ostatnie skupienie wzroku jest na górnej krawędzi muszki; z lunetą — na krzyżu (przy prawidłowo wyeliminowanej paralaksie). Bez umiejętności trafnego wołania strzałów nie da się skutecznie wyzerować broni.`,
    },
    {
      id: "detection-correction",
      title: "Wykrywanie i korekta błędów",
      page: "3-34",
      body: `Procedura korekty błędów: **wyizolować błąd → udowodnić snajperowi, że go popełnia → przekonać go, że własnym wysiłkiem i koncentracją może go skorygować.**

**Analiza celu/grupy strzałów:** kształt, rozrzut i wielkość grupy wskazują na rodzaj błędu (rzadko pojedyncza przyczyna) — trener uwzględnia możliwości snajpera, broni i amunicji.

**Obserwacja:** gdy brak wskazówek co do błędu, instruktor najpierw sprawdza pozycję i kontrolę oddechu, potem najczęstsze błędy — antycypację strzału i złą kontrolę spustu.

**Odpytywanie:** jeśli obserwacja nie wystarcza, instruktor pyta snajpera o przebieg procedury (pozycja, celowanie, oddech, spust, follow-through) i prowadzi go przez pełną listę kontrolną:

1. Ustaw przyrządy celownicze.
2. Zbuduj pozycję.
3. Wyrównaj przyrządy.
4. Sprawdź naturalny POA.
5. Skoryguj naturalny POA.
6. Kontroluj oddech.
7. Uzyskaj obraz celowniczy.
8. Skup wzrok na muszce.
9. Kontroluj spust.
10. Wykonaj follow-through.
11. Zawołaj strzał.

**Ćwiczenia treningowe wspomagające detekcję błędów:** ćwiczenie spustu, ćwiczenie z krążkiem metalowym, ćwiczenie „ball and dummy" (losowy pusty nabój), strzelanie do tarczy bez oznaczeń, przyrząd celowniczy M2, karabinki pneumatyczne.`,
    },
    {
      id: "application-fire",
      title: "Zastosowanie ognia i MOA",
      page: "3-37",
      body: `**Minuta kątowa (MOA)** to 1/60 stopnia — na 100 jardach odpowiada **1,0472 cala**, a na 100 metrach **2,9 cm**. Dla uproszczenia obliczeń w terenie snajperzy przyjmują **1 MOA ≈ 1 cal na 100 jardów ≈ 3 cm na 100 m** (błąd tylko 0,5 cala/1 cm na 1000 jardów/m).

| Dystans | 1 MOA (system angielski) | 1 MOA (system metryczny) |
|---|---|---|
| 100 jardów / 100 m | 1 cal | 3 cm |
| 300 jardów / 300 m | 3 cale | 9 cm |
| 600 jardów / 600 m | 6 cali | 18 cm |
| 1000 jardów / 1000 m | 10 cali | 30 cm |

**Wzory poprawek celownika:**

System angielski: *Minuty = Błąd (cale) ÷ Odległość (setki jardów)*

System metryczny: *Minuty = [Błąd (cm) ÷ Odległość (setki metrów)] ÷ 3*

**Konwersja mil → MOA:** *1 mil = 3,439 MOA* (zaokrąglane do **3,5** w terenie). Przykład: trafienie 2 mile w prawo od POA → poprawka = 3,5 × 2 = **7 minut**.

Tabela mil-do-cali (wybrane wartości): 200 m → 8 cali na 1 mil; 400 m → 15,75 cala; 600 m → 24 cale; 800 m → 31,5 cala; 1000 m → 39 cali (pełna tabela w oryginale obejmuje przyrosty co 100 m).`,
    },
    {
      id: "ballistics",
      title: "Balistyka",
      page: "3-40",
      body: `Balistyka dzieli się na trzy obszary: **wewnętrzną** (od zapłonu spłonki do opuszczenia lufy), **zewnętrzną** (lot od wylotu lufy do celu) i **końcową/terminalną** (efekt trafienia — zależny od prędkości szczątkowej, miejsca trafienia i konstrukcji pocisku).

**Kluczowa terminologia:**

| Termin | Znaczenie |
|---|---|
| Muzzle velocity (V0) | Prędkość pocisku opuszczającego lufę (fps) |
| Line of sight (LOS) | Linia od oka przez przyrządy do POA |
| Line of departure | Linia wyznaczona przez oś lufy (tor bez grawitacji) |
| Trajectory | Rzeczywisty tor lotu pocisku |
| Midrange trajectory | Najwyższy punkt toru w połowie drogi do celu — kluczowy przy strzelaniu pod przeszkodą |
| Maximum ordinate | Najwyższy punkt wzniesienia pocisku |
| Bullet drop | Spadek pocisku względem linii wylotu |
| Time of flight | Czas lotu pocisku do celu |
| Retained velocity | Prędkość pocisku w momencie trafienia celu |

**Tor lotu (trajectory):** po opuszczeniu lufy pocisk natychmiast zaczyna opadać pod wpływem grawitacji i oporu powietrza. Kąt, pod jakim lufa musi być uniesiona, by trafić cel, to **kąt wylotu (angle of departure)** — zależy od prędkości początkowej, oporu powietrza, grawitacji i rotacji pocisku. Cięższy pocisk ma niższą prędkość początkową i bardziej stromy tor początkowy, ale zachowuje energię na dłuższym dystansie i jest mniej znoszony wiatrem; lżejszy pocisk ma płaski tor początkowy, ale traci energię i jest bardziej podatny na wiatr.

**Rotacja pocisku** (nadawana przez gwint lufy) powoduje niewielki dryf w kierunku obrotu (zwykle w prawo), zauważalny dopiero powyżej 1000 jardów.

**Grupa strzałów (shot group):** przy wielu strzałach w jednakowych warunkach pociski grupują się wokół środka trafienia (center of impact), tworząc elipsę/koło, którego rozmiar rośnie z dystansem. Paradoks snajperki: przy tym samym błędzie oszacowania wiatru/zera, przeciętny strzelec ma nieco większą szansę trafienia celu na nieznanym dystansie niż bardzo dobry strzelec — bo jego rozrzut przypadkowo "pokrywa" cel, podczas gdy precyzyjna, ale źle skorygowana grupa dobrego strzelca całkowicie chybia. Im lepszy strzelec, tym ważniejsza dokładność szacowania odległości, wiatru i utrzymania zera.

**Czynniki wpływające na tor lotu:**
- **Grawitacja** — stała, wymaga korekty elewacji lub przewyższenia (holdover).
- **Opór powietrza (drag)** — zależny od gęstości powietrza:
  - *Temperatura:* wzrost o 20°F przy zero ustawionym na 60°F podnosi trafienie o ok. 1 minutę (dla amunicji 7,62 mm).
  - *Wysokość/ciśnienie:* rzadsze powietrze na wysokości = mniejszy opór = wyższe trafienie. Np. broń wyzerowana na poziomie morza, strzelająca na 700 m na wysokości 5000 stóp, trafi **1,6 minuty wyżej**.
  - *Wilgotność:* wzrost wilgotności → wzrost trafienia (i odwrotnie); reguła: 20% zmiany wilgotności ≈ 1 minuta.
  - *Współczynnik balistyczny pocisku (BC):* idealny pocisk = 1,00; pociski match ok. 0,50–0,60; M118 (173 gr) = **0,515**.

Przykładowe dane amunicji: M193 (55 gr) BC 0,260, V0 3200 fps; M180 (147 gr) BC 0,400, V0 2808 fps; **M118 (173 gr) BC 0,515, V0 2610 fps**; M852 (168 gr) BC 0,475, V0 2675 fps.

*Dodatek H zawiera pełną tabelę balistyczną.*`,
    },
    {
      id: "data-book",
      title: "Dziennik strzelecki snajpera",
      page: "3-48",
      body: `Dziennik strzelecki (sniper data book) to zbiór kart danych rejestrujących wyniki strzelania i wszystkie czynniki wpływające na strzał — w tym warunki pogodowe, a nawet samopoczucie snajpera danego dnia. Jedną z najważniejszych informacji jest **zero zimnej lufy (cold barrel zero)** — wynik pierwszego strzału z zimnej broni (testowany na 200 m), ponieważ rozgrzana lufa może grupować strzały 1–2 minuty wyżej lub niżej.

**Faza I — przed strzałem:** odległość, numery seryjne broni i lunety, data, typ i partia amunicji, światło, miraż, temperatura, godzina, kierunek światła (strzałka), kierunek i prędkość wiatru.

**Faza II — podczas strzału:** ustawienie elewacji i korekta, ustawienie windażu i korekta, numer strzału, zastosowany wiatr, zawołanie strzału (call), zaznaczenie trafienia na sylwetce tarczy.

**Faza III — po strzale:** uwagi o broni/warunkach/samopoczuciu, skorygowane zero bezwietrzne (elewacja + windaż w minutach/klikach), dodatkowe uwagi o sprzęcie i warunkach.

**Analiza:** porównanie ustawień celownika z poprzednimi sesjami (regularna potrzeba korekty = możliwa potrzeba przesunięcia skali), porównanie amunicji wg numeru partii, analiza rozrzutu grup (ciasna grupa = łatwa do wycentrowania, rozrzucona = problem do zdiagnozowania), zapisanie poprawek. Zgodność zawołanych i rzeczywistych trafień potwierdza poprawność zera.`,
    },
    {
      id: "zeroing",
      title: "Zerowanie karabinu",
      page: "3-51",
      body: `**Zero** to takie wyrównanie przyrządów celowniczych z osią lufy, by pocisk trafiał w POA. Z lunetą optyczną wystarczy wyzerować elewację na **300 m** (windaż na **100 m**) i potwierdzić na dalszych dystansach — filozofia „jeden strzał, jedno trafienie" nie zakłada drugiej szansy.

**Przyrządy mechaniczne M24:** muszka z wymiennymi wkładkami (post zalecany), szczerbinka typu Palma z regulacją co **1/4 MOA**. Zasada: *push left, pull right* (dokręcanie windażu w prawo przesuwa trafienie w prawo); elewacja w górę = trafienie wyżej. 12 podziałek na obrót pokrętła = 3 MOA; całkowity zakres elewacji 60 MOA, windażu 36 MOA.

**Procedura zerowania na przyrządach mechanicznych:** strzelanie 5-strzałowymi seriami co 100 m (od 100 do 900 m) z pozycji prone supported, korekta szczerbinki aż środek grupy pokryje się z punktem celowania. Elewację zeruje się na 200 m, windaż na 100 m (eliminacja wpływu wiatru).

**Zerowanie lunety M3A:** elewacja co **1 MOA/klik**, windaż co **1/2 MOA/klik**, pokrętło elewacji oznaczone co 100 m (do 500 m) i co 50 m (500–1000 m). Procedura: zamontować lunetę → cel na 200 m (elewacja) / 100 m (windaż) → pozycja prone supported → ustawić ostrość siatki i paralaksę → boresight → pojedynczy strzał i pomiar odchylenia → korekta klikami → serie 5-strzałowe aż środek grupy pokryje POA → wyzerować skale.

**Zerowanie NVD (AN/PVS-2, AN/PVS-4):** analogicznie, z tarczą stalową (iskra przy trafieniu) i pozycją wspartą workami z piaskiem; każdy klik AN/PVS-2 przesuwa trafienie o **2 cale na 100 m**.

**Okresowa kontrola zera** wymagana po demontażu/czyszczeniu, zmianie partii amunicji, dużych zmianach pogody. Zero musi ustawić sam użytkownik broni (różnice w stock weld, eye relief, pozycji i kontroli spustu między snajperami).

**Zerowanie polowe (field-expedient):** obserwator z lornetką/lunetą 45–60 cm nad osią lufy obserwuje **ślad pocisku (trace)** — falę uderzeniową widoczną jako smuga (znika ok. 5 cali nad punktem trafienia na 300 m, ok. 25 cali na 500 m). Jeśli brak śladu i trafienia, można ostrzelać cztery rogi tarczy, by zlokalizować chociaż jedno trafienie jako punkt odniesienia.

**Zero 25-metrowe:** ustawić lunetę na 300 m (elewacja) i zero windażu, strzelać na 25 jardów, regulować aż trafienia będą 1 cal powyżej POA — potem zawsze potwierdzić na dystansie rzeczywistym.`,
    },
    {
      id: "environmental",
      title: "Wpływ warunków środowiskowych",
      page: "3-59",
      body: `Wiatr, miraż, światło, temperatura i wilgotność — dla dobrze wyszkolonego snajpera to główne źródło błędu trafienia. *(Podane tu reguły dotyczą pocisku 7,62 mm 168–175 gr przy ok. 2600 fps — dla innych kalibrów trzeba wyznaczyć własne stałe.)*

**Klasyfikacja wiatru — system zegarowy:** snajper w centrum tarczy zegara, cel na godzinie 12.
- **Pełna wartość (full value)** — wiatr z 3 lub 9 — pełny wpływ na pocisk.
- **Połowiczna wartość (half value)** — wiatr z 1, 5, 7, 11 (dokładnie połowa); z 2, 4, 8, 10 — wartość **86%**.
- **Brak wartości (no value)** — wiatr z 6 lub 12 — minimalny wpływ na bliskich dystansach, ale odczuwalny powyżej 600 m (efekt „fishtail", częste poprawki).

Dokładne mnożniki pośrednich kątów: 90°=1,0; 75°=0,96; 60°=0,86; 45°=0,70; 30°=0,50; 15°=0,25.

**Szacowanie prędkości wiatru:** flaga (kąt między flagą a masztem ÷ 4 = prędkość w mph, dla flag bawełnianych, nie nylonowych); upuszczony skrawek papieru/trawy (kąt między ciałem a ręką wskazującą miejsce upadku ÷ 4); orientacyjnie: 0–3 mph — ledwo wyczuwalny (widoczny w mirażu), 3–5 — czuć na twarzy, trawa się rusza, 5–8 — liście w ciągłym ruchu, 8–12 — unosi kurz i papier, 12–15 — chwieją się drzewa.

**Miraż:** odbicie ciepła przez warstwy powietrza o różnej temperaturze, obserwowane przez lunetę na dystansie średnim (midrange). Miraż „wrzący" (boiling, ruch pionowy bez bocznego) oznacza wiatr wiejący prosto w lunetę/od lunety lub chwilowy zanik wiatru — nie należy wtedy strzelać z ustawieniem „0 wiatru". Miraż znika przy wietrze powyżej **15 mph**; zmiany do ok. **12 mph** można nim wiarygodnie odczytać.

**Wzór na poprawkę wiatru (rule of thumb):**

\`\`\`
Minuty (pełna wartość) = [Odległość (setki m) × Prędkość wiatru (mph)] ÷ GV
\`\`\`

Stała GV (given variable) dla M80 Ball zależy od dystansu (100–500 m: 15; 600 m: 14; 700–800 m: 13; 900 m: 12; 1000 m: 11). **Dla M118, M118LR i M852: GV = 10 na każdym dystansie.**

Przykład: cel na 700 m, wiatr 10 mph → (7 × 10) ÷ 10 = **7 MOA** (dla wiatru pełnej wartości; dla połówkowej: 3,5 MOA).

**Światło** nie wpływa na tor lotu pocisku, ale wpływa na percepcję celu — snajper zwykle strzela wyżej w pochmurny dzień, niżej w jasny, słoneczny.`,
      figures: [
        {
          id: "fig3-31",
          src: "/images/ch03/fig3-31.png",
          caption: "Figure 3-31. Using the Clock System Method to Classify the Wind (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "slope-holdoff",
      title: "Strzelanie na nachyleniu i przewyższenie (hold-off)",
      page: "3-66",
      body: `**Strzelanie pod kątem (slope firing):** w terenie górskim/miejskim, jeśli sniper nie skoryguje ustawień, trafienie wypadnie powyżej POA — im bardziej stromy kąt, tym mocniejszy efekt (tzw. **slope dope**). Zasada praktyczna: znaleźć współczynnik korekcyjny dla danego kąta i pomnożyć przez szacowaną odległość, by uzyskać "efektywny" dystans do ustawienia na celowniku.

Przykład: odległość szacowana 500 m, kąt 35° → współczynnik 0,82 → ustawić celownik na **410 m** (500 × 0,82).

**Hold-off** to przesunięcie POA (zamiast regulacji celownika) w celu uzyskania pożądanego POI — stosowane, gdy brak czasu na zmianę ustawień (np. wiele celów na różnych dystansach). Windaż niemal zawsze koryguje się właśnie przewyższeniem/hold-off, nie zmianą ustawień.

**Elewacja (hold-off w pionie):** przy celu dalszym niż ustawiony zasięg — pocisk trafi niżej (trzeba celować wyżej); przy celu bliższym — trafi wyżej (celować niżej). Przykład: celownik ustawiony na 500 m, cel na 600 m → hold-off **25 cali powyżej** środka masy celu; cel na 400 m → **15 cali poniżej**.

Kropki mil-dot lunety M3A służą jako punkty odniesienia dla hold-off. Przy zerze na 500 m orientacyjne punkty trzymania: 100 i 400 m — pas/talia; 200 i 300 m — pachwina; 500 m — klatka piersiowa; 600 m — czubek głowy.

**Windaż (hold-off w poziomie):** odstęp między kropkami mil-dot lunety M3A = **3,375 MOA**. Wzór: *Hold-off w milach = MOA (ze wzoru na wiatr) ÷ 3,5*. Przykład: cel na 400 jardów, wiatr z godziny 3, 8 mph → MOA = (4×8)/10 = 3,2 → hold-off = 3,2/3,5 ≈ **0,9 mila** (ok. 1 mil w prawo, celując pod wiatr).`,
    },
    {
      id: "moving-snap-targets",
      title: "Cele ruchome i cele typu snap",
      page: "3-72",
      body: `**Wyprzedzenie (lead)** to odległość, o jaką krzyż wyprzedza ruch celu — analogicznie do rozgrywającego rzucającego piłkę przed biegnącego odbiorcę. Cztery czynniki określające wyprzedzenie:

1. **Prędkość celu** — biegnący wymaga większego wyprzedzenia niż idący; wiatr z kierunkiem ruchu celu odejmuje się od wyprzedzenia, pod wiatr — dodaje.
2. **Kąt ruchu celu** — szacowany po widoczności sylwetki: widoczna jedna ręka i bok = ruch pod ~90° = **pełne wyprzedzenie**; jedna ręka i 2/3 przodu/tyłu = ~45° = **połowiczne wyprzedzenie**; obie ręce i cały przód/tył widoczne = ruch wprost do/od strzelca = **brak wyprzedzenia**.
3. **Odległość do celu** — im dalej, tym dłuższy czas lotu pocisku, tym większe wyprzedzenie.
4. **Wiatr** — zasada „against add, with subtract" (pod wiatr dodaj, z wiatrem odejmij).

Klasyfikacja tempa: idący **2 mph**, szybko idący **3,5 mph**, biegnący **5 mph**. Orientacyjne wyprzedzenie w mil na 300 m: idący 1 1/8, szybko idący 1 3/4, biegnący 2 1/4. Cele ruchome zwykle angażuje się tylko do **400 jardów** — dalej wymagane wyprzedzenie jest zbyt duże, a szansa trafienia zbyt niska.

**Techniki angażowania celów ruchomych:**
- **Tracking (śledzenie)** — utrzymywanie punktu celowania przed celem, ruch bronią i ciałem wraz z celem; preferowana technika po opanowaniu podstaw.
- **Trapping/ambushing (zasadzka)** — punkt celowania ustawiony na trasie celu, strzał gdy cel go osiąga; broń i ciało pozostają nieruchome.
- **Tracking and holding** — dla celów poruszających się nieregularnie: śledzenie, a strzał dopiero gdy cel się zatrzyma.
- **Snapshot** — strzał w chwili krótkiej ekspozycji celu w przewidywalnym miejscu.

**Częste błędy:** patrzenie na cel zamiast na punkt wyprzedzenia; szarpanie/odruch w momencie "teraz muszę strzelić"; pośpiech powodujący pominięcie poprawki na wiatr.

**Cele typu snap** (krótka ekspozycja, częste w środowisku miejskim/kontrsnajperskim) wymagają bardzo szybkiego, ale wciąż kontrolowanego pociągu spustu. Technika **quick-kill** (szybkie oddanie strzału z bliska, lufa skierowana tam, gdzie patrzy snajper, bez celowania klasycznego przez przyrządy) przydaje się przy przypadkowym spotkaniu z przeciwnikiem — wymaga treningu, to nie "strzelanie na oślep".`,
    },
    {
      id: "special-conditions",
      title: "Warunki specjalne: przeszkody, zimna lufa, ograniczona widoczność, NBC",
      page: "3-77",
      body: `**Strzelanie przez szkło:** nieprzewidywalne — testy US Army wykazały tylko 2 trafienia na 14 strzałów przez różne typy szkła z 1 jarda w cel 100 jardów dalej. Snajper nie powinien strzelać przez szkło blisko swojej pozycji — lepiej otworzyć okno lub zlecić komuś jego rozbicie. Testy USMC: fragmenty szkła zawsze rozpryskują się prostopadle do szyby; rdzeń pocisku M118 zaczyna „kotłować się" (tumbling) ok. 2 stóp od miejsca uderzenia w szkło; odłamki laminowanego szkła bezpiecznego mogą ranić w promieniu do 1 stopy od POI.

**Penetracja M118 Special Ball (testy na 800 m):** pełna penetracja 13 warstw kevlaru balistycznego (odpowiednik kamizelki osobistej) w 10/10 strzałach; penetracja blachy stalowej 10-gauge (3,42 mm) w 16 z 20 strzałów (4 nietrafienia miały niewystarczającą energię końcową mimo przebicia płyty).

**Zero zimnej lufy (cold bore zero):** snajper rzadko dostaje drugi strzał, dlatego musi być pewny na **98%**, że pierwszy strzał trafi. Wymaga prowadzenia szczegółowego dziennika z danymi zimnej lufy w różnych warunkach klimatycznych i na różnych dystansach — komora i lufa muszą być całkowicie suche, bez smarów. Przed misją snajper zwykle "zanieczyszcza" lufę 5 strzałami, by ominąć problem tzw. cold bore shot.

**Ograniczona widoczność:** standardowy noktowizor to AN/PVS-10 (lub PVS-4 zamontowany na M4/M16 jako rozwiązanie zastępcze, stale zamontowany, by uniknąć problemów z zerem). Przy słabej widoczności siatka lunety zanika — snajper powinien używać całego pola widzenia jako punktu odniesienia, nie wytężać wzroku na siatkę. M24 ma tłumik błysku wylotowego; snajperzy **nie powinni** stosować dodatkowych "flash hiderów" — zwiększają sygnaturę huku, zmieniają harmoniki lufy i szkodzą celności.

**Strzelanie w warunkach NBC (MOPP):** maska ochronna utrudnia eye relief i stock weld (nie wolno przerwać uszczelnienia maski); rękawice ograniczają czucie nacisku na spust (trening z rękawicami, spust wyregulowany tak, by wyczuć nacisk bez przypadkowego wystrzału); broń bywa przechylana przy oparciu o policzek maski — trzeba utrzymać pion wg krzyża lunety; brak mikrofonu w masce utrudnia komunikację zespołu (głośniejsza mowa, sygnały dotykowe/ręczne). Dwójnóg Harris ułatwia utrzymanie stabilnej pozycji przy przechylonej głowie.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaki jest wymagany procent trafień pierwszym strzałem na celach stacjonarnych do 600 m?",
      options: ["70%", "80%", "90%", "100%"],
      correctIndex: 2,
      explanation: "Standard minimalny to 90% pierwszych trafień na celach stacjonarnych do 600 m.",
    },
    {
      id: "q2",
      question: "Które trzy elementy tworzą dobrą pozycję strzelecką?",
      options: [
        "Siła mięśni, szybkość, refleks",
        "Oparcie na kościach, rozluźnienie mięśniowe, naturalny punkt celowania",
        "Dwójnóg, pas nośny, worek z piaskiem",
        "Maskowanie, cisza, cierpliwość",
      ],
      correctIndex: 1,
      explanation: "Trzy elementy dobrej pozycji to bone support, muscular relaxation i natural point of aim.",
    },
    {
      id: "q3",
      question: "Gdzie powinien znajdować się obserwator względem strzelającego snajpera (praworęcznego)?",
      options: [
        "Bezpośrednio za plecami",
        "Na godzinie 4-5 od strony strzelającego barku",
        "Na godzinie 9",
        "Nie ma to znaczenia"
      ],
      correctIndex: 1,
      explanation: "Pozycja 4-5 (7-8 dla leworęcznych) od strony strzelającego barku, blisko ale bez dotykania, ułatwia śledzenie śladu pocisku.",
    },
    {
      id: "q4",
      question: "Co oznacza akronim BRASS w fazie oddania strzału?",
      options: [
        "Breathe, Relax, Aim, Slack, Squeeze",
        "Build, Range, Aim, Shoot, Set",
        "Breathe, Ready, Aim, Sight, Shoot",
        "Balance, Relax, Aim, Steady, Shoot",
      ],
      correctIndex: 0,
      explanation: "BRASS = Breathe, Relax, Aim, Slack, Squeeze — kolejne kroki fazy strzału.",
    },
    {
      id: "q5",
      question: "Ile wynosi 1 MOA w przybliżeniu na 100 metrach?",
      options: ["1 cm", "3 cm", "10 cm", "30 cm"],
      correctIndex: 1,
      explanation: "Dla uproszczenia snajperzy przyjmują 1 MOA ≈ 3 cm na 100 metrów.",
    },
    {
      id: "q6",
      question: "Ile wynosi współczynnik konwersji 1 mila na MOA używany w terenie?",
      options: ["1,5 MOA", "2 MOA", "3,5 MOA", "5 MOA"],
      correctIndex: 2,
      explanation: "1 mil = 3,439 MOA, zaokrąglane w terenie do 3,5 MOA.",
    },
    {
      id: "q7",
      question: "Jaki jest współczynnik balistyczny (BC) amunicji M118 (173 gr)?",
      options: ["0,260", "0,400", "0,515", "1,00"],
      correctIndex: 2,
      explanation: "M118 173-grainowy pocisk match ma współczynnik balistyczny 0,515.",
    },
    {
      id: "q8",
      question: "Na jakich dystansach zeruje się elewację i windaż lunety M3A na karabinie M24?",
      options: [
        "Elewacja 100 m, windaż 200 m",
        "Elewacja 200 m, windaż 100 m",
        "Elewacja 300 m, windaż 300 m",
        "Elewacja 500 m, windaż 500 m",
      ],
      correctIndex: 1,
      explanation: "Elewację zeruje się na 200 m (dokładność), windaż na 100 m (eliminacja wpływu wiatru).",
    },
    {
      id: "q9",
      question: "Wiatr z której godziny na tarczy zegara ma pełną wartość (full value)?",
      options: ["12 i 6", "3 i 9", "1 i 11", "2 i 10"],
      correctIndex: 1,
      explanation: "Wiatr z godziny 3 lub 9 ma pełny wpływ na lot pocisku (full value).",
    },
    {
      id: "q10",
      question: "Jaka jest wartość GV (given variable) we wzorze na poprawkę wiatru dla amunicji M118, M118LR i M852?",
      options: ["10 na każdym dystansie", "15 do 500 m, potem maleje", "Zależy tylko od prędkości wiatru", "20 na każdym dystansie"],
      correctIndex: 0,
      explanation: "Dla M118, M118LR i M852 GV wynosi stałe 10 niezależnie od dystansu (w przeciwieństwie do M80 Ball, gdzie GV maleje z dystansem).",
    },
    {
      id: "q11",
      question: "Przy jakiej prędkości wiatru miraż praktycznie znika i nie można go już odczytać?",
      options: ["Powyżej 5 mph", "Powyżej 8 mph", "Powyżej 15 mph", "Powyżej 30 mph"],
      correctIndex: 2,
      explanation: "Miraż znika przy prędkości wiatru powyżej 15 mph; zmiany do ok. 12 mph można nim wiarygodnie odczytać.",
    },
    {
      id: "q12",
      question: "Ile wynosi odstęp między kropkami mil-dot na siatce lunety M3A wyrażony w MOA?",
      options: ["1/2 MOA", "3/4 MOA", "3,375 MOA", "5 MOA"],
      correctIndex: 2,
      explanation: "Odstęp między kropkami mil-dot lunety M3A wynosi 3,375 MOA, wykorzystywany do hold-off na wiatr.",
    },
    {
      id: "q13",
      question: "Jaka technika angażowania celu ruchomego polega na ustawieniu punktu celowania na trasie celu i oddaniu strzału, gdy cel go osiągnie (broń pozostaje nieruchoma)?",
      options: ["Tracking", "Trapping/ambushing", "Tracking and holding", "Quick-kill"],
      correctIndex: 1,
      explanation: "Trapping (ambushing) polega na ustawieniu nieruchomego punktu celowania na trasie ruchu celu.",
    },
    {
      id: "q14",
      question: "Na jaki procent pewności trafienia pierwszym strzałem musi liczyć snajper, biorąc pod uwagę, że rzadko dostaje drugą szansę?",
      options: ["80%", "90%", "95%", "98%"],
      correctIndex: 3,
      explanation: "Snajper musi być pewny na 98%, że trafi pierwszym strzałem — stąd kluczowe znaczenie danych o zerze zimnej lufy.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Bone support", definition: "Oparcie broni na strukturze kostnej, a nie na napięciu mięśniowym — jeden z trzech elementów dobrej pozycji strzeleckiej." },
    { id: "f2", term: "Natural POA", definition: "Naturalny punkt celowania — pozycja, w której broń celuje w cel bez użycia siły mięśni; korygowany przesunięciem całego ciała." },
    { id: "f3", term: "Prone Supported Position", definition: "Pozycja leżąca wsparta (najczęściej na dwójnogu) — najbardziej stabilna z pozycji strzeleckich snajpera." },
    { id: "f4", term: "Stock weld", definition: "Stały punkt kontaktu policzka z kolbą, zapewniający powtarzalny eye relief strzał po strzale." },
    { id: "f5", term: "Sight alignment", definition: "Wyrównanie przyrządów celowniczych (muszka-szczerbinka lub krzyż-pole widzenia) — najbardziej krytyczny czynnik celowania." },
    { id: "f6", term: "Sight picture", definition: "Relacja przyrządów celowniczych i celu widziana przez strzelca — błąd nie zależy od dystansu (w przeciwieństwie do błędu wyrównania)." },
    { id: "f7", term: "BRASS", definition: "Breathe, Relax, Aim, Slack, Squeeze — akronim opisujący fazę oddania strzału w zintegrowanym akcie strzelania." },
    { id: "f8", term: "Calling the shot", definition: "Umiejętność przewidzenia miejsca trafienia na podstawie położenia przyrządów w momencie wystrzału (final focus point)." },
    { id: "f9", term: "MOA", definition: "Minute of Angle — 1/60 stopnia; ok. 1 cal na 100 jardów lub 3 cm na 100 m; podstawowa jednostka poprawek celownika." },
    { id: "f10", term: "Mil-relation", definition: "Konwersja: 1 mil = 3,439 MOA (zaokrąglane do 3,5 w terenie) — używana do przeliczania odczytów mil-dot na poprawki." },
    { id: "f11", term: "Ballistic coefficient (BC)", definition: "Współczynnik balistyczny pocisku opisujący jego efektywność aerodynamiczną; M118 (173 gr) ma BC 0,515." },
    { id: "f12", term: "Cold bore zero", definition: "Zero pierwszego strzału z zimnej lufy — kluczowa dana w dzienniku strzeleckim, bo rozgrzana lufa grupuje inaczej." },
    { id: "f13", term: "Sniper data book", definition: "Dziennik strzelecki z kartami danych (przed/podczas/po strzale) rejestrującymi warunki i wyniki każdej sesji strzeleckiej." },
    { id: "f14", term: "Clock system (wiatr)", definition: "Metoda klasyfikacji wiatru wg kierunku na tarczy zegara: pełna wartość (3/9), połowiczna (1,5,7,11), brak wartości (6/12)." },
    { id: "f15", term: "Given variable (GV)", definition: "Stała we wzorze na poprawkę wiatru, zależna od amunicji i dystansu; dla M118/M118LR/M852 wynosi stałe 10." },
    { id: "f16", term: "Boiling mirage", definition: "Miraż „wrzący” — ruch pionowy bez bocznego, oznacza wiatr wiejący wprost w/od lunety lub chwilowy zanik wiatru." },
    { id: "f17", term: "Slope dope", definition: "Wielkość korekty elewacji stosowana przy strzelaniu pod kątem (w górę/w dół), by skompensować pozorne podniesienie trajektorii." },
    { id: "f18", term: "Hold-off", definition: "Przesunięcie punktu celowania (zamiast regulacji celownika) w celu skompensowania odległości innej niż ustawiona lub wiatru." },
    { id: "f19", term: "Lead (wyprzedzenie)", definition: "Odległość, o jaką punkt celowania wyprzedza ruch celu — zależna od prędkości celu, kąta ruchu, dystansu i wiatru." },
    { id: "f20", term: "Trapping/ambushing", definition: "Technika angażowania celu ruchomego: nieruchomy punkt celowania na trasie ruchu, strzał gdy cel go osiągnie." },
    { id: "f21", term: "Quick-kill technique", definition: "Szybkie oddanie strzału z bliska bez klasycznego celowania przez przyrządy, przydatne przy przypadkowym starciu z wrogiem." },
    { id: "f22", term: "Danger space", definition: "Odcinek toru lotu pocisku, w którym pocisk nie wznosi się/nie opada poniżej wysokości celu — istotny dla strzelania na nieznanych dystansach." },
  ],
};
