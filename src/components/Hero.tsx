import React from 'react';
import { ArrowDown, Globe } from 'lucide-react';
import { siteConfig } from '../config/site';
import { WarpText } from './WarpText';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden px-3.5 sm:px-6 pt-4 sm:pt-8 pb-8 sm:pb-16">
      {/* Background Lighting & Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cinematic top radial light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[650px] h-[240px] sm:h-[650px] bg-white/[0.03] rounded-full blur-3xl" />
        {/* Bottom subtle mood glow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[220px] sm:w-[500px] h-[160px] bg-zinc-800/[0.15] rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4 sm:mb-8 backdrop-blur-md max-w-full overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-emerald-300 truncate">
            DROP 01 — DISPONIBLE
          </span>
          <span className="text-zinc-600 hidden xs:inline">·</span>
          <span className="text-[9px] sm:text-[11px] font-mono tracking-wider text-zinc-300 uppercase hidden xs:inline">
            PIMA PERUANA · 175 GSM
          </span>
        </div>

        {/* Brand Official Logo Presentation */}
        <div className="w-full max-w-[220px] xs:max-w-[280px] sm:max-w-md md:max-w-lg mb-3 sm:mb-6 px-4">
          <img 
            src={siteConfig.logos.horizontalWhite} 
            alt={siteConfig.brandName} 
            className="w-full h-auto object-contain mx-auto filter drop-shadow-[0_4px_30px_rgba(255,255,255,0.18)] select-none"
          />
          <h1 className="sr-only">{siteConfig.brandName} — {siteConfig.tagline}</h1>
        </div>

        {/* Brand Tagline with WarpText Interactive Effect */}
        <div className="w-full max-w-xl mx-auto my-1 sm:my-2 px-2">
          <WarpText
            text="TU ESTILO. TU ESENCIA."
            color="#f8f5ff"
            warpStrength={0.06}
            warpScale={1.5}
            speed={0.5}
            pointerInfluence={0.35}
            pointerStrength={0.32}
            refraction={0.016}
            ripple={true}
            fontSize="clamp(1.1rem, 3.8vw, 1.85rem)"
            fontWeight={800}
            fontFamily="Space Grotesk, sans-serif"
            letterSpacing="0.14em"
            lineHeight={1}
            style={{ height: '50px', minHeight: '40px' }}
          />
        </div>

        {/* Editorial Subtitle / Concept */}
        <p className="text-xs sm:text-sm md:text-base tracking-wide text-zinc-300 max-w-xs sm:max-w-xl mb-6 sm:mb-10 font-sans font-light leading-relaxed px-2">
          Descubre nuestro primer drop de T-Shirts en Pima Peruana.
          <span className="block mt-1">Piezas seleccionadas para quienes cuidan cada detalle de lo que llevan puesto.</span>
        </p>

        {/* Visual Hero Protagonist Preview Card (Editorial Showcase) */}
        <div 
          onClick={onExploreClick}
          className="group relative w-full max-w-[210px] xs:max-w-[250px] sm:max-w-sm aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden glass-card cursor-pointer mb-6 sm:mb-10 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/30 shadow-xl sm:shadow-2xl"
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
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-bold">
                DROP 01 · DISPONIBLE
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase truncate">
                BALMAIN PARIS — NEGRA
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
            className="w-full xs:w-auto min-w-[200px] sm:min-w-[240px] flex items-center justify-center space-x-3 bg-white hover:bg-zinc-200 active:scale-95 text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl group"
          >
            <span>VER DROP 01</span>
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Pima Peruana · 175 GSM</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>Atención Directa por WhatsApp</span>
          </span>
        </div>

      </div>
    </section>
  );
};
