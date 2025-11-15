import { portfolioItems } from '../data/portfolio';

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-6">
            <div className="eyebrow">Studio Project</div>
            <h2 className="section-title text-white">Bangun case study end-to-end yang siap kamu pamerkan</h2>
            <p className="section-subtitle">
              Kamu akan bekerja dalam squad kecil memecahkan masalah nyata dari partner industri. Setiap minggu ada design review,
              standup, dan retro agar prosesnya terasa seperti bekerja di product team sungguhan.
            </p>
            <div className="glass-panel glass-dark space-y-4 p-6 text-sm text-white/70">
              <p>Kami sediakan:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a.75.75 0 010 1.06l-6.363 6.364a.75.75 0 01-1.061 0L3.296 7.73a.75.75 0 111.06-1.06L9.75 12.06l5.894-5.894a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Brief proyek dari partner startup
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a.75.75 0 010 1.06l-6.363 6.364a.75.75 0 01-1.061 0L3.296 7.73a.75.75 0 111.06-1.06L9.75 12.06l5.894-5.894a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Review mingguan bersama panel mentor
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a.75.75 0 010 1.06l-6.363 6.364a.75.75 0 01-1.061 0L3.296 7.73a.75.75 0 111.06-1.06L9.75 12.06l5.894-5.894a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Showcase akhir di depan hiring partner
                </li>
              </ul>
            </div>
            <a className="glow-button" href="#contact">
              Gabung project studio
            </a>
          </div>
          <div className="space-y-8">
            {portfolioItems.map((item, index) => (
              <article key={item.title} className="relative flex gap-6 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-brand-500/10">
                  <span className="text-2xl font-semibold text-brand-200">{index + 1}</span>
                  <span className="absolute inset-0 -z-10 animate-slowSpin bg-[conic-gradient(from_90deg_at_50%_50%,rgba(143,116,255,0.35),transparent_65%)]" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/40">
                    <span>{item.weeks}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                  <ul className="flex flex-wrap gap-2 pt-2 text-xs">
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
