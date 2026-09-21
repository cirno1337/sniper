import type { Chapter } from "../types/content";

export const ch04: Chapter = {
  id: "ch04",
  kind: "chapter",
  number: "4",
  title: "Umiejętności polowe (Field Skills)",
  summary:
    "Misja snajpera to precyzyjne rażenie wybranych celów z dużego dystansu. To, jak dobrze ją wykona, zależy od znajomości i stosowania technik polowych: kamuflażu, ruchu, tropienia, obserwacji, szacowania odległości, budowy stanowisk oraz dokumentowania obserwacji. Od tych umiejętności zależy przeżycie snajpera na polu walki.",
  sections: [
    {
      id: "camouflage",
      title: "Kamuflaż",
      page: "4-1",
      body: `Kamuflaż to jedna z podstawowych broni wojny — dla zespołu snajperskiego może oznaczać różnicę między życiem a śmiercią. Musi towarzyszyć snajperowi od wyjścia na misję aż do powrotu.

**Zasady podstawowe:** wykorzystywać dostępne naturalne maskowanie (drzewa, krzewy, trawa, cienie), zmieniać kształt/cień/fakturę/kolor przedmiotów, maskować przed obserwacją naziemną i lotniczą. Przy przygotowywaniu stanowiska: używać tylko tyle materiału, ile trzeba (nadmiar demaskuje), pozyskiwać materiał z szerokiego obszaru (nie ogałacać jednego miejsca), a nadmiar ziemi z wykopu maskować liśćmi/trawą lub usuwać do strumienia/wąwozu — świeżo wykopana ziemia zdradza zajęte stanowisko.

**Dopasowanie do terenu:** śnieg — pełny biały kombinezon z szarym cieniowaniem (lub białe spodnie + zielono-brązowa góra, gdy krzewy nieprzysypane); pustynia — barwy piaskowo-brązowe, bez wyraźnej faktury; miasto (z wojskami regularnymi) — umundurowanie jak reszta jednostki, w pozycji strzeleckiej barwy dopasowane do gruzu; dżungla — naturalne listowie + lekki kombinezon (ciężki powoduje nadmierną utratę płynów).

**Trzy techniki maskowania (configuration):**
- **Hiding (ukrywanie się)** — całkowite skrycie ciała (gęsta roślinność, płytki rów) — nieprzydatne na stanowisku ogniowym, bo uniemożliwia obserwację celu.
- **Blending (wtapianie się)** — kamuflaż tak doskonały, że snajper może być obserwowany wprost i pozostać niewidoczny; tego uczy ghillie suit.
- **Deceiving (zwodzenie)** — wprowadzanie wroga w błąd co do lokalizacji/zamiarów (podrzucone przedmioty-przynęty, przecięty kabel łączności i zasadzka na naprawę, manekiny wabiące ogień snajpera przeciwnika).

**Wskaźniki demaskujące (target indicators)** — cztery kategorie: **węchowe** (jedzenie, papierosy, mydło — eliminować higieną i grzebaniem odpadów), **dotykowe** (drut, stanowisko — głównie w nocy), **słuchowe** (dźwięk sprzętu/mowy — dyscyplina hałasu), **wzrokowe** (najważniejsze — główny powód wykrycia snajpera). Przyczyny "dlaczego coś widać": *siting* (coś nie pasuje do otoczenia), *shape* (rozpoznawalne kształty), *shadows* (cienie), *silhouettes* (sylwetki na tle jasnego), *surface* (odbicia światła od błyszczących powierzchni), *spacing* (naturalny brak regularnych odstępów), *color* (kontrast koloru), *movement* (najczęstsza przyczyna wykrycia — nawet powolny ruch może zdradzić pozycję).

**Typy i materiały:** naturalny (preferowany, ale więdnie) i sztuczny. Wzory: **striping** (pasy — gęsty las), **blotching** (plamy — gęste listowie), **combination** (najbardziej uniwersalny). Wojskowe kredki maskujące: loam/light green (jasna karnacja), sand/light green (ciemna karnacja), loam/white (śnieg). Materiały naturalne/polowe: spalony korek, węgiel drzewny, sadza, błoto (uwaga na pasożyty!) — nigdy farb/barwników trwałych ani oleju/smaru (silny zapach).

**Ghillie suit** — nazwa pochodzi od szkockiego/irlandzkiego określenia przewodnika myśliwskiego (XIX w., szkoccy strażnicy łowieccy tropiący kłusowników). Budowa: mundur na lewą stronę (kieszenie chronione od zużycia), wzmocnienie płótnem kolan/łokci/krocza, naszyty lub oddzielny **welon (veil)** maskujący lunetę i głowę, zbierający wyrzucane łuski. Proporcja: **60–70% roślinności naturalnej do 30–40% materiału sztucznego** — nadmiar materiału tworzy nowy, rozpoznawalny kontur i przegrzewa snajpera.

**Maskowanie sprzętu:** karabin można nosić w **drag bag** (pokrowiec z brezentu pokryty garniszem) — ale broń w torbie nie jest gotowa do strzału; optykę maskuje się siatką/nylonem i przesłoną zmieniającą okrągły kontur obiektywu; plecak ALICE maskuje się jak kombinezon (choć lepiej go unikać z ghillie suit).

**Malowanie twarzy:** kombinacja pasów i plam, ciemniejsze czoło/kości policzkowe/nos/broda, jaśniejsze okolice pod oczami/nosem/brodą — zawsze zakryte też dłonie, przedramiona, szyja i uszy (także za uszami). Broń można pomalować zmywalną farbą (np. Bow Flage) — nie wolno dopuścić do kontaktu z lufą, komorą, czołem zamka, spustem ani pokrętłami lunety.`,
      figures: [
        {
          id: "fig4-1",
          src: "/images/ch04/fig4-1.jpg",
          caption: "Figure 4-1. Construction of the Ghillie Suit (oryginał z FM 3-05.222).",
        },
        {
          id: "web-camo",
          src: "/images/ch04/web-camo-faceprint-compass.jpg",
          caption:
            "Zdjęcie poglądowe: żołnierz z pasowym malowaniem twarzy nawigujący kompasem (źródło: Wikimedia Commons, public domain, US Marine Corps) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "cover-concealment",
      title: "Ukrycie (cover) i maskowanie terenowe (concealment)",
      page: "4-10",
      body: `**Ukrycie (cover)** to naturalna lub sztuczna ochrona przed ogniem broni przeciwnika (wąwozy, zagłębienia, skarpy odwrotne; stanowiska, okopy, mury). Nawet 6-calowe zagłębienie terenu, dobrze wykorzystane, może uratować życie pod ostrzałem.

**Maskowanie (concealment)** to naturalna lub sztuczna ochrona przed **obserwacją** wroga — nie chroni przed ogniem. Zespół nigdy nie powinien mylić bycia zamaskowanym z byciem bezpiecznym od ostrzału.

**Zasady maskowania:**
- Unikać zbędnego ruchu — nieruchomy snajper bywa niewidoczny, ten sam snajper w ruchu łatwo się zdradza.
- Wykorzystywać całe dostępne maskowanie tła — nigdy nie strzelać z krawędzi linii lasu, tylko z jej wnętrza (w cieniu koron drzew).
- Obserwować nisko — z kucnięcia, przysiadu lub leżenia.
- Nie odsłaniać niczego błyszczącego — odkrywać lunetę tylko na czas namierzania i redukcji celu.
- Unikać "skylining" — sylwetka na tle nieba jest widoczna z ogromnej odległości, także nocą.
- Zmieniać charakterystyczne kontury sprzętu i ciała ghillie suit lub narzutą z nieregularnym garniszem.
- Zachowywać ciszę — wyciszyć sprzęt przed misją.`,
    },
    {
      id: "movement",
      title: "Ruch indywidualny i zespołowy",
      page: "4-12",
      body: `Sukces misji często zależy od zdolności do zbliżenia się do celu, obserwacji lub zaangażowania go i wycofania się bez wykrycia — a to wymaga cichego poruszania się w każdym terenie.

**Przygotowanie:** szczegółowe studium map/zdjęć lotniczych, wywiady z osobami znającymi teren, dobór kamuflażu do terenu, wyciszenie i wytłumienie błyszczącego sprzętu, tylko niezbędne wyposażenie.

**Wybór trasy:** unikać znanych pozycji wroga, przeszkód, terenu otwartego i obserwowanego; nigdy nie korzystać ze ścieżek; wykorzystywać trudny teren (bagna, gęsty las).

**Zasady ruchu:** zakładać stałą obserwację wroga; poruszać się "stopa po stopie, cal po calu"; nie poruszać koron drzew/krzewów przez otarcie; planować trasę odcinkami; często się zatrzymywać, patrzeć, nasłuchiwać; wykorzystywać zakłócenia (strzały, eksplozje, hałas silników, wiatr) do ruchu.

**Rodzaje ruchu:**

| Technika | Zastosowanie |
|---|---|
| **Marsz (walking)** | Najszybszy, gdy zagrożenie niskie; kucnięty, krok czubek-pięta, broń wzdłuż ciała |
| **Czworakowanie (hands and knees crawl)** | Wystarczające krycie lub wymagana cisza; broń w jednej ręce |
| **Wysokie czołganie (high crawl)** | Więcej krycia lub potrzebna szybkość; ciężar na przedramionach i podudziach |
| **Średnie czołganie (medium crawl)** | Niskie krycie, mniej męczące; jedna noga ugięta do odpychania (bez zmiany nogi) — to standardowy niski czołg armii |
| **Niskie czołganie (low crawl)** | Blisko wroga, rzadka roślinność, wejście/wyjście ze stanowiska; całe ciało płasko, ruch ramionami i palcami stóp |

Przy skręcaniu w czołganiu: przesunąć górną część ciała maksymalnie w kierunku skrętu, przesunąć przeciwną nogę, dosunąć drugą — ruch obrotowy (pivot).

**Skradanie się (stalking)** to sztuka niezauważonego dotarcia na stanowisko gwarantujące zabójstwo pierwszym strzałem i wycofania się. Rekonesans przed skradaniem obejmuje: lokalizację celu, ukrycie i maskowanie, najlepsze stanowisko ogniowe, najlepszą linię natarcia, przeszkody, punkty obserwacyjne, znane/podejrzewane pozycje wroga, sposób poruszania się i trasę wycofania.

**Ruch nocny** jest wolniejszy i bardziej rozważny — większe poleganie na dotyku i słuchu; głównymi różnicami dnia i nocy są: częściowa ochrona ciemności (fałszywe poczucie bezpieczeństwa!), użycie NVD, większe znaczenie słuchu, mniejsze znaczenie krycia względem tła (unikać grzbietów/linii nieba), trudniejsze utrzymanie kierunku.

**Urządzenia wykrywające i przeciwdziałanie:**
- **NVD (pasywne/aktywne):** poruszać się bardzo wolno i nisko, wykorzystywać cień/mgłę/deszcz.
- **Czujniki (sejsmiczne, magnetyczne, ruchu, IR, termiczne):** pokonywać najwolniejszym, bezbłędnym ruchem, najlepiej gdy inne czynniki (artyleria, samoloty, deszcz, wiatr) je aktywują w tle.
- **Radary naziemne:** poruszać się w defiladzie, poza linią wzroku, wolniej niż próg detekcji; ruch prostopadle do radaru ułatwia wykrycie.
- **Obrazowanie termiczne:** koc termiczny (Mylar) wewnątrz kombinezonu odbija ciepło ciała do wewnątrz — działa najlepiej w ciepłym klimacie; ryzyko przegrzania (heat casualty).

**Ruch zespołowy:** snajper zwykle niesie M24 (często w worku na plecach), obserwator M4/M16/M203 — obaj z bronią krótką. Z elementem ochrony: dowodzi go dowódca ochrony, zespół wygląda jak integralna część elementu, nosi ten samo umundurowanie, chowa unikalny sprzęt (optykę, ghillie), a po dotarciu do rejonu oddziela się i działa samodzielnie.

**Szyk ruchu snajperskiego (jedyny stosowany formacja):** obserwator jako czoło (sektor obserwacji 9–3), snajper za nim (sektor 3–9, zachodzące na siebie); stały kontakt wzrokowy; odstęp **maks. 2 m**; przekraczanie obszarów niebezpiecznych razem, po przystanku ubezpieczającym.

**Natychmiastowe działania (immediate action drills):** kontakt wzrokowy bez wykrycia → zamrożenie i ukrycie, bez inicjowania kontaktu; zasadzka → szybki ogień obserwatora + natychmiastowe zerwanie kontaktu; ogień pośredni → ruch wg metody zegara, kierunek + odległość; atak lotniczy → najlepsze ukrycie, ruch między nalotami, nigdy nie angażować samolotu. Rozdzielony zespół łączy się w ORP (objective rally point) lub kolejnym wyznaczonym punkcie.

**Nawigacja:** studiowanie map/zdjęć/szkiców, terrain countdown (liczenie kolejnych cech terenu), trasa zapasowa, GPS, cieki wodne, wzniesienia, linie kolejowe/energetyczne jako punkty orientacyjne.`,
      figures: [
        {
          id: "fig4-6",
          src: "/images/ch04/fig4-6.jpg",
          caption: "Figure 4-6. Low Crawl (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "tracking",
      title: "Tropienie i przeciwdziałanie tropieniu",
      page: "4-25",
      body: `Tropienie to sztuka podążania za człowiekiem lub zwierzęciem po śladach — niemal nie sposób poruszać się w terenie, nie zostawiając śladów, ale przeszkolony tropiciel wychwytuje nawet najdrobniejsze.

**Rodzaje śladów:** naziemne (poniżej kolan — duże: 10+ osób, małe: 1-9 osób) i wysokie/top signs (powyżej kolan); tymczasowe (zanikają, np. odcisk stopy) i trwałe (tygodnie lub na zawsze, np. złamana gałąź).

**Sześć wskaźników tropienia:**

| Wskaźnik | Opis |
|---|---|
| **Przemieszczenie (displacement)** | Odcisk stopy, przygnieciona trawa, ślad po ciężkim ładunku, przewrócone kamienie/patyki, ugięta roślinność |
| **Plamy (stains)** | Krew (kroplowa = tułów, rozbryzgana = kończyna, tętnicza = rytmicznie, żylna = stale, płucna = różowa/pienista, głowowa = gęsta, brzuszna = z zapachem), mocz/kał |
| **Wietrzenie (weathering)** | Zmiana koloru/wyglądu śladu z czasem (świeża krew jasnoczerwona → rubinowa → brunatna skorupa; krawędzie odcisku suche i spękane ≈ 1 godzina) |
| **Śmieci (litter)** | Opakowania, puszki, niedopałki — wskaźnik słabo wyszkolonej/zdyscyplinowanej jednostki |
| **Kamuflaż** | Próby zmylenia tropiciela (chodzenie tyłem, zacieranie śladów, ruch po skałach/w strumieniu) — świadczy o wyszkolonym przeciwniku |
| **Wywiad natychmiastowego użytku** | Złożenie wszystkich wskaźników w spójny obraz sytuacji na potrzeby dowódcy |

**Analiza odcisków stóp:** głębokie odciski + długi krok = szybki ruch; głęboki czubek > pięta = bieganie; krótki, nieregularny krok z głębokim czubkiem i "heel push" = chodzenie tyłem (próba zmylenia); kobiety chodzą "gołębio", z krótszym krokiem niż mężczyźni. Liczbę osób w kolumnie można oszacować metodą długości kroku (key print) lub **metodą 36-calowego pudełka** (licząc odciski na przekroju szerokości szlaku, dzieląc przez dwa) — do ok. 18 osób.

**Zespoły pies-tropiciel:** trzy typy psów — wzrokowe (finał tropienia), przeszukujące (zapach unoszący się w powietrzu), tropiące (na smyczy, zapach naziemny). Zapach naziemny utrzymuje się **ponad 48 godzin** w dobrych warunkach (rekord: pies gończy — 7 dni). Silny wiatr utrudnia tropienie po zapachu, ale ułatwia namierzenie źródła punktowego (np. stanowiska) — pies może wyczuć człowieka z ok. **50 m** i grupę/stanowisko z ok. **200 m** pod wiatr, ale przeoczyć źródło 1 m dalej pod wiatr. Pies pracuje efektywnie **20–30 minut**, potem wymaga **10–20 minut** odpoczynku — maks. 5-6 cykli na dobę.

**Przeciwdziałanie psom tropiącym:** trzymać się z dala od rejonu celu, nigdy nie zakładać stanowiska na skraju najbliższego krycia, minimalizować ślad (twardy, suchy grunt lub potok), zakopywać/zabierać odchody, nigdy nie palić, ruszać się początkowo pod kątem 90-170° od celu, unikać gęstego listowia (zatrzymuje zapach), przechodzić przez nasłonecznione, przewiewne otwarte tereny, nie uciekać (wzmacnia zapach) — zamiast tego szukać dobrego miejsca na zasadzkę typu fishhook.

**Kontrtropienie — techniki zwodzenia:**

| Technika | Zasada |
|---|---|
| **Backward Walking** | Chodzenie tyłem po własnych śladach, zejście na twardy grunt — działa tylko na tropicieli niewyszkolonych |
| **Big Tree** | Zmiana kierunku o 90° za dużym drzewem (≥12 cali), które ekranuje nowy ślad |
| **Cut the Corner** | Fałszywy ślad wzdłuż drogi sugerujący "skrót", potem powrót i cichy ruch w innym kierunku |
| **Slip the Stream** | Wejście do strumienia pod kątem 45°, ruch pod prąd (co znosi ślad w dół rzeki), wyjście w dół nurtu |
| **Arctic Circle** | Duży krąg śladów na śniegu, zejście z trasy w jednym punkcie, zasypanie własnych śladów powrotnych |
| **Fishhook** | Zawrócenie na własny ślad do pozycji obserwacyjnej/zasadzki na tropiciela — jedyny pewny sposób na profesjonalnego tropiciela |

*Uwaga: nie istnieje sposób na całkowite ukrycie śladu przed profesjonalnym tropicielem — cel technik to spowolnienie go i zdobycie przewagi czasowej lub okazji do zasadzki.*`,
      figures: [
        {
          id: "fig4-9",
          src: "/images/ch04/fig4-9.png",
          caption: "Figure 4-9. Running (analiza odcisków stóp, oryginał z FM 3-05.222).",
        },
        {
          id: "fig4-24",
          src: "/images/ch04/fig4-24.png",
          caption: "Figure 4-24. The Fishhook Deception Technique (oryginał z FM 3-05.222).",
        },
        {
          id: "web-dog",
          src: "/images/ch04/web-tracking-dog-team.jpg",
          caption:
            "Zdjęcie poglądowe: patrol z psem tropiącym (źródło: Wikimedia Commons, CC BY 2.0, USMC History Division, 1962) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "observation",
      title: "Obserwacja i wykrywanie celów",
      page: "4-43",
      body: `**Poszukiwanie pobieżne (hasty search, ~10 s):** zaraz po zajęciu stanowiska, szybkie spojrzenia na konkretne punkty (nie ciągłe przesuwanie wzroku — utrudnia wykrycie ruchu), od najbliższej okolicy na zewnątrz.

**Poszukiwanie szczegółowe (detailed search):** metoda zachodzących na siebie pasów (overlapping strip method) — łuk 180° w głąb 50 m, pasy zachodzące na siebie min. 10 m, od flanki najbliższej zagrożeniu. Cykl pobieżne+szczegółowe powtarza się co **15–20 minut**; zespół rotuje obserwację co **30 minut**.

**Dlaczego coś widać:** kształt (shape), cień (shadow), sylwetka (silhouette), powierzchnia/połysk (surface), rozstaw (spacing — natura nie tworzy regularnych odstępów), umiejscowienie nie na miejscu (siting), kolor (color), **ruch — najczęstsza przyczyna wykrycia**.

**Cztery elementy obserwacji:** świadomość (awareness), zrozumienie (understanding, z wyszkolenia i doświadczenia), rejestrowanie (recording — dziennik, szkic, pamięć), reakcja (response).

**Wskazywanie celu — trzy metody:** bezpośrednia (direct — oś/lewo/prawo/ćwierć/pół/trzy czwarte od osi łuku ostrzału), punktu odniesienia (reference-point — np. "300-kopiec, lekko w prawo, krzak"), zegarowa punktu odniesienia (clock-ray — np. "300-kopiec, prawo, 4. godzina, krzak"). Przykładowy dialog: obserwator podaje odległość/kierunek/opis, snajper potwierdza identyfikację i wymiar celu w mil, obserwator podaje ustawienia i poprawkę na wiatr ("HOLD OFF RIGHT") — strzał powinien paść **1–2 sekundy** po zgłoszeniu wiatru.

**Selekcja celu — kryteria:** pewność tożsamości celu, wpływ eliminacji na zdolność bojową wroga, reakcja wroga na strzał, wpływ na całość misji, prawdopodobieństwo trafienia pierwszym strzałem (odległość, wiatr, widoczność, ekspozycja, ruch, teren). Czysty strzał z bliska jest bardziej demoralizujący niż niecelny strzał z 600 m — snajper wyszkolony jest do skradania się na 200 m od wyszkolonego obserwatora.

**Priorytetowe cele osobowe:** **snajperzy przeciwnika (cel #1)**, zespoły pies-tropiciel (celować w przewodnika, chyba że pies atakuje na odgłos strzału), zwiadowcy, oficerowie (wojskowi i polityczni), podoficerowie, dowódcy/kierowcy pojazdów, personel łączności, obsługa uzbrojenia, optyka na pojazdach, sprzęt radarowy/łączności, systemy naprowadzania uzbrojenia.

**Fizjologia widzenia:** czopki (cone cells) — widzenie dzienne, kolor, ostry kontrast, wymagają dużo światła; pręciki (rod cells) — widzenie nocne i peryferyjne, czarno-białe, doskonałe do wykrywania ruchu.

**Widzenie w ograniczonej widoczności:** adaptacja oka do ciemności ok. **30 minut**; **widzenie pozaosiowe (off-center vision)** — nigdy nie patrzeć wprost na obiekt nocą (znika); skanowanie z krótkimi przystankami wzroku. Czynniki pogarszające widzenie nocne: brak wit. A, przeziębienie/zmęczenie/alkohol/palenie, ekspozycja na jasne światło (upośledza widzenie na **10–30 minut**).

**Obserwacja słuchem:** ucho bliżej źródła dźwięku słyszy głośniej i wcześniej — pozwala określić kierunek; metoda "crack-thump" (trzask-łoskot) lokalizuje strzelca: **trzask (crack)** to fala uderzeniowa naddźwiękowego pocisku (myląca — uderza prostopadle do toru lotu, wskazuje fałszywy kierunek 90° od prawdziwego), **łoskot (thump)** to huk wystrzału z rzeczywistej pozycji wroga. Dźwięk rozchodzi się z prędkością **340 m/s** (przyjmuje się **350 m/s**); **0,5 s ≈ 300 m**, **1 s ≈ 600 m**. Metoda flash-bang (błysk-huk): ok. **350 m/s**, czyli 1000 m na 3 sekundy lub 1 mila na 5 sekund.

**Zasady użycia urządzeń obserwacyjnych:** obserwacja dzienna do **30 minut + 15 minut przerwy**; z NVD początkowo **10 minut + 15 minut przerwy**, stopniowo wydłużane.`,
    },
    {
      id: "range-estimation",
      title: "Szacowanie odległości",
      page: "4-57",
      body: `Zdolność dokładnego określenia odległości to kluczowa umiejętność snajpera (patrz też Dodatek J).

**Czynniki wpływające na percepcję odległości:** cel o regularnym kształcie wydaje się bliższy niż nieregularny; kontrastujący z tłem — bliższy; częściowo zasłonięty — dalszy. Teren gładki (piasek, woda, śnieg) → niedoszacowanie; patrzenie "w dół" (z góry, przez zagłębienie częściowo widoczne, wzdłuż drogi/torów) → niedoszacowanie; podążanie wzrokiem po konturze terenu, patrzenie "pod górę", wąskie pole widzenia (kręte uliczki) → przeszacowanie. Pełne światło słoneczne → cel bliższy niż o zmierzchu/we mgle; słońce za obserwatorem → cel bliższy; słońce za celem → cel dalszy.

**Mierzenie celu w mil — metoda pionowa:** wysokość celu (np. 1 m głowa-krocze lub cała sylwetka) zmierzona w mil-dotach; wzór: *(wzrost człowieka [cale] × 25,4) ÷ mile = odległość w metrach*. Przyjmowany standardowy wzrost człowieka: **69 cali**. Błąd 3 cali w oszacowaniu wzrostu przy odczycie 4 mil daje błąd **19 m**.

**Metoda pozioma:** szerokość celu w barkach (**19 cali**) — dokładna do ok. **350 m**, przydatna w mieście; służy do podwójnego sprawdzenia pomiaru pionowego (2 mile pionowo głowa-krocze = 1 mil poziomo bark-bark).

**Wzór mil-relation (formuła robaka/"worm formula"):**

\`Odległość do celu = (rozmiar obiektu w metrach × 1000) ÷ rozmiar w mil\`

Przykład: ciężarówka 4 m długości = 5 mil w lornetce → (4×1000)/5 = **800 m**. Znane wymiary referencyjne: głowa-krocze człowieka = **1 m** (39,4 cala); głowa-pas = 30 cali; czołg (grunt-wieża) ≈ 30 cali; pojazd (grunt-błotnik) ≈ 30 cali, (grunt-dach) ≈ 3,5-4 stopy; rama okienna ≈ 60 cali (1,5×2,0 m w Europie). 1 mil = **3,44 MOA** (w terenie zaokrąglane do 3,5), czyli **3,6 cala na 100 jardów**.

**Lornetki wojskowe:** M19/M22 — podziałka co 10 mil (numerowane linie), linie pomocnicze co 2,5 mil (Fig. 4-27).

**Metody szacowania (bez sprzętu):**
- **100-metrowa jednostka miary** — do 500 m liczy się wprost liczbę odcinków 100 m; powyżej 500 m wybiera się punkt w połowie drogi, liczy odcinki do niego i **podwaja**. Teren wznoszący się → przeszacowanie 100 m (celuje się za krótko); opadający → niedoszacowanie.
- **Wygląd obiektów (appearance-of-objects)** — porównanie znanego wyglądu obiektu (np. sylwetki człowieka) na znanych dystansach z obserwowanym.
- **Kombinacja obu metod** — najlepsza w praktyce, gdy warunki ograniczają którąś z osobna.

**Pomiar:** metoda paskowa na mapie (dla dystansów >1000 m) lub liczenie kroków (rzadko stosowana — ryzykowna).

**Metoda nawiasowania (bracketing):** cel "nie bliżej niż X, nie dalej niż Y" → średnia obu wartości. **Metoda połowienia (halving)** — jak 100-metrowa jednostka, dla dystansów >500 m. **Metoda karty ostrzału** — najdokładniejsza, bo bazuje na wcześniej ustalonych odległościach do punktów odniesienia; **punkt zerowania point-blank dla M118 przy zerze 300 m to 375 m** (cele bliżej nie wymagają korekty).

**Prędkość dźwięku:** ok. **340 m/s** (w terenie przyjmuje się **350 m/s**) — licząc sekundy od błysku/wystrzału do usłyszenia dźwięku, mnoży się przez 350.

**Dalmierze laserowe:** wysoka dokładność; AN/GVS-5 **nie jest bezpieczny dla oka** bez żółtego filtra (obserwowanego przez optykę filtrowaną) — filtr czerwony jest bezpieczny dla oka.

**"Cheat book"** snajpera zawiera znane wymiary z rejonu działań (wzrost lokalnej populacji, wymiary pojazdów/broni, szerokość drzwi/okien/ulic) — przeliczone na stałe używane ze wzorem mil-relation.`,
      figures: [
        {
          id: "fig4-27",
          src: "/images/ch04/fig4-27.png",
          caption: "Figure 4-27. The M19 Binocular Reticle Showing the Mil Measurements of the Stadia Lines (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "hides",
      title: "Wybór i przygotowanie stanowisk (hide)",
      page: "4-67",
      body: `**Kryteria wyboru stanowiska:** maksymalne pole ostrzału i obserwacji, maksymalne maskowanie, ukryte drogi dojścia i odwrotu, **co najmniej 300 m** od rejonu celu, przeszkoda naturalna/sztuczna między stanowiskiem a celem. Unikać: szczytów/grzbietów wzniesień, bliskości odosobnionych obiektów, zakrętów/końców dróg-szlaków-cieków, terenu zaludnionego (chyba że misja tego wymaga). Warto rozważać miejsca pozornie nieatrakcyjne: pod powalonymi pniami, tunele przez wzniesienie, bagna, głębokie cienie, wnętrza gruzowisk.

**Typy stanowisk — porównanie:**

| Typ | Czas budowy | Czas zajmowania | Charakterystyka |
|---|---|---|---|
| **Hasty (doraźne)** | Brak | Maks. **8 godzin** | Wykorzystuje istniejące ukrycie; brak swobody ruchu; brak ochrony przed ogniem pośrednim |
| **Expedient (ekspediente)** | 1–3 h | 6–12 h | Wykop chowający ciało poza optyką/bronią/głową; pewna ochrona przed ogniem bezpośrednim |
| **Belly (brzuchowe)** | 4–6 h | 12–48 h | Osłona górna (dach) chroni przed odłamkami; większa swoboda ruchu w zaciemnionej przestrzeni |
| **Semipermanent (na stałe)** | 4–6 h (4 osoby) | 48+ h (rotacja zespołów) | Pełna swoboda ruchu (stać/siedzieć/leżeć); strzelnice (loopholes) jedyny widoczny element |
| **Tree/Stump (drzewo/pień)** | Dłuższy | — | Wymaga sprzętu pionierskiego (topory, łopaty); komfortowe, chroni przed odłamkami |
| **Enlarged Fire Trench** | Krótki | Umiarkowany | Rozbudowane stanowisko strzeleckie; brak osłony górnej |
| **Shell-Hole (lej po pocisku)** | Minimalny wykop | — | Krater dostosowany do pozycji klęczącej/siedzącej/leżącej |

Strzelnice (loopholes) buduje się szerokie od wewnątrz (**10–14 cali**) i zwężające na zewnątrz (**4–8 cali**) — muszą dawać odpowiednie pole ostrzału, ale nie zdradzać pozycji, i muszą dać się zasłonić od środka, gdy nieużywane.

**Konstrukcja stanowiska — kolejne kroki:** ubezpieczenie → zdjęcie wierzchniej warstwy gleby → wykop dołu (odpowiednie usunięcie ziemi, wzmocnienie ścian, strzelnice, oparcie łokci/broni, legowisko, studzienka drenażowa) → osłona górna → wejście/wyjście z drogami ewakuacji → kamuflaż → ciągła inspekcja maskowania.

**Kluczowe zasady budowy:** ochrona czołowa najczęściej z wykopanej ziemi w workach; osłona górna z bali + warstwa przeciwwilgociowa (poncho) + ziemia + kamuflaż (wpuszczona w teren, by nie zdradzić dachu); solidne wejście wytrzymujące ciężar człowieka, zamykane gdy strzelnice otwarte; podejścia maskowane, wchodzenie najlepiej nocą.

**Narzędzia i materiały:** saperki, bagnety, siatki GP, ponczo, worki wodoszczelne, plecaki, łopaty, topory/siekiery, młotki, maczety, dłuta, piły, śrubokręty/kombinerki, worki na śmieci, klej do drewna, gwoździe, siatka kurza/gazety/mąka/woda.

**Rutyna na stanowisku:** stabilna platforma dla broni (broń zostaje na miejscu przy rotacji obserwacji, optyka przechodzi z rąk do rąk), łatwy dostęp do dziennika danych/logu obserwacji/karty ostrzału/radia, zorganizowany system odpoczynku, jedzenia i potrzeb fizjologicznych (najlepiej po ciemku, w zakopywanym dole).`,
      figures: [
        {
          id: "fig4-30",
          src: "/images/ch04/fig4-30.png",
          caption: "Figure 4-30. Overhead and Side View of the Expedient Sniper Hide Site (oryginał z FM 3-05.222).",
        },
        {
          id: "web-hide",
          src: "/images/ch04/web-rock-hide-position.jpg",
          caption:
            "Zdjęcie poglądowe: naturalne, skalne stanowisko obserwacyjne (źródło: Wikimedia Commons, CC BY 2.0) — nie pochodzi z oryginalnego FM 3-05.222.",
        },
      ],
    },
    {
      id: "range-card-log-sketch",
      title: "Karta ostrzału, dziennik obserwacji i szkic wojskowy",
      page: "4-80",
      body: `**Karta ostrzału (range card)** przedstawia rejon celu widziany z góry, z zaznaczonymi odległościami (preprintowane okręgi zasięgu), które można dzielić na sektory liniami przerywanymi. Zawiera: nazwisko snajpera i metodę pomiaru odległości, lewą/prawą granicę zaangażowania, główne cechy terenu/drogi/budowle, ustawienia elewacji i windażu na różnych dystansach, temperaturę i wiatr (skreślane przy zmianie), punkty odniesienia celu (TRP — azymut, odległość, opis). Wszystkie rysunki są z perspektywy "z lotu ptaka".

**Dziennik obserwacji (observation log)** to chronologiczny zapis wszystkich zdarzeń w rejonie działania zespołu (patrz Dodatek K), prowadzony od momentu infiltracji, zawsze w połączeniu ze szkicem wojskowym. Zawiera: współrzędne stanowiska, nazwisko obserwatora, datę/godzinę/widoczność, numer arkusza, numer serii/czas/współrzędne każdego zdarzenia, opis zdarzenia i podjęte działanie.

**Słowa klucze wpisów w dzienniku:**
- **SALUTE** (działania wroga): **S**ize (liczebność), **A**ctivity (działanie), **L**ocation (lokalizacja), **U**nit/Uniform (jednostka/umundurowanie), **T**ime (czas), **E**quipment (wyposażenie).
- **OAKOC** (teren): **O**bservation and fields of fire (obserwacja i pole ostrzału), **A**venues of approach (drogi podejścia), **K**ey terrain (kluczowy teren), **O**bstacles (przeszkody), **C**over and concealment (ukrycie i maskowanie).

**Szkic wojskowy (military sketch)** dokumentuje teren/obiekty niepokazane na mapie. Dwa typy: **szkic drogi/obszaru (road or area sketch)** — panoramiczna reprezentacja rysowana w skali z perspektywy zespołu (zawiera współrzędne, azymut magnetyczny przez środek, nazwę/numer szkicu, skalę, uwagi, datę/godzinę/pogodę); **szkic polowy (field sketch)** — reprezentacja topograficzna z góry, pokazująca odległości i azymuty (może być nakładką na kartę ostrzału).

Rodzaje perspektywy: **panoramiczna** (teren w elewacji, z jednego punktu obserwacji — preferowana, łatwiej łączy się z dziennikiem) i **topograficzna** (z góry, jak mapa — mniej użyteczna razem z dziennikiem).

**Zasady rysowania szkiców:** pracować od całości do szczegółu (najpierw granice i duże obiekty, potem detale); używać uproszczonych kształtów dla powtarzalnych obiektów; rysować w perspektywie z **punktami zbiegu (vanishing points)** — linie poziome zbiegają się na horyzoncie, opadające poniżej, wznoszące powyżej; stosować **delineację** — linie grubsze na pierwszym planie, cieńsze w oddali, lekkie kreskowanie (hatching) dla zalesienia; rzeki/drogi jako zwężające się dwie linie, tory kolejowe z poprzeczkami (odróżnienie od dróg); legenda zawiera tytuł, datę-czas i podpis autora szkicu.`,
      figures: [
        {
          id: "fig4-36",
          src: "/images/ch04/fig4-36.png",
          caption: "Figure 4-36. Sample Range Card (oryginał z FM 3-05.222).",
        },
        {
          id: "fig4-38",
          src: "/images/ch04/fig4-38.png",
          caption: "Figure 4-38. Sample Observation Log (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "kim-games",
      title: "Gry KIM",
      page: "4-91",
      body: `Nazwa gry pochodzi od książki *Kim* Rudyarda Kiplinga — o chłopcu szkolonym do zapamiętywania informacji wywiadowczych w kolonialnych Indiach; umownie rozwijana jako "Keep In Mind" (KIM). Ponieważ wiele sytuacji bojowych oferuje tylko krótki czas obserwacji, snajper musi nauczyć się wyciągać maksimum informacji z krótkiej ekspozycji.

**Cel gier KIM:** trening percepcji i zapamiętywania poprzez przeciążenie umysłu (analogicznie do treningu siłowego przeciążającego mięśnie). Postęp mierzy się skracaniem czasu obserwacji/zapisu i wydłużaniem czasu oczekiwania, a trudność zwiększa się dodawaniem elementów zakłócających — analogicznych do sztuczek iluzjonistów: **misdirection** (odwrócenie uwagi), **disguise** (przebranie), **exchange** (podmiana).

**Gra podstawowa:** instruktor układa (nie w rzędach — utrudnia to zapamiętywanie) **10 przedmiotów** na stole, przykrywa je, odsłania na określony czas, ponownie przykrywa. Po odczekaniu zespół zapisuje obserwacje w standardowych kategoriach: **rozmiar, kształt, kolor, stan, przypuszczalne przeznaczenie**. Zasady: zakaz rozmów, zakaz dotykania przedmiotów, zakaz pisania przed sygnałem.

**Savelli Shuffle** — trening szybkości wzroku i koordynacji wzrokowo-ruchowej: dwie osoby w odległości ok. 5 m, jedna losowo rzuca żółte i czerwone gumowe piłeczki, druga musi łapać żółte lewą ręką, czerwone prawą. Trudność rośnie wraz z szybkością rzutów i odległością.

**Zainteresowanie a uwaga:** zainteresowanie (interest) to zaangażowanie w proces, uwaga (attention) to prosta reakcja na bodziec (np. głośny dźwięk) — sama uwaga bez zainteresowania nie utrzymuje się długo. Podczas długiej, monotonnej obserwacji koncentrację trzeba podtrzymywać zainteresowaniem; zwodzenie na poziomie indywidualnym to w istocie manipulacja zainteresowaniem obserwatora.

*Uwaga: standaryzowane kategorie (rozmiar/kształt/kolor/stan/przeznaczenie) są narzędziem treningowym — nie są przeznaczone do dosłownego stosowania w warunkach bojowych.*`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Jaka jest zalecana proporcja materiału naturalnego do sztucznego przy budowie ghillie suit?",
      options: ["10-20% naturalnego", "60-70% naturalnego do 30-40% sztucznego", "50/50", "100% naturalnego"],
      correctIndex: 1,
      explanation: "Zalecana proporcja to 60-70% roślinności naturalnej do 30-40% materiału sztucznego (garniszu).",
    },
    {
      id: "q2",
      question: "Która z trzech technik maskowania (configuration) polega na tym, by być widocznym wprost, a mimo to niewykrywalnym?",
      options: ["Hiding", "Blending", "Deceiving", "Disguising"],
      correctIndex: 1,
      explanation: "Blending (wtapianie się) to kamuflaż na tyle doskonały, że snajper może być patrzony wprost i pozostać niedostrzeżony — tego uczy ghillie suit.",
    },
    {
      id: "q3",
      question: "Jaka jest najczęstsza przyczyna wykrycia pozycji snajpera przez obserwację?",
      options: ["Kolor", "Kształt", "Ruch", "Cień"],
      correctIndex: 2,
      explanation: "Ruch jest najczęstszym powodem, dla którego pozycja zostaje wykryta — nawet gdy wszystkie inne wskaźniki są nieobecne.",
    },
    {
      id: "q4",
      question: "Jaki jest maksymalny odstęp między członkami zespołu snajperskiego podczas szyku ruchu?",
      options: ["1 m", "2 m", "5 m", "10 m"],
      correctIndex: 1,
      explanation: "Zespół utrzymuje odstęp nie większy niż 2 metry, zachowując przy tym stały kontakt wzrokowy.",
    },
    {
      id: "q5",
      question: "Która technika kontrtropienia polega na zawróceniu na własny ślad i zajęciu pozycji obserwacyjnej lub zasadzki na tropiciela?",
      options: ["Big Tree", "Cut the Corner", "Fishhook", "Arctic Circle"],
      correctIndex: 2,
      explanation: "Fishhook to jedyna technika skuteczna również przeciw profesjonalnemu tropicielowi — zespół zawraca i obserwuje/zasadza się na własnym śladzie.",
    },
    {
      id: "q6",
      question: "Jak długo (orientacyjnie) utrzymuje się naziemny zapach (ground scent) w dobrych warunkach, wykrywalny przez psa tropiącego?",
      options: ["Kilka godzin", "24 godziny", "Ponad 48 godzin", "Zawsze tylko 10 minut"],
      correctIndex: 2,
      explanation: "Zapach naziemny może utrzymywać się ponad 48 godzin w idealnych warunkach; pies gończy wytropił zapach sprzed 7 dni.",
    },
    {
      id: "q7",
      question: "Ile czasu trwa zalecana faza obserwacji szczegółowej metodą zachodzących na siebie pasów, zanim cykl się powtarza?",
      options: ["5 minut", "15-20 minut", "1 godzina", "4 godziny"],
      correctIndex: 1,
      explanation: "Cykl obserwacji pobieżnej i szczegółowej powtarza się co 15-20 minut, zależnie od terenu.",
    },
    {
      id: "q8",
      question: "Który dźwięk w metodzie „crack-thump” faktycznie wskazuje prawdziwą lokalizację strzelca?",
      options: ["Crack (trzask)", "Thump (łoskot)", "Oba jednocześnie", "Żaden — metoda nie działa"],
      correctIndex: 1,
      explanation: "Thump (łoskot wystrzału) pochodzi z rzeczywistej pozycji strzelca; crack myli, bo fala uderzeniowa uderza prostopadle do toru lotu pocisku.",
    },
    {
      id: "q9",
      question: "Jaki jest standardowy wzrost człowieka (w calach) przyjmowany we wzorze na pionowe mierzenie celu w mil?",
      options: ["60 cali", "69 cali", "72 cale", "80 cali"],
      correctIndex: 1,
      explanation: "Standardowy przyjmowany wzrost człowieka to 69 cali (ok. 175 cm), używany w formule mil-relation.",
    },
    {
      id: "q10",
      question: "Do jakiej odległości metoda pozioma (na podstawie szerokości barków 19 cali) jest uznawana za dokładną?",
      options: ["Do 100 m", "Do 350 m", "Do 800 m", "Do 1500 m"],
      correctIndex: 1,
      explanation: "Metoda pozioma jest dokładna do ok. 350 metrów, szczególnie użyteczna w środowisku miejskim.",
    },
    {
      id: "q11",
      question: "Jaki jest punkt zerowania point-blank amunicji M118 przy zerze ustawionym na 300 m?",
      options: ["250 m", "300 m", "375 m", "500 m"],
      correctIndex: 2,
      explanation: "Przy zerze 300 m, punkt zerowania point-blank amunicji M118 wynosi 375 m — cele bliżej nie wymagają korekty.",
    },
    {
      id: "q12",
      question: "Ile minimalnie metrów od rejonu celu powinno znajdować się stanowisko snajperskie (hide), gdy tylko to możliwe?",
      options: ["50 m", "100 m", "300 m", "1000 m"],
      correctIndex: 2,
      explanation: "Stanowisko powinno być zlokalizowane nie bliżej niż 300 metrów od rejonu celu, kiedy tylko jest to możliwe.",
    },
    {
      id: "q13",
      question: "Ile wynosi maksymalny czas zajmowania (occupation time) pozycji typu hasty (doraźnej)?",
      options: ["2 godziny", "8 godzin", "24 godziny", "48 godzin"],
      correctIndex: 1,
      explanation: "Pozycji hasty nie należy zajmować dłużej niż 8 godzin — dłużej powoduje utratę efektywności (skurcze, zmęczenie oczu).",
    },
    {
      id: "q14",
      question: "Co oznacza słowo klucz SALUTE używane przy wpisach o działaniach wroga w dzienniku obserwacji?",
      options: [
        "Size, Activity, Location, Unit/Uniform, Time, Equipment",
        "Sight, Approach, Location, Unit, Terrain, Evaluation",
        "Speed, Altitude, Length, Unit, Type, Elevation",
        "Security, Area, Loophole, Unit, Time, Exit",
      ],
      correctIndex: 0,
      explanation: "SALUTE = Size, Activity, Location, Unit/Uniform, Time, Equipment — standard opisu działań wroga.",
    },
    {
      id: "q15",
      question: "Jaka jest szerokość strzelnicy (loophole) w stanowisku snajperskim od strony zewnętrznej?",
      options: ["1-2 cale", "4-8 cali", "10-14 cali", "20-24 cale"],
      correctIndex: 1,
      explanation: "Strzelnice są szerokie (10-14 cali) od wewnątrz i zwężają się do 4-8 cali na zewnątrz, by nie zdradzać pozycji.",
    },
    {
      id: "q16",
      question: "Skąd pochodzi nazwa gry KIM?",
      options: [
        "Od skrótu Kill In Motion",
        "Od książki Kim Rudyarda Kiplinga",
        "Od nazwiska instruktora SOTIC",
        "Od koreańskiego słowa oznaczającego pamięć",
      ],
      correctIndex: 1,
      explanation: "Nazwa pochodzi od książki Kim Rudyarda Kiplinga, o chłopcu szkolonym do zapamiętywania informacji wywiadowczych.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Ghillie suit", definition: "Kombinezon kamuflażowy pokryty nieregularnym garniszem; nazwa pochodzi od szkockich/irlandzkich przewodników łowieckich (ghillie)." },
    { id: "f2", term: "Blending", definition: "Technika maskowania polegająca na doskonałym wtopieniu się w otoczenie — snajper może być patrzony wprost i pozostać niewidoczny." },
    { id: "f3", term: "Deceiving", definition: "Technika maskowania polegająca na wprowadzeniu wroga w błąd co do lokalizacji lub zamiarów zespołu (np. przynęty, manekiny)." },
    { id: "f4", term: "Drag bag", definition: "Pokrowiec z brezentu pokryty garniszem do maskowanego transportu karabinu SWS — broń w nim nie jest gotowa do strzału." },
    { id: "f5", term: "Low crawl", definition: "Najniższa forma czołgania, stosowana blisko wroga lub przy rzadkiej roślinności — całe ciało płasko na ziemi." },
    { id: "f6", term: "Fishhook", definition: "Technika kontrtropienia: zawrócenie na własny ślad do pozycji obserwacyjnej/zasadzki — jedyna skuteczna przeciw profesjonalnemu tropicielowi." },
    { id: "f7", term: "Displacement (przemieszczenie)", definition: "Jeden z sześciu wskaźników tropienia — ślad powstały, gdy cokolwiek zostaje przesunięte ze swojej pierwotnej pozycji (np. odcisk stopy)." },
    { id: "f8", term: "Tropiciel kombinowany (pies + handler)", definition: "Zespół tropiący snajpera to zawsze człowiek i pies razem — trzeba przechytrzyć oboje, nie tylko psa." },
    { id: "f9", term: "Hasty search", definition: "Pierwsza faza obserwacji stanowiska — ok. 10-sekundowe szybkie spojrzenia na kluczowe punkty, zaraz po zajęciu pozycji." },
    { id: "f10", term: "Overlapping strip method", definition: "Metoda szczegółowego przeszukiwania terenu w zachodzących na siebie pasach głębokości 50 m, z zakładką min. 10 m." },
    { id: "f11", term: "Crack-thump method", definition: "Metoda lokalizacji strzelca na podstawie odstępu czasowego między trzaskiem pocisku (mylącym) a łoskotem wystrzału (prawdziwym kierunkiem)." },
    { id: "f12", term: "Cone cells / rod cells", definition: "Czopki (widzenie dzienne, kolor) i pręciki (widzenie nocne, peryferyjne, ruch) — dwa typy fotoreceptorów siatkówki." },
    { id: "f13", term: "Off-center vision", definition: "Technika widzenia nocnego: nigdy nie patrzeć wprost na obiekt po zmroku, bo wtedy znika z pola widzenia." },
    { id: "f14", term: "Wzór mil-relation", definition: "Odległość do celu = (rozmiar obiektu w metrach × 1000) ÷ rozmiar obiektu w mil — podstawowy wzór szacowania odległości." },
    { id: "f15", term: "100-metrowa jednostka miary", definition: "Metoda szacowania odległości przez wizualizację odcinków 100 m; powyżej 500 m stosuje się punkt połowiczny i podwojenie wyniku." },
    { id: "f16", term: "Bracketing method", definition: "Metoda szacowania odległości: cel „nie bliżej niż X, nie dalej niż Y”, wynik to średnia obu wartości." },
    { id: "f17", term: "Point-blank zero (M118)", definition: "Przy zerze 300 m dla amunicji M118 wynosi 375 m — cele w tym zakresie nie wymagają korekty elewacji." },
    { id: "f18", term: "Hide (stanowisko snajperskie)", definition: "Zamaskowane stanowisko do obserwacji i ognia; typy od hasty (doraźnego) po semipermanent (na stałe), różniące się czasem budowy i zajmowania." },
    { id: "f19", term: "Loophole", definition: "Strzelnica w stanowisku snajperskim — szeroka wewnątrz (10-14 cali), zwężająca się na zewnątrz (4-8 cali)." },
    { id: "f20", term: "SALUTE", definition: "Mnemonik wpisów o działaniach wroga w dzienniku obserwacji: Size, Activity, Location, Unit/Uniform, Time, Equipment." },
    { id: "f21", term: "OAKOC", definition: "Mnemonik analizy terenu w dzienniku obserwacji: Observation and fields of fire, Avenues of approach, Key terrain, Obstacles, Cover and concealment." },
    { id: "f22", term: "Range card (karta ostrzału)", definition: "Rysunek rejonu celu z góry z zaznaczonymi odległościami do punktów odniesienia, ustawieniami celownika i granicami zaangażowania." },
    { id: "f23", term: "Vanishing points", definition: "Punkty zbiegu linii równoległych na horyzoncie, kluczowe przy rysowaniu szkicu wojskowego w perspektywie." },
    { id: "f24", term: "KIM games", definition: "Ćwiczenia percepcji i pamięci (od książki Kim R. Kiplinga) trenujące zapamiętywanie informacji z krótkiej obserwacji." },
  ],
};
