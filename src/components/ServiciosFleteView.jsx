import { Truck, Map, ShieldAlert, Weight, Ruler, HardHat } from 'lucide-react';

const servicios = [
  {
    id: 1,
    title: "Transporte de Maquinaria Pesada",
    description: "Traslado especializado de excavadoras, cargadores frontales, tractores y volquetes utilizando camas bajas y modulares adaptados al peso de cada equipo.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Carga Sobredimensionada",
    description: "Soluciones logísticas para equipos que exceden las dimensiones estándar, como piezas de molinos, transformadores y estructuras mineras.",
    icon: Ruler,
  },
  {
    id: 3,
    title: "Estudios de Ruta",
    description: "Análisis previo de viabilidad geométrica y estructural de carreteras, puentes y túneles para garantizar que la carga llegue sin contratiempos.",
    icon: Map,
  },
  {
    id: 4,
    title: "Escolta y Resguardo",
    description: "Flota de vehículos escolta (liebres) autorizados y coordinación policial para acompañar convoyes de carga especial durante todo el trayecto.",
    icon: ShieldAlert,
  },
  {
    id: 5,
    title: "Maniobras Especializadas",
    description: "Servicio integral que incluye grúas, cuadrillas de rigging y supervisores para la carga, trincado (amarre) y descarga segura de tus equipos.",
    icon: HardHat,
  },
  {
    id: 6,
    title: "Transporte de Gran Tonelaje",
    description: "Configuraciones especiales multiejes para la distribución correcta del peso, cumpliendo con la normativa de pesos y medidas de la SUTRAN.",
    icon: Weight,
  }
];

export default function ServiciosFleteView() {
  return (
    <section id="servicios-transporte" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#FFB700] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">Catálogo de Soluciones</span>
          <h2 className="text-2xl md:text-4xl font-black text-black uppercase">Nuestros Servicios de Flete</h2>
          <div className="w-24 h-1 bg-[#FFB700] mx-auto mt-6 mb-6"></div>
          <p className="text-gray-600 font-medium text-sm sm:text-lg">
            Ofrecemos un portafolio completo de soluciones logísticas para la minería y construcción. Gestionamos cada etapa del traslado para tu total tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className="bg-white p-6 sm:p-8 rounded shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FFB700] transition duration-300">
                <servicio.icon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-4 uppercase">{servicio.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/51924291787" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-gray-800 transition shadow-lg rounded text-sm"
          >
            Solicitar Cotización de Flete
          </a>
        </div>

      </div>
    </section>
  );
}
