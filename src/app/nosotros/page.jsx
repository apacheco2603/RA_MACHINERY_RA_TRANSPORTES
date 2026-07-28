import Navbar from '../../components/Navbar';
import AboutView from '../../components/AboutView';
import Footer from '../../components/Footer';

export default function PageNosotros() {
  return (
    <main className="bg-[#F3F4F6] min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Navbar activeTab="machinery" />
        <AboutView />
      </div>
      <Footer />
    </main>
  );
}