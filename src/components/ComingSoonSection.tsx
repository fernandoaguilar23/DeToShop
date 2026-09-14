import React from 'react';
import { Clock, Bell, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const ComingSoonSection: React.FC = () => {
  const upcomingDrops = [
    {
      drop: 'DROP 02',
      title: 'OVERSIZE',
      weight: '250 GSM',
      fabric: 'Pima Peruana',
      badge: 'PRÓXIMAMENTE',
      description: 'Silueta amplia y relajada con caída estructurada de alto gramaje. Diseñada para un streetwear refinado con presencia imponente.',
      highlights: ['Gramaje pesado 250 GSM', 'Corte amplio streetwear', 'Pima Peruana de máxima duración'],
      categoryName: 'OVERSIZE (250 GSM)',
    },
    {
      drop: 'DROP 03',
      title: 'BASICS',
      weight: '175 GSM',
      fabric: 'Pima Peruana',
      badge: 'PRÓXIMAMENTE',
      description: 'La pureza de lo esencial. Corte clásico atemporal, acabados limpios y la suavidad incomparable de la Pima Peruana sin distracciones.',
      highlights: ['Algodón Pima Peruana 175 GSM', 'Estética minimalista pura', 'Versatilidad diaria'],
      categoryName: 'BASICS',
    },
  ];

  const handleNotifyWhatsApp = (categoryName: string) => {
    const url = siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.dropInquiry(categoryName));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="coming-soon" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-amber-300">
              PRÓXIMOS LANZAMIENTOS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            COMING SOON
          </h2>

          <p className="text-sm sm:text-base font-sans tracking-wider text-zinc-300 font-light italic">
            “Lo que viene, promete.”
          </p>
        </div>

        {/* 2 Anticipation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {upcomingDrops.map((drop) => (
            <div
              key={drop.title}
              className="relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Top ambient glow */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Badges row */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-950/40 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      {drop.drop}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-300 border border-white/10 px-2.5 py-1 rounded-full">
                      {drop.weight}
                    </span>
                  </div>

                  <span className="inline-flex items-center space-x-1 text-[9px] font-mono tracking-widest uppercase text-amber-400">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>{drop.badge}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white uppercase mb-1">
                  {drop.title}
                </h3>

                {/* Fabric tag */}
                <p className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-4">
                  {drop.fabric} · {drop.weight}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed mb-6">
                  {drop.description.split('. ').map((part, i, arr) => (
                    <span key={i} className={i > 0 ? "block mt-1" : ""}>
                      {part}{i < arr.length - 1 ? '.' : ''}
                    </span>
                  ))}
                </p>

                {/* Key features */}
                <ul className="space-y-2 mb-8 text-xs font-sans text-zinc-300">
                  {drop.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notification Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => handleNotifyWhatsApp(drop.categoryName)}
                  className="w-full flex items-center justify-center space-x-2.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-widest transition-all duration-200 border border-white/15 hover:border-transparent group shadow-md"
                >
                  <Bell className="w-3.5 h-3.5 text-amber-400 group-hover:text-black transition-colors" />
                  <span>AVÍSAME CUANDO ESTÉ DISPONIBLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
