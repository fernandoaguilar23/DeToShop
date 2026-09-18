import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Check, Share2, Package, HelpCircle } from 'lucide-react';
import { Product } from '../data/products';
import { siteConfig } from '../config/site';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const isSoldOut = product.status === 'sold_out';
  const hasOnlyOneSize = product.status === 'available' && product.sizes.length === 1;

  // Selected image in gallery
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // Selected size by user
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  // Share notification toast
  const [copiedLink, setCopiedLink] = useState(false);

  // Prevent background body scroll while modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Reset states if opened with different product
  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedSize(product.sizes[0] || 'M');
  }, [product]);

  // Primary CTA: Comprar por WhatsApp
  const handleBuyWhatsApp = () => {
    let messageText: string;
    if (isSoldOut) {
      messageText = `Hola DE TO' SHOP, me interesa saber si habrá disponibilidad o restock de: ${product.name}.`;
    } else {
      messageText = `Hola DE TO' SHOP, quiero comprar la prenda: ${product.name} en talla ${selectedSize}. ¿Cómo realizo el pago y envío?`;
    }
    const waUrl = siteConfig.getWhatsAppUrl(messageText);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Secondary CTA: Hablar con asesoría sobre talla
  const handleSizeAdviceWhatsApp = () => {
    const messageText = `Hola DE TO' SHOP, no sé qué talla elegir para la prenda: ${product.name}. ¿Me pueden orientar con las medidas exactas?`;
    const waUrl = siteConfig.getWhatsAppUrl(messageText);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Share product
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} | ${siteConfig.brandName}`,
          text: `Mira esta T-Shirt en ${siteConfig.brandName}: ${product.name}`,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const activeImage = product.images[activeImageIndex] || product.images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fade-in overflow-hidden">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div 
        className="relative z-10 w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-brand-void sm:bg-brand-card border-t sm:border border-white/10 rounded-t-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar on modal */}
        <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-white/10 bg-brand-void/95 sticky top-0 z-30 backdrop-blur-md">
          <div className="flex items-center space-x-2 truncate pr-2">
            <span className="text-xs font-bold font-display tracking-widest text-white uppercase shrink-0">
              {siteConfig.brandName}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase truncate">
              {isSoldOut ? 'DROP 01 · VENDIDA' : 'DROP 01 · DISPONIBLE'}
            </span>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            <button
              onClick={handleShare}
              className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              title="Compartir enlace de prenda"
            >
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Cerrar vista"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-3.5 sm:p-5 md:p-6 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5 md:gap-6 no-scrollbar pb-5 sm:pb-6">
          
          {/* LEFT: GALLERY SECTION */}
          <div className="flex flex-col space-y-2.5 sm:space-y-3">
            {/* Main Active Image with high contrast */}
            <div className="relative aspect-[4/5] sm:aspect-[9/16] max-h-[32vh] xs:max-h-[36vh] sm:max-h-[58vh] w-full max-w-[220px] xs:max-w-[250px] sm:max-w-none mx-auto rounded-xl sm:rounded-2xl overflow-hidden bg-brand-black border border-white/15 shadow-md">
              <img
                src={activeImage?.url}
                alt={activeImage?.label || product.name}
                className="w-full h-full object-cover object-center transition-all duration-300 filter brightness-105 contrast-105"
              />

              {/* Status Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                {isSoldOut ? (
                  <span className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8.5px] sm:text-xs font-medium font-mono tracking-widest uppercase bg-zinc-950/90 text-zinc-400 border border-white/15 backdrop-blur-md shadow-md">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-zinc-500" />
                    <span>VENDIDA</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8.5px] sm:text-xs font-medium font-mono tracking-widest uppercase bg-zinc-950/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-md">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DISPONIBLE</span>
                  </span>
                )}
              </div>

              {/* Packaged indicator badge */}
              {activeImage?.isPackaged && (
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 inline-flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/80 text-[8.5px] sm:text-[10px] font-mono text-zinc-300 border border-white/15 backdrop-blur-sm">
                  <Package className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" />
                  <span>EMPAQUE SELLADO</span>
                </div>
              )}
            </div>

            {/* Thumbnail Selectors (if product has multiple photos) */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-0.5 max-w-[220px] xs:max-w-[250px] sm:max-w-none mx-auto w-full">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[3/4] rounded-xl overflow-hidden border transition-all duration-200 text-left ${
                      activeImageIndex === idx
                        ? 'border-white ring-2 ring-white/20'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.label || `Foto ${idx + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: DETAILS & WHATSAPP ACTIONS */}
          <div className="flex flex-col justify-between space-y-4 sm:space-y-5">
            <div className="space-y-3 sm:space-y-4">
              
              {/* Product Name & Availability */}
              <div>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold font-sans tracking-wide text-white uppercase leading-snug">
                  {product.name}
                </h2>

                {/* Price directly below name */}
                <div className="mt-2 text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                  {siteConfig.currency.format(product.price)} COP
                </div>

                {/* Availability Sub-status */}
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {isSoldOut ? (
                    <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                      <span>VENDIDA</span>
                    </div>
                  ) : hasOnlyOneSize ? (
                    <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
                      <span>🔥</span>
                      <span>ÚLTIMA UNIDAD DISPONIBLE EN {product.sizes[0]}</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>DISPONIBLE</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Material & Gramaje Quick Pill */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 block mb-0.5">
                    MATERIAL
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                    PIMA PERUANA
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 block mb-0.5">
                    GRAMAJE
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
                    175 GSM
                  </span>
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] sm:text-xs font-bold font-mono tracking-widest uppercase text-zinc-300">
                    {isSoldOut ? 'TALLAS DE LA EDICIÓN' : 'TALLAS DISPONIBLES'}
                  </label>
                  <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase">
                    {isSoldOut ? (
                      <span className="text-zinc-500 font-bold">VENDIDA</span>
                    ) : (
                      <>SELECCIONADA: <strong className="text-white font-bold">{selectedSize}</strong></>
                    )}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => !isSoldOut && setSelectedSize(size)}
                        className={`min-w-[48px] sm:min-w-[56px] py-2 px-3.5 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-150 ${
                          isSoldOut
                            ? 'bg-white/5 text-zinc-500 border border-white/5 line-through cursor-default'
                            : isSelected
                            ? 'bg-white text-black shadow-lg scale-105 border-2 border-emerald-400 font-black'
                            : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/15'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-[10px] sm:text-xs font-bold font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                  DESCRIPCIÓN
                </h4>
                <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans font-light space-y-2">
                  {product.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Details (Strictly verified properties: Pima Peruana, 175 GSM, Corte regular, Acabados cuidados) */}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-[10px] sm:text-xs font-bold font-mono tracking-widest uppercase text-zinc-400 mb-2">
                  DETALLES
                </h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 text-xs text-zinc-300 font-sans">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Pima Peruana</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>175 GSM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Corte regular</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Acabados cuidados</span>
                  </div>
                </div>
              </div>

            </div>

            {/* ACTION SECTION (WHATSAPP CONVERSION) */}
            <div className="pt-3.5 sm:pt-4 border-t border-white/10 space-y-2.5">
              {/* Quick Delivery & Packaging Trust Box */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 text-[10.5px] sm:text-xs text-zinc-300 font-sans">
                <p className="leading-snug">
                  <strong className="text-white font-medium">Tiempos de entrega:</strong> Barranquilla y Soledad el mismo día · Resto de Colombia (2–4 días) · Envíos internacionales (Tiempo según destino · Consulta el tiempo estimado para tu país por WhatsApp).
                </p>
                <p className="leading-snug text-zinc-400">
                  <strong className="text-zinc-300 font-medium">Empaque:</strong> Cada prenda viaja en empaque sellado de protección.
                </p>
              </div>

              {/* CTAS */}
              {isSoldOut ? (
                <button
                  onClick={handleBuyWhatsApp}
                  className="w-full flex items-center justify-center space-x-2 sm:space-x-3 bg-zinc-800 hover:bg-zinc-700 active:scale-98 text-white border border-white/15 py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
                  <span>CONSULTAR DISPONIBILIDAD POR WHATSAPP →</span>
                </button>
              ) : (
                <div className="space-y-2">
                  {/* Primary CTA */}
                  <button
                    onClick={handleBuyWhatsApp}
                    className="w-full flex items-center justify-center space-x-2 sm:space-x-3 bg-white hover:bg-zinc-200 active:scale-98 text-black py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-black shrink-0" />
                    <span>COMPRAR POR WHATSAPP →</span>
                  </button>

                  {/* Secondary CTA */}
                  <button
                    onClick={handleSizeAdviceWhatsApp}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>¿NO SABES QUÉ TALLA ELEGIR? HABLAR CON ASESORÍA</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Copied Toast Notification */}
      {copiedLink && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider shadow-2xl animate-fade-in">
          Enlace copiado al portapapeles
        </div>
      )}
    </div>
  );
};
