import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-neon/[0.05]" aria-hidden />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="#top" className="font-display text-lg font-semibold text-white">
              LP<span className="text-neon-500">•</span>Pondok
            </a>
            <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
              <a href="#about" className="transition hover:text-neon-300">
                About
              </a>
              <a href="#services" className="transition hover:text-neon-300">
                Services
              </a>
              <a href="#portfolio" className="transition hover:text-neon-300">
                Portfolio
              </a>
              <a href="#testimonials" className="transition hover:text-neon-300">
                Testimonials
              </a>
              <a href="#contact" className="transition hover:text-neon-300">
                Contact
              </a>
            </nav>
            <a href="#contact" className="glow-button hidden text-sm sm:inline-flex">
              Let’s Talk
            </a>
          </div>
        </header>
        <main className="relative">
          <Hero />
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
