/**
 * CONFIGURACIÓN CENTRAL DE TO' SHOP
 * 
 * Modifica aquí los datos generales de la marca, número de WhatsApp,
 * moneda y enlaces a redes sociales.
 */

export const siteConfig = {
  // Nombres oficiales de la marca
  brandName: "DE TO’ SHOP",
  brandShortName: "TO’ SHOP",
  
  // Frases de marca / Identidad
  tagline: "Tu estilo. Tu esencia.",
  subTagline: "Luxury Streetwear · T-Shirts Pima Peruana · Estética Urbana",
  heroDescription: "Primer drop oficial confeccionado en Pima Peruana de 175 GSM. Caída limpia, máxima frescura y presencia auténtica.",

  // WHATSAPP OFICIAL: +57 315 372 9631 (Colombia)
  // Formato internacional oficial para API de WhatsApp sin '+' ni espacios: 573153729631
  whatsappNumber: "573153729631",

  // Generador de URL oficial de WhatsApp
  getWhatsAppUrl: (messageText: string) => {
    return `https://api.whatsapp.com/send?phone=573153729631&text=${messageText}`;
  },

  // Mensajes de WhatsApp estructurados
  whatsappMessages: {
    // Mensaje para compra de T-Shirt específica con talla
    productInquiry: (productName: string, size?: string) => {
      let msg = `Quiero realizar la compra de mi T-shirt: ${productName}`;
      if (size) msg += `, talla ${size}`;
      return encodeURIComponent(msg);
    },
    
    // Mensaje para consultar por próximos drops (Oversize / Básicas)
    dropInquiry: (dropName: string) => {
      return encodeURIComponent(
        `Hola, De To’ Shop. Me interesa el próximo drop de ${dropName}. ¿Me pueden avisar cuando esté disponible?`
      );
    },

    // Mensaje base oficial proporcionado por la marca
    generalInquiry: encodeURIComponent("Quiero realizar la compra de mi T-shirt "),
  },

  // Redes sociales y contacto
  socials: {
    instagram: "https://www.instagram.com/detoshop__?stkn=cTBtZzE0eHZnaHN2",
    instagramHandle: "@detoshop__",
    tiktok: "https://tiktok.com/@detoshop__",
    shippingNotice: "Envíos Nacionales e Internacionales",
  },

  // Configuración de Moneda y Precios
  currency: {
    locale: "es-CO",
    currencyCode: "COP",
    symbol: "$",
    // Función para formatear el precio: 100000 -> "$ 100.000"
    format: (amount: number): string => {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(amount);
    },
  },
};
