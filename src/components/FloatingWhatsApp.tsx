import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const url = siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.generalInquiry);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-3 sm:right-6 z-30 flex items-center">
      <button
        onClick={handleClick}
        className="group relative flex items-center space-x-2 sm:space-x-2.5 bg-zinc-900/95 hover:bg-zinc-800 text-white pl-3.5 pr-4 py-2.5 sm:py-3 rounded-full border border-white/15 shadow-2xl backdrop-blur-xl transition-all duration-300 active:scale-95 hover:border-emerald-500/40"
        title="Hablar con un asesor en WhatsApp"
      >
        {/* Pulsing indicator dot */}
        <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500" />
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform shrink-0" />

        {/* Label (compact on mobile, full on desktop) */}
        <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase font-mono text-zinc-200">
          <span className="sm:hidden">ASESORÍA</span>
          <span className="hidden sm:inline">HABLAR CON NOSOTROS</span>
        </span>
      </button>
    </div>
  );
};
