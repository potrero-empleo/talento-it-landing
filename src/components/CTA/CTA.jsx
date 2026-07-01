import { useState } from "react";
import { contactEmail } from "../../data/contactData";
import { candidateSignupNote, companySignupSteps } from "../../data/ctaData";

const initialForm = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  website: "",
  message: "",
};

export default function CTA() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const validPhone = (v) => /^[\d\s()+-]{8,}$/.test(v.trim());
  const validWebsite = (v) => {
    try {
      const parsed = new URL(v.trim());
      return ["http:", "https:"].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  const validateField = (name, value) => {
    const trimmed = value.trim();

    switch (name) {
      case "company":
        if (!trimmed) return "Completa el nombre de la empresa.";
        return "";
      case "contact":
        if (!trimmed) return "Completa la persona de contacto.";
        return "";
      case "email":
        if (!trimmed) return "Completa un email de contacto.";
        if (!validEmail(trimmed)) return "Ingresa un email valido.";
        return "";
      case "phone":
        if (trimmed && !validPhone(trimmed)) {
          return "Ingresa un telefono valido o dejalo vacio.";
        }
        return "";
      case "website":
        if (trimmed && !validWebsite(trimmed)) {
          return "Ingresa una URL completa, por ejemplo https://tuempresa.com.";
        }
        return "";
      default:
        return "";
    }
  };

  const validateForm = (values) =>
    Object.entries(values).reduce((acc, [name, value]) => {
      const error = validateField(name, value);
      if (error) {
        acc[name] = error;
      }
      return acc;
    }, {});

  const onChange = (e) => {
    const { name, value } = e.target;
    if (status && status !== "sending") {
      setStatus(null);
    }
    setForm((s) => ({ ...s, [name]: value }));
    if (touched[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }));
    }
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setTouched(
        Object.keys(initialForm).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      setErrors(nextErrors);
      setStatus("error");
      const firstInvalidField = Object.keys(nextErrors)[0];
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    setIsSubmitting(true);
    setStatus("sending");
    setErrors({});

    const subject = encodeURIComponent(`Inscripcion empresa - ${form.company}`);
    const body = encodeURIComponent(
      [
        `Empresa: ${form.company}`,
        `Contacto: ${form.contact}`,
        `Email: ${form.email}`,
        `Telefono: ${form.phone}`,
        `Web: ${form.website}`,
        "",
        "Mensaje:",
        form.message,
      ].join("\n")
    );

    const mailtoUrl = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      window.location.href = mailtoUrl;
      setTouched({});
      setStatus("sent");
      setIsSubmitting(false);
    }, 500);
  };

  const fieldClassName =
    "w-full rounded-xl border border-[#2b2b2b] bg-[#161616] px-4 py-3 text-white placeholder:text-[#666666] transition-all duration-200 hover:border-[#3a3a3a] focus:border-[#C8D400]/60 focus:outline-none focus:ring-2 focus:ring-[#C8D400]/15";

  const trustNotes = [
    "Participacion sin costo para tu empresa",
    "Acompanamiento del equipo durante la carga",
    "Contacto posterior con los perfiles interesados",
  ];

  const getFieldState = (name) => {
    const hasError = Boolean(touched[name] && errors[name]);
    return {
      hasError,
      fieldClassName: `${fieldClassName} focus-ring ${
        hasError
          ? "border-rose-500/85 bg-rose-500/5 pr-11 hover:border-rose-400 focus:border-rose-400 focus:ring-rose-500/15"
          : ""
      }`,
      labelClassName: `mb-2 block text-sm font-medium ${
        hasError ? "text-rose-300" : "text-[#d1d1d1]"
      }`,
    };
  };

  return (
    <section
      id="inscribite"
      className="bg-[#0b0b0b] py-16 md:py-24"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="layout-container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 font-['Chakra_Petch'] text-[0.78rem] uppercase tracking-[0.16em] text-white after:h-px after:w-10 after:bg-white/40 after:content-['']">
              quiero sumar mi empresa
            </p>
            <h2 className="mb-4 font-['Chakra_Petch'] text-[clamp(2.05rem,4vw,3.15rem)] font-bold leading-none tracking-[0.01em] text-white">
              Postula tu empresa
              <br />
              en pocos pasos
            </h2>
            <p className="max-w-[620px] text-[1rem] leading-[1.8] text-[#aaaaaa]">
              Completa el formulario y te contactamos para coordinar la carga de
              tu empresa en la feria. La participacion es gratuita y el proceso
              esta pensado para que sumarte sea rapido y simple.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {trustNotes.map((note) => (
                <span
                  key={note}
                  className="border border-[#2b2b2b] bg-[#121212] px-3 py-2 text-[0.74rem] uppercase tracking-[0.08em] text-[#cfcfcf]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-[#272727] bg-[#141414] px-5 py-5 md:px-6 md:py-6">
            <p className="font-['Chakra_Petch'] text-[0.88rem] uppercase tracking-[0.1em] text-white">
              Como se inscriben los candidatos
            </p>
            <p className="mt-3 text-[0.95rem] leading-[1.8] text-[#9c9c9c]">
              {candidateSignupNote}
            </p>
          </div>
        </div>

        <div className="mb-10 grid gap-0.5 md:grid-cols-3">
          {companySignupSteps.map((item) => (
            <article
              key={item.step}
              className="relative border border-[#272727] bg-[#171717] px-5 py-6 md:px-6 md:py-7"
            >
              <div className="font-['Chakra_Petch'] text-[2.15rem] font-bold leading-none tracking-[0.02em] text-[#C8D400]">
                {item.step}
              </div>
              <h3 className="mt-5 font-['Chakra_Petch'] text-[1.12rem] font-semibold tracking-[0.01em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.93rem] leading-[1.8] text-[#909090]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="order-2 border border-[#272727] bg-[#121212] p-6 md:p-7 lg:order-1">
            <p className="font-['Chakra_Petch'] text-[0.84rem] uppercase tracking-[0.1em] text-white">
              Antes de enviar
            </p>
            <h3 className="mt-4 font-['Chakra_Petch'] text-[1.25rem] font-semibold tracking-[0.01em] text-white">
              Que conviene preparar
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="border-l border-[#C8D400]/45 pl-4">
                <p className="text-sm font-semibold text-white">Datos de la empresa</p>
                <p className="mt-1 text-sm leading-[1.75] text-[#909090]">
                  Nombre, sitio web y una breve referencia para identificar a tu organizacion.
                </p>
              </div>
              <div className="border-l border-[#C8D400]/45 pl-4">
                <p className="text-sm font-semibold text-white">Persona de contacto</p>
                <p className="mt-1 text-sm leading-[1.75] text-[#909090]">
                  Un referente para que podamos coordinar la participacion y dar seguimiento.
                </p>
              </div>
              <div className="border-l border-[#C8D400]/45 pl-4">
                <p className="text-sm font-semibold text-white">Mensaje adicional</p>
                <p className="mt-1 text-sm leading-[1.75] text-[#909090]">
                  Si queres, podes sumar contexto o comentarios utiles para el equipo.
                </p>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative order-1 overflow-hidden border border-[#272727] bg-[#111111] p-6 md:p-8 lg:order-2"
          >
            <div className="absolute left-0 top-0 h-0.5 w-full bg-[#C8D400]" />

            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-['Chakra_Petch'] text-[0.84rem] uppercase tracking-[0.1em] text-white">
                  Formulario de empresa
                </p>
                <h3 className="mt-3 font-['Chakra_Petch'] text-[1.45rem] font-semibold tracking-[0.01em] text-white">
                  Queremos conocerte
                </h3>
              </div>
              <p className="text-sm text-[#8d8d8d]">
                Los campos con * son obligatorios.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="company" className={getFieldState("company").labelClassName}>
                  Empresa *
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={getFieldState("company").fieldClassName}
                  placeholder="Ej. Accenture"
                  required
                  disabled={isSubmitting}
                  aria-invalid={getFieldState("company").hasError}
                  aria-describedby={getFieldState("company").hasError ? "company-error form-status" : "form-status"}
                  autoComplete="organization"
                />
                {getFieldState("company").hasError && (
                  <p id="company-error" className="mt-2 text-sm text-rose-300">
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact" className={getFieldState("contact").labelClassName}>
                  Contacto *
                </label>
                <input
                  id="contact"
                  name="contact"
                  value={form.contact}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={getFieldState("contact").fieldClassName}
                  placeholder="Nombre y apellido del referente"
                  required
                  disabled={isSubmitting}
                  aria-invalid={getFieldState("contact").hasError}
                  aria-describedby={getFieldState("contact").hasError ? "contact-error form-status" : "form-status"}
                  autoComplete="name"
                />
                {getFieldState("contact").hasError && (
                  <p id="contact-error" className="mt-2 text-sm text-rose-300">
                    {errors.contact}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={getFieldState("email").labelClassName}>
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={getFieldState("email").fieldClassName}
                  placeholder="talento@empresa.com"
                  required
                  disabled={isSubmitting}
                  aria-invalid={getFieldState("email").hasError}
                  aria-describedby={getFieldState("email").hasError ? "email-error form-status" : "form-status"}
                  autoComplete="email"
                />
                {getFieldState("email").hasError && (
                  <p id="email-error" className="mt-2 text-sm text-rose-300">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={getFieldState("phone").labelClassName}>
                  Telefono
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={getFieldState("phone").fieldClassName}
                  placeholder="+54 11 ..."
                  autoComplete="tel"
                  disabled={isSubmitting}
                  aria-invalid={getFieldState("phone").hasError}
                  aria-describedby={getFieldState("phone").hasError ? "phone-error form-status" : "form-status"}
                />
                {getFieldState("phone").hasError && (
                  <p id="phone-error" className="mt-2 text-sm text-rose-300">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="website" className={getFieldState("website").labelClassName}>
                  Sitio web
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={form.website}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={getFieldState("website").fieldClassName}
                  placeholder="https://tuempresa.com"
                  autoComplete="url"
                  disabled={isSubmitting}
                  aria-invalid={getFieldState("website").hasError}
                  aria-describedby={getFieldState("website").hasError ? "website-error form-status" : "form-status"}
                />
                {getFieldState("website").hasError && (
                  <p id="website-error" className="mt-2 text-sm text-rose-300">
                    {errors.website}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className={getFieldState("message").labelClassName}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  rows={5}
                  className={`${getFieldState("message").fieldClassName} resize-y`}
                  placeholder="Si quieres, comparte contexto adicional sobre tu empresa o sobre como les gustaria participar."
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 border-t border-[#222222] pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[#8d8d8d]">
                Te respondemos para coordinar la carga y dejar tu empresa activa
                en la feria.
              </p>

              <div className="flex w-full flex-col items-start gap-4 md:w-auto md:items-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="focus-ring inline-block w-full whitespace-nowrap rounded bg-[#C8D400] px-5 py-3 text-center font-['Chakra_Petch'] text-[0.9rem] font-bold uppercase tracking-[0.05em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#d9e600] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-[#C8D400] md:w-auto md:min-w-[245px]"
                >
                  {isSubmitting ? "Enviando correo..." : "Quiero sumar mi empresa"}
                </button>

                <p
                  id="form-status"
                  className="text-sm text-[#aaaaaa]"
                  aria-live={status === "error" ? "assertive" : "polite"}
                  aria-atomic="true"
                >
                  {status === "error" && (
                    <span role="alert" className="text-rose-400">
                      Revisa los campos marcados y corrige la informacion antes de enviar.
                    </span>
                  )}
                  {status === "sending" && (
                    <span role="status" className="text-[#C8D400]">
                      Enviando correo y preparando tu cliente de email...
                    </span>
                  )}
                  {status === "sent" && (
                    <span role="status" className="text-green-400">
                      Formulario enviado, se abrira tu cliente de correo.
                    </span>
                  )}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
