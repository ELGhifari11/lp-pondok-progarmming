import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title text-glow">Voices from the glow</h2>
          <p className="section-subtitle">
            Our collaborators share how neon-fueled strategy and design elevated their launches.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="glass-panel glass-dark flex h-full flex-col gap-6 p-8 text-left">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full border border-neon-500/40 object-cover"
                />
                <div>
                  <figcaption className="text-lg font-semibold text-white">{testimonial.name}</figcaption>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-slate-300">
                “{testimonial.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
