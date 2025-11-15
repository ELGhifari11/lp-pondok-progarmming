import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogosStrip } from './components/LogosStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-midnight text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-60" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-40 h-96 bg-[radial-gradient(circle_at_top,rgba(108,77,255,0.15),transparent_70%)]" aria-hidden />
        <Navbar />
        <main className="relative">
          <Hero />
          <LogosStrip />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
