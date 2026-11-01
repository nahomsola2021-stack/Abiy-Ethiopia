import React from 'react';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  onExploreTour: (tourSlug: string) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onExploreTour }) => {
  return (
    <article
      id={`experience-card-${experience.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E5DED4] hover:border-[#C28246]/50 transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row"
    >
      {/* Image half */}
      <div className="md:w-5/12 relative min-h-[260px] md:min-h-[340px] overflow-hidden bg-[#EAE4D9]">
        <img
          src={experience.heroImage}
          alt={experience.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {experience.sampleLocations.slice(0, 3).map((loc, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/40 backdrop-blur-md text-[#FAF7F2] border border-white/20">
                <MapPin className="w-2.5 h-2.5 text-[#C28246]" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content half */}
      <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#C28246] font-semibold block mb-1">
            Signature Experience
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#1D1A16] tracking-tight leading-tight mb-2 group-hover:text-[#C28246] transition-colors">
            {experience.title}
          </h3>
          <p className="text-xs text-[#857B70] italic mb-3">
            {experience.tagline}
          </p>
          <p className="text-xs text-[#6E665E] leading-relaxed mb-4">
            {experience.description}
          </p>

          <div className="space-y-1.5 mb-6">
            {experience.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#3D3730]">
                <Check className="w-3.5 h-3.5 text-[#C28246] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-[#F2EDE4] flex items-center justify-between">
          <button
            onClick={() => onExploreTour(experience.recommendedTourSlug)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D1A16] group-hover:text-[#C28246] transition-colors cursor-pointer"
          >
            <span>View Dedicated Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
