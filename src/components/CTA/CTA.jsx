import React, { useState } from 'react';

export default function CTA() {
  const [form, setForm] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // null | 'error' | 'sent'

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validEmail = (v) => /\S+@\S+\.\S+/.test(v);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.company.trim() || !form.contact.trim() || !validEmail(form.email)) {
      setStatus('error');
      return;
    }

    // Build mailto fallback
    const subject = `Inscripción empresa - ${form.company}`;
    const body = `Empresa: ${form.company}%0D%0AContacto: ${form.contact}%0D%0AEmail: ${form.email}%0D%0ATeléfono: ${form.phone}%0D%0AWeb: ${form.website}%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(
      form.message
    )}`;

    // Try to POST to an API endpoint if you have one (uncomment and configure)
    // fetch('/api/company-signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    //   .then(() => setStatus('sent'))
    //   .catch(() => {
    //     // fallback to mailto if network fails
    //     window.location.href = `mailto:hola@potrerodigital.org?subject=${encodeURIComponent(subject)}&body=${body}`;
    //     setStatus('sent');
    //   });

    // Mailto fallback (safe, explicit, no server needed)
    window.location.href = `mailto:hola@potrerodigital.org?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section id="inscribite" className="bg-[#0b0b0b] py-12 px-6 md:px-14" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-3 font-['Chakra_Petch'] text-2xl md:text-[clamp(1.5rem,3vw,2rem)] font-bold text-white text-center">
          Inscribí tu empresa
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-center text-[#aaaaaa]">
          Completá el siguiente formulario para que podamos contactarte y sumar a tu empresa al programa. La inscripción es gratuita.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 text-sm text-[#cccccc]">Empresa *</label>
            <input
              name="company"
              value={form.company}
              onChange={onChange}
              className="w-full rounded-md border border-[#2b2b2b] bg-[#111111] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C8D400]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#cccccc]">Contacto *</label>
            <input
              name="contact"
              value={form.contact}
              onChange={onChange}
              className="w-full rounded-md border border-[#2b2b2b] bg-[#111111] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C8D400]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#cccccc]">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="w-full rounded-md border border-[#2b2b2b] bg-[#111111] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C8D400]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[#cccccc]">Teléfono</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="w-full rounded-md border border-[#2b2b2b] bg-[#111111] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C8D400]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-sm text-[#cccccc]">Sitio web</label>
            <input
              name="website"
              value={form.website}
              onChange={onChange}
              className="w-full rounded-md border border-[#2b2b2b] bg-[#111111] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C8D400]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-sm text-[#cccccc]">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              className="w-full rounded-md border border-[#2b2b2b] bg-[#111111] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C8D400]"
            />
          </div>

          <div className="md:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="inline-block rounded bg-[#C8D400] px-6 py-3 font-['Chakra_Petch'] font-bold uppercase tracking-[0.08em] text-[#111111] hover:bg-[#d9e600] transition"
            >
              Inscribir empresa
            </button>

            <p className="text-sm text-[#aaaaaa]">
              {status === 'error' && <span className="text-rose-400">Revisá los campos requeridos.</span>}
              {status === 'sent' && <span className="text-green-400">Formulario enviado — se abrirá tu cliente de correo.</span>}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

