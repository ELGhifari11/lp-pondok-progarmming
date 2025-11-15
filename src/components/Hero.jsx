import heroIllustration from '../assets/hero-illustration.svg';

const stats = [
  { label: 'Experience launches', value: '120+' },
  { label: 'Awards & recognitions', value: '34' },
  { label: 'Avg. ROI uplift', value: '187%' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-32 right-20 h-72 w-72 rounded-full bg-neon-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 md:flex-row md:items-center md:gap-20">
        <div className="md:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-neon-500 animate-pulse" />
            Accepting select collaborations for Q3 2025
          </span>
          <h1 className="mt-8 text-4xl font-display font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Neon-drenched products engineered for human awe
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            LP Pondok Programming fuses strategy, design, and emerging tech to craft luminous experiences that resonate across
            screens, spaces, and realities.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a className="glow-button" href="#contact">
              Start a project
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur"
              href="#portfolio"
            >
              <span className="h-2 w-2 rounded-full bg-neon-400" />
              Explore work
            </a>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 text-left">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel glass-dark px-6 py-5 text-sm">
                <dt className="text-slate-400">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="glass-panel glass-dark overflow-hidden border-white/10 p-6">
              <img src={heroIllustration} alt="Futuristic interface" className="mx-auto w-full max-w-xl animate-float" />
            </div>
            <div className="absolute -left-10 bottom-12 hidden h-24 w-24 rounded-full border border-neon-500/40 md:block">
              <div className="absolute inset-1 rounded-full bg-neon-500/20 blur-md" />
            </div>
            <div className="absolute -right-10 -top-10 hidden h-28 w-28 rounded-full bg-neon-500/10 blur-2xl md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
