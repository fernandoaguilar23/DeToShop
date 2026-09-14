import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { ComingSoonView } from './components/ComingSoonView';
import { TheDifference } from './components/TheDifference';
import { SeenOnYou } from './components/SeenOnYou';
import { ComingSoonSection } from './components/ComingSoonSection';
import { ShippingSection } from './components/ShippingSection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { products, Product, CATEGORIES, CategoryId } from './data/products';
import { Ferrofluid } from './components/Ferrofluid';
import { WarpText } from './components/WarpText';

const FERROFLUID_COLORS = ['#ffffff', '#ffffff', '#ffffff'];

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
      {/* Interactive Liquid Ferrofluid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85">
        <Ferrofluid
          colors={FERROFLUID_COLORS}
          speed={0.45}
          scale={1.5}
          turbulence={1.0}
          fluidity={0.12}
          rimWidth={0.45}
          sharpness={2.0}
          shimmer={1.8}
          glow={2.5}
          flowDirection="down"
          opacity={0.9}
          mouseInteraction={true}
          mouseStrength={1.2}
          mouseRadius={0.4}
        />
      </div>

      {/* Top Navbar */}
      <div className="relative z-40">
        <Navbar onExploreClick={scrollToCollection} />
      </div>

      {/* 01 — HERO (Deseo & Posicionamiento) */}
      <div className="relative z-10">
        <Hero onExploreClick={scrollToCollection} />
      </div>

      {/* 02 — DROP 01 / THE COLLECTION (Catálogo) */}
      <section
        id="the-collection"
        ref={collectionRef}
        className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8 py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20"
      >
        {/* Section Title & Concept */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12 px-2">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              DROP 01 & LANZAMIENTOS OFICIALES
            </span>
          </div>

          {/* Section Heading with Interactive WarpText */}
          <div className="w-full max-w-xs sm:max-w-md mx-auto mb-2 sm:mb-3">
            <WarpText
              text="THE COLLECTION"
              color="#ffffff"
              warpStrength={0.07}
              warpScale={1.6}
              speed={0.5}
              pointerInfluence={0.4}
              pointerStrength={0.35}
              refraction={0.018}
              ripple={true}
              fontSize="clamp(1.75rem, 5vw, 3rem)"
              fontWeight={900}
              fontFamily="Syncopate, Space Grotesk, sans-serif"
              letterSpacing="0.08em"
              lineHeight={1}
              style={{ height: '56px', minHeight: '46px' }}
            />
          </div>

          <p className="text-xs sm:text-sm font-sans tracking-wide text-zinc-300 font-light max-w-lg mx-auto leading-relaxed">
            Piezas seleccionadas para cada drop. Descubre lo que está disponible y prepárate para lo que viene.
          </p>
        </div>

        {/* Filter Bar (T-SHIRT · DISPONIBLE | OVERSIZE · PRÓXIMAMENTE | BASICS · PRÓXIMAMENTE) */}
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
          /* Upcoming Drop Teaser View (OVERSIZE / BASICS) */
          <ComingSoonView
            category={currentCategoryInfo}
            onGoToAvailable={() => setSelectedCategory('t-shirt')}
          />
        )}
      </section>

      {/* 03 — THE DE TO’ DIFFERENCE (4 pilares editoriales de calidad) */}
      <TheDifference />

      {/* 04 — SEEN ON YOU (Experiencias de la comunidad sin testimonios falsos) */}
      <SeenOnYou />

      {/* 05 — COMING SOON (Expectativa para Oversize 250 GSM y Basics) */}
      <ComingSoonSection />

      {/* 06 — SHIPPING (Sección unificada: Tu Drop. Donde estés.) */}
      <ShippingSection />

      {/* 07 — WHATSAPP / CTA DE COMPRA (¿Tienes una prenda en mente?) */}
      <WhatsAppCTA />

      {/* 08 — FOOTER (Minimalista, sobrio y sin redundancias) */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Floating WhatsApp Action with safe-area spacing */}
      <FloatingWhatsApp />
    </div>
  );
};
