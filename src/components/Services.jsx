import { services } from '../data/services';

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mx-auto w-fit">Journey belajar</div>
          <h2 className="section-title text-white">Kurikulum intensif 12 minggu yang progresif</h2>
          <p className="section-subtitle">
            Setiap fase dirancang untuk membawa kamu dari pemahaman fundamental hingga siap presentasi ke stakeholder. Tugas
            nyata, feedback personal, dan sesi studio menjaga momentum belajarmu tetap tinggi.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="glass-panel glass-dark relative overflow-hidden p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" aria-hidden />
              <div className="absolute -bottom-16 -left-20 h-32 w-32 rounded-full bg-skyglow/10 blur-3xl" aria-hidden />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <span className="pill">Phase {index + 1}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">{service.duration}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a.75.75 0 010 1.06l-6.363 6.364a.75.75 0 01-1.061 0L3.296 7.73a.75.75 0 111.06-1.06L9.75 12.06l5.894-5.894a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 text-xs uppercase tracking-[0.3em] text-white/40">{service.level}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
