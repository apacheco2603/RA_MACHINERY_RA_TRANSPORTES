"use client";

import { useState } from 'react';
import { ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';

export default function ClientCarousel() {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80", // Reemplazar con la foto real de tu cliente
      location: "Arequipa - Proyecto Minero",
      title: "Entrega de Excavadora de 30 Toneladas",
      description: "Importación directa por RA MACHINERY y traslado realizado mediante la flota de camas bajas de RA TRANSPORTES con total éxito.",
      client: "Contratista Minero"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80", // Reemplazar con la foto real de tu cliente
      location: "Cusco - Obras Viales",
      title: "Cargador Frontal en Operación",
      description: "Equipo entregado en la puerta del proyecto gracias a nuestra logística integral de transporte de carga pesada.",
      client: "Empresa Constructora"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80", // Reemplazar con la foto real de tu cliente
      location: "Lima - Planta Industrial",
      title: "Tractor de Oruga (Dozer)",
      description: "Desaduanaje e importación ágil, con flete seguro y escolta hasta las instalaciones del cliente.",
      client: "Consorcio Logístico"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">Entregas y Proyectos</h2>
          <div className="w-24 h-1.5 bg-[#FFB700] mx-auto mt-4 mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base font-medium">Casos de éxito reales: Maquinaria entregada y operando a nivel nacional.</p>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-0">
          <div className="overflow-hidden shadow-2xl bg-gray-50 border border-gray-200 rounded-lg">
            
            {/* Slide Activo (Adaptable: Columna en móvil, Fila en escritorio) */}
            <div className="flex flex-col md:flex-row">
              <img 
                src={slides[currentIndex].image} 
                className="w-full md:w-1/2 h-60 sm:h-72 md:h-auto object-cover transition-all duration-500" 
                alt="Entrega Cliente" 
              />
              <div className="p-6 sm:p-10 md:w-1/2 flex flex-col justify-center bg-black text-white">
                <span className="bg-[#FFB700] text-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded w-max mb-4 shadow">
                  {slides[currentIndex].location}
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-3 uppercase tracking-tight">{slides[currentIndex].title}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">{slides[currentIndex].description}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center shrink-0 border border-gray-800">
                    <UserCheck className="text-[#FFB700] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Cliente Satisfecho</p>
                    <p className="text-xs text-gray-400">{slides[currentIndex].client}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Botones de Control (Flechas adaptadas para no salirse de pantallas pequeñas) */}
          <button 
            onClick={prevSlide}
            className="absolute left-1 sm:left-[-1.5rem] top-1/2 -translate-y-1/2 bg-[#FFB700] hover:bg-yellow-500 text-black p-2.5 sm:p-3 rounded-full shadow-xl transition z-10 focus:outline-none"
            aria-label="Anterior"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-1 sm:right-[-1.5rem] top-1/2 -translate-y-1/2 bg-[#FFB700] hover:bg-yellow-500 text-black p-2.5 sm:p-3 rounded-full shadow-xl transition z-10 focus:outline-none"
            aria-label="Siguiente"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          {/* Puntos Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`h-3 rounded-full transition-all ${
                  currentIndex === slideIndex ? 'bg-[#FFB700] w-6' : 'bg-gray-300 w-3'
                }`}
                aria-label={`Ir al slide ${slideIndex + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}