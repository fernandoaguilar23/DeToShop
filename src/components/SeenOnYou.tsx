import React from 'react';
import { Instagram, Camera, Sparkles, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const SeenOnYou: React.FC = () => {
  return (
    <section id="seen-on-you" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              COMUNIDAD & STREETWEAR
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            SEEN ON YOU
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-luxury text-zinc-400 uppercase">
            DE TO’ SHOP, EN LA VIDA REAL.
          </p>
        </div>

        {/* Community Lookbook Framework */}
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 glass-card border border-white/10 overflow-hidden text-center max-w-4xl mx-auto">
          {/* Subtle mood light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Transparent Status Notice */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-white">
              PRÓXIMAMENTE — EXPERIENCIAS DE NUESTRA COMUNIDAD
            </span>
          </div>

          {/* Editorial Message */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            El estilo cobra vida cuando lo llevas puesto. Próximamente compartiremos aquí las tomas reales de quienes ya visten nuestros drops oficiales.
          </p>

          {/* Aesthetic Mock Lookbook Frame Slots */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { label: 'LOOKBOOK 01', tag: '#DROP01' },
              { label: 'LOOKBOOK 02', tag: '#PIMAPERUANA' },
              { label: 'LOOKBOOK 03', tag: '#STREETWEAR' },
              { label: 'LOOKBOOK 04', tag: '#DETOSHOP' },
            ].map((slot, index) => (
              <div
                key={index}
                className="aspect-[3/4] rounded-xl sm:rounded-2xl bg-white/[0.02] border border-dashed border-white/15 flex flex-col items-center justify-center p-3 text-center group hover:border-pink-500/40 transition-colors"
              >
                <div className="p-2.5 rounded-full bg-white/5 text-zinc-500 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-colors mb-2">
                  <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 block">
                  {slot.label}
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-zinc-600 uppercase">
                  {slot.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action: Invite User to Tag on Instagram */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-md group"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>ETIQUÉTANOS EN INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <span className="text-[11px] font-mono text-zinc-400">
              @{siteConfig.socials.instagramHandle}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
