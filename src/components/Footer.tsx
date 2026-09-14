import React from 'react';
import { MessageCircle, Instagram, ArrowUp, Globe } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const url = siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.generalInquiry);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full bg-brand-void border-t border-white/10 pt-12 sm:pt-16 pb-24 sm:pb-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/15 shrink-0 overflow-hidden">
                <img 
                  src={siteConfig.logos.symbol} 
                  alt="Logo De To' Shop" 
                  className="absolute inset-0 w-full h-full object-contain p-1 z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-[11px] sm:text-xs font-bold font-display text-white tracking-widest">TS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold font-display tracking-widest text-white uppercase">
                {siteConfig.brandName}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm font-sans tracking-luxury text-zinc-300 uppercase">
              {siteConfig.tagline}
            </p>

            <p className="text-xs text-zinc-400 max-w-md leading-relaxed font-sans font-light">
              Catálogo digital oficial. Confección exclusiva en Pima Peruana (175 GSM / 250 GSM).
              Diseñado para elevar tu presencia y autenticidad en cada drop.
            </p>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white">
              Canales Oficiales
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp Oficial</span>
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Instagram ({siteConfig.socials.instagramHandle})</span>
                </a>
              </li>
              <li className="text-zinc-300 pt-1 flex items-center space-x-1.5 font-mono text-[10px] sm:text-[11px]">
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{siteConfig.socials.shippingNotice}</span>
              </li>
            </ul>
          </div>

          {/* Drops & Policies Info */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white">
              Colecciones & Envíos
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs font-sans text-zinc-400">
              <li>· <strong className="text-zinc-300">T-Shirt (175 GSM)</strong>: Disponible</li>
              <li>· <strong className="text-zinc-400">Oversize (250 GSM)</strong>: Próximamente</li>
              <li>· <strong className="text-zinc-400">Básicas</strong>: Próximamente</li>
              <li>· Envíos Nacionales e Internacionales</li>
              <li>· Ventas y atención directa por WhatsApp</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-zinc-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-zinc-300 hover:text-white transition-colors uppercase tracking-wider text-[10px] sm:text-[11px]"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
