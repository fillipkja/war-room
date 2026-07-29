// THE WAR ROOM — Daily Geopolitical Brief data
// Brief compiled for Wednesday, 29 July 2026, from open-source reporting.
// All items are from the past week. Country codes are ISO 3166-1 numeric
// ids matching world-atlas TopoJSON.

window.BRIEF = {
  date: "29//JULY//2026",
  // alliance blocs — a story may list a group key in `countries` to
  // highlight every member in the bloc's colour (EU blue, etc.)
  groups: {
    EU: ["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"],
    NATO: ["008","056","100","124","191","203","208","233","246","250","276","300","348","352","380","428","440","442","470","499","528","578","616","620","642","703","705","724","752","792","807","826","840"],
    ASEAN: ["096","116","360","418","458","104","608","702","764","704"]
  },
  events: [
    {
      id: "iran-jordan-missiles",
      category: "SECURITY",
      when: "TUE 28 JUL",
      badges: [{ name: "IRAN", emblems: ["iran.svg"], country: "364" }, { name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }],
      title: "[[Iran]] fires ballistic missiles at US base in [[Jordan]] — pause punctured",
      location: "Jordan — Iraq",
      countries: ["364", "840", "400", "368"],
      markers: [
        { lon: 35.93, lat: 31.95, label: "AMMAN" },
        { lon: 51.39, lat: 35.69, label: "TEHRAN" },
        { lon: 44.36, lat: 33.31, label: "BAGHDAD" }
      ],
      summary:
        "IRGC forces launched multiple ballistic missiles at a US base in Jordan — Iran's first attack on American forces since Trump paused strikes on Friday. All missiles were intercepted, and the US and Saudi militaries answered with joint precision strikes on Iran-aligned militias in Iraq that CENTCOM says were directed by the IRGC to hit US forces and Saudi energy infrastructure.",
      source: "CNBC"
    },
    {
      id: "hormuz-oil",
      category: "ECONOMY",
      when: "WED 29 JUL",
      badges: [{ name: "IRAN", emblems: ["iran.svg"], country: "364" }, { name: "SAUDI ARABIA", emblems: ["saudi.png"], country: "682" }],
      title: "[[Brent]] rebounds toward $88 as Iran rejects [[Omani Hormuz plan]]",
      location: "Strait of Hormuz",
      countries: ["364", "512", "682"],
      markers: [
        { lon: 56.5, lat: 26.6, label: "STRAIT OF HORMUZ" },
        { lon: 58.38, lat: 23.61, label: "MUSCAT" }
      ],
      summary:
        "Brent climbed more than 4% to near $88 after the intercepted attack, paring a 16% three-session slide that was the steepest since 2020. Tehran rejected Oman's plan to split control of the Strait of Hormuz evenly — the inbound lane 'must be entirely under Iran's control', deputy FM Gharibabadi said — as FM Araghchi discussed the waterway's security with his Saudi and Omani counterparts.",
      source: "Bloomberg"
    },
    {
      id: "trump-meetings",
      category: "DIPLOMACY",
      when: "YESTERDAY",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }, { name: "ISRAEL", emblems: ["israel.svg"], country: "376", anchor: [32.6, 32.3] }],
      title: "Trump hosts [[Zelensky]] and [[Netanyahu]] back-to-back at White House",
      location: "Washington, DC",
      countries: ["840", "804", "376"],
      markers: [{ lon: -77.04, lat: 38.9, label: "WASHINGTON" }],
      summary:
        "Trump met Zelensky and then Netanyahu in separate Oval Office sessions the White House called 'positive and productive'. Zelensky said they discussed licences for Ukrainian production of Patriot interceptors and reinvigorating diplomacy with Moscow; Netanyahu — who called it one of his greatest meetings with Trump — focused on the Lebanon framework agreement and expanding the Abraham Accords.",
      source: "ABC News"
    },
    {
      id: "ukraine-drones",
      category: "SECURITY",
      when: "TUE 28 JUL",
      badges: [{ name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }, { name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "Drone war peaks: Russia claims [[356 downed]]; Kyiv stops 107 of 131",
      location: "Moscow Oblast — Pokrovsk",
      countries: ["804", "643"],
      markers: [
        { lon: 37.62, lat: 55.75, label: "MOSCOW" },
        { lon: 37.18, lat: 48.28, label: "POKROVSK" }
      ],
      summary:
        "Ukrainian drones struck a steel-fabrication plant in Chekhov outside Moscow and blacked out parts of occupied Crimea; Russia's defence ministry claimed 356 drones downed overnight. Ukraine's air defences destroyed 107 of 131 Russian attack drones, while the general staff logged 226 combat clashes in a single day — the heaviest around Pokrovsk.",
      source: "Kyiv Independent"
    },
    {
      id: "cyprus-talks",
      category: "DIPLOMACY",
      when: "WED 29 JUL",
      badges: [{ name: "CYPRUS", emblems: ["cyprus.png"], country: "196" }],
      title: "[[Guterres]] convenes rival [[Cyprus leaders]] in buffer-zone talks today",
      location: "Nicosia, Cyprus",
      countries: ["196"],
      markers: [{ lon: 33.36, lat: 35.17, label: "NICOSIA" }],
      summary:
        "Guterres holds joint talks today with Greek Cypriot leader Christodoulides and Turkish Cypriot leader Erhürman in the UN buffer zone dividing Nicosia — the first visit by a sitting UN chief in 16 years, aimed at reviving negotiations nine years after they collapsed. Erhürman favours a federal settlement but insists on ground rules covering political equality before talks resume.",
      source: "AP"
    },
    {
      id: "sudan-bara",
      category: "SECURITY",
      when: "TUE 28 JUL",
      badges: [{ name: "SUDAN", emblems: ["sudan.png"], country: "729" }],
      title: "Army takes [[Bara]]; Dagalo [['releases the reins']] of RSF fighters",
      location: "North Kordofan, Sudan",
      countries: ["729"],
      markers: [
        { lon: 30.36, lat: 13.7, label: "BARA" },
        { lon: 30.22, lat: 13.18, label: "EL OBEID" }
      ],
      summary:
        "Sudan's army captured the town of Bara in North Kordofan, a second battlefield setback for the RSF in days after losing the Khartoum–El Obeid highway. RSF leader Dagalo responded with a video message 'releasing the reins' of his frontline fighters, and UN rights chief Türk warned a catastrophe is unfolding around El Obeid, citing summary executions, abductions and sexual violence.",
      source: "Al-Monitor"
    },
    {
      id: "europe-wildfires",
      category: "DISASTER",
      when: "WED 29 JUL",
      badges: [{ name: "FRANCE", emblems: ["france.png"], country: "250" }, { name: "SPAIN", emblems: ["spain.svg"], country: "724" }],
      title: "[[4,000 evacuated]] on Atlantic coast as [[new heatwave]] arrives today",
      location: "Gironde, France — Madrid, Spain",
      countries: ["250", "724"],
      markers: [
        { lon: -0.58, lat: 44.84, label: "GIRONDE" },
        { lon: -3.7, lat: 40.42, label: "MADRID" }
      ],
      summary:
        "French authorities cleared nearly 4,000 people from Atlantic-coast tourist sites as returning heat threatens the fragile containment of the vast blaze west of Bordeaux, where 93 firefighters have been injured. The fires have burned some 300,000 acres across France and Spain and displaced roughly 330,000 people; Spain enters its fourth heatwave of the summer with its largest fire on record still burning.",
      source: "NPR"
    },
    {
      id: "pakistan-monsoon",
      category: "DISASTER",
      when: "WED 29 JUL",
      badges: [{ name: "PAKISTAN", emblems: ["pakistan.png"], country: "586" }],
      title: "Fresh [[monsoon spell]] hits Pakistan today; toll rises to [[110]]",
      location: "Khyber Pakhtunkhwa, Pakistan",
      countries: ["586"],
      markers: [
        { lon: 71.52, lat: 34.01, label: "PESHAWAR" },
        { lon: 74.34, lat: 31.55, label: "LAHORE" }
      ],
      summary:
        "A powerful new monsoon spell moves over Pakistan's upper regions from today and is forecast to last until August 5, with the nationwide death toll from rains and flash floods now at 110 since June 26. Khyber Pakhtunkhwa accounts for 55 deaths and Punjab 36, most caused by collapsing houses and roofs.",
      source: "Dawn"
    },
    {
      id: "japan-intel",
      category: "SECURITY",
      when: "THIS WEEK",
      badges: [{ name: "JAPAN", emblems: ["japan.png"], country: "392" }],
      title: "Japan launches first [[central intelligence agency]] since WWII on Friday",
      location: "Tokyo, Japan",
      countries: ["392"],
      markers: [{ lon: 139.69, lat: 35.68, label: "TOKYO" }],
      summary:
        "Japan stands up its National Intelligence Bureau on July 31 — its first centralised espionage agency since World War II, launching with about 700 staff — and PM Takaichi chairs the inaugural National Intelligence Council the same day. The reform converts the Cabinet Intelligence and Research Office into a centralised apparatus amid espionage, cyberattack and foreign-influence concerns focused on China.",
      source: "The Washington Times"
    },
    {
      id: "fujimori-iron-fist",
      category: "ELECTION",
      when: "TUE 28 JUL",
      badges: [{ name: "PERU", emblems: ["peru.png"], country: "604" }],
      title: "President [[Fujimori]] pledges [['iron fist']] on crime in first address",
      location: "Lima, Peru",
      countries: ["604"],
      markers: [{ lon: -77.03, lat: -12.05, label: "LIMA" }],
      summary:
        "Sworn in on Independence Day as Peru's first woman elected president, Keiko Fujimori used her inaugural address to pledge an 'iron fist' against organised crime and extortion. She takes office with a fragmented congress and protests already in the streets, after a runoff decided by fewer than 50,000 votes of 18 million cast.",
      source: "Euronews"
    },
    {
      id: "cwg-100m",
      category: "SPORT",
      when: "TUE 28 JUL",
      badges: [{ name: "CAMEROON", emblems: ["cameroon.png"], country: "120" }, { name: "NEW ZEALAND", emblems: ["newzealand.png"], country: "554" }],
      title: "[[Eseme]] storms to 100m gold in [[9.83]]; Hobbs takes women's title",
      location: "Glasgow, Scotland",
      countries: ["120", "554", "826"],
      markers: [{ lon: -4.25, lat: 55.86, label: "GLASGOW" }],
      summary:
        "Cameroon's Emmanuel Eseme won the Commonwealth men's 100m in a Games-record 9.83s, ahead of Australia's Lachlan Kennedy (9.85, national record) and Nigeria's Kanyinsola Ajayi. New Zealand's Zoe Hobbs led wire-to-wire in the women's final, clocking 10.93 — a national and Oceania record — as the Glasgow Games pass their halfway mark.",
      source: "Olympics.com"
    }
  ],
  sources: [
    { name: "CNBC — Iran launches surprise ballistic missile attack on US forces", url: "https://www.cnbc.com/2026/07/29/us-iran-war-hormuz-centcom.html" },
    { name: "Axios — Iran missile attack on US base in Jordan", url: "https://www.axios.com/2026/07/28/iran-missile-attack-us-base-jordan" },
    { name: "The Times of Israel — liveblog Jul 29: IRGC targets US forces in Jordan", url: "https://www.timesofisrael.com/liveblog-july-29-2026/" },
    { name: "Bloomberg — Oil market news and analysis for July 29", url: "https://www.bloomberg.com/news/articles/2026-07-28/latest-oil-market-news-and-analysis-for-july-29" },
    { name: "ABC News — Netanyahu and Zelenskyy meet separately with Trump", url: "https://abcnews.com/Politics/netanyahu-zelenskyy-push-agendas-white-house-meetings-trump/story?id=135123010" },
    { name: "Foreign Policy — Trump meets Zelensky, Netanyahu at White House", url: "https://foreignpolicy.com/2026/07/28/trump-zelensky-netanyahu-white-house-russia-ukraine-patriots-iran-war-nuclear/" },
    { name: "Kyiv Independent — Moscow Oblast plant struck, Crimea blackout", url: "https://kyivindependent.com/moscow-oblast-industrial-plant-reportedly-struck-by-ukrainian-drones-blackout-in-occupied-crimea/" },
    { name: "Ukrainska Pravda — Ukraine downs 107 of 131 Russian drones", url: "https://www.pravda.com.ua/eng/news/2026/07/28/8046188/" },
    { name: "ABC News — UN chief makes rare Cyprus visit", url: "https://abcnews.com/International/wireStory/chief-makes-rare-cyprus-visit-ease-decades-ethnic-135148176" },
    { name: "Cyprus Mail — Erhürman tells Guterres of will for solution", url: "https://cyprus-mail.com/2026/07/28/erhurman-tells-guterres-of-turkish-cypriots-will-for-solution" },
    { name: "Al-Monitor — Sudan RSF leader 'unleashes' fighters after Kordofan losses", url: "https://www.al-monitor.com/originals/2026/07/sudan-rsf-leader-unleashes-fighters-after-army-gains-kordofan" },
    { name: "NPR — Fire crews race against next heat wave in France and Spain", url: "https://www.npr.org/2026/07/28/g-s1-135828/europe-wildfires" },
    { name: "Dawn — Monsoon deaths cross 100; more rain from July 29", url: "https://www.dawn.com/news/2018500/nationwide-deaths-this-monsoon-cross-100-more-rain-likely-in-countrys-upper-parts-from-july-29" },
    { name: "The Washington Times — Japan to launch new intelligence agency at end of July", url: "https://www.washingtontimes.com/news/2026/jul/24/japan-launch-new-intelligence-agency-intel-oversight-body-end-july/" },
    { name: "Euronews — news bulletin: Fujimori's 'iron fist' pledge", url: "https://www.euronews.com/video/2026/07/27/latest-news-bulletin-july-27th-2026-morning" },
    { name: "Olympics.com — Eseme storms to 100m gold in Games record", url: "https://www.olympics.com/en/news/commonwealth-games-2026-cameroon-s-emmanuel-eseme-storms-to-100m-men-s-gold-in-games-record-time" },
    { name: "1News — Zoe Hobbs wins 100m gold at Commonwealth Games", url: "https://www.1news.co.nz/2026/07/29/wild-gold-for-zoe-hobbs-in-100m-at-commonwealth-games/" }
  ]
};
