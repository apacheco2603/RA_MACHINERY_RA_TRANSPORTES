import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TerminosCondiciones() {
  return (
    <main className="bg-[#F3F4F6] min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Navbar activeTab="machinery" />
        <div className="max-w-4xl mx-auto px-4 py-16 bg-white shadow-sm mt-8 mb-16 rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-black mb-8 uppercase border-b-4 border-[#FFB700] pb-4 inline-block">Términos y Condiciones</h1>
          
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p><strong>Última actualización:</strong> Julio de 2026</p>
            
            <p>Al acceder y utilizar el sitio web de <strong>RA MACHINERY & TRANSPORTES PERÚ</strong> y al contratar nuestros servicios, usted acepta estar sujeto a los siguientes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, por favor no utilice nuestros servicios.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">1. Servicios Ofrecidos</h2>
            <p>RA MACHINERY se especializa en la importación directa de maquinaria pesada. RA TRANSPORTES provee servicios de logística y flete nacional, incluyendo camas bajas y transporte de carga sobredimensionada. Las especificaciones de cada servicio se detallarán en el contrato o cotización formal enviada al cliente.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">2. Cotizaciones y Tarifas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las cotizaciones enviadas a través de nuestros canales digitales (WhatsApp, correo) son referenciales y tienen un tiempo de validez especificado en el documento formal.</li>
              <li>Los precios de importación están sujetos a variaciones por tipo de cambio, fletes internacionales y aranceles aduaneros al momento del despacho.</li>
              <li>Las tarifas de transporte nacional (flete) pueden variar si las condiciones de la ruta, permisos especiales o dimensiones de la carga difieren de lo declarado inicialmente por el cliente.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">3. Responsabilidades del Cliente</h2>
            <p>El cliente se compromete a proporcionar información veraz y exacta sobre las dimensiones, peso y características de la carga a transportar, así como las direcciones exactas de origen y destino. Cualquier retraso o multa generada por información inexacta será responsabilidad del cliente.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">4. Limitación de Responsabilidad</h2>
            <p>RA MACHINERY & TRANSPORTES velará por la máxima seguridad de sus equipos. En el servicio de transporte, la carga viaja bajo el amparo de la póliza de seguro de transporte de carga que el cliente debe proveer, a menos que se haya acordado expresamente por escrito que nosotros proveamos el seguro.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">5. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en este sitio web.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">6. Jurisdicción</h2>
            <p>Estos términos se rigen por las leyes de la República del Perú. Cualquier disputa será resuelta ante los tribunales competentes de la ciudad de Lima.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
