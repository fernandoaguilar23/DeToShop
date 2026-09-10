import React from 'react';
import { Clock, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { CategoryInfo } from '../data/products';
import { siteConfig } from '../config/site';

interface ComingSoonViewProps {
  category: CategoryInfo;
  onGoToAvailable: () => void;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({
  category,
  onGoToAvailable,
}) => {
  const handleNotifyWhatsApp = () => {
    const url = siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.dropInquiry(category.label));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-4 sm:my-6 p-5 sm:p-12 rounded-3xl glass-card border border-white/15 relative overflow-hidden text-center animate-fade-in shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Top Drop Badge */}
      <div className="inline-flex items-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6 backdrop-blur-md">
        <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse shrink-0" />
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-amber-300">
          {category.dropNumber} · PRÓXIMAMENTE
        </span>
      </div>

      {/* Big Category Name */}
      <h3 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase mb-2 sm:mb-3">
        {category.label}
      </h3>

      {/* Punchy Sub-title */}
      <p className="text-xs xs:text-sm sm:text-lg font-mono tracking-luxury text-zinc-300 uppercase mb-3 sm:mb-4">
        NUEVO DROP EN CAMINO
      </p>

      {/* Editorial Teaser Description */}
      <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed px-2">
        {category.tagline}
      </p>

      {/* Fabric Specs Teaser Card */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-black/50 border border-white/10 mb-6 sm:mb-8 backdrop-blur-sm text-left">
        <div>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 block">
            Composición
          </span>
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            {category.fabric}
          </span>
        </div>

        <div>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 block">
            Gramaje Oficial
          </span>
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide font-mono">
            {category.weight}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto">
        <button
          onClick={handleNotifyWhatsApp}
          className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-extrabold text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-200 shadow-xl"
        >
          <MessageCircle className="w-4 h-4 fill-black shrink-0" />
          <span>AVÍSENME POR WHATSAPP</span>
        </button>

        <button
          onClick={onGoToAvailable}
          className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-200 border border-white/15"
        >
          <span>VER DROP T-SHIRT DISPONIBLE</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>

      {/* Shipping guarantee */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-center space-x-2 text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
        <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
        <span>Envíos Nacionales e Internacionales al Lanzamiento</span>
      </div>
    </div>
  );
};
