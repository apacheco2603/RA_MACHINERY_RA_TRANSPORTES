import { Truck, MapPin, ShieldCheck, FileCheck } from 'lucide-react';
import ServiciosFleteView from './ServiciosFleteView';

export default function TransportesView() {
  return (
    <div className="animate-fadeIn">
      
      {/* HERO SECTION DE TRANSPORTES */}
      <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden border-b-8 border-[#FFB700]">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80')"}}></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-900 transform skew-x-12 translate-x-32 opacity-50 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left z-10">
          <div className="md:w-2/3 space-y-6">
            <span className="inline-flex items-center gap-2 bg-[#FFB700] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              <Truck className="w-4 h-4" /> División Logística
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase">
              RA <span className="text-[#FFB700]">TRANSPORTES</span>
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Especialistas en el traslado seguro de maquinaria pesada y carga extradimensionada a nivel nacional. Llegamos a cualquier proyecto u obra.
            </p>
            <div className="pt-4">
              <a href="https://wa.me/51924291787" target="_blank" rel="noreferrer" className="inline-block bg-[#FFB700] text-black px-8 py-3.5 font-bold text-center hover:bg-yellow-500 transition shadow-lg uppercase text-sm rounded">
                Cotizar Flete Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CATÁLOGO DE SERVICIOS DE FLETE */}
      <ServiciosFleteView />

      {/* BANNER DE COMPROMISO */}
      <section className="relative bg-gray-900 text-white py-16 border-t-4 border-[#FFB700] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80')"}}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <ShieldCheck className="w-12 h-12 text-[#FFB700] mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4 uppercase">Tu maquinaria está segura con nosotros</h2>
          <p className="text-gray-400 mb-8">
            Contamos con monitoreo GPS en tiempo real en todas nuestras unidades para que conozcas la ubicación exacta de tu inversión en cada kilómetro del trayecto.
          </p>
        </div>
      </section>

    </div>
  );
}