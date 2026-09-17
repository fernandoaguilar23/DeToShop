import React from 'react';
import { Zap, Truck, Globe2, ShieldCheck, PackageCheck, Clock } from 'lucide-react';

export const ShippingSection: React.FC = () => {
  const deliveryTimes = [
    {
      icon: Zap,
      region: 'BARRANQUILLA Y SOLEDAD',
      badge: 'EXPRÉS LOCAL',
      time: 'EL MISMO DÍA',
      desc: 'Despacho prioritario local directo a tu dirección. Si ordenas hoy, lo recibes y estrenas hoy mismo.',
      highlight: true,
    },
    {
      icon: Truck,
      region: 'RESTO DEL PAÍS (COLOMBIA)',
      badge: 'TODO EL PAÍS',
      time: '2 A 4 DÍAS',
      desc: 'Envíos seguros a todas las ciudades y municipios de Colombia con número de guía para rastreo en tiempo real.',
      highlight: false,
    },
    {
      icon: Globe2,
      region: 'ENVÍOS INTERNACIONALES',
      badge: 'COBERTURA GLOBAL',
      time: '4 A 7 DÍAS HÁBILES',
      desc: 'Despachos aéreos internacionales a cualquier destino del mundo con trazabilidad de principio a fin.',
      highlight: false,
    },
  ];

  return (
    <section id="shipping" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              LOGÍSTICA & TIEMPOS DE ENTREGA
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            TU DROP. DONDE ESTÉS.
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-luxury text-emerald-400 uppercase">
            DESPACHOS ÁGILES · EMPAQUE SELLADO DE PROTECCIÓN
          </p>
        </div>

        {/* 3 Delivery Times Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-6 sm:mb-8">
          {deliveryTimes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg ${
                  item.highlight
                    ? 'border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/50'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${
                      item.highlight ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-white/5 text-emerald-400 border border-white/10'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${
                      item.highlight ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-white/5 text-zinc-400'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Region name */}
                  <h3 className="text-xs sm:text-sm font-mono tracking-wider text-zinc-300 uppercase mb-1">
                    {item.region}
                  </h3>

                  {/* Big Delivery Time */}
                  <div className="text-xl sm:text-2xl font-black font-sans text-white tracking-tight uppercase mb-3">
                    {item.time}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sealed Packaging Banner */}
        <div className="max-w-5xl mx-auto">
          <div className="relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border border-white/15 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-start space-x-3.5 sm:space-x-4">
              <div className="p-3 rounded-2xl bg-white/5 text-emerald-400 border border-white/10 shrink-0">
                <PackageCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs sm:text-sm font-bold font-sans tracking-wide text-white uppercase">
                    EMPAQUE SELLADO DE PROTECCIÓN
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed max-w-3xl">
                  Cada prenda de <strong className="text-white font-medium">DE TO’ SHOP</strong> viaja en empaque sellado de protección hermética para garantizar que recibas tu pieza en estado 100% impecable, libre de impurezas y lista para estrenar.
                </p>
              </div>
            </div>
            <div className="shrink-0 self-end sm:self-center">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>PIEZA SELLADA</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
