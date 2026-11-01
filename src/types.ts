export type PageView = 
  | 'home' 
  | 'destinations' 
  | 'tours' 
  | 'about' 
  | 'contact' 
  | 'tour-detail' 
  | 'destination-detail';

export type TourCategory = 
  | 'Completed Ethiopia Journey'
  | 'Cultural Journeys'
  | 'Historical Discoveries'
  | 'Nature and Adventure'
  | 'City Tours'
  | 'Wildlife Safaris'
  | 'Birding Tours'
  | 'Specialty Coffee Tours';

export interface TourItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  destination: string;
  duration: string;
  daysCount: number;
  category: TourCategory;
  difficulty: string;
  price?: number; //
  startLocation: string;
  endLocation: string;
  transportation: string;
  bestMonths: string;
  heroImage: string;
  galleryImages?: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  itinerary: TourItineraryDay[];
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  practicalNotes: string[];
}

export interface TopAttraction {
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  region: string;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  fullOverview: string;
  whyVisit: string[];
  topAttractions: TopAttraction[];
  bestTimeToVisit: string;
  practicalTips: string[];
  climateInfo: string;
  recommendedTourSlugs: string[];
  tags?: string[];
}