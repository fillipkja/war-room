// THE WAR ROOM — Daily Geopolitical Brief data
// Brief compiled for Saturday, 25 July 2026, from open-source reporting.
// All items are from the past week. Country codes are ISO 3166-1 numeric
// ids matching world-atlas TopoJSON.

window.BRIEF = {
  date: "25//JULY//2026",
  // alliance blocs — a story may list a group key in `countries` to
  // highlight every member in the bloc's colour (EU blue, etc.)
  groups: {
    EU: ["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"],
    NATO: ["008","056","100","124","191","203","208","233","246","250","276","300","348","352","380","428","440","442","470","499","528","578","616","620","642","703","705","724","752","792","807","826","840"],
    ASEAN: ["096","116","360","418","458","104","608","702","764","704"]
  },
  events: [
    {
      id: "us-iran",
      category: "SECURITY",
      when: "FRI 24 JUL",
      badges: [{ name: "IRAN", emblems: ["iran.svg"], country: "364" }],
      title: "[[US]] strikes [[Iran]] for 13th straight night",
      location: "Iran — Strait of Hormuz",
      countries: ["364"],
      markers: [
        { lon: 51.39, lat: 35.69, label: "TEHRAN" },
        { lon: 56.5, lat: 26.6, label: "STRAIT OF HORMUZ" }
      ],
      summary:
        "The US military pounded Iranian targets for a thirteenth consecutive night after Tehran broke the ceasefire and attacked shipping in the Strait of Hormuz. President Trump said Friday his exit strategy could come through continued military action or a diplomatic deal.",
      source: "CNN"
    },
    {
      id: "world-cup",
      category: "SPORT",
      when: "SUN 19 JUL",
      badges: [{ name: "SPAIN", emblems: ["spain.svg"], country: "724" }, { name: "ARGENTINA", emblems: ["argentina.png"], country: "032" }],
      title: "[[Spain]] wins [[2026 World Cup]]",
      location: "MetLife Stadium, New Jersey",
      countries: ["724", "032"],
      markers: [{ lon: -74.07, lat: 40.81, label: "METLIFE STADIUM" }],
      summary:
        "Spain defeated Argentina 1–0 in extra time Sunday, Ferran Torres scoring the 106th-minute winner at MetLife Stadium. La Roja outshot Argentina 20–3 to seal a second world title in an unbeaten campaign, denying Messi's side back-to-back championships.",
      source: "ESPN"
    },
    {
      id: "west-bank",
      category: "SECURITY",
      when: "FRI 24 JUL",
      badges: [{ name: "ISRAEL", emblems: ["israel.svg"], country: "376", anchor: [32.6, 32.3] }, { name: "PALESTINE", emblems: ["palestine.svg"], country: "275", anchor: [38.1, 31.4] }],
      title: "[[IDF]] launches major [[West Bank]] crackdown",
      location: "Nablus, West Bank",
      countries: ["376", "275"],
      markers: [{ lon: 35.26, lat: 32.22, label: "NABLUS" }],
      summary:
        "The Israeli military began a major crackdown across the West Bank after a settler attack on a town near Nablus left four Palestinians and two Israeli soldiers dead, sharply raising tensions across the territory.",
      source: "Foreign Exchanges"
    },
    {
      id: "ebola-drc",
      category: "HEALTH",
      when: "FRI 24 JUL",
      badges: [{ name: "DR CONGO", emblems: ["drc.svg"], country: "180" }],
      title: "[[Congo Ebola outbreak]] fastest-growing ever recorded",
      location: "Democratic Republic of the Congo",
      countries: ["180"],
      markers: [{ lon: 15.31, lat: -4.32, label: "KINSHASA" }],
      summary:
        "The Ebola outbreak in the Democratic Republic of the Congo is now the fastest-growing ever recorded, health authorities warned, as response teams race to contain transmission.",
      source: "NPR"
    },
    {
      id: "rubio-lavrov",
      category: "DIPLOMACY",
      when: "THU 23 JUL",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "[[Rubio]] meets [[Lavrov]] in Manila",
      location: "Pasay, Metro Manila",
      countries: ["840", "643"],
      markers: [{ lon: 120.98, lat: 14.55, label: "MANILA" }],
      summary:
        "US Secretary of State Marco Rubio met Russian Foreign Minister Sergey Lavrov in Pasay, Metro Manila on Thursday — a rare direct Washington–Moscow channel amid the Ukraine war and the widening US–Iran confrontation.",
      source: "Democracy Now!"
    },
    {
      id: "india-wangchuk",
      category: "UNREST",
      when: "FRI 24 JUL",
      badges: [{ name: "INDIA", emblems: ["india.svg"], country: "356" }],
      title: "[[Wangchuk]] ends 26-day hunger strike",
      location: "Ladakh, India",
      countries: ["356"],
      markers: [{ lon: 77.58, lat: 34.16, label: "LEH, LADAKH" }],
      summary:
        "Indian activist Sonam Wangchuk ended a 26-day hunger strike on Friday. The protest helped galvanize a youth movement that has become one of India's largest protest waves in recent years.",
      source: "NPR"
    },
    {
      id: "eu-china",
      category: "DIPLOMACY",
      when: "THIS WEEK",
      badges: [{ name: "EU", emblems: ["eu.svg"], group: "EU", region: [[-11, 35], [31, 65]], anchor: [9, 50] }, { name: "CHINA", emblems: ["china.svg"], country: "156" }],
      title: "[[EU–China Summit]] held amid trade friction",
      location: "European Union ↔ China",
      countries: ["EU", "156"],
      markers: [
        { lon: 4.35, lat: 50.85, label: "BRUSSELS" },
        { lon: 116.4, lat: 39.9, label: "BEIJING" }
      ],
      summary:
        "EU and Chinese leadership met this week for the EU–China Summit. Talks centred on trade imbalances, export controls on critical minerals, and China's economic relationship with Russia. Limited deliverables expected as the structural rivalry persists.",
      source: "TSG Global Monitor"
    },
    {
      id: "us-uk",
      category: "DIPLOMACY",
      when: "THIS WEEK",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "UK", emblems: ["uk.png"], country: "826" }],
      title: "[[Trump]] hosts UK PM [[Starmer]]",
      location: "United States ↔ United Kingdom",
      countries: ["840", "826"],
      markers: [
        { lon: -77.04, lat: 38.9, label: "WASHINGTON" },
        { lon: -0.13, lat: 51.5, label: "LONDON" }
      ],
      summary:
        "President Trump met UK Prime Minister Keir Starmer this week. The agenda spanned the bilateral trade arrangement, Ukraine coordination, and Middle East de-escalation as the US–Iran conflict continues.",
      source: "TSG Global Monitor"
    },
    {
      id: "us-philippines",
      category: "DIPLOMACY",
      when: "WED 22 JUL",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "PHILIPPINES", emblems: ["philippines.png"], country: "608" }],
      title: "[[Marcos Jr.]] visits [[Washington]]",
      location: "United States ↔ Philippines",
      countries: ["840", "608"],
      markers: [
        { lon: -77.04, lat: 38.9, label: "WASHINGTON" },
        { lon: 120.98, lat: 14.6, label: "MANILA" }
      ],
      summary:
        "Philippine President Ferdinand Marcos Jr. met President Trump in Washington. Discussions covered tariff terms and deepening the security alliance against the backdrop of South China Sea tensions.",
      source: "TSG Global Monitor"
    },
    {
      id: "taiwan-recall",
      category: "ELECTION",
      when: "THIS WEEK",
      badges: [{ name: "TAIWAN", emblems: ["taiwan.png"], country: "158" }],
      title: "[[Taiwan]] holds mass [[recall votes]]",
      location: "Taiwan",
      countries: ["158"],
      markers: [{ lon: 121.56, lat: 25.03, label: "TAIPEI" }],
      summary:
        "Taiwanese voters cast ballots in an unprecedented wave of recall votes targeting sitting legislators — a contest that could shift the balance of the Legislative Yuan and the trajectory of cross-strait policy.",
      source: "TSG Global Monitor"
    },
    {
      id: "nicaragua-ortega",
      category: "LEADERSHIP",
      when: "THIS WEEK",
      badges: [{ name: "NICARAGUA", emblems: ["nicaragua.svg"], country: "558" }],
      title: "[[Ortega]] moves to abolish [[Nicaraguan elections]]",
      location: "Managua, Nicaragua",
      countries: ["558"],
      markers: [{ lon: -86.25, lat: 12.13, label: "MANAGUA" }],
      summary:
        "President Daniel Ortega announced his intent to abolish national elections — the most explicit step yet in Nicaragua's consolidation into single-family authoritarian rule. Deeper regional isolation and sanctions pressure expected.",
      source: "FDD Overnight Brief"
    },
    {
      id: "hamas-alhayya",
      category: "LEADERSHIP",
      when: "THIS WEEK",
      badges: [{ name: "HAMAS", emblems: ["palestine.svg"], country: "275", anchor: [34.45, 31.5] }],
      title: "[[Hamas]] elects [[Khalil al-Hayya]] as political chief",
      location: "Gaza — Doha, Qatar",
      countries: ["275", "634"],
      markers: [
        { lon: 34.47, lat: 31.5, label: "GAZA" },
        { lon: 51.53, lat: 25.29, label: "DOHA" }
      ],
      summary:
        "Hamas announced Khalil al-Hayya, its Doha-based lead negotiator, as new political chief. The selection consolidates leadership around the external, negotiation-facing wing of the movement.",
      source: "FDD Overnight Brief"
    },
    {
      id: "saotome-election",
      category: "ELECTION",
      when: "SUN 19 JUL",
      badges: [{ name: "S\u00c3O TOM\u00c9", emblems: ["saotome.png"], country: "678" }],
      title: "[[Vila Nova]] re-elected in [[São Tomé and Príncipe]]",
      location: "São Tomé and Príncipe",
      countries: ["678"],
      markers: [{ lon: 6.73, lat: 0.34, label: "SÃO TOMÉ" }],
      summary:
        "President Carlos Vila Nova secured a second five-year term following Sunday's general election — a continuity result in the Gulf of Guinea island state, courted by both Western and Chinese port investment.",
      source: "TSG Global Monitor"
    }
  ],
  sources: [
    { name: "CNN — Iran war live coverage, Jul 24", url: "https://www.cnn.com/2026/07/24/world/live-news/iran-war-trump" },
    { name: "ESPN — 2026 World Cup final", url: "https://www.espn.com/soccer/story/_/id/49403084/2026-world-cup-final-spain-argentina-score-ferran-torres" },
    { name: "NPR — World headlines", url: "https://www.npr.org/sections/world/" },
    { name: "Foreign Exchanges — World roundup Jul 24", url: "https://www.foreignexchanges.news/p/world-roundup-july-24-2026" },
    { name: "Democracy Now! — Headlines Jul 24", url: "https://www.democracynow.org/2026/7/24/headlines" },
    { name: "TSG Global Monitor — Week Ahead Jul 21–27", url: "https://scowcroft.substack.com/p/geopolitical-week-ahead-july-21-27" },
    { name: "FDD Overnight Brief — Jul 21", url: "https://www.fdd.org/overnight-brief/july-21-2026/" }
  ]
};
