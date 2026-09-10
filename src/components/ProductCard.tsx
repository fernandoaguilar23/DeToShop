import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { Product } from '../data/products';
import { siteConfig } from '../config/site';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  return (
    <article
      onClick={() => onOpenModal(product)}
      className="group relative flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-500 cursor-pointer hover:border-white/25 hover:-translate-y-1 shadow-lg"
    >
      {/* Top Badges (Availability & Fabric) */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        {/* Availability Badge */}
        <div>
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold font-mono tracking-widest uppercase bg-neutral-900/90 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>DISPONIBLE</span>
          </span>
        </div>

        {/* Fabric specification badge */}
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-white/10 text-zinc-200 border border-white/15 backdrop-blur-md shadow-sm">
          {product.weight}
        </span>
      </div>

      {/* Main Image Container (4:5 editorial vertical proportion) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-void">
        <img
          src={product.images[0]?.url}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Gradient on bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60" />

        {/* Hover Quick Action Indicator (Desktop) */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center justify-center">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/90 text-black text-xs font-bold tracking-widest uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5" />
            <span>Ver Ficha</span>
          </div>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-brand-card/40">
        <div>
          {/* Subtitle / Fabric & Weight */}
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 block mb-1">
            {product.subtitle}
          </span>

          {/* Product Name */}
          <h3 className="text-sm sm:text-base font-bold text-white tracking-wide uppercase line-clamp-1 group-hover:text-zinc-200 transition-colors">
            {product.name}
          </h3>

          {/* Price & Sizes */}
          <div className="mt-2.5 flex items-baseline justify-between gap-2">
            <span className="text-base sm:text-lg font-bold font-mono tracking-tight text-white shrink-0">
              {siteConfig.currency.format(product.price)}
            </span>

            {/* Quick sizes preview */}
            <div className="flex items-center space-x-1 overflow-hidden shrink-0">
              {product.sizes.map((sz) => (
                <span
                  key={sz}
                  className="px-1.5 py-0.5 rounded text-[9px] font-mono text-zinc-300 bg-white/5 border border-white/10"
                >
                  {sz}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Action Button */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-300 group-hover:text-white flex items-center space-x-1">
            <span>VER PRENDA</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
          
          <span className="text-[10px] font-mono text-zinc-400">
            PIMA 175 GSM
          </span>
        </div>

      </div>
    </article>
  );
};
