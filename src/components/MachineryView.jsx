import { Truck, ShieldCheck } from 'lucide-react';
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
              Potencia para la Minería en el Perú
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Especialistas en la importación de maquinaria pesada de alto rendimiento. Resolvemos la compra y el traslado hasta tu unidad minera.
            </p>
            <div className="pt-4">
              <a href="#catalogo" className="inline-block bg-[#FFB700] text-black px-8 py-3.5 font-bold text-center hover:bg-yellow-500 transition shadow-lg uppercase text-sm rounded">
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER DE SINERGIA (FLETE) */}
      <section className="bg-[#FFB700] text-black py-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded text-[#FFB700] hidden sm:block">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase">Solución Integral: Importación + Transporte</h3>
              <p className="text-gray-900 font-medium text-sm mt-1">
                Importamos tu maquinaria y <strong>RA TRANSPORTES</strong> se encarga del flete pesado hasta tu proyecto.
              </p>
            </div>
          </div>
          <a href="https://wa.me/51924291787" target="_blank" rel="noreferrer" className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded font-bold flex items-center gap-2 whitespace-nowrap transition uppercase text-sm">
            <Truck className="w-5 h-5 text-[#FFB700]" /> Cotizar Flete de Máquina
          </a>
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