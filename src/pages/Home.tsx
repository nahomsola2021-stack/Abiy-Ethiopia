import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion';
import {
  ArrowRight, Star, MapPin, Award, Compass, Eye, Quote, CheckCircle2,
  Mountain, Bird, Search, ChevronLeft, ChevronRight, BadgeCheck,
  ArrowUp, ArrowDown
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { PageView } from '../types';
import { TOURS } from '../data/tours';
import { PremiumButton, ParallaxCard } from '../components/Premium';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

const SELECT = 'w-full cursor-pointer appearance-none border-b border-[#D8BFA4] bg-transparent pb-2 text-lg font-semibold text-[#241613] transition-colors focus:border-[#DB6148] focus:outline-none';

const HOME_TOUR_CATEGORIES = [
  'Any Type',
  'Lalibela',
  'Axum',
  'Gondar',
  'Danakil',
  'Omo Valley',
  'Simein mountain',
  'Bale mountain',
  'Addis Ababa',
];

export interface HomeProps {
  onNavigate: (view: PageView, param?: string) => void;
  onOpenPlanModal: (presetTourOrRegion?: string) => void;
}

const HERO_DESTINATIONS = [
  { id: 0, name: 'Lalibela', region: 'Sacred Rock Churches', slideIndex: 0 },
  { id: 1, name: 'Axum', region: 'Ancient Aksumite Empire', slideIndex: 1 },
  { id: 2, name: 'Gondar', region: 'Royal Imperial Castles', slideIndex: 3 },
  { id: 3, name: 'Danakil', region: 'Afar Region', slideIndex: 4 },
  { id: 4, name: 'Omo Valley', region: 'Southern Heartland', slideIndex: 2 },
  { id: 5, name: 'Simein mountain', region: 'Northern Highlands', slideIndex: 5 },
  { id: 6, name: 'Bale mountain', region: 'Afro-Alpine Wilderness', slideIndex: 6 },
  { id: 7, name: 'Addis Ababa', region: 'Vibrant Capital & Culture', slideIndex: 7 },
];

const HERO_SLIDES = [
  { src: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1787132831/bkck551eiil1tnfsdvkn.webp', destId: 0, destination: 'Lalibela', caption: 'Ancient 12th-Century Rock-Hewn Churches' },
  { src: '/images/57948950.jpg', destId: 1, destination: 'Axum', caption: 'Ancient Obelisks & Cradle of Aksumite Civilization' },
  { src: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789690142/lcupyjfbrdjbytckaa7p.webp', destId: 4, destination: 'Omo Valley', caption: 'Traditional Villages of Southern Ethiopia' },
  { src: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393457/zzfjfc2hfezgwd2dmrfo.jpg', destId: 2, destination: 'Gondar', caption: 'Fasil Ghebbi Royal Enclosure & 17th-Century Castles' },
  { src: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473050/gnxfhpuqgsqdlax2a68f.jpg', destId: 3, destination: 'Danakil', caption: 'Dallol Geothermal Springs & Salt Flats' },
  { src: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473835/ey3lqy03kwiwtscn38gq.jpg', destId: 4, destination: 'Omo Valley', caption: 'Indigenous Tribes & Living Cultural Heritage' },
  { src: '/images/monkey-8338310_1280.png', destId: 5, destination: 'Simein mountain', caption: 'Dramatic Escarpments & Gelada Highlands' },
  { src: '/images/uq9tj0icpn121.jpg', destId: 6, destination: 'Bale mountain', caption: 'Sanetti Plateau & Rare Endemic Wildlife' },
  { src: '/images/IMG_8007.JPG', destId: 7, destination: 'Addis Ababa', caption: 'Cultural Capital, Museums & Highland Coffee Tradition' },
  { src: '/images/monkey-8338310_1280.png', destId: 5, destination: 'Simein mountain', caption: 'UNESCO World Heritage Highland Peaks' },
  { src: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791473043/uymjwklcqm5flyi2dhi7.jpg', destId: 3, destination: 'Danakil', caption: 'Erta Ale Active Volcano & Afar Desert' },
];

const QUOTE_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i, x1: (i * 53 + 7) % 100, y1: (i * 29 + 13) % 100, x2: (i * 71 + 17) % 100, y2: (i * 41 + 23) % 100, duration: 15 + (i % 6) * 4, opacity: 0.2 + (i % 4) * 0.1,
}));

const GOLD_GRADIENT = 'linear-gradient(100deg, #D6A32C 0%, #E9C55A 18%, #F8E8A8 36%, #F3D677 48%, #E4BB45 62%, #DDAE35 80%, #D2A02B 100%)';
const CLIP_TEXT: React.CSSProperties = { WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' };

const PARTNER_LOGOS = [
  { name: 'Partner 1', src: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1791709653/lskwpw1qjib9vcshqa78.webp' },
  { name: 'Partner 2', src: '/images/photo_2026-10-15_14-47-58-removebg-preview.png', isFeatured: true },
  { name: 'Partner 3', src: '/images/IMG_0306.JPG' },
];

type ReviewPlatform = 'tripadvisor' | 'safaribookings' | 'google';
interface TravelerReview { platform: ReviewPlatform; author: string; location: string; title: string; text: string; date: string; }

const SafariBookingsLionSvg: React.FC<{ className?: string }> = ({ className = 'h-12 w-12' }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <path d="M30 8C33 11 33.5 15 31 19C35 16 39 11 37 6C34 6.5 31.5 7 30 8Z" fill="#FFFFFF" />
    <path d="M44 11C47 17 45 25 38 30C44 29 51 23 50 15C49 12.5 46.5 11.5 44 11Z" fill="#FFFFFF" />
    <path d="M52 24C54 32 48 41 37 44C45 45 55 39 56 29C56.2 26.8 54.5 25 52 24Z" fill="#FFFFFF" />
    <path d="M51 42C47 49 38 54 27 54C36 57 48 53 53 45C53.8 43.5 52.5 42.2 51 42Z" fill="#FFFFFF" />
    <path d="M28 19C25 19 23 21.5 23.5 24.5C24 26.5 26 27 27.5 26C26 24.5 26 22 28 21C29.5 20.2 31 21.5 31 23.5C31 25 30 26.5 28.5 27.5C31.5 27 33.5 24.5 33 21.5C32.5 19.5 30.5 19 28 19Z" fill="#FFFFFF" />
    <path d="M25 16C20 18 16.5 22 14.5 26.5C13 29.5 9.5 31.5 8 33.5C7 35 8 37.5 10.5 38.5C12.5 39.2 15 39 17 38C14.5 37 12.5 36 12 34.5C11.8 33.5 14 32 16 29C18 25.5 21 21 26 18.5C27 18 26.5 15.5 25 16Z" fill="#FFFFFF" />
    <path d="M18.5 26.5C20 25.5 22 25.8 23 27C21.5 27.8 19.8 27.6 18.5 26.5Z" fill="#FFFFFF" />
    <path d="M10.5 42C13 41 16.5 41 19.5 42.5C22.5 44 24.5 47 23 50C21.5 47.5 18.5 45.5 15 45C12.5 44.8 10.2 45.5 9 44C8.2 43 9.2 42.4 10.5 42Z" fill="#FFFFFF" />
    <path d="M29 31C30.5 35 29.5 40 26.5 44C30.5 42 33.5 37 32.5 32C32 30.2 30 29.8 29 31Z" fill="#FFFFFF" />
  </svg>
);

const PlatformOriginIcon: React.FC<{ platform: ReviewPlatform; className?: string }> = ({ platform, className = 'h-8 w-8' }) => {
  if (platform === 'tripadvisor') {
    return (
      <svg viewBox="0 0 36 36" className={className} fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="18" fill="#00AA6C" />
        <path d="M8.5 13.8C11.2 11.4 14.4 10.4 18 10.4C21.6 10.4 24.8 11.4 27.5 13.8" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="12.6" cy="18.8" r="4.8" fill="#00AA6C" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx="23.4" cy="18.8" r="4.8" fill="#00AA6C" stroke="#FFFFFF" strokeWidth="2.2" />
        <circle cx="12.6" cy="18.8" r="1.9" fill="#FFFFFF" />
        <circle cx="23.4" cy="18.8" r="1.9" fill="#FFFFFF" />
        <path d="M18 21.8L15.8 25H20.2L18 21.8Z" fill="#FFFFFF" />
      </svg>
    );
  }
  if (platform === 'safaribookings') {
    return (
      <div className={`inline-flex items-center justify-center rounded-full bg-[#9E0B0F] p-1 shadow-xs ${className}`}>
        <SafariBookingsLionSvg className="h-full w-full" />
      </div>
    );
  }
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="17.5" fill="#FFFFFF" stroke="#E5DDD3" strokeWidth="1" />
      <path fill="#4285F4" d="M27.9 18.3c0-.7-.1-1.4-.2-2.1H18v3.9h5.6c-.3 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.5z" />
      <path fill="#34A853" d="M18 28.5c2.8 0 5.1-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.2H8.7v2.7C10.5 26.2 14 28.5 18 28.5z" />
      <path fill="#FBBC05" d="M12.2 20.2c-.2-.6-.3-1.4-.3-2.2s.1-1.6.3-2.2v-2.7H8.7C7.9 14.6 7.5 16.2 7.5 18s.4 3.4 1.2 4.9l3.5-2.7z" />
      <path fill="#EA4335" d="M18 11.7c1.5 0 2.9.5 3.9 1.5l3-3C23.1 8.4 20.8 7.5 18 7.5c-4 0-7.5 2.3-9.3 5.6l3.5 2.7c.8-2.4 3.1-4.1 5.8-4.1z" />
    </svg>
  );
};

const CardTopPlatformBanner: React.FC<{ platform: ReviewPlatform }> = ({ platform }) => {
  if (platform === 'safaribookings') {
    return (
      <div className="relative flex h-44 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#A90D12] via-[#9E0B0F] to-[#7A070A] px-6 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_65%)]" />
        <div className="relative z-10 flex items-center gap-3.5">
          <SafariBookingsLionSvg className="h-16 w-16 shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]" />
          <div className="text-left">
            <div className="font-serif text-2xl sm:text-[1.65rem] font-normal tracking-[0.04em] text-white leading-none">
              <span className="text-3xl sm:text-[2rem]">S</span>AFARI
              <span className="text-3xl sm:text-[2rem]">B</span>OOKINGS<sup className="ml-0.5 text-xs">®</sup>
            </div>
            <div className="mt-1.5 font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.22em] text-white/90">
              Compare African Safari Tours
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-black/25 px-3.5 py-1 backdrop-blur-xs">
          {[1, 2, 3, 4, 5].map((n) => <Star key={n} className="h-3.5 w-3.5 fill-[#F5A623] text-[#F5A623]" />)}
          <span className="ml-1 text-xs font-bold tracking-wider text-white">5.0 / 5</span>
        </div>
      </div>
    );
  }
  if (platform === 'tripadvisor') {
    return (
      <div className="relative flex h-44 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#A7E9CE] via-[#88DFBC] to-[#6CD2AA] px-6 text-[#14231D]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_65%)]" />
        <div className="relative z-10 flex items-center gap-3.5">
          <PlatformOriginIcon platform="tripadvisor" className="h-16 w-16 shrink-0 drop-shadow-[0_6px_14px_rgba(0,170,108,0.3)]" />
          <div className="text-left">
            <div className="font-display text-3xl font-bold tracking-tight text-[#0B3B28] leading-none">Tripadvisor</div>
            <div className="mt-1 font-['Montserrat',_sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B3B28]/75">
              5.0 Traveler Excellence
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#0B3B28]/10 px-3.5 py-1">
          {[1, 2, 3, 4, 5].map((n) => <span key={n} className="h-3.5 w-3.5 rounded-full bg-[#00AA6C] ring-1 ring-white/60" />)}
          <span className="ml-1.5 text-xs font-bold text-[#0B3B28]">5.0</span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex h-44 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8F0FE] via-[#D2E3FC] to-[#AECBFA] px-6 text-[#1F2937]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.6),transparent_65%)]" />
      <div className="relative z-10 flex items-center gap-3.5">
        <PlatformOriginIcon platform="google" className="h-16 w-16 shrink-0 drop-shadow-[0_6px_14px_rgba(66,133,244,0.25)]" />
        <div className="text-left">
          <div className="font-display text-3xl font-bold tracking-tight text-[#1E3A8A] leading-none">Google Reviews</div>
          <div className="mt-1 font-['Montserrat',_sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/75">
            Verified Local Guide
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-3.5 inline-flex items-center gap-1 rounded-full bg-white/75 px-3.5 py-1 shadow-2xs">
        {[1, 2, 3, 4, 5].map((n) => <Star key={n} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />)}
        <span className="ml-1 text-xs font-bold text-[#1E3A8A]">5.0</span>
      </div>
    </div>
  );
};

const PLATFORM_META: Record<ReviewPlatform, { name: string; actionBg: string }> = {
  tripadvisor: { name: 'Tripadvisor', actionBg: 'bg-gradient-to-r from-[#00AA6C] to-[#008A57] text-white' },
  safaribookings: { name: 'SafariBookings', actionBg: 'bg-gradient-to-r from-[#9E0B0F] to-[#C4161C] text-white' },
  google: { name: 'Google Review', actionBg: 'bg-gradient-to-r from-[#4285F4] to-[#669DF6] text-white' },
};

const CURATED_REVIEWS: TravelerReview[] = [
  { platform: 'tripadvisor', author: 'Laurence I', location: 'London, United Kingdom • 33 contributions', title: 'A most enjoyable tour in the hands of a knowledgeable efficient and thoroughly nice guide.', text: 'I have now travelled twice with Abiy Ethiopia Tours and each time found the planning and delivery of the tour immaculate...', date: 'Nov 2025 • Couples' },
  { platform: 'tripadvisor', author: 'Angela Baldi', location: '2 contributions', title: 'Abiy Ethiopian tours is the best in Ethiopia ET', text: 'Abiy is a fantastic guide with great knowledge of the area and speaks German and English fluently...', date: 'Apr 2019 • Business' },
  { platform: 'safaribookings', author: 'Marc van Dorp', location: 'Netherlands (NL)', title: 'Well organized even on a last minute booking.', text: 'Got Abiy to know only a few days before I decided to make a trip to the south...', date: 'Sep 2026 • Visited Sep 2026' },
  { platform: 'safaribookings', author: 'Luisa Yu', location: 'United States (US)', title: 'Great Tour operator', text: 'Abiy Ethiopia Tours delivered an outstanding travel experience in Ethiopia...', date: 'Jan 2026 • Visited Apr 2024' },
  { platform: 'safaribookings', author: 'Laurence', location: 'United Kingdom (UK)', title: 'Friendly personal service from an efficient, knowledgeable operator', text: 'I have now travelled twice with Abiy Ethiopia Tours...', date: 'Jan 2026 • Visited Nov 2025' },
  { platform: 'safaribookings', author: 'Chloris Ankunda', location: 'Uganda (UG)', title: 'Best trip in Ethiopia', text: 'I had a wonderful trip in Ethiopia thanks to Abiy from Abiy Ethiopia...', date: 'Mar 2026 • Visited Nov 2025' },
  { platform: 'google', author: 'Matthew M', location: 'Local Guide • 5 contributions', title: 'Great tour operator!', text: 'Very highly recommended tour operator in Ethiopia! Great service and communication and I am looking forward to returning in the future.', date: 'Verified • Friends' },
];

const SLIDE_DURATION_MS = 7000;

const CarRentalStack = ({ c, onOpenPlanModal, reverse }: { c: any, onOpenPlanModal: any, reverse?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = c;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div {...reveal} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 w-full mb-44 last:mb-0`}>
      <div className="relative flex h-[550px] md:h-[700px] w-full lg:w-[55%] items-center justify-center">
        {images.map((img: string, index: number) => {
          let diff = index - currentIndex;
          if (diff > images.length / 2) diff -= images.length;
          if (diff < -images.length / 2) diff += images.length;
          const isCenter = diff === 0;
          const yOffset = diff * 115; 
          const scale = 1 - Math.abs(diff) * 0.12;
          const zIndex = 10 - Math.abs(diff);
          const isGrayscale = !isCenter;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{ y: yOffset, scale: scale, zIndex: zIndex, filter: isGrayscale ? 'brightness(60%) grayscale(60%)' : 'brightness(100%) grayscale(0%)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute h-[340px] md:h-[440px] w-[95%] max-w-[640px] overflow-hidden rounded-[20px] shadow-[0_20px_40px_rgba(36,22,19,0.25)]"
            >
              <img src={img} alt={`${c.title} view ${index + 1}`} className="h-full w-full object-cover" />
            </motion.div>
          );
        })}
      </div>

      <div className={`flex w-full lg:w-[45%] flex-col justify-center text-center ${reverse ? 'lg:text-right lg:items-end' : 'lg:text-left lg:items-start'}`}>
        {c.badge && (
          <span className="mb-4 inline-block rounded-sm bg-[#D9A441] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#241613]">
            {c.badge}
          </span>
        )}
        <h3 className="font-display text-4xl md:text-5xl text-[#241613] leading-[1.1]">{c.title}</h3>
        <p className="mt-5 leading-relaxed text-[#5A3D34] max-w-lg mx-auto lg:mx-0">{c.desc}</p>
        <ul className="my-8 space-y-3 max-w-lg mx-auto lg:mx-0 text-left">
          {c.bullets.map((b: string, j: number) => (
            <li key={j} className="flex gap-3 text-[15px] text-[#33201A]">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#A94332]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className={`flex flex-col sm:flex-row items-center gap-6 mt-4 w-full justify-center ${reverse ? 'lg:justify-end' : 'lg:justify-start'}`}>
          {images.length > 1 && (
            <div className="flex gap-3">
              <button onClick={handlePrev} className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-[#D8BFA4] transition-all duration-300 hover:bg-[#241613] hover:border-[#241613] hover:text-[#E8BD5A] text-[#241613] shadow-sm hover:-translate-y-1">
                <ArrowUp size={24} strokeWidth={2.5} />
              </button>
              <button onClick={handleNext} className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-[#D8BFA4] transition-all duration-300 hover:bg-[#241613] hover:border-[#241613] hover:text-[#E8BD5A] text-[#241613] shadow-sm hover:translate-y-1">
                <ArrowDown size={24} strokeWidth={2.5} />
              </button>
            </div>
          )}
          <PremiumButton variant="terracotta" onClick={() => onOpenPlanModal(c.title)} className="w-full sm:w-auto px-8 py-3.5 text-base">
            {c.linkText}
          </PremiumButton>
        </div>
        
        {images.length > 1 && (
          <div className={`flex gap-2.5 mt-10 w-full justify-center ${reverse ? 'lg:justify-end' : 'lg:justify-start'}`}>
            {images.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-[#A94332]' : 'bg-[#D8BFA4]'}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};


export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenPlanModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const [filterType, setFilterType] = useState('Any Type');
  const [filterDuration, setFilterDuration] = useState('Any Duration');

  const [selectedPlatform, setSelectedPlatform] = useState<'all' | ReviewPlatform>('all');
  const [expandedReviewIndex, setExpandedReviewIndex] = useState<number | null>(null);

  const displayedReviews = useMemo(() => {
    if (selectedPlatform === 'all') return CURATED_REVIEWS;
    return CURATED_REVIEWS.filter((r) => r.platform === selectedPlatform);
  }, [selectedPlatform]);

  const nextHeroSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevHeroSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(nextHeroSlide, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (expandedReviewIndex !== null) return;
    const reviewTimer = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const scrollAmount = clientWidth >= 1024 ? 440 : 360;
        let targetScroll = scrollLeft + scrollAmount;
        if (scrollLeft + clientWidth >= scrollWidth - 10) targetScroll = 0;
        carouselRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }, 5500);
    return () => clearInterval(reviewTimer);
  }, [expandedReviewIndex, selectedPlatform]);

  const filteredTours = useMemo(() => {
    return TOURS.filter(tour => {
      const normalizedFilter = filterType.toLowerCase().replace('simein', 'simien').replace(/\s*mountains?$/, '').trim();
      const typeMatch = filterType === 'Any Type' || tour.category === filterType || tour.category.toLowerCase().includes(normalizedFilter) || tour.destination.toLowerCase().includes(normalizedFilter) || tour.title.toLowerCase().includes(normalizedFilter);
      let durationMatch = true;
      if (filterDuration === '1 - 3 Days') durationMatch = tour.daysCount <= 3;
      else if (filterDuration === '4 - 7 Days') durationMatch = tour.daysCount >= 4 && tour.daysCount <= 7;
      else if (filterDuration === '8+ Days') durationMatch = tour.daysCount >= 8;
      return typeMatch && durationMatch;
    });
  }, [filterType, filterDuration]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth >= 1024 ? 440 : 360;
      const targetScroll = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '10+', label: 'Years of Experience', icon: Award },
    { value: '100%', label: 'Master Local Trackers', icon: Eye },
    { value: '20+', label: 'Tour Packages', icon: MapPin },
    { value: '5★', label: 'Traveler Excellence', icon: Star },
  ];

  const carRentalCards = [
    {
      title: "Private Transport & Airport Transfers", linkText: "Book Transfer", badge: "Most Booked",
      desc: "Travel around Addis Ababa with convenient, chauffeur-driven transportation for airport arrivals, business meetings, city travel, and special occasions.",
      bullets: [
        "Private airport pickups and drop-offs at Bole International Airport", 
        "Executive sedans, SUVs, 4WDs, and spacious vans", 
        "Flexible vehicle hire for business, leisure, and events",
        "Personalized transport for individuals, families, and groups"
      ],
      images: [
        "https://res.cloudinary.com/dw1ohipim/image/upload/v1793552222/kbweqt0ibh2xee6hd30q.png",
        "https://res.cloudinary.com/dw1ohipim/image/upload/v1793993595/sxrmeusepvwltdsqkz6w.jpg"
      ],
    },
    {
      title: "Explore Ethiopia & Custom Travel", linkText: "Request Vehicle", badge: "Custom Tours",
      desc: "Discover Ethiopia with private transportation tailored to your destination, travel plans, and schedule. From city excursions to extended road trips, find the right vehicle for your journey.",
      bullets: [
        "Private vehicles for sightseeing and regional travel", 
        "4WD options for suitable countryside and remote routes", 
        "Customized transport packages for multi-day trips",
        "Vehicle options for couples, families, and larger groups"
      ],
      images: ["https://res.cloudinary.com/dw1ohipim/image/upload/v1791473041/vw1ksxsq147g0s2hijwa.jpg"],
    }
  ];

  const activeSlide = HERO_SLIDES[currentSlide];
  const activeDestinationIndex = Math.max(0, HERO_DESTINATIONS.findIndex((destination) => destination.id === activeSlide.destId));
  const activeDestination = HERO_DESTINATIONS[activeDestinationIndex];
  const previousDestination = HERO_DESTINATIONS[(activeDestinationIndex - 1 + HERO_DESTINATIONS.length) % HERO_DESTINATIONS.length];
  const nextDestination = HERO_DESTINATIONS[(activeDestinationIndex + 1) % HERO_DESTINATIONS.length];

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-[#F7EBDD] font-body text-[#241613] selection:bg-[#D9A441]">
      <Helmet>
        <title>Abiy Ethiopia Tours | Premier Ethiopian Travel Agency</title>
        <meta name="description" content="Plan your trips to Ethiopia with the leading Ethiopian travel agency. Explore every beautiful place in Ethiopia, from African safari tours to historical journeys." />
      </Helmet>

      {/* ---------- HERO SECTION (UNCHANGED TEXT AS REQUESTED) ---------- */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-[#140B09] px-2 pb-14 pt-24 sm:px-4 md:min-h-[100dvh] md:pb-16 md:pt-28">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 transform-gpu bg-[#140B09]">
          <AnimatePresence initial={false}>
            <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2, ease: 'easeInOut' }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${activeSlide.src}')` }} />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-[#7A1230] opacity-[0.04] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A1538]/[0.05] via-transparent to-[#4A0A1C]/[0.09]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#140B09]/35 via-transparent to-[#140B09]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A100E]/5 via-[#1A100E]/15 to-[#140B09]/50" />
          <div className="pointer-events-none absolute left-1/2 top-[42%] h-[28rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8BD5A]/15 blur-[130px]" />
        </motion.div>
        
        <div className="pointer-events-none absolute inset-4 md:inset-7 z-10 rounded-sm border border-white/10">
          <div className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-[#E8BD5A]/60" />
          <div className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-[#E8BD5A]/60" />
          <div className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-[#E8BD5A]/60" />
          <div className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#E8BD5A]/60" />
        </div>

        <div className="absolute inset-x-0 top-0 z-30 mx-auto max-w-[95rem] px-6 pt-6">
          <Logo className="h-20 w-auto object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,.7)] sm:h-24 md:h-28" />
        </div>

        <button onClick={prevHeroSlide} aria-label="Previous image" className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-40 group flex h-14 w-14 md:h-20 md:w-20 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#1A100E]/45 backdrop-blur-xl ring-1 ring-white/10 transition-all duration-500 hover:bg-[#9e3524] hover:scale-110 hover:border-[#E8BD5A]/70 shadow-[0_10px_36px_rgba(0,0,0,0.75)] text-white">
          <ChevronLeft size={34} className="transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.5} />
        </button>

        <button onClick={nextHeroSlide} aria-label="Next image" className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 group flex h-14 w-14 md:h-20 md:w-20 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-[#1A100E]/45 backdrop-blur-xl ring-1 ring-white/10 transition-all duration-500 hover:bg-[#9e3524] hover:scale-110 hover:border-[#E8BD5A]/70 shadow-[0_10px_36px_rgba(0,0,0,0.75)] text-white">
          <ChevronRight size={34} className="transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
        </button>

        <div className="relative z-20 my-auto flex w-full flex-col items-center justify-center px-6 pt-10 text-center sm:px-12 md:px-32 md:pt-14">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[125%] w-[115%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(26,8,14,0.55)_0%,rgba(26,8,14,0.32)_45%,transparent_72%)]" />
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-7 flex items-center justify-center gap-3 md:gap-5">
            <span className="h-[1.5px] w-8 sm:w-14 md:w-20 bg-gradient-to-r from-transparent via-[#E8BD5A] to-[#E8BD5A]" />
            <div className="rounded-full border border-[#E8BD5A]/45 bg-[#1A100E]/80 px-5 py-2 backdrop-blur-md">
              <span className="font-['Montserrat',_sans-serif] text-[10px] md:text-xs font-bold uppercase tracking-[0.32em] text-[#E8BD5A]">Welcome to Abiy Ethiopia Tours</span>
            </div>
            <span className="h-[1.5px] w-8 sm:w-14 md:w-20 bg-gradient-to-l from-transparent via-[#E8BD5A] to-[#E8BD5A]" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative max-w-6xl font-['Cormorant_Garamond',_Georgia,_serif] text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[6.25rem]">
            <span className="block font-bold tracking-[-0.01em] text-white">Travel,</span>
            <span className="mt-2 block" style={{ filter: 'drop-shadow(0 2px 4px rgba(26,8,14,0.9))' }}>
              <span className="inline-block pb-3 pl-1 pr-6 font-semibold italic tracking-[-0.005em]" style={{ backgroundImage: GOLD_GRADIENT, ...CLIP_TEXT }}>Tailored to You</span>
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 1.1 }} className="mx-auto mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed text-white font-normal tracking-wide">
            We create personalized itineraries designed around your interests, schedule, and travel style.
          </motion.p>
        </div>

        <div className="relative z-30 mt-5 w-full max-w-sm px-3 sm:mt-6 sm:px-4">
          <div className="overflow-hidden rounded-lg border border-white/25 bg-[#160D0B]/25 shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/15 px-3 py-1.5 sm:px-4">
              <span className="font-['Montserrat',_sans-serif] text-[9px] font-bold uppercase tracking-[0.2em] text-[#E8BD5A]">Destinations</span>
              <span className="font-['Montserrat',_sans-serif] text-[10px] font-semibold tracking-widest text-[#FFF9F2]/70">
                <span className="text-[#E8BD5A]">{String(activeDestinationIndex + 1).padStart(2, '0')}</span>
                <span className="mx-1.5">/</span>
                {String(HERO_DESTINATIONS.length).padStart(2, '0')}
              </span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div key={activeDestination.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                    <h2 className="font-display text-lg leading-tight text-[#FFF9F2] sm:text-xl">{activeDestination.name}</h2>
                    <p className="mt-0.5 text-[10px] font-light text-[#FFF9F2]/90 sm:text-[11px]">{activeDestination.region}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={() => setCurrentSlide(previousDestination.slideIndex)} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 text-[#FFF9F2] hover:text-[#E8BD5A]"><ChevronLeft size={20} /></button>
                <button type="button" onClick={() => setCurrentSlide(nextDestination.slideIndex)} className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 text-[#FFF9F2] hover:text-[#E8BD5A]"><ChevronRight size={20} /></button>
              </div>
            </div>
            <div className="flex gap-1 px-3 pb-2.5 sm:px-4 sm:pb-3">
              {HERO_DESTINATIONS.map((destination, index) => (
                <button key={destination.id} type="button" onClick={() => setCurrentSlide(destination.slideIndex)} className={`h-1.5 flex-1 cursor-pointer rounded-full transition-colors ${index === activeDestinationIndex ? 'bg-[#E8BD5A]' : 'bg-white/20 hover:bg-white/45'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FILTER BAR ---------- */}
      <div className="relative z-40 mx-auto -mt-14 max-w-5xl px-6">
        <div className="flex flex-col items-end gap-6 rounded-sm border-t-4 border-[#DB6148] bg-[#FFF9F2] p-6 shadow-[0_30px_60px_rgba(36,22,19,.2)] md:flex-row md:p-8">
          {[
            { label: 'Tour type', value: filterType, set: setFilterType, opts: HOME_TOUR_CATEGORIES },
            { label: 'Duration', value: filterDuration, set: setFilterDuration, opts: ['Any Duration', '1 - 3 Days', '4 - 7 Days', '8+ Days'] },
          ].map((f) => (
            <label key={f.label} className="block w-full flex-1">
              <span className="mb-2 block text-sm text-[#33201A]/70">{f.label}</span>
              <select value={f.value} onChange={(e) => f.set(e.target.value)} className={SELECT}>
                {f.opts.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          ))}
          <PremiumButton arrow={false} className="w-full md:w-auto" onClick={() => document.getElementById('tours-results')?.scrollIntoView({ behavior: 'smooth' })}>
            <Search size={17} /> Search
          </PremiumButton>
        </div>
      </div>

      {/* ---------- TOUR RESULTS ---------- */}
      <section id="tours-results" className="mx-auto max-w-[90rem] px-6 pb-28 pt-16">
        <AnimatePresence mode="wait">
          {filteredTours.length > 0 && (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
              <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredTours.slice(0, 6).map((tour, i) => (
                  <ParallaxCard key={tour.id} image={tour.heroImage} title={tour.title} region={`${tour.destination} · ${tour.daysCount} days`} blurb={tour.tagline} onClick={() => onNavigate('tour-detail', tour.slug)} className={`h-[20rem] md:h-[22rem] ${i % 3 === 1 ? 'lg:mt-10' : ''}`} />
                ))}
              </div>
              <PremiumButton variant="terracotta" className="mt-16" onClick={() => onNavigate('tours')}>View all tour packages</PremiumButton>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ---------- STATS (WITH SEO KEYWORDS) ---------- */}
      <section className="bg-[#241613] py-20 text-center">
        <div className="mx-auto mb-16 max-w-3xl px-6">
          <h2 className="font-display text-4xl text-[#FFF9F2] md:text-5xl">Your Trusted <span className="text-[#E8BD5A] italic">Ethiopian Tour Operator</span></h2>
          <p className="mt-6 text-lg text-[#F7EBDD]/80 leading-relaxed font-light">
            As a leading expert in providing extraordinary <strong className="font-semibold text-white">trips to Ethiopia</strong>, we take pride in connecting you with the most <strong className="font-semibold text-white">beautiful place in Ethiopia</strong>, ensuring your adventure is both authentic and flawlessly executed.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
              <div className="font-display text-6xl text-[#E8BD5A] md:text-7xl">{s.value}</div>
              <div className="mt-2 text-sm text-[#D8BFA4]">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- CAR RENTAL & TRANSFERS (WITH SEO KEYWORDS) ---------- */}
      <section className="bg-[#F7EBDD] py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...reveal} className="mb-24 text-center">
            <span className="font-['Montserrat',_sans-serif] text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#A94332] block mb-4">
              Premium Transport
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-[#241613] mb-6">
              Addis Ababa Places to Visit & Private Transfers
            </h2>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-[#5A3D34] font-light">
              Navigating the best <strong className="font-medium text-[#241613]">places to visit in Addis Ababa</strong>? Whether landing at Bole International for business or setting out to <strong className="font-medium text-[#241613]">travel Ethiopia</strong>, we provide a vetted driver and reliable vehicle for every journey.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {carRentalCards.map((c, i) => (
              <CarRentalStack key={i} c={c} onOpenPlanModal={onOpenPlanModal} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OUR PARTNERS ---------- */}
      <section className="bg-[#F7EBDD] py-28 border-t border-[#D8BFA4]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div {...reveal}>
            <span className="font-['Montserrat',_sans-serif] text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#A94332] block mb-4">Trusted Collaborations</span>
            <h2 className="font-display text-5xl text-[#241613] md:text-6xl lg:text-7xl mb-6">Our Partners</h2>
            <p className="text-[#5A3D34] text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              We collaborate with premier hospitality and travel organizations to ensure every aspect of your journey meets our exacting standards.
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12">
            {PARTNER_LOGOS.map((partner, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className={`group relative flex h-56 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-[#D8BFA4] bg-[#FFF9F2] shadow-[0_8px_24px_rgba(36,22,19,0.06)] ring-1 ring-[#E8BD5A]/20 transition-all duration-500 hover:-translate-y-2 hover:border-[#E8BD5A] hover:ring-4 hover:ring-[#E8BD5A]/35 ${partner.isFeatured ? 'p-0' : 'p-10'}`}>
                <img src={partner.src} alt={partner.name} loading="lazy" className={`relative z-10 transition-transform duration-500 group-hover:scale-105 ${partner.isFeatured ? 'h-full w-full object-contain' : 'max-h-36 w-auto max-w-full object-contain group-hover:scale-110'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- QUOTE ---------- */}
      <section className="relative overflow-hidden bg-[#94220a] py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#94220a] via-[#7a1b07] to-[#241613] opacity-95" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-[15%] -top-[20%] h-[30rem] w-[30rem] rounded-full bg-[#E8BD5A] mix-blend-overlay blur-[100px] pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-[10%] -bottom-[20%] h-[25rem] w-[25rem] rounded-full bg-[#33201A] mix-blend-multiply blur-[80px] pointer-events-none" />

        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {QUOTE_PARTICLES.map((p) => (
              <motion.div key={p.id} className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" style={{ left: `${p.x1}%`, top: `${p.y1}%`, opacity: p.opacity }} animate={{ left: [`${p.x1}%`, `${p.x2}%`], top: [`${p.y1}%`, `${p.y2}%`], opacity: [p.opacity, p.opacity + 0.2, 0.05] }} transition={{ duration: p.duration, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} />
            ))}
          </div>
        )}

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFF9F2 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <motion.div {...reveal} className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <Quote size={160} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF9F2] opacity-5 pointer-events-none" fill="currentColor" />
          <Quote size={32} className="mb-6 text-[#E8BD5A] drop-shadow-md" fill="currentColor" />
          <blockquote className="font-display text-3xl leading-[1.3] text-[#FFF9F2] drop-shadow-xl sm:text-4xl md:text-5xl md:leading-[1.2]">
            To travel with us is not merely to see Ethiopia, but to feel the ancient pulse of its untamed wilderness.
          </blockquote>
          <div className="mt-10">
            <PremiumButton className="shadow-[0_0_40px_rgba(217,164,65,0.25)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(217,164,65,0.45)] ring-1 ring-white/10 px-8 py-3.5 text-base" onClick={() => onOpenPlanModal()}>
              Begin your exploration
            </PremiumButton>
          </div>
        </motion.div>
      </section>

      {/* ---------- REVIEWS SECTION ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7EBDD] via-[#EFE0CE] to-[#F7EBDD] py-28 md:py-36">
        <div className="relative z-10 mx-auto max-w-[90rem] px-6 md:px-10">
          <motion.div {...reveal} className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="font-['Montserrat',_sans-serif] text-xs font-bold uppercase tracking-[0.26em] text-[#A94332] block mb-3">Verified Guest Experiences</span>
              <h2 className="font-display text-4xl leading-[1.08] text-[#241613] sm:text-5xl md:text-6xl">Words from our travelers</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => setSelectedPlatform('all')} className={`cursor-pointer rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${selectedPlatform === 'all' ? 'bg-[#241613] text-[#FFF9F2] shadow-[0_8px_20px_rgba(36,22,19,0.25)]' : 'border border-[#D8BFA4] bg-[#FFF9F2] text-[#241613] hover:border-[#241613]'}`}>
                All ({CURATED_REVIEWS.length})
              </button>
              <div className="flex gap-2">
                {(['left', 'right'] as const).map((d) => (
                  <button key={d} onClick={() => scrollCarousel(d)} aria-label={d === 'left' ? 'Previous reviews' : 'Next reviews'} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D8BFA4] bg-[#FFF9F2] text-[#241613] shadow-sm transition-all duration-300 hover:border-[#241613] hover:bg-[#241613] hover:text-[#E8BD5A]">
                    {d === 'left' ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal} className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <button onClick={() => setSelectedPlatform(selectedPlatform === 'tripadvisor' ? 'all' : 'tripadvisor')} className={`group flex cursor-pointer items-center justify-between rounded-2xl border bg-[#FFF9F2] p-5 text-left transition-all duration-300 hover:-translate-y-1 ${selectedPlatform === 'tripadvisor' ? 'border-[#00AA6C] ring-2 ring-[#00AA6C]' : 'border-[#D8BFA4]/80'}`}>
              <div className="flex items-center gap-4">
                <PlatformOriginIcon platform="tripadvisor" className="h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <div className="font-display text-2xl font-bold text-[#241613]">Tripadvisor</div>
                  <div className="text-xs text-[#5A3D34]">2 Featured Reviews • 5.0 ★</div>
                </div>
              </div>
              <span className="rounded-full bg-[#00AA6C]/15 px-3 py-1 text-xs font-bold text-[#008554]">5.0</span>
            </button>
            <button onClick={() => setSelectedPlatform(selectedPlatform === 'safaribookings' ? 'all' : 'safaribookings')} className={`group flex cursor-pointer items-center justify-between rounded-2xl border bg-[#FFF9F2] p-5 text-left transition-all duration-300 hover:-translate-y-1 ${selectedPlatform === 'safaribookings' ? 'border-[#9E0B0F] ring-2 ring-[#9E0B0F]' : 'border-[#D8BFA4]/80'}`}>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#9E0B0F] p-2 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <SafariBookingsLionSvg className="h-11 w-11" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-[#241613]">SafariBookings</div>
                  <div className="text-xs text-[#5A3D34]">4 Featured Reviews • 5.0 ★</div>
                </div>
              </div>
              <span className="rounded-full bg-[#9E0B0F]/10 px-3 py-1 text-xs font-bold text-[#9E0B0F]">5.0</span>
            </button>
            <button onClick={() => setSelectedPlatform(selectedPlatform === 'google' ? 'all' : 'google')} className={`group flex cursor-pointer items-center justify-between rounded-2xl border bg-[#FFF9F2] p-5 text-left transition-all duration-300 hover:-translate-y-1 ${selectedPlatform === 'google' ? 'border-[#4285F4] ring-2 ring-[#4285F4]' : 'border-[#D8BFA4]/80'}`}>
              <div className="flex items-center gap-4">
                <PlatformOriginIcon platform="google" className="h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <div className="font-display text-2xl font-bold text-[#241613]">Google Review</div>
                  <div className="text-xs text-[#5A3D34]">Verified Local Guide • 5.0 ★</div>
                </div>
              </div>
              <span className="rounded-full bg-[#4285F4]/15 px-3 py-1 text-xs font-bold text-[#2B62B8]">5.0</span>
            </button>
          </motion.div>

          <div ref={carouselRef} className="-mx-4 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-4 pb-14 pt-4 [scrollbar-width:none]">
            {displayedReviews.map((r, i) => {
              const meta = PLATFORM_META[r.platform];
              const isExpanded = expandedReviewIndex === i;
              const isLongText = r.text.length > 220;

              return (
                <motion.article key={`${r.platform}-${r.author}-${i}`} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.06 }} className="group flex w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-white/80 bg-[#FFFFFF] p-2.5 shadow-[0_22px_50px_rgba(36,22,19,0.14),0_4px_14px_rgba(36,22,19,0.06)] sm:w-[24.5rem] md:w-[26.5rem]">
                  <div className="overflow-hidden rounded-t-[20px]">
                    <CardTopPlatformBanner platform={r.platform} />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-5 pb-4 pt-6">
                    <div>
                      <div className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-[#E5E0DA] px-4 py-1.5 text-xs font-semibold text-[#33201A]">
                        <span>{meta.name}</span><span className="opacity-50">•</span><span>{r.date}</span>
                      </div>
                      <h3 className="line-clamp-2 font-display text-2xl font-bold leading-snug text-[#1F1614]">{r.title}</h3>
                      <p className={`mt-3 text-[15px] leading-relaxed text-[#6E625E] ${isExpanded ? '' : 'line-clamp-4'}`}>“{r.text}”</p>
                      {isLongText && (
                        <button type="button" onClick={() => setExpandedReviewIndex(isExpanded ? null : i)} className="mt-2 inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-[#9E0B0F] hover:underline">
                          {isExpanded ? 'Show less' : 'Read full review'}
                        </button>
                      )}
                    </div>
                    <div onClick={() => isLongText && setExpandedReviewIndex(isExpanded ? null : i)} className={`mt-6 flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-3.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-[1.01] ${isLongText ? 'cursor-pointer' : ''} ${meta.actionBg}`}>
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 font-display text-base font-bold text-white backdrop-blur-xs">{r.author.charAt(0)}</span>
                        <div className="min-w-0 text-left">
                          <div className="flex items-center gap-1.5">
                            <span className="truncate text-sm font-bold text-white">{r.author}</span>
                            <BadgeCheck size={15} className="shrink-0 text-white" />
                          </div>
                          <div className="truncate text-[11px] text-white/85">{r.location}</div>
                        </div>
                      </div>
                      <PlatformOriginIcon platform={r.platform} className="h-8 w-8 shrink-0 rounded-full ring-2 ring-white/40" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};