export default function AboutView() {
  return (
    <div className="animate-fadeIn py-16 bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-[#FFB700]/20 border border-[#FFB700] text-black text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-4">
            Quiénes Somos
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tight mb-6">
            Potencia y Solidez para el Desarrollo Minero e Industrial del Perú
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            En RA MACHINERY combinamos años de experiencia en la importación de maquinaria pesada de alta gama con un respaldo logístico integral.
          </p>
        </div>
      </section>

      {/* Historia y Enfoque */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-black uppercase">EL EQUIPO DETRÁS DE TU INVERSIÓN</h2>
            <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-3">
              <p>
                Más que vendedores, somos tu aliado estratégico. Detrás de cada máquina que importamos hay un equipo de profesionales cuidando tu dinero:
              </p>
              <p>
                <strong className="text-black">Dirección y Ventas:</strong> Evaluación técnica y selección de los mejores equipos en origen.
              </p>
              <p>
                <strong className="text-black">Área Contable y Legal:</strong> Transparencia absoluta en facturación, trámites aduaneros y cumplimiento SUNAT.
              </p>
              <p>
                <strong className="text-black">Operaciones y Logística:</strong> Especialistas en aduanas y transporte de carga sobredimensionada.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded border-l-4 border-[#FFB700]">
              <h4 className="font-black text-black uppercase mb-1">LA VENTAJA EXCLUSIVA: IMPORTACIÓN + TRANSPORTE PROPIO</h4>
              <p className="text-sm text-gray-700">
                No tercerizamos. Al ser dueños de <strong>RA TRANSPORTES</strong> (nuestra propia flota de camas bajas), eliminamos los sobrecostos de terceros. Nos hacemos responsables de principio a fin: desde la compra internacional hasta descargar la máquina operando en la puerta de tu obra.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="rounded shadow-xl border-4 border-black overflow-hidden w-10/12 h-80">
              <img 
                src="/nosotros-equipo.jpg" 
                alt="Director General RA Machinery" 
                className="w-full h-full object-cover object-[center_60%] scale-125" 
              />
            </div>
            <p className="mt-4 text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest">
              Director General
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-black text-white py-16 border-t-4 border-[#FFB700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase text-[#FFB700]">Misión</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Proveer maquinaria pesada de marcas líderes a nivel mundial, optimizando los tiempos y costos operativos de nuestros clientes mediante un servicio integral de importación y soporte.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase text-[#FFB700]">Visión</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Consolidarnos como el socio estratégico preferido en importación y logística de maquinaria para el sector minero e industrial nacional, reconocidos por nuestra eficiencia y seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}