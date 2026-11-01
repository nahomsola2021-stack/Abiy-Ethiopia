import React from 'react';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (slug: string) => void;
  layout?: 'standard' | 'wide' | 'compact';
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect, layout = 'standard' }) => {
  return (
    <article
      id={`destination-card-${destination.slug}`}
      onClick={() => onSelect(destination.slug)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#E5DED4] hover:border-[#C28246]/50 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAE4D9]">
        <img
          src={destination.heroImage}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Region Tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-black/40 backdrop-blur-md text-[#FAF7F2] border border-white/20">
            <MapPin className="w-3 h-3 text-[#C28246]" />
            {destination.region}
          </span>
        </div>

        {/* Title over image for instant visual hook */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight tracking-tight group-hover:text-[#F3D7B5] transition-colors">
            {destination.name}
          </h3>
          <p className="text-xs text-[#E6DDD0] font-sans line-clamp-1 mt-1 font-light">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* Body content */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <p className="text-xs text-[#6E665E] line-clamp-2 leading-relaxed mb-4">
          {destination.shortDescription}
        </p>

        <div className="pt-3 border-t border-[#F2EDE4] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-[#857B70]">
            <Calendar className="w-3.5 h-3.5 text-[#C28246]" />
            <span className="line-clamp-1">Best: Oct - May</span>
          </div>
          
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D1A16] group-hover:text-[#C28246] transition-colors">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};
