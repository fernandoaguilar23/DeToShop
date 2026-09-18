import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { BrandMarquee } from './components/BrandMarquee';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { ComingSoonView } from './components/ComingSoonView';
import { TheDifference } from './components/TheDifference';
import { ProductDetailsSection } from './components/ProductDetailsSection';
import { BuyingProcessSection } from './components/BuyingProcessSection';
import { ShippingSection } from './components/ShippingSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { BeforeBuyingSection } from './components/BeforeBuyingSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { products, Product, CATEGORIES, CategoryId } from './data/products';
import Beams from './components/Beams';
import { WarpText } from './components/WarpText';

export const App: React.FC = () => {
  // Category state defaults to the available category: 't-shirt'
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('t-shirt');
  // State for active modal product
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const collectionRef = useRef<HTMLDivElement>(null);

  const scrollToCollection = () => {
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
    <div className="relative min-h-screen bg-transparent text-brand-light flex flex-col selection:bg-white selection:text-black overflow-x-hidden">
      {/* Dynamic 3D Beams Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          beamColor="#000000"
          backgroundColor="#000000"
        />
      </div>

      {/* Top Navbar */}
      <div className="relative z-40">
        <Navbar onExploreClick={scrollToCollection} />
      </div>

      {/* 01 — HERO (Comercial, contraste alto, precio visible $100.000 COP) */}
      <div className="relative z-10">
        <Hero onExploreClick={scrollToCollection} />
      </div>

      {/* 02 — INFORMACIÓN RÁPIDA (Pima Peruana · 175 GSM · $100.000 COP · Envíos) */}
      <QuickInfoBar />

      {/* MARQUESINA MULTIMARCA (Selección Multimarca · Piezas Exclusivas) */}
      <BrandMarquee />

      {/* 03 — DROP 01 / T-SHIRTS (Catálogo Disponible) */}
      <section
        id="the-collection"
        ref={collectionRef}
        className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20"
      >
        {/* Section Title & Concept */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 px-2">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-emerald-300 font-bold">
              DROP 01 — DISPONIBLE
            </span>
          </div>

          {/* Section Heading with Interactive WarpText */}
          <div className="w-full max-w-xs sm:max-w-md mx-auto mb-2 sm:mb-3">
            <WarpText
              text="T-SHIRTS"
              color="#ffffff"
              warpStrength={0.07}
              warpScale={1.6}
              speed={0.5}
              pointerInfluence={0.4}
              pointerStrength={0.35}
              refraction={0.018}
              ripple={true}
              fontSize="clamp(2rem, 6vw, 3.5rem)"
              fontWeight={900}
              fontFamily="Syncopate, Space Grotesk, sans-serif"
              letterSpacing="0.08em"
              lineHeight={1}
              style={{ height: '56px', minHeight: '46px' }}
            />
          </div>

          <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-emerald-400 font-semibold mb-2">
            PIMA PERUANA · 175 GSM
          </div>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-zinc-300 font-light max-w-lg mx-auto leading-relaxed">
            9 piezas seleccionadas para este primer lanzamiento.
          </p>
        </div>

        {/* Filter Bar (T-SHIRT · DISPONIBLE | OVERSIZE · PRÓXIMAMENTE | BASICS · PRÓXIMAMENTE) */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          productCount={filteredProducts.length}
        />

        {/* CONTENT RENDER: AVAILABLE PRODUCTS OR UPCOMING DROP VIEW */}
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
          /* Upcoming Drop Teaser View */
          <ComingSoonView
            category={currentCategoryInfo}
            onGoToAvailable={() => setSelectedCategory('t-shirt')}
          />
        )}
      </section>

      {/* 04 — THE DE TO’ DIFFERENCE (4 pilares de calidad textil) */}
      <TheDifference />

      {/* 05 — DETALLES QUE SE NOTAN (Textura, Estructura, Detalles, Presentación) */}
      <ProductDetailsSection />

      {/* 06 — COMPRAR DE TO’ ES SIMPLE (4 pasos hacia la compra) */}
      <BuyingProcessSection />

      {/* 07 — TU DROP. DONDE ESTÉS. (Envíos locales el mismo día, nacionales 2-4 días, internacionales) */}
      <ShippingSection />

      {/* 08 — LO QUE VIENE (Próximos drops Oversize 250 GSM y Basics 175 GSM) */}
      <ComingSoonSection />

      {/* 09 — ANTES DE COMPRAR (Confianza, Tallas, Disponibilidad, Pagos y Políticas) */}
      <BeforeBuyingSection />

      {/* 10 — FOOTER (Enlaces de marca, Instagram, WhatsApp y políticas) */}
      <Footer onExploreClick={scrollToCollection} />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Floating WhatsApp Action with safe-area spacing and quick-help menu */}
      <FloatingWhatsApp />
    </div>
  );
};
