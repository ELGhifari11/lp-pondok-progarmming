export function About() {
  const pillars = [
    {
      title: 'Strategy x Story',
      description:
        'We connect brand mythology to measurable roadmaps, aligning stakeholder narratives with product north stars.',
    },
    {
      title: 'Design Systems',
      description:
        'Component libraries, motion blueprints, and accessibility tokens keep teams shipping with a cohesive glow.',
    },
    {
      title: 'Emerging Tech',
      description:
        'Spatial, voice, and AI prototypes crafted to feel inevitable, not experimental. Built to evolve with your org.',
    },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="section-title text-glow">Designing in the glow of tomorrow</h2>
            <p className="section-subtitle">
              Our studio operates where neon light meets human empathy. From venture-backed startups to enterprise labs, we
              ship experiences that feel cinematic, inclusive, and impossibly fast.
            </p>
            <div className="mt-10 grid gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="glass-panel glass-dark p-6">
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel glass-dark h-full p-10">
            <div className="space-y-6 text-sm text-slate-300">
              <p>
                We are a distributed team of strategists, designers, and engineers with roots in gaming, fintech, and immersive
                media. Our approach blends cultural research with rapid prototyping to produce interfaces that feel alive.
              </p>
              <p>
                With every engagement we facilitate lightning workshops, align metrics, and integrate with your squads. The
                result? Launches that resonate beyond the screen and systems ready to scale.
              </p>
              <p className="text-neon-400">
                Glow boldly, iterate relentlessly, and let every surface tell your story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
