import React from 'react';
import { Clock, MapPin, ChevronRight, Check } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  onSelect: (slug: string) => void;
  onQuickInquire?: (tourTitle: string) => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onSelect, onQuickInquire }) => {
  return (
    <article
      id={`tour-card-${tour.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E5DED4] hover:border-[#C28246]/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
    >
      {/* Visual Image Banner */}
      <div 
        onClick={() => onSelect(tour.slug)}
        className="relative aspect-16/10 w-full overflow-hidden bg-[#EAE4D9] cursor-pointer"
      >
        <img
          src={tour.heroImage}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category & Duration Pills */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-md text-[#FAF7F2] border border-white/20">
            {tour.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#C28246] text-white shadow-xs">
            <Clock className="w-3 h-3" />
            {tour.duration}
          </span>
        </div>

        {/* Title over image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-serif font-bold text-white tracking-tight leading-tight group-hover:text-[#F3D7B5] transition-colors">
            {tour.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-[#E6DDD0] font-sans mt-1">
            <MapPin className="w-3 h-3 text-[#C28246]" />
            <span className="line-clamp-1">{tour.destination}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <p className="text-xs text-[#6E665E] line-clamp-2 leading-relaxed mb-4">
            {tour.shortDescription}
          </p>

          {/* Top 2 Highlights */}
          <div className="space-y-1.5 mb-5">
            {tour.highlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#3D3730]">
                <Check className="w-3.5 h-3.5 text-[#C28246] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-[#F2EDE4] flex items-center justify-between gap-3">
          <button
            onClick={() => onSelect(tour.slug)}
            className="text-xs font-semibold text-[#1D1A16] group-hover:text-[#C28246] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View Journey</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {onQuickInquire && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickInquire(tour.title);
              }}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#F2EDE4] hover:bg-[#C28246] text-[#1D1A16] hover:text-white transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
