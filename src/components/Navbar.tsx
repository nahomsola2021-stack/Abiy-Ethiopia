import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/company';
import { Logo } from './Logo';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView, param?: string) => void;
  onOpenPlanModal: (presetTourOrRegion?: string) => void;
}

type DropdownItem = {
  label: string;
  param: string;
};

type NavLink = {
  label: string;
  view: PageView;
  dropdown?: DropdownItem[];
};

const WHATSAPP_BUTTON_LABEL = 'Call us';
const WHATSAPP_NUMBER_DISPLAY = '(+251) 925963212';
const WHATSAPP_URL = 'https://wa.me/251925963212';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.007c0 1.766.461 3.491 1.337 5.013L2 22l5.122-1.343a9.97 9.97 0 0 0 4.906 1.288h.004c5.522 0 10.007-4.485 10.007-10.007C22.039 6.485 17.554 2 12.031 2zm5.823 14.129c-.246.693-1.434 1.326-1.988 1.409-.508.076-1.15.108-1.857-.116-.429-.136-.979-.318-1.685-.623-2.964-1.28-4.9-4.265-5.048-4.462-.147-.197-1.206-1.604-1.206-3.06s.763-2.171 1.034-2.467c.271-.296.591-.37.788-.37.197 0 .394.002.566.01.182.009.426-.069.665.508.246.592.837 2.047.911 2.195.074.148.123.321.025.518-.098.197-.148.321-.296.493-.148.172-.311.385-.444.518-.148.148-.302.309-.13.605.172.296.766 1.263 1.644 2.046 1.13 1.008 2.083 1.32 2.379 1.468.296.148.468.123.64-.074.172-.197.739-.863.936-1.159.197-.296.394-.246.665-.148.271.098 1.724.813 2.02.961.296.148.493.222.566.345.074.123.074.715-.172 1.408z" />
  </svg>
);

const NAV_LINKS: NavLink[] = [
  { label: 'Home', view: 'home' },
  { 
    label: 'Destinations', 
    view: 'destinations',
    dropdown: [
      { label: 'All Destinations', param: 'All' },
      { label: 'Northern Ethiopia', param: 'Northern Ethiopia' },
      { label: 'Nature and Adventure', param: 'Nature and Adventure' },
      { label: 'Cultural', param: 'Cultural' },
      { label: 'Events and Ceremonies', param: 'Events and Ceremonies' },
      { label: 'City Discoveries', param: 'City Discoveries' }
    ]
  },
  { 
    label: 'Tours', 
    view: 'tours',
    dropdown: [
      { label: 'All Tours', param: 'All' },
      { label: 'Completed Ethiopia Journey', param: 'Completed Ethiopia Journey' },
      { label: 'Historical Discoveries', param: 'Historical Discoveries' },
      { label: 'Cultural Journeys', param: 'Cultural Journeys' },
      { label: 'Nature and Adventure', param: 'Nature and Adventure' },
      { label: 'Wildlife Safaris', param: 'Wildlife Safaris' },
      { label: 'Birding Tours', param: 'Birding Tours' },
      { label: 'Specialty Coffee Tours', param: 'Specialty Coffee Tours' },
      { label: 'Day Trips', param: 'Day Trips' }
    ]
  },
  { label: 'About us', view: 'about' },
  { label: 'Contact', view: 'contact' },
];

