import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { PageView } from '../types';
import { PremiumButton } from '../components/Premium';

interface ContactProps {
  onNavigate: (view: PageView, param?: string) => void;
}

// --- COMPANY & SOCIAL DATA ---
const COMPANY_INFO = {
  phones: ['(+251) 925963212', '(+251) 991383851'],
  whatsapp: '(+251) 925963212',
  emails: ['info@abiyethiopiatours.com', 'booking@abiyethiopiatours.com'],
  address: 'Bole Sub City, Addis Ababa, Ethiopia',
};

const WHATSAPP_URL = 'https://wa.me/251925963212';
const INSTAGRAM_URL = 'https://www.instagram.com/abiyethiopia/';
const FACEBOOK_URL = 'https://web.facebook.com/AbiyEthiopiaTours?_rdc=1&_rdr#';
const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Attraction_Review-g293791-d15619681-Reviews-Abiy_Ethiopia_Tours-Addis_Ababa.html';
const SAFARIBOOKINGS_URL = 'https://www.safaribookings.com/p7818';
const GOOGLE_REVIEW_URL = 'https://maps.app.goo.gl/Uus3kjnG9CDJJMVN9';

// --- EXTRA-LARGE BRAND & SOCIAL SVG ICONS ---
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'h-14 w-14' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.007c0 1.766.461 3.491 1.337 5.013L2 22l5.122-1.343a9.97 9.97 0 0 0 4.906 1.288h.004c5.522 0 10.007-4.485 10.007-10.007C22.039 6.485 17.554 2 12.031 2zm5.823 14.129c-.246.693-1.434 1.326-1.988 1.409-.508.076-1.15.108-1.857-.116-.429-.136-.979-.318-1.685-.623-2.964-1.28-4.9-4.265-5.048-4.462-.147-.197-1.206-1.604-1.206-3.06s.763-2.171 1.034-2.467c.271-.296.591-.37.788-.37.197 0 .394.002.566.01.182.009.426-.069.665.508.246.592.837 2.047.911 2.195.074.148.123.321.025.518-.098.197-.148.321-.296.493-.148.172-.311.385-.444.518-.148.148-.302.309-.13.605.172.296.766 1.263 1.644 2.046 1.13 1.008 2.083 1.32 2.379 1.468.296.148.468.123.64-.074.172-.197.739-.863.936-1.159.197-.296.394-.246.665-.148.271.098 1.724.813 2.02.961.296.148.493.222.566.345.074.123.074.715-.172 1.408z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'h-14 w-14' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'h-14 w-14' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V6.65c0-1.05.29-1.73 1.76-1.73Z" />
  </svg>
);

const TripAdvisorOwlIcon: React.FC<{ className?: string }> = ({ className = 'h-16 w-16' }) => (
  <svg viewBox="0 0 36 36" className={className} fill="none" aria-hidden="true">
    <path
      d="M6.5 12.8C9.8 9.8 13.7 8.5 18 8.5C22.3 8.5 26.2 9.8 29.5 12.8"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="11.8" cy="19" r="5.6" fill="#00AA6C" stroke="#FFFFFF" strokeWidth="2.5" />
    <circle cx="24.2" cy="19" r="5.6" fill="#00AA6C" stroke="#FFFFFF" strokeWidth="2.5" />
    <circle cx="11.8" cy="19" r="2.2" fill="#FFFFFF" />
    <circle cx="24.2" cy="19" r="2.2" fill="#FFFFFF" />
    <path d="M18 22.8L15.2 26.8H20.8L18 22.8Z" fill="#FFFFFF" />
  </svg>
);

