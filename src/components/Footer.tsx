import React from 'react';
import { MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FooterProps {
  onExploreClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onExploreClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const url = siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.generalInquiry);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToPolicies = () => {
    const el = document.getElementById('antes-de-comprar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black/60 backdrop-blur-md border-t border-white/10 pt-12 sm:pt-16 pb-24 sm:pb-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={siteConfig.logos.horizontalWhite} 
                alt={siteConfig.brandName} 
                className="h-7 sm:h-8 w-auto object-contain brightness-105"
              />
            </div>
            
            <p className="text-xs sm:text-sm font-sans tracking-luxury text-zinc-200 uppercase font-semibold">
              {siteConfig.tagline}
            </p>

            <p className="text-xs text-zinc-400 max-w-md leading-relaxed font-sans font-light">
              Boutique digital con curaduría exclusiva en Pima Peruana de 175 GSM.
              <span className="block mt-1">Piezas seleccionadas para elevar lo esencial con identidad propia.</span>
            </p>
          </div>

          {/* Direct Channels */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white">
              CANALES DIRECTOS
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button
                  onClick={onExploreClick || scrollToTop}
                  className="text-zinc-300 hover:text-white transition-colors uppercase font-mono text-[11px]"
                >
                  Colección Drop 01
                </button>
              </li>
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
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white">
              INFORMACIÓN & POLÍTICAS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-zinc-400">
              <li>
                <button
                  onClick={scrollToPolicies}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Cambios
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToPolicies}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Envíos
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToPolicies}
                  className="hover:text-white transition-colors text-left"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToPolicies}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Privacidad
                </button>
              </li>
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
