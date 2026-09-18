import React from 'react';
import { Bell, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export const ComingSoonSection: React.FC = () => {
  const upcomingDrops = [
    {
      drop: 'DROP 02',
      title: 'OVERSIZE',
      fabric: 'PIMA PERUANA · 250 GSM',
      badge: 'PRÓXIMAMENTE',
      description: 'Silueta amplia y relajada con una estructura de mayor gramaje.',
      highlights: ['250 GSM', 'Corte amplio streetwear', 'Pima Peruana'],
      categoryName: 'OVERSIZE (250 GSM)',
    },
    {
      drop: 'DROP 03',
      title: 'BASICS',
      fabric: 'PIMA PERUANA · 175 GSM',
      badge: 'PRÓXIMAMENTE',
      description: 'La pureza de lo esencial.',
      highlights: ['Corte clásico', 'Estética minimalista', 'Versatilidad diaria'],
      categoryName: 'BASICS (175 GSM)',
    },
  ];

  const handleNotifyWhatsApp = (dropName: string) => {
    const text = `Hola DE TO' SHOP, quiero que me avisen cuando esté disponible el ${dropName}.`;
    const url = siteConfig.getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="lo-que-viene" className="relative z-10 w-full py-12 sm:py-16 px-3.5 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header (Compact) */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase text-amber-300">
              PRÓXIMOS LANZAMIENTOS
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl font-black font-sans tracking-tight text-white uppercase mb-1">
            LO QUE VIENE
          </h2>

          <p className="text-xs sm:text-sm font-sans text-zinc-400 font-light">
            Nuevos conceptos en desarrollo con la misma pureza textil.
          </p>
        </div>

        {/* 2 Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {upcomingDrops.map((drop) => (
            <div
              key={drop.title}
              className="relative p-5 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-amber-500/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badges row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded-full">
                    {drop.drop}
                  </span>

                  <span className="inline-flex items-center space-x-1 text-[9px] font-mono tracking-widest uppercase text-zinc-400">
                    <Sparkles className="w-2.5 h-2.5 text-amber-400 shrink-0" />
                    <span>{drop.badge}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white uppercase mb-0.5">
                  {drop.title}
                </h3>

                {/* Fabric tag */}
                <p className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-3">
                  {drop.fabric}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-300 font-sans font-light leading-relaxed mb-4">
                  {drop.description}
                </p>

                {/* Key features bullets */}
                <ul className="space-y-1.5 mb-5 text-xs font-sans text-zinc-400">
                  {drop.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notification Button */}
              <div className="pt-3 border-t border-white/5">
                <button
                  onClick={() => handleNotifyWhatsApp(`${drop.drop} — ${drop.title}`)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white text-zinc-200 hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-white/10 hover:border-transparent group"
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
