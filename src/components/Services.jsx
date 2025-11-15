import { services } from '../data/services';

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-glow">Services crafted for luminous brands</h2>
          <p className="section-subtitle">
            Modular engagements that scale with your ambitions—tailored for teams ready to glow brighter, move faster, and
            deliver jaw-dropping experiences.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="glass-panel glass-dark relative overflow-hidden p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-neon-500/10 blur-3xl" />
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden>
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
