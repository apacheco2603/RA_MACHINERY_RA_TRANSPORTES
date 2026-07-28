"use client";

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Menu, X, Truck, Wrench, ChevronRight, MapPin, Clock } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isMachinery = activeTab === 'machinery';

  const handleTabClick = (tab) => {
    if (pathname !== '/') {
      router.push('/#' + tab);
    } else {
      if (setActiveTab) setActiveTab(tab);
      else router.push('/#' + tab);
    }
  };

  return (
    <>
      {/* Topbar informativo */}
      <div className="bg-black text-gray-300 text-xs sm:text-sm py-2 px-4 border-b-4 border-[#FFB700]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#FFB700]" /> Lima, Perú
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#FFB700]" /> Lun - Sab: 8:00 AM - 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/51924291787" target="_blank" rel="noreferrer" className="hover:text-[#FFB700] flex items-center gap-1 transition font-bold text-[#FFB700]">
              <Phone className="w-4 h-4" /> +51 924 291 787
            </a>
          </div>
        </div>
      </div>

      {/* Navbar principal con diseño original (fondo negro) */}
      <nav className="bg-black shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            
            {/* Logo Dinámico */}
            <div className="flex items-center cursor-pointer" onClick={() => handleTabClick('machinery')}>
              {isMachinery ? (
                <img src="/logo-black.png" alt="RA Machinery" className="h-20 w-auto object-contain rounded" />
              ) : (
                <img src="/logo-transportes.png" alt="RA Transportes" className="h-20 w-auto object-contain rounded" />
              )}
            </div>

            {/* Menú de Escritorio */}
            <div className="hidden md:flex items-center space-x-6 font-medium text-white">
              {isMachinery ? (
                <>
                  <button onClick={() => handleTabClick('machinery')} className="hover:text-[#FFB700] transition font-bold uppercase text-sm">Inicio</button>
                  <a href="/nosotros" className="hover:text-[#FFB700] transition uppercase text-sm">Nosotros</a>
                  <a href="/#catalogo" className="hover:text-[#FFB700] transition uppercase text-sm">Catálogo de Equipos</a>
                  <button 
                    onClick={() => handleTabClick('transportes')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-4 py-2 rounded text-xs font-black flex items-center gap-2 uppercase transition shadow-sm"
                  >
                    <Truck className="w-4 h-4 text-[#FFB700]" /> RA Transportes <ChevronRight className="w-3 h-3" />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleTabClick('transportes')} className="hover:text-[#FFB700] transition font-bold uppercase text-sm">Inicio</button>
                  <a href="/#servicios-transporte" className="hover:text-[#FFB700] transition uppercase text-sm">Servicios de Flete</a>
                  <button 
                    onClick={() => handleTabClick('machinery')} 
                    className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-4 py-2 rounded text-xs font-black flex items-center gap-2 uppercase transition shadow-sm"
                  >
                    <Wrench className="w-4 h-4 text-[#FFB700]" /> RA Machinery <ChevronRight className="w-3 h-3" />
                  </button>
                </>
              )}

              <a href="https://wa.me/51924291787" target="_blank" rel="noreferrer" className="bg-[#FFB700] text-black px-5 py-2.5 rounded font-black hover:bg-yellow-500 transition shadow-sm uppercase text-sm">
                {isMachinery ? "Cotizar Equipo" : "Cotizar Flete"}
              </a>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#FFB700] focus:outline-none"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isOpen && (
          <div className="md:hidden bg-black border-b border-gray-800 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            {isMachinery ? (
              <>
                <button onClick={() => { handleTabClick('machinery'); setIsOpen(false); }} className="block w-full text-left text-white hover:text-[#FFB700] font-bold uppercase text-sm py-1">Inicio</button>
                <a href="/nosotros" onClick={() => setIsOpen(false)} className="block text-white hover:text-[#FFB700] font-medium uppercase text-sm py-1">Nosotros</a>
                <a href="/#catalogo" onClick={() => setIsOpen(false)} className="block text-white hover:text-[#FFB700] font-medium uppercase text-sm py-1">Catálogo de Equipos</a>
                <button 
                  onClick={() => { handleTabClick('transportes'); setIsOpen(false); }} 
                  className="w-full mt-2 bg-gray-800 text-white hover:bg-gray-700 py-2.5 px-4 rounded font-bold flex items-center justify-center gap-2 uppercase text-xs"
                >
                  <Truck className="w-4 h-4 text-[#FFB700]" /> RA Transportes
                </button>
              </>
            ) : (
              <>
                <button onClick={() => { handleTabClick('transportes'); setIsOpen(false); }} className="block w-full text-left text-white hover:text-[#FFB700] font-bold uppercase text-sm py-1">Inicio (Transportes)</button>
                <a href="/#servicios-transporte" onClick={() => setIsOpen(false)} className="block text-white hover:text-[#FFB700] font-medium uppercase text-sm py-1">Servicios de Flete</a>
                <button 
                  onClick={() => { handleTabClick('machinery'); setIsOpen(false); }} 
                  className="w-full mt-2 bg-gray-800 text-white hover:bg-gray-700 py-2.5 px-4 rounded font-bold flex items-center justify-center gap-2 uppercase text-xs"
                >
                  <Wrench className="w-4 h-4 text-[#FFB700]" /> RA Machinery
                </button>
              </>
            )}
            <a href="https://wa.me/51924291787" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="block text-center bg-[#FFB700] text-black py-3 rounded font-black uppercase text-sm shadow-sm">
              {isMachinery ? "Cotizar Equipo" : "Cotizar Flete"}
            </a>
          </div>
        )}
      </nav>
    </>
  );
}