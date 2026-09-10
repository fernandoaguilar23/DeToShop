import React from 'react';
import { MessageCircle, Globe, Instagram } from 'lucide-react';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick }) => {
  const handleWhatsAppContact = () => {
    const url = siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.generalInquiry);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header transition-all duration-300">
      {/* Top subtle announcement bar for shipping */}
      <div className="w-full bg-brand-void/95 border-b border-white/5 py-1 px-3 sm:px-4 text-center">
        <p className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-300 uppercase flex items-center justify-center space-x-1.5 truncate">
          <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{siteConfig.socials.shippingNotice}</span>
          <span className="text-zinc-600 hidden xs:inline">·</span>
          <span className="text-zinc-400 hidden xs:inline">PIMA PERUANA 175 GSM</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <div 
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-gradient-to-br from-brand-borderLight to-brand-border flex items-center justify-center border border-white/10 shadow-glow shrink-0">
            <span className="text-[11px] sm:text-xs font-bold font-display text-white tracking-widest">TS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg font-bold font-display tracking-widest text-white leading-tight">
              {siteConfig.brandName}
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-luxury text-zinc-400 font-medium">
              Luxury Streetwear
            </span>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <button
            onClick={onExploreClick}
            className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-zinc-300 hover:text-white transition-colors px-2.5 sm:px-3 py-1.5 rounded-full hover:bg-white/5"
          >
            Colección
          </button>

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-pink-400 transition-colors border border-white/10"
            title="Síguenos en Instagram @detoshop__"
          >
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          <button
            onClick={handleWhatsAppContact}
            className="flex items-center space-x-1.5 sm:space-x-2 bg-white/5 hover:bg-white/10 active:scale-95 text-white border border-white/15 hover:border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-200 shadow-sm"
            title="Escríbenos directamente a WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden text-[10px]">Chat</span>
          </button>
        </div>

      </div>
    </header>
  );
};
