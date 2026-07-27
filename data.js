// THE WAR ROOM — Daily Geopolitical Brief data
// Brief compiled for Monday, 27 July 2026, from open-source reporting.
// All items are from the past week. Country codes are ISO 3166-1 numeric
// ids matching world-atlas TopoJSON.

window.BRIEF = {
  date: "27//JULY//2026",
  // alliance blocs — a story may list a group key in `countries` to
  // highlight every member in the bloc's colour (EU blue, etc.)
  groups: {
    EU: ["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"],
    NATO: ["008","056","100","124","191","203","208","233","246","250","276","300","348","352","380","428","440","442","470","499","528","578","616","620","642","703","705","724","752","792","807","826","840"],
    ASEAN: ["096","116","360","418","458","104","608","702","764","704"]
  },
  events: [
    {
      id: "netanyahu-washington",
      category: "DIPLOMACY",
      when: "MON 27 JUL",
      badges: [{ name: "ISRAEL", emblems: ["israel.svg"], country: "376", anchor: [32.6, 32.3] }, { name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }],
      title: "[[Netanyahu]] flies to Washington for [[Trump talks]] on Iran",
      location: "Jerusalem — Washington",
      countries: ["376", "840"],
      markers: [
        { lon: 35.21, lat: 31.77, label: "JERUSALEM" },
        { lon: -77.04, lat: 38.9, label: "WASHINGTON" }
      ],
      summary:
        "Prime Minister Netanyahu departs for Washington today ahead of a Tuesday White House meeting with President Trump — his first official visit since the war with Iran began. Iran's nuclear and missile programmes top the agenda, alongside Gaza security and Hamas disarmament. Netanyahu convened his security cabinet before leaving and will also attend the funeral of Sen. Lindsey Graham.",
      source: "The Times of Israel"
    },
    {
      id: "us-iran-talks",
      category: "SECURITY",
      when: "SUN 26 JUL",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "IRAN", emblems: ["iran.svg"], country: "364" }],
      title: "[[US–Iran]] pause holds; talks snag on [[Hormuz control]]",
      location: "Tehran — Strait of Hormuz",
      countries: ["840", "364"],
      markers: [
        { lon: 51.39, lat: 35.69, label: "TEHRAN" },
        { lon: 56.25, lat: 26.6, label: "STRAIT OF HORMUZ" }
      ],
      summary:
        "No new US strikes on Iran for a second straight night after Trump ordered a halt, with the president saying Tehran is 'getting more serious' about a deal — a claim Iranian military officials publicly contradicted. Talks are snagged on Iran's insistence on keeping the lead role in managing the Strait of Hormuz and charging a 'service fee' for transit, while bipartisan criticism of the war's costs grows in Congress.",
      source: "Iran International"
    },
    {
      id: "gaza-stabilization-force",
      category: "DIPLOMACY",
      when: "SUN 26 JUL",
      badges: [{ name: "ISRAEL", emblems: ["israel.svg"], country: "376", anchor: [32.6, 32.3] }, { name: "PALESTINE", emblems: ["palestine.svg"], country: "275", anchor: [34.45, 31.5] }],
      title: "Israel approves [[international force]] for [[Gaza]]",
      location: "Gaza Strip",
      countries: ["376", "275"],
      markers: [
        { lon: 34.47, lat: 31.5, label: "GAZA" },
        { lon: 34.25, lat: 31.29, label: "RAFAH" }
      ],
      summary:
        "Israel's security cabinet approved the legal framework for a 200-member International Stabilization Force — drawn from countries including Uganda and Morocco — to deploy in Gaza areas beyond Israeli control. A pilot reconstruction zone in Rafah's Tal as-Sultan district would house up to 50,000 screened, displaced Palestinians, as Hamas continues to refuse disarmament.",
      source: "Al Jazeera"
    },
    {
      id: "west-bank-crackdown",
      category: "SECURITY",
      when: "SUN 26 JUL",
      badges: [{ name: "ISRAEL", emblems: ["israel.svg"], country: "376", anchor: [32.6, 32.3] }, { name: "PALESTINE", emblems: ["palestine.svg"], country: "275", anchor: [38.1, 31.4] }],
      title: "[[West Bank crackdown]] intensifies; 70 detained, [[Nablus hospital]] raided",
      location: "Nablus, West Bank",
      countries: ["376", "275"],
      markers: [{ lon: 35.26, lat: 32.22, label: "NABLUS" }],
      summary:
        "Israel's wide-scale West Bank operation intensified Sunday, with more than 70 people detained overnight, over 300 locations searched and troops raiding a Nablus hospital. The crackdown follows Friday's clash near the village of Tal that left four Palestinians and two Israeli soldiers dead, with settler violence surging alongside the military sweep.",
      source: "Al Jazeera"
    },
    {
      id: "kyiv-missiles",
      category: "SECURITY",
      when: "SUN 26 JUL",
      badges: [{ name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }, { name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "[[Ballistic missiles]] hit Kyiv; Zelensky warns of new [[Russian mobilization]]",
      location: "Kyiv, Ukraine",
      countries: ["804", "643"],
      markers: [{ lon: 30.52, lat: 50.45, label: "KYIV" }],
      summary:
        "Russia bombarded Kyiv with ballistic missiles overnight, setting fire to an 18-storey residential building in the Shevchenkivskyi district; attacks across Ukraine killed at least seven civilians and injured 58 in a day. Zelensky, citing intelligence, warned Putin is preparing to expand mobilization as Russian losses outpace recruitment, and that Moscow wants 30,000 more North Korean troops.",
      source: "The Kyiv Independent"
    },
    {
      id: "europe-wildfires",
      category: "DISASTER",
      when: "SUN 26 JUL",
      badges: [{ name: "FRANCE", emblems: ["france.png"], country: "250" }, { name: "SPAIN", emblems: ["spain.svg"], country: "724" }],
      title: "[[Wildfires]]: 50,000 more flee overnight as [[Germany sends aid]]",
      location: "Gironde, France — Madrid, Spain",
      countries: ["250", "724"],
      markers: [
        { lon: -1.08, lat: 45.0, label: "LACANAU" },
        { lon: -3.7, lat: 40.42, label: "MADRID" }
      ],
      summary:
        "Around 50,000 people were evacuated overnight into Sunday as fires burned near Lacanau in southwestern France, pushing total evacuations in France and Spain past 267,000. The blaze near Madrid remains beyond containment after ravaging some 10,000 hectares, and Germany is sending helicopters, an A400 aircraft and rescue crews to reinforce French firefighters.",
      source: "CNN"
    },
    {
      id: "typhoon-noul",
      category: "DISASTER",
      when: "SUN 26 JUL",
      badges: [{ name: "CHINA", emblems: ["china.svg"], country: "156" }, { name: "PHILIPPINES", emblems: ["philippines.png"], country: "608" }],
      title: "[[Typhoon Noul]] slams southern China; [[801,000 relocated]]",
      location: "Guangdong, China",
      countries: ["156", "608"],
      markers: [
        { lon: 114.42, lat: 23.11, label: "HUIZHOU" },
        { lon: 114.17, lat: 22.32, label: "HONG KONG" }
      ],
      summary:
        "Typhoon Noul, the strongest to make landfall in China this year, struck Huidong County in Guangdong before weakening to a tropical storm as it moved inland. More than 801,000 people were relocated in the province, around 350 flights were cancelled in Hong Kong, and at least three people died in flooding as the storm crossed the Philippines.",
      source: "AP"
    },
    {
      id: "brent-slide",
      category: "ECONOMY",
      when: "SUN 26 JUL",
      badges: [{ name: "IRAN", emblems: ["iran.svg"], country: "364" }, { name: "SAUDI ARABIA", emblems: ["saudi.png"], country: "682" }],
      title: "[[Brent]] slides 7.6% to $91 as [[strike pause]] holds",
      location: "Strait of Hormuz — Bab al-Mandeb",
      countries: ["364", "682"],
      markers: [
        { lon: 56.25, lat: 26.6, label: "STRAIT OF HORMUZ" },
        { lon: 43.33, lat: 12.58, label: "BAB AL-MANDEB" }
      ],
      summary:
        "Brent crude fell 7.6% to $90.95 on Sunday as the US–Iran strike pause held, though it remains up roughly 10% on the week. The Strait of Hormuz — carrying some 13 million barrels a day, a fifth of global consumption — stays effectively closed in what the IEA calls the largest supply disruption in oil market history, while the Houthi blockade of Saudi Arabia keeps Bab al-Mandeb at risk.",
      source: "Trading Economics"
    },
    {
      id: "peru-fujimori",
      category: "ELECTION",
      when: "TUE 28 JUL",
      badges: [{ name: "PERU", emblems: ["peru.png"], country: "604" }],
      title: "[[Keiko Fujimori]] to be sworn in as [[Peru's president]]",
      location: "Lima, Peru",
      countries: ["604"],
      markers: [{ lon: -77.03, lat: -12.05, label: "LIMA" }],
      summary:
        "Keiko Fujimori will take the oath of office in Lima tomorrow after winning July's runoff by just 49,641 votes, her fourth bid for the presidency. Spain's King Felipe VI, Chile's José Antonio Kast and a US delegation led by Deputy Secretary of State Christopher Landau are attending; her Fuerza Popular party captured the Senate presidency on Sunday.",
      source: "The Washington Times"
    },
    {
      id: "sudan-el-obeid",
      category: "SECURITY",
      when: "SUN 26 JUL",
      badges: [{ name: "SUDAN", emblems: ["sudan.png"], country: "729" }],
      title: "Army gains ease [[El Obeid siege]]; EU urges [[RSF terror listing]]",
      location: "North Kordofan, Sudan",
      countries: ["729"],
      markers: [
        { lon: 30.22, lat: 13.18, label: "EL OBEID" },
        { lon: 30.36, lat: 13.7, label: "BARA" }
      ],
      summary:
        "Sudan's army said it retook Bara and four nearby villages after fierce fighting, easing RSF pressure on besieged El Obeid, where some 500,000 people — including 105,000 displaced — are trapped with nowhere to flee. The European Parliament called for the RSF to be designated a terrorist organisation over the siege.",
      source: "The National"
    },
    {
      id: "berlin-suspect",
      category: "SECURITY",
      when: "SUN 26 JUL",
      badges: [{ name: "GERMANY", emblems: ["germany.png"], country: "276" }],
      title: "[[Berlin Pride attack]] suspect shot dead in [[Spandau]]",
      location: "Berlin, Germany",
      countries: ["276"],
      markers: [{ lon: 13.4, lat: 52.52, label: "BERLIN" }],
      summary:
        "The van attack near Berlin's Christopher Street Day Pride celebration killed one person and injured at least 29. Police found the 21-year-old suspect, reported to have Islamist extremist ties, in a Spandau garden about 20 hours later and shot him dead when he charged officers with a blade; Chancellor Merz vowed the 'abhorrent act' would be fully investigated.",
      source: "The Washington Post"
    },
    {
      id: "tour-de-france",
      category: "SPORT",
      when: "SUN 26 JUL",
      badges: [{ name: "SLOVENIA", emblems: ["slovenia.png"], country: "705" }, { name: "FRANCE", emblems: ["france.png"], country: "250" }],
      title: "[[Pogačar]] seals record-equalling [[5th Tour de France]]",
      location: "Champs-Élysées, Paris",
      countries: ["705", "250"],
      markers: [{ lon: 2.31, lat: 48.87, label: "PARIS" }],
      summary:
        "Tadej Pogačar won his fifth Tour de France in Paris, 6 minutes 26 seconds ahead of Remco Evenepoel, joining Anquetil, Merckx, Hinault and Induráin as the race's most successful riders. The final stage was shortened to 88.7 km after security personnel were redeployed to fight the wildfires; 19-year-old Frenchman Paul Seixas sealed a stunning fourth overall.",
      source: "France 24"
    }
  ],
  sources: [
    { name: "The Times of Israel — liveblog, Jul 26", url: "https://www.timesofisrael.com/liveblog-july-26-2026/" },
    { name: "Iran International — war live blog", url: "https://www.iranintl.com/en/liveblog/202607245785" },
    { name: "Al Jazeera — Israel nods to international stabilisation force in Gaza", url: "https://www.aljazeera.com/news/2026/7/26/israeli-government-nods-to-international-stabilisation-force-in-gaza" },
    { name: "Al Jazeera — West Bank crackdown intensifies", url: "https://www.aljazeera.com/news/2026/7/26/israeli-crackdown-in-occupied-west-bank-intensifies-settlers-cause-mayhem" },
    { name: "The Kyiv Independent — Kyiv hit by ballistic missiles", url: "https://kyivindependent.com/kyiv-attack-july-26-2026/" },
    { name: "CNN — France and Spain wildfire evacuations", url: "https://www.cnn.com/2026/07/25/world/live-news/france-spain-wildfires-evacuations" },
    { name: "AP — Typhoon Noul makes landfall in southern China", url: "https://www.washingtontimes.com/news/2026/jul/26/making-landfall-typhoon-noul-weakens-brings-heavy-rain-southern-china/" },
    { name: "Trading Economics — Brent crude", url: "https://tradingeconomics.com/commodity/brent-crude-oil" },
    { name: "The Washington Times — Fujimori party wins Senate presidency ahead of inauguration", url: "https://www.washingtontimes.com/news/2026/jul/26/keiko-fujimoris-party-wins-senate-presidency-peru-ahead-presidential/" },
    { name: "The National — Sudan army seizes Bara, easing pressure on El Obeid", url: "https://www.thenationalnews.com/news/mena/2026/07/26/sudans-army-seizes-town-in-kordofan-easing-pressure-on-besieged-al-obeid/" },
    { name: "The Washington Post — Berlin Pride attack suspect killed", url: "https://www.washingtonpost.com/world/2026/07/26/berlin-pride-attack-investigated-terrorism-with-suspect-large/" },
    { name: "France 24 — Pogačar wins fifth Tour de France", url: "https://www.france24.com/en/sport/20260726-pogacar-wins-fifth-tour-de-france-as-teen-seixas-seals-stunning-fourth-place" }
  ]
};
