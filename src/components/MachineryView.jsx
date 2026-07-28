import { Truck, ShieldCheck, DollarSign, SearchCheck } from 'lucide-react';
import CatalogView from './CatalogView';
import ClientCarousel from './ClientCarousel';

export default function MachineryView() {
  return (
    <div className="animate-fadeIn">
      
      {/* HERO SECTION DE MAQUINARIA */}
      <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden border-b-8 border-[#FFB700]">
        <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80')"}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="md:w-2/3 space-y-6">
            <span className="inline-block bg-[#FFB700] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Importación Directa
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase">
              Maquinaria Pesada e Importación Directa sin Intermediarios en Perú
            </h1>
            <p className="text-lg text-gray-300 font-medium leading-relaxed">
              Al no tener revendedores en medio, te damos el precio más competitivo del mercado. Además, con nuestra propia flota de RA Transportes, te entregamos el equipo operando directamente en tu proyecto u obra minera. Un solo precio, un solo responsable, cero comisiones ocultas.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#catalogo" className="inline-block bg-[#FFB700] text-black px-8 py-3.5 font-bold text-center hover:bg-yellow-500 transition shadow-lg uppercase text-sm rounded">
                Ver Maquinaria con Precio Directo
              </a>
              <a href="https://wa.me/51924291787" target="_blank" rel="noreferrer" className="inline-block bg-transparent border-2 border-[#FFB700] text-[#FFB700] px-8 py-3.5 font-bold text-center hover:bg-[#FFB700] hover:text-black transition shadow-lg uppercase text-sm rounded">
                Cotizar Importación a Pedido
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE RESPALDO */}
      <section className="bg-white py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
              ¿Por qué con nosotros tienes mejor precio y cero riesgos?
            </h2>
            <div className="w-24 h-1.5 bg-[#FFB700] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloque 1 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FFB700] flex items-center justify-center rounded mb-6 shadow">
                <DollarSign className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-4">1. Precios de Importador Directo</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Olvídate de pagar las comisiones del revendedor, del broker y de la tienda comercial. Al importar directamente y operar nuestra propia logística aduanera (Régimen 10/70), te trasladamos ese ahorro directamente al precio final de la máquina.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FFB700] flex items-center justify-center rounded mb-6 shadow">
                <SearchCheck className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-4">2. Inspección 100% Transparente y Real</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Aquí no te vendemos sorpresas ni fotos de catálogo. Cada equipo incluye reporte técnico real de horómetro, sistema hidráulico, rodamiento y motor. Puedes venir a nuestro patio con tu mecánico de confianza o solicitar prueba de video en vivo antes de soltar un sol.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="bg-gray-50 border border-gray-100 p-8 rounded shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#FFB700] flex items-center justify-center rounded mb-6 shadow">
                <Truck className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-4">3. Flete Asegurado con RA Transportes</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                El negocio tradicional te vende la máquina y te deja abandonado con el problema del flete. Nosotros somos dueños de nuestra propia flota de camas bajas (RA Transportes). Llevamos tu excavadora o tractor hasta tu proyecto en cualquier zona minera con seguro de carga y tarifas preferenciales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CATÁLOGO DE EQUIPOS */}
      <div id="catalogo">
        <CatalogView />
      </div>

      {/* SECCIÓN DEL CARRUSEL DE CLIENTES */}
      <ClientCarousel />
      
    </div>
  );
}