import { useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/xbjnkqjj';

const initialForm = {
  name: '',
  email: '',
  project: '',
};

const benefits = [
  'Sesi konsultasi kurikulum 20 menit',
  'Analisa portfolio & career path',
  'Diskon early bird untuk cohort berikutnya',
];

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Nama wajib diisi.';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!form.project.trim()) {
      newErrors.project = 'Ceritakan tujuan kamu mengikuti cohort ini.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      setStatus('submitting');
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          project: form.project,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div className="space-y-6">
            <div className="eyebrow">Cek ketersediaan slot</div>
            <h2 className="section-title text-white">Bergabung dengan cohort terbaru atau konsultasi dengan tim kami</h2>
            <p className="section-subtitle">
              Isi form berikut dan tim admissions kami akan menghubungi dalam 2x24 jam untuk membantu menentukan jalur belajar
              yang paling relevan dengan tujuan karier kamu.
            </p>
            <div className="grid gap-4 text-sm text-white/70">
              {benefits.map((benefit) => (
                <div key={benefit} className="glass-panel glass-dark flex items-center gap-4 p-4">
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a.75.75 0 010 1.06l-6.363 6.364a.75.75 0 01-1.061 0L3.296 7.73a.75.75 0 111.06-1.06L9.75 12.06l5.894-5.894a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
            <div className="glass-panel glass-dark p-6 text-sm text-white/60">
              <p className="text-white/80">Jadwal sesi info cohort:</p>
              <p className="mt-2 text-lg font-semibold text-white">Setiap Selasa & Kamis · 19.30 WIB</p>
              <p className="mt-2">Kamu akan menerima email berisi link Zoom & panduan persiapan.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-panel glass-dark space-y-6 p-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80">
                Nama lengkap
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                placeholder="Nama kamu"
              />
              {errors.name && <p className="mt-2 text-xs text-accent">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                placeholder="email@domain.com"
              />
              {errors.email && <p className="mt-2 text-xs text-accent">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-white/80">
                Ceritakan tujuanmu
              </label>
              <textarea
                id="project"
                name="project"
                rows="5"
                value={form.project}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                placeholder="Ceritakan background, target karier, atau pertanyaan seputar cohort."
              />
              {errors.project && <p className="mt-2 text-xs text-accent">{errors.project}</p>}
            </div>
            <button
              type="submit"
              className="glow-button w-full justify-center px-8 py-3 text-base font-semibold text-midnight"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Mengirim...' : 'Kirim & jadwalkan sesi'}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm text-brand-200">Terima kasih! Kami akan menghubungi melalui email secepatnya.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-accent">Terjadi kendala jaringan. Silakan coba lagi atau email hello@lp-pondok.dev</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
