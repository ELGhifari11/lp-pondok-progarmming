import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mx-auto w-fit">Cerita alumni</div>
          <h2 className="section-title text-white">Transformasi karier nyata dari cohort sebelumnya</h2>
          <p className="section-subtitle">
            Mereka datang dari latar belakang berbeda—developer, mahasiswa, bahkan marketing. Dengan pendekatan personal, mereka
            berhasil memperkuat portfolio dan diterima di perusahaan impian.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="glass-panel glass-dark flex h-full flex-col gap-6 p-8 text-left">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <figcaption className="text-lg font-semibold text-white">{testimonial.name}</figcaption>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-white/70">“{testimonial.quote}”</blockquote>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                Cohort sukses
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
