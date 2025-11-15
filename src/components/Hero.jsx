const stats = [
  { label: 'Terserap Industri', value: '92%' },
  { label: 'Mentor Aktif', value: '18+' },
  { label: 'Jam Live Session', value: '120+' },
];

const highlights = [
  'Mentoring 1:1 setiap minggu',
  'Kurikulum real project',
  'Career support hingga hired',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-28" id="top">
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-70" aria-hidden />
      <div className="absolute -top-40 -left-32 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-skyglow/10 blur-3xl" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl lg:w-3/5">
          <div className="eyebrow">Bootcamp UI/UX & Product</div>
          <h1 className="mt-6 text-4xl font-display font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Bangun portfolio kelas dunia dan raih karier product designer impianmu
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Lytbox-inspired cohort by LP Pondok Programming. Belajar langsung dari praktisi senior yang memimpin produk digital
            terbesar di Asia Tenggara. Kami siapkan kurikulum, komunitas, dan coaching personal agar kamu siap bersaing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="glow-button text-sm" href="#contact">
              Daftar Sekarang
            </a>
            <a className="outline-button" href="#services">
              Lihat Kurikulum
            </a>
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a.75.75 0 010 1.06l-6.363 6.364a.75.75 0 01-1.061 0L3.296 7.73a.75.75 0 111.06-1.06L9.75 12.06l5.894-5.894a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-2/5">
          <div className="glass-panel glass-dark relative overflow-hidden p-8">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-12 h-40 w-40 rounded-full bg-skyglow/20 blur-3xl" aria-hidden />
            <div className="relative space-y-6">
              <div>
                <span className="pill mb-3 inline-flex">Cohort Juli 2025</span>
                <h2 className="text-2xl font-semibold text-white">Next intake dibuka</h2>
                <p className="mt-3 text-sm text-white/60">
                  Batch terbatas untuk 35 peserta. Seleksi berdasarkan portofolio & motivasi belajar.
                </p>
              </div>
              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Durasi</span>
                  <span className="font-medium text-white">12 minggu</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Format</span>
                  <span className="font-medium text-white">Live online + studio project</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Commitment</span>
                  <span className="font-medium text-white">6-8 jam / minggu</span>
                </div>
              </div>
              <dl className="grid grid-cols-3 gap-4 pt-4 text-left text-sm">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3">
                    <dt className="text-white/50">{stat.label}</dt>
                    <dd className="mt-2 text-xl font-semibold text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className="outline-button w-full justify-center text-sm"
              >
                Konsultasi dengan tim kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
