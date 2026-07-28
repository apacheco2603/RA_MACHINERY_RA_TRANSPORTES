"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MachineryView from '../components/MachineryView';
import TransportesView from '../components/TransportesView';
import Footer from '../components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('machinery');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#transportes') {
        setActiveTab('transportes');
      } else if (hash === '#machinery') {
        setActiveTab('machinery');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <main className="bg-[#F3F4F6] min-h-screen font-sans flex flex-col justify-between overflow-x-hidden">
      
      <div>
        {/* SWITCHER DE PESTAÑAS MAESTRAS ADAPTABLE */}
        <div className="bg-black w-full flex flex-row justify-center sticky top-0 z-[60] border-b-4 border-[#FFB700] shadow-lg">
          <button
            onClick={() => setActiveTab('machinery')}
            className={`flex-1 sm:flex-none px-2 py-3 sm:px-6 sm:py-4 font-black uppercase tracking-widest text-[10px] sm:text-base transition-all duration-300 ${
              activeTab === 'machinery' 
                ? 'bg-[#FFB700] text-black' 
                : 'text-gray-400 hover:text-white hover:bg-gray-900'
            }`}
          >
            RA Machinery
          </button>
          <button
            onClick={() => setActiveTab('transportes')}
            className={`flex-1 sm:flex-none px-2 py-3 sm:px-6 sm:py-4 font-black uppercase tracking-widest text-[10px] sm:text-base transition-all duration-300 ${
              activeTab === 'transportes' 
                ? 'bg-[#FFB700] text-black' 
                : 'text-gray-400 hover:text-white hover:bg-gray-900'
            }`}
          >
            RA Transportes
          </button>
        </div>

        {/* NAVBAR */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* ÁREA DE CONTENIDO RESPONSIVO */}
        <div className="w-full">
          {activeTab === 'machinery' ? (
            <MachineryView />
          ) : (
            <TransportesView />
          )}
        </div>
      </div>

      <Footer />

    </main>
  );
}