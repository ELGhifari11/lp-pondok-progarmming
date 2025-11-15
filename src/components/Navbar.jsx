import { useState } from 'react';

const links = [
  { href: '#about', label: 'Tentang Program' },
  { href: '#services', label: 'Kurikulum' },
  { href: '#portfolio', label: 'Roadmap' },
  { href: '#testimonials', label: 'Cerita Alumni' },
  { href: '#contact', label: 'Daftar' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-900/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-brand-200">
            LP
          </span>
          Pondok Academy
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="group relative transition hover:text-white">
              {link.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-brand-400 to-skyglow transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href="#contact" className="outline-button">
            Konsultasi Gratis
          </a>
          <a href="#contact" className="glow-button text-sm">
            Daftar Cohort
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-surface-900/95 px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 py-6 text-sm text-white/70">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl bg-white/5 px-4 py-3">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <a href="#contact" className="outline-button w-full justify-center">
              Konsultasi Gratis
            </a>
            <a href="#contact" className="glow-button w-full justify-center text-sm">
              Daftar Cohort
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
