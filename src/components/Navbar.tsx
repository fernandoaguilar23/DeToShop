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
      {/* Top subtle announcement bar */}
      <div className="w-full bg-brand-void/95 border-b border-white/5 py-1 px-3 sm:px-4 text-center">
        <p className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-300 uppercase flex items-center justify-center space-x-1.5 truncate">
          <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">{siteConfig.socials.shippingNotice}</span>
          <span className="text-zinc-600 hidden xs:inline">·</span>
          <span className="text-zinc-400 hidden xs:inline">PIMA PERUANA 175 GSM</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-13 sm:h-16 flex items-center justify-between">
        
        {/* Brand Official Logo */}
        <div 
          className="flex items-center cursor-pointer select-none group py-1" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={siteConfig.logos.horizontalWhite} 
            alt={siteConfig.brandName} 
            className="h-6 xs:h-7 sm:h-8 md:h-9 w-auto object-contain brightness-105 group-hover:opacity-90 transition-all duration-300"
          />
        </div>

        {/* Navigation Actions: COLECCIÓN · INSTAGRAM · WHATSAPP */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <button
            onClick={onExploreClick}
            className="text-[10.5px] sm:text-xs font-bold font-mono tracking-widest uppercase text-zinc-300 hover:text-white transition-colors px-2.5 sm:px-3 py-1.5 rounded-full hover:bg-white/5"
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
            className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10.5px] sm:text-xs font-bold font-mono tracking-wider uppercase transition-all duration-200 shadow-sm"
            title="Escríbenos directamente a WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>WhatsApp</span>
          </button>
        </div>

      </div>
    </header>
  );
};
