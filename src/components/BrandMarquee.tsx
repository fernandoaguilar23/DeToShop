import React from 'react';
import LogoLoop, { LogoItem } from './LogoLoop';

const brandLogos: LogoItem[] = [
  {
    src: '/brands/balmain.svg',
    alt: 'Balmain Paris',
    title: 'Balmain Paris',
  },
  {
    src: '/brands/louis-vuitton.svg',
    alt: 'Louis Vuitton',
    title: 'Louis Vuitton',
  },
  {
    src: '/brands/dior.svg',
    alt: 'Dior',
    title: 'Dior',
  },
  {
    src: '/brands/prada.svg',
    alt: 'Prada',
    title: 'Prada',
  },
  {
    src: '/brands/balenciaga.svg',
    alt: 'Balenciaga',
    title: 'Balenciaga',
  },
  {
    src: '/brands/dg.svg',
    alt: 'Dolce & Gabbana',
    title: 'Dolce & Gabbana',
  },
  {
    src: '/brands/versace.svg',
    alt: 'Versace',
    title: 'Versace',
  },
  {
    src: '/brands/burberry.svg',
    alt: 'Burberry',
    title: 'Burberry',
  },
  {
    src: '/brands/valentino.svg',
    alt: 'Valentino',
    title: 'Valentino',
  },
  {
    src: '/brands/ferragamo.svg',
    alt: 'Salvatore Ferragamo',
    title: 'Salvatore Ferragamo',
  },
  {
    src: '/brands/coach.svg',
    alt: 'Coach New York',
    title: 'Coach New York',
  },
  {
    src: '/brands/hugo-boss.svg',
    alt: 'Hugo Boss',
    title: 'Hugo Boss',
  },
  {
    src: '/brands/armani-exchange.svg',
    alt: 'Armani Exchange',
    title: 'Armani Exchange',
  },
  {
    src: '/brands/ralph-lauren.svg',
    alt: 'Ralph Lauren',
    title: 'Ralph Lauren',
  },
  {
    src: '/brands/tommy-hilfiger.svg',
    alt: 'Tommy Hilfiger',
    title: 'Tommy Hilfiger',
  },
  {
    src: '/brands/amiri.svg',
    alt: 'Amiri',
    title: 'Amiri',
  },
  {
    src: '/brands/off-white.svg',
    alt: 'Off-White',
    title: 'Off-White',
  },
  {
    src: '/brands/rhude.svg',
    alt: 'Rhude',
    title: 'Rhude',
  },
  {
    src: '/brands/casablanca.svg',
    alt: 'Casablanca Paris',
    title: 'Casablanca Paris',
  },
  {
    src: '/brands/represent.svg',
    alt: 'Represent',
    title: 'Represent',
  },
  {
    src: '/brands/essentials.svg',
    alt: 'Fear of God Essentials',
    title: 'Essentials',
  },
  {
    src: '/brands/dsquared2.svg',
    alt: 'Dsquared2',
    title: 'Dsquared2',
  },
  {
    src: '/brands/psycho-bunny.svg',
    alt: 'Psycho Bunny',
    title: 'Psycho Bunny',
  },
  {
    src: '/brands/barrow.svg',
    alt: 'Barrow',
    title: 'Barrow',
  },
  {
    src: '/brands/nike.svg',
    alt: 'Nike',
    title: 'Nike',
  },
  {
    src: '/brands/jordan.svg',
    alt: 'Jordan',
    title: 'Jordan',
  },
  {
    src: '/brands/adidas.svg',
    alt: 'Adidas',
    title: 'Adidas',
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
            SELECCIÓN MULTIMARCA · PIEZAS EXCLUSIVAS
          </span>
        </div>
      </div>

      {/* Interactive Infinite Logo Loop */}
      <div className="relative w-full overflow-hidden">
        <LogoLoop
          logos={brandLogos}
          speed={70}
          direction="left"
          logoHeight={26}
          gap={50}
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
