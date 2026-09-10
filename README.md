# DE TO’ SHOP — Catálogo Oficial Digital

Catálogo digital interactivo y responsive para **De To’ SHOP** (To’ Shop). Confección exclusiva en **Pima Peruana** (175 GSM para T-Shirt / 250 GSM para Oversize). Diseñado bajo estética editorial oscura luxury streetwear (concreto, metal, mármol negro y alto contraste), optimizado para compartir directamente por WhatsApp e Instagram.

---

## 📌 Estado de Colecciones y Drops

| Categoría | Estado | Tela | Gramaje | Disponibilidad |
| :--- | :--- | :--- | :--- | :--- |
| **T-SHIRT** | DROP 01 | Pima Peruana | 175 GSM | **Disponible ($100.000 COP)** |
| **OVERSIZE** | DROP 02 | Pima Peruana | 250 GSM | *Próximamente / Nuevo drop en camino* |
| **BÁSICAS** | DROP 03 | Pima Peruana | 175 GSM | *Próximamente / Nuevo drop en camino* |

**Envíos**: Nacionales e Internacionales.

---

## 🚀 Inicio Rápido (Cómo Ejecutar)

1. Instalar las dependencias (solo la primera vez):
   ```bash
   npm install
   ```
2. Iniciar el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en el navegador:
   `http://localhost:3000`

4. Para compilar y publicar en producción:
   ```bash
   npm run build
   ```
   La carpeta lista para subir a cualquier hosting (Vercel, Netlify, cPanel, etc.) es `dist/`.

---

## ⚙️ Cómo Actualizar el Catálogo

### 1. Cambiar tu Número de WhatsApp y Configuración de Marca
Abre el archivo:
`src/config/site.ts`

Allí puedes modificar:
* `whatsappNumber`: Tu número con indicativo (ej: `"573001234567"` para Colombia).
* `brandName`: `"DE TO’ SHOP"`
* `tagline`: `"Tu estilo. Tu esencia."`
* Redes sociales (`instagram`, etc.) y formato de moneda.

### 2. Cargar tus Fotografías Reales y Datos
Abre el archivo:
`src/data/products.ts`

Guarda tus fotos en:
`public/images/products/`
Y reemplaza las rutas correspondientes en `products.ts`.

---

## 📱 Conversión a WhatsApp
Cuando el cliente abre una T-Shirt, elige su talla y presiona **"COMPRAR POR WHATSAPP"**, se abre automáticamente la conversación con el mensaje solicitado:

> *“Hola, De To’ Shop. Estoy interesado en la T-Shirt [NOMBRE DEL PRODUCTO], talla [TALLA]. ¿Me confirman disponibilidad?”*

Si el usuario explora los próximos drops (**OVERSIZE** o **BÁSICAS**), puede pulsar **"AVÍSENME POR WHATSAPP"** para registrar su interés sin generar compras erróneas.
