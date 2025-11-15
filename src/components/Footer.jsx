export function Footer() {
  const links = [
    { href: '#about', label: 'Tentang' },
    { href: '#services', label: 'Kurikulum' },
    { href: '#portfolio', label: 'Project Studio' },
    { href: '#testimonials', label: 'Alumni' },
    { href: '#contact', label: 'Daftar' },
  ];

  return (
    <footer className="border-t border-white/10 bg-surface-900/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="font-display text-2xl font-semibold text-white">LP Pondok Academy</p>
          <p className="text-sm text-white/60">
            Program intensif terinspirasi Lytbox Academy untuk membangun talenta product & design Indonesia yang siap bersaing
            secara global.
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/60">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-xs uppercase tracking-[0.35em] text-white/30">
          © {new Date().getFullYear()} Pondok Programming
        </div>
      </div>
    </footer>
  );
}
