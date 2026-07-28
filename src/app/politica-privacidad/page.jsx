import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-[#F3F4F6] min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Navbar activeTab="machinery" />
        <div className="max-w-4xl mx-auto px-4 py-16 bg-white shadow-sm mt-8 mb-16 rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-black mb-8 uppercase border-b-4 border-[#FFB700] pb-4 inline-block">Política de Privacidad</h1>
          
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p><strong>Última actualización:</strong> Julio de 2026</p>
            
            <p>En <strong>RA MACHINERY & TRANSPORTES PERÚ</strong>, valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando visita nuestro sitio web o utiliza nuestros servicios de importación de maquinaria y flete nacional.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">1. Información que Recopilamos</h2>
            <p>Podemos recopilar la siguiente información cuando interactúa con nosotros:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información de contacto (nombre, correo electrónico, número de teléfono).</li>
              <li>Información de la empresa (RUC, razón social, dirección fiscal).</li>
              <li>Detalles de las cotizaciones requeridas (tipo de maquinaria, rutas de transporte, especificaciones de carga).</li>
              <li>Datos de uso del sitio web (cookies, dirección IP, tipo de navegador) para mejorar nuestra plataforma.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">2. Uso de la Información</h2>
            <p>La información recopilada se utiliza exclusivamente para los siguientes fines:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Procesar sus solicitudes de cotización de importación de maquinaria o transporte.</li>
              <li>Contactarlo vía WhatsApp, correo electrónico o teléfono para enviarle propuestas comerciales.</li>
              <li>Mejorar nuestros servicios y la experiencia de usuario en nuestra plataforma web.</li>
              <li>Cumplir con obligaciones legales y regulatorias de las autoridades peruanas.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">3. Protección de Datos</h2>
            <p>Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger su información personal contra accesos no autorizados, pérdida o alteración. No vendemos, alquilamos ni compartimos su información con terceros sin su consentimiento explícito, excepto cuando sea necesario para cumplir con un servicio (ej. trámites aduaneros o permisos de la SUTRAN).</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">4. Sus Derechos</h2>
            <p>Usted tiene derecho a solicitar el acceso, rectificación, cancelación u oposición sobre el uso de sus datos personales. Para ejercer estos derechos, puede comunicarse directamente con nosotros a través de los canales oficiales.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-black">5. Contacto</h2>
            <p>Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Teléfono / WhatsApp:</strong> +51 924 291 787</li>
              <li><strong>Correo electrónico:</strong> contacto@ramachineryperu.com</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
