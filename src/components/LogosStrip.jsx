const logos = ['Tokopedia', 'Gojek', 'Ruangguru', 'Traveloka', 'Bukalapak', 'DANA'];

export function LogosStrip() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="eyebrow mb-6">Mentor kami berasal dari</div>
        <div className="glass-panel glass-dark flex flex-wrap items-center justify-between gap-6 px-8 py-6 text-sm text-white/60">
          {logos.map((logo) => (
            <span key={logo} className="uppercase tracking-[0.35em] text-white/40">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
