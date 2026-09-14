import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { ComingSoonView } from './components/ComingSoonView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { products, Product, CATEGORIES, CategoryId } from './data/products';
import { ArrowRight, Globe } from 'lucide-react';
import { siteConfig } from './config/site';
import { Ferrofluid } from './components/Ferrofluid';

export const App: React.FC = () => {
  // Category state defaults to the available category: 't-shirt'
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('t-shirt');
  // State for active modal product
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const collectionRef = useRef<HTMLDivElement>(null);

  const scrollToTshirtCollection = () => {
    setSelectedCategory('t-shirt');
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Find info of current selected category
  const currentCategoryInfo = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  // Filter products for the selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="relative min-h-screen bg-brand-void text-brand-light flex flex-col selection:bg-white selection:text-black overflow-x-hidden">
      {/* Interactive Liquid Ferrofluid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 overflow-hidden">
        <Ferrofluid
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={0.65}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>

      {/* Top Navbar */}
      <div className="relative z-40">
        <Navbar onExploreClick={scrollToTshirtCollection} />
      </div>

      {/* Hero Portada */}
      <div className="relative z-10">
        <Hero onExploreClick={scrollToTshirtCollection} />
      </div>

      {/* MAIN CATALOG SECTION */}
      <main ref={collectionRef} className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 py-10 sm:py-16 scroll-mt-16 sm:scroll-mt-20">
        
        {/* Section Title & Concept */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12 px-2">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              COLECCIONES & DROPS OFICIALES
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase mb-2 sm:mb-3">
            COLECCIÓN
          </h2>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-zinc-400 font-light max-w-md mx-auto">
            Explora las piezas disponibles y los próximos lanzamientos de la marca.
            Confección exclusiva en Pima Peruana.
          </p>
        </div>

        {/* Filter Bar (T-SHIRT | OVERSIZE | BÁSICAS) */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          productCount={filteredProducts.length}
        />

        {/* CONTENT RENDER: AVAILABLE PRODUCTS OR COMING SOON TEASER */}
        {currentCategoryInfo.isAvailable ? (
          /* Responsive Products Grid: 2 columns on mobile, 3 on desktop */
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 xs:gap-3.5 sm:gap-6 lg:gap-8 mt-5 sm:mt-8 animate-fade-in max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={setActiveModalProduct}
              />
            ))}
          </div>
        ) : (
          /* Upcoming Drop Teaser View (OVERSIZE / BÁSICAS) */
          <ComingSoonView
            category={currentCategoryInfo}
            onGoToAvailable={() => setSelectedCategory('t-shirt')}
          />
        )}

        {/* Shipping & Direct Advisory Banner */}
        <div className="mt-12 sm:mt-20 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-white/5 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-emerald-400">
              <Globe className="w-3 h-3 shrink-0" />
              <span>ENVÍOS NACIONALES E INTERNACIONALES</span>
            </div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold font-sans text-white uppercase tracking-wide">
              ATENCIÓN Y CONSULTAS POR WHATSAPP
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl font-light leading-relaxed">
              ¿Deseas confirmar disponibilidad de tallas de T-Shirt, cotizar envíos a tu ciudad o país, o conocer más de nuestros próximos drops? Escríbenos directamente.
            </p>
          </div>

          <a
            href={siteConfig.getWhatsAppUrl(siteConfig.whatsappMessages.generalInquiry)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center space-x-2 shrink-0 shadow-lg"
          >
            <span>CONSULTAR POR WHATSAPP</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};
