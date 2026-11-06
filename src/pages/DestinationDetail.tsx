import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { PageView } from '../types';
import { DESTINATIONS } from '../data/destinations';
import { TOURS } from '../data/tours';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TourCard } from '../components/TourCard';
import { CTASection } from '../components/CTASection';
import { PremiumButton } from '../components/Premium';
import { MapPin, Calendar, Mountain, Compass, ArrowRight } from 'lucide-react';

interface DestinationDetailProps {
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

export const DestinationDetail: React.FC<DestinationDetailProps> = ({ slug, onNavigate, onOpenPlanModal }) => {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const destination = DESTINATIONS.find((d) => d.slug === slug) || DESTINATIONS[0];
  const isGenna = destination.slug === 'genna-ethiopian-christmas-lalibela';
  const matchedTours = TOURS.filter((t) => destination.recommendedTourSlugs.includes(t.slug));

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '22%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-12%']);

  return (
    <div className="bg-[#F7EBDD] font-body text-[#241613] selection:bg-[#D9A441]">
      <Helmet>
        <title>Explore {destination.name} | Ethiopia Tourist Attractions</title>
        <meta name="description" content={`Discover ${destination.name}, a truly beautiful place in Ethiopia. Plan your trips to Ethiopia with our expert guides to see top tourist attractions.`} />
      </Helmet>

      {/* ---------- HERO ---------- */}
      <section ref={heroRef} className="relative h-[88vh] min-h-[34rem] overflow-hidden bg-[#241613]">
        <motion.div style={{ y: imgY }} className="absolute inset-0 transform-gpu">
          <img src={destination.heroImage} alt={destination.name} className="h-full w-full scale-110 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241613] via-[#241613]/35 to-[#241613]/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7EBDD] to-transparent" />
        </motion.div>
        <motion.div style={{ y: textY }} className="relative z-10 mx-auto flex h-full max-w-[90rem] flex-col justify-end px-6 pb-28">
          <p className="mb-5 flex items-center gap-2 text-[15px] text-[#E8BD5A]">
            <MapPin size={16} strokeWidth={1.5} /> {destination.region}
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(3.25rem,11vw,9rem)] leading-[0.92] tracking-tight text-[#FFF9F2]">
            {destination.name}
          </h1>
          <p className="mt-6 max-w-xl font-display text-xl italic text-[#F7EBDD]/90 md:text-2xl">{destination.tagline}</p>
        </motion.div>
      </section>

      <div className="mx-auto max-w-[90rem] px-6 pt-4">
        <Breadcrumbs items={[{ label: 'Destinations', view: 'destinations' }, { label: destination.name }]} onNavigate={onNavigate} />
      </div>

      {/* ---------- MAIN ---------- */}
      <div className="mx-auto max-w-[90rem] px-6 py-16">
        <div className={`grid grid-cols-1 gap-16 lg:grid-cols-12 ${isGenna ? 'lg:gap-12' : 'lg:gap-20'}`}>
          <div className={`space-y-28 ${isGenna ? 'lg:col-span-9' : 'lg:col-span-8'}`}>
            {/* Overview (WITH SEO) */}
            <motion.div {...reveal}>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">Discover {destination.name}</h2>
              <p className="mt-6 text-xl font-semibold text-[#A94332] italic">
                One of the most remarkable <strong className="font-semibold">Ethiopia tourist attractions</strong>.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-[1.85] text-[#33201A] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[5.5rem] first-letter:leading-[0.8] first-letter:text-[#DB6148]">
                {destination.fullOverview}
              </p>
            </motion.div>

            {isGenna && (
              <motion.section {...reveal} aria-labelledby="genna-gallery-title" className="lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center">
                <div className="mb-7 flex flex-col gap-3 border-b border-[#D8BFA4] pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#A94332]">A celebration of faith</p>
                    <h3 id="genna-gallery-title" className="font-display text-3xl md:text-4xl">Moments of Genna</h3>
                  </div>
                  <p className="max-w-sm text-sm leading-relaxed text-[#5A3D34]">A glimpse of the warmth, devotion, and living traditions of Christmas in Lalibela.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr]">
                  {destination.galleryImages.slice(0, 3).map((image, index) => (
                    <figure
                      key={image}
                      className={`group relative overflow-hidden rounded-sm bg-[#241613] shadow-[0_12px_30px_rgba(36,22,19,.16)] ${index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
                    >
                      <img
                        src={image}
                        alt={`Genna celebration in Lalibela, photo ${index + 1}`}
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 ? 'aspect-[16/8] max-h-[34rem] lg:h-[68svh] lg:max-h-none lg:aspect-auto' : 'aspect-[4/3] lg:h-[33svh] lg:aspect-auto'}`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241613]/35 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                    </figure>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Why visit */}
            <motion.div {...reveal} className="border-y border-[#D8BFA4] py-12">
              <h3 className="font-display text-3xl md:text-4xl">Why go to {destination.name}</h3>
              <p className="mt-4 text-[#5A3D34]">It is truly a <strong className="font-medium text-[#241613]">beautiful place in Ethiopia</strong> known for its unique character.</p>
              <ul className="mt-8 grid gap-x-12 sm:grid-cols-2">
                {destination.whyVisit.map((reason: string, i: number) => (
                  <li key={i} className="border-t border-[#D8BFA4]/70 py-5 leading-relaxed text-[#33201A]">{reason}</li>
                ))}
              </ul>
            </motion.div>

            {/* Highlights */}
            <div>
              <motion.h3 {...reveal} className="font-display text-4xl md:text-6xl">Major highlights</motion.h3>
              <div className="mt-12 space-y-4">
                {destination.topAttractions.map((a: { title: string; description: string }, i: number) => (
                  <motion.div
                    key={i} {...reveal}
                    className={`group grid items-baseline gap-4 rounded-sm border-l-4 border-[#DB6148] bg-[#FFF9F2] p-8 shadow-[0_2px_4px_rgba(36,22,19,.08),0_14px_28px_rgba(36,22,19,.08)]
                      transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(36,22,19,.18)] md:grid-cols-5 md:p-10 ${i % 2 ? 'md:ml-16' : ''}`}
                  >
                    <h4 className="font-display text-2xl leading-tight transition-colors group-hover:text-[#A94332] md:col-span-2 md:text-3xl">{a.title}</h4>
                    <p className="leading-relaxed text-[#33201A]/85 md:col-span-3">{a.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tours */}
            {matchedTours.length > 0 && (
              <motion.div {...reveal}>
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <h3 className="font-display text-4xl md:text-5xl">Itineraries through here</h3>
                  <button onClick={() => onNavigate('tours')}
                    className="group flex cursor-pointer items-center gap-2 border-b border-[#241613] pb-1 text-[15px] font-semibold transition-colors hover:border-[#DB6148] hover:text-[#A94332]">
                    View all tours <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {matchedTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour}
                      onSelect={(tourSlug) => onNavigate('tour-detail', tourSlug)}
                      onQuickInquire={(title) => onOpenPlanModal(title)} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ---------- STICKY SIDEBAR (WITH SEO) ---------- */}
          <aside className={isGenna ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-sm bg-[#241613] p-9 text-[#F7EBDD] shadow-[0_30px_60px_rgba(36,22,19,.35)] md:p-10">
                <h3 className="font-display text-4xl leading-tight text-[#FFF9F2]">Journey to {destination.name}</h3>
                <p className="mt-4 leading-relaxed text-[#D8BFA4]">
                  Whether you are looking for specific <strong className="font-semibold text-white">places to visit in Ethiopia</strong> or planning an immersive <strong className="font-semibold text-white">African safari</strong>, our local trip designers arrange private 4WD transport, permits, licensed guides and lodge stays around your dates.
                </p>
                <PremiumButton className="mt-8 w-full" onClick={() => onOpenPlanModal(destination.name)}>Plan a trip here</PremiumButton>

                <dl className="mt-10 space-y-6 border-t border-[#F7EBDD]/15 pt-8">
                  <div className="flex gap-4">
                    <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-[#E8BD5A]" strokeWidth={1.25} />
                    <div><dt className="font-semibold text-[#FFF9F2]">Best time to go</dt><dd className="mt-1 text-sm leading-relaxed text-[#D8BFA4]">{destination.bestTimeToVisit}</dd></div>
                  </div>
                  <div className="flex gap-4">
                    <Mountain className="mt-0.5 h-5 w-5 shrink-0 text-[#E8BD5A]" strokeWidth={1.25} />
                    <div><dt className="font-semibold text-[#FFF9F2]">Climate and terrain</dt><dd className="mt-1 text-sm leading-relaxed text-[#D8BFA4]">{destination.climateInfo}</dd></div>
                  </div>
                </dl>
              </div>

              <div className="rounded-sm border border-[#D8BFA4] bg-[#FFF9F2] p-8">
                <h4 className="flex items-center gap-3 font-display text-2xl"><Compass size={20} strokeWidth={1.25} className="text-[#DB6148]" /> Field tips</h4>
                <ul className="mt-5 space-y-4">
                  {destination.practicalTips.map((tip: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#33201A]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A441]" />{tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CTASection onOpenPlanModal={onOpenPlanModal} />
    </div>
  );
};