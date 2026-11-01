import React, { useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

/* ---------- PremiumButton ---------- */
interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'terracotta';
  arrow?: boolean;
}

const VARIANTS = {
  gold: 'bg-[#D9A441] text-[#241613] hover:bg-[#E8BD5A] shadow-[0_6px_0_#A97E24,0_14px_24px_rgba(36,22,19,.25)] hover:shadow-[0_8px_0_#A97E24,0_18px_30px_rgba(36,22,19,.3)]',
  terracotta: 'bg-[#DB6148] text-[#FFF9F2] hover:bg-[#A94332] shadow-[0_6px_0_#A94332,0_14px_24px_rgba(36,22,19,.25)]',
  outline: 'border border-[#F7EBDD]/60 text-[#F7EBDD] hover:bg-[#F7EBDD] hover:text-[#241613]',
};

export const PremiumButton: React.FC<PremiumButtonProps> = ({ variant = 'gold', arrow = true, className = '', children, ...rest }) => (
  <button
    {...rest}
    className={`group inline-flex items-center justify-center gap-3 rounded-md px-7 py-4 font-body text-[15px] font-semibold
      transition-all duration-300 hover:-translate-y-0.5 active:translate-y-1 cursor-pointer ${VARIANTS[variant]} ${className}`}
  >
    {children}
    {arrow && <ArrowRight size={17} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-1.5" />}
  </button>
);

/* ---------- ParallaxCard ----------
   Image shifts opposite the pointer at a different rate from the card.
   Pointer tracking only runs for a real mouse; touch/reduced-motion get a plain zoom. */
interface ParallaxCardProps {
  image: string;
  title: string;
  region?: string;
  blurb?: string;
  className?: string;
  onClick: () => void;
}

export const ParallaxCard: React.FC<ParallaxCardProps> = ({ image, title, region, blurb, className = '', onClick }) => {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', String((e.clientX - r.left) / r.width - 0.5));
    ref.current.style.setProperty('--my', String((e.clientY - r.top) / r.height - 0.5));
  };
  const reset = () => {
    ref.current?.style.setProperty('--mx', '0');
    ref.current?.style.setProperty('--my', '0');
  };

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={`${title}${region ? `, ${region}` : ''}`}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onClick())}
      onPointerMove={move}
      onPointerLeave={reset}
      style={{ '--mx': 0, '--my': 0 } as React.CSSProperties}
      className={`group relative cursor-pointer overflow-hidden rounded-sm bg-[#241613] transition-all duration-500 ease-out
        shadow-[0_2px_4px_rgba(36,22,19,.2),0_14px_28px_rgba(36,22,19,.22)]
        hover:-translate-y-2 hover:shadow-[0_4px_8px_rgba(36,22,19,.25),0_32px_60px_rgba(36,22,19,.4)] ${className}`}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] max-w-none object-cover transition-transform duration-[900ms] ease-out
          motion-safe:group-hover:scale-105 will-change-transform"
        style={{ transform: 'translate3d(calc(var(--mx) * -18px), calc(var(--my) * -18px), 0)' }}
      />
      
      {/* Primary Bottom-Up Gradient - Darkened for High Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0D] via-[#1A0F0D]/70 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
      
      {/* Secondary Top-Down Vignette (helps frame the image and upper UI elements) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1A0F0D]/40 to-transparent opacity-60 pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 transition-transform duration-500 group-hover:-translate-y-1">
        {region && (
          <p className="mb-2 flex items-center gap-1.5 font-body text-[13px] text-[#E8BD5A] drop-shadow-md font-semibold">
            <MapPin size={14} strokeWidth={1.5} /> {region}
          </p>
        )}
        <h3 className="font-display text-3xl leading-[1.05] text-[#FFF9F2] md:text-4xl drop-shadow-lg">{title}</h3>
        {blurb && (
          <p className="mt-3 line-clamp-2 max-w-md font-body text-sm leading-relaxed text-[#F7EBDD]/90 drop-shadow-md md:max-h-0 md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-16 md:group-hover:opacity-100">
            {blurb}
          </p>
        )}
      </div>

      <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#D9A441] text-[#241613]
        opacity-90 md:opacity-0 md:translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 shadow-md">
        <ArrowRight size={18} strokeWidth={1.75} className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
      </span>
    </div>
  );
};