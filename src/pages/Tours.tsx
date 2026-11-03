import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, MapPin, Search, LayoutGrid, List as ListIcon, Check, X, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageView } from '../types';
import { TOURS } from '../data/tours';
import { PremiumButton, ParallaxCard } from '../components/Premium';

const CHIP = 'cursor-pointer rounded-md border px-4 py-2 text-sm font-semibold transition-all duration-300';

const TOUR_CATEGORIES = [
  'All',
  'Completed Ethiopia Journey',
  'Cultural Journeys',
  'Historical Discoveries',
  'Nature and Adventure',
  'Wildlife Safaris',
  'Day Trips',
  'Birding Tours',
  'Specialty Coffee Tours'
];

const ALL_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getActiveMonths = (bestMonthsStr: string): string[] => {
  if (!bestMonthsStr) return [];
  const lower = bestMonthsStr.toLowerCase();
  if (lower.includes('year-round')) return ALL_MONTHS;
  if (lower.includes('october to may')) return ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  if (lower.includes('october to march')) return ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  if (lower.includes('october to april')) return ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
  if (lower.includes('november to february')) return ['Nov', 'Dec', 'Jan', 'Feb'];
  if (lower.includes('january 5 – 8')) return ['Jan'];
  return ALL_MONTHS.filter(m => lower.includes(m.toLowerCase()));
};

interface ToursProps {
  onNavigate: (view: PageView, param?: string) => void;
  onOpenPlanModal: (preset?: string) => void;
  initialCategory?: string;
}

