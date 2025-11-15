const pillars = [
  {
    title: 'Mindset Produk',
    description:
      'Framework berpikir product-led dengan studi kasus dari perusahaan teknologi terbesar untuk membantu kamu membuat keputusan berbasis data.',
  },
  {
    title: 'Experience Design',
    description:
      'End-to-end UX research, journey mapping, dan usability testing yang langsung diterapkan ke proyek nyata.',
  },
  {
    title: 'Visual System',
    description:
      'Kuasai UI modern, design system, dan prototyping interaktif menggunakan Figma & alat kolaborasi terbaru.',
  },
  {
    title: 'Career Accelerator',
    description:
      'Personal branding, storytelling portfolio, dan mock interview bersama mentor hiring manager agar siap masuk industri.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-grid-brand opacity-70" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <div className="eyebrow">Kenapa Pondok Academy</div>
            <h2 className="section-title text-white">
              Ekosistem belajar yang memadukan studio profesional dan komunitas kolaboratif
            </h2>
            <p className="section-subtitle">
              Kami tidak sekadar memberikan materi. Kamu akan difasilitasi untuk membangun case study kuat, presentasi stakeholder,
              hingga simulasi product review layaknya di perusahaan unicorn. Semua dibimbing langsung oleh mentor aktif.
            </p>
            <div className="glass-panel glass-dark p-8 text-sm text-white/70">
              <p>
                “Pendekatan kami terinspirasi dari Lytbox Academy dengan sentuhan lokal. Fokus pada praktek intensif, cohort kecil,
                dan feedback real-time agar setiap peserta berkembang maksimal.”
              </p>
              <div className="mt-6 flex items-center gap-4 text-white/60">
                <div className="h-12 w-12 rounded-full bg-white/10" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white">Fayza Rachman</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Program Director</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="glass-panel glass-dark flex h-full flex-col gap-3 p-6">
                <div className="h-10 w-10 rounded-full bg-brand-500/20" aria-hidden />
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm text-white/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
