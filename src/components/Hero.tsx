import React from 'react';
import { ArrowDown, Globe, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-3.5 sm:px-6 pt-3 sm:pt-5 pb-6 sm:pb-10">
      {/* Background Lighting & Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cinematic top radial light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[650px] h-[280px] sm:h-[650px] bg-white/[0.04] rounded-full blur-3xl" />
        {/* Center product back-glow for high contrast */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[480px] h-[300px] sm:h-[500px] bg-gradient-to-b from-white/[0.08] via-emerald-500/[0.04] to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/15 mb-2.5 sm:mb-3 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-emerald-300">
            DROP 01 — DISPONIBLE
          </span>
        </div>

        {/* Secondary Brand Tagline */}
        <div className="mb-1.5 sm:mb-2">
          <span className="text-[9.5px] sm:text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 font-medium">
            DE TO’ SHOP · TU ESTILO. TU ESENCIA.
          </span>
        </div>

        {/* Main Product Title */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black font-sans tracking-tight text-white uppercase mb-1.5 sm:mb-2 leading-none">
          T-SHIRTS PREMIUM
        </h1>

        {/* Material & Gramaje Subheading */}
        <div className="inline-flex items-center space-x-2 text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-emerald-400 uppercase mb-2 sm:mb-2.5">
          <span>PIMA PERUANA</span>
          <span className="text-zinc-600">·</span>
          <span>175 GSM</span>
        </div>

        {/* Clear Commercial Description */}
        <p className="text-xs sm:text-sm md:text-base tracking-wide text-zinc-300 max-w-xs sm:max-w-lg mb-2.5 sm:mb-3 font-sans font-light leading-relaxed px-2">
          Una selección de T-Shirts diseñada para elevar lo esencial.
        </p>

        {/* Highlighted Price */}
        <div className="mb-3.5 sm:mb-4">
          <span className="inline-block px-3.5 py-1 rounded-lg bg-white/10 border border-white/20 text-lg sm:text-2xl font-mono font-black tracking-tight text-white shadow-lg backdrop-blur-sm">
            $100.000 COP
          </span>
        </div>

        {/* Visual Hero Protagonist Card with High Contrast */}
        <div 
          onClick={onExploreClick}
          className="group relative w-full max-w-[200px] xs:max-w-[220px] sm:max-w-[250px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer mb-4 sm:mb-6 transition-all duration-500 hover:scale-[1.02] shadow-2xl border-2 border-white/25 hover:border-emerald-400/60 bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-black/90 p-1.5"
        >
          {/* Inner card with contrast lighting */}
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-950">
            <img 
              src="/fotos-camisas/balmain-negra-xl.jpeg" 
              alt="Prenda Destacada Drop 01 - Balmain Paris Negra"
              className="w-full h-full object-cover object-center filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />

            {/* Micro details on card */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left flex items-end justify-between pointer-events-none">
              <div className="truncate pr-1.5">
                <span className="text-[8.5px] sm:text-[9.5px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                  DROP 01 · DISPONIBLE
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase truncate">
                  BALMAIN PARIS — NEGRA
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-zinc-200 border border-white/20 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm shrink-0">
                175 GSM
              </span>
            </div>
          </div>
        </div>

        {/* Primary CTA Button: VER DROP 01 ↓ */}
        <div className="w-full flex justify-center px-4 mb-3 sm:mb-4">
          <button
            onClick={onExploreClick}
            className="w-full xs:w-auto min-w-[220px] sm:min-w-[260px] flex items-center justify-center space-x-2.5 bg-white hover:bg-zinc-200 active:scale-95 text-black px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl group"
          >
            <span>VER DROP 01</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>

        {/* Subtext below CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-[10px] sm:text-xs tracking-widest uppercase text-zinc-300 font-mono">
          <span className="inline-flex items-center space-x-1.5 text-zinc-200 font-semibold">
            <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>ENVÍOS NACIONALES E INTERNACIONALES</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">·</span>
          <span className="inline-flex items-center space-x-1.5 text-zinc-300">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>ATENCIÓN DIRECTA POR WHATSAPP</span>
          </span>
        </div>

      </div>
    </section>
  );
};
