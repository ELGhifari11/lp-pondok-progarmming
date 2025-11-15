import { portfolioItems } from '../data/portfolio';

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 text-left md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title text-glow">Selected collaborations</h2>
            <p className="section-subtitle">
              Interfaces and identities infused with neon glassmorphism, built for velocity and wonder.
            </p>
          </div>
          <a className="glow-button self-start" href="#contact">
            Request full deck
          </a>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.title} className="glass-panel glass-dark flex flex-col overflow-hidden">
              <div className="overflow-hidden border-b border-white/10">
                <img src={item.image} alt={item.title} className="w-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 text-xs">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/10 px-3 py-1 text-slate-300">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