const HERO_VIEWS: PageView[] = ['home', 'destinations', 'tours', 'about', 'contact'];

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenPlanModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedNav, setMobileExpandedNav] = useState<PageView | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = 'unset'; window.removeEventListener('keydown', onKey); };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (view: PageView, param?: string) => {
    onNavigate(view, param);
    setMobileMenuOpen(false);
    setMobileExpandedNav(null);
    
    // Remove focus to collapse desktop dropdowns instantly
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    
    // Only scroll to the very top if there is no parameter. 
    // If there is a parameter, the target page will handle scrolling to the specific section.
    if (!param) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const overHero = !isScrolled && HERO_VIEWS.includes(currentView);

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          overHero
            ? 'bg-gradient-to-b from-[#241613]/90 via-[#94220a]/20 to-transparent py-6'
            : 'border-b border-white/10 bg-[#94220a]/95 py-3 shadow-[0_8px_30px_rgba(36,22,19,.25)] backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-[95rem] items-center px-6">
          <div className="flex flex-1 justify-start">
            <button
              onClick={() => handleNavClick('home')}
              aria-label="Abiy Ethiopia Tours home"
              className={`group cursor-pointer transition-all duration-300 ${overHero ? 'pointer-events-none -translate-x-4 opacity-0' : 'translate-x-0 opacity-100'}`}
            >
              <Logo variant="light" className="h-10 w-auto scale-110 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-12 lg:h-14" />
            </button>
          </div>

          <nav aria-label="Main" className="hidden shrink-0 items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = currentView === link.view;
              const hasDropdown = !!link.dropdown;
              
              return (
                <div key={link.view} className="group relative">
                  <button
                    onClick={() => handleNavClick(link.view)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex cursor-pointer items-center gap-1.5 py-2 font-body text-[15px] font-medium transition-colors duration-300 ${
                      active ? 'text-[#E8BD5A]' : 'text-[#F7EBDD]/85 hover:text-[#FFF9F2]'
                    }`}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    <span className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#E8BD5A] transition-transform duration-300 group-hover:scale-x-100 ${active ? 'scale-x-100' : ''}`} />
                  </button>

                  {/* Desktop Dropdown */}
                  {hasDropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-[#FFF9F2] shadow-[0_20px_50px_rgba(36,22,19,0.3)] border-t-4 border-[#DB6148] rounded-b-sm w-[280px] flex flex-col overflow-hidden before:absolute before:-top-[24px] before:left-0 before:w-full before:h-[24px] before:bg-transparent">
                        {link.dropdown!.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleNavClick(link.view, item.param)}
                            className="px-6 py-4 text-left font-body text-sm font-semibold text-[#5A3D34] hover:bg-[#F7EBDD] hover:text-[#A94332] transition-colors border-b border-[#D8BFA4]/40 last:border-b-0"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Glowing WhatsApp + Plan CTA */}
          <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp at ${WHATSAPP_NUMBER_DISPLAY}`}
              className="group relative inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/50 bg-[#1A100E]/60 px-4 py-2 text-[#FFF9F2] backdrop-blur-md shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#1A100E]/85 hover:shadow-[0_0_32px_rgba(37,211,102,0.75)]"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_16px_#25D366] transition-transform duration-300 group-hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
                <WhatsAppIcon className="relative z-10 h-4 w-4" />
              </span>
              <span className="hidden font-body text-sm font-semibold tracking-wide text-[#FFF9F2] group-hover:text-[#25D366] xl:inline transition-colors">
                {WHATSAPP_BUTTON_LABEL}
              </span>
            </a>

            <button
              onClick={() => onOpenPlanModal()}
              className={`group inline-flex cursor-pointer items-center gap-2.5 rounded-md px-6 py-3 font-body text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0.5 ${
                overHero 
                  ? 'bg-[#D9A441] text-[#241613] shadow-[0_4px_0_#A97E24,0_10px_20px_rgba(36,22,19,.2)] hover:bg-[#E8BD5A]' 
                  : 'bg-[#FFF9F2] text-[#94220a] shadow-[0_4px_0_#D8BFA4,0_10px_20px_rgba(36,22,19,.15)] hover:bg-white'
              }`}
            >
              Plan your journey
              <ArrowRight size={16} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Right Actions: Glowing WhatsApp Icon + Menu Button */}
          <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp at ${WHATSAPP_NUMBER_DISPLAY}`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.8)] transition-transform duration-300 hover:scale-110"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
              <WhatsAppIcon className="relative z-10 h-5 w-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className="flex cursor-pointer items-center justify-center rounded-md p-2 text-[#FFF9F2] transition-colors hover:bg-white/10"
            >
              <Menu className="h-7 w-7" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- MOBILE MENU ---------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-gradient-to-b from-[#94220a] to-[#241613]"
          >
            {/* Top Logo and Close Button (No Shrink) */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-5">
              <Logo variant="light" className="h-14 w-auto scale-110 object-contain sm:h-16" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#E8BD5A] text-[#241613] shadow-md transition-colors hover:bg-[#D9A441]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Middle Nav Links (Flex-1 and Min-H-0 forces internal scrolling) */}
            <nav aria-label="Mobile" className="flex flex-1 min-h-0 flex-col justify-start gap-4 px-6 py-8 overflow-y-auto">
              {NAV_LINKS.map((link, i) => {
                const active = currentView === link.view;
                const hasDropdown = !!link.dropdown;
                const isExpanded = mobileExpandedNav === link.view;

                return (
                  <div key={link.view} className="flex flex-col border-b border-white/5 pb-2">
                    <div className="flex items-center justify-between">
                      <motion.button
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                        onClick={() => handleNavClick(link.view)}
                        className="flex cursor-pointer items-center gap-4 text-left py-2"
                      >
                        <span className={`font-display text-[2.2rem] leading-none transition-colors duration-300 sm:text-5xl ${active ? 'text-[#E8BD5A]' : 'text-[#FFF9F2] hover:text-[#E8BD5A]'}`}>
                          {link.label}
                        </span>
                      </motion.button>
                      
                      {hasDropdown && (
                        <motion.button
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.08 }}
                          onClick={() => setMobileExpandedNav(isExpanded ? null : link.view)}
                          className="p-2 text-[#E8BD5A]"
                          aria-label={`Toggle ${link.label} submenu`}
                        >
                          <ChevronDown size={28} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </motion.button>
                      )}
                    </div>

                    {/* Mobile Dropdown Sub-menu */}
                    {hasDropdown && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 pl-4 pt-4 pb-2 border-l border-[#E8BD5A]/30 ml-2">
                              {link.dropdown!.map((item) => (
                                <button
                                  key={item.label}
                                  onClick={() => handleNavClick(link.view, item.param)}
                                  className="text-left font-body text-[15px] font-medium text-[#F7EBDD]/80 hover:text-[#E8BD5A] transition-colors py-1.5"
                                >
                                  {item.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Bottom Contact and Action (No Shrink, stays fixed at bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
              className="shrink-0 border-t border-white/10 bg-[#241613]/90 p-6 backdrop-blur-md"
            >
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPlanModal(); }}
                className="mb-6 w-full cursor-pointer rounded-md bg-[#E8BD5A] py-4 font-body text-base font-semibold text-[#241613] shadow-[0_5px_0_#A97E24] transition-all hover:bg-[#FFF9F2] active:translate-y-1"
              >
                Request a custom itinerary
              </button>
              <div className="flex flex-col gap-4 font-body text-[15px] text-[#F7EBDD]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-[#25D366] transition-colors hover:text-[#FFF9F2]"
                >
                  <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_#25D366]">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  WhatsApp: {WHATSAPP_NUMBER_DISPLAY}
                </a>
                <a href={`tel:${COMPANY_INFO.phones[0]}`} className="flex items-center gap-3 transition-colors hover:text-[#E8BD5A]">
                  <Phone className="h-4 w-4 text-[#E8BD5A]" strokeWidth={1.5} /> {COMPANY_INFO.phones[0]}
                </a>
                <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="flex items-center gap-3 break-all transition-colors hover:text-[#E8BD5A]">
                  <Mail className="h-4 w-4 shrink-0 text-[#E8BD5A]" strokeWidth={1.5} /> {COMPANY_INFO.emails[0]}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};