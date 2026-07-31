import React, { useState } from 'react';
import { Truck, FileText } from 'lucide-react';

const machineryList = [
  {
    id: 1,
    name: "CATERPILLAR 330 NG",
    category: "Movimiento de Tierras / Minería",
    image: "/cat-330-ng.jpg",
    description: "Equipo importado directamente. Inspeccionado y listo para operar.",
    specs: [
      "Motor: C7.1 ACCERT",
      "Peso Neto: 30,000 kg",
      "Capacidad de Cuchara: 1.76 M3"
    ]
  },
  {
    id: 2,
    name: "CATERPILLAR 330 FL",
    category: "Movimiento de Tierras / Minería",
    image: "/cat-330-fl.jpg",
    description: "Equipo importado directamente. Inspeccionado y listo para operar.",
    specs: [
      "Motor: C7.1 ACCERT",
      "Peso Neto: 31,000 kg",
      "Capacidad de Cuchara: 1.76 M3"
    ]
  },
  {
    id: 3,
    name: "CATERPILLAR 336 NG",
    category: "Movimiento de Tierras / Minería",
    image: "/cat-336-ng.jpg",
    description: "Equipo de alto rendimiento, ideal para proyectos exigentes de minería y construcción.",
    specs: [
      "Motor: C9.3",
      "Peso Neto: 37,200 kg",
      "Capacidad de Cuchara: 2.27 M3"
    ]
  },
  {
    id: 4,
    name: "VOLVO L150F",
    category: "Carga y Acarreo",
    image: "/volvo-l150f.jpg",
    description: "Cargador frontal robusto y eficiente, diseñado para máxima productividad.",
    specs: [
      "Motor: D12D",
      "Peso Neto: 23,400 kg",
      "Capacidad de Cuchara: 4.2 M3"
    ]
  }
];

export default function CatalogView() {
  const [filter, setFilter] = useState('Todos');

  const categoryMap = {
    'Todos': 'Todos',
    'Excavadoras': 'Movimiento de Tierras / Minería',
    'Cargadores Frontales': 'Carga y Acarreo',
    'Bulldozers': 'Preparación y Empuje'
  };

  const filteredList = machineryList.filter(
    item => filter === 'Todos' || item.category === categoryMap[filter]
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado del Catálogo */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#FFB700] text-black text-[10px] sm:text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded inline-block mb-4 shadow-sm">
            Flota e Importación Directa
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-black uppercase tracking-tight">Catálogo de Equipos Pesados</h2>
          <div className="w-24 h-1.5 bg-[#FFB700] mx-auto mt-4 mb-4"></div>
          <p className="text-sm sm:text-base text-gray-700 font-medium">Maquinaria de alto rendimiento importada bajo rigurosos estándares para la minería y construcción en el Perú.</p>
        </div>

        {/* Filtros de Categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['Todos', 'Excavadoras', 'Cargadores Frontales', 'Bulldozers'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={
                filter === f 
                  ? "bg-black text-[#FFB700] px-6 py-2.5 rounded font-black text-sm shadow uppercase border-2 border-black"
                  : "bg-gray-100 hover:bg-black hover:text-white text-black px-5 py-2.5 rounded font-bold text-sm transition uppercase border border-gray-200"
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grilla de Equipos */}
        {filteredList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredList.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 hover:border-[#FFB700] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative overflow-hidden h-60 bg-gray-900">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90" 
                    />
                    <span className="absolute top-3 left-3 bg-[#FFB700] text-black text-xs font-black px-3 py-1 uppercase tracking-wider rounded shadow">
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">RA MACHINERY PERÚ</span>
                    <h3 className="text-2xl font-black text-black mt-1 uppercase tracking-tight">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-2 mb-4">{item.description}</p>
                    
                    {/* Especificaciones técnicas con detalle lateral amarillo */}
                    <div className="bg-gray-50 rounded p-4 my-4 space-y-2 text-sm border-l-4 border-[#FFB700]">
                      {item.specs.map((spec, index) => (
                        <div key={index} className="flex justify-between border-b border-gray-200 pb-1.5 last:border-b-0 last:pb-0">
                          <span className="text-gray-700 font-semibold">{spec.split(': ')[0]}:</span>
                          <span className="font-bold text-black">{spec.split(': ')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Botón de Acción Dual */}
                <div className="p-6 pt-0 space-y-3">
                  <a href="https://wa.me/51924291787" target="_blank" rel="noreferrer" className="w-full bg-[#FFB700] hover:bg-yellow-500 text-black text-center font-black py-3 px-4 rounded shadow transition text-sm flex items-center justify-center gap-2 uppercase">
                    <FileText className="w-4 h-4" /> Cotizar Equipo
                  </a>
                  <a href="#transportes" className="w-full bg-black hover:bg-gray-900 text-white text-center font-bold py-3 px-4 rounded transition text-xs flex items-center justify-center gap-2 uppercase border border-gray-800">
                    <Truck className="w-4 h-4 text-[#FFB700]" /> Consultar Flete con RA Transportes
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <span className="text-gray-400 font-bold text-2xl uppercase tracking-widest">No Disponible</span>
            <p className="text-gray-500 mt-2 text-sm">Actualmente no contamos con equipos en esta categoría.</p>
          </div>
        )}

      </div>
    </section>
  );
}