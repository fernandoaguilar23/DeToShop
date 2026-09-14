import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '../config/site';

export const WhatsAppCTA: React.FC = () => {
  const handleContactWhatsApp = () => {
    const url = siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.generalInquiry);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative z-10 w-full py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-7 sm:p-12 md:p-16 glass-card border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 via-black to-black text-center overflow-hidden shadow-2xl">
          
          {/* Mood background light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-emerald-300">
              CANAL DE ATENCIÓN DIRECTA
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-4 max-w-2xl mx-auto">
            ¿TIENES UNA PRENDA EN MENTE?
          </h2>

          {/* Text */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Confirma disponibilidad, tallas y opciones de envío directamente con nuestro equipo. Te asesoramos paso a paso para que recibas tu drop sin complicaciones.
          </p>

          {/* Main Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl hover:shadow-emerald-500/25 active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
              <span>HABLAR CON DE TO’ SHOP</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <span className="flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Respuesta Inmediata</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Prendas 100% Garantizadas</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>+57 315 372 9631</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
