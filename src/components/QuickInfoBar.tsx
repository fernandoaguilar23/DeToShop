import React from 'react';
import { Globe } from 'lucide-react';

export const QuickInfoBar: React.FC = () => {
  const items = [
    { label: 'PIMA PERUANA', highlight: false },
    { label: '175 GSM', highlight: false },
    { label: '$100.000 COP', highlight: true },
    { label: 'ENVÍOS NACIONALES E INTERNACIONALES', highlight: false, icon: Globe },
  ];

  return (
    <div className="relative z-20 w-full border-y border-white/10 bg-brand-void/90 backdrop-blur-md py-3 sm:py-3.5 px-3.5 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 gap-y-2 text-[10px] xs:text-[11px] sm:text-xs font-mono tracking-widest uppercase">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.label}>
              {index > 0 && (
                <span className="text-zinc-600 select-none">·</span>
              )}
              <span
                className={`inline-flex items-center space-x-1.5 transition-colors ${
                  item.highlight
                    ? 'text-white font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10'
                    : 'text-zinc-300'
                }`}
              >
                {Icon && <Icon className="w-3 h-3 text-emerald-400 shrink-0" />}
                <span>{item.label}</span>
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
