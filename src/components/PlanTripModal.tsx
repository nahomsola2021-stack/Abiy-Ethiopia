import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail } from 'lucide-react';
import { InquiryFormData } from '../types';
import { COMPANY_INFO } from '../data/company';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTourOrRegion?: string;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({ isOpen, onClose, presetTourOrRegion }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    travelersCount: '2 Travelers',
    interestedTourOrRegion: presetTourOrRegion || 'Northern Historic Route (Lalibela & Castles)',
    travelStyle: 'Bespoke Private Journey',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div 
      id="plan-trip-modal-backdrop" 
      className="fixed inset-0 z-[100] bg-[#020617]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div 
        id="plan-trip-modal-content"
        className="relative w-full max-w-2xl max-h-[95vh] flex flex-col bg-[#F8FAFC] rounded-2xl md:rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Fixed Header */}
        <div className="shrink-0 bg-[#0F172A] text-white px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-[#1E293B] z-10">
          <div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#06B6D4] font-bold block mb-1 font-['Montserrat',_sans-serif]">
              Abiy Ethiopia Tours · Personal Travel Designer
            </span>
            <h3 id="modal-title" className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
              Start Your Ethiopian Journey
            </h3>
          </div>
          <button
            id="close-plan-modal-btn"
            onClick={onClose}
            className="p-2 -mr-2 sm:mr-0 rounded-full text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="p-5 sm:p-8 md:p-10 overflow-y-auto overscroll-contain">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] mx-auto flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A]">
                Inquiry Received with Warmth
              </h4>
              <p className="text-sm md:text-base text-[#64748B] max-w-md mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-[#0F172A] font-medium">{formData.fullName}</strong>. Our local Ethiopian travel specialists are reviewing your request for <span className="text-[#06B6D4] font-medium">{formData.interestedTourOrRegion}</span>. We will reply to <strong className="text-[#0F172A] font-medium">{formData.email}</strong> within 24 hours with a custom proposal.
              </p>

              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 max-w-md mx-auto text-left text-sm space-y-3 mt-8 text-[#475569] shadow-sm">
                <p className="font-semibold text-[#0F172A]">Need immediate guidance or direct WhatsApp chat?</p>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phones[0]}`} className="hover:text-[#06B6D4] transition-colors font-medium">
                    {COMPANY_INFO.phones[0]}
                  </a>
                  <span className="text-[#94A3B8]">/</span>
                  <a href={`tel:${COMPANY_INFO.phones[1]}`} className="hover:text-[#06B6D4] transition-colors font-medium">
                    {COMPANY_INFO.phones[1]}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="hover:text-[#06B6D4] transition-colors font-medium break-all">
                    {COMPANY_INFO.emails[0]}
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <button
                  id="modal-done-btn"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#06B6D4] text-white font-['Montserrat',_sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] transition-all cursor-pointer shadow-md"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed mb-2 sm:mb-4">
                Tell us about your desired travel dates, group size, and regions of interest. Every journey is custom-tailored with our local Ethiopian guides.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="inquiry-fullname" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Full Name *
                  </label>
                  <input
                    id="inquiry-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Sarah Jenkins"
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-email" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Email Address *
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="inquiry-phone" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 555 123 4567"
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-country" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Country of Residence
                  </label>
                  <input
                    id="inquiry-country"
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g., United Kingdom / USA"
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="inquiry-dates" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Estimated Travel Dates
                  </label>
                  <input
                    id="inquiry-dates"
                    type="text"
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    placeholder="e.g., Nov 2026 or Flexible"
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-travelers" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Number of Travelers
                  </label>
                  <select
                    id="inquiry-travelers"
                    value={formData.travelersCount}
                    onChange={(e) => setFormData({ ...formData, travelersCount: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm cursor-pointer"
                  >
                    <option value="Solo Traveler">Solo Traveler (1 Person)</option>
                    <option value="2 Travelers">2 Travelers (Couple / Friends)</option>
                    <option value="3-4 Travelers">Small Group (3–4 Travelers)</option>
                    <option value="5-8 Travelers">Family / Group (5–8 Travelers)</option>
                    <option value="9+ Travelers">Special Group (9+ Travelers)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="inquiry-destination" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Destination / Route of Interest
                  </label>
                  <select
                    id="inquiry-destination"
                    value={formData.interestedTourOrRegion}
                    onChange={(e) => setFormData({ ...formData, interestedTourOrRegion: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm cursor-pointer"
                  >
                    <option value="Northern Historic Route (Lalibela & Castles)">Northern Historic Route (Lalibela, Gondar)</option>
                    <option value="Danakil & Erta Ale Volcanic Expedition">Danakil & Erta Ale Volcanic Expedition</option>
                    <option value="Gheralta Sandstone Churches & Simien Trek">Gheralta Sandstone Churches & Simien</option>
                    <option value="Omo Valley Cultural Odyssey">Omo Valley Cultural Odyssey</option>
                    <option value="The Grand Ethiopia Circuit (14 Days)">The Grand Ethiopia Circuit (North & South)</option>
                    <option value="Ethiopian Coffee Heritage & Kafa Forest">Ethiopian Coffee Heritage & Kafa</option>
                    <option value="Endemic Wildlife & Avian Highlands">Endemic Wildlife & Avian Highlands</option>
                    <option value="Custom Bespoke Itinerary">Fully Custom / Multiple Regions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-style" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                    Travel Preference
                  </label>
                  <select
                    id="inquiry-style"
                    value={formData.travelStyle}
                    onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm cursor-pointer"
                  >
                    <option value="Bespoke Private Journey">Bespoke Private Journey</option>
                    <option value="Cultural Pilgrimage & Architecture">Cultural & Architectural</option>
                    <option value="Adventure & High Altitude Trekking">Adventure & High Altitude Trekking</option>
                    <option value="Photography & Wildlife Focus">Photography & Wildlife Focus</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block font-['Montserrat',_sans-serif] text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold text-[#64748B] mb-2">
                  Specific Requests, Fitness Considerations, or Questions
                </label>
                <textarea
                  id="inquiry-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any special interests, dietary preferences, or specific pacing requirements..."
                  className="w-full px-3.5 py-3 rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/50 focus:border-[#06B6D4] transition-colors shadow-sm resize-none"
                />
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 border-t border-[#E2E8F0] mt-4 sm:mt-6">
                <span className="text-[10px] sm:text-[11px] text-[#94A3B8] font-medium text-center sm:text-left">
                  No obligation · Direct local tour operator response within 24h
                </span>
                <button
                  id="inquiry-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#06B6D4] hover:bg-[#0891B2] text-white font-['Montserrat',_sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg cursor-pointer disabled:opacity-50 shrink-0"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};