import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, ChevronRight, Ruler, PackageSearch, ShoppingBag, Truck } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openWhatsAppWithMessage = (message: string) => {
    const url = siteConfig.getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const quickOptions = [
    {
      icon: Ruler,
      title: 'Elegir talla',
      desc: 'Te asesoramos con medidas exactas',
      message: "Hola DE TO' SHOP, necesito ayuda para elegir mi talla.",
    },
    {
      icon: PackageSearch,
      title: 'Consultar disponibilidad',
      desc: 'Pregunta por una referencia o color',
      message: "Hola DE TO' SHOP, quiero consultar la disponibilidad de una prenda.",
    },
    {
      icon: ShoppingBag,
      title: 'Realizar pedido',
      desc: 'Gestiona tu compra directamente',
      message: "Hola DE TO' SHOP, quiero realizar un pedido de Drop 01.",
    },
    {
      icon: Truck,
      title: 'Consultar envío',
      desc: 'Tiempos locales, nacionales o internacionales',
      message: "Hola DE TO' SHOP, tengo una duda sobre los tiempos de envío.",
    },
  ];

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] right-3 sm:right-6 z-40 flex flex-col items-end"
    >
      {/* Quick Options Drawer Popup */}
      {isOpen && (
        <div className="mb-2.5 w-[280px] xs:w-[310px] bg-zinc-950/95 border border-white/15 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl animate-slide-up flex flex-col space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 px-1">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-white">
                ¿EN QUÉ PODEMOS AYUDARTE?
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {quickOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.title}
                  onClick={() => openWhatsAppWithMessage(opt.message)}
                  className="w-full text-left p-2 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 rounded-lg bg-white/5 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold text-zinc-200 group-hover:text-white">
                        {opt.title}
                      </p>
                      <p className="text-[9.5px] font-sans text-zinc-400 font-light">
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </button>
              );
            })}
          </div>

          <div className="pt-1 text-center">
            <button
              onClick={() => openWhatsAppWithMessage(siteConfig.whatsappMessages.generalInquiry)}
              className="text-[10px] font-mono text-zinc-400 hover:text-emerald-300 transition-colors underline underline-offset-2"
            >
              Abrir chat directo en WhatsApp →
            </button>
          </div>
        </div>
      )}

      {/* Main Compact Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-2 bg-zinc-950/90 hover:bg-zinc-900 text-white pl-3 pr-3.5 py-2 sm:py-2.5 rounded-full border border-white/15 shadow-xl backdrop-blur-md transition-all duration-200 active:scale-95 hover:border-emerald-500/40"
        title="Opciones de asesoría en WhatsApp"
      >
        {/* Pulsing indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform shrink-0" />

        {/* Label (Compact on mobile: ● ASESORÍA or 💬 WHATSAPP) */}
        <span className="text-[10.5px] sm:text-xs font-mono font-bold tracking-wider uppercase text-zinc-200">
          <span className="sm:hidden">ASESORÍA</span>
          <span className="hidden sm:inline">ASESORÍA DIRECTA</span>
        </span>
      </button>
    </div>
  );
};
