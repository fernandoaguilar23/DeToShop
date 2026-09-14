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

export type ProductStatus = 'available' | 'upcoming';

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
    modelName: "Paris Noir T-Shirt",
    name: "T-Shirt Balmain Paris Noir",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "Confección exclusiva en Pima Peruana de 175 GSM. Estética sobria y elegante en negro profundo con logotipo Balmain Paris en el pecho.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Talla disponible: XL",
      "Color: Negro",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/balmain-negra-xl.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-balmain-blanca",
    brand: "BALMAIN",
    modelName: "Paris Blanca T-Shirt",
    name: "T-Shirt Balmain Paris Blanca",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["XL", "XXL"],
    description: "Tejido en Pima Peruana 175 GSM en blanco óptico con tipografía Balmain en arco frontal. Máxima frescura, suavidad y presencia.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Tallas disponibles: XL, XXL",
      "Color: Blanco",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/balmain-blanca-xl-xxl.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-coach-noir",
    brand: "COACH",
    modelName: "New York Noir T-Shirt",
    name: "T-Shirt Coach New York Noir",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["XXL"],
    description: "Negro puro con apliques monogram Coach en hombros y placa de cuero distintiva en el lateral. Confección premium en Pima Peruana 175 GSM.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Talla disponible: XXL",
      "Detalle: Apliques monogram en hombros",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/coach-negra-xxl.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-coach-blanca",
    brand: "COACH",
    modelName: "New York Blanca T-Shirt",
    name: "T-Shirt Coach New York Blanca",
    subtitle: "Pima Peruana · 175 GSM · Empaque Oficial",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["L"],
    description: "Diseño distintivo con el carruaje y caballo Coach New York y acentos monogram en hombros. Presentación en empaque oficial sellado listo para despacho.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Talla disponible: L",
      "Presentación en empaque sellado de fábrica",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/coach-blanca-l.jpeg",
        label: "Presentación en Empaque Oficial",
        isPackaged: true,
      }
    ]
  },
  {
    id: "tshirt-dg-blanca",
    brand: "DOLCE & GABBANA",
    modelName: "Crest Blanca T-Shirt",
    name: "T-Shirt Dolce & Gabbana Crest Blanca",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "Blanco óptico en Pima Peruana 175 GSM con bordado insignia de corona y escudo Dolce & Gabbana en el pecho. Estilo editorial de lujo contemporáneo.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Talla disponible: XL",
      "Bordado de escudo con corona en relieve",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/dolce-gabbana-blanca-xl.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-boss-embossed-noir",
    brand: "BOSS",
    modelName: "Embossed Noir T-Shirt",
    name: "T-Shirt Boss Embossed Noir",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "Elegancia monocromática en negro absoluto. Letras BOSS en relieve texturizado tonal sobre Pima Peruana de 175 GSM.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Talla disponible: XL",
      "Letras BOSS en relieve tonal",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-embossed-negra-xl.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-boss-embossed-blanca",
    brand: "BOSS",
    modelName: "Embossed Blanca T-Shirt",
    name: "T-Shirt Boss Embossed Blanca",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["XL", "XXL"],
    description: "Blanco refinado con relieve tonal BOSS en el pecho. Fibra de Pima Peruana 175 GSM de máxima durabilidad y suavidad al tacto.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Tallas disponibles: XL, XXL",
      "Relieve tonal BOSS",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-embossed-blanca-xl-xxl.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-boss-circle-blanca",
    brand: "BOSS",
    modelName: "Monogram Circle Blanca T-Shirt",
    name: "T-Shirt Boss Monogram Circle Blanca",
    subtitle: "Pima Peruana · 175 GSM",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["XL"],
    description: "Blanco puro con logotipo circular minimalista HB en el centro del pecho. Líneas sobrias y corte limpio en Pima Peruana 175 GSM.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Talla disponible: XL",
      "Emblema circular minimalista en relieve",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-circle-blanca-xl.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  },
  {
    id: "tshirt-hugo-bubble-noir",
    brand: "HUGO",
    modelName: "Bubble Graffiti Noir T-Shirt",
    name: "T-Shirt Hugo Bubble Graffiti Noir",
    subtitle: "Pima Peruana · 175 GSM · Fit Relajado",
    price: 100000,
    category: "t-shirt",
    status: "available",
    fabric: "Pima Peruana",
    weight: "175 GSM",
    sizes: ["L"],
    description: "Estilo urbano streetwear de alto impacto. Letras HUGO en tipografía bubble con contorno beige texturizado sobre Pima Peruana de 175 GSM.",
    details: [
      "Tela: Pima Peruana de máxima calidad",
      "Gramaje: 175 GSM",
      "Talla disponible: L",
      "Estilo streetwear gráfico contemporáneo",
      "Envíos Nacionales e Internacionales"
    ],
    images: [
      {
        url: "/fotos-camisas/hugo-boss-bubble-negra-l.jpeg",
        label: "Vista Editorial Oficial",
        isPackaged: false,
      }
    ]
  }
];
