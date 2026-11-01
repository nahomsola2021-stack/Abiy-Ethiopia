import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { PageView } from '../types';
import { TOURS } from '../data/tours';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { PremiumButton } from '../components/Premium';
import {
  Clock, MapPin, Calendar, Car, Compass, Check, X as XIcon,
  ChevronDown, ChevronUp, ShieldCheck, Star
} from 'lucide-react';

interface TourDetailProps {
  slug: string;
  onNavigate: (view: PageView, param?: string) => void;
  onOpenPlanModal: (preset?: string) => void;
}

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

export const TourDetail: React.FC<TourDetailProps> = ({ slug, onNavigate, onOpenPlanModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Find the exact tour by slug, mapping the exact data
  const tour = TOURS.find((t) => t.slug === slug) || TOURS[0];
  
  const [expandedDays, setExpandedDays] = useState<{ [key: number]: boolean }>({ 1: true });

  // Parallax Setup
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({ ...prev, [dayNum]: !prev[dayNum] }));
  };

  const expandAllDays = () => {
    const all: { [key: number]: boolean } = {};
    tour.itinerary.forEach((d) => { all[d.day] = true; });
    setExpandedDays(all);
  };

  const collapseAllDays = () => { setExpandedDays({}); };

  return (
    <div ref={containerRef} className="bg-[#F7EBDD] font-body text-[#241613] selection:bg-[#D9A441]">
      <Helmet>
        <title>{tour.title} | African Safari Tours & Ethiopia Trips</title>
        <meta name="description" content={`Book the ${tour.title}. Experience an authentic african safari and explore the best places to visit in ethiopia with our expert local guides.`} />
      </Helmet>

      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden bg-[#241613] pb-36 pt-40">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 transform-gpu">
          <img src={tour.heroImage} alt={tour.title} className="h-full w-full scale-110 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241613] via-[#241613]/40 to-[#241613]/25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7EBDD] to-transparent" />
        </motion.div>
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] text-[#E8BD5A]">
              <span className="rounded-sm bg-[#D9A441] px-3 py-1 font-semibold text-[#241613]">{tour.category || 'Expedition'}</span>
              <span className="flex items-center gap-1.5"><MapPin size={16} strokeWidth={1.5} /> {tour.destination}</span>
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8.5vw,7rem)] leading-[0.95] tracking-tight text-[#FFF9F2]">{tour.title}</h1>
            <p className="mt-6 max-w-2xl font-display text-xl italic text-[#F7EBDD]/90 md:text-3xl">{tour.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ---------- SNAPSHOT ---------- */}
      <div className="relative z-20 mx-auto -mt-24 max-w-[90rem] px-6">
        <dl className="grid grid-cols-2 gap-8 rounded-sm bg-[#FFF9F2] p-8 shadow-[0_4px_8px_rgba(36,22,19,.1),0_30px_60px_rgba(36,22,19,.2)] md:grid-cols-4">
          {[
            { Icon: Clock, label: 'Duration', value: tour.duration },
            { Icon: Compass, label: 'Difficulty', value: tour.difficulty },
            { Icon: Car, label: 'Transport', value: tour.transportation },
            { Icon: Calendar, label: 'Best season', value: tour.bestMonths },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="border-l-2 border-[#DB6148] pl-4">
              <dt className="flex items-center gap-2 text-sm text-[#33201A]/70"><Icon size={15} strokeWidth={1.5} className="text-[#DB6148]" /> {label}</dt>
              <dd className="mt-1 font-display text-xl leading-snug md:text-2xl">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto max-w-[90rem] px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Tours', view: 'tours' }, { label: tour.title }]} onNavigate={onNavigate} />
      </div>

      {/* ---------- MAIN ---------- */}
      <div className="mx-auto max-w-[90rem] px-6 py-14">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="space-y-28 lg:col-span-8">
            {/* Overview (WITH SEO) */}
            <motion.div {...reveal}>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">About this expedition</h2>
              <p className="mt-4 text-[#A94332] italic font-medium">
                This journey is perfect for those looking to <strong className="font-semibold">travel Ethiopia</strong> deeply and experience authentic <strong className="font-semibold">African safari tours</strong>.
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-[1.85] text-[#33201A] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[5.5rem] first-letter:leading-[0.8] first-letter:text-[#DB6148]">
                {tour.overview}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div {...reveal} className="border-y border-[#D8BFA4] py-12">
              <h3 className="font-display text-3xl md:text-4xl">Journey highlights</h3>
              <ul className="mt-8 grid gap-x-12 sm:grid-cols-2">
                {tour.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 border-t border-[#D8BFA4]/70 py-5 leading-relaxed text-[#33201A]">
                    <Star size={16} className="mt-1.5 shrink-0 fill-[#D9A441] text-[#D9A441]" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Itinerary */}
            <div>
              <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#D8BFA4] pb-6 sm:flex-row sm:items-end">
                <h3 className="font-display text-4xl md:text-6xl">Day by day</h3>
                <div className="flex gap-6 text-sm font-semibold">
                  <button onClick={expandAllDays} className="cursor-pointer underline-offset-4 transition-colors hover:text-[#A94332] hover:underline">Expand all</button>
                  <button onClick={collapseAllDays} className="cursor-pointer underline-offset-4 transition-colors hover:text-[#A94332] hover:underline">Collapse all</button>
                </div>
              </div>
              <div className="relative space-y-4 pl-6 md:pl-10">
                <div className="absolute bottom-2 left-[7px] top-2 w-px bg-[#D8BFA4] md:left-[15px]" />
                {tour.itinerary.map((day: any) => {
                  const open = !!expandedDays[day.day];
                  return (
                    <div key={day.day} className="relative">
                      <span className={`absolute -left-6 top-9 h-3.5 w-3.5 rounded-full border-2 transition-colors duration-500 md:-left-10 md:h-4 md:w-4 ${open ? 'border-[#DB6148] bg-[#DB6148]' : 'border-[#D8BFA4] bg-[#F7EBDD]'}`} />
                      <div className={`overflow-hidden rounded-sm bg-[#FFF9F2] transition-shadow duration-500 ${open ? 'shadow-[0_24px_48px_rgba(36,22,19,.16)]' : 'shadow-[0_2px_4px_rgba(36,22,19,.08)] hover:shadow-[0_12px_28px_rgba(36,22,19,.12)]'}`}>
                        <button onClick={() => toggleDay(day.day)} aria-expanded={open} className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-6 text-left md:px-10 md:py-8">
                          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                            <span className={`font-display text-4xl transition-colors duration-500 ${open ? 'text-[#DB6148]' : 'text-[#D8BFA4]'}`}>{day.day < 10 ? `0${day.day}` : day.day}</span>
                            <div>
                              <p className="flex items-center gap-1.5 text-sm text-[#A94332]"><MapPin size={14} strokeWidth={1.5} /> {day.location}</p>
                              <h4 className={`font-display text-2xl leading-tight transition-colors duration-500 md:text-3xl ${open ? 'text-[#241613]' : 'text-[#33201A]/80'}`}>{day.title}</h4>
                            </div>
                          </div>
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${open ? 'bg-[#D9A441] text-[#241613]' : 'bg-[#F7EBDD] text-[#33201A]'}`}>
                            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                              <div className="space-y-6 px-6 pb-8 md:px-10 md:pb-10">
                                <p className="max-w-2xl text-lg leading-relaxed text-[#33201A]">{day.description}</p>
                                {day.highlights && day.highlights.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {day.highlights.map((h: string, i: number) => (
                                      <span key={i} className="inline-flex items-center gap-2 rounded-sm bg-[#F7EBDD] px-3 py-1.5 text-sm"><MapPin size={12} className="text-[#DB6148]" /> {h}</span>
                                    ))}
                                  </div>
                                )}
                                {(day.accommodation || day.mealsIncluded) && (
                                  <div className="grid gap-6 border-t border-[#D8BFA4]/70 pt-6 sm:grid-cols-2">
                                    {day.accommodation && <div><span className="block text-sm text-[#33201A]/70">Accommodation</span><span className="font-display text-xl">{day.accommodation}</span></div>}
                                    {day.mealsIncluded && <div><span className="block text-sm text-[#33201A]/70">Meals included</span><span className="font-display text-xl">{day.mealsIncluded}</span></div>}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Included / not included */}
            <motion.div {...reveal} className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 flex items-center gap-3 font-display text-3xl"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4F7A4A]/15 text-[#4F7A4A]"><Check size={16} strokeWidth={2.5} /></span> What's included</h3>
                <ul className="border-t border-[#D8BFA4]">
                  {tour.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-[#D8BFA4]/70 py-4 leading-relaxed"><Check size={18} className="mt-0.5 shrink-0 text-[#4F7A4A]" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-6 flex items-center gap-3 font-display text-3xl"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A94332]/15 text-[#A94332]"><XIcon size={16} strokeWidth={2.5} /></span> Not included</h3>
                <ul className="border-t border-[#D8BFA4]">
                  {tour.whatsNotIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-[#D8BFA4]/70 py-4 leading-relaxed"><XIcon size={18} className="mt-0.5 shrink-0 text-[#A94332]" /> {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ---------- STICKY SIDEBAR (WITH SEO) ---------- */}
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-sm bg-[#241613] p-9 text-[#F7EBDD] shadow-[0_30px_60px_rgba(36,22,19,.35)] md:p-10">
                <p className="text-sm text-[#E8BD5A]">Private escorted journey</p>
                <h3 className="mt-2 font-display text-4xl leading-tight text-[#FFF9F2]">Plan this journey</h3>
                <p className="mt-4 leading-relaxed text-[#D8BFA4]">
                  Looking for <strong className="font-medium text-white">cheap package holidays</strong> or luxury custom <strong className="font-medium text-white">trips to Ethiopia</strong>? Receive a detailed proposal tailored to your travel dates, group size, and pacing. We handle all logistics.
                </p>
                <PremiumButton className="mt-8 w-full" onClick={() => onOpenPlanModal(tour.title)}>Request custom quote</PremiumButton>
                <ul className="mt-9 space-y-4 border-t border-[#F7EBDD]/15 pt-8 text-[#D8BFA4]">
                  <li className="flex items-center gap-4"><ShieldCheck size={19} strokeWidth={1.5} className="text-[#E8BD5A]" /> Licensed tour operator</li>
                  <li className="flex items-center gap-4"><Compass size={19} strokeWidth={1.5} className="text-[#E8BD5A]" /> Customizable start dates</li>
                  <li className="flex items-center gap-4"><Clock size={19} strokeWidth={1.5} className="text-[#E8BD5A]" /> 24/7 personal support</li>
                </ul>
              </div>

              {tour.practicalNotes && tour.practicalNotes.length > 0 && (
                <div className="rounded-sm border border-[#D8BFA4] bg-[#FFF9F2] p-8">
                  <h4 className="flex items-center gap-3 font-display text-2xl"><Compass size={20} strokeWidth={1.25} className="text-[#DB6148]" /> Practical notes</h4>
                  <ul className="mt-5 space-y-4">
                    {tour.practicalNotes.map((note, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-[#33201A]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A441]" />{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <CTASection onOpenPlanModal={onOpenPlanModal} />
    </div>
  );
};