import { Tour } from '../types';

export const TOURS: Tour[] = [
  {
    id: 'addis-1',
    slug: '1-day-addis-city-tour',
    title: '1 Day Addis Ababa Guided City Tour',
    price: 95,
    tagline: 'Discover the historical and cultural heart of Ethiopia in a single day.',
    destination: 'Addis Ababa',
    duration: '1 Day',
    daysCount: 1,
    category: 'Day Trips' as any, // CHANGED TO Day Trips
    difficulty: 'Easy',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: '/images/IMG_8007.JPG',
    galleryImages: [
      'https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Discover the historical and cultural heart of Ethiopia in a single day, exploring panoramic mountains, ancient fossils, and vibrant markets.',
    overview: 'Upon arrival at Bole International Airport, you will be met by a representative from Abiy Ethiopia Tours and transferred to your hotel. After a short rest, begin your guided city tour of Addis Ababa. The tour starts with a drive to Mount Entoto, where you will enjoy panoramic views of the city and visit Maryam Church and the Entoto Museum, learning about the origins of Addis Ababa and Emperor Menelik II. Continue to the Institute of Ethiopian Studies and the National Museum of Ethiopia, home to important cultural and archaeological collections, including the famous 3.2-million-year-old fossil Lucy. In the afternoon, visit Holy Trinity Cathedral, the burial site of Emperor Haile Selassie and one of Ethiopia’s most significant religious landmarks. The tour concludes with a visit to Mercato, Africa’s largest open-air market, where you can experience the lively atmosphere of local trade and daily life and the economy of Addis Ababa and finally, we will drop off your hotel/airport.',
    highlights: [
      'Enjoy panoramic views of the city from Mount Entoto',
      'Visit the National Museum and see the 3.2-million-year-old fossil Lucy',
      'Explore Holy Trinity Cathedral, the burial site of Emperor Haile Selassie',
      'Experience the lively atmosphere of Mercato, Africa’s largest open-air market'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Addis Ababa City Tour', 
        location: 'Addis Ababa', 
        description: 'Drive to Mount Entoto for panoramic views, visit Maryam Church and the Entoto Museum. Continue to the Institute of Ethiopian Studies and the National Museum of Ethiopia (home to Lucy). In the afternoon, visit Holy Trinity Cathedral and conclude at Mercato, Africa’s largest open-air market.' 
      }
    ],
    whatsIncluded: [
      'Entrance fees',
      'A professional driver/Guide',
      'All transportation',
      'Lunch',
      'All Taxes/VAT',
      'Roundtrip airport transfer',
      'Bottle of water'
    ],
    whatsNotIncluded: [
      'International flights',
      'Accommodation before and at the end of the tour',
      'Gratitude',
      'Personal items',
      'Souvenirs',
      'Travel insurance',
      'Visa fees',
      'Meals'
    ],
    practicalNotes: [
      'The quoted price ($95) is per person and is based on the current group size. Group rates may vary: The cost per person can be reduced for larger groups.'
    ]
  },
  {
    id: 'danakil-3',
    slug: '3-day-danakil-depression',
    title: '3-Day Danakil Depression Volcano, Dallol & Salt Flats',
    price: 785,
    tagline: 'Journey to the lowest, hottest, and most surreal place on Earth.',
    destination: 'Afar / Danakil Depression',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    category: 'Nature and Adventure' as any,
    difficulty: 'Challenging',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4x4 Expedition Vehicles',
    bestMonths: 'October to March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473043/uymjwklcqm5flyi2dhi7.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400586/palpzv1cwzf74zsnuszl.jpg'
    ],
    shortDescription: 'Hike to the spectacular active lava lake of Erta Ale under the night sky and explore the vibrant geothermal formations of Dallol.',
    overview: 'Fly from Addis Ababa to Semera and travel by 4x4 into the Danakil Depression. Over three unforgettable days, you will hike to Erta Ale Volcano to witness its spectacular lava lake under the night sky, descend through vast desert landscapes to Lake Assale, and experience traditional Afar salt-mining culture. Conclude by exploring Dallol’s colorful geothermal formations, salt pinnacles, and mineral terraces before returning to Addis Ababa.',
    highlights: [
      'Hike to Erta Ale Volcano and witness its spectacular lava lake under the night sky',
      'Visit Lake Assale and enjoy sunset over the salt flats',
      'Experience traditional Afar salt-mining culture in Hamed Ela',
      'Explore Dallol’s colorful geothermal formations, salt pinnacles, and mineral terraces'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Addis Ababa to Semera | Erta Ale Volcano', 
        location: 'Erta Ale', 
        description: 'Fly from Addis Ababa to Semera and travel by 4x4 into the Danakil Depression, passing Afdera Lake and dramatic volcanic landscapes. In the evening, hike to Erta Ale Volcano and witness its spectacular lava lake under the night sky. Overnight: Camping near Erta Ale.' 
      },
      { 
        day: 2, 
        title: 'Erta Ale to Lake Assale | Salt Flats & Afar Culture', 
        location: 'Hamed Ela', 
        description: 'Descend from Erta Ale and continue through the vast desert landscapes of the Danakil Depression. Visit Lake Assale, enjoy sunset over the salt flats, and continue to Hamed Ela to experience traditional Afar salt-mining culture. Overnight: Camping in Hamed Ela.' 
      },
      { 
        day: 3, 
        title: 'Dallol | Salt Mountains | Addis Ababa', 
        location: 'Dallol / Addis Ababa', 
        description: 'Watch the sunrise over Lake Assale before exploring Dallol’s colorful geothermal formations, salt pinnacles, and mineral terraces. Visit the traditional salt mines, then drive to Mekelle or Semera for your flight back to Addis Ababa, followed by a farewell dinner and airport transfer.' 
      }
    ],
    whatsIncluded: [
      'Entrance fees',
      'All accommodation (camping)',
      'Camping equipment',
      'Meals',
      'Drinking water (On all days)',
      'A professional driver/guide',
      'All transportation',
      'All flights during the tour',
      'All Taxes/VAT',
      'Roundtrip airport transfer'
    ],
    whatsNotIncluded: [
      'International flights',
      'Additional accommodation before and at the end of the tour',
      'Sleeping bag',
      'Bath towels',
      'Gratitude',
      'Souvenirs',
      'Travel insurance',
      'Visa fees'
    ],
    practicalNotes: [
      'The quoted price ($785) is per person and is based on the current group size. Group rates may vary.'
    ]
  },
  {
    id: 'omo-5',
    slug: '5-day-authentic-omo-valley',
    title: '5-Day Authentic Omo Valley Culture and Tribal Heritages',
    price: 1985,
    tagline: 'Immerse yourself in the living traditions of the Omo Valley tribes.',
    destination: 'Southern Omo Valley',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    category: 'Cultural Journeys' as any,
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD Land Cruiser',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473043/sxbbfoyqvvgstsllyg0z.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400510/jjmp2ct6hd27bzfodiz9.jpg'
    ],
    shortDescription: 'Meet the Banna, Hamer, Dassanech, and Karo communities and experience authentic village life and cultural traditions.',
    overview: 'Fly from Addis Ababa to Jinka and begin your Omo Valley adventure with visits to the Banna and Hamer communities. Cross the Omo River to visit the Dassanech people, witness traditional ceremonies when available, and explore the unique body painting of the Karo tribe. Conclude by discovering the UNESCO-listed Konso cultural landscape and taking a boat trip on Lake Chamo before returning to the capital.',
    highlights: [
      'Experience the unique traditions and village life of the Banna and Hamer communities',
      'Cross the Omo River to visit the Dassanech people',
      'Visit the Karo people, known for distinctive body painting',
      'Explore the UNESCO-listed Konso Cultural Landscape',
      'Enjoy a boat trip on Lake Chamo to see crocodiles, hippos, and birdlife'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Addis Ababa to Jinka | Banna & Hamer', 
        location: 'Turmi', 
        description: 'Fly from Addis Ababa to Jinka and begin your Omo Valley adventure with visits to the Banna and Hamer communities. Continue to Turmi and experience the unique traditions and village life of the region. Overnight: Turmi.' 
      },
      { 
        day: 2, 
        title: 'Omorate | Dassanech & Hamer', 
        location: 'Turmi', 
        description: 'Travel to Omorate and cross the Omo River to visit the Dassanech people and learn about their traditional way of life. Return to Turmi and, when available, witness a traditional Hamer bull-jumping ceremony. Overnight: Turmi.' 
      },
      { 
        day: 3, 
        title: 'Karo Tribe | Konso Cultural Landscape', 
        location: 'Konso', 
        description: 'Visit the Karo people, known for distinctive body painting and their spectacular Omo River surroundings. Continue to Konso to explore its UNESCO-listed cultural landscape, traditional villages, and terraced hillsides. Overnight: Konso.' 
      },
      { 
        day: 4, 
        title: 'Arba Minch | Lake Chamo & Dorze Village', 
        location: 'Arba Minch', 
        description: 'Travel to Arba Minch and enjoy a boat trip on Lake Chamo, with opportunities to see crocodiles, hippos, and birdlife. Continue to Dorze Village to discover its distinctive houses, weaving traditions, local cuisine, and panoramic views. Overnight: Arba Minch.' 
      },
      { 
        day: 5, 
        title: 'Addis Ababa | City Tour & Farewell', 
        location: 'Addis Ababa', 
        description: 'Fly back to Addis Ababa and explore the capital’s major highlights, including the National Museum and local markets. Enjoy a farewell dinner before your transfer to the airport.' 
      }
    ],
    whatsIncluded: [
      'Entrance fees',
      'All accommodation',
      'Meals',
      'A professional driver/guide',
      'All transportation',
      'All flights during the tour',
      'All Taxes/VAT',
      'Roundtrip airport transfer',
      'Drinking water (On all days)'
    ],
    whatsNotIncluded: [
      'International flights',
      'Gratitude',
      'Souvenirs',
      'Travel insurance',
      'Visa fees'
    ],
    practicalNotes: [
      'The quoted price ($1,985) is per person and is based on the current group size. Group rates may vary.'
    ]
  },
  {
    id: 'danakil-lalibela-5',
    slug: '5-day-danakil-lalibela',
    title: '5-Day Danakil Depression & Lalibela Rock Churches',
    price: 1570,
    tagline: 'A breathtaking contrast of geological fire, ancient salt, and sacred stone.',
    destination: 'Danakil & Northern Highlands',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    category: 'Historical Discoveries' as any,
    difficulty: 'Moderate to Challenging',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD Expedition Vehicles',
    bestMonths: 'October to March',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473038/wbjbwva5bg6yqmu3fj8g.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393567/bbeu9khgnqokdvyyjhir.jpg'
    ],
    shortDescription: 'Witness the surreal geothermal landscapes of the Danakil Depression and fly into the highlands to explore Lalibela.',
    overview: 'Fly from Addis Ababa to Semera and travel by 4x4 through the dramatic Afar landscape. Hike to the crater rim of Erta Ale to witness the spectacular lava lake, and explore the colorful geothermal formations of Dallol. Afterward, fly to Lalibela to discover its remarkable 12th-century rock-hewn churches and experience the spiritual atmosphere of this UNESCO World Heritage Site before returning to the capital.',
    highlights: [
      'Hike to Erta Ale crater rim to witness the spectacular lava lake',
      'Explore Dallol’s colorful geothermal formations and salt mountains',
      'Discover Lalibela’s remarkable 12th-century rock-hewn churches',
      'Experience the iconic cross-shaped Church of St. George (Bet Giyorgis)'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Addis Ababa to Semera | Erta Ale Volcano', 
        location: 'Erta Ale', 
        description: 'Fly from Addis Ababa to Semera and travel by 4x4 through the dramatic Afar landscape. Visit Afdera Lake and continue to Erta Ale. In the evening, hike to the crater rim to witness the spectacular lava lake. Overnight: Camping near Erta Ale.' 
      },
      { 
        day: 2, 
        title: 'Erta Ale to Lake Assale | Afar Traditions', 
        location: 'Hamed Ela', 
        description: 'Descend from Erta Ale and explore the vast salt flats of the Danakil Depression. Visit Lake Assale and enjoy sunset over the salt landscape before continuing to Hamed Ela. Overnight: Camping in Hamed Ela.' 
      },
      { 
        day: 3, 
        title: 'Dallol | Salt Mountains | Fly from Mekelle to Addis Ababa', 
        location: 'Addis Ababa', 
        description: 'Explore Dallol’s colorful geothermal formations, salt pinnacles, and mineral landscapes. Visit the salt mountains and observe traditional Afar salt mining before driving to Mekelle for your flight to Addis Ababa. Overnight: Hotel in Addis Ababa.' 
      },
      { 
        day: 4, 
        title: 'Addis Ababa to Lalibela | Rock-Hewn Churches', 
        location: 'Lalibela', 
        description: 'Fly to Lalibela and discover its remarkable 12th-century rock-hewn churches. Explore the northern group and experience the spiritual atmosphere of this UNESCO World Heritage Site. Overnight: Hotel in Lalibela.' 
      },
      { 
        day: 5, 
        title: 'Lalibela | Bet Giyorgis | Addis Ababa', 
        location: 'Addis Ababa', 
        description: 'Explore the remaining churches of Lalibela, including the iconic cross-shaped Church of St. George (Bet Giyorgis). Return to Addis Ababa for a brief city tour and farewell dinner before your transfer to Bole International Airport.' 
      }
    ],
    whatsIncluded: [
      'Park fees (For non-residents)',
      'All activities',
      'All accommodation',
      'Meals and Drinks',
      'Camping equipment',
      'A professional driver',
      'All transportation and fuel',
      'All domestic flights',
      'All Taxes/VAT and Roundtrip airport transfer'
    ],
    whatsNotIncluded: [
      'International flights',
      'Insurance',
      'Alcohol',
      'Sleeping bag',
      'Gratitude and Souvenirs'
    ],
    practicalNotes: [
      'The quoted price ($1,570) is per person and is based on the current group size.'
    ]
  },
  {
    id: 'highlights-12',
    slug: '12-day-ethiopia-highlights',
    title: '12-Day Ethiopia Highlights: History, Culture, Wildlife & Omo Valley',
    price: 3976,
    tagline: 'The ultimate cross-country expedition of history, culture, and nature.',
    destination: 'All Regions',
    duration: '12 Days / 11 Nights',
    daysCount: 12,
    category: 'Completed Ethiopia Journey' as any,
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + Private Vehicle',
    bestMonths: 'September to May',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473041/vw1ksxsq147g0s2hijwa.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/jphkyw2m66wt8jbv8ame.jpg'
    ],
    shortDescription: 'Explore the royal castles of Gondar, the rock-hewn churches of Lalibela, endemic wildlife in the Simien Mountains, and the diverse indigenous cultures of the Omo Valley.',
    overview: 'This comprehensive 12-day journey covers the best of Ethiopia. Start in the historic north, cruising Lake Tana, exploring the royal castles of Gondar, trekking with Gelada baboons in the Simien Mountains, and discovering the monolithic churches of Lalibela. Then, fly south to navigate the culturally rich Omo Valley, interacting authentically with the Karo, Hamer, Dassanech, and Mursi tribes before returning to the capital.',
    highlights: [
      'Visit the spectacular Blue Nile Falls and Lake Tana monasteries',
      'Explore the Royal Enclosure and castles of Gondar',
      'Walk among Gelada baboons in the Simien Mountains',
      'Discover the monolithic rock-hewn churches of Lalibela',
      'Meet the Arbore, Karo, Hamer, Dassanech, Banna, and Mursi tribes in the Omo Valley'
    ],
    itinerary: [
      { 
        day: 1, 
        title: 'Arrival in Addis Ababa | City & History', 
        location: 'Addis Ababa', 
        description: 'Arrive at Bole International Airport and meet your guide before transferring to your hotel. Depending on arrival time, visit Entoto Mountain, the National Museum, Holy Trinity Cathedral, St. George Cathedral, and the vibrant Merkato. Overnight: Addis Ababa.' 
      },
      { 
        day: 2, 
        title: 'Bahir Dar | Blue Nile Falls & Lake Tana', 
        location: 'Bahir Dar', 
        description: 'Fly to Bahir Dar and visit the spectacular Blue Nile Falls. Enjoy a boat trip on Lake Tana to explore its historic island monasteries and experience the peaceful lakeside scenery. Overnight: Bahir Dar.' 
      },
      { 
        day: 3, 
        title: 'Gondar | Royal Heritage', 
        location: 'Gondar', 
        description: 'Drive to Gondar, the former imperial capital of Ethiopia. Explore the Royal Enclosure, Fasiladas’ Bath, and the beautifully painted Debre Berhan Selassie Church. Overnight: Gondar.' 
      },
      { 
        day: 4, 
        title: 'Simien Mountains | Wildlife & Scenery', 
        location: 'Simien Mountains', 
        description: 'Travel into the spectacular Simien Mountains National Park, a UNESCO World Heritage Site. Enjoy scenic walks among dramatic cliffs and valleys while looking for Gelada baboons, Walia ibex, and other wildlife. Overnight: Simien Mountains.' 
      },
      { 
        day: 5, 
        title: 'Lalibela | Rock-Hewn Churches', 
        location: 'Lalibela', 
        description: 'Fly to Lalibela and explore its remarkable monolithic churches, carved directly into the rock. Discover the historic church clusters and experience the spiritual atmosphere of this UNESCO World Heritage Site. Overnight: Lalibela.' 
      },
      { 
        day: 6, 
        title: 'Lalibela | Yemrehane Christos', 
        location: 'Lalibela', 
        description: 'Visit the remarkable Yemrehane Christos cave church, an outstanding example of medieval Ethiopian architecture. Continue exploring Lalibela’s remaining rock-hewn churches and their intricate carvings. Overnight: Lalibela.' 
      },
      { 
        day: 7, 
        title: 'Addis Ababa | Cathedrals & Merkato', 
        location: 'Addis Ababa', 
        description: 'Fly back to Addis Ababa and continue exploring the capital. Visit Trinity and St. George Cathedrals before experiencing the colors and energy of Merkato. Overnight: Addis Ababa.' 
      },
      { 
        day: 8, 
        title: 'Arba Minch | Lake Chamo & Dorze', 
        location: 'Arba Minch', 
        description: 'Fly to Arba Minch and enjoy a boat trip on Lake Chamo, looking for hippos, crocodiles, and abundant birdlife. Continue to Dorze Village to discover its distinctive bamboo houses, weaving traditions, and local culture. Overnight: Arba Minch.' 
      },
      { 
        day: 9, 
        title: 'Arba Minch to Turmi | Konso & Arbore', 
        location: 'Turmi', 
        description: 'Travel toward Turmi through the scenic Konso Highlands, with its terraced landscapes and traditional villages. Meet the Arbore people and continue into the heart of the Omo Valley. Overnight: Turmi.' 
      },
      { 
        day: 10, 
        title: 'Omo Valley | Karo & Hamer', 
        location: 'Turmi', 
        description: 'Visit the Karo people, known for their distinctive body painting and cultural traditions. Later, visit a Hamer village and, when available, experience traditional ceremonies and bull-jumping rituals. Overnight: Turmi.' 
      },
      { 
        day: 11, 
        title: 'Dassanech & Banna | Omo Valley Cultures', 
        location: 'Jinka', 
        description: 'Travel to Omo Rate and cross the Omo River by traditional boat to meet the Dassanech people. Continue to Key Afer Market to experience local trading and, when available, traditional Banna dances and cultural activities before continuing to Jinka. Overnight: Jinka.' 
      },
      { 
        day: 12, 
        title: 'Mursi Tribe | Farewell to Ethiopia', 
        location: 'Addis Ababa', 
        description: 'Visit Mago National Park and meet the Mursi people, renowned for their distinctive cultural traditions and body adornment. Return to Jinka, then fly to Addis Ababa for shopping and a farewell dinner before your international departure.' 
      }
    ],
    whatsIncluded: [
      'All accommodation and Meals',
      'Park fees and Village fees',
      'Drinks and Camping equipment',
      'A professional driver',
      'All transportation and fuel',
      'All domestic flights',
      'All Taxes/VAT and Roundtrip airport transfer'
    ],
    whatsNotIncluded: [
      'International flights',
      'Alcohol',
      'Insurance',
      'Gratitude and Souvenirs'
    ],
    practicalNotes: [
      'The quoted price ($3,976) is per person and is based on the current group size. Group rates may vary.'
    ]
  },
  {
    id: 'grand-19',
    slug: '19-day-grand-ethiopia',
    title: '19-Day Completed Ethiopia Historical, Cultural, Wildlife & Scenic Journey',
    price: 8500,
    tagline: 'A comprehensive, unhurried immersion into every corner of Ethiopia.',
    destination: 'Complete Ethiopia',
    duration: '19 Days / 18 Nights',
    daysCount: 19,
    category: 'Completed Ethiopia Journey' as any,
    difficulty: 'Moderate to Challenging',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Domestic Flights + 4WD Expedition Vehicles',
    bestMonths: 'October to May',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1793552823/wxp4zagwgedjfbscgclz.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1793552823/wxp4zagwgedjfbscgclz.jpg'
    ],
    shortDescription: 'Experience Lalibela, Gondar, the Simien Mountains, the Danakil Depression, the South Omo Valley, and the Bale Mountains in one unforgettable masterclass.',
    overview: 'This is the ultimate, unhurried 19-day masterclass in Ethiopian heritage, wildlife, and landscapes. The itinerary is meticulously designed to allow sufficient time to experience each destination at a relaxed pace. You will explore Lalibela’s rock-hewn churches and Gondar’s Royal Enclosure, track endemic wildlife in the Simien and Bale Mountains, conquer the volcanic extremes of the Danakil Depression (including Erta Ale and Dallol), and immerse yourself in the rich, diverse cultures of the South Omo Valley tribes.',
    highlights: [
      'Heritage: Lalibela’s rock-hewn churches, Gondar’s Royal Enclosure, and the National Museum (Lucy)',
      'Wildlife: Track Gelada baboons, Walia ibex, the Ethiopian wolf, and endemic birds',
      'Culture: Meet the Hamer, Dassanech, Karo, Igangatom, Banna, Konso, and Dorze peoples',
      'Landscapes: Simien Mountains, Danakil Depression (Erta Ale & Dallol), Omo Valley, and Bale Mountains'
    ],
    itinerary: [
      { day: 1, title: 'ADDIS ABABA', location: 'Addis Ababa', description: 'Arrival at Bole International Airport and transfer to the hotel. Explore Addis Ababa, including the National Museum and Lucy, local markets, street life, architecture and sunset views.' },
      { day: 2, title: 'ADDIS ABABA → LALIBELA', location: 'Lalibela', description: 'Morning flight to Lalibela. Begin exploring the famous rock-hewn churches, recognized as a UNESCO World Heritage Site.' },
      { day: 3, title: 'LALIBELA', location: 'Lalibela', description: 'A second full day to explore Lalibela\'s remarkable churches and surrounding area, witnessing pilgrims, worshippers, and atmospheric church interiors.' },
      { day: 4, title: 'LALIBELA → GONDAR', location: 'Gondar', description: 'Morning flight to Gondar. Visit the Royal Enclosure, historic castles and other important sights.' },
      { day: 5, title: 'GONDAR → SIMIEN MOUNTAINS', location: 'Simien Mountains', description: 'Drive from Gondar into the spectacular Simien Mountains, exploring the area and looking for groups of Gelada baboons.' },
      { day: 6, title: 'SIMIEN MOUNTAINS', location: 'Simien Mountains', description: 'Full day exploring Simien National Park. Highlights include Gelada baboons, Walia ibex, and spectacular valleys, cliffs and escarpments.' },
      { day: 7, title: 'SIMIEN → GONDAR → ADDIS ABABA', location: 'Addis Ababa', description: 'Optional early-morning visit for Gelada. Return to Gondar and fly to Addis Ababa.' },
      { day: 8, title: 'ADDIS ABABA → SEMERA', location: 'Danakil', description: 'Fly to Semera. Meet the 4x4 expedition team and begin the journey into the Danakil region toward Ertale, an active volcano known for its lava lake.' },
      { day: 9, title: 'DANAKIL DEPRESSION', location: 'Dallol', description: 'Explore the extraordinary Danakil Depression, including Ertale, Dallol, salt flats, mineral formations, and Afar culture.' },
      { day: 10, title: 'DANAKIL → MEKELE → ADDIS ABABA', location: 'Addis Ababa', description: 'Continue the final Danakil experience before driving to Mekele for the flight to Addis Ababa.' },
      { day: 11, title: 'ADDIS ABABA → JINKA → TURMI', location: 'Turmi', description: 'Fly to Jinka and begin the southern Ethiopia experience, visiting Banna communities before exploring the Hamer area in Turmi.' },
      { day: 12, title: 'TURMI', location: 'Turmi', description: 'Morning excursion toward the Dassanech area, followed by time with the Hamer communities. If a traditional Hamer bull-jumping ceremony is taking place, the program will include this experience.' },
      { day: 13, title: 'TURMI', location: 'Turmi', description: 'Explore the Karo and Igangatom communities. In the afternoon, return to the Hamer area for a beautiful village walk.' },
      { day: 14, title: 'TURMI → ARBA MINCH', location: 'Arba Minch', description: 'Travel toward Arba Minch through the Konso people and cultural landscape.' },
      { day: 15, title: 'ARBA MINCH', location: 'Arba Minch', description: 'Morning visit to a Dorze village. Continue to Lake Chamo for a boat trip to see wildlife and scenery.' },
      { day: 16, title: 'ARBA MINCH → HAWASSA', location: 'Hawassa', description: 'Drive to Hawassa through Sidama culture. Explore the Hawassa fish market and lakeshore.' },
      { day: 17, title: 'HAWASSA → BALE MOUNTAINS', location: 'Bale Mountains', description: 'Drive toward Bale Mountains National Park, enjoying changing scenery and Afro-alpine vegetation.' },
      { day: 18, title: 'BALE MOUNTAINS', location: 'Bale Mountains', description: 'Full day exploring Bale Mountains National Park to find the Ethiopian wolf, Mountain nyala, and Menelik\'s bushbuck.' },
      { day: 19, title: 'BALE → ADDIS ABABA', location: 'Addis Ababa', description: 'Optional early-morning wildlife experience. Return to Addis Ababa for shopping, a farewell dinner, and international departure.' }
    ],
    whatsIncluded: [
      'All accommodation and Meals',
      'Park fees and Village fees',
      'Drinks and Camping equipment',
      'A professional driver and Local Guides',
      'All transportation and fuel',
      'All domestic flights',
      'All Taxes/VAT and Roundtrip airport transfer'
    ],
    whatsNotIncluded: [
      'International flights',
      'Alcohol and Insurance',
      'Gratitude and Souvenirs'
    ],
    practicalNotes: [
      'The quoted price ($8,500) is per person. The itinerary is designed to allow sufficient time to experience each destination at a relaxed pace. Wildlife sightings, ceremonies, markets, boat trips, and some Danakil activities are subject to weather, local conditions, accessibility, and community schedules.'
    ]
  },
  {
    id: 'coffee-4',
    slug: '4-day-ethiopian-specialty-coffee-tour',
    title: '4 Days Ethiopian Specialty Coffee Tour',
    tagline: 'Discover the Origin of Coffee from Farm to Cup.',
    destination: 'Addis Ababa, Sidama, Yirgacheffe, Abijata-Shalla',
    duration: '4 Days',
    daysCount: 4,
    category: 'Specialty Coffee Tours' as any,
    difficulty: 'Easy',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791483182/xx38kv7tjgtztu4pj9c1.jpg',
    shortDescription: 'Explore Ethiopia, widely celebrated as the birthplace of Arabica coffee, and learn about its legendary coffee heritage alongside its wildlife.',
    overview: 'Discover Ethiopia, widely celebrated as the birthplace of Arabica coffee, and learn about its legendary coffee heritage. Participate in a traditional coffee ceremony and discover how coffee is deeply connected to Ethiopian hospitality and daily life. Experience the unique flavors and aromas of Sidama and Yirgacheffe specialty coffees. Visit coffee farms and washing stations to see how coffee is grown, harvested, processed, and prepared. Meet local coffee producers to learn about traditional and modern coffee-growing practices, and combine your coffee exploration with local culture and wildlife at Abijata-Shalla National Park.',
    highlights: [
      'Discover Ethiopia’s legendary coffee heritage as the birthplace of Arabica coffee',
      'Participate in a traditional coffee ceremony connected to Ethiopian hospitality',
      'Taste distinctive flavors of Sidama and Yirgacheffe specialty coffees',
      'Visit coffee farms and washing stations to witness farm-to-cup processes',
      'Combine specialty coffee experiences with local culture and wildlife at Abijata-Shalla National Park'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa: Coffee Culture & Tasting',
        location: 'Addis Ababa',
        description: 'Begin your journey with Ethiopia’s famous coffee culture. Visit specialty cafés, learn about Ethiopian coffee traditions, and experience an authentic traditional coffee ceremony. Overnight: Addis Ababa'
      },
      {
        day: 2,
        title: 'Sidama: Coffee Farm Experience',
        location: 'Sidama',
        description: 'Travel to the Sidama coffee-growing region. Visit a coffee farm, walk through the coffee fields, meet local farmers, and learn about harvesting, processing, and drying. Enjoy a fresh farm-to-cup coffee tasting. Overnight: Sidama'
      },
      {
        day: 3,
        title: 'Yirgacheffe: Specialty Coffee & Local Culture',
        location: 'Yirgacheffe',
        description: 'Continue to the renowned Yirgacheffe coffee area. Visit coffee farms and washing stations, discover traditional production methods, and taste distinctive Yirgacheffe specialty coffees. Meet local producers and experience the surrounding culture. Overnight: Yirgacheffe'
      },
      {
        day: 4,
        title: 'Abijata-Shalla National Park, Farewell Dinner & Departure',
        location: 'Abijata-Shalla National Park',
        description: 'Explore Abijata-Shalla National Park and enjoy a short wildlife experience looking for ostriches, warthogs, gazelles, antelopes, flamingos, and birdlife. Enjoy a traditional Ethiopian farewell dinner at a cultural restaurant with Ethiopian food, music, and traditional performances before transferring to the airport.'
      }
    ],
    whatsIncluded: [],
    whatsNotIncluded: [],
    practicalNotes: []
  },
  {
    id: 'birding-10',
    slug: '10-day-ethiopia-special-birding-tour',
    title: '10 Days Ethiopia Special Birding Tour',
    tagline: 'An extraordinary journey discovering Ethiopia’s endemic bird species.',
    destination: 'Highlands, Rift Valley, Awash, Bale Mountains',
    duration: '10 Days',
    daysCount: 10,
    category: 'Birding Tours' as any,
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1790797220/nz3h8q1w754t2lc24jhl.jpg',
    shortDescription: 'Search for 18 endemic species across Ethiopia’s highland forests, Rift Valley wetlands, and savanna landscapes.',
    overview: 'Ethiopia is one of Africa’s most exciting birding destinations, with 882 recorded bird species, including 18 endemic species found nowhere else in the world. Discover Ethiopia’s exceptional birdlife on a carefully planned journey through highlands, forests, wetlands, Rift Valley lakes, and mountain ecosystems. Birders can encounter endemic species such as the Blue-winged Goose, Rouget’s Rail, Thick-billed Raven, Wattled Ibis, and Ethiopian Bushcrow. The route combines Ethiopia’s endemic birds with some of the country’s most important birding destinations.',
    highlights: [
      'Search for endemic birds like the Blue-winged Goose, Rouget’s Rail, and Thick-billed Raven',
      'Explore diverse habitats including highland, forest, wetland, lake, and savanna ecosystems',
      'Experience Rift Valley Lakes offering excellent opportunities for flamingos and waterbirds',
      'Explore Ethiopia’s dry lowlands in Awash National Park and its distinctive birdlife',
      'Experience important highland bird habitats in the spectacular Bale Mountains'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa | Arrival & City Birding',
        location: 'Addis Ababa',
        description: 'Arrive in Addis Ababa. Depending on arrival time, enjoy a relaxed introductory birding session around the city or nearby green areas. Meet your birding guide and prepare for the journey ahead. Overnight: Addis Ababa'
      },
      {
        day: 2,
        title: 'Addis Ababa → Debre Libanos',
        location: 'Debre Libanos',
        description: 'Travel north to Debre Libanos. Afternoon birding around the cliffs, forests, and surrounding valleys for Thick-billed Raven, Augur Buzzard, Verreaux’s Eagle, and White-cheeked Turaco. Overnight: Debre Libanos'
      },
      {
        day: 3,
        title: 'Debre Libanos → Sululta → Addis Ababa',
        location: 'Sululta',
        description: 'Early-morning birding before continuing through the Sululta highlands. Explore grasslands and wetlands for Blue-winged Goose, Rouget’s Rail, Wattled Ibis, and endemic larks. Continue to Addis Ababa. Overnight: Addis Ababa'
      },
      {
        day: 4,
        title: 'Addis Ababa → Awash National Park',
        location: 'Awash National Park',
        description: 'Drive east toward Awash National Park. Afternoon birding around woodland, grassland, and riverine habitats searching for Somali Bee-eater, Abyssinian Roller, Secretarybird, Ostrich, and raptors. Overnight: Awash'
      },
      {
        day: 5,
        title: 'Awash National Park | Full-Day Birding',
        location: 'Awash National Park',
        description: 'Early-morning birding around the river and woodland, followed by exploration of open savanna and escarpments for endemic and dry-country species, raptors, bee-eaters, and hornbills. Overnight: Awash'
      },
      {
        day: 6,
        title: 'Awash → Ziway / Rift Valley Lakes',
        location: 'Ziway',
        description: 'Travel south toward the Rift Valley, stopping at suitable wetlands. Continue to Lake Ziway, an important habitat for waterbirds. Overnight: Ziway'
      },
      {
        day: 7,
        title: 'Lake Ziway → Abijata-Shalla National Park → Langano',
        location: 'Langano',
        description: 'Early-morning birding around Lake Ziway before continuing to Abijata-Shalla National Park to look for flamingos, pelicans, storks, ibises, and raptors. Continue to Lake Langano. Overnight: Langano'
      },
      {
        day: 8,
        title: 'Langano → Bale Mountains',
        location: 'Bale Mountains',
        description: 'Travel toward the Bale Mountains, ascending into the highland ecosystem. Afternoon birding in forest habitats looking for Rouget’s Rail, Abyssinian Long-eared Owl, and Chestnut-naped Francolin. Overnight: Bale Mountains'
      },
      {
        day: 9,
        title: 'Bale Mountains | Full-Day Birding',
        location: 'Bale Mountains',
        description: 'Full day exploring highland forests, moorlands, and open mountain habitats. Focus on Ethiopia’s highland specialties and endemic birds. Overnight: Bale Mountains'
      },
      {
        day: 10,
        title: 'Bale Mountains → Addis Ababa | Farewell & Departure',
        location: 'Addis Ababa',
        description: 'Final morning birding session before beginning the return journey to Addis Ababa. Celebrate the journey with a traditional Ethiopian farewell dinner before departure.'
      }
    ],
    whatsIncluded: [],
    whatsNotIncluded: [],
    practicalNotes: []
  },
  {
    id: 'day-trip-debre-libanos',
    slug: '1-day-debre-libanos',
    title: 'Debre Libanos – Monastery, Gorge & Wildlife',
    price: 210,
    tagline: 'Travel through the Ethiopian highlands to a historic monastery and dramatic gorge.',
    destination: 'Debre Libanos',
    duration: '1 Day',
    daysCount: 1,
    category: 'Day Trips' as any, // CHANGED TO Day Trips
    difficulty: 'Easy',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791483357/dxuwwxadgmkp674y0uep.avif',
    shortDescription: 'Visit the historic monastery, enjoy spectacular views of the Jemma Gorge, and observe wild gelada baboons.',
    overview: 'Travel through the Ethiopian highlands to the historic Debre Libanos area. Visit the monastery, enjoy spectacular views of the gorge, and explore the surrounding landscape with opportunities to observe gelada baboons and birds.',
    highlights: [
      'Visit Debre Libanos Monastery',
      'Visit the historic Portuguese Bridge',
      'Enjoy spectacular views of the Jemma Gorge',
      'Observe gelada baboons in their natural highland environment',
      'Experience highland birding'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Debre Libanos Excursion',
        location: 'Debre Libanos',
        description: 'Depart Addis Ababa for Debre Libanos. Visit the monastery, Portuguese Bridge, and view the spectacular Jemma Gorge while looking out for gelada baboons and endemic birds before returning to Addis Ababa.'
      }
    ],
    whatsIncluded: [
      'Private transportation',
      'Professional guide/driver',
      'Hotel pickup & drop-off',
      'Entrance fees',
      'Meals',
      'Bottled water',
      'Local guide'
    ],
    whatsNotIncluded: [
      'Accommodation',
      'Travel insurance',
      'Personal expenses',
      'Tips & gratuities',
      'Flights',
      'Additional activities'
    ],
    practicalNotes: [
      'Price is $210.'
    ]
  },
  {
    id: 'day-trip-bishoftu',
    slug: '1-day-bishoftu-crater-lakes',
    title: 'Bishoftu Crater Lakes – Nature & Relaxation',
    price: 200,
    tagline: 'Discover Ethiopia beyond the capital with beautifully relaxing crater lakes.',
    destination: 'Bishoftu',
    duration: '1 Day',
    daysCount: 1,
    category: 'Day Trips' as any, // CHANGED TO Day Trips
    difficulty: 'Easy',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: '/images/leti-tamrat-g484tPXHYuQ-unsplash.jpg',
    shortDescription: 'Enjoy lakeside walks, scenic viewpoints, birdwatching, and photography among volcanic crater lakes.',
    overview: 'Discover Ethiopia beyond the capital with carefully designed private day trips combining nature, culture, and spectacular landscapes. Depart Addis in the morning and travel to Bishoftu, famous for its volcanic crater lakes. Enjoy lakeside walks, scenic viewpoints, birdwatching, photography, and a relaxed lunch before returning to Addis.',
    highlights: [
      'Visit Lake Bishoftu',
      'Relax at Lake Hora',
      'See beautiful Lake Babogaya',
      'Enjoy fantastic birdlife',
      'Admire dramatic crater landscapes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bishoftu Crater Lakes Excursion',
        location: 'Bishoftu',
        description: 'Travel from Addis Ababa to Bishoftu to experience its famous volcanic crater lakes. Enjoy lakeside walks, birdwatching, and a relaxed lunch before returning to the city.'
      }
    ],
    whatsIncluded: [
      'Private transportation',
      'Professional guide/driver',
      'Hotel pickup & drop-off',
      'Entrance fees',
      'Bottled water',
      'Meals',
      'Local guide'
    ],
    whatsNotIncluded: [
      'Accommodation',
      'Travel insurance',
      'Personal expenses',
      'Tips & gratuities',
      'Flights',
      'Additional activities'
    ],
    practicalNotes: [
      'Price is $250.'
    ]
  },
  {
    id: 'day-trip-menagesha',
    slug: '1-day-menagesha-suba-forest',
    title: 'Menagesha Suba Forest – Hiking & Nature',
    price: 210,
    tagline: 'Escape the city for a day in one of Ethiopia’s beautiful highland forests.',
    destination: 'Menagesha Suba Forest',
    duration: '1 Day',
    daysCount: 1,
    category: 'Day Trips' as any, // CHANGED TO Day Trips
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: '/images/suba6.webp',
    shortDescription: 'Enjoy a guided nature walk through a beautiful highland forest, looking for birds and wildlife.',
    overview: 'Escape the city for a day in one of Ethiopia’s beautiful highland forests. Enjoy a guided nature walk through the forest, look for birds and wildlife, and explore the peaceful mountain environment.',
    highlights: [
      'Walk through a beautiful highland forest',
      'Enjoy active hiking in a peaceful mountain environment',
      'Experience great birdwatching opportunities',
      'Look out for local wildlife',
      'Take in beautiful mountain scenery'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Menagesha Suba Forest Excursion',
        location: 'Menagesha',
        description: 'Depart Addis Ababa for Menagesha Suba Forest. Take a guided nature walk through the highland forest, exploring wildlife and birdlife before returning.'
      }
    ],
    whatsIncluded: [
      'Private transportation',
      'Professional guide/driver',
      'Hotel pickup & drop-off',
      'Entrance fees',
      'Bottled water',
      'Local guide'
    ],
    whatsNotIncluded: [
      'Meals & drinks',
      'Accommodation',
      'Travel insurance',
      'Personal expenses',
      'Tips & gratuities',
      'Flights',
      'Additional activities'
    ],
    practicalNotes: [
      'Price is $210.'
    ]
  },
  {
    id: 'day-trip-wenchi',
    slug: '1-day-wenchi-crater-lake',
    title: 'Wenchi Crater Lake – Adventure & Scenery',
    price: 180,
    tagline: 'Escape to Wenchi Crater Lake, a stunning natural paradise in the Ethiopian highlands.',
    destination: 'Wenchi Crater Lake',
    duration: '1 Day',
    daysCount: 1,
    category: 'Day Trips' as any, // CHANGED TO Day Trips
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: 'Private Vehicle',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473036/qtbejwojusj5qyhhnsmf.jpg',
    shortDescription: 'Enjoy a scenic drive through traditional highland villages, followed by a guided hike around the crater.',
    overview: 'Escape to Wenchi Crater Lake, a stunning natural paradise in the Ethiopian highlands. Surrounded by green mountains, forests, waterfalls, and peaceful countryside, the area offers breathtaking scenery and a refreshing escape from the city. Enjoy a scenic drive through traditional highland villages, followed by a guided hike around the crater. Admire the beautiful lake, visit the historic island church, and experience the peaceful lifestyle of the local community.',
    highlights: [
      'Experience a beautiful crater lake surrounded by green mountains',
      'Enjoy an active guided hike',
      'Partake in local horse riding',
      'Visit the historic island church',
      'Marvel at breathtaking mountain scenery and waterfalls'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Wenchi Crater Lake Excursion',
        location: 'Wenchi',
        description: 'Depart Addis Ababa for Wenchi Crater Lake. Drive through traditional highland villages, enjoy a guided hike around the crater, and visit the historic island church before returning.'
      }
    ],
    whatsIncluded: [
      'Private transportation',
      'Professional guide/driver',
      'Hotel pickup & drop-off',
      'Entrance fees',
      'Meals and drinks',
      'Bottled water',
      'Local guide'
    ],
    whatsNotIncluded: [
      'Accommodation',
      'Travel insurance',
      'Personal expenses',
      'Tips & gratuities',
      'Flights',
      'Additional activities'
    ],
    practicalNotes: [
      'Price is $180.'
    ]
  },
  {
    id: 'harar-awash-5',
    slug: '5-days-harar-and-awash-national-park',
    title: '5 Days Harar and Awash National Park',
    price: 1150,
    tagline: 'Experience volcanic landscapes, vibrant markets, and the famous Hyena Man tradition.',
    destination: 'Awash National Park, Dire Dawa, Harar',
    duration: '5 Days / 4 Nights',
    daysCount: 5,
    category: 'Wildlife Safaris' as any, 
    difficulty: 'Moderate',
    startLocation: 'Addis Ababa',
    endLocation: 'Addis Ababa',
    transportation: '4WD or Tourist Vehicle',
    bestMonths: 'Year-round',
    heroImage: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473038/i1bndbepjq2hwbkiu3fo.jpg',
    galleryImages: [
      'https://res.cloudinary.com/dw1ohipim/image/upload/v1790361826/xt1a082vzyouqhknh5xz.jpg',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200'
    ],
    shortDescription: 'Discover Awash National Park, Dire Dawa, and the historic walled city of Harar in one immersive cultural and wildlife adventure.',
    overview: 'Discover a 5-day journey from Addis Ababa through Awash National Park, Dire Dawa, and the historic walled city of Harar. Experience game drives, volcanic landscapes, vibrant markets, and the famous Hyena Man tradition in one immersive cultural and wildlife adventure.',
    highlights: [
      'Game drives in Awash National Park to spot wildlife',
      'Cultural walking tour of Harar old city (UNESCO site)',
      'Evening hyena feeding experience in Harar',
      'Farewell cultural dinner with traditional music and dance in Addis Ababa'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa – Awash National Park',
        location: 'Awash National Park',
        description: 'Depart from Addis Ababa and travel southeast toward Awash National Park via the scenic Bishoftu crater lakes near Debre Zeit. In the evening, enjoy a game drive through the savannahs and lava-strewn plains, spotting wildlife and visiting an area frequented by hyenas after sunset. Water Fall Awash National Park—a land of wildlife, hot springs, and volcanic beauty. Overnight: Lodge, Awash National Park'
      },
      {
        day: 2,
        title: 'Awash National Park – Dire Dawa',
        location: 'Dire Dawa',
        description: 'Travel from Awash National Park to the vibrant commercial hub of Dire Dawa, experiencing changing landscapes along the way.'
      },
      {
        day: 3,
        title: 'Dire Dawa – Harar',
        location: 'Harar',
        description: 'Continue your journey from Dire Dawa up into the Ahmar Mountains to reach the historic walled city of Harar.'
      },
      {
        day: 4,
        title: 'Harar City Tour & Hyena Feeding',
        location: 'Harar',
        description: 'Enjoy a full day exploring Harar Jugol (a UNESCO World Heritage site). Wander through the narrow alleys, visit traditional markets, and in the evening, experience the famous Hyena Man feeding ritual.'
      },
      {
        day: 5,
        title: 'Harar – Addis Ababa',
        location: 'Addis Ababa',
        description: 'Travel back to Addis Ababa. In the evening, conclude your trip with a farewell cultural dinner featuring traditional Ethiopian music and dance.'
      }
    ],
    whatsIncluded: [
      'Airport transfers in Addis Ababa',
      'All ground transportation in comfortable 4WD or tourist vehicles',
      'Accommodation for 4 nights in hotels/lodges',
      'Professional English-speaking guide throughout the tour',
      'Local guides in Harar and cultural sites',
      'All entrance fees to national parks, museums, and heritage sites',
      'Game drives in Awash National Park',
      'Cultural walking tour of Harar old city (UNESCO site)',
      'Evening hyena feeding experience in Harar',
      'Bottled drinking water during tours and drives',
      'Government taxes and service charges',
      'Farewell cultural dinner with traditional music and dance in Addis Ababa'
    ],
    whatsNotIncluded: [
      'Lunches and dinners unless specified in the itinerary',
      'Personal expenses (souvenirs, laundry, phone calls, etc.)',
      'Tips and gratuities for guides and drivers',
      'Camera/video fees where applicable',
      'Alcoholic and soft drinks',
      'Optional activities not mentioned in the itinerary'
    ],
    practicalNotes: [
      'Price from $1,150.',
      'Departure Information: Depart from Addis Ababa. Please arrive by 10:20 AM for a prompt departure at 10:50 AM.'
    ]
  }
];