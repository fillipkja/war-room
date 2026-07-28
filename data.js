// THE WAR ROOM — Daily Geopolitical Brief data
// Brief compiled for Tuesday, 28 July 2026, from open-source reporting.
// All items are from the past week. Country codes are ISO 3166-1 numeric
// ids matching world-atlas TopoJSON.

window.BRIEF = {
  date: "28//JULY//2026",
  // alliance blocs — a story may list a group key in `countries` to
  // highlight every member in the bloc's colour (EU blue, etc.)
  groups: {
    EU: ["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"],
    NATO: ["008","056","100","124","191","203","208","233","246","250","276","300","348","352","380","428","440","442","470","499","528","578","616","620","642","703","705","724","752","792","807","826","840"],
    ASEAN: ["096","116","360","418","458","104","608","702","764","704"]
  },
  events: [
    {
      id: "netanyahu-trump",
      category: "DIPLOMACY",
      when: "TUE 28 JUL",
      badges: [{ name: "ISRAEL", emblems: ["israel.svg"], country: "376", anchor: [32.6, 32.3] }, { name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }],
      title: "[[Netanyahu]] meets [[Trump]] today — first since the Iran war began",
      location: "Washington, DC",
      countries: ["376", "840"],
      markers: [
        { lon: -77.04, lat: 38.9, label: "WASHINGTON" },
        { lon: 35.21, lat: 31.77, label: "JERUSALEM" }
      ],
      summary:
        "Netanyahu sits down with Trump at the White House today, their first meeting since the war with Iran began and one the two have publicly disagreed over. Iran tops the agenda alongside a Lebanon peace framework and expanding the Abraham Accords; Netanyahu departed Israel secretively amid a reported Iranian security threat. Trump, under pressure to end an unpopular war, hosts Zelensky later the same day.",
      source: "The Times of Israel"
    },
    {
      id: "us-iran-talks",
      category: "SECURITY",
      when: "MON 27 JUL",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "IRAN", emblems: ["iran.svg"], country: "364" }],
      title: "[[Strike pause]] holds; Iran denies [[direct talks]] with US",
      location: "Tehran — Doha",
      countries: ["840", "364"],
      markers: [
        { lon: 51.39, lat: 35.69, label: "TEHRAN" },
        { lon: 51.53, lat: 25.29, label: "DOHA" }
      ],
      summary:
        "No new US strikes for a third night, with Trump saying he halted the campaign at Tehran's request and will resume if no ceasefire deal emerges. Iran's foreign ministry insists there are no direct negotiations — mediators relay American messages, and its only formal track is with Oman over the Strait of Hormuz — while VP Vance says technical talks in Doha continue under a 14-point memorandum.",
      source: "CNN"
    },
    {
      id: "zelensky-burnham",
      category: "DIPLOMACY",
      when: "MON 27 JUL",
      badges: [{ name: "UK", emblems: ["uk.png"], country: "826" }, { name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }],
      title: "[[Zelensky]] first leader hosted by new UK PM [[Burnham]]",
      location: "Portsmouth, England",
      countries: ["826", "804"],
      markers: [
        { lon: -1.09, lat: 50.8, label: "PORTSMOUTH" },
        { lon: -0.13, lat: 51.51, label: "LONDON" }
      ],
      summary:
        "Zelensky met Andy Burnham at Portsmouth Naval Base — the first foreign leader received by Britain's new prime minister, in office one week since Keir Starmer's resignation. Burnham pledged 'unwavering' support, joint drone projects and the intellectual property behind the UK's Stone Cloak electronic-warfare system; Zelensky flies on to Washington to see Trump today.",
      source: "France 24"
    },
    {
      id: "romania-russia",
      category: "SECURITY",
      when: "MON 27 JUL",
      badges: [{ name: "ROMANIA", emblems: ["romania.png"], country: "642" }, { name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "[[Romania]] expels Russian diplomat after downing [[third drone]]",
      location: "Bucharest, Romania",
      countries: ["642", "643"],
      markers: [
        { lon: 26.1, lat: 44.43, label: "BUCHAREST" },
        { lon: 28.8, lat: 45.18, label: "DANUBE DELTA" }
      ],
      summary:
        "Bucharest declared a Russian embassy member persona non grata and recalled its own ambassador from Moscow after Romanian forces shot down three drones that crossed into its airspace between July 24 and 26. The Russian envoy was shown fragments of a downed drone that prosecutors traced to Russian-origin components; Romania called repeat violations of NATO and EU airspace 'absolutely unacceptable'.",
      source: "Ukrinform"
    },
    {
      id: "ukraine-strikes",
      category: "SECURITY",
      when: "MON 27 JUL",
      badges: [{ name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }, { name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "Ukraine hits [[Russian oil infrastructure]]; 147 drones launched at Ukraine",
      location: "Kyiv, Ukraine",
      countries: ["804", "643"],
      markers: [{ lon: 30.52, lat: 50.45, label: "KYIV" }],
      summary:
        "Ukraine pressed its long-range strike campaign against Russian export and oil infrastructure through the weekend, while Russia launched 147 drones at Ukraine overnight into Monday; neither side made confirmed battlefield advances. New commander-in-chief Mykhailo Drapatyi is a week into the job after protests forced out Gen. Syrsky in Kyiv's biggest wartime shake-up.",
      source: "Kyiv Post"
    },
    {
      id: "europe-wildfires",
      category: "DISASTER",
      when: "TUE 28 JUL",
      badges: [{ name: "FRANCE", emblems: ["france.png"], country: "250" }, { name: "SPAIN", emblems: ["spain.svg"], country: "724" }],
      title: "[[Macron]]: wildfire crisis France's [[worst since WWII]]",
      location: "Gironde, France — Madrid, Spain",
      countries: ["250", "724"],
      markers: [
        { lon: -0.58, lat: 44.84, label: "GIRONDE" },
        { lon: -3.7, lat: 40.42, label: "MADRID" }
      ],
      summary:
        "Macron called the fires the most severe France has battled since World War II, with some 250,000 evacuated there and 63,000 more around Madrid. France's weather office issued fresh heatwave alerts for Gironde and Landes with no rain forecast, military engineers joined firefighting lines, and in eastern Spain unexploded civil-war ordnance is endangering crews.",
      source: "CNN"
    },
    {
      id: "pakistan-floods",
      category: "DISASTER",
      when: "MON 27 JUL",
      badges: [{ name: "PAKISTAN", emblems: ["pakistan.png"], country: "586" }],
      title: "[[Pakistan monsoon]] toll tops 100 as more [[heavy rain]] forecast",
      location: "Khyber Pakhtunkhwa, Pakistan",
      countries: ["586"],
      markers: [
        { lon: 71.52, lat: 34.01, label: "PESHAWAR" },
        { lon: 74.34, lat: 31.55, label: "LAHORE" }
      ],
      summary:
        "At least 107 people have been killed and 344 injured in monsoon rains and flash flooding since late June, many in house and roof collapses. Khyber Pakhtunkhwa accounts for over half the deaths with 55, followed by Punjab with 36, and forecasters warn of more heavy rain across the country later this week.",
      source: "Al Jazeera"
    },
    {
      id: "brent-abqaiq",
      category: "ECONOMY",
      when: "MON 27 JUL",
      badges: [{ name: "SAUDI ARABIA", emblems: ["saudi.png"], country: "682" }, { name: "IRAN", emblems: ["iran.svg"], country: "364" }],
      title: "[[Brent]] plunges 11% — but Houthis strike [[Abqaiq]]",
      location: "Abqaiq — Riyadh, Saudi Arabia",
      countries: ["682", "364"],
      markers: [
        { lon: 49.67, lat: 25.94, label: "ABQAIQ" },
        { lon: 46.72, lat: 24.63, label: "RIYADH" }
      ],
      summary:
        "Brent futures closed down 11.3% Monday — the steepest fall since April — as the US–Iran pause held, with US crude off about 7%. The risk premium is far from gone: Houthi drones damaged the Abqaiq oil-processing complex, and Saudi defences intercepted drones launched by Iraqi militias at oil facilities and the Riyadh area.",
      source: "CNBC"
    },
    {
      id: "fujimori-inauguration",
      category: "ELECTION",
      when: "TUE 28 JUL",
      badges: [{ name: "PERU", emblems: ["peru.png"], country: "604" }],
      title: "[[Keiko Fujimori]] sworn in as [[Peru's first elected woman president]]",
      location: "Lima, Peru",
      countries: ["604"],
      markers: [{ lon: -77.03, lat: -12.05, label: "LIMA" }],
      summary:
        "Keiko Fujimori takes the oath in Lima today — Peru's Independence Day — after a runoff won by just 49,641 votes of 18 million cast, becoming the first woman elected president by direct vote. Spain's King Felipe VI, Argentina's Milei and a US delegation under Deputy Secretary Landau attend, while nationwide protests are expected against a deeply divisive presidency.",
      source: "The Rio Times"
    },
    {
      id: "sudan-highway",
      category: "SECURITY",
      when: "MON 27 JUL",
      badges: [{ name: "SUDAN", emblems: ["sudan.png"], country: "729" }],
      title: "Army retakes [[Khartoum–El Obeid highway]]; RSF answers with [[drone strikes]]",
      location: "North Kordofan, Sudan",
      countries: ["729"],
      markers: [
        { lon: 30.22, lat: 13.18, label: "EL OBEID" },
        { lon: 32.53, lat: 15.55, label: "KHARTOUM" }
      ],
      summary:
        "Sudan's army pushed the RSF off the 400-km highway linking Khartoum to El Obeid, reopening a supply artery to the besieged city of half a million after a days-long advance across North Kordofan. Hours later, dawn drone strikes blamed on the RSF hit El Obeid, destroying the lawyers' association and a bank branch, though no casualties were reported.",
      source: "Al Jazeera"
    },
    {
      id: "yoon-sentence",
      category: "LAW",
      when: "MON 27 JUL",
      badges: [{ name: "SOUTH KOREA", emblems: ["southkorea.png"], country: "410" }],
      title: "[[Yoon]] handed suspended term for [[election lies]] — atop life sentence",
      location: "Seoul, South Korea",
      countries: ["410"],
      markers: [{ lon: 126.98, lat: 37.57, label: "SEOUL" }],
      summary:
        "A Seoul court sentenced ex-president Yoon Suk Yeol to 18 months in prison, suspended for three years, for false statements during his 2022 campaign — on top of the life term he is already serving for insurrection. If upheld, the verdict could nullify his 2022 win and force his People Power Party to repay 39.7 billion won in election expenses.",
      source: "The Korea Herald"
    },
    {
      id: "commonwealth-games",
      category: "SPORT",
      when: "TUE 28 JUL",
      badges: [{ name: "UK", emblems: ["uk.png"], country: "826" }, { name: "AUSTRALIA", emblems: ["australia.png"], country: "036", region: [[113, -39.5], [154, -11]], anchor: [134, -25] }],
      title: "[[Glasgow Games]] day five: [[100m showdown]] tonight; Australia leads medals",
      location: "Glasgow, Scotland",
      countries: ["826", "036"],
      markers: [{ lon: -4.25, lat: 55.86, label: "GLASGOW" }],
      summary:
        "The Commonwealth Games hit day five with the men's and women's 100m finals headlining tonight's athletics session and Chalmers and Richards in the pool. Australia tops the medal table with 24, including 12 golds; day four saw India's first-ever para-athletics gold and Georgia Godwin defending her pole-vault title.",
      source: "Olympics.com"
    }
  ],
  sources: [
    { name: "The Times of Israel — Netanyahu departs for Trump meeting", url: "https://www.timesofisrael.com/netanyahu-amid-reported-iranian-security-threat-takes-off-quietly-for-trump-meeting/" },
    { name: "NPR — Netanyahu to meet Trump", url: "https://www.npr.org/2026/07/28/g-s1-135833/trump-netanyahu-iran-war" },
    { name: "CNN — Iran war live updates, Jul 28", url: "https://www.cnn.com/2026/07/28/world/live-news/iran-trump-news" },
    { name: "CNBC — US–Iran war pauses, oil tumbles", url: "https://www.cnbc.com/2026/07/27/us-iran-war-trump-hormuz.html" },
    { name: "France 24 — Burnham hosts Zelensky", url: "https://www.france24.com/en/europe/20260727-burnham-to-welcome-zelensky-on-first-foreign-leader-visit-to-london-since-taking-office" },
    { name: "Ukrinform — Romania recalls ambassador, expels diplomat", url: "https://www.ukrinform.net/rubric-polytics/4148433-romania-recalls-ambassador-from-moscow-for-consultations-expels-russian-diplomat.html" },
    { name: "Kyiv Post — ISW assessment, Jul 27", url: "https://www.kyivpost.com/post/81190" },
    { name: "CNN — France and Spain wildfires live, Jul 28", url: "https://edition.cnn.com/2026/07/28/world/live-news/france-spain-wildfires-ww2" },
    { name: "Al Jazeera — Pakistan monsoon toll tops 100", url: "https://www.aljazeera.com/news/2026/7/27/death-toll-from-pakistan-monsoon-rains-floods-tops-100" },
    { name: "The Rio Times — Fujimori inauguration", url: "https://www.riotimesonline.com/keiko-fujimori-inauguration-peru-2026/" },
    { name: "Al Jazeera — Sudan army claims Khartoum–El Obeid highway", url: "https://www.aljazeera.com/news/2026/7/27/sudans-army-claims-control-of-major-highway-linking-khartoum-and-el-obeid" },
    { name: "The Korea Herald — Yoon suspended term", url: "https://www.koreaherald.com/article/10821698" },
    { name: "Olympics.com — Glasgow 2026 day five schedule", url: "https://www.olympics.com/en/news/commonwealth-games-2026-schedule-tuesday-28-july-glasgow-100m-sprinters-track-showdown-chalmers-richards-how-to-watch-day-five-live" }
  ]
};
