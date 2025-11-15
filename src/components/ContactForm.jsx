import { useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/xbjnkqjj';

const initialForm = {
  name: '',
  email: '',
  project: '',
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Please share your name so we know who to reply to.';
    }
    if (!form.email.trim()) {
      newErrors.email = 'We need a valid email to continue the conversation.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'That email does not look quite right—mind checking it?';
    }
    if (!form.project.trim()) {
      newErrors.project = 'Tell us a little about the initiative you have in mind.';
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
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <h2 className="section-title text-glow">Let’s architect your glow</h2>
            <p className="section-subtitle">
              Share the spark that brought you here. We’ll align on goals, scope next steps, and assemble a team tailored to your
              vision.
            </p>
            <div className="mt-10 grid gap-6 text-sm text-slate-300">
              <div className="glass-panel glass-dark p-6">
                <h3 className="text-lg font-semibold text-white">Engagement timeline</h3>
                <p className="mt-3">2-4 weeks for discovery & prototyping · 6-12 weeks for MVP launch</p>
              </div>
              <div className="glass-panel glass-dark p-6">
                <h3 className="text-lg font-semibold text-white">Core stack</h3>
                <p className="mt-3">React · Three.js · Tailwind · TypeScript · Node/Edge · Generative AI</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-panel glass-dark space-y-6 p-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-neon-500 focus:outline-none focus:ring-2 focus:ring-neon-500/40"
                placeholder="Ada Lovelace"
              />
              {errors.name && <p className="mt-2 text-xs text-pink-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-neon-500 focus:outline-none focus:ring-2 focus:ring-neon-500/40"
                placeholder="you@visionary.co"
              />
              {errors.email && <p className="mt-2 text-xs text-pink-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-slate-200">
                Tell us about the project
              </label>
              <textarea
                id="project"
                name="project"
                rows="5"
                value={form.project}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-neon-500 focus:outline-none focus:ring-2 focus:ring-neon-500/40"
                placeholder="Share goals, timeline, and the kind of glow you are chasing..."
              />
              {errors.project && <p className="mt-2 text-xs text-pink-400">{errors.project}</p>}
            </div>
            <button
              type="submit"
              className="glow-button w-full justify-center px-8 py-3 text-base font-semibold text-slate-950"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Send the brief'}
            </button>
            {status === 'success' && (
              <p className="text-center text-sm text-neon-300">Message received! We will respond within 2 business days.</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-pink-400">
                Something glitched on the network. Could you try again or email hello@lp-pondok.dev?
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
