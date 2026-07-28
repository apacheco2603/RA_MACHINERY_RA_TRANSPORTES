import { Truck, MapPin, ShieldCheck, FileCheck, DollarSign } from 'lucide-react';
import ServiciosFleteView from './ServiciosFleteView';

export default function TransportesView() {
  return (
    <div className="animate-fadeIn">
      
      {/* HERO SECTION DE TRANSPORTES */}
      <section className="relative bg-black text-white py-16 lg:py-32 overflow-hidden border-b-4 border-[#FFB700]">
        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80')"}}></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-900 transform skew-x-12 translate-x-32 opacity-50 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left z-10">
          <div className="md:w-2/3 space-y-6">
            <span className="inline-flex items-center gap-2 bg-[#FFB700] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              <Truck className="w-4 h-4" /> División Logística
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight uppercase">
              RA <span className="text-[#FFB700]">TRANSPORTES</span>
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 font-medium">
              Como los camiones son nuestros, te ahorras el dinero del intermediario y tu máquina viaja segura con especialistas en rutas mineras.
            </p>
            <div className="pt-4">
              <a href="https://wa.me/51924291787?text=Hola%20RA%20Transportes%2C%20quiero%20cotizar%20un%20flete%20directo%20sin%20intermediarios%20para%20llevar%20un%20equipo%20desde%20%5BOrigen%5D%20hasta%20%5BDestino%5D" target="_blank" rel="noreferrer" className="inline-block bg-[#FFB700] text-black px-8 py-3.5 font-bold text-center hover:bg-yellow-500 transition shadow-lg uppercase text-sm rounded">
                Cotizar Flete en Cama Baja Directo con el Dueño
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: POR QUÉ CONVIENE */}
      <section className="bg-white py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tight">
              ¿Por qué nuestro transporte te conviene más?
            </h2>
            <div className="w-24 h-1.5 bg-[#FFB700] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Beneficio 1 */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FFB700] flex items-center justify-center rounded mb-5 shadow">
                <DollarSign className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-3">Tarifa de Dueño a Cliente</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Al integrar la importación y el transporte bajo una misma empresa, eliminamos los sobreprecios de los brokers logísticos. Te damos un precio preferencial de flete que reduce el costo total de tu equipo en obra.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FFB700] flex items-center justify-center rounded mb-5 shadow">
                <ShieldCheck className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-3">Especialistas en Rutas Mineras</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                No cualquier chofer puede llevar 30 toneladas por las rutas del Perú. Contamos con conductores certificados en manejo defensivo y experiencia comprobada en accesos mineros difíciles (Arequipa, Cajamarca, Cusco, Junín y más).
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FFB700] flex items-center justify-center rounded mb-5 shadow">
                <FileCheck className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-3">Permisos MTC y Legalidad 100%</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Todas nuestras unidades cuentan con homologaciones, seguros de carga de extremo a extremo, resguardo vehicular y permisos de circulación para carga sobredimensionada al día. Cero multas, cero demoras.
              </p>
            </div>

            {/* Beneficio 4 */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded shadow-sm hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#FFB700] flex items-center justify-center rounded mb-5 shadow">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-black uppercase text-black mb-3">Monitoreo GPS en Tiempo Real</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Desde que la máquina sale del Callao o de nuestro patio hasta que baja las rampas en tu campamento, sabes exactamente dónde está tu inversión en cada kilómetro del trayecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER INDEPENDIENTE */}
      <section className="bg-[#FFB700] text-black py-16 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-4 uppercase">¿No nos compraste la máquina pero necesitas el flete?</h2>
          <p className="text-gray-900 font-medium text-base sm:text-lg mb-8 leading-relaxed">
            También operamos como línea de transporte independiente. Si ya tienes tu propia flota y necesitas movilizar excavadoras, tractores, perforadoras o estructuras pesadas a nivel nacional, te ofrecemos el mismo servicio directo y sin sobrecostos.
          </p>
          <a href="https://wa.me/51924291787?text=Hola%20RA%20Transportes%2C%20quiero%20cotizar%20un%20flete%20directo%20sin%20intermediarios%20para%20llevar%20un%20equipo%20desde%20%5BOrigen%5D%20hasta%20%5BDestino%5D" target="_blank" rel="noreferrer" className="inline-block bg-black hover:bg-gray-800 text-[#FFB700] px-8 py-4 font-black text-center transition shadow-xl uppercase text-sm sm:text-base rounded shadow-lg">
            Cotizar Flete en Cama Baja Directo con el Dueño
          </a>
        </div>
      </section>

      {/* SECCIÓN CATÁLOGO DE SERVICIOS DE FLETE */}
      <ServiciosFleteView />

    </div>
  );
}