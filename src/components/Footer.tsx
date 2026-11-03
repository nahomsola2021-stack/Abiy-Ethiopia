import React, { useMemo } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ArrowUp } from 'lucide-react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/company';
import { DESTINATIONS } from '../data/destinations';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (view: PageView, param?: string) => void;
  onOpenPlanModal: (preset?: string) => void;
}

const LINKS: { label: string; view: PageView }[] = [
  { label: 'Home', view: 'home' },
  { label: 'Destinations & Regions', view: 'destinations' },
  { label: 'Signature Tours', view: 'tours' },
  { label: 'About Us', view: 'about' },
  { label: 'Contact', view: 'contact' },
];

const PHONE_1_DISPLAY = '(+251) 925963212';
const PHONE_1_TEL = '+251925963212';
const PHONE_2_DISPLAY = '(+251) 991383851';
const PHONE_2_TEL = '+251991383851';
const WHATSAPP_URL = 'https://wa.me/251925963212';

// --- EXTERNAL REVIEW & SOCIAL URLS ---
const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Attraction_Review-g293791-d15619681-Reviews-Abiy_Ethiopia_Tours-Addis_Ababa.html';
const SAFARIBOOKINGS_URL = 'https://www.safaribookings.com/p7818';
const GOOGLE_REVIEW_URL = 'https://maps.app.goo.gl/Uus3kjnG9CDJJMVN9';
const INSTAGRAM_URL = 'https://www.instagram.com/abiyethiopia/';
const FACEBOOK_URL = 'https://web.facebook.com/AbiyEthiopiaTours?_rdc=1&_rdr#';

// --- ENLARGED BRAND & SOCIAL SVG ICONS ---
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.007c0 1.766.461 3.491 1.337 5.013L2 22l5.122-1.343a9.97 9.97 0 0 0 4.906 1.288h.004c5.522 0 10.007-4.485 10.007-10.007C22.039 6.485 17.554 2 12.031 2zm5.823 14.129c-.246.693-1.434 1.326-1.988 1.409-.508.076-1.15.108-1.857-.116-.429-.136-.979-.318-1.685-.623-2.964-1.28-4.9-4.265-5.048-4.462-.147-.197-1.206-1.604-1.206-3.06s.763-2.171 1.034-2.467c.271-.296.591-.37.788-.37.197 0 .394.002.566.01.182.009.426-.069.665.508.246.592.837 2.047.911 2.195.074.148.123.321.025.518-.098.197-.148.321-.296.493-.148.172-.311.385-.444.518-.148.148-.302.309-.13.605.172.296.766 1.263 1.644 2.046 1.13 1.008 2.083 1.32 2.379 1.468.296.148.468.123.64-.074.172-.197.739-.863.936-1.159.197-.296.394-.246.665-.148.271.098 1.724.813 2.02.961.296.148.493.222.566.345.074.123.074.715-.172 1.408z" />
  </svg>
);

