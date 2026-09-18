import React from 'react';
import { Sparkles, Layers, ShieldCheck, MessageCircle } from 'lucide-react';

export const TheDifference: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'PIMA PERUANA',
      description: 'Suavidad, comodidad y una sensación premium desde el primer contacto.',
      subtext: 'Fibra de alta calidad seleccionada para nuestros drops.',
      icon: Sparkles,
    },
    {
      num: '02',
      title: '175 GSM',
      description: 'El gramaje pensado para lograr una estructura equilibrada y una caída natural.',
      subtext: 'Equilibrio perfecto entre frescura y porte.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'SELECCIÓN MULTIMARCA',
      description: 'No llenamos el catálogo. Seleccionamos cada pieza para construir drops con identidad propia.',
      subtext: 'Curaduría exclusiva de piezas seleccionadas.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'ATENCIÓN DIRECTA',
      description: 'Tallas, disponibilidad, pedidos y envíos directamente con nuestro equipo.',
      subtext: 'Asesoría inmediata y personalizada.',
      icon: MessageCircle,
    },
  ];

  return (
    <section id="the-difference" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              VALOR DIFERENCIAL
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            THE DE TO’ DIFFERENCE
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-luxury text-emerald-400 uppercase">
            LA DIFERENCIA ESTÁ EN LOS DETALLES.
          </p>
        </div>

        {/* 4 Editorial Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-emerald-950/20"
              >
                <div>
                  {/* Top index & icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-400/90 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      {pillar.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold font-sans text-white uppercase tracking-wide mb-2.5">
                    {pillar.title}
                  </h3>

                  {/* Editorial Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed mb-3">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-detail tag */}
                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 tracking-wider">
                    {pillar.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