export const Tours: React.FC<ToursProps> = ({ onNavigate, onOpenPlanModal, initialCategory }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeMajorCategory, setActiveMajorCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxDuration, setMaxDuration] = useState<number>(19);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setMaxDuration(19);
    setActiveMajorCategory('All');
    setCurrentPage(1);
  };

  const checkCategoryMatch = (tourCat: string, filterCat: string) => {
    if (!filterCat || filterCat === 'All') return true;
    if (tourCat === filterCat) return true;
    
    const tLower = tourCat.toLowerCase();
    const fLower = filterCat.toLowerCase();
    
    if (fLower.includes('special') && tLower.includes('completed')) return true;
    if (fLower.includes('adventure') && tLower.includes('nature')) return true;
    
    return tLower.includes(fLower) || fLower.includes(tLower);
  };

  const filteredTours = useMemo(() => {
    return TOURS.filter(tour => {
      const tabMatch = checkCategoryMatch(tour.category, activeMajorCategory);
      const sidebarCatMatch = selectedCategories.length === 0 || selectedCategories.some(c => checkCategoryMatch(tour.category, c));
      const searchMatch = 
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        tour.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const durationMatch = tour.daysCount <= maxDuration;
      
      return tabMatch && sidebarCatMatch && searchMatch && durationMatch;
    });
  }, [searchQuery, selectedCategories, maxDuration, activeMajorCategory]);

  useEffect(() => {
    if (!initialCategory) {
      setActiveMajorCategory('All');
      return;
    }
    
    let mappedCategory = initialCategory;
    if (initialCategory === 'Ethiopian Special Tours') mappedCategory = 'Completed Ethiopia Journey';
    if (initialCategory === 'Nature Escapes' || initialCategory === 'Adventure Trails') mappedCategory = 'Nature and Adventure';
    if (initialCategory.toLowerCase() === 'day trips' || initialCategory === 'City Tours') mappedCategory = 'Day Trips';
    
    if (TOUR_CATEGORIES.includes(mappedCategory)) {
      setActiveMajorCategory(mappedCategory);
    } else {
      setActiveMajorCategory('All');
    }
  }, [initialCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategories, maxDuration, activeMajorCategory]);

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);
  const paginatedTours = filteredTours.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const scrollToFilters = () => {
    const el = document.getElementById('tour-filters-section');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToFilters();
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7EBDD] font-body text-[#241613] selection:bg-[#D9A441]">
      <Helmet>
        <title>Ethiopia Tours & Packages | African Safari & Cultural Trips</title>
        <meta name="description" content="Discover top Ethiopia tourist attractions and places to visit in Ethiopia. Book your Danakil Depression Ethiopia adventure or an unforgettable African safari." />
      </Helmet>

      {/* ---------- HERO (UNCHANGED TEXT) ---------- */}
      <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-[#241613] lg:min-h-[92vh]">
        <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col items-center justify-end px-6 pb-28 pt-40 text-center sm:px-10 sm:pb-32 md:px-12 lg:w-1/2 lg:items-start lg:pb-32 lg:pt-48 lg:text-left">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.5rem,13vw,9.5rem)] font-bold leading-[0.9] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
            Signature<br /><span className="block lg:inline-block lg:ml-[0.4em] text-[#E8BD5A]">journeys</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="mx-auto mt-6 max-w-md text-base font-medium leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:mt-8 sm:text-lg lg:mx-0">
            Handcrafted expeditions across Ethiopia, from ancient rock churches to the depths of the Danakil.
          </motion.p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row lg:justify-start sm:gap-4">
            <PremiumButton className="w-full sm:w-auto" onClick={scrollToFilters}>Browse tours</PremiumButton>
            <PremiumButton className="w-full sm:w-auto" variant="outline" arrow={false} onClick={() => onOpenPlanModal()}>Design my own</PremiumButton>
          </div>
        </div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 transform-gpu lg:inset-y-0 lg:right-0 lg:left-auto lg:w-[58%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
          <img src="https://res.cloudinary.com/dw1ohipim/image/upload/v1791473038/wg96dkeei22nxlr1uspr.jpg" alt="Ethiopian highlands at dawn" className="h-full w-full scale-110 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241613]/90 via-[#241613]/40 to-transparent lg:bg-gradient-to-r lg:from-[#241613] lg:via-[#241613]/70 lg:to-transparent" />
        </motion.div>
      </section>

      {/* ---------- CATEGORY TABS (TOP BAR) ---------- */}
      <section className="mx-auto max-w-[90rem] px-4 pb-6 pt-16 sm:px-6">
        <div className="relative">
          <div role="tablist" className="flex overflow-x-auto whitespace-nowrap gap-x-8 gap-y-3 border-b border-[#D8BFA4] pb-1 [scrollbar-width:none] scroll-smooth">
            {TOUR_CATEGORIES.map((tab) => (
              <button key={tab} role="tab" aria-selected={activeMajorCategory === tab} onClick={() => setActiveMajorCategory(tab)}
                className={`relative shrink-0 cursor-pointer pb-4 font-display text-2xl md:text-3xl transition-colors duration-300 ${activeMajorCategory === tab ? 'text-[#241613]' : 'text-[#33201A]/45 hover:text-[#A94332]'}`}>
                {tab}
                {activeMajorCategory === tab && <motion.div layoutId="activeTabIndicator" transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-x-0 -bottom-px h-[3px] bg-[#DB6148]" />}
              </button>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F7EBDD] to-transparent pointer-events-none lg:hidden" />
        </div>
      </section>

      {/* ---------- FILTERS + RESULTS ---------- */}
      <section className="relative mx-auto max-w-[90rem] px-4 pb-24 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row">
          
          {/* EDITORIAL SIDEBAR (WITH SEO INJECTIONS) */}
          <aside id="tour-filters-section" className="scroll-mt-24 shrink-0 lg:w-1/4">
            <div className="h-max rounded-sm bg-[#FFF9F2] px-8 py-10 shadow-sm border border-[#EBD6BC]/50">
              
              <div className="mb-6 flex items-baseline justify-between border-b border-[#D8BFA4] pb-6">
                <h2 className="font-display text-4xl text-[#241613]">Refine</h2>
                <button onClick={clearAllFilters} className="cursor-pointer font-body text-sm font-bold text-[#A94332] hover:text-[#DB6148] transition-colors">
                  Reset
                </button>
              </div>

              {/* SEO Content Block */}
              <p className="mb-10 text-sm text-[#5A3D34] leading-relaxed">
                Filter our curated experiences to discover the best <strong className="font-semibold text-[#241613]">places to visit in Ethiopia</strong>. From the extreme landscapes of the <strong className="font-semibold text-[#241613]">Danakil Depression Ethiopia</strong> to an authentic <strong className="font-semibold text-[#241613]">African safari</strong>, refine your search below.
              </p>

              {/* Sidebar: Categories */}
              <h3 className="mb-6 font-display text-[13px] font-semibold tracking-[0.25em] uppercase text-[#5A3D34]/70">
                Tour Categories
              </h3>
              <div className="mb-12 flex flex-col gap-5">
                {TOUR_CATEGORIES.filter(c => c !== 'All').map((cat) => {
                  const on = selectedCategories.includes(cat);
                  return (
                    <label key={cat} className="group flex cursor-pointer items-start gap-4">
                      <span className={`mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[4px] border transition-all ${on ? 'border-[#DB6148] bg-[#DB6148]' : 'border-[#D8BFA4] bg-transparent group-hover:border-[#DB6148]'}`}>
                        {on && <Check size={14} className="text-[#FFF9F2]" strokeWidth={3} />}
                      </span>
                      <input type="checkbox" className="sr-only" checked={on}
                        onChange={() => setSelectedCategories(on ? selectedCategories.filter((c) => c !== cat) : [...selectedCategories, cat])} />
                      <span className={`font-body text-[17px] leading-snug transition-colors ${on ? 'text-[#241613] font-normal' : 'text-[#5A3D34] font-light group-hover:text-[#241613]'}`}>
                        {cat}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Sidebar: Max Duration */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-[13px] font-semibold tracking-[0.25em] uppercase text-[#5A3D34]/70">
                  Max duration
                </h3>
                <span className="font-body text-base font-bold text-[#A94332]">{maxDuration} days</span>
              </div>
              <input type="range" min="1" max="19" value={maxDuration} onChange={(e) => setMaxDuration(parseInt(e.target.value))}
                aria-label="Maximum duration in days" className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#EBD6BC] accent-[#DB6148]" />
            </div>
          </aside>

          {/* MAIN RESULTS */}
          <main className="flex flex-col gap-6 lg:w-3/4">
            <div className="flex flex-col items-center justify-between gap-4 rounded-sm bg-[#FFF9F2] p-4 shadow-sm border border-[#EBD6BC]/50 sm:flex-row">
              <div className="relative w-full sm:w-1/2">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#33201A]/50" size={18} />
                <input type="text" placeholder="Search regions, wildlife or experiences" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border border-[#D8BFA4] bg-[#F7EBDD]/50 py-3 pl-12 pr-10 text-sm focus:border-[#DB6148] focus:outline-none focus:ring-1 focus:ring-[#DB6148] text-[#241613] placeholder:text-[#33201A]/40 transition-colors" />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#33201A]/60 hover:text-[#A94332] transition-colors"><X size={16} /></button>
                )}
              </div>
              <div className="flex w-full items-center justify-between gap-4 sm:w-auto">
                <span className="text-sm text-[#33201A]/75">Showing <strong className="text-[#241613]">{filteredTours.length}</strong> tours</span>
                <div className="flex rounded-md border border-[#D8BFA4] p-1">
                  {([['list', ListIcon, 'List view'], ['grid', LayoutGrid, 'Grid view']] as const).map(([mode, Icon, label]) => (
                    <button key={mode} onClick={() => setViewMode(mode)} title={label} aria-label={label}
                      className={`cursor-pointer rounded p-2 transition-colors ${viewMode === mode ? 'bg-[#D9A441] text-[#241613] shadow-sm' : 'text-[#33201A]/60 hover:text-[#241613]'}`}>
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <motion.div layout className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              <AnimatePresence mode="popLayout">
                {paginatedTours.map((tour) => {
                  const activeMonths = getActiveMonths(tour.bestMonths);
                  const list = viewMode === 'list';
                  return (
                    <motion.article 
                      layout 
                      key={tour.id} 
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.95 }} 
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => onNavigate('tour-detail' as any, tour.slug)}
                      className={`group flex cursor-pointer flex-col overflow-hidden rounded-sm bg-[#FFF9F2] shadow-[0_2px_4px_rgba(36,22,19,.1),0_16px_32px_rgba(36,22,19,.12)] border border-[#EBD6BC]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_56px_rgba(36,22,19,.28)] hover:border-[#D9A441]/50 ${list ? 'md:flex-row' : ''}`}>
                      
                      {/* Tour Image */}
                      <div className={`relative overflow-hidden ${list ? 'h-64 md:h-auto md:w-5/12' : 'aspect-[4/3] w-full'}`}>
                        <img src={tour.heroImage} alt={tour.title} loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#241613]/75 via-transparent to-transparent" />
                        
                        {/* Tags Top-Left */}
                        <div className="absolute left-4 top-4 flex flex-col items-start gap-2 z-10">
                          <span className="rounded-sm bg-[#FFF9F2] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A94332] shadow-sm">{tour.category}</span>
                          <span className="rounded-sm bg-[#241613]/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E8BD5A] shadow-sm">{tour.difficulty}</span>
                        </div>

                        {/* BEAUTIFUL PRICE BADGE (Top-Right of Image) */}
                        {tour.price !== undefined && (
                          <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-[#E8BD5A]/60 bg-[#241613]/85 px-3.5 py-1.5 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7EBDD]/70">from</span>
                            <span className="font-display text-lg font-bold text-[#E8BD5A] drop-shadow-sm leading-none">
                              ${tour.price.toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Tour Card Body */}
                      <div className={`flex flex-col ${list ? 'md:w-7/12' : ''}`}>
                        <div className="flex flex-grow flex-col p-6 md:p-8">
                          
                          {/* Header with Title + Duration/Price info */}
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-display text-3xl leading-tight transition-colors group-hover:text-[#A94332] md:text-4xl">{tour.title}</h3>
                            
                            <div className="hidden shrink-0 text-right md:flex md:flex-col md:items-end">
                              <div className="font-display text-3xl leading-none text-[#DB6148] font-bold">
                                {tour.price !== undefined ? `$${tour.price.toLocaleString()}` : `${tour.daysCount}d`}
                              </div>
                              <div className="text-[10px] font-bold uppercase tracking-widest text-[#33201A]/50 mt-1">
                                {tour.daysCount} {tour.daysCount === 1 ? 'day' : 'days'}
                              </div>
                            </div>
                          </div>

                          <p className="mt-3 font-display text-lg italic text-[#5A3D34]">{tour.tagline}</p>
                          <p className="mb-6 mt-4 line-clamp-3 flex-grow text-sm leading-relaxed text-[#33201A]/90">{tour.overview}</p>
                          <p className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#33201A]/80">
                            <MapPin size={15} className="shrink-0 text-[#DB6148]" />
                            <span className="truncate">{tour.destination}</span>
                          </p>

                          <div className="flex items-center justify-between border-t border-[#EBD6BC]/60 pt-4 mt-auto">
                            <span className="inline-flex items-center gap-2 font-semibold text-[#241613] transition-colors group-hover:text-[#A94332] pb-0.5">
                              View full itinerary <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                            </span>
                            
                            {/* Mobile Price display */}
                            {tour.price !== undefined && (
                              <span className="md:hidden font-display text-2xl font-bold text-[#DB6148]">
                                ${tour.price.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* List View Footer: Best Months */}
                        {list && (
                          <div className="flex items-center justify-between gap-4 border-t border-[#D8BFA4]/70 bg-[#F7EBDD]/60 px-6 py-3.5">
                            <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#33201A]/70">
                              <Calendar size={13} className="text-[#DB6148]" /> Best months
                            </span>
                            <div className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none]">
                              {ALL_MONTHS.map((m) => (
                                <span key={m} className={`text-xs transition-colors ${activeMonths.includes(m) ? 'font-bold text-[#241613]' : 'text-[#33201A]/30 line-through'}`}>{m}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>

              {/* EMPTY STATE / NO TOURS (WITH SEO KEYWORDS) */}
              {filteredTours.length === 0 && (
                <div className="col-span-full flex flex-col items-center py-24 text-center border border-[#EBD6BC] rounded-sm bg-[#FFF9F2] shadow-sm px-6">
                  <Compass className="mb-4 h-10 w-10 text-[#DB6148]" strokeWidth={1.25} />
                  <h3 className="font-display text-4xl text-[#241613]">Looking to travel Ethiopia?</h3>
                  <p className="mt-4 max-w-lg text-[#5A3D34] leading-relaxed">
                    We couldn't find an exact match for those filters, but we offer everything from luxury custom tours to affordable <strong className="font-semibold text-[#241613]">cheap package holidays</strong>. Widen your duration or explore another category.
                  </p>
                  <button onClick={clearAllFilters} className="mt-8 cursor-pointer font-semibold text-[#A94332] border-b border-[#A94332] pb-0.5 hover:text-[#DB6148] hover:border-[#DB6148] transition-colors">Reset all filters</button>
                </div>
              )}
            </motion.div>

            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
                <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} aria-label="Previous page"
                  className="cursor-pointer rounded-md border border-[#D8BFA4] p-3 transition-colors hover:border-[#DB6148] disabled:cursor-not-allowed disabled:opacity-40 text-[#241613]"><ChevronLeft size={16} /></button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button key={page} onClick={() => handlePageChange(page)} aria-current={currentPage === page}
                    className={`${CHIP} h-11 w-11 px-0 ${currentPage === page ? 'border-[#DB6148] bg-[#DB6148] text-[#FFF9F2] shadow-md' : 'border-[#D8BFA4] text-[#33201A] hover:border-[#DB6148] hover:text-[#241613]'}`}>{page}</button>
                ))}
                <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} aria-label="Next page"
                  className="cursor-pointer rounded-md border border-[#D8BFA4] p-3 transition-colors hover:border-[#DB6148] disabled:cursor-not-allowed disabled:opacity-40 text-[#241613]"><ChevronRight size={16} /></button>
              </nav>
            )}
          </main>
        </div>
      </section>

      {/* ---------- CLOSING CTA (WITH SEO KEYWORDS) ---------- */}
      <section className="relative overflow-hidden bg-[#94220a] py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse at 15% 20%, rgba(232,189,90,0.22), transparent 38%)',
              'radial-gradient(ellipse at 85% 80%, rgba(36,22,19,0.5), transparent 42%)',
              'radial-gradient(#FFF9F2 1px, transparent 1px)',
              'linear-gradient(135deg, #94220a, #7a1b07 55%, #241613)',
            ].join(', '),
            backgroundSize: 'auto, auto, 32px 32px, auto',
          }}
        />

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <span className="font-['Montserrat',_sans-serif] text-[10px] tracking-[0.25em] text-[#E8BD5A] uppercase font-bold block mb-4 drop-shadow-md">
            Tailor-Made Excellence
          </span>
          <h2 className="font-display text-4xl leading-[0.98] text-[#FFF9F2] drop-shadow-xl md:text-6xl lg:text-7xl">
            Want to see specific <span className="italic text-[#E8BD5A]">Ethiopia tourist attractions</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#FFF9F2] drop-shadow-md font-light md:text-lg">
            If a standard brochure isn't enough, we adjust days, pacing, lodges and routes so you can explore the <strong className="font-medium text-white">places to visit in Ethiopia</strong> exactly how you want. Perfect for solo travelers, couples, families, and private groups.
          </p>
          <div className="mt-9">
            <PremiumButton
              className="shadow-[0_0_40px_rgba(217,164,65,0.25)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(217,164,65,0.45)] ring-1 ring-white/10"
              onClick={() => onOpenPlanModal()}
            >
              Start designing
            </PremiumButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};