const TripAdvisorOwlIcon: React.FC<{ className?: string }> = ({ className = 'h-9 w-9' }) => (
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

const SafariBookingsLionIcon: React.FC<{ className?: string }> = ({ className = 'h-9 w-9' }) => (
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

const GoogleGIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
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

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
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

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V6.65c0-1.05.29-1.73 1.76-1.73Z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPlanModal }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Keep Omo Valley and the Danakil Depression visible in the footer destinations.
  const footerDestinations = useMemo(() => {
    const initialList = DESTINATIONS.slice(0, 5);
    const pinnedDestinations = [
      DESTINATIONS.find((d) => d.name.toLowerCase().includes('omo valley') || d.slug.toLowerCase().includes('omo')) ?? {
        id: 'omo-valley',
        name: 'Omo Valley',
        slug: 'omo-valley',
      },
      DESTINATIONS.find((d) => d.slug === 'danakil-depression'),
    ].filter((destination): destination is NonNullable<typeof destination> => Boolean(destination));

    return [...initialList, ...pinnedDestinations.filter(
      (destination) => !initialList.some((item) => item.slug === destination.slug)
    )];
  }, []);

  return (
    <footer
      id="site-footer"
      className="relative bg-[#1E1210] font-body text-[#D8BFA4]"
    >
      {/* Top Gold Accent Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#94220a] via-[#E8BD5A] to-[#94220a]" />

      {/* ---------- Top CTA Strip ---------- */}
      <div className="border-b border-[#F7EBDD]/10 bg-[#241613]/60 px-6 py-10 md:py-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <span className="font-['Montserrat',_sans-serif] text-xs font-bold uppercase tracking-[0.25em] text-[#E8BD5A]">
              Tailor-Made Safaris
            </span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-[#FFF9F2] sm:text-5xl lg:text-6xl">
              Ethiopia is better with someone who knows it.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md border border-[#25D366]/50 bg-[#25D366]/10 px-6 py-4 text-base font-semibold text-[#FFF9F2] transition-all hover:border-[#25D366] hover:bg-[#25D366]/20"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_12px_#25D366]">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              WhatsApp Us
            </a>

            <button
              id="footer-quote-button"
              onClick={() => onOpenPlanModal()}
              className="group inline-flex cursor-pointer items-center gap-3 rounded-md bg-[#D9A441] px-8 py-4 text-base font-semibold text-[#241613] shadow-[0_4px_0_#A97E24] transition-all hover:bg-[#E8BD5A] active:translate-y-0.5"
            >
              Plan your journey
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Main Columns ---------- */}
      <div className="mx-auto max-w-[90rem] px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand & Reviews Medallions */}
          <div className="space-y-6 lg:col-span-4">
            <button
              onClick={() => { onNavigate('home'); scrollToTop(); }}
              className="cursor-pointer text-left focus:outline-none"
              aria-label="Abiy Ethiopia Tours Home"
            >
              <Logo className="h-24 w-auto object-contain md:h-28" />
            </button>
            <p className="max-w-sm text-base leading-relaxed text-[#D8BFA4]/90">
              Premier local tour, expedition, and car rental operator in Addis Ababa crafting custom wildlife safaris and cultural journeys.
            </p>

            {/* Enlarged, Framed Icon-Only Dock (TripAdvisor, SafariBookings, Google) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* 1. TripAdvisor Medallion */}
              <a
                id="footer-tripadvisor-badge"
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                title="TripAdvisor"
                className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#00AA6C]/60 bg-gradient-to-br from-[#00C47C] via-[#00AA6C] to-[#007A4D] shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-[#FFF9F2] hover:shadow-[0_14px_32px_rgba(0,170,108,0.65)]"
              >
                <TripAdvisorOwlIcon className="h-9 w-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* 2. SafariBookings Medallion */}
              <a
                id="footer-safaribookings-badge"
                href={SAFARIBOOKINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SafariBookings"
                title="SafariBookings"
                className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#E8BD5A]/55 bg-gradient-to-br from-[#B81016] via-[#9E0B0F] to-[#6E0508] shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.3)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-[#E8BD5A] hover:shadow-[0_14px_32px_rgba(158,11,15,0.8)]"
              >
                <SafariBookingsLionIcon className="h-10 w-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* 3. Google Reviews Medallion */}
              <a
                id="footer-google-badge"
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                title="Google Reviews"
                className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#D8BFA4] bg-gradient-to-br from-[#FFFFFF] via-[#FFF9F2] to-[#EBD6BC] shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.9)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-[#4285F4] hover:shadow-[0_14px_32px_rgba(66,133,244,0.55)]"
              >
                <GoogleGIcon className="h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Top Destinations (Includes Omo Valley) */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="font-display text-2xl text-[#FFF9F2] md:text-3xl">Destinations</h4>
            <ul className="space-y-3 text-base">
              {footerDestinations.map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => { onNavigate('destination-detail', dest.slug); scrollToTop(); }}
                    className="cursor-pointer text-left text-[#D8BFA4]/90 transition-colors hover:text-[#E8BD5A]"
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-display text-2xl text-[#FFF9F2] md:text-3xl">Quick Links</h4>
            <ul className="space-y-3 text-base">
              {LINKS.map((l) => (
                <li key={l.view}>
                  <button
                    onClick={() => { onNavigate(l.view); scrollToTop(); }}
                    className="cursor-pointer text-left text-[#D8BFA4]/90 transition-colors hover:text-[#E8BD5A]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social Medias */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="font-display text-2xl text-[#FFF9F2] md:text-3xl">Contact</h4>
            <div className="space-y-3.5 text-base">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#E8BD5A]" />
                <span className="text-[#D8BFA4]/95">{COMPANY_INFO.address}</span>
              </div>

              {/* Phone 1 + WhatsApp */}
              <div className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#25D366] transition-colors hover:text-[#FFF9F2]"
                >
                  {PHONE_1_DISPLAY}
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#E8BD5A]" />
                <a
                  href={`tel:${PHONE_2_TEL}`}
                  className="text-[#D8BFA4]/95 transition-colors hover:text-[#E8BD5A]"
                >
                  {PHONE_2_DISPLAY}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#E8BD5A]" />
                <a
                  href={`mailto:${COMPANY_INFO.emails[0]}`}
                  className="truncate text-[#D8BFA4]/95 transition-colors hover:text-[#E8BD5A]"
                >
                  {COMPANY_INFO.emails[0]}
                </a>
              </div>
            </div>

            {/* Social Media Dock (Instagram, Facebook) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              {/* Instagram Medallion */}
              <a
                id="footer-instagram-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#F7EBDD]/35 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-[#FFF9F2] hover:shadow-[0_14px_32px_rgba(225,48,108,0.7)]"
              >
                <InstagramIcon className="h-8 w-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Facebook Medallion */}
              <a
                id="footer-facebook-link"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#66A3FF]/50 bg-gradient-to-br from-[#2B84FF] via-[#1877F2] to-[#0D5BD9] text-white shadow-[0_10px_24px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-[#FFF9F2] hover:shadow-[0_14px_32px_rgba(24,119,242,0.7)]"
              >
                <FacebookIcon className="h-8 w-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ---------- Bottom Bar ---------- */}
      <div className="border-t border-[#F7EBDD]/10 bg-[#160D0B] px-6 py-6 text-sm text-[#D8BFA4]/80">
        <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Abiy Ethiopia Tours. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Licensed Ethiopian Tour Operator</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex cursor-pointer items-center gap-1.5 font-semibold text-[#E8BD5A] transition-colors hover:text-[#FFF9F2]"
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};