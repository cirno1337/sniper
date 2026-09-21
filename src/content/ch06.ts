import type { Chapter } from "../types/content";

export const ch06: Chapter = {
  id: "ch06",
  kind: "chapter",
  number: "6",
  title: "Działania snajperskie w terenie zurbanizowanym",
  summary:
    "Snajperzy są niezwykle skuteczni w terenie miejskim: precyzyjny ogień dalekiego zasięgu, zaawansowana optyka pozwalająca oszczędzić postronnych i mienie oraz zdolności obserwacyjne dają przewagę wywiadowczą. W środowisku miejskim snajper jest zarówno źródłem strat, jak i bronią psychologiczną budzącą strach.",
  sections: [
    {
      id: "urban-terrain",
      title: "Teren zurbanizowany",
      page: "6-1",
      body: `Teren zurbanizowany składa się głównie z budowli. Budynki zapewniają ukrycie i osłonę, ograniczają pola ognia i obserwacji oraz utrudniają ruch — grubościenne budynki dają doskonałą ochronę przed ostrzałem. Ulice są zwykle kierunkami natarcia, ale zabudowa kanalizuje siły poruszające się nimi. Systemy podziemne (metro, kanały, piwnice, instalacje) są łatwe do przeoczenia, lecz mogą mieć duże znaczenie dla wyniku operacji. W działaniach miejskich zawsze obecni są cywile — troska o ich bezpieczeństwo ogranicza użycie ognia i możliwości manewru.

**Kategorie terenu zurbanizowanego:**
- **Duże miasta** (>100 000 mieszkańców) — tworzą rdzeń rozległych aglomeracji z przedmieściami i mniejszymi miastami.
- **Miasteczka i małe miasta** (3000–100 000) — zwykle wzdłuż głównych szlaków komunikacyjnych i dolin rzecznych.
- **Wsie** (<3000) — zorientowane rolniczo, wśród terenów uprawnych.
- **Obszary pasmowe (strip areas)** — łączą wsie i miasteczka wzdłuż szlaków komunikacyjnych.

**Rodzaje zabudowy w mieście:** obszary przemysłowe/mieszkaniowe rozproszone (1-3-kondygnacyjne fabryki, domy z ogródkami); obrzeża rdzenia (core periphery — wąskie ulice 12-20 m, ceglane/betonowe budynki 2-3 kondygnacje w małych miastach, 5-10 w dużych); rdzenie miast i wysoka zabudowa na obrzeżach (budynki wysokościowe, więcej przestrzeni otwartej); wstęgi handlowe (commercial ribbons — sklepy wzdłuż ulic ≥25 m szerokości, budynki 2-3-kondygnacyjne).

**Charakter walki miejskiej:** obrońca ma zwykle przewagę nad atakującym (silne pozycje vs konieczność eksponowania się). Ograniczone zasięgi LOS i pokawałkowany teren wymagają **3-5 razy większej gęstości wojsk** niż w terenie naturalnym. Gęsta zabudowa degraduje łączność radiową — dobrze zorganizowany obrońca korzysta z łączności przewodowej. Żołnierze doświadczają większego stresu (ciągła walka z bliska, ofiary, niewidoczny wróg). Cele pojawiają się zwykle krótko, na dystansie **≤200 m**. Artyleria ogranicza się zwykle do ognia bezpośredniego, by nie zamienić miasta w gruzy. Jednostki wymagają specjalnego sprzętu (haki, liny, karabińce, materiały budowlane, topory, worki z piaskiem, drabiny).

**Ocena terenu przez snajpera:** obserwacja i pola ognia (nigdy nie wybierać skrajnych budynków miasta — przyjmują największy ostrzał przygotowawczy); drogi dojścia (najlepszy sposób wejścia do budynku to od góry — schody pożarowe, rury spustowe, sąsiednie budynki); kluczowe punkty kontrolne (wejścia, korytarze, klatki schodowe); przeszkody (drzwi, zapory przeciwpożarowe, meble, drut kolczasty wewnątrz budynku); ukrycie i osłona (ceglane ściany z wąskimi oknami dają najlepszy balans — dach chroni słabo, z wyjątkiem parkingów wielopoziomowych); rozkład typów budynków w mieście (budownictwo masowe to ⅔ starego rdzenia; tereny otwarte — parki, boiska — ok. 15% powierzchni miasta, nadające się do operacji aeromobilnych); czynniki środowiskowe (gęstość populacji, media, szkło w oknach, oświetlenie, poziom hałasu — zwykle wysoki w dzień, niski w nocy — co daje okno czasowe do zaangażowania celów).

**Czynniki linii obserwacji (LOS):** szerokość ulic dzieli się na wąskie (7-15 m, np. średniowieczne dzielnice europejskie), średnie (15-25 m) i szerokie (25-50 m). Im węższa ulica, tym trudniej obserwować/strzelać w okna budynku naprzeciwko (trzeba patrzeć wzdłuż elewacji, nie prosto w okno) — to samo ograniczenie dotyczy patrzenia w górę/dół wysokich budynków.

**Źródła informacji:** mapy taktyczne (uzupełnione zdjęciami lotniczymi pionowymi i skośnymi, na bazie których snajper buduje szkice widoku z góry) oraz dane od władz cywilnych/lokalnych sił (mapy wielkoskalowe, schematy kanalizacji/mediów/transportu, wykaz kluczowych budynków i osób, gęstość populacji, zdolności policji, obrony cywilnej i straży pożarnej).`,
    },
    {
      id: "camouflage-movement",
      title: "Kamuflaż, ruch i wejście do budynku",
      page: "6-6",
      body: `**Kamuflaż w terenie miejskim:** stanowisko musi wyglądać jak otoczenie — jeśli budynek jest nieuszkodzony, nie robi się otworów strzelniczych (loopholes), używa się tylko niezbędnych materiałów (nadmiar zdradza pozycję). Snajper sprawdza pozycję z punktu widzenia wroga i regularnie kontroluje, czy kamuflaż wciąż wygląda naturalnie. Nie zdejmuje koszuli — odsłonięta skóra odbija światło.

Kluczowe zasady: wykorzystanie cienia (ostre cienie budynków ułatwiają skryty ruch; firanka lub gaza dodaje ukrycia we wnętrzu pomieszczenia); kolor i tekstura (pasy jutowe/płócienne skuteczniejsze niż roślinność; dominują brąz, beż, czasem szarość — nie zieleń); tłumienie pyłu przy strzale (mokry koc/płótno na stanowiskach broni); tło (unikać sylwetkowania się — neutralna zasłona za plecami). Typowe błędy zdradzające kamuflaż: ślady aktywności, połysk/cienie, nienaturalne kolory/tekstury, dym z wystrzału, nietypowe dźwięki/zapachy, ruch. Zasady dodatkowe: fałszywe stanowiska odwracające uwagę, wzmacnianie stanowisk workami z piaskiem, niezakłócanie naturalnego wyglądu terenu, niewycinanie nadmiaru gruzu dla pola ognia, otwory strzelnicze w niepozornych miejscach.

**Infiltracja i eksfiltracja:** łatwiej infiltrować przedmieścia (zwykle słabiej bronione — pojedyncze stanowiska przeciwpancerne, ubezpieczenie głównych dróg dojścia) niż głębię miasta (tam punkty oporu i odwody). Ruch prowadzi się skrycie, bocznymi ulicami, wykorzystując zaułki i budynki. Ogień moździerzy/artylerii może odwrócić uwagę i zamaskować dźwięk infiltracji — najlepiej przy słabej widoczności i bez cywilów w okolicy. Eksfiltracja zawsze po zmroku, z zachowaniem tej samej skrytości.

**Techniki ruchu:** snajper nie sylwetkuje się, unika terenu otwartego (ulice, alejki, parki), wybiera kolejne stanowisko osłonięte przed ruchem, wykorzystuje budynki/gruz/roślinność/dym, porusza się szybko ale bez wzniecania kurzu/hałasu, nigdy nie maskuje własnego ognia wsparcia. Konkretne techniki: **przekraczanie muru** (szybki przewrót, niska sylwetka); **róg budynku** (najczęstszy błąd to wysunięcie broni poza róg — "flagging"; prawidłowo: leżenie płasko, obserwacja lustrem lub głową tylko na wysokości gruntu); **mijanie okien** (poniżej poziomu okna, przy ścianie); **mijanie okien piwnicznych** (przy ścianie, przeskok bez ekspozycji nóg); **przejścia przez drzwi** (nie używać jako wejścia/wyjścia — jeśli konieczne, przejść szybko, nisko); **ruch wzdłuż ściany budynku** (w cieniu, niska sylwetka, zawsze planować kolejną pozycję, by uniknąć ślepego zaułka); **przekraczanie terenu otwartego** (najkrótszą drogą, z wykorzystaniem zasłony dymnej/ograniczonej widoczności). Zespół nigdy nie przemieszcza się razem przy przejściu między budynkami lub przez teren otwarty.

**Wejście do budynku:** drabiny, rury spustowe, pnącza, śmigłowce, dachy/okna sąsiednich budynków. Techniki wspomagające: podsadzka dwuosobowa (wspierana/niewspierana, z uniesionymi piętami), podsadzka jednoosobowa, wyciąganie dwuosobowe, techniki wspinaczkowe indywidualne; drabiny lub haki z liną węzełkową (wspinaczka po ścianie, przerzut między budynkami, wejście przez okno piętra); **rapelowanie** — zejście z dachu na niższe piętra lub do okna.`,
    },
    {
      id: "urban-support-attack",
      title: "Wsparcie snajpera w operacjach miejskich",
      page: "6-9",
      body: `Snajperowi wyznacza się ogólny obszar (budynek lub grupa budynków), ale to on wybiera najlepsze stanowiska — pokrywające przeszkody, dachy, luki w ogniu ostatecznym (final protective fires) i martwe pole. Powinien myśleć trójwymiarowo i przygotować liczne pozycje zapasowe/dodatkowe.

**Priorytety celów snajpera:** snajperzy wroga, kluczowi dowódcy, dowódcy czołgów, obsługa broni wsparcia ogniowego bezpośredniego, obsługa broni zespołowej, obserwatorzy artylerii, radiotelefoniści, chroniony sprzęt.

**Czynniki wpływające na użycie SWS w mieście:** względne położenie strzelca i celu (obaj mogą być wewnątrz/na zewnątrz budynku, w dowolnej kombinacji); konfiguracja konstrukcyjna budynków (beton, murowana, drewniana — każda daje inny stopień ukrycia); zasięgi i kąty ognia (od <100 m do maks. zasięgu skutecznego SWS; martwe pole z powodu ograniczeń elewacji/depresji; kąty skośne wymagają zwiększonych umiejętności strzeleckich); ograniczenia widoczności (dym, kurz, cienie, gruz — poza standardowymi czynnikami pogodowymi).

**Fazy natarcia na teren zabudowany:**
1. **Faza I** — izolacja obszaru walki poprzez zajęcie terenu dominującego nad drogami dojścia; ogień dalekiego zasięgu na cele okazjonalne.
2. **Faza II** — natarcie do granic zabudowy i zdobycie przyczółka; snajperzy przesuwają się do przodu i zajmują pozycje wyjściowe wspierające kontynuację ataku.
3. **Faza III** — natarcie przez zabudowę wg planu; zespoły działają w każdej strefie działania razem z piechotą (dość daleko, by nie wdać się w walkę bezpośrednią, dość blisko, by razić dalsze zagrożenia) lub niezależnie, szukając celów okazjonalnych, zwłaszcza wrogich snajperów.

**W obronie:** snajperzy zajmują budynki z najlepszymi polami ognia dalekiego zasięgu i pełną obserwacją okrężną. Zadania: ogień kontrsnajperski, cele okazjonalne, blokowanie dróg dojścia, wsparcie ogniowe nad barykadami, obserwacja skrzydeł i tyłów, wsparcie kontrataków, uniemożliwianie obserwacji wrogowi.`,
    },
    {
      id: "internal-security-hostage",
      title: "Operacje bezpieczeństwa wewnętrznego i sytuacje zakładnicze",
      page: "6-11",
      body: `**Miejska wojna partyzancka:** snajper dominuje nad AO poprzez selektywny, celowany ogień na cele zatwierdzone przez lokalnego dowódcę — zwykle gdy cel ma użyć broni przeciw siłom pokojowym lub cywilom. Drugorzędna, niemal równie ważna rola to zbieranie i raportowanie wywiadu. Zadania: angażowanie dysydentów/partyzantów miejskich zaangażowanych w porwania/przetrzymywanie zakładników (za zgodą dowódcy), eliminacja partyzanckich snajperów, skryta obserwacja wybranych obszarów, dokumentowanie podejrzanej aktywności, koordynacja działań innych elementów, ochrona ekip (strażacy, brygady remontowe).

**Ograniczenia specyficzne dla wojny partyzanckiej w mieście** (nieobecne w klasycznej UW): brak linii FEBA i "ziemi niczyjej" — snajper działa w środowisku w pełni wrogim; wróg ukrywa się wśród cywilów (często stosując kod odzieżowy identyfikujący partyzantów — to codzienne PIR); przeciwnik dominuje teren pod względem znajomości i ciągłej obecności — klasyczny stalking i zajęcie stanowiska są w takich warunkach skazane na porażkę; presja prawna/polityczna zastępuje presję bojową; **w klasycznej wojnie snajper zwykle nie potrzebuje zgody na strzał — w miejskiej wojnie partyzanckiej musi ocenić, czy użycie siły jest rozsądne i minimalne w danych okolicznościach.**

**Sytuacje zakładnicze:**
- Nawet dobrze oddany strzał nie zawsze daje natychmiastową inkapacytację — skurcz mięśni terrorysty może pociągnąć za spust mimo śmiertelnego trafienia. Zasadą jest użycie snajpera **dopiero po wyczerpaniu innych środków**.
- **Wymagania celności:** jedynym miejscem gwarantującym natychmiastową śmierć jest trafienie w rdzeń przedłużony (medulla) — leży za oczami, biegnie od płatka ucha do płatka ucha, ma szerokość ok. **2 cali**, mimo że cała głowa ma ok. 7×10 cali. Snajper wizualizuje "kulę 2-calową" (medulla) w środku "kuli 7-calowej" (głowa). Trafienie w serce daje śmierć dopiero po 8-10 sekundach — za wolno w sytuacji zakładniczej.
- Zasada windażu/elewacji: przeciętny snajper **nie powinien podejmować się natychmiast zabójczego strzału w głowę powyżej 200 m** — kombinacja broni i amunicji zwyczajnie na to nie pozwala.
- **Wybór stanowiska:** zasadniczo bez różnic względem innych form walki — decyduje teren i sytuacja. Mimo że snajper to ostateczność, powinien zająć pozycję jak najwcześniej — pozwala to precyzyjnie oszacować odległości, jednoznacznie zidentyfikować zakładników i terrorystów oraz wybrać stanowiska zapasowe. Jest też głównym źródłem HUMINT dla dowództwa.
- **Dowodzenie i łączność:** po decyzji dowódcy o użyciu snajpera, całe C2 przechodzi na dowódcę zespołu snajperskiego — komenda do strzału nigdy nie pochodzi od kogoś spoza łańcucha dowodzenia; o dokładnym momencie decydują wyłącznie snajper i dowódca zespołu. Przy wielu zespołach obowiązują te same ROE, a komunikacja między nimi odbywa się najpewniej przewodowo (pętla telefoniczna TA-312, jak w bateriach artylerii).

**Zasadzka snajperska w mieście:** gdy wywiad wskazuje konkretne miejsce/czas pojawienia się celu, zasadzka bywa lepszą alternatywą niż kordon. Rekonesans bliski jest łatwiejszy (można go zamaskować jako rutynowy patrol) — głównym wyzwaniem jest niepostrzeżone dotarcie zespołu do stanowiska; często stosuje się pozorowaną operację przeszukania (np. wielkości plutonu), podczas której snajperzy zajmują ukrycie i pozostają, gdy reszta sił się wycofuje (szczególnie skuteczne nocą). Zespół musi wytrzymać długi czas w bliskim sąsiedztwie wroga i sympatyków — bezpieczeństwo jest ograniczone, pozycje mają "martwe strefy" i są podatne na atak (zwłaszcza ładunkami wybuchowymi). Konieczna jest siła wsparcia w gotowości do natychmiastowej ewakuacji zespołu po zasadzce lub w razie dekonspiracji — wystarczająco liczna, by poradzić sobie z wrogim tłumem.`,
    },
    {
      id: "urban-hides",
      title: "Stanowiska (hides) w terenie miejskim",
      page: "6-13",
      body: `Sukces zespołu zależy od zdolności do oddania celnego strzału przy minimalnej ekspozycji na ogień wroga. Pozycje miejskie różnią się od polowych — zespół wybiera od poddaszy po piwnice. Wróg użyje wszystkich dostępnych środków, by wykryć i wyeliminować snajpera. Wyróżnia się dwie kategorie stanowisk:

**Stanowisko doraźne (hasty hide)** — zajmowane w natarciu lub wczesnej fazie obrony, wykorzystuje dostępną osłonę:
- **Róg budynku** — strzelec musi umieć strzelać z obu ramion, by minimalizować ekspozycję; częsty błąd to strzelanie z postawy stojącej.
- **Zza ściany** — strzelać dookoła osłony, nie ponad nią.
- **Z okna** — broń nigdy nie może wystawać poza okno (zdradza pozycję, zwłaszcza nocą przez błysk wylotowy); pozycja jak najgłębiej w pomieszczeniu, wsparta (stół, worki z piaskiem), nisko, wykorzystująca cień, zasłony/żaluzje zaciągnięte tak jak w otoczeniu; zasłony zabezpieczyć przed poruszeniem przez podmuch wystrzału.
- **Z niegotowego otworu strzelniczego (loophole)** — przez dziurę w ścianie, jak najdalej od otworu (błysk wylotowy skryty); jeśli otwór jest naturalny, upewnić się, że nie jest jedyny w budynku; jeśli wykonany przez zespół — musi pasować do budynku lub trzeba wykonać kilka otworów.
- **Szczyt dachu** — zwiększa pole widzenia i zasięg, ale głowa i broń łamią czystą linię dachu — pozycja "ostatniego wyboru"; komin/wystający obiekt zmniejsza eksponowaną sylwetkę.
- **Bez osłony** — pozycja leżąca, cień, brak sylwetkowania się na tle budynków/nieba, wykorzystanie wysokiej trawy/chwastów.

**Stanowisko przygotowane (prepared hide)** — budowane lub ulepszane, by objąć konkretny obszar/kierunek/pozycję wroga przy zmniejszonej ekspozycji:
- **Kominowe** — baza przy kominie/innej strukturze przebijającej dach; usunięcie części pokrycia dachowego, strzelec stoi na belkach/platformie z głową i barkami nad dachem (za kominem), worki z piaskiem osłaniają flanki.
- **Dachowe** — bez wystającej struktury: pozycja budowana od spodu, po stronie wroga; usunięty niewielki fragment pokrycia dachowego do prowadzenia ognia, wzmocniona workami z piaskiem, dodatkowe brakujące fragmenty pokrycia mylą wroga co do prawdziwej pozycji.
- **Pomieszczenie (room hide)** — istniejące pomieszczenie, strzał przez okno lub otwór strzelniczy, wsparcie na meblach; zasłona (ciemny koc, płótno, dywan, siatka) zapobiega sylwetkowaniu; firanek nie usuwa się, ale można otworzyć okna lub usunąć pojedyncze szyby (losowo, w kilku oknach, by nie zdradzić pozycji).
- **Przestrzeń międzystropowa (crawl space hide)** — między piętrami budynków wielokondygnacyjnych; trudne do wykonania otwory strzelnicze (uszkodzony budynek ułatwia zadanie); drogi ewakuacji przez otwory w podłodze/suficie, maskowane dywanem/meblami/płytkami sufitowymi.`,
      figures: [
        {
          id: "fig6-1",
          src: "/images/ch06/fig6-1.png",
          caption: "Figure 6-1. Roof Hide — stanowisko dachowe (oryginał z FM 3-05.222).",
        },
        {
          id: "fig6-2",
          src: "/images/ch06/fig6-2.png",
          caption: "Figure 6-2. Internal View of a Room Hide — widok wewnętrzny stanowiska w pomieszczeniu (oryginał z FM 3-05.222).",
        },
        {
          id: "fig6-3",
          src: "/images/ch06/fig6-3.png",
          caption: "Figure 6-3. Crawl Space Hide — stanowisko w przestrzeni międzystropowej (oryginał z FM 3-05.222).",
        },
      ],
    },
    {
      id: "hide-selection-construction",
      title: "Wybór, budowa i obsada stanowisk",
      page: "6-17",
      body: `**Zasady wyboru i zajmowania stanowisk:** unikać oczywistych pozycji; maksymalnie wykorzystywać dostępną osłonę i ukrycie; starannie wybrać nową pozycję, zanim opuści się starą; unikać ustalania wzorca (strzelać zarówno z okien barykadowanych, jak i niebarykadowanych); nigdy nie dopuszczać ruchu innego personelu przez stanowisko; **opuścić pozycję po 2-3 nietrafionych strzałach** — wykrycie jest niemal pewne; działać z osobnych pozycji (wzajemnie się wspierających — wykrycie dwóch zespołów blisko siebie jest bardzo prawdopodobne); wybierać pozycje zapasowe i dodatkowe pod różne kierunki; zawsze wcześniej planować drogę odwrotu; minimalizować palność stanowiska; wybierać cichą, bezpieczną trasę dojścia (bez puszek na śmieci, kruszejących murów, szczekających psów); wybierać bezpieczny punkt wejścia/wyjścia (te najbardziej oczywiste bywają najgorsze — ich powtarzalne użycie przy zmianach zespołu prowadzi do dekonspiracji); dobre sektory obserwacji; minimalne zakłócenia łączności; nigdy nie wracać na stanowisko, z którego już się strzelało — niezależnie jak dobre.

**Charakterystyka dobrego stanowiska:** musi dominować nad obszarem odpowiedzialności i dawać maksymalną obserwację. Dążenie do maksymalnej wysokości bywa błędem — im wyżej, tym bardziej trzeba patrzeć na zewnątrz i dalej od bezpośredniego otoczenia (np. na 10. piętrze trzeba wychylić się z okna, co szkodzi bezpieczeństwu). Zasadniczo najlepsze jest **drugie i trzecie piętro** — chyba że obszar zainteresowania wymaga wyższego poziomu w innym budynku (wtedy nieco powyżej tamtego piętra). Zdarzenia są nieprzewidywalne, ale dystanse zwykle krótkie — stanowisko musi pokrywać bliskie, średnie i dalekie odległości; parter zwykle wykluczają przechodnie, a piętra powyżej drugiego znacząco zwiększają martwe pole przed stanowiskiem (lokalne warunki, np. trasa autobusowa, mogą wymagać wyjątku). Wzajemne wsparcie między stanowiskami nabiera znaczenia — dlatego koordynacja odbywa się na szczeblu batalionu.

**Budowa stanowiska:** zasłona tylna ograniczająca obserwację z zewnątrz; ustawienie broni z zaznaczeniem pionowych/poziomych granic obserwacji; zasłony z otworami strzelniczymi (różne kształty — nie idealne kwadraty/koła, dodatkowo fałszywe otwory mylące wroga); barykadowanie pozostałych okien przy strzelaniu przez otwór w barykadowanym; stanowiska na poddaszu (usunięte gonty, ale też dodatkowe brakujące gonty gdzie indziej, by nie zdradzić pozycji); unikanie kontrastowego tła i budynków przyciągających uwagę; nigdy nie strzelać blisko otworu strzelniczego (odsunięcie tłumi błysk i dźwięk); **"podwójna przegroda" (double baffle)** — stanowisko w innym pomieszczeniu niż otwór strzelniczy, połączone przebitym otworem w ścianie, strzał z dalszego pomieszczenia — dodatkowo tłumi błysk/huk i poprawia ukrycie; nie strzelać ciągle z jednej pozycji.

**Możliwe lokalizacje:** opuszczone budynki (uwaga na pułapki — jeśli miejscowi, zwłaszcza dzieci, swobodnie się poruszają, sugeruje to brak min); zamieszkane domy (po obserwacji rutyny mieszkańców — skutecznie stosowane przez Brytyjczyków w Irlandii Północnej, ale ograniczone czasowo ze względu na wymóg ciszy); sklepy; szkoły i kościoły (ryzyko szkody dla relacji publicznych — unikać, jeśli obiekt wciąż czynny); fabryki, szopy, garaże; piwnice i przestrzenie międzystropowe (szukać tych już wentylowanych na zewnątrz); obszary wiejskie, z których widać teren miejski.

**Obsada stanowiska:** przed zajęciem zespół musi znać: dokładny charakter misji, długość pobytu, sytuację lokalną, procedurę i czas wejścia, kod i procedury alarmowego odwołania, procedury ewakuacji awaryjnej, procedury radiowe, ruch własnych wojsk, procedurę i czas wyjścia, potrzebny sprzęt specjalny. Ograniczone pole widzenia z głębi pomieszczenia oznacza, że czasem 2-3 ludzi musi obserwować jednocześnie z różnych części pomieszczenia.`,
    },
    {
      id: "hide-techniques",
      title: "Techniki w stanowiskach miejskich",
      page: "6-21",
      body: `**Okna i zasłony:** drugie piętro to zwykle najlepsza lokalizacja (minimalne martwe pole, trudniejsza do zauważenia przez przechodniów). Zabrudzonego okna nie czyści się dla lepszej widoczności. Jeśli w okolicy typowe są firanki, nie usuwa się ich ze stanowiska — firanki koronkowe/siatkowe widać od środka, ale trudno je przejrzeć z zewnątrz. Przy silnym wietrze zszywa się/dociąża wszystkie firanki w okolicznych oknach (nie tylko w stanowisku), by ich nieruchomość nie zwracała uwagi. Strzał przez firankę ma minimalny wpływ na celność — ale lufa musi być wystarczająco daleko, by uniknąć zaburzenia tkaniny podmuchem. Gdy lokalna rutyna to otwarte firanki, zespół się do niej dostosowuje — pozycjonując się daleko od otworu obserwacyjnego lub montując drugą zasłonę za otwartą firanką, niewidoczną z zewnątrz (strzelec "kanapkowany" między dwiema zasłonami).

**Strzelanie przez szkło** — należy go unikać (może wymagać więcej niż jednego strzału). Płaszcz miedziany pocisku M118 zwykle zostaje zdarty przez szybę, ale masa rdzenia utrzymuje tor lotu przez ok. **5 stóp** po przebiciu typowej szyby domowej. Zmienne do rozważenia: typ i grubość szkła (hartowane/bezpieczne zachowuje się inaczej niż zwykła szyba), odległość broni od szyby, typ broni i amunicji, odległość szyby od celu, kąt trajektorii do szyby (najlepiej 90°). Opcje ograniczające ryzyko: wybicie/otwarcie kilku okien w stanowisku jeszcze przed zajęciem pozycji (najlepiej podczas rekonesansu, dyskretnie) lub zastąpienie szyb foliowym pokryciem termokurczliwym (nie zaburza toru pocisku, a wygląda jak nienaruszona szyba dla obserwatora z zewnątrz).

**Inne otwory strzelnicze:** uszkodzenia bojowe, otwory wiercone ręcznie, usunięte cegły, luźne deski w opuszczonych domach; pozycje na poddaszu/między stropem a dachem: szczyty dachu blisko okapu (cień dodaje ukrycia), uszkodzenia bojowe szczytów/dachu, luźne/usunięte dachówki lub łupek, świetliki. Lufa musi mieć wystarczający odstęp od otworu, a broń wycelowana boresightowo tak, by tor pocisku nie krzyżował się z dolną krawędzią otworu — obserwator i strzelec zawsze sprawdzają drożność lufy przed strzałem.

**Detale operacyjne:** zasłony przednie (zwykle siatka) mogą wymagać zmiany koloru z ciemnego na jasny o świcie/zmierzchu nautycznym, zależnie od kierunku światła; przy jednoizbowym stanowisku partycje robi się z powieszonych koców/siatek; worki z piaskiem napełnia się i przenosi w plecakach lub napełnia na miejscu (piwnica); zawsze planuje się drogę ewakuacji do ORP — zwykle inną niż droga wejścia — z uwzględnieniem okien (poza obserwacyjnym), zakotwiczonych lin lub niewielkiego ładunku wybuchowego przygotowanego na ścianie/podłodze.

**Umundurowanie:** zwykle standardowe BDU z wymaganym wyposażeniem; możliwe umundurowanie miejskie (kolory zależne od materiału budynków: szary/beton, czerwony/cegła, biały/marmur, ciemnoszary/granit — zawsze wzory kątowe/linearne); leśne BDU można nosić na lewą stronę (spód ma barwę zielono-szarą); preferowane obuwie miękkopodeszwowe; ubiór cywilny lub nietypowy mundur dopuszczalny w ramach planu zwodzenia (za zgodą teatru działań); stroje rzemieślnicze/budowlane wspierają zwodzenie.`,
    },
    {
      id: "weapons-glass-engagement",
      title: "Penetracja materiałów, szkła i techniki zaangażowania",
      page: "6-23",
      body: `**Penetracja materiałów konstrukcyjnych:** podstawowe klasy konstrukcji to beton, mur i drewno (często kombinowane). Amunicja kulowa 7,62×51 mm NATO na dystansie 200 m przebija:

| Materiał | Głębokość penetracji |
|---|---|
| Deski sosnowe | 50 cali |
| Luźny piasek | 10 cali |
| Beton | 3 cale |

**Penetracja szkła:** gdy amunicja M118 przebija szybę, płaszcz miedziany zwykle zostaje zdarty z rdzenia ołowianego, a rdzeń fragmentuje się — odłamki lecą losowo w kształcie stożka (jak śrut) i mogą zranić lub zabić zarówno zakładnika, jak i terrorystę. Nawet przy kącie szyby do 45° rdzeń ołowiany wykazuje minimalne odchylenie do ok. **5 stóp** po uderzeniu w typową szybę domową. Kąt trafienia pocisku w szybę nie wpływa na kierunek rozprysku odłamków szkła — te zawsze lecą **prostopadle do płaszczyzny szyby**.

Testy US Secret Service (amunicja Federal 168-grainowa Sierra hollow-point boat-tail): cele umieszczone do **20 stóp** za szybą były neutralizowane przy strzale z 100 m, kąt odchylenia 0-45°; stożek zagrożenia odłamkami szkła miał głębokość 10 stóp i średnicę 6 stóp, z osią prostopadłą do linii/kąta strzału; płaszcz oddzielał się od rdzenia, ale oba zachowywały zintegrowaną trajektorię. *Uwaga: testy Korpusu Piechoty Morskiej, Armii USA i FBI dały inny wynik — akceptowalne odchylenie 5-7 stóp — dane nie są w pełni zgodne między instytucjami.*

**Symultaniczne strzelanie (simultaneous shooting)** — kluczowa umiejętność przy akcjach z wieloma snajperami (np. odbicie zakładników), wymagająca dużej ilości treningu. Starszy oficer w CP zwykle wydaje komendę (może ją delegować dowódcy elementu szturmowego, by skoordynować ogień z akcją ratunkową). Komenda „standby, (pauza), ready, ready, fire" musi być wydana wyraźnie, bez emocji i zmiany tonu. Procedura:
1. Dowódca zespołu pyta: „SNIPER STATUS".
2. Snajperzy odpowiadają numerami wg dostępności celu: „ONE ON", „TWO ON", „THREE OFF", „FOUR ON".
3. Dowódca odpowiada „STANDBY" lub „HOLD" zależnie od dostępności celów.
4. Jeśli szturm jest zatwierdzony („GO"), pada komenda „READY, READY, FIRE" — wszyscy snajperzy z celem strzelają jednocześnie (powinno zabrzmieć jak jeden strzał) — komendy alarmowe powtarza się dwukrotnie.
5. Po strzale snajper melduje „SHOT OUT" i potwierdza wynik.

Cele reaktywne (dające widoczny sygnał trafienia) są zalecane do treningu tej umiejętności.

**System odliczania (countdown system)** — stosowany przy wielopunktowym działaniu lub szturmie inicjowanym przez snajpera. CP/dowódca zespołu podaje głośno: STANDBY (pauza) 5-4-3-2 → SNIPERZY STRZELAJĄ → 1 → WYBUCH GRANATÓW LUB ŁADUNKU WYŁAMUJĄCEGO. Jeśli trzeba rozbić szybę, by dać strzelcowi głównemu czyste pole ognia, zaleca się, by snajper wspierający również mierzył swoim „rozbijającym szybę" pociskiem w cel — dwa pociski naprowadzone na cel zwiększają szansę trafienia.`,
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Ile razy większa gęstość wojsk jest typowo potrzebna w walce miejskiej w porównaniu do terenu naturalnego?",
      options: ["1-2 razy", "3-5 razy", "8-10 razy", "Taka sama"],
      correctIndex: 1,
      explanation: "Ograniczone zasięgi LOS i pokawałkowany teren wymagają 3-5 razy większej gęstości wojsk (zarówno atakującego, jak i obrońcy) niż w terenie naturalnym.",
    },
    {
      id: "q2",
      question: "Jaka jest typowa maksymalna szerokość „wąskiej” ulicy wg klasyfikacji z podręcznika?",
      options: ["5 m", "15 m", "25 m", "50 m"],
      correctIndex: 1,
      explanation: "Ulice wąskie mają 7-15 m szerokości (np. średniowieczne dzielnice europejskie); średnie 15-25 m; szerokie 25-50 m.",
    },
    {
      id: "q3",
      question: "Dlaczego snajper NIE powinien wybierać skrajnych (najbardziej zewnętrznych) budynków miasta jako stanowiska?",
      options: [
        "Są zbyt drogie do wynajęcia",
        "Zwykle przyjmują największy ostrzał i bombardowanie przygotowawcze",
        "Nie mają okien",
        "Są zbyt niskie",
      ],
      correctIndex: 1,
      explanation: "Budynki na krawędzi miasta dają dobre pola ognia, ale są zwykle poddawane największemu ostrzałowi/bombardowaniu przygotowawczemu.",
    },
    {
      id: "q4",
      question: "Które piętro budynku jest zwykle optymalne dla stanowiska snajperskiego w mieście?",
      options: ["Parter", "Drugie-trzecie piętro", "Zawsze najwyższe piętro", "Piwnica"],
      correctIndex: 1,
      explanation: "Drugie i trzecie piętro minimalizuje martwe pole przy jednoczesnym zachowaniu bezpieczeństwa — zbyt duża wysokość zwiększa martwe pole i zmusza do wychylania się.",
    },
    {
      id: "q5",
      question: "Jaka jest szerokość obszaru rdzenia przedłużonego (medulla) — jedynego miejsca gwarantującego natychmiastową śmierć przy strzale w głowę?",
      options: ["Ok. 1 cala", "Ok. 2 cali", "Ok. 5 cali", "Ok. 7 cali"],
      correctIndex: 1,
      explanation: "Cała głowa ma ok. 7×10 cali, ale rdzeń przedłużony (medulla), kontrolujący odruchy motoryczne, ma szerokość ok. 2 cali.",
    },
    {
      id: "q6",
      question: "Powyżej jakiej odległości przeciętny snajper nie powinien podejmować się natychmiast zabójczego strzału w głowę w sytuacji zakładniczej?",
      options: ["100 m", "200 m", "400 m", "600 m"],
      correctIndex: 1,
      explanation: "Zasada windażu i elewacji wskazuje, że powyżej 200 m broń i amunicja nie gwarantują wymaganej precyzji dla natychmiast zabójczego strzału w głowę.",
    },
    {
      id: "q7",
      question: "Po ilu nietrafionych strzałach z jednej pozycji snajper powinien ją opuścić?",
      options: ["1", "2-3", "5-6", "10"],
      correctIndex: 1,
      explanation: "Po 2-3 nietrafionych strzałach z jednej pozycji detekcja jest niemal pewna i pozycję należy opuścić.",
    },
    {
      id: "q8",
      question: "Na jaką odległość rdzeń ołowiany pocisku M118 utrzymuje tor lotu po przebiciu typowej szyby domowej?",
      options: ["Ok. 1 stopy", "Ok. 5 stóp", "Ok. 20 stóp", "Ok. 50 stóp"],
      correctIndex: 1,
      explanation: "Po przebiciu standardowej szyby domowej rdzeń ołowiany (po oddzieleniu płaszcza miedzianego) utrzymuje tor lotu na ok. 5 stóp, nawet przy kącie szyby do 45°.",
    },
    {
      id: "q9",
      question: "W którym kierunku zawsze rozpryskują się odłamki szkła po uderzeniu pocisku, niezależnie od kąta trafienia?",
      options: [
        "Zawsze w stronę strzelca",
        "Prostopadle do płaszczyzny szyby",
        "Równolegle do toru pocisku",
        "Losowo, bez żadnego wzorca kierunkowego",
      ],
      correctIndex: 1,
      explanation: "Kąt uderzenia pocisku nie wpływa na kierunek rozprysku — odłamki szkła zawsze lecą prostopadle do płaszczyzny szyby.",
    },
    {
      id: "q10",
      question: "Ile cali betonu przebija amunicja 7,62×51 mm NATO ball na dystansie 200 m wg podręcznika?",
      options: ["1 cal", "3 cale", "10 cali", "50 cali"],
      correctIndex: 1,
      explanation: "Na 200 m amunicja 7,62 NATO ball przebija 50 cali desek sosnowych, 10 cali luźnego piasku i 3 cale betonu.",
    },
    {
      id: "q11",
      question: "Jaka jest poprawna kolejność komend przy symultanicznym strzelaniu wielu snajperów?",
      options: [
        "FIRE, READY, STANDBY",
        "STANDBY → SNIPER STATUS → STANDBY/HOLD → READY, READY, FIRE",
        "Tylko pojedyncza komenda FIRE",
        "Każdy snajper strzela wedle własnej oceny bez komend",
      ],
      correctIndex: 1,
      explanation: "Procedura: dowódca pyta SNIPER STATUS, snajperzy melduje dostępność celów, dowódca odpowiada STANDBY/HOLD, a przy zatwierdzeniu szturmu pada READY, READY, FIRE (powtórzone dwukrotnie).",
    },
    {
      id: "q12",
      question: "Czym jest „double baffle” (podwójna przegroda) przy budowie stanowiska miejskiego?",
      options: [
        "Dwie warstwy kamizelki kuloodpornej",
        "Strzał z innego pomieszczenia niż otwór strzelniczy, połączonego przebitym otworem w ścianie",
        "Podwójna lufa karabinu",
        "Dwa niezależne systemy łączności",
      ],
      correctIndex: 1,
      explanation: "Double baffle to umieszczenie stanowiska strzeleckiego w innym pomieszczeniu niż otwór strzelniczy, połączonym przebitym otworem w ścianie — dodatkowo tłumi błysk, huk i poprawia ukrycie.",
    },
    {
      id: "q13",
      question: "Który typ stanowiska (hide) opisuje pozycję budowaną w przestrzeni między piętrami budynku wielokondygnacyjnego?",
      options: ["Roof hide", "Chimney hide", "Crawl space hide", "Room hide"],
      correctIndex: 2,
      explanation: "Crawl space hide (Figure 6-3) to stanowisko budowane w przestrzeni międzystropowej — uszkodzony budynek znacznie ułatwia jego wykonanie.",
    },
  ],
  flashcards: [
    { id: "f1", term: "Core periphery", definition: "Obrzeże rdzenia miasta — wąskie ulice (12-20 m) z ciągłą zabudową ceglaną/betonową, 2-10 kondygnacji zależnie od wielkości miasta." },
    { id: "f2", term: "Commercial ribbons", definition: "Wstęgi handlowe — rzędy sklepów wzdłuż głównych ulic (≥25 m szerokości), budynki 2-3-kondygnacyjne." },
    { id: "f3", term: "Flagging", definition: "Częsty błąd przy rogu budynku: wysunięcie broni poza krawędź, zdradzające pozycję snajpera." },
    { id: "f4", term: "Hasty hide", definition: "Stanowisko doraźne, zajmowane w natarciu lub wczesnej fazie obrony, wykorzystujące dostępną osłonę (róg, ściana, okno, prowizoryczny otwór)." },
    { id: "f5", term: "Prepared hide", definition: "Stanowisko przygotowane/zbudowane pod konkretny sektor ognia: kominowe, dachowe, w pomieszczeniu lub w przestrzeni międzystropowej." },
    { id: "f6", term: "Double baffle", definition: "Technika budowy stanowiska z dwoma kolejnymi otworami strzelniczymi w osobnych pomieszczeniach — tłumi błysk i huk, poprawia ukrycie." },
    { id: "f7", term: "Medulla", definition: "Rdzeń przedłużony mózgu, kontrolujący odruchy motoryczne — jedyny obszar głowy (ok. 2 cale szerokości), którego trafienie gwarantuje natychmiastową inkapacytację." },
    { id: "f8", term: "Zasada 200 metrów (headshot)", definition: "Przeciętny snajper nie powinien podejmować natychmiast zabójczego strzału w głowę powyżej 200 m — broń i amunicja nie gwarantują wymaganej precyzji." },
    { id: "f9", term: "TA-312", definition: "Telefon polowy używany do budowy przewodowej pętli komunikacyjnej między wieloma zespołami snajperskimi w sytuacji zakładniczej — odporny na przechwyt/zagłuszanie." },
    { id: "f10", term: "Simultaneous shooting", definition: "Skoordynowany, jednoczesny strzał wielu snajperów na komendę „READY, READY, FIRE” — kluczowy przy akcjach odbicia zakładników." },
    { id: "f11", term: "Countdown system", definition: "Głośne odliczanie (STANDBY...5-4-3-2-SNIPERZY STRZELAJĄ-1-WYBUCH) synchronizujące strzały snajperów z wejściem szturmowym." },
    { id: "f12", term: "Room hide", definition: "Stanowisko w istniejącym pomieszczeniu, strzał przez okno/otwór strzelniczy, z zasłoną (koc, płótno, siatka) zapobiegającą sylwetkowaniu." },
    { id: "f13", term: "Crawl space hide", definition: "Stanowisko w przestrzeni między stropami budynku wielokondygnacyjnego, z drogami ewakuacji przez otwory w podłodze/suficie." },
    { id: "f14", term: "Penetracja szkła — odłamki", definition: "Po uderzeniu pocisku w szybę odłamki szkła zawsze lecą prostopadle do jej płaszczyzny, niezależnie od kąta trafienia." },
    { id: "f15", term: "Zasada „2-3 nietrafionych strzałów”", definition: "Stanowisko należy opuścić po 2-3 nietrafionych strzałach — dalsze pozostawanie w nim niemal na pewno prowadzi do wykrycia." },
    { id: "f16", term: "Fazy natarcia na teren zabudowany", definition: "Faza I: izolacja obszaru walki; Faza II: zdobycie przyczółka; Faza III: natarcie przez zabudowę wraz z piechotą." },
    { id: "f17", term: "FEBA (brak w wojnie partyzanckiej)", definition: "Forward Edge of the Battle Area — w miejskiej wojnie partyzanckiej nie istnieje, więc nie ma „ziemi niczyjej”; snajper działa w środowisku w pełni wrogim." },
    { id: "f18", term: "Zasada „nigdy nie wracać na stanowisko”", definition: "Zespół nigdy nie powraca do pozycji, z której już oddano strzał, niezależnie jak dobra by ona nie była." },
  ],
};
