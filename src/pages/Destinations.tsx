import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Map, Car, Plane, MapPin, X } from 'lucide-react';
import { PageView } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { PremiumButton, ParallaxCard } from '../components/Premium';

interface DestinationsProps {
  onNavigate: (view: PageView, param?: string) => void;
  onOpenPlanModal: (preset?: string) => void;
  initialCategory?: string; 
}

const CATEGORY_LIST = [
  { id: 'All', title: 'All Destinations', desc: 'Explore the full spectrum of our handpicked Ethiopian destinations, from the rugged highlands to the vibrant valleys.' },
  { id: 'Northern Ethiopia', title: 'Northern Ethiopia', desc: 'Explore the ancient kingdom of Axum, Lalibela’s rock-hewn churches, Gondar’s royal enclosure, Lake Tana monasteries, and the Gheralta Mountains.' },
  { id: 'Nature and Adventure', title: 'Nature and Adventure', desc: 'Discover the Simien and Bale Mountains, Awash National Park, Wenchi Crater Lake, and Chebera Churchura National Park.' },
  { id: 'Cultural', title: 'Cultural', desc: 'Experience the living cultures and traditions of Omo.' },
  { id: 'Events and Ceremonies', title: 'Events and Ceremonies', desc: 'Experience Ethiopia’s vibrant religious festivals, from Meskel’s cross celebrations to the colorful processions of Timket.' },
  { id: 'City Discoveries', title: 'City Discoveries', desc: 'Enjoy an Addis Ababa layover and explore the historic walled city of Harar.' }
];

