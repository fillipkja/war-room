// THE WAR ROOM — Daily Geopolitical Brief data
// Brief compiled for Sunday, 26 July 2026, from open-source reporting.
// All items are from the past week. Country codes are ISO 3166-1 numeric
// ids matching world-atlas TopoJSON.

window.BRIEF = {
  date: "26//JULY//2026",
  // alliance blocs — a story may list a group key in `countries` to
  // highlight every member in the bloc's colour (EU blue, etc.)
  groups: {
    EU: ["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"],
    NATO: ["008","056","100","124","191","203","208","233","246","250","276","300","348","352","380","428","440","442","470","499","528","578","616","620","642","703","705","724","752","792","807","826","840"],
    ASEAN: ["096","116","360","418","458","104","608","702","764","704"]
  },
  events: [
    {
      id: "us-iran-pause",
      category: "SECURITY",
      when: "SAT 25 JUL",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "IRAN", emblems: ["iran.svg"], country: "364" }],
      title: "[[Trump]] halts [[Iran strikes]] after two weeks",
      location: "Iran — Washington",
      countries: ["840", "364"],
      markers: [
        { lon: 51.39, lat: 35.69, label: "TEHRAN" },
        { lon: -77.04, lat: 38.9, label: "WASHINGTON" }
      ],
      summary:
        "The US military announced no new strikes on Iran for the first time since fighting resumed on 8 July, after President Trump ordered a halt to fresh attacks. Trump warned he is prepared to resume the full-scale campaign if US demands are not met, as Pakistan and Qatar work to bring both sides back to the table.",
      source: "CNN"
    },
    {
      id: "iran-ukraine-caspian",
      category: "SECURITY",
      when: "SUN 26 JUL",
      badges: [{ name: "IRAN", emblems: ["iran.svg"], country: "364" }, { name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }],
      title: "[[Iran]] threatens retaliation over [[Ukrainian Caspian strike]]",
      location: "Caspian Sea",
      countries: ["364", "804"],
      markers: [
        { lon: 51.0, lat: 38.5, label: "CASPIAN SEA" },
        { lon: 51.39, lat: 35.69, label: "TEHRAN" }
      ],
      summary:
        "Iran summoned Ukraine's chargé d'affaires after a Ukrainian long-range strike on an Iranian vessel in the Caspian Sea killed a sailor. President Zelensky said Kyiv hit vessels used in military cargo shipments involving Iran, as well as a warship; Tehran called it an act of aggression and warned of retaliatory consequences.",
      source: "Al Jazeera"
    },
    {
      id: "europe-wildfires",
      category: "DISASTER",
      when: "SAT 25 JUL",
      badges: [{ name: "FRANCE", emblems: ["france.png"], country: "250" }, { name: "SPAIN", emblems: ["spain.svg"], country: "724" }],
      title: "[[Wildfires]] force 267,000 to flee [[France]] and [[Spain]]",
      location: "Gironde, France — Madrid, Spain",
      countries: ["250", "724"],
      markers: [
        { lon: -0.58, lat: 44.84, label: "BORDEAUX" },
        { lon: -3.7, lat: 40.42, label: "MADRID" }
      ],
      summary:
        "Wildfires fanned by a severe heatwave have forced more than 267,000 people from their homes — France's largest evacuation since World War II. Spain declared a national emergency as a blaze near Madrid burned beyond containment, while Macron ordered 1,500 soldiers to reinforce firefighters in the Gironde.",
      source: "France 24"
    },
    {
      id: "ukraine-strikes",
      category: "SECURITY",
      when: "SAT 25 JUL",
      badges: [{ name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }, { name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "[[Ukraine]] hits Russian warship, oil platform; fire at [[Engels air base]]",
      location: "Ukraine — Russia",
      countries: ["804", "643"],
      markers: [
        { lon: 46.12, lat: 51.48, label: "ENGELS" },
        { lon: 30.52, lat: 50.45, label: "KYIV" }
      ],
      summary:
        "Ukraine's Security Service struck a Russian missile boat, cargo vessels and an oil platform, and fire was reported overnight at Engels air base, home to Russia's heavy bombers. Overnight exchanges killed at least 17 people, as Zelensky warned Moscow is preparing to receive some 30,000 fresh North Korean troops.",
      source: "The Kyiv Independent"
    },
    {
      id: "guterres-syria",
      category: "DIPLOMACY",
      when: "SAT 25 JUL",
      badges: [{ name: "SYRIA", emblems: ["syria.png"], country: "760" }, { name: "ISRAEL", emblems: ["israel.svg"], country: "376", anchor: [32.6, 32.3] }],
      title: "[[Guterres]] in Damascus: [[Syria's territorial integrity]] non-negotiable",
      location: "Damascus, Syria",
      countries: ["760", "376"],
      markers: [
        { lon: 36.29, lat: 33.51, label: "DAMASCUS" },
        { lon: 35.75, lat: 33.0, label: "GOLAN HEIGHTS" }
      ],
      summary:
        "UN Secretary-General António Guterres, visiting Damascus, said any violation of Syria's territorial integrity is unacceptable and stressed that the Israeli-occupied Golan Heights is Syrian territory. Syria's foreign minister demanded Israeli withdrawal from the UN-patrolled buffer zone occupied since Assad's fall in 2024.",
      source: "Anadolu Agency"
    },
    {
      id: "taiwan-recall-results",
      category: "ELECTION",
      when: "SUN 26 JUL",
      badges: [{ name: "TAIWAN", emblems: ["taiwan.png"], country: "158" }],
      title: "[[Taiwan recall wave]] fails — all [[24 KMT legislators]] survive",
      location: "Taiwan",
      countries: ["158"],
      markers: [{ lon: 121.56, lat: 25.03, label: "TAIPEI" }],
      summary:
        "Taiwan's unprecedented mass recall campaign fell flat as voters rejected removal of all 24 opposition KMT legislators on the ballot. The failed DPP-backed 'Great Recall' leaves the opposition-controlled Legislative Yuan intact, a setback for President Lai's governing party.",
      source: "NPR"
    },
    {
      id: "houthi-aramco",
      category: "SECURITY",
      when: "SAT 25 JUL",
      badges: [{ name: "YEMEN", emblems: ["yemen.png"], country: "887" }, { name: "SAUDI ARABIA", emblems: ["saudi.png"], country: "682" }],
      title: "[[Houthis]] strike [[Saudi Aramco]] facilities",
      location: "Jizan — Yanbu, Saudi Arabia",
      countries: ["887", "682"],
      markers: [
        { lon: 42.55, lat: 16.89, label: "JIZAN" },
        { lon: 38.06, lat: 24.09, label: "YANBU" }
      ],
      summary:
        "Yemen's Iran-aligned Houthis targeted Saudi Aramco facilities in Jizan and Yanbu with ballistic missiles and drones, widening the regional fallout of the US–Iran war. Brent crude has risen 24% since fighting resumed on 8 July.",
      source: "Anadolu Agency"
    },
    {
      id: "sudan-bara",
      category: "SECURITY",
      when: "SAT 25 JUL",
      badges: [{ name: "SUDAN", emblems: ["sudan.png"], country: "729" }],
      title: "Army-aligned forces retake [[Bara]] from [[RSF]]",
      location: "North Kordofan, Sudan",
      countries: ["729"],
      markers: [{ lon: 30.36, lat: 13.7, label: "BARA" }],
      summary:
        "Sudanese army-aligned joint forces under Darfur governor Minni Minnawi reported capturing the town of Bara in North Kordofan from the paramilitary Rapid Support Forces — a gain on a key axis in the war now well into its fourth year.",
      source: "Anadolu Agency"
    },
    {
      id: "kremlin-kazakh-freeze",
      category: "DIPLOMACY",
      when: "SAT 25 JUL",
      badges: [{ name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "[[Kremlin]] rejects [[Kazakh proposal]] to freeze Ukraine war",
      location: "Moscow — Astana",
      countries: ["643", "398"],
      markers: [
        { lon: 37.62, lat: 55.75, label: "MOSCOW" },
        { lon: 71.43, lat: 51.13, label: "ASTANA" }
      ],
      summary:
        "The Kremlin dismissed a proposal from Kazakhstan to 'freeze' the Russia–Ukraine war along current lines, insisting its war aims remain unchanged. The rebuff lands as Romania scrambled an F-16 against a drone in its airspace for the second time in two days.",
      source: "Anadolu Agency"
    },
    {
      id: "china-eu-sanctions",
      category: "DIPLOMACY",
      when: "SAT 25 JUL",
      badges: [{ name: "CHINA", emblems: ["china.svg"], country: "156" }, { name: "EU", emblems: ["eu.svg"], group: "EU", region: [[-11, 35], [31, 65]], anchor: [9, 50] }],
      title: "[[China]] retaliates against [[EU sanctions]]",
      location: "Beijing ↔ Brussels",
      countries: ["156", "EU"],
      markers: [
        { lon: 116.4, lat: 39.9, label: "BEIJING" },
        { lon: 4.35, lat: 50.85, label: "BRUSSELS" }
      ],
      summary:
        "Beijing protested new EU sanctions on Chinese firms and placed 14 EU entities under export controls in retaliation, days after a low-yield EU–China summit. The tit-for-tat deepens the trade rift over critical minerals and China's economic ties to Russia.",
      source: "Anadolu Agency"
    },
    {
      id: "berlin-parade",
      category: "SECURITY",
      when: "SAT 25 JUL",
      badges: [{ name: "GERMANY", emblems: ["germany.png"], country: "276" }],
      title: "Vehicle drives into crowd at [[Berlin parade]]",
      location: "Berlin, Germany",
      countries: ["276"],
      markers: [{ lon: 13.4, lat: 52.52, label: "BERLIN" }],
      summary:
        "A vehicle struck crowds at a parade in Berlin, injuring numerous people. Authorities have not yet stated whether the incident was deliberate; an investigation is under way.",
      source: "Anadolu Agency"
    },
    {
      id: "tour-de-france",
      category: "SPORT",
      when: "SUN 26 JUL",
      badges: [{ name: "SLOVENIA", emblems: ["slovenia.png"], country: "705" }, { name: "FRANCE", emblems: ["france.png"], country: "250" }],
      title: "[[Pogačar]] set to seal record-equalling [[5th Tour de France]]",
      location: "Champs-Élysées, Paris",
      countries: ["705", "250"],
      markers: [{ lon: 2.31, lat: 48.87, label: "PARIS" }],
      summary:
        "Tadej Pogačar rides into Paris today with a six-and-a-half-minute lead, poised to claim a record-equalling fifth Tour de France title. The final stage was shortened from 133 km to 89 km after security personnel were redeployed to fight France's wildfires.",
      source: "Olympics.com"
    }
  ],
  sources: [
    { name: "CNN — Iran war live coverage, Jul 25", url: "https://www.cnn.com/2026/07/25/world/live-news/iran-war-trump" },
    { name: "Al Jazeera — Iran accuses Ukraine over Caspian attack", url: "https://www.aljazeera.com/news/2026/7/25/iran-accuses-ukraine-of-deadly-attack-on-caspian-commercial-vessel" },
    { name: "France 24 — Spain state of emergency, France seeks EU help", url: "https://www.france24.com/en/europe/20260724-spain-declares-state-of-emergency-and-france-seeks-eu-help-as-wildfires-rage" },
    { name: "The Kyiv Independent — war updates", url: "https://kyivindependent.com/" },
    { name: "Anadolu Agency — Morning briefing, Jul 26", url: "https://aa.com.tr/en/world/morning-briefing-july-26-2026/4009451" },
    { name: "Anadolu Agency — Guterres on Syria's territorial integrity", url: "https://aa.com.tr/en/world/any-violation-of-syrias-territorial-integrity-unacceptable-un-chief/4009148" },
    { name: "NPR — Taiwan recall votes", url: "https://www.npr.org/sections/world/" },
    { name: "Olympics.com — Tour de France final stage", url: "https://www.olympics.com/en/news/tour-de-france-2026-21st-stage-26-july-route-map-schedule-watch" }
  ]
};
