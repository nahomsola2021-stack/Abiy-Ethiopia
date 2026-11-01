import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  // ==========================================
  // NORTHERN ETHIOPIA
  // ==========================================
  {
    id: 'dest-axum',
    slug: 'axum-ancient-kingdom',
    name: 'Axum Ancient Kingdom',
    tagline: 'Cradle of Ethiopian Civilization & Ancient Obelisks',
    region: 'Northern Ethiopia (Tigray)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1784104681/jpbkoul9wg9poi9uts1w.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393452/prfbzkc9tvzvy2n09dom.jpg',
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/k0effr5jiwfjhegsa9xc.jpg'
    ],
    shortDescription: 'The ancient capital of the Aksumite Empire, home to towering monolithic granite stelae, royal subterranean tombs, and the legendary sanctuary of the Ark of the Covenant.',
    fullOverview: 'Axum stands as the historic bedrock of Ethiopian statehood and Christian faith. As the focal point of the Aksumite Empire—which once rivaled Rome and Persia—this UNESCO World Heritage city features towering multi-story stone stelae carved from single granite slabs over 1,700 years ago. Visitors can walk through the tomb of King Kaleb, examine archaeological artifacts, and visit the chapel precinct of the Church of Our Lady Mary of Zion, where tradition holds the biblical Ark of the Covenant is guarded by a solitary monk.',
    whyVisit: [
      'Stand before the 24-meter Great Stele and intricately carved obelisk fields',
      'Visit the historical chapel compound housing the Ark of the Covenant',
      'Walk through the ruins of the Dungur Palace, traditionally linked to the Queen of Sheba',
      'Explore ancient royal burial crypts and stone inscriptions in Ge’ez, Greek, and Sabaean'
    ],
    topAttractions: [
      {
        title: 'Northern Stelae Park',
        description: 'Monolithic obelisks dating up to the 4th century CE that served as markers for underground royal tombs.'
      },
      {
        title: 'Church of Our Lady Mary of Zion',
        description: 'Ethiopia’s oldest Christian sanctuary complex, rebuilt by Emperor Fasilides in the 17th century.'
      },
      {
        title: 'Queen of Sheba’s Bath (Mai Shum)',
        description: 'A massive rock-cut reservoir that has supplied Axum with fresh mountain runoff for centuries.'
      },
      {
        title: 'Tombs of Kings Kaleb and Gebre Meskel',
        description: 'Precision-fitted subterranean stone chambers showing Aksumite dry-stone masonry.'
      }
    ],
    bestTimeToVisit: 'October to March for mild highland temperatures and sunny days. The annual festival of Maryam Tsion in late November is an exceptional liturgical event.',
    practicalTips: [
      'The Ark of the Covenant itself is sealed from public view; only the designated guardian monk enters the inner chapel.',
      'Modest attire covering shoulders and knees is mandatory across all religious grounds.',
      'Allow at least one full day to explore the scattered archaeological zones with a local guide.'
    ],
    climateInfo: 'Highland plateau climate with dry, sunny days (22–26°C) and crisp nights dropping to 10–13°C.',
    recommendedTourSlugs: ['northern-historic-route-8-days', 'grand-ethiopia-circuit-14-days']
  },
  {
    id: 'dest-lalibela',
    slug: 'lalibela-rock-hewn-churches',
    name: 'Lalibela Rock-Hewn Churches',
    tagline: 'The Living New Jerusalem of Monolithic Stone',
    region: 'Northern Ethiopia (Amhara)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393567/bbeu9khgnqokdvyyjhir.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393454/cz3oknarzl1gjgrmdb1y.jpg',
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393449/krvsczwx9eylfmvtcikq.jpg'
    ],
    shortDescription: 'Eleven medieval rock-hewn monolithic churches chiseled entirely by hand from red volcanic tuff, interconnected by underground catacombs and still active as sacred shrines.',
    fullOverview: 'Carved under King Lalibela in the 12th and 13th centuries as a replacement pilgrimage site during the Crusades, Lalibela represents the zenith of rock-cut architecture. Rather than being assembled with stone blocks, each sanctuary was excavated straight down into the living rock bed. Today, white-robed priests and hermits continue centuries-old Orthodox Christian liturgical practices amidst underground tunnels, ancient Ge’ez manuscripts, and brass processional crosses.',
    whyVisit: [
      'Marvel at the iconic cruciform layout of Bete Giyorgis (Church of St. George)',
      'Traverse narrow rock-cut passages and the pitch-black tunnel representing Hell to Heaven',
      'Attend sunrise prayers accompanied by the slow rhythm of silver sistra and deep drumbeats',
      'Trek into the surrounding highlands to visit cave sanctuaries like Yemrehanna Kristos'
    ],
    topAttractions: [
      {
        title: 'Bete Giyorgis (Church of St. George)',
        description: 'Chiseled 12 meters down into a cruciform monolith, preserved in pristine condition.'
      },
      {
        title: 'Bete Medhane Alem',
        description: 'Believed to be the largest monolithic rock-hewn church on Earth, supported by 34 exterior pillars.'
      },
      {
        title: 'Bete Maryam & Underground Trenches',
        description: 'Celebrated for its early painted bas-reliefs, frescoes, and defensive labyrinthine corridors.'
      },
      {
        title: 'Yemrehanna Kristos',
        description: 'A pre-Lalibela church built inside a large basalt cavern using alternating layers of wood and gypsum.'
      }
    ],
    bestTimeToVisit: 'October to March. Major Orthodox celebrations—Genna (Christmas in early January) and Timkat (Epiphany in mid-January)—fill the town with pilgrims.',
    practicalTips: [
      'Slip-on footwear or thick socks are useful, as shoes are removed outside every sanctuary.',
      'Carrying a pocket flashlight helps you navigate dim tunnels between church clusters.',
      'The high elevation (2,500m) means sun protection is critical during daytime walking.'
    ],
    climateInfo: 'Mountain climate with warm sunny midday periods (21–24°C) and brisk, cool evenings (8–12°C).',
    recommendedTourSlugs: ['northern-historic-route-8-days', 'grand-ethiopia-circuit-14-days']
  },
  {
    id: 'dest-gondar',
    slug: 'gondar-royal-castles',
    name: 'Gondar Royal Enclosure',
    tagline: 'The Camelot of Africa & Imperial Fortresses',
    region: 'Northern Ethiopia (Amhara)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393457/zzfjfc2hfezgwd2dmrfo.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393452/prfbzkc9tvzvy2n09dom.jpg',
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/k0effr5jiwfjhegsa9xc.jpg'
    ],
    shortDescription: 'The 17th-century imperial capital of Emperor Fasilides, featuring stone castles, defensive walls, and the ceiling of winged cherubs at Debre Berhan Selassie.',
    fullOverview: 'Founded in 1636 as the permanent seat of the Solomonic dynasty, Gondar served as Ethiopia’s center of politics, literature, and art for over two centuries. The Royal Enclosure (Fasil Ghebbi) spans over 70,000 square meters of stone battlements, imperial halls, steam baths, and libraries blending Axumite, Moorish, and Portuguese styles. Just outside town sits Fasilides’ Bath, the site of the annual Timkat reenactment of Christ’s baptism.',
    whyVisit: [
      'Wander through the medieval stone towers and banquet halls of Fasil Ghebbi',
      'Gaze up at the 135 painted angel faces looking down from the ceiling of Debre Berhan Selassie',
      'Experience the Timkat festival at Fasilides’ Bath when thousands plunge into consecrated water',
      'Sample Gondarine honey mead (Tej) in local historic taverns'
    ],
    topAttractions: [
      {
        title: 'Fasil Ghebbi (Royal Enclosure)',
        description: 'A fortified imperial palace complex comprising castles, banqueting chambers, and stables.'
      },
      {
        title: 'Debre Berhan Selassie Church',
        description: 'A 17th-century church celebrated for its ceiling painted with winged Ethiopian cherubs.'
      },
      {
        title: 'Fasilides’ Bath',
        description: 'A two-story pavilion surrounded by a rectangular stone pool engulfed by ancient banyan roots.'
      },
      {
        title: 'Kuskuam Complex',
        description: 'The hill-top palace and royal abbey built by Empress Mentewab in the 18th century.'
      }
    ],
    bestTimeToVisit: 'October to May for clear weather. January 18–20 is prime for witnessing the Timkat celebrations.',
    practicalTips: [
      'Gondar is the staging point for trips heading north into the Simien Mountains.',
      'Photography permits are included in standard museum entrance tickets, but verify guidelines inside churches.',
      'Spend sunset on the terrace of Goha Hotel for panoramic vistas across the entire valley.'
    ],
    climateInfo: 'Sub-tropical highland climate with day temperatures hovering at 24–27°C and nights around 12°C.',
    recommendedTourSlugs: ['northern-historic-route-8-days', 'gheralta-cliff-churches-simien-10-days']
  },
  {
    id: 'dest-bahirdar-lake-tana',
    slug: 'bahirdar-lake-tana-monasteries',
    name: 'Bahir Dar & Lake Tana Monasteries',
    tagline: 'Sacred Island Sanctuaries & The Source of the Blue Nile',
    region: 'Northern Ethiopia (Amhara)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393456/b37btmwltxmlwbt7lefb.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393449/krvsczwx9eylfmvtcikq.jpg',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Lakeside avenues lined with palms, boat expeditions to centuries-old painted monasteries on Lake Tana, and the thunderous gorge of the Blue Nile Falls.',
    fullOverview: 'Bahir Dar sits along the southern shore of Lake Tana, Ethiopia’s largest inland body of water and the primary reservoir of the Blue Nile. Across the lake’s 37 islands and peninsulas lie remote monasteries dating back to the 14th century, built with round thatched roofs and covered in vivid biblical wall paintings preserved from foreign invasions. A short drive away, the river plunges into a sheer canyon at the Tis Issat (Blue Nile Falls), producing dramatic mist clouds and year-round rainbows.',
    whyVisit: [
      'Cruise Lake Tana by private boat to reach forested monastic islands',
      'Admire the illuminated manuscripts and church paintings at Ura Kidane Mehret',
      'Trek across a 17th-century Portuguese stone bridge to view the Blue Nile Falls',
      'Stroll Bahir Dar’s lakeside boulevards at sunset while watching local fishermen in papyrus tankwa canoes'
    ],
    topAttractions: [
      {
        title: 'Ura Kidane Mehret',
        description: 'The most decorated monastery on the Zege Peninsula, lined with 16th- to 18th-century canvas frescoes.'
      },
      {
        title: 'Tis Issat (Blue Nile Falls)',
        description: 'Known locally as "Smoke of Fire", a 45-meter-high series of cascades tumbling into a gorge.'
      },
      {
        title: 'Kibran Gabriel & Daga Estifanos',
        description: 'Isolated island monasteries housing ancient royal tombs and priceless religious treasures.'
      },
      {
        title: 'Bezawit Hill Palace Viewpoint',
        description: 'Overlook offering expansive views of where the Blue Nile exits Lake Tana and curves south.'
      }
    ],
    bestTimeToVisit: 'August to October for the highest water flow at the Blue Nile Falls; October to March for calm lake crossings and birdwatching.',
    practicalTips: [
      'Certain traditional monasteries (like Kibran Gabriel and Daga Estifanos) are accessible only to male visitors by monastic decree.',
      'Wear slip-on shoes for boat boarding and church access.',
      'Take a light jacket on early-morning boat journeys when lake breezes can be chilly.'
    ],
    climateInfo: 'Warm tropical highland climate. Daytime highs reach 27–30°C with refreshing lakeside breezes.',
    recommendedTourSlugs: ['northern-historic-route-8-days', 'grand-ethiopia-circuit-14-days']
  },
  {
    id: 'dest-geralta-mountains',
    slug: 'geralta-mountain-tours',
    name: 'Gheralta Mountains',
    tagline: 'Vertical Sandstone Pinnacles & Sky-High Rock Churches',
    region: 'Northern Ethiopia (Tigray)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393454/cz3oknarzl1gjgrmdb1y.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393452/prfbzkc9tvzvy2n09dom.jpg',
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/k0effr5jiwfjhegsa9xc.jpg'
    ],
    shortDescription: 'Towering red sandstone spires rising from valley plains, hiding over thirty ancient cliff churches hand-hewn high into sheer vertical faces.',
    fullOverview: 'The Geralta range offers one of the most striking topographical landscapes in East Africa, blending sheer red sandstone buttes with rock-cut Christian history dating from the 6th to 14th centuries. Guided climbing routes lead to sanctuaries like Abune Yemata Guh—perched on a narrow mountain outcrop—and Maryam Korkor, hidden atop a massive plateau. These churches house original ceiling frescoes and sacred texts, maintained in clean mountain air by resident monks.',
    whyVisit: [
      'Climb the footholds to Abune Yemata Guh, celebrated for its unique cliff-ledge entrance',
      'Hike the Hawzen plateau to Maryam Korkor and Daniel Korkor for panoramic mountain views',
      'Examine 14th-century ceiling paintings preserved without artificial restoration',
      'Stay in eco-lodges built from local ochre stone overlooking the mountain ridges'
    ],
    topAttractions: [
      {
        title: 'Abune Yemata Guh',
        description: 'Carved directly into a sheer spire, accessed via natural rock handholds and a cliff ledge.'
      },
      {
        title: 'Maryam Korkor & Daniel Korkor',
        description: 'An expansive rock cathedral featuring interior arches, bas-reliefs, and a lookout chamber.'
      },
      {
        title: 'Abreha we Atsbeha',
        description: 'An easily accessible low-altitude rock church featuring 10th-century cruciform pillars.'
      },
      {
        title: 'Hawzen Valley Plateau',
        description: 'Broad agricultural plains farmed by traditional ox-plow under red sandstone pillars.'
      }
    ],
    bestTimeToVisit: 'October to May for clear weather, dry rock surfaces, and comfortable temperatures.',
    practicalTips: [
      'Climbing to Abune Yemata Guh requires good physical stamina; harness and rope assists are available.',
      'Low-altitude alternatives like Wukro Chirkos and Abreha we Atsbeha are fully accessible without climbing.',
      'Wear sturdy shoes with high-traction rubber soles for sandstone ascents.'
    ],
    climateInfo: 'Dry mountain plateau climate with daytime highs of 25–28°C and crisp nights around 13°C.',
    recommendedTourSlugs: ['gheralta-cliff-churches-simien-10-days', 'northern-historic-route-8-days']
  },

  // ==========================================
  // NATURE ESCAPE AND ADVENTURE
  // ==========================================
  {
    id: 'dest-simein-mountains',
    slug: 'simein-mountains-adventure',
    name: 'Simien Mountains',
    tagline: 'Roof of Africa, Sheer Escarpments & Endemic Wildlife',
    region: 'Amhara Region (Nature and Adventure)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789394016/b0ka4rtrlclholakbizo.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'A UNESCO World Heritage national park marked by deep canyons, 4,000m peaks, grazing Gelada baboon troops, and the rare Walia ibex.',
    fullOverview: 'Millions of years of volcanic activity and erosion formed the dramatic escarpments of the Simein Mountains National Park. Sheer drops plunge over 1,000 meters into deep river valleys, creating an Afro-alpine ecosystem that hosts rare endemic animals. Visitors can walk among large troops of grass-eating Gelada baboons, observe endangered Walia ibex on rocky ledges, spot Ethiopian wolves, and watch lammergeier vultures catch updrafts along the canyon walls.',
    whyVisit: [
      'Sit quietly near hundreds of wild, peaceful Gelada baboons grazing along canyon rims',
      'Hike high-altitude ridges with expansive views stretching across the northern plateau',
      'Trek towards Ras Dejen (4,550m), the highest peak in Ethiopia',
      'Witness the seasonal plunge of the Jinbar River drop into the Geech Abyss'
    ],
    topAttractions: [
      {
        title: 'Sankaber & Geech Escarpments',
        description: 'Signature trail viewpoints overlooking multi-layered volcanic ridges and canyon floors.'
      },
      {
        title: 'Jinbar Waterfall & Abyss',
        description: 'A thin, 500-meter waterfall that plunges straight into a deep limestone chasm.'
      },
      {
        title: 'Chennek Wildlife Camp',
        description: 'The premier location in the park for spotting Walia ibex foraging along vertical cliffs.'
      },
      {
        title: 'Ras Dejen Summit (4,550m)',
        description: 'A multi-day trekking route leading to the highest point in the Ethiopian highlands.'
      }
    ],
    bestTimeToVisit: 'October to April. October and November bring lush wildflowers and clear visibility for high-altitude trekking.',
    practicalTips: [
      'High elevations cause night temperatures to drop near or below 0°C; bring thermal layers.',
      'Treks must be arranged with a park scout, an experienced mountain guide, and vehicle transport.',
      'Allow an initial acclimatization day in Debark or Sankaber before attempting higher trails.'
    ],
    climateInfo: 'Afro-alpine mountain climate. Sunny daytime conditions (15–18°C) contrast with freezing nights (0°C to -3°C).',
    recommendedTourSlugs: ['gheralta-cliff-churches-simien-10-days', 'northern-historic-route-8-days']
  },
  {
    id: 'dest-bale-mountains',
    slug: 'bale-mountains-national-park',
    name: 'Bale Mountains National Park',
    tagline: 'Afro-Alpine Sanetti Plateau & The Rare Ethiopian Wolf',
    region: 'Oromia Region (Nature and Adventure)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473039/bjlxqgkhgccmgij2ucrm.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'The largest continuous Afro-alpine expanse in Africa, harboring the endangered Ethiopian wolf, giant lobelias, and the dense moss-covered Harenna cloud forest.',
    fullOverview: 'Bale Mountains National Park preserves a remarkable succession of distinct ecological zones: lush river valleys, the sweeping windswept moorlands of the Sanetti Plateau at 4,000 meters, and the deep, misty Afromontane Harenna Forest. This park serves as the primary refuge for the world’s rarest canid—the Ethiopian wolf—as well as mountain nyala, Menelik’s bushbuck, and over 300 bird species, making it an internationally recognized biodiversity sanctuary.',
    whyVisit: [
      'Track the endangered Ethiopian wolf hunting giant mole-rats on the Sanetti Plateau',
      'Drive across the highest all-weather road in Africa crossing tundra-like landscapes',
      'Explore the Harenna Forest canopy for wild forest honey, wild coffee, and endemic birds',
      'Encounter herds of Mountain Nyala roaming the juniper woodlands of Dinsho'
    ],
    topAttractions: [
      {
        title: 'Sanetti Plateau & Giant Lobelias',
        description: 'An open alpine moorland studded with rock outcrops, glacial tarns, and giant lobelias.'
      },
      {
        title: 'Harenna Forest',
        description: 'A dense cloud forest covered in hanging moss, wild coffee trees, and bamboo groves.'
      },
      {
        title: 'Tullu Dimtu Summit (4,377m)',
        description: 'The second-highest peak in Ethiopia, accessible via high-altitude vehicle tracks.'
      },
      {
        title: 'Dinsho Headquarters Wildlife Sanctuary',
        description: 'Protected forest stands home to tame Mountain Nyala and Menelik’s bushbuck herds.'
      }
    ],
    bestTimeToVisit: 'November to April for clear trekking weather and optimal birding activity. Wildflowers peak in November.',
    practicalTips: [
      'Prepare for sudden weather shifts on the high plateau: keep rain shells and warm layers accessible.',
      'Bring binoculars and long lenses; wolves and rare birds can be viewed at open distances across the plains.',
      'Stay in Goba or Bale Mountain Lodge to easily access both the alpine plateau and the cloud forest.'
    ],
    climateInfo: 'Highland moorland climate. Day temperatures average 12–16°C; nights on the plateau routinely dip below 0°C.',
    recommendedTourSlugs: ['endemic-wildlife-birding-highlands-9-days', 'grand-ethiopia-circuit-14-days']
  },
  {
    id: 'dest-awash-national-park',
    slug: 'awash-national-park-safari',
    name: 'Awash National Park',
    tagline: 'Rift Valley Savannah, Thermal Springs & Volcanic Vistas',
    region: 'Afar & Oromia (Nature and Adventure)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473038/i1bndbepjq2hwbkiu3fo.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789396509/f1tqnlp1esd3xw6jzov7.jpg'
    ],
    shortDescription: 'Acacia savannahs surrounding the dormant Mount Fantale volcano, marked by the deep gorge of the Awash River, hot spring palm oases, and Beisa oryx.',
    fullOverview: 'Located in the Great Rift Valley roughly 225 kilometers east of Addis Ababa, Awash National Park is one of Ethiopia’s most accessible wildlife areas. The park features rolling acacia savannah dominated by Mount Fantale, an active volcanic cone with a deep interior crater. The Awash River carves a dramatic canyon along the park’s southern boundary, tumbling over waterfalls where crocodiles bask on basalt ledges, while the northern end reveals natural thermal pools shaded by doum palms.',
    whyVisit: [
      'Watch the rushing rapids of Awash River Gorge and Falls from canyon overlooks',
      'Spot herds of Beisa oryx, Soemmerring’s gazelles, and troops of sacred Anubis and Hamadryas baboons',
      'Soak in the mineral waters of the Filwoha Hot Springs beneath palm canopies',
      'Scan the savannah for over 450 recorded bird species, including bustards and hornbills'
    ],
    topAttractions: [
      {
        title: 'Awash Falls & Canyon',
        description: 'A wide waterfall plunging into a volcanic gorge directly below the park’s main safari lodge.'
      },
      {
        title: 'Mount Fantale Crater',
        description: 'A dormant stratovolcano featuring old lava flows and a wide summit crater.'
      },
      {
        title: 'Filwoha Hot Springs',
        description: 'Turquoise mineral pools fed by subterranean volcanic aquifers, bordered by doum palms.'
      },
      {
        title: 'Ilala Sala Plains',
        description: 'Open grassy plains providing the best opportunities to observe herds of Beisa oryx.'
      }
    ],
    bestTimeToVisit: 'October to March when temperatures are cooler and tracks are completely dry and accessible.',
    practicalTips: [
      'Early morning and late afternoon game drives are essential to avoid the intense midday savannah heat.',
      'Hire a park scout for nature walks around the Awash River gorge and waterfall trails.',
      'Combine Awash with a road journey heading eastward toward the historic city of Harar.'
    ],
    climateInfo: 'Semi-arid savannah climate. Midday temperatures range from 30°C to 35°C, cooling to 18°C after sunset.',
    recommendedTourSlugs: ['grand-ethiopia-circuit-14-days']
  },
  {
    id: 'dest-wenchi-crater',
    slug: 'wenchi-crater-lake',
    name: 'Wenchi Crater Lake',
    tagline: 'Lush Caldera Lake, Mineral Streams & Verdant Valleys',
    region: 'Oromia Region (Nature and Adventure)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473038/cwnzpjbdar01axpwtpzq.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'An extinct volcanic caldera at 3,000 meters altitude holding an emerald crater lake, natural mineral springs, alpine farmlands, and an island monastery.',
    fullOverview: 'Wenchi (Wonchi) Crater is an extinct volcanic caldera located roughly 150 kilometers west of Addis Ababa. Rimmed by ridges rising over 3,300 meters, the caldera basin drops down into an emerald-green lake fed by mountain waterfalls and naturally effervescent mineral springs. Visitors can hike or ride local mountain horses down into the crater, cross by wooden boat to the historic Cherkos island monastery, and wander past traditional watermills and small enset farms.',
    whyVisit: [
      'Hike or horse-ride from the crater rim down through lush green alpine valleys',
      'Paddle or take a boat to the historic Kirkos monastery island in the center of the lake',
      'Drink fresh sparkling mineral water straight from natural springs along the shoreline',
      'Admire traditional rural communities farming volcanic slopes with bamboo and enset'
    ],
    topAttractions: [
      {
        title: 'Wenchi Crater Lake & Island Monastery',
        description: 'An emerald crater lake sheltering the 15th-century Cherkos island monastery.'
      },
      {
        title: 'Natural Mineral Springs & Waterfalls',
        description: 'Naturally bubbling sparkling waters and small river falls cascading into the caldera floor.'
      },
      {
        title: 'Crater Rim Trekking Trails',
        description: 'Scenic ridge paths providing panoramic views looking down into the volcano interior.'
      },
      {
        title: 'Local Horse Trails & Valleys',
        description: 'Scenic paths maintained by the local ecotourism community for gentle horse riding.'
      }
    ],
    bestTimeToVisit: 'October to May for clear highland sunshine, vibrant green scenery, and dry walking paths.',
    practicalTips: [
      'You can ride horses down and up the crater rim if you prefer not to hike the steep 400m elevation return.',
      'Wear sturdy shoes with good grip; the descent path can be slippery after early morning dew.',
      'Wenchi makes an easy weekend escape or full-day excursion from Addis Ababa or Ambo.'
    ],
    climateInfo: 'Cool highland temperate climate. Daytime temperatures range from 18°C to 22°C; breezy on the rim.',
    recommendedTourSlugs: ['grand-ethiopia-circuit-14-days']
  },
  {
    id: 'dest-chebera-churhura',
    slug: 'chebera-churhura-national-park',
    name: 'Chebera Churchura National Park',
    tagline: 'Untamed Elephant Wilderness, Deep Canyons & Hot Springs',
    region: 'South West Ethiopia (Nature and Adventure)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473036/rejjoibmqvcji3fg9kjo.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'A dense, protected wilderness park featuring large herds of African savanna elephants, buffalo, forested river canyons, and natural thermal springs.',
    fullOverview: 'Chebera Churchura National Park is one of Ethiopia’s least disturbed ecosystems, nestled in the western reaches of the southern highlands within the Omo-Gibe river basin. The park features rolling hills blanketed in montane forests, tall elephant grass savannah, and deep river gorges. It holds one of the largest remaining populations of African savanna elephants in the Horn of Africa, alongside buffalo, lions, hippos, and natural thermal waters flowing from forested valleys.',
    whyVisit: [
      'Encounter free-roaming herds of African savanna elephants in untouched habitats',
      'Trek through riverine rainforests to discover natural hot springs and hidden crater lakes',
      'Experience wildlife in a remote, low-density national park far from commercial tracks',
      'Observe diverse birds and primates in the dense canopies along the Zigina and Shoshuma rivers'
    ],
    topAttractions: [
      {
        title: 'Shoshuma & Zigina River Valleys',
        description: 'Forested river corridors serving as the main watering grounds for elephant herds and buffalo.'
      },
      {
        title: 'Subterranean Hot Springs',
        description: 'Natural mineral hot springs hidden within the forest canopy, creating humid micro-ecosystems.'
      },
      {
        title: 'Crater Lakes of Chebera',
        description: 'Remote caldera lakes like Lake Keribella and Lake Bahra, fringed by tropical vegetation.'
      },
      {
        title: 'Elephant Tracking Corridors',
        description: 'Guided wilderness trails following herd tracks through tall savannah grasses and forest clearings.'
      }
    ],
    bestTimeToVisit: 'November to March during the dry season when wildlife congregates along major river valleys and roads are passable.',
    practicalTips: [
      'Chebera Churchura is an expedition destination; travel requires a high-clearance 4x4 vehicle.',
      'Always walk with an armed park ranger who understands local elephant behavior and river crossings.',
      'Pack insect repellent and breathable wilderness expedition clothing.'
    ],
    climateInfo: 'Sub-tropical to tropical savanna climate. Warm and humid with days between 28°C and 33°C.',
    recommendedTourSlugs: ['grand-ethiopia-circuit-14-days']
  },

  // ==========================================
  // CULTURAL
  // ==========================================
  {
    id: 'dest-omo-valley',
    slug: 'omo-valley-cultural-expedition',
    name: 'Omo Valley',
    tagline: 'Living Heritage, Ancient Traditions & Tribal Crossroads',
    region: 'South Ethiopia Regional State (Cultural)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473045/hka0spoib3segge1lnpc.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400510/jjmp2ct6hd27bzfodiz9.jpg',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'A culturally unique river basin home to distinct pastoralist communities including the Hamar, Mursi, Karo, and Dassanech, practicing historic ceremonies and body art.',
    fullOverview: 'The Lower Omo Valley is a UNESCO World Heritage cultural region where communities have preserved their ancestral social customs, body painting, and pastoral lifeways for generations. From the bamboo beehive dwellings of the Dorze weavers in the highlands down to the arid savanna where Hamar communities conduct bull-jumping ceremonies and Mursi pastoralists wear traditional clay lip plates, our journeys are structured around direct community collaboration, fair compensation, and respectful cultural engagement.',
    whyVisit: [
      'Attend weekly tribal markets at Key Afer, Dimeka, or Turmi where neighboring ethnic groups barter',
      'Learn about traditional architectural practices in the bamboo beehive villages of the Dorze',
      'Experience the ceremonial Evangadi celebration or traditional bull-jumping rites when occurring',
      'Witness the chalk body-painting artistry of the Karo community overlooking the Omo River'
    ],
    topAttractions: [
      {
        title: 'Hamar Settlements & Weekly Markets',
        description: 'Vibrant gatherings where Hamar women wearing beaded leather and ochre-twisted hair trade wares.'
      },
      {
        title: 'Mursi Villages in Mago National Park',
        description: 'Pastoral communities renowned for traditional clay lip plates and body scarification.'
      },
      {
        title: 'Dorze Beehive Villages (Chencha)',
        description: 'Towering organic bamboo homes that can stand for generations, coupled with cotton weaving traditions.'
      },
      {
        title: 'Karo Settlements at Murulle',
        description: 'Cliff-top villages perched above the Omo River famous for intricate white-chalk body patterns.'
      }
    ],
    bestTimeToVisit: 'August to March. June to September and December to February offer dry tracks and reliable village market schedules.',
    practicalTips: [
      'Always travel with local community guides who speak the regional languages (Hamar, Mursi, Ometo).',
      'Respectful photography requires asking consent directly and adhering to agreed-upon community terms.',
      'Carry cash in small Ethiopian Birr notes for purchasing local hand-woven textiles and crafts.'
    ],
    climateInfo: 'Sub-tropical to semi-arid. Warm to hot days (28–34°C) with occasional southern afternoon showers.',
    recommendedTourSlugs: ['omo-valley-cultural-odyssey-8-days', 'grand-ethiopia-circuit-14-days']
  },

  // ==========================================
  // EVENTS AND CEREMONIES
  // ==========================================
  {
    id: 'dest-meskel',
    slug: 'meskel-festival',
    name: 'Meskel',
    tagline: 'The Finding of the True Cross',
    region: 'Ethiopia (Events and Ceremonies)',
    heroImage: '/images/IMG_0207.JPG',
    galleryImages: [
      '/images/IMG_0207.JPG',
      '/images/IMG_0209.JPG',
      '/images/IMG_0210.JPG',
      '/images/IMG_0211.JPG',
      '/images/IMG_0213.JPG',
      '/images/IMG_0214.JPG'
    ],
    shortDescription: 'Join one of Ethiopia’s most cherished Orthodox celebrations, marked by processions, colorful ceremonial dress, and the Meskel bonfire known as Demera.',
    fullOverview: 'Meskel commemorates the discovery of the True Cross and is celebrated with services, processions, and the lighting of the Demera bonfire. Addis Ababa’s main gathering at Meskel Square is among the country’s largest celebrations, while communities across Ethiopia observe the festival in their own ways. The festival is generally held on September 27 (September 28 in leap years).',
    whyVisit: [
      'See the Demera bonfire ceremony and its symbolic cross',
      'Experience the music, prayers, and traditional dress of the festival',
      'Join local celebrations in Addis Ababa or other Ethiopian communities',
      'Learn about the history and meaning of Meskel from a local guide'
    ],
    topAttractions: [
      {
        title: 'Demera Bonfire',
        description: 'A large ceremonial bonfire is blessed and lit as the centerpiece of Meskel Eve.'
      },
      {
        title: 'Processions and Hymns',
        description: 'Clergy and worshippers gather in colorful robes for prayers, chants, and processions.'
      },
      {
        title: 'Meskel Square',
        description: 'Addis Ababa’s central square hosts one of the country’s best-known public celebrations.'
      },
      {
        title: 'Community Celebrations',
        description: 'Local observances offer a chance to experience the festival beyond the capital.'
      }
    ],
    bestTimeToVisit: 'Late September, around September 27 (September 28 in leap years).',
    practicalTips: [
      'Arrange accommodation and transport early for the festival period.',
      'Expect large crowds near major celebration sites and follow local guidance.',
      'Dress modestly and ask permission before photographing people or religious services.'
    ],
    climateInfo: 'Conditions vary by region; Addis Ababa is generally mild in September, with occasional rain.',
    recommendedTourSlugs: [],
    tags: ['Events and Ceremonies', 'festival', 'Meskel']
  },
  {
    id: 'dest-timket',
    slug: 'timket-ethiopian-epiphany',
    name: 'Timket',
    tagline: 'Ethiopian Epiphany in a Sea of White',
    region: 'Ethiopia (Events and Ceremonies)',
    heroImage: '/images/Ethiopia-Timket-Festival-Tours.jpg',
    galleryImages: ['/images/Ethiopia-Timket-Festival-Tours.jpg'],
    shortDescription: 'Celebrate Ethiopian Epiphany with vibrant processions, ornate ceremonial umbrellas, and the overnight gathering and blessing of the Tabot.',
    fullOverview: 'Timket, the Ethiopian Orthodox celebration of Epiphany, commemorates the baptism of Jesus in the Jordan River. The celebrations begin with processions carrying replicas of the Ark of the Covenant, known as Tabots, to a body of water. After prayers and a night-long vigil, the water is blessed and worshippers renew their baptismal vows. Timket is celebrated across Ethiopia, with especially well-known gatherings in Gondar and Addis Ababa, usually around January 19 (January 20 in leap years).',
    whyVisit: [
      'Witness processions of clergy carrying the Tabot beneath ceremonial umbrellas',
      'Experience the all-night prayers, hymns, and drumming before the blessing',
      'See the water-blessing ceremony and the return procession to church',
      'Explore regional traditions in Gondar, Addis Ababa, or another local celebration'
    ],
    topAttractions: [
      {
        title: 'Tabot Processions',
        description: 'Church communities accompany the Tabot in a colorful procession to the celebration site.'
      },
      {
        title: 'Eve of Timket',
        description: 'Worshippers gather for prayers, chanting, and an overnight vigil before the main celebration.'
      },
      {
        title: 'Blessing of the Water',
        description: 'Clergy bless the water, recalling the baptism of Jesus, as worshippers take part in the celebration.'
      },
      {
        title: 'Gondar Celebrations',
        description: 'The historic Fasilides’ Bath is a celebrated setting for Timket festivities in Gondar.'
      }
    ],
    bestTimeToVisit: 'Mid-January, around January 19 (January 20 in leap years).',
    practicalTips: [
      'Book accommodation and transport well in advance, especially in Gondar.',
      'Arrive early at public celebration sites and follow guidance from local authorities and clergy.',
      'Wear modest clothing and be respectful when photographing worshippers and ceremonies.'
    ],
    climateInfo: 'January is generally dry; temperatures vary by elevation, and evenings can be cool in the highlands.',
    recommendedTourSlugs: [],
    tags: ['Events and Ceremonies', 'festival', 'Timket', 'Epiphany']
  },
  {
    id: 'dest-genna-lalibela',
    slug: 'genna-ethiopian-christmas-lalibela',
    name: 'Genna (Ethiopian Christmas)',
    tagline: 'A Memorable Journey into Living History and Spiritual Traditions',
    region: 'Ethiopia (Events and Ceremonies)',
    heroImage: '/images/SEOon_pexels-christian-alemu-127251395-28645144.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393454/cz3oknarzl1gjgrmdb1y.jpg',
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393449/krvsczwx9eylfmvtcikq.jpg'
    ],
    shortDescription: 'Ethiopian Christmas, known as Genna, is celebrated every year on January 7. Lalibela is one of the best places to experience this special holiday alongside thousands of pilgrims.',
    fullOverview: 'The celebration begins on Christmas Eve, when people gather at the famous rock-hewn churches for overnight prayers, traditional songs, and religious ceremonies. Visitors can see priests in colorful robes, pilgrims dressed in traditional white cotton clothes, and candles lighting up the night. Christmas in Lalibela offers a memorable opportunity to experience Ethiopia’s living history, rich culture, and strong spiritual traditions.',
    whyVisit: [
      'Witness overnight prayers, church singing, and religious rituals',
      'Explore Lalibela’s famous rock-hewn churches, carved from solid rock',
      'See traditional clothing, religious processions, and the deep faith of local people',
      'Capture the unique atmosphere of the celebration, while respecting worshippers'
    ],
    topAttractions: [
      {
        title: 'Overnight Ceremonies',
        description: 'Witness prayers, church singing, and religious rituals illuminating the night with candles.'
      },
      {
        title: 'Historic Churches',
        description: 'Explore Lalibela’s famous rock-hewn churches, serving as the epicenter for the pilgrims.'
      },
      {
        title: 'Local Traditions',
        description: 'See traditional clothing, religious processions, and the deep faith of local people.'
      },
      {
        title: 'Cultural Experience',
        description: 'Meet pilgrims and discover Ethiopian Orthodox Christian traditions firsthand.'
      }
    ],
    bestTimeToVisit: 'January 7th (Ethiopian Christmas). Celebrations begin on Christmas Eve.',
    practicalTips: [
      'Capture the beautiful churches and the unique atmosphere, while always respecting worshippers.',
      'Dress warmly for the overnight ceremonies, as highland temperatures drop significantly at night.',
      'Book accommodations months in advance, as thousands of pilgrims and visitors arrive for the holiday.'
    ],
    climateInfo: 'Mountain climate with warm sunny days and cool nights, requiring layers for evening vigils.',
    recommendedTourSlugs: [],
    tags: ['Events and Ceremonies', 'festival', 'Genna', 'Christmas', 'Lalibela']
  },

  // ==========================================
  // CITY DISCOVERIES
  // ==========================================
  {
    id: 'dest-addis-ababa',
    slug: 'addisababa-layover-city-tour',
    name: 'Addis Ababa City Tour',
    tagline: 'Diplomatic Capital, Lucy, Vibrant Markets & Coffee Culture',
    region: 'Addis Ababa (City Discoveries)',
    heroImage: '/images/photo_2026-10-15_14-47-43.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'A dynamic metropolis in the central highlands: view hominid fossil Lucy, explore Mercato’s open-air spice lanes, and sip single-origin coffee at historical roasters.',
    fullOverview: 'Perched at 2,400 meters altitude at the foot of Mount Entoto, Addis Ababa is the political and diplomatic center of Africa, home to the African Union headquarters. Whether stopping on an international transit layover or beginning an overland route, the capital offers deep historical context: see the 3.2-million-year-old fossil cast of "Lucy" (Dinkinesh) at the National Museum, explore the vast labyrinth of the Mercato market, sample traditional injera banquets accompanied by live Azmari musicians, and taste the world’s finest coffees at heritage roasting bars.',
    whyVisit: [
      'Meet the fossil remains of Lucy (Dinkinesh) and Selam at the National Museum of Ethiopia',
      'Take in sweeping panoramic vistas of the capital skyline from the eucalyptus forests of Mount Entoto',
      'Navigate the spice and basketry quarters of the Mercato, one of Africa’s largest open-air markets',
      'Experience original coffee culture at classic venues like Tomoca and attend traditional jebena ceremonies'
    ],
    topAttractions: [
      {
        title: 'National Museum of Ethiopia',
        description: 'Houses national archaeological treasures, royal imperial regalia, and historic hominid casts.'
      },
      {
        title: 'Mount Entoto & Entoto Natural Park',
        description: 'Highland ridges offering city vistas, Emperor Menelik II’s historic palace, and walking trails.'
      },
      {
        title: 'The Mercato Market',
        description: 'A bustling multi-square-kilometer market famous for its fragrant spice market and recycled craft areas.'
      },
      {
        title: 'Holy Trinity Cathedral (Kidist Selassie)',
        description: 'The final resting place of Emperor Haile Selassie and Empress Menen Asfaw, adorned with stained glass.'
      }
    ],
    bestTimeToVisit: 'October to May for warm, sunny days and minimal rainfall. Ideal year-round for transit layovers.',
    practicalTips: [
      'Addis Ababa sits at an elevation of 2,400 meters; drink plenty of water to adjust comfortably on your first day.',
      'Yellow metered taxis and app-based ride shares (like Feres or RIDE) are convenient for city transit.',
      'Layover tours can be customized from 4 hours up to 2 full days based on flight schedules.'
    ],
    climateInfo: 'Sub-tropical highland climate. Moderate and spring-like year-round with daytime highs of 22–25°C.',
    recommendedTourSlugs: ['northern-historic-route-8-days', 'grand-ethiopia-circuit-14-days']
  },
  {
    id: 'dest-harar',
    slug: 'harar-historic-walled-city',
    name: 'Harar Old Walled City',
    tagline: 'The Fortified Islamic Citadel & Nightly Hyena Rituals',
    region: 'Harari Region (City Discoveries)',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791478992/b9czuchjykzkdok5685y.jpg',
    galleryImages: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'A UNESCO-listed walled medieval citadel with 82 mosques, 368 narrow alleys, colorful traditional Harari townhouse interiors, and centuries-old hyena feeding rituals.',
    fullOverview: 'Harar Jugol is considered the fourth-holiest city of Islam, ringed by a 16th-century stone defense wall punctuated by five historic gates. Inside, a maze of 368 winding alleys is packed with 82 mosques and shrine sanctuaries dating as far back as the 10th century. Harar is celebrated for its distinctive domestic architecture—multi-level whitewashed rooms displaying porcelain wall bowls and hand-woven mats—as well as the famous nightly ritual where local "hyena men" feed wild spotted hyenas outside the city walls by hand.',
    whyVisit: [
      'Wander the pedestrian maze of whitewashed alleys inside the Jugol fortress walls',
      'Witness the nocturnal ritual of the hyena men feeding wild spotted hyenas outside the gates',
      'Visit the Arthur Rimbaud Cultural Center, celebrating the French poet’s residence in Harar',
      'Explore traditional Adare houses decorated with ornamental basketry and carpets'
    ],
    topAttractions: [
      {
        title: 'Harar Jugol Fortified Walls & Gates',
        description: 'A 16th-century stone defense circuit enclosing the dense medieval core of the historic city.'
      },
      {
        title: 'Nightly Hyena Feeding Grounds',
        description: 'An enduring symbiotic tradition where local handlers feed wild spotted hyenas outside the walls.'
      },
      {
        title: 'Arthur Rimbaud House & Museum',
        description: 'An elegant wooden mansion showcasing historic photography of Harar from the late 19th century.'
      },
      {
        title: 'Traditional Harari Cultural Gidirs (Townhouses)',
        description: 'Unique domestic interiors with raised niches, symbolic carpets, and ornamental pottery displays.'
      }
    ],
    bestTimeToVisit: 'October to March for dry, pleasant weather and active street life across the old quarter.',
    practicalTips: [
      'The inner historic quarter is best explored entirely on foot; motorized vehicles cannot enter most alleys.',
      'Modest clothing is expected when walking through residential neighborhoods and visiting historic shrines.',
      'Flights connect daily from Addis Ababa to nearby Dire Dawa, followed by a scenic 1-hour drive up into Harar.'
    ],
    climateInfo: 'Warm, semi-arid plateau climate. Daytime temperatures hover between 25°C and 28°C with pleasant evenings.',
    recommendedTourSlugs: ['grand-ethiopia-circuit-14-days']
  }
];