const COMBINE_SLIDES = [
  { id: 1, url: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393567/bbeu9khgnqokdvyyjhir.jpg', title: 'Lalibela Rock Churches', subtitle: 'Northern Ethiopia', description: 'Explore the medieval rock-hewn churches of Lalibela, an active pilgrimage site carved into the highland stone.' },
  { id: 2, url: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400586/palpzv1cwzf74zsnuszl.jpg', title: 'Danakil Depression', subtitle: 'Afar Region', description: 'Discover Dallol’s vivid mineral formations, vast salt flats, and the volcanic landscapes of the Danakil Depression.' },
  { id: 3, url: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789400510/jjmp2ct6hd27bzfodiz9.jpg', title: 'Omo Valley', subtitle: 'Southern Ethiopia', description: 'Meet communities of the Lower Omo Valley and learn about the region’s distinct cultures and traditions.' },
  { id: 4, url: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393452/bbsxqhunotk33sulk888.jpg', title: 'Gheralta Mountains', subtitle: 'Tigray Highlands', description: 'Trek among Gheralta’s sandstone peaks to discover cliffside churches and far-reaching highland views.' },
  { id: 5, url: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/jphkyw2m66wt8jbv8ame.jpg', title: 'Simien Mountains', subtitle: 'Northern Highlands', description: 'Follow dramatic escarpment trails through the Simien Mountains, home to gelada baboons and rugged alpine scenery.' },
];

const matchesCategory = (dest: any, category: string) => {
  if (category === 'All') return true;
  const tagsString = dest.tags ? dest.tags.join(' ') : '';
  const str = `${dest.slug} ${dest.region} ${dest.name} ${dest.shortDescription} ${tagsString}`.toLowerCase();
  const has = (...k: string[]) => k.some((x) => str.includes(x.toLowerCase()));
  
  switch (category) {
    case 'Northern Ethiopia': return has('northern', 'axum', 'lalibela', 'gondar', 'bahirdar', 'bahir dar', 'tana', 'monasteries', 'geralta', 'gheralta');
    case 'Nature and Adventure': return has('nature', 'adventure', 'simein', 'simien', 'bale', 'awash', 'wenchi', 'wonchi', 'crater', 'chebera', 'churhura', 'churchura');
    case 'Cultural': return has('cultural', 'omo', 'tribe');
    case 'Events and Ceremonies': return has('events and ceremonies', 'meskel', 'timket', 'festival', 'genna', 'christmas');
    case 'City Discoveries': return has('city', 'addisababa', 'addis ababa', 'layover', 'harar');
    default: return true;
  }
};

const SPANS = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2', 'md:col-span-2'];

export const Destinations: React.FC<DestinationsProps> = ({ onNavigate, onOpenPlanModal, initialCategory }) => {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeDest, setActiveDest] = useState<any | null>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '25%']);

  useEffect(() => {
    setSelectedCategory(initialCategory || 'All');
  }, [initialCategory]);

  const filtered = DESTINATIONS.filter((d) => matchesCategory(d, selectedCategory));
  const currentCategoryDesc = CATEGORY_LIST.find(c => c.id === selectedCategory)?.desc;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7EBDD] font-body text-[#241613] selection:bg-[#D9A441]">
      
      <Helmet>
        <title>Best Places to Visit in Ethiopia | Addis Ababa & Beyond</title>
        <meta name="description" content="Find the best places to visit in Ethiopia, from Addis Ababa places to visit to the Danakil Depression Ethiopia. Let us guide your next adventure." />
      </Helmet>

      {/* ---------- HERO (WITH SEO INJECTION) ---------- */}
      <section ref={heroRef} className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#241613]">
        <motion.div style={{ y: bgY }} className="absolute inset-0 transform-gpu">
          <img src="https://res.cloudinary.com/dw1ohipim/image/upload/v1791473042/dgg9pz7i4rzutzmkwssd.jpg" alt="Ethiopian destination landscape" className="h-full w-full scale-110 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#241613] via-[#241613]/65 to-[#241613]/10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F7EBDD] to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-[90rem] grid-cols-1 items-end gap-10 px-6 pb-28 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#E8BD5A]"></span>
              <span className="font-['Montserrat',_sans-serif] text-[10px] tracking-[0.25em] text-[#E8BD5A] uppercase font-bold">
                The Collection
              </span>
            </div>
            
            <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.92] tracking-tight text-[#FFF9F2] drop-shadow-md">
              Explore<br />
              <span className="ml-[0.25em] inline-block text-[#E8BD5A] italic font-light drop-shadow-md">Ethiopia</span>
            </h1>
            
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#F7EBDD]/90 drop-shadow-sm font-light">
              From ancient royal cities and the <strong className="font-medium text-white">Danakil Depression Ethiopia</strong> to lush coffee forests and living cultural traditions. Discover your next journey.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <PremiumButton onClick={() => document.getElementById('explorer')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })}>
                Explore experiences
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- EXPLORER ---------- */}
      <section id="explorer" className="relative mx-auto max-w-[90rem] px-6 pb-32 pt-16">
        
        <div className="relative mb-8">
          <div role="tablist" aria-label="Filter by category" className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-4 [scrollbar-width:none]">
            {CATEGORY_LIST.map((c) => {
              const on = selectedCategory === c.id;
              return (
                <button
                  key={c.id} role="tab" aria-selected={on} onClick={() => setSelectedCategory(c.id)}
                  className={`shrink-0 cursor-pointer rounded-sm border px-6 py-4 font-display text-xl transition-all duration-300 ${
                    on ? 'border-[#DB6148] bg-[#DB6148] text-[#FFF9F2] shadow-[0_6px_0_#A94332] -translate-y-1'
                       : 'border-[#D8BFA4] bg-[#FFF9F2] text-[#33201A] hover:border-[#DB6148] hover:text-[#A94332] shadow-sm'}`}
                >
                  {c.title}
                </button>
              );
            })}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F7EBDD] to-transparent pointer-events-none lg:hidden" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="mb-14 max-w-3xl">
            <p className="text-xl md:text-2xl font-display italic text-[#5A3D34] leading-relaxed border-l-4 border-[#DB6148] pl-6">
              {currentCategoryDesc}
            </p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory + '-grid'} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-8">
            {filtered.map((d, i) => (
              <ParallaxCard key={d.id} image={d.heroImage} title={d.name} region={d.region} blurb={d.shortDescription} onClick={() => setActiveDest(d)} className={`h-[24rem] md:h-[30rem] ${SPANS[i % 5]} ${i % 2 ? 'md:mt-8' : ''}`} />
            ))}
            {/* EMPTY STATE (WITH SEO) */}
            {filtered.length === 0 && (
              <div className="col-span-full flex flex-col items-center py-28 text-center bg-[#FFF9F2] border border-[#EBD6BC] rounded-sm shadow-sm">
                <h3 className="font-display text-4xl text-[#241613]">No destinations found</h3>
                <p className="mt-3 text-[#5A3D34] max-w-md">Looking for specific <strong className="font-semibold text-[#241613]">places to visit in Addis Ababa</strong> or the highlands? We are continuously updating our collection. Please select another category.</p>
                <button onClick={() => setSelectedCategory('All')} className="mt-6 cursor-pointer text-[#A94332] font-semibold border-b border-[#A94332] pb-0.5 hover:text-[#DB6148] hover:border-[#DB6148] transition-colors">Show all destinations</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ---------- LOGISTICS ---------- */}
      <section className="bg-[#EBD6BC] py-24 border-y border-[#D8BFA4]/50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <img src={COMBINE_SLIDES[3].url} alt="Gheralta mountains from the road" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover shadow-[0_24px_50px_rgba(36,22,19,.2)]" />
            <div className="absolute -bottom-6 -right-4 flex gap-4 rounded-sm bg-[#241613] p-5 text-[#E8BD5A] shadow-xl md:-right-8 border border-[#33201A]">
              <Car size={28} strokeWidth={1.25} /><Plane size={28} strokeWidth={1.25} />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-10">
            <h2 className="font-display text-4xl leading-tight md:text-5xl text-[#241613]">Private 4x4, veteran driver, domestic flights where they save days</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5A3D34] font-light">
              Every journey includes a well-maintained vehicle and an experienced local driver. We utilize domestic flights only when they optimize your itinerary, giving you more quality time on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- COMBINE REGIONS ---------- */}
      <section className="bg-[#241613] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFF9F2 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />

        <div className="mx-auto max-w-[90rem] px-6 relative z-10">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-[#FFF9F2] md:text-6xl">Can't pick one region? Combine them in one itinerary.</h2>
        </div>
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 md:px-[max(1.5rem,calc((100vw-90rem)/2+1.5rem))] [scrollbar-width:none] relative z-10">
          {COMBINE_SLIDES.map((s) => (
            <ParallaxCard
              key={s.id} image={s.url} title={s.title} region={s.subtitle}
              onClick={() => onOpenPlanModal(`Custom Itinerary including ${s.title}`)}
              className="h-[28rem] w-[80vw] shrink-0 snap-start sm:w-[24rem]"
            />
          ))}
        </div>
      </section>

      {/* ---------- CLOSING CTA (WITH SEO) ---------- */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden text-center border-t border-[#7a1b07]">
        <img src={COMBINE_SLIDES[2].url} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#94220a]/95 via-[#94220a]/80 to-[#241613]/80 mix-blend-multiply" />
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: `${Math.random() * 100}%`, x: `${Math.random() * 100}%`, opacity: 0, scale: Math.random() * 0.8 + 0.5 }}
              animate={{ y: [null, `${Math.random() * 100}%`], x: [null, `${Math.random() * 100}%`], opacity: [0, Math.random() * 0.8 + 0.4, 0] }}
              transition={{ duration: Math.random() * 15 + 15, repeat: Infinity, ease: "linear" }}
              className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(255,255,255,0.8)]"
            />
          ))}
        </div>

        <div className="relative z-10 px-6">
          <span className="font-['Montserrat',_sans-serif] text-[10px] tracking-[0.25em] text-[#E8BD5A] uppercase font-bold block mb-6 drop-shadow-md">The Journey Awaits</span>
          <h2 className="font-display text-6xl leading-[0.95] text-[#FFF9F2] md:text-8xl drop-shadow-xl">Want to see specific <br className="hidden md:block"/><span className="text-[#E8BD5A] italic">places to visit in Ethiopia?</span></h2>
          <div className="mt-12">
            <PremiumButton onClick={() => onNavigate('tours')} className="shadow-[0_0_40px_rgba(217,164,65,0.3)]">
              Explore our tours
            </PremiumButton>
          </div>
        </div>
      </section>

      {/* ---------- DESTINATION MODAL ---------- */}
      <AnimatePresence>
        {activeDest && (
          <motion.div
            role="dialog" aria-modal="true" aria-label={activeDest.name}
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 220 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#FFF9F2] transform-gpu selection:bg-[#DB6148] selection:text-[#FFF9F2]"
          >
            <button onClick={() => setActiveDest(null)} aria-label="Close"
              className="fixed right-6 top-6 z-[110] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#E8BD5A] text-[#241613] shadow-[0_10px_30px_rgba(36,22,19,0.3)] transition-transform hover:scale-105 hover:bg-[#D9A441]">
              <X size={24} strokeWidth={2} />
            </button>
            
            <div className="relative h-[70vh] bg-[#241613]">
              <img src={activeDest.heroImage} alt={activeDest.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241613] via-[#241613]/30 to-transparent" />
              <div className="absolute bottom-0 w-full px-6 pb-16 md:px-16 max-w-[90rem] mx-auto left-0 right-0">
                <p className="mb-4 flex items-center gap-2 font-['Montserrat',_sans-serif] text-[10px] font-bold uppercase tracking-widest text-[#E8BD5A] drop-shadow-md">
                  <MapPin size={14} />{activeDest.region}
                </p>
                <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-none text-[#FFF9F2] drop-shadow-lg">{activeDest.name}</h1>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl px-6 py-20">
              <p className="font-display text-3xl leading-relaxed text-[#241613] md:text-4xl">{activeDest.shortDescription}</p>
              
              <div className="mt-16 flex flex-col gap-6 sm:flex-row pt-12 border-t border-[#EBD6BC]">
                <PremiumButton onClick={() => { setActiveDest(null); setTimeout(() => onNavigate('destination-detail', activeDest.slug), 300); }}>
                  Read the full guide
                </PremiumButton>
                <PremiumButton variant="outline" arrow={false} onClick={() => { setActiveDest(null); onOpenPlanModal(`Trip to ${activeDest.name}`); }} className="!border-[#D8BFA4] !text-[#A94332] hover:!bg-[#DB6148] hover:!text-[#FFF9F2] hover:!border-[#DB6148]">
                  Plan a trip here
                </PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};