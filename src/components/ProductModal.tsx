import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Check, Share2, Package, ShieldCheck, Globe } from 'lucide-react';
import { Product } from '../data/products';
import { siteConfig } from '../config/site';
import { ElectricBorder } from './ElectricBorder';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

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

  // Generate dynamic WhatsApp link with user's exact requested template:
  // "Hola, De To’ Shop. Estoy interesado en la T-Shirt [NOMBRE DEL PRODUCTO], talla [TALLA]. ¿Me confirman disponibilidad?"
  const handleWhatsAppClick = () => {
    const messageText = siteConfig.whatsappMessages.productInquiry(
      product.name,
      selectedSize
    );
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fade-in overflow-hidden">
      {/* Background click dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Container with ElectricBorder */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[94vh] sm:max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <ElectricBorder
          color="#f70e0e"
          speed={0.8}
          chaos={0.12}
          thickness={2}
          borderRadius={24}
          className="w-full h-full max-h-[94vh] sm:max-h-[90vh] flex flex-col"
        >
          <div className="relative w-full h-full max-h-[94vh] sm:max-h-[90vh] bg-brand-void sm:bg-brand-card rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-red-500/20">
            {/* Header bar on modal */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-brand-void/95 sticky top-0 z-30 backdrop-blur-md">
          <div className="flex items-center space-x-2 truncate pr-2">
            <span className="text-xs font-bold font-display tracking-widest text-white uppercase shrink-0">
              {siteConfig.brandName}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase truncate">
              T-SHIRT · DROP 01
            </span>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            <button
              onClick={handleShare}
              className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              title="Compartir enlace de prenda"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Cerrar vista"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 no-scrollbar pb-8 sm:pb-8">
          
          {/* LEFT: GALLERY SECTION */}
          <div className="flex flex-col space-y-3">
            {/* Main Active Image (9:16 vertical poster) */}
            <div className="relative aspect-[9/16] max-h-[50vh] sm:max-h-[68vh] w-full max-w-[320px] sm:max-w-none mx-auto rounded-2xl overflow-hidden bg-brand-black border border-white/10 shadow-lg">
              <img
                src={activeImage?.url}
                alt={activeImage?.label || product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium font-mono tracking-widest uppercase bg-zinc-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>DISPONIBLE</span>
                </span>
              </div>

              {/* Packaged indicator badge */}
              {activeImage?.isPackaged && (
                <div className="absolute bottom-3 left-3 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-black/80 text-[10px] font-mono text-zinc-300 border border-white/15 backdrop-blur-sm">
                  <Package className="w-3.5 h-3.5 text-zinc-400" />
                  <span>PRESENTACIÓN EN EMPAQUE</span>
                </div>
              )}
            </div>

            {/* Thumbnail Selectors (if product has multiple photos) */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2 pt-1 max-w-[320px] sm:max-w-none mx-auto w-full">
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
                    {img.isPackaged && (
                      <span className="absolute bottom-1 right-1 p-1 rounded bg-black/80 text-white">
                        <Package className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: DETAILS & WHATSAPP ACTION */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Product Subtitle & Name */}
              <div>
                <span className="text-[11px] sm:text-xs font-mono tracking-widest uppercase text-emerald-400 block mb-1">
                  T-SHIRT // DROP 01 DISPONIBLE
                </span>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold font-sans tracking-wide text-white uppercase leading-snug">
                  {product.name}
                </h2>
              </div>

              {/* Price */}
              <div className="py-2.5 border-y border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-400 uppercase block">
                    Precio Oficial
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                    {siteConfig.currency.format(product.price)}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-300 px-3 py-1 rounded bg-white/5 border border-white/10">
                  {siteConfig.currency.currencyCode}
                </span>
              </div>

              {/* Material & Weight Spec Highlight */}
              <div className="grid grid-cols-2 gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 block">
                    Tela Oficial
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    {product.fabric}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-zinc-400 block">
                    Gramaje
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono uppercase tracking-wider">
                    {product.weight}
                  </span>
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold font-mono tracking-widest uppercase text-zinc-300">
                    Tallas Disponibles:
                  </label>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Talla elegida: <strong className="text-white">{selectedSize}</strong>
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[50px] sm:min-w-[54px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-150 ${
                          isSelected
                            ? 'bg-white text-black shadow-lg scale-105'
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
              <div className="pt-2">
                <h4 className="text-[11px] sm:text-xs font-bold font-mono tracking-widest uppercase text-zinc-400 mb-1.5 sm:mb-2">
                  Descripción & Confección
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans font-light">
                  {product.description}
                </p>
              </div>

              {/* Specs / Bullet Points */}
              {product.details && (
                <div className="space-y-1.5 pt-1">
                  {product.details.map((detail, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-zinc-400 font-sans">
                      <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* ACTION SECTION (WHATSAPP CONVERSION) */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2.5 sm:space-x-3 bg-emerald-500 hover:bg-emerald-400 active:scale-98 text-black p-3.5 sm:p-4 rounded-2xl font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-xl hover:shadow-emerald-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-black shrink-0" />
                <span>COMPRAR POR WHATSAPP</span>
              </button>

              {/* Guarantees & Shipping Notice */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-mono text-zinc-400 tracking-wider uppercase text-center">
                <span className="flex items-center space-x-1 text-zinc-300">
                  <Globe className="w-3 h-3 text-zinc-400 shrink-0" />
                  <span>Envíos Nacionales e Internacionales</span>
                </span>
                <span className="hidden xs:inline">·</span>
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-zinc-400 shrink-0" />
                  <span>Compra Segura</span>
                </span>
              </div>
            </div>

          </div>

        </div>

          </div>
        </ElectricBorder>
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
