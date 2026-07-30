// THE WAR ROOM — Daily Geopolitical Brief data
// Brief compiled for Thursday, 30 July 2026, from open-source reporting.
// All items are from the past week. Country codes are ISO 3166-1 numeric
// ids matching world-atlas TopoJSON.

window.BRIEF = {
  date: "30//JULY//2026",
  // alliance blocs — a story may list a group key in `countries` to
  // highlight every member in the bloc's colour (EU blue, etc.)
  groups: {
    EU: ["040","056","100","191","196","203","208","233","246","250","276","300","348","372","380","428","440","442","470","528","616","620","642","703","705","724","752"],
    NATO: ["008","056","100","124","191","203","208","233","246","250","276","300","348","352","380","428","440","442","470","499","528","578","616","620","642","703","705","724","752","792","807","826","840"],
    ASEAN: ["096","116","360","418","458","104","608","702","764","704"]
  },
  events: [
    {
      id: "us-strikes-iran",
      category: "SECURITY",
      when: "THU 30 JUL",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }, { name: "IRAN", emblems: ["iran.svg"], country: "364" }],
      title: "[[US strikes Iran]] overnight — Trump: [['our turn']] after Jordan attack",
      location: "Bandar Abbas, Iran",
      countries: ["840", "364"],
      markers: [
        { lon: 56.28, lat: 27.18, label: "BANDAR ABBAS" },
        { lon: 51.39, lat: 35.69, label: "TEHRAN" }
      ],
      summary:
        "The US launched fresh strikes on Iran in the early hours of Thursday local time, with blasts reported in the port city of Bandar Abbas and around islands near the Strait of Hormuz. The wave answers Tuesday's intercepted Iranian missile attack on a US base in Jordan; Trump told Fox News Iran is 'going to get a beating' and declared it was 'our turn' as the brief pause for diplomacy collapsed.",
      source: "CNN"
    },
    {
      id: "hormuz-oil",
      category: "ECONOMY",
      when: "WED 29 JUL",
      badges: [{ name: "IRAN", emblems: ["iran.svg"], country: "364" }, { name: "SAUDI ARABIA", emblems: ["saudi.png"], country: "682" }],
      title: "[[Brent]] jumps 7% past $90; Hormuz traffic collapses to [[14 ships]] a day",
      location: "Strait of Hormuz",
      countries: ["364", "682", "512"],
      markers: [
        { lon: 56.5, lat: 26.6, label: "STRAIT OF HORMUZ" },
        { lon: 58.38, lat: 23.61, label: "MUSCAT" }
      ],
      summary:
        "Brent crude leapt more than 7% to $90.66 after Trump vowed retaliation for Iran's attempted attack on US forces. Just 14 commercial ships transited the Strait of Hormuz in 24 hours — against roughly 120 daily crossings before the war — through a chokepoint that normally carries about a fifth of global oil supply.",
      source: "CNN Business"
    },
    {
      id: "kyiv-ryazan",
      category: "SECURITY",
      when: "THU 30 JUL",
      badges: [{ name: "UKRAINE", emblems: ["ukraine.png"], country: "804" }, { name: "RUSSIA", emblems: ["russia.svg"], country: "643", region: [[27, 45], [105, 70]], anchor: [55, 57] }],
      title: "Russian missiles kill [[8 in Kyiv]] after Ukraine burns [[Ryazan refinery]]",
      location: "Kyiv — Ryazan",
      countries: ["804", "643"],
      markers: [
        { lon: 30.52, lat: 50.45, label: "KYIV" },
        { lon: 39.74, lat: 54.63, label: "RYAZAN" }
      ],
      summary:
        "Russian ballistic missiles struck Kyiv on Thursday, killing at least eight people a day after Zelensky warned Moscow the war would 'come at a higher cost'. Ukrainian drones had just set ablaze Rosneft's Ryazan refinery — about 5% of Russia's processing output — plus a Perm refinery and a Rostov export terminal, deepening strikes that have already cut Russian refining capacity by roughly a fifth.",
      source: "Al Jazeera"
    },
    {
      id: "japan-quake",
      category: "DISASTER",
      when: "WED 29 JUL",
      badges: [{ name: "JAPAN", emblems: ["japan.png"], country: "392" }],
      title: "Japan quake toll hits [[18]] as rescuers comb collapsed [[Kumamoto mall]]",
      location: "Kumamoto, Japan",
      countries: ["392"],
      markers: [{ lon: 130.71, lat: 32.8, label: "KUMAMOTO" }],
      summary:
        "The death toll from Tuesday's magnitude-7.1 earthquake in Kyushu rose to 18 as soldiers and rescue workers searched a partially collapsed Aeon shopping mall in Kumamoto, where five died and three remain missing after a suspected gas explosion. The military has mobilised 3,600 personnel and some 300,000 residents were evacuated amid fires and widespread power cuts.",
      source: "NPR"
    },
    {
      id: "iraq-legal-action",
      category: "DIPLOMACY",
      when: "WED 29 JUL",
      badges: [{ name: "IRAQ", emblems: ["iraq.png"], country: "368" }, { name: "SAUDI ARABIA", emblems: ["saudi.png"], country: "682" }],
      title: "Iraq to pursue [[legal action]] against US and Saudi over militia strikes",
      location: "Baghdad, Iraq",
      countries: ["368", "840", "682"],
      markers: [{ lon: 44.36, lat: 33.31, label: "BAGHDAD" }],
      summary:
        "Iraq's prime minister directed the Foreign Ministry to pursue legal action against the United States and Saudi Arabia after their joint strikes on Iran-aligned militia targets killed or injured dozens on Iraqi soil. The move underscores Baghdad's deepening bind as the US–Iran war repeatedly spills across its territory.",
      source: "CNN"
    },
    {
      id: "fed-hold",
      category: "ECONOMY",
      when: "WED 29 JUL",
      badges: [{ name: "USA", emblems: ["usa.svg"], country: "840", region: [[-125, 24], [-66, 50]], anchor: [-98.5, 39.8] }],
      title: "Divided Fed [[holds rates]] steady — three dissenters wanted a [[hike]]",
      location: "Washington, DC",
      countries: ["840"],
      markers: [{ lon: -77.04, lat: 38.9, label: "WASHINGTON" }],
      summary:
        "The Federal Reserve held its benchmark rate at 3.50–3.75% for a fifth straight meeting, but the 9–3 vote saw regional presidents Hammack, Kashkari and Logan dissent in favour of a quarter-point increase. The statement flagged inflation still above the 2% goal after five-plus years, partly on energy supply shocks from the Middle East conflict, even as activity expands at a solid pace.",
      source: "CNBC"
    },
    {
      id: "un-sg-straw-poll",
      category: "DIPLOMACY",
      when: "THU 30 JUL",
      badges: [{ name: "ARGENTINA", emblems: ["argentina.png"], country: "032" }],
      title: "Security Council holds first [[straw poll]] on next [[UN secretary-general]]",
      location: "UN HQ, New York",
      countries: ["032", "152", "188", "218", "328", "686", "800"],
      markers: [{ lon: -73.97, lat: 40.75, label: "NEW YORK" }],
      summary:
        "The UN Security Council holds its first closed-door straw poll today on the seven candidates to succeed António Guterres, who steps down on December 31 after a decade. Contenders from Argentina, Chile, Costa Rica, Ecuador, Guyana, Senegal and Uganda — including IAEA chief Rafael Grossi and former Chilean president Michelle Bachelet — will learn whether members 'encourage' or 'discourage' their candidacies.",
      source: "NPR"
    },
    {
      id: "cyprus-5plus1",
      category: "DIPLOMACY",
      when: "WED 29 JUL",
      badges: [{ name: "CYPRUS", emblems: ["cyprus.png"], country: "196" }],
      title: "Guterres to convene [[5+1 Cyprus talks]] — guarantor powers on board",
      location: "Nicosia, Cyprus",
      countries: ["196", "300", "792", "826"],
      markers: [{ lon: 33.36, lat: 35.17, label: "NICOSIA" }],
      summary:
        "Closing his first official visit to Cyprus, Guterres announced he will convene an expanded 5+1 meeting on the island's division, with both leaders and guarantor powers Greece, Turkey and the UK agreeing to move toward new negotiations. No date was set: the UN chief said the format needs 'adequate preparation', including progress on confidence-building measures between the two communities.",
      source: "Euronews"
    },
    {
      id: "taiwan-squeeze",
      category: "SECURITY",
      when: "WED 29 JUL",
      badges: [{ name: "CHINA", emblems: ["china.svg"], country: "156" }, { name: "TAIWAN", emblems: ["taiwan.png"], country: "158" }],
      title: "China's coastguard [['squeeze']] east of Taiwan stokes [[blockade]] fears",
      location: "Philippine Sea — Taiwan",
      countries: ["156", "158"],
      markers: [{ lon: 121.56, lat: 25.03, label: "TAIPEI" }],
      summary:
        "China's coastguard and civilian fleet have expanded patrols in waters east of Taiwan through June and July, positioning vessels on the island's Pacific flank in what analysts warn may rehearse a containment strategy to cut Taiwan off from outside trade and assistance. Taipei says the pattern amounts to a creeping 'squeeze' rather than an exercise-driven surge.",
      source: "Al Jazeera"
    },
    {
      id: "ebola-drc",
      category: "HEALTH",
      when: "THIS WEEK",
      badges: [{ name: "DR CONGO", emblems: ["drc.svg"], country: "180" }, { name: "UGANDA", emblems: ["uganda.png"], country: "800" }],
      title: "DR Congo [[Ebola]] outbreak now [[third-largest]] ever; UN names crisis chief",
      location: "Ituri, DR Congo — Uganda",
      countries: ["180", "800"],
      markers: [
        { lon: 30.25, lat: 1.56, label: "BUNIA" },
        { lon: 32.58, lat: 0.32, label: "KAMPALA" }
      ],
      summary:
        "DR Congo's Bundibugyo-strain Ebola epidemic has reached 3,262 confirmed cases and 1,437 deaths, making it the third-largest outbreak on record and the fastest-spreading, with WHO warning it is outpacing the response. The UN named veteran official Julien Harneis to coordinate the effort as Oxford begins Phase 1 vaccine trials and UNICEF says the gap is funding, not solutions.",
      source: "UN News"
    },
    {
      id: "spain-wildfires",
      category: "DISASTER",
      when: "THU 30 JUL",
      badges: [{ name: "SPAIN", emblems: ["spain.svg"], country: "724" }, { name: "FRANCE", emblems: ["france.png"], country: "250" }],
      title: "[[Castellón]] blaze out of control as Madrid evacuees [[return home]]",
      location: "Castellón, Spain — Gironde, France",
      countries: ["724", "250"],
      markers: [
        { lon: -0.05, lat: 39.99, label: "CASTELLON" },
        { lon: -0.58, lat: 44.84, label: "GIRONDE" }
      ],
      summary:
        "Spain's Castellón fire is still out of control after burning nearly 25,000 acres and forcing more than 10,000 people out, even as the Madrid-region blaze stabilised and tens of thousands returned home. With some 330,000 displaced across France and Spain, crews race a new heatwave pushing temperatures toward 35°C over the fragile containment lines west of Bordeaux.",
      source: "NPR"
    },
    {
      id: "cwg-day7",
      category: "SPORT",
      when: "THU 30 JUL",
      badges: [{ name: "AUSTRALIA", emblems: ["australia.png"], country: "036" }, { name: "INDIA", emblems: ["india.svg"], country: "356" }],
      title: "[[Australia hits 47 golds]] at Glasgow; [[Chopra]] opens javelin defence",
      location: "Glasgow, Scotland",
      countries: ["036", "356", "826"],
      markers: [{ lon: -4.25, lat: 55.86, label: "GLASGOW" }],
      summary:
        "Australia leads the Commonwealth Games medal table with 47 golds — 37 of them from the pool — as Glasgow enters Day 7 of competition. India's Neeraj Chopra began his bid for a second Games javelin title in qualifying, while decathlete Tejaswin Shankar returned from injury; the Games run through August 2.",
      source: "Olympics.com"
    }
  ],
  sources: [
    { name: "CNN — July 29–30 live: Trump says it's 'our turn', US completes Iran strikes", url: "https://www.cnn.com/2026/07/29/world/live-news/iran-trump-news" },
    { name: "Bloomberg — Trump tells Fox News US will be 'hitting Iran hard'", url: "https://www.bloomberg.com/news/articles/2026-07-29/trump-tells-fox-news-us-will-be-hitting-iran-hard-as-war-resumes" },
    { name: "CNN Business — Brent jumps 7% on Trump retaliation vow", url: "https://www.cnn.com/2026/07/29/world/live-news/iran-trump-news" },
    { name: "Al Jazeera — Russian ballistic missile strikes on Kyiv kill at least 8", url: "https://www.aljazeera.com/news/2026/7/30/russia-ballistic-missile-strikes-on-kyiv-come-after-zelenskyys-warning" },
    { name: "Kyiv Independent — Ryazan refinery, Wildberries warehouse burn after drone strikes", url: "https://kyivindependent.com/wildberries-warehouse-major-oil-refinery-burn-as-ukraine-strikes-russias-ryazan-oblast-media-reports/" },
    { name: "NPR — Death toll rises to 18 as rescuers comb quake rubble in Japan", url: "https://www.npr.org/2026/07/29/nx-s1-5911613/japan-earthquake-updates" },
    { name: "France 24 — Multiple deaths in Japan mall collapse after 7.1-magnitude quake", url: "https://www.france24.com/en/asia-pacific/20260728-multiple-deaths-in-japan-mall-collapse-after-7-1-magnitude-earthquake" },
    { name: "CNBC — Divided Fed holds interest rates steady", url: "https://www.cnbc.com/2026/07/29/fed-rate-decision-july-2026.html" },
    { name: "CNN Business — Fed holds after cliffhanger meeting, three dissents", url: "https://www.cnn.com/2026/07/29/business/live-news/federal-reserve-interest-rate-07-29-26" },
    { name: "NPR — The race is on for the next United Nations secretary general", url: "https://www.krwg.org/national-news/2026-07-29/the-race-is-on-for-the-next-united-nations-secretary-general" },
    { name: "The Jerusalem Post — UN Security Council begins straw polls for next secretary-general", url: "https://www.jpost.com/international/article-903957" },
    { name: "Euronews — Guterres to convene new talks on ending Cyprus division", url: "https://www.euronews.com/my-europe/2026/07/29/un-chief-guterres-to-convene-new-talks-on-ending-cyprus-decades-long-conflict" },
    { name: "Bloomberg — Cyprus leaders accept UN plan for new talks", url: "https://www.bloomberg.com/news/articles/2026-07-29/cyprus-leaders-accept-un-plan-for-new-talks-over-divided-island" },
    { name: "Al Jazeera — China puts the 'squeeze' on Taiwan with new maritime patrols", url: "https://www.aljazeera.com/news/2026/7/29/china-puts-squeeze-on-taiwan-with-new-maritime-patrols" },
    { name: "UN News — WHO warns DR Congo Ebola outbreak is outpacing response", url: "https://news.un.org/en/story/2026/07/1167959" },
    { name: "Democracy Now — Headlines for July 29, 2026", url: "https://www.democracynow.org/2026/7/29/headlines" },
    { name: "NPR — New heatwave threatens France's and Spain's fight to contain wildfires", url: "https://www.npr.org/2026/07/29/g-s1-136057/france-wildfires" },
    { name: "Olympics.com — Commonwealth Games 2026 live, July 30: Day 7 updates", url: "https://www.olympics.com/en/news/commonwealth-games-2026-glasgow-live-results-scores-updates-india-july-30" },
    { name: "Man of Many — Australia's gold medals at Glasgow 2026", url: "https://manofmany.com/entertainment/sport/australia-gold-medals-commonwealth-games-2026-glasgow" }
  ]
};
