import React from 'react';
import { Truck, Globe2, MessageSquareText } from 'lucide-react';

export const ShippingSection: React.FC = () => {
  const pillars = [
    {
      icon: Truck,
      title: 'ENVÍOS NACIONALES',
      desc: 'Despachos seguros a todas las ciudades y municipios del país. Entrega confiable y número de guía para tu pedido.',
      tag: 'TODO EL PAÍS',
    },
    {
      icon: Globe2,
      title: 'ENVÍOS INTERNACIONALES',
      desc: 'Llevamos cada drop a cualquier destino del mundo. Empaques reforzados para garantizar que tu prenda llegue impecable.',
      tag: 'COBERTURA MUNDIAL',
    },
    {
      icon: MessageSquareText,
      title: 'ATENCIÓN PERSONALIZADA',
      desc: 'Coordinamos tu pedido, confirmamos la disponibilidad de tu talla y cotizamos tu envío directamente por WhatsApp.',
      tag: 'RESPUESTA RÁPIDA',
    },
  ];

  return (
    <section id="shipping" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5 bg-brand-void">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              LOGÍSTICA & DESPACHOS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            TU DROP. DONDE ESTÉS.
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-luxury text-emerald-400 uppercase">
            COBERTURA GLOBAL · ATENCIÓN CERCANA
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-white/5 text-emerald-400 border border-emerald-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-zinc-400">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold font-sans text-white uppercase tracking-wide mb-2.5">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
