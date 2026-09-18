import React from 'react';
import { Compass, CheckCircle2, MessageCircle, PackageCheck } from 'lucide-react';

export const BuyingProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'ELIGE TU PIEZA',
      description: 'Explora el Drop y encuentra tu referencia.',
      icon: Compass,
    },
    {
      step: '02',
      title: 'CONFIRMA TU TALLA',
      description: 'Si tienes dudas, nuestro equipo te asesora por WhatsApp.',
      icon: CheckCircle2,
    },
    {
      step: '03',
      title: 'CONFIRMA TU PEDIDO',
      description: 'Realiza el proceso de compra con nuestro equipo.',
      icon: MessageCircle,
    },
    {
      step: '04',
      title: 'RECIBE TU DROP',
      description: 'Recibe tu pedido con seguimiento y empaque protegido.',
      icon: PackageCheck,
    },
  ];

  return (
    <section id="proceso-compra" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              PASO A PASO
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            COMPRAR DE TO’ ES SIMPLE.
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-luxury text-emerald-400 uppercase">
            ATENCIÓN HUMANA Y DIRECTA SIN FRICCIÓN
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      {item.step}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold font-sans text-white uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Progress bar line for visual flow */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>ETAPA {idx + 1} DE 4</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
