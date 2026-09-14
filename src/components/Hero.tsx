import React from 'react';
import { ArrowDown, Globe } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16">
      {/* Background Lighting & Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cinematic top radial light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[650px] h-[280px] sm:h-[650px] bg-white/[0.03] rounded-full blur-3xl" />
        {/* Bottom subtle mood glow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[250px] sm:w-[500px] h-[180px] bg-zinc-800/[0.15] rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4 sm:mb-8 backdrop-blur-md max-w-full overflow-hidden">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-zinc-300 truncate">
            T-SHIRT — DROP DISPONIBLE
          </span>
          <span className="text-zinc-600 hidden xs:inline">·</span>
          <span className="text-[9px] sm:text-[11px] font-mono tracking-wider text-emerald-400 uppercase hidden xs:inline">
            PIMA PERUANA 175 GSM
          </span>
        </div>

        {/* Brand Official Logo Presentation */}
        <div className="w-full max-w-[260px] xs:max-w-[320px] sm:max-w-md md:max-w-lg mb-4 sm:mb-6 px-4">
          <img 
            src={siteConfig.logos.horizontalWhite} 
            alt={siteConfig.brandName} 
            className="w-full h-auto object-contain mx-auto filter drop-shadow-[0_4px_30px_rgba(255,255,255,0.18)] select-none"
          />
          <h1 className="sr-only">{siteConfig.brandName} — {siteConfig.tagline}</h1>
        </div>

        {/* Brand Tagline */}
        <p className="text-base xs:text-lg sm:text-2xl md:text-3xl font-light tracking-luxury text-zinc-300 uppercase mb-3 sm:mb-4 max-w-2xl font-sans">
          {siteConfig.tagline}
        </p>

        {/* Editorial Subtitle / Concept */}
        <p className="text-xs sm:text-sm tracking-wider text-zinc-400 max-w-md sm:max-w-lg mb-6 sm:mb-10 font-sans leading-relaxed px-2">
          Primer drop oficial en tejido exclusivo de Pima Peruana (175 GSM).
          Suavidad extrema, caída natural y presencia contemporánea.
        </p>

        {/* Visual Hero Protagonist Preview Card (Editorial Showcase) */}
        <div 
          onClick={onExploreClick}
          className="group relative w-full max-w-[270px] xs:max-w-xs sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden glass-card cursor-pointer mb-8 sm:mb-10 transition-all duration-500 hover:scale-[1.02] hover:border-white/25 shadow-2xl"
        >
          <img 
            src="/fotos-camisas/balmain-negra-xl.jpeg" 
            alt="De To' Shop T-Shirt Hero"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* Overlay details inside card */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left flex items-end justify-between pointer-events-none">
            <div className="truncate pr-2">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                DROP 01 // DISPONIBLE
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase truncate">
                T-SHIRT BALMAIN PARIS NOIR
              </h3>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-200 border border-white/20 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm shrink-0">
              175 GSM
            </span>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="w-full flex justify-center px-4">
          <button
            onClick={onExploreClick}
            className="w-full xs:w-auto min-w-[220px] sm:min-w-[260px] flex items-center justify-center space-x-3 bg-white hover:bg-zinc-200 active:scale-95 text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl group"
          >
            <span>VER COLECCIÓN T-SHIRT</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>

        {/* Minimalist Micro Badges with Shipping Prominence */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-widest uppercase text-zinc-400 font-mono px-2">
          <span className="flex items-center space-x-1.5 text-zinc-200 font-semibold">
            <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Envíos Nacionales e Internacionales</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1 h-1 rounded-full bg-zinc-400" />
            <span>Pima Peruana · 175 GSM</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1 h-1 rounded-full bg-zinc-400" />
            <span>Atención Directa por WhatsApp</span>
          </span>
        </div>

      </div>
    </section>
  );
};
