/**
 * ESTRUCTURA CENTRAL DE PRODUCTOS Y DROPS - DE TO' SHOP
 * 
 * ESPECIFICACIONES DE LA MARCA:
 * - Tela: Pima Peruana
 * - T-Shirt: 175 GSM (Colección Disponible)
 * - Oversize: 250 GSM (Próximo Drop)
 * - Precio oficial: $100.000 COP
 * - Envíos: Nacionales e Internacionales
 */

export type ProductStatus = 'available' | 'upcoming' | 'sold_out';

export type CategoryId = 't-shirt' | 'oversize' | 'basics';

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  badge: 'DISPONIBLE' | 'PRÓXIMAMENTE';
  isAvailable: boolean;
  dropNumber?: string;
  fabric: string;
  weight: string;
  tagline: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 't-shirt',
    label: 'T-SHIRT',
    badge: 'DISPONIBLE',
    isAvailable: true,
    dropNumber: 'DROP 01',
    fabric: 'Pima Peruana',
    weight: '175 GSM',
    tagline: 'Colección disponible para compra inmediata por WhatsApp. Piezas exclusivas en Pima Peruana.',
  },
  {
    id: 'oversize',
    label: 'OVERSIZE',
    badge: 'PRÓXIMAMENTE',
    isAvailable: false,
    dropNumber: 'DROP 02',
    fabric: 'Pima Peruana',
    weight: '250 GSM',
    tagline: 'Nuevo drop en camino. Corte amplio, caída estructurada de alto gramaje.',
  },
  {
    id: 'basics',
    label: 'BASICS',
    badge: 'PRÓXIMAMENTE',
    isAvailable: false,
    dropNumber: 'DROP 03',
    fabric: 'Pima Peruana',
    weight: '175 GSM',
    tagline: 'Nuevo drop en camino. Minimalismo esencial sin estampados.',
  },
];

export interface ProductImage {
  url: string;
  label?: string;
  isPackaged?: boolean;
}

export interface Product {
  id: string;
  brand: string;
  modelName: string;
  name: string;
  colorName?: string;
  subtitle: string;
  price: number;
  category: CategoryId;
  status: ProductStatus;
  fabric: string;
  weight: string;
  sizes: string[];
  description: string;
  details: string[];
  images: ProductImage[];
}

/**
 * PRENDAS REALES EN INVENTARIO - DE TO' SHOP
 * Fotografías oficiales de la marca sobre fondos de concreto, mármol y metal.
 * Precio: $100.000 COP
 * Tela: Pima Peruana · 175 GSM
 */
export const products: Product[] = [
  {
    id: "tshirt-balmain-noir",
    brand: "BALMAIN",
    modelName: "BALMAIN PARIS — NEGRA",
    name: "BALMAIN PARIS — NEGRA",
    colorName: "Negro",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color negro, con diseño tipográfico frontal.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Negro",
      "Talla: XL",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/balmain-negra-xl.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-balmain-blanca",
    brand: "BALMAIN",
    modelName: "BALMAIN PARIS — BLANCA",
    name: "BALMAIN PARIS — BLANCA",
    colorName: "Blanco",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "sold_out",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["XL", "XXL"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color blanco, con diseño tipográfico frontal.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Blanco",
      "Tallas: XL, XXL (Vendida / Agotada)",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/balmain-blanca-xl-xxl.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-coach-noir",
    brand: "COACH",
    modelName: "COACH NEW YORK — NEGRA",
    name: "COACH NEW YORK — NEGRA",
    colorName: "Negro",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "sold_out",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["XXL"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color negro, con apliques monogram en hombros.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Negro",
      "Talla: XXL (Vendida / Agotada)",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/coach-negra-xxl.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-coach-blanca",
    brand: "COACH",
    modelName: "COACH NEW YORK — BLANCA",
    name: "COACH NEW YORK — BLANCA",
    colorName: "Blanco",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["L"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color blanco, con diseño gráfico frontal.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Blanco",
      "Talla: L",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/coach-blanca-l.jpeg",
        label: "Presentación en Empaque Sellado",
        isPackaged: true,
      }
    ]
  },
  {
    id: "tshirt-dg-blanca",
    brand: "DOLCE & GABBANA",
    modelName: "DOLCE & GABBANA — BLANCA",
    name: "DOLCE & GABBANA — BLANCA",
    colorName: "Blanco",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "sold_out",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color blanco, con bordado insignia frontal.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Blanco",
      "Talla: XL (Vendida / Agotada)",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/dolce-gabbana-blanca-xl.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-boss-embossed-noir",
    brand: "HUGO BOSS",
    modelName: "HUGO BOSS — NEGRA",
    name: "HUGO BOSS — NEGRA",
    colorName: "Negro",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color negro, con diseño en relieve tonal.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Negro",
      "Talla: XL",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-embossed-negra-xl.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-boss-embossed-blanca",
    brand: "HUGO BOSS",
    modelName: "HUGO BOSS — BLANCA",
    name: "HUGO BOSS — BLANCA",
    colorName: "Blanco",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color blanco, con diseño en relieve tonal.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Blanco",
      "Talla: XL",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-embossed-blanca-xl-xxl.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-boss-circle-blanca",
    brand: "HUGO BOSS",
    modelName: "HUGO BOSS CIRCLE — BLANCA",
    name: "HUGO BOSS CIRCLE — BLANCA",
    colorName: "Blanco",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "sold_out",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color blanco, con emblema circular en el pecho.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Blanco",
      "Talla: XL (Vendida / Agotada)",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-circle-blanca-xl.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-hugo-bubble-noir",
    brand: "HUGO BOSS",
    modelName: "HUGO BUBBLE — NEGRA",
    name: "HUGO BUBBLE — NEGRA",
    colorName: "Negro",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "sold_out",
    fabric: "PIMA PERUANA",
    weight: "175 GSM",
    sizes: ["L"],
    description: "T-Shirt en Pima Peruana de 175 GSM, en color negro, con diseño tipográfico bubble frontal.\n\nSuavidad, frescura y una caída natural para un look limpio y contemporáneo.",
    details: [
      "Pima Peruana",
      "175 GSM",
      "Color: Negro",
      "Talla: L (Vendida / Agotada)",
      "Envíos nacionales e internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-bubble-negra-l.jpeg",
        label: "Vista Editorial",
        isPackaged: false,
      }
    ]
  }
];
