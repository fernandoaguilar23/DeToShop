import React from 'react';
import { CATEGORIES, CategoryId } from '../data/products';

interface FilterBarProps {
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  productCount: number;
  availableCount?: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  productCount,
  availableCount = productCount,
}) => {
  return (
    <div className="w-full pb-4">
      {/* Category selector buttons with touch scroll */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-2 px-3 sm:px-4 space-x-2 sm:space-x-3 -mx-4 sm:mx-0">
        <div className="flex items-center space-x-2 sm:space-x-3 px-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group shrink-0 flex items-center space-x-2 whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-white text-black border-white shadow-glow scale-100 font-extrabold'
                    : cat.isAvailable
                    ? 'bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border-white/20'
                    : 'bg-white/[0.02] text-zinc-500 hover:text-zinc-300 border-dashed border-white/15 opacity-70 hover:opacity-100'
                }`}
              >
                <span>{cat.label}</span>
                
                {/* Status pill badge */}
                <span
                  className={`text-[8.5px] sm:text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold transition-colors ${
                    cat.isAvailable
                      ? isActive
                        ? 'bg-black text-emerald-400'
                        : 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                      : isActive
                        ? 'bg-black/80 text-amber-400'
                        : 'bg-zinc-900 text-amber-400/80 border border-amber-500/20'
                  }`}
                >
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-label showing current drop state */}
      <div className="text-center mt-2.5 sm:mt-3 px-4">
        {selectedCategory === 't-shirt' ? (
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold">{availableCount} PRENDAS DISPONIBLES</span>
            <span className="text-zinc-600">·</span>
            <span className="text-white font-bold">$100.000 COP</span>
          </div>
        ) : (
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-amber-400/90 block">
            NUEVO DROP EN CAMINO · AVÍSAME POR WHATSAPP
          </span>
        )}
      </div>
    </div>
  );
};
