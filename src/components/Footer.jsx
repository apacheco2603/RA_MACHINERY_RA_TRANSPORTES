import { MapPin, Phone, Mail, ShieldCheck, Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-[#FFB700]">
      {/* SECCIÓN PRINCIPAL DEL FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Columna 1: Identidad y Sinergia */}
            <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo-black.png" alt="RA Machinery" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solución integral en importación de maquinaria pesada para la minería y construcción en el Perú, respaldada por nuestro servicio especializado de flete con camas bajas.
            </p>
          </div>

          {/* Columna 2: Contacto Directo */}
          <div className="space-y-4">
            <h4 className="text-lg font-black uppercase text-[#FFB700] tracking-wider">Contacto en Perú</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#FFB700] shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/Tibwwbo4okkVWEvHA" target="_blank" rel="noreferrer" className="hover:text-[#FFB700] transition">
                  Ctra. Cieneguilla, Pachacamac 15593
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FFB700] shrink-0" />
                <span>+51 924 291 787</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FFB700] shrink-0" />
                <a href="mailto:ventas@ramachineryperu.com" className="hover:text-[#FFB700] transition">ventas@ramachineryperu.com</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces de Interés / Sinergia */}
          <div className="space-y-4">
            <h4 className="text-lg font-black uppercase text-[#FFB700] tracking-wider">Unidades de Negocio</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFB700]" />
                <span>Importación de Maquinaria Pesada</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#FFB700]" />
                <span>RA Transportes - Flete Nacional</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BARRA INFERIOR / APARTADO LEGAL */}
      <div className="bg-gray-950 border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} RA MACHINERY PERÚ & RA TRANSPORTES. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="/politica-privacidad" className="hover:text-[#FFB700] transition">Política de Privacidad</a>
            <a href="/terminos-y-condiciones" className="hover:text-[#FFB700] transition">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}