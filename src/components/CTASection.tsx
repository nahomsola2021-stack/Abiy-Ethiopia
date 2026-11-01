import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface CTASectionProps {
  onOpenPlanModal: (preset?: string) => void;
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  onOpenPlanModal, 
  title = "Ready to Discover the Preserved Secret?", 
  subtitle = "Whether you yearn to witness the rock-hewn wonders of Lalibela, descend into the vivid salt plains of the Danakil, or immerse yourself in the living cultures of the Omo Valley, our local team will craft your journey with unhurried care."
}) => {
  return (
    <section id="global-cta-section" className="relative py-24 bg-[#161513] text-[#FAF7F2] overflow-hidden">
      {/* Subtle background glow / vignette */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(194,130,70,0.3)_0%,transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-widest text-[#C28246] font-semibold block mb-3">
          Abiy Ethiopia Tours · Bespoke Travel Planning
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-[#A8A096] max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            id="cta-plan-trip-button"
            onClick={() => onOpenPlanModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C28246] hover:bg-[#AA6E35] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Plan Your Journey With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Contacts Shortcut */}
        <div className="pt-8 border-t border-[#2A2723] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#857B70]">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C28246]" />
            <span>Call or WhatsApp:</span>
            <a href={`tel:${COMPANY_INFO.phones[0]}`} className="text-[#FAF7F2] hover:text-[#C28246] font-mono">
              {COMPANY_INFO.phones[0]}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#C28246]" />
            <span>Direct Email:</span>
            <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="text-[#FAF7F2] hover:text-[#C28246]">
              {COMPANY_INFO.emails[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
