import React from 'react';
import { Eye, Sparkles, Layers, ShieldCheck, Package } from 'lucide-react';

interface DetailCard {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  tag: string;
}

const details: DetailCard[] = [
  {
    number: '01',
    title: 'TEXTURA',
    subtitle: 'Pima Peruana.',
    image: '/fotos-camisas/hugo-boss-circle-blanca-xl.jpeg',
    alt: 'Textura en Pima Peruana de alta calidad',
    icon: Sparkles,
    tag: 'FIBRA PREMIUM',
  },
  {
    number: '02',
    title: 'ESTRUCTURA',
    subtitle: '175 GSM.',
    image: '/fotos-camisas/coach-negra-xxl.jpeg',
    alt: 'Estructura equilibrada y caída natural 175 GSM',
    icon: Layers,
    tag: 'CAÍDA NATURAL',
  },
  {
    number: '03',
    title: 'DETALLES',
    subtitle: 'Acabados cuidados.',
    image: '/fotos-camisas/dolce-gabbana-blanca-xl.jpeg',
    alt: 'Acabados cuidados en confección y estampados',
    icon: Eye,
    tag: 'CONFECCIÓN LIMPIA',
  },
  {
    number: '04',
    title: 'PRESENTACIÓN',
    subtitle: 'Empaque protegido.',
    image: '/fotos-camisas/hugo-boss-embossed-blanca-xl-xxl.jpeg',
    alt: 'Presentación en empaque hermético protegido',
    icon: Package,
    tag: 'PIEZA PROTEGIDA',
  },
];

export const ProductDetailsSection: React.FC = () => {
  return (
    <section id="detalles" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              PRIMER PLANO · CALIDAD VISIBLE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            DETALLES QUE SE NOTAN
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-luxury text-emerald-400 uppercase">
            FOTOGRAFÍA REAL · SIN FILTROS DISTRACTORES
          </p>
        </div>

        {/* 4 Cards Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-emerald-500/30 transition-all duration-500 shadow-xl hover:-translate-y-1"
              >
                {/* Image Container with 4:5 Aspect Ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-void">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Contrast gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-black/70 border border-emerald-500/20 px-2 py-0.5 rounded-full backdrop-blur-md">
                      {item.number}
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-mono tracking-wider uppercase text-zinc-300 bg-black/60 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom Text Content inside Card */}
                  <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                    <div className="flex items-center space-x-1.5 mb-0.5">
                      <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <h3 className="text-xs sm:text-base font-bold font-sans tracking-wide text-white uppercase">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-sm font-mono text-zinc-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
