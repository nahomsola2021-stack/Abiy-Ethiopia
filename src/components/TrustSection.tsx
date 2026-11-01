import React from 'react';
import { ExternalLink, Star, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust-and-reputation-section" className="py-20 bg-[#F2EDE4] border-y border-[#E5DED4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-widest text-[#C28246] font-semibold block mb-2">
            Independent Credibility & Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1D1A16] tracking-tight">
            Recognized by Global Travelers
          </h2>
          <p className="text-sm text-[#6E665E] mt-3 leading-relaxed">
            We believe in honest reputations built on authentic service, experienced local guides, and respectful community partnerships across Ethiopia.
          </p>
        </div>

        {/* Platform Verification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
          
          {/* TripAdvisor Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E0D7CB] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#00AA6C]/10 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#00AA6C]" />
                  </div>
                  <span className="font-serif text-xl font-bold text-[#1D1A16]">TripAdvisor</span>
                </div>
                <div className="flex items-center gap-1 text-[#00AA6C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00AA6C]" />
                  ))}
                </div>
              </div>
              <h3 className="text-base font-semibold text-[#1D1A16] mb-2">
                Abiy Ethiopia Tours on TripAdvisor
              </h3>
              <p className="text-xs text-[#6E665E] leading-relaxed mb-6">
                Read direct, unedited feedback from international travelers who explored Lalibela, the Danakil Depression, the Simien Mountains, and the Omo Valley with Abiy and his team.
              </p>
            </div>

            <a
              id="trust-tripadvisor-link"
              href={COMPANY_INFO.tripAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE4D9] border border-[#E5DED4] text-xs font-semibold text-[#1D1A16] transition-colors"
            >
              <span>View Reviews on TripAdvisor</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#857B70]" />
            </a>
          </div>

          {/* SafariBookings Card */}
          <div className="bg-white rounded-2xl p-8 border border-[#E0D7CB] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#E58026]/10 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#E58026]" />
                  </div>
                  <span className="font-serif text-xl font-bold text-[#1D1A16]">SafariBookings</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#E58026]/10 text-[#A65814]">
                  Registered Operator
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#1D1A16] mb-2">
                Verified Safari & Tour Operator
              </h3>
              <p className="text-xs text-[#6E665E] leading-relaxed mb-6">
                Official registration on Africa’s premier safari operator marketplace, verifying registered company status, regional destinations, and safety standards.
              </p>
            </div>

            <a
              id="trust-safaribookings-link"
              href={COMPANY_INFO.safariBookingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE4D9] border border-[#E5DED4] text-xs font-semibold text-[#1D1A16] transition-colors"
            >
              <span>Verify on SafariBookings</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#857B70]" />
            </a>
          </div>

        </div>

        {/* 4 Pillars of Tour Quality */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-6 border-t border-[#E5DED4]">
          <div className="text-center p-4">
            <Compass className="w-6 h-6 text-[#C28246] mx-auto mb-2" />
            <span className="block text-sm font-bold font-serif text-[#1D1A16]">100% Local Guides</span>
            <span className="text-xs text-[#857B70]">Generations of highland knowledge</span>
          </div>
          <div className="text-center p-4">
            <ShieldCheck className="w-6 h-6 text-[#C28246] mx-auto mb-2" />
            <span className="block text-sm font-bold font-serif text-[#1D1A16]">Dedicated 4WD Fleet</span>
            <span className="text-xs text-[#857B70]">Toyota Land Cruisers for rough terrain</span>
          </div>
          <div className="text-center p-4">
            <HeartHandshake className="w-6 h-6 text-[#C28246] mx-auto mb-2" />
            <span className="block text-sm font-bold font-serif text-[#1D1A16]">Direct Community Fair Pay</span>
            <span className="text-xs text-[#857B70]">Respectful indigenous partnerships</span>
          </div>
          <div className="text-center p-4">
            <Star className="w-6 h-6 text-[#C28246] mx-auto mb-2" />
            <span className="block text-sm font-bold font-serif text-[#1D1A16]">Bespoke Flexibility</span>
            <span className="text-xs text-[#857B70]">Private itineraries matching your rhythm</span>
          </div>
        </div>

      </div>
    </section>
  );
};
