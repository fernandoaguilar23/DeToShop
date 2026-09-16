import React from 'react';
import LogoLoop, { LogoItem } from './LogoLoop';

const brandLogos: LogoItem[] = [
  {
    src: '/brands/balmain.svg',
    alt: 'Balmain Paris',
    title: 'Balmain Paris',
  },
  {
    src: '/brands/coach.svg',
    alt: 'Coach New York',
    title: 'Coach New York',
  },
  {
    src: '/brands/boss.svg',
    alt: 'Boss Hugo Boss',
    title: 'Boss Hugo Boss',
  },
  {
    src: '/brands/dg.svg',
    alt: 'Dolce & Gabbana',
    title: 'Dolce & Gabbana',
  },
  {
    src: '/brands/hugo.svg',
    alt: 'Hugo',
    title: 'Hugo',
  },
  {
    src: '/brands/hugo-boss.svg',
    alt: 'Hugo Boss',
    title: 'Hugo Boss',
  },
  {
    src: '/logos/horizontal-blanco.png',
    alt: 'De To’ Shop',
    title: 'De To’ Shop',
  },
];

export const BrandMarquee: React.FC = () => {
  return (
    <section className="relative z-20 py-8 sm:py-12 border-y border-white/5 bg-brand-void/80 backdrop-blur-md overflow-hidden">
      {/* Editorial Header Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 sm:mb-7 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9.5px] sm:text-[10.5px] font-mono tracking-widest uppercase text-zinc-400">
            MARCAS OFICIALES · PIEZAS EXCLUSIVAS
          </span>
        </div>
      </div>

      {/* Interactive Infinite Logo Loop */}
      <div className="relative w-full overflow-hidden">
        <LogoLoop
          logos={brandLogos}
          speed={60}
          direction="left"
          logoHeight={32}
          gap={60}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#000000"
          ariaLabel="Marcas que vendemos en De To’ Shop"
          className="opacity-85 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
};