const SafariBookingsLionIcon: React.FC<{ className?: string }> = ({ className = 'h-17 w-17' }) => (
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

const GoogleGIcon: React.FC<{ className?: string }> = ({ className = 'h-16 w-16' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M21.8 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.5c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3-4.5 3-7.6z"
    />
    <path
      fill="#34A853"
      d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3v2.7C4.7 19.8 8.1 22 12 22z"
    />
    <path
      fill="#FBBC05"
      d="M6.4 13.8c-.2-.6-.3-1.2-.3-1.8s.1-1.2.3-1.8V7.5H3C2.4 8.9 2 10.4 2 12s.4 3.1 1 4.5l3.4-2.7z"
    />
    <path
      fill="#EA4335"
      d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 2.9 14.7 2 12 2 8.1 2 4.7 4.2 3 7.5l3.4 2.7C7.2 7.7 9.4 5.9 12 5.9z"
    />
  </svg>
);

const SOCIAL_LINKS = [
  {
    id: 'whatsapp',
    url: WHATSAPP_URL,
    Icon: WhatsAppIcon,
    title: 'WhatsApp',
    desc: 'Fast chat',
    bgClass: 'bg-gradient-to-br from-[#2CE671] via-[#25D366] to-[#128C7E]',
    textColor: 'text-white'
  },
  {
    id: 'instagram',
    url: INSTAGRAM_URL,
    Icon: InstagramIcon,
    title: 'Instagram',
    desc: 'Photos & stories',
    bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    textColor: 'text-white'
  },
  {
    id: 'facebook',
    url: FACEBOOK_URL,
    Icon: FacebookIcon,
    title: 'Facebook',
    desc: 'Community',
    bgClass: 'bg-gradient-to-br from-[#2B84FF] via-[#1877F2] to-[#0D5BD9]',
    textColor: 'text-white'
  },
  {
    id: 'tripadvisor',
    url: TRIPADVISOR_URL,
    Icon: TripAdvisorOwlIcon,
    title: 'TripAdvisor',
    desc: 'Reviews',
    bgClass: 'bg-gradient-to-br from-[#00C47C] via-[#00AA6C] to-[#007A4D]',
    textColor: 'text-white'
  },
  {
    id: 'safaribookings',
    url: SAFARIBOOKINGS_URL,
    Icon: SafariBookingsLionIcon,
    title: 'SafariBookings',
    desc: 'Safaris',
    bgClass: 'bg-gradient-to-br from-[#B81016] via-[#9E0B0F] to-[#6E0508]',
    textColor: 'text-white'
  },
  {
    id: 'google',
    url: GOOGLE_REVIEW_URL,
    Icon: GoogleGIcon,
    title: 'Google',
    desc: 'Ratings',
    bgClass: 'bg-gradient-to-br from-[#FFFFFF] via-[#FFF9F2] to-[#EBD6BC]',
    textColor: 'text-[#241613]'
  }
];

const FAQS = [
  { q: "How far in advance should I book my expedition?", a: "For peak seasons (September to April) and specific festivals like Timkat, we recommend booking at least 3 to 6 months in advance. For standard private tours, 1 to 2 months is generally sufficient to secure the best lodges and domestic flights." },
  { q: "Are international flights included in the packages?", a: "No, our packages cover your experience from the moment you land in Addis Ababa. We handle all domestic flights, 4WD transport, accommodation, and guiding. You are responsible for booking your international arrival and departure flights." },
  { q: "Is Ethiopia safe for travel?", a: "Yes. We strictly operate in regions that are entirely safe and secure for international travelers. As a leading Ethiopian travel agency, our local expertise and continuous monitoring of regional situations ensure your safety is never compromised." },
  { q: "Do you accommodate dietary restrictions?", a: "Absolutely. Whether you require vegan, gluten-free, or specific allergy-related meals, our team and partner lodges are well-equipped to cater to your dietary needs throughout the journey." }
];

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax setup for Hero
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', tour: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', tour: '', message: '' });
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fieldCls = 'w-full border-b border-[#D8BFA4] bg-transparent pb-3 pt-1 text-lg text-[#241613] placeholder:text-[#33201A]/40 transition-colors focus:border-[#DB6148] focus:outline-none';
  const labelCls = 'mb-1 block text-sm text-[#33201A]/75';

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden bg-[#F7EBDD] font-body text-[#241613] selection:bg-[#D9A441]">
      
      <Helmet>
        <title>Contact Us | Abiy Ethiopia Tours</title>
        <meta name="description" content="Reach out to a top Ethiopian travel agency to plan your perfect getaway. Let us help you explore the best places to visit in Ethiopia with ease." />
      </Helmet>

      {/* ---------- HERO: warm, welcoming, short ---------- */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#241613]">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 transform-gpu">
          <img src="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393458/jj3kuvbcngu2j9s62pfo.jpg" alt="Ethiopian landscape in warm evening light" className="h-full w-full scale-110 object-cover" />
          <div className="absolute inset-0 bg-[#33201A]/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241613]/85 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F7EBDD] to-transparent" />
        </motion.div>
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-28 pt-40">
          <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] tracking-tight text-[#FFF9F2]">
            Let's talk<br /><span className="ml-[0.5em] inline-block text-[#E8BD5A]">Ethiopia</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="mt-6 max-w-xl text-lg text-[#F7EBDD]/90">
            Tell us about the <strong className="font-semibold text-white">places to visit in Ethiopia</strong> you are most curious about. A real person replies within a day.
          </motion.p>
        </div>
      </section>

      {/* ---------- WHO YOU'LL TALK TO ---------- */}
      <section className="mx-auto max-w-[90rem] px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative lg:col-span-5">
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-sm border-2 border-[#DB6148]/40" />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#241613] shadow-[0_30px_60px_rgba(36,22,19,.35)]">
              <img src="https://res.cloudinary.com/dw1ohipim/image/upload/v1789393450/k0effr5jiwfjhegsa9xc.jpg" alt="Abiy Ethiopia Tours lead guide" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241613] via-transparent to-transparent" />
              <div className="absolute bottom-0 p-8 text-[#FFF9F2]">
                <div className="font-display text-4xl">Abiy Ethiopia Tours</div>
                <div className="mt-1 text-sm text-[#E8BD5A]">Master travel designers</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }} className="lg:col-span-7">
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">Immersive, authentic travel</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-[#33201A]">
              <p>As a boutique <strong className="font-semibold">Ethiopian travel agency</strong>, we specialize in immersive, authentic, and high-quality expeditions. Built on deep local knowledge and meaningful human connections, we love sharing Ethiopia’s cultural richness with the world.</p>
              <p>Whether you're after luxury escapes, rugged <strong className="font-semibold">African safari tours</strong>, or historical pilgrimages, we design tailor-made journeys that reflect your specific interests, pace, and expectations.</p>
            </div>
            <dl className="mt-10 grid grid-cols-3 border-y border-[#D8BFA4] py-8">
              {[['10+', 'Years of experience'], ['20+', 'Custom tours'], ['4', 'Languages spoken']].map(([v, l], i) => (
                <div key={l} className={i ? 'border-l border-[#D8BFA4] pl-5 md:pl-8' : ''}>
                  <dd className="font-display text-5xl text-[#DB6148] md:text-6xl">{v}</dd>
                  <dt className="mt-2 text-xs text-[#33201A]/75 md:text-sm">{l}</dt>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* ---------- SOCIAL MEDIA & REVIEWS SECTION ---------- */}
      <section className="bg-[#EBD6BC] py-20 px-6 border-y border-[#D8BFA4]">
        <div className="mx-auto max-w-[90rem]">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-['Montserrat',_sans-serif] text-xs font-bold uppercase tracking-[0.25em] text-[#A94332] block mb-3">
              Connect & Explore
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-[#241613]">
              Social Media & Reviews
            </h2>
            <p className="mt-4 text-lg text-[#5A3D34] font-light">
              Follow our latest expedition stories or read verified traveler experiences across leading platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center rounded-3xl border-2 border-[#D8BFA4] bg-[#FFF9F2] p-8 text-center shadow-[0_8px_24px_rgba(36,22,19,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#DB6148] hover:shadow-[0_20px_40px_rgba(36,22,19,0.18)] w-full max-w-sm"
              >
                <span className={`flex h-24 w-24 items-center justify-center rounded-3xl shadow-lg border-2 border-white/70 transition-transform duration-300 group-hover:scale-110 mb-5 ${social.bgClass} ${social.textColor}`}>
                  <social.Icon className="h-12 w-12 drop-shadow-md" />
                </span>
                <h3 className="font-display text-3xl font-bold text-[#241613] transition-colors group-hover:text-[#A94332] leading-tight">
                  {social.title}
                </h3>
                <p className="text-sm text-[#5A3D34] mt-2 font-medium">
                  {social.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DETAILS + FORM ---------- */}
      <section className="bg-[#EBD6BC] pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-[90rem] gap-16 px-6 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-6xl">Our headquarters</h2>
            <div className="mt-12 space-y-9">
              <div className="flex gap-5">
                <Phone size={24} strokeWidth={1.25} className="mt-1 shrink-0 text-[#A94332]" />
                <div>
                  <h3 className="text-sm text-[#33201A]/75">Call</h3>
                  {COMPANY_INFO.phones.map((p) => <a key={p} href={`tel:${p}`} className="block font-display text-2xl transition-colors hover:text-[#A94332]">{p}</a>)}
                </div>
              </div>
              <div className="flex gap-5">
                <Mail size={24} strokeWidth={1.25} className="mt-1 shrink-0 text-[#A94332]" />
                <div>
                  <h3 className="text-sm text-[#33201A]/75">Email</h3>
                  {COMPANY_INFO.emails.map((m) => <a key={m} href={`mailto:${m}`} className="block break-all font-display text-2xl transition-colors hover:text-[#A94332]">{m}</a>)}
                </div>
              </div>
              <div className="flex gap-5">
                <MapPin size={24} strokeWidth={1.25} className="mt-1 shrink-0 text-[#A94332]" />
                <div>
                  <h3 className="text-sm text-[#33201A]/75">Find us</h3>
                  <p className="max-w-xs font-display text-2xl leading-snug">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6 border-t border-[#D8BFA4] pt-8">
              <div className="flex gap-4"><Clock size={22} strokeWidth={1.25} className="shrink-0 text-[#A94332]" /><div><h4 className="font-semibold">24-hour response</h4><p className="mt-1 text-[#33201A]/85">We reply with complete itineraries and candid local advice.</p></div></div>
              <div className="flex gap-4"><ShieldCheck size={22} strokeWidth={1.25} className="shrink-0 text-[#A94332]" /><div><h4 className="font-semibold">Honest local pricing</h4><p className="mt-1 text-[#33201A]/85">Direct pricing with no middleman markups or surprise fees on the road.</p></div></div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm bg-[#FFF9F2] p-8 shadow-[0_4px_8px_rgba(36,22,19,.1),0_30px_60px_rgba(36,22,19,.2)] md:p-12">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div key="done" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col items-center py-16 text-center" role="status">
                    <CheckCircle2 size={52} strokeWidth={1.25} className="text-[#DB6148]" />
                    <h3 className="mt-6 font-display text-4xl">Inquiry received</h3>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-[#33201A]">Thank you for reaching out. A senior travel designer will review your details and contact you shortly.</p>
                    <PremiumButton variant="terracotta" arrow={false} className="mt-8" onClick={() => setFormSubmitted(false)}>Send another message</PremiumButton>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="font-display text-4xl md:text-5xl">Send a message</h2>
                    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div><label htmlFor="c-name" className={labelCls}>Full name</label>
                          <input id="c-name" required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. David Miller" className={fieldCls} /></div>
                        <div><label htmlFor="c-email" className={labelCls}>Email address</label>
                          <input id="c-email" required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className={fieldCls} /></div>
                      </div>
                      <div className="grid gap-8 md:grid-cols-2">
                        <div><label htmlFor="c-phone" className={labelCls}>Phone (optional)</label>
                          <input id="c-phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 234 567 890" className={fieldCls} /></div>
                        <div className="relative"><label htmlFor="c-tour" className={labelCls}>Area of interest</label>
                          <select id="c-tour" value={formData.tour} onChange={(e) => setFormData({ ...formData, tour: e.target.value })} className={`${fieldCls} cursor-pointer appearance-none`}>
                            <option value="">Select an interest...</option>
                            <option value="Historic Route">Historic Route</option>
                            <option value="Danakil Depression">Danakil Depression</option>
                            <option value="Omo Valley">Omo Valley</option>
                            <option value="Car Rental">Car Rental Only</option>
                            <option value="Custom Tour">Custom / Bespoke Tour</option>
                          </select>
                          <ChevronDown size={16} className="pointer-events-none absolute bottom-4 right-0 text-[#33201A]/50" /></div>
                      </div>
                      <div><label htmlFor="c-msg" className={labelCls}>Your message</label>
                        <textarea id="c-msg" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your travel plans..." className={`${fieldCls} resize-none`} /></div>
                      <PremiumButton type="submit" arrow={false} disabled={isSubmitting} className="w-full disabled:cursor-not-allowed disabled:opacity-60">
                        {isSubmitting ? 'Sending...' : (<><Send size={17} /> Send inquiry</>)}
                      </PremiumButton>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-28">
        <h2 className="font-display text-4xl md:text-6xl">Before you book</h2>
        <div className="mt-12 border-t border-[#D8BFA4]">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="border-b border-[#D8BFA4]">
                <button onClick={() => toggleFaq(index)} aria-expanded={isOpen} className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left">
                  <h3 className={`font-display text-2xl transition-colors md:text-3xl ${isOpen ? 'text-[#A94332]' : 'group-hover:text-[#A94332]'}`}>{faq.q}</h3>
                  <ChevronDown size={24} strokeWidth={1.5} className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A94332]' : 'text-[#33201A]/50'}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="max-w-2xl pb-8 text-lg leading-relaxed text-[#33201A]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};