export function Footer() {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-white">LP Pondok Programming</p>
          <p className="mt-2 text-sm text-slate-400">Futuristic software studio crafting luminous experiences.</p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-neon-300">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-xs text-slate-500">© {new Date().getFullYear()} LP Pondok Programming. Stay glowing.</div>
      </div>
    </footer>
  );
}
