import React, { useState } from 'react';
import { 
  Ruler, 
  PackageSearch, 
  Truck, 
  RefreshCw, 
  CreditCard, 
  MessageCircle, 
  X, 
  FileText, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { siteConfig } from '../config/site';

type PolicyType = 'cambios' | 'envios' | 'terminos' | 'privacidad' | null;

export const BeforeBuyingSection: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  const trustBlocks = [
    {
      icon: Ruler,
      title: 'TALLAS',
      desc: 'Te ayudamos a elegir la talla adecuada con medidas exactas antes de despachar.',
    },
    {
      icon: PackageSearch,
      title: 'DISPONIBILIDAD',
      desc: 'Consulta las unidades disponibles de cada referencia en tiempo real.',
    },
    {
      icon: Truck,
      title: 'ENVÍOS',
      desc: 'Envíos locales el mismo día, nacionales (2-4 días) e internacionales con guía.',
    },
    {
      icon: RefreshCw,
      title: 'CAMBIOS',
      desc: 'Consulta nuestras condiciones de cambio de talla antes de realizar tu pedido.',
    },
    {
      icon: CreditCard,
      title: 'MEDIOS DE PAGO',
      desc: 'Transferencias bancarias (Bancolombia, Nequi, Daviplata) y contraentrega local.',
    },
    {
      icon: MessageCircle,
      title: 'WHATSAPP',
      desc: 'Atención humana directa y personalizada con nuestro equipo en todo momento.',
    },
  ];

  const handleWhatsAppHelp = (subject: string) => {
    const text = `Hola DE TO' SHOP, tengo una consulta sobre ${subject} antes de comprar.`;
    const url = siteConfig.getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="antes-de-comprar" className="relative z-10 w-full py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-zinc-300">
              TRANSPARENCIA & CONFIANZA
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white uppercase mb-2 sm:mb-3">
            ANTES DE COMPRAR
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-luxury text-emerald-400 uppercase">
            INFORMACIÓN CLARA PARA TU TRANQUILIDAD
          </p>
        </div>

        {/* 6 Trust Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 mb-10 sm:mb-12">
          {trustBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="group relative p-5 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] sm:text-xs font-bold font-mono tracking-widest uppercase text-white">
                      {block.title}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                    {block.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5">
                  <button
                    onClick={() => handleWhatsAppHelp(block.title.toLowerCase())}
                    className="text-[10px] sm:text-[11px] font-mono text-zinc-400 hover:text-emerald-400 transition-colors flex items-center space-x-1"
                  >
                    <span>CONSULTAR POR WHATSAPP</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Policy Links Bar */}
        <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="p-2.5 rounded-xl bg-white/5 text-zinc-300 hidden sm:block">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-sans uppercase text-white">
                POLÍTICAS Y CONDICIONES DE SERVICIO
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-light">
                Conoce nuestras pautas claras de envíos, cambios y privacidad de datos.
              </p>
            </div>
          </div>

          {/* Action buttons to trigger policy modal */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
            <button
              onClick={() => setActivePolicy('cambios')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              Política de Cambios
            </button>
            <button
              onClick={() => setActivePolicy('envios')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              Política de Envíos
            </button>
            <button
              onClick={() => setActivePolicy('terminos')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              Términos
            </button>
            <button
              onClick={() => setActivePolicy('privacidad')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
            >
              Privacidad
            </button>
          </div>
        </div>

        {/* POLICY MODAL VIEWER */}
        {activePolicy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
            <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <h3 className="text-sm sm:text-base font-bold font-sans uppercase text-white">
                    {activePolicy === 'cambios' && 'POLÍTICA DE CAMBIOS'}
                    {activePolicy === 'envios' && 'POLÍTICA DE ENVÍOS Y ENTREGAS'}
                    {activePolicy === 'terminos' && 'TÉRMINOS Y CONDICIONES'}
                    {activePolicy === 'privacidad' && 'POLÍTICA DE PRIVACIDAD'}
                  </h3>
                </div>
                <button
                  onClick={() => setActivePolicy(null)}
                  className="p-1.5 rounded-full bg-white/10 text-zinc-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto space-y-4 text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed pr-2 no-scrollbar">
                {activePolicy === 'cambios' && (
                  <>
                    <p>
                      En <strong className="text-white font-medium">DE TO’ SHOP</strong> nos aseguramos de que cada prenda se encuentre en perfectas condiciones antes de su despacho.
                    </p>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                      <p><strong className="text-white">Cambios por talla:</strong> Se gestionan directamente a través de WhatsApp dentro de los 3 días hábiles posteriores a la recepción de la prenda, siempre sujeto a disponibilidad de inventario.</p>
                      <p><strong className="text-white">Estado de la pieza:</strong> La prenda debe conservarse sin uso, sin perfumes ni lavado, en su empaque original sellado y con todas sus etiquetas intactas.</p>
                      <p><strong className="text-white">Costos de transporte:</strong> Los costos logísticos derivados del cambio de talla son asumidos por el cliente, salvo en casos atribuibles a error de despacho.</p>
                    </div>
                  </>
                )}

                {activePolicy === 'envios' && (
                  <>
                    <p>
                      Coordinamos nuestros despachos con empresas de transporte reconocidas para garantizar trazabilidad y seguridad en cada entrega:
                    </p>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                      <p><strong className="text-white">Barranquilla y Soledad:</strong> Entregas el mismo día para pedidos confirmados antes de las 3:00 PM.</p>
                      <p><strong className="text-white">Resto de Colombia:</strong> 2 a 4 días hábiles vía transportadora certificada con número de guía en tiempo real.</p>
                      <p><strong className="text-white">Envíos Internacionales:</strong> Tiempo estimado según el país de destino. Las tarifas aduaneras o aranceles locales corresponden al destinatario.</p>
                      <p><strong className="text-white">Empaque protegido:</strong> Todas las piezas se despachan en empaque sellado para preservar la integridad de la tela Pima Peruana.</p>
                    </div>
                  </>
                )}

                {activePolicy === 'terminos' && (
                  <>
                    <p>
                      Bienvenido a <strong className="text-white font-medium">DE TO’ SHOP</strong>. Al acceder a nuestro sitio web y realizar compras o consultas, aceptas las siguientes pautas:
                    </p>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                      <p><strong className="text-white">Naturaleza multimarca:</strong> DE TO’ SHOP es una tienda de curaduría multimarca independiente de piezas de moda y streetwear. Las marcas mencionadas pertenecen a sus respectivos titulares.</p>
                      <p><strong className="text-white">Disponibilidad:</strong> Todas las prendas corresponden a drops limitados. Las piezas vendidas se indican de manera transparente en la plataforma.</p>
                      <p><strong className="text-white">Canal de compra:</strong> La formalización de pedidos se realiza de forma directa y personalizada a través de nuestro canal de WhatsApp verificado.</p>
                    </div>
                  </>
                )}

                {activePolicy === 'privacidad' && (
                  <>
                    <p>
                      En <strong className="text-white font-medium">DE TO’ SHOP</strong> valoramos y respetamos tu privacidad:
                    </p>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                      <p><strong className="text-white">Datos de contacto:</strong> Los datos suministrados (nombre, dirección de entrega, teléfono) son utilizados exclusivamente para la coordinación logística y el despacho de tu pedido.</p>
                      <p><strong className="text-white">Confidencialidad:</strong> Nunca compartimos ni vendemos tu información a terceros con fines publicitarios o comerciales no autorizados.</p>
                    </div>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">DE TO’ SHOP · INFORMACIÓN OFICIAL</span>
                <button
                  onClick={() => setActivePolicy(null)}
                  className="px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
