import { useState } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";
import { FAQS } from "../data/faqs";

/* ───── DATA ───── */

const CONTACT_CHANNELS = [
  {
    title: "WhatsApp",
    desc: "Respuesta inmediata en horario laboral.",
    detail: "+56 9 XXXX XXXX",
    href: "https://wa.me/569XXXXXXXX",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z",
    cta: "Escríbenos",
    color: "bg-[#25D366]",
  },
  {
    title: "Correo electrónico",
    desc: "Para consultas formales o documentación.",
    detail: "contacto@[dominio].cl",
    href: "mailto:contacto@dominio.cl",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    cta: "Enviar correo",
    color: "bg-teal",
  },
  {
    title: "Teléfono",
    desc: "Lunes a viernes, 9:00 a 18:00 hrs.",
    detail: "+56 9 XXXX XXXX",
    href: "tel:+569XXXXXXXX",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    cta: "Llamar",
    color: "bg-petrol",
  },
];

const OFFICE_INFO = [
  { label: "Dirección", value: "Santiago, Chile", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  { label: "Horario", value: "Lunes a Viernes, 9:00 – 18:00", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Acreditaciones", value: "OS-10 · SPD · SENCE · ASR", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

/* ───── PAGE ───── */

export default function ContactoPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const fadeRef1 = useFadeIn();
  const fadeRef2 = useFadeIn();
  const fadeRef3 = useFadeIn();

  return (
    <main>
      {/* Hero */}
      <section className="bg-petrol text-surface-white px-6 py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/50">/</span>
            <span className="font-semibold">Contacto</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl lg:text-5xl tracking-wide mb-5 animate-fade-up">
              CONVERSEMOS
            </h1>
            <p className="text-white/50 text-lg leading-relaxed animate-fade-up-d1">
              ¿Tienes dudas sobre un curso, necesitas una cotización corporativa o quieres verificar un diploma? Elige el canal que prefieras.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-6">
        <div ref={fadeRef1} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="grid lg:grid-cols-3 gap-6">
            {CONTACT_CHANNELS.map((ch) => (
              <div key={ch.title} className="bg-surface-white rounded-xl border border-border p-8 flex flex-col">
                <div className={`w-12 h-12 rounded-lg ${ch.color} flex items-center justify-center mb-5`}>
                  <svg className="w-6 h-6 text-white" fill={ch.title === "WhatsApp" ? "currentColor" : "none"} viewBox="0 0 24 24" stroke={ch.title === "WhatsApp" ? "none" : "currentColor"} strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={ch.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{ch.title}</h3>
                <p className="text-sm text-text-secondary mb-2">{ch.desc}</p>
                <p className="text-sm font-semibold text-petrol mb-6">{ch.detail}</p>
                <a
                  href={ch.href}
                  target={ch.title === "WhatsApp" ? "_blank" : undefined}
                  rel={ch.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                >
                  {ch.cta} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Office Info */}
      <section id="formulario" className="bg-surface-alt py-20 px-6">
        <div ref={fadeRef2} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="lg:flex lg:gap-16 lg:items-start">
            {/* Form */}
            <div className="flex-1 mb-12 lg:mb-0">
              <h2 className="font-heading text-3xl tracking-wide mb-3">ENVÍANOS TU CONSULTA</h2>
              <p className="text-text-secondary text-sm mb-8 max-w-md">Completa el formulario y te responderemos en menos de 24 horas.</p>

              {/* TODO: Conectar a endpoint real de backend */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "Nombre completo", type: "text", full: false },
                    { label: "Correo electrónico", type: "email", full: false },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.label}
                        required
                        className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Asunto</label>
                    <select
                      required
                      className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-teal/40"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option>Consulta sobre un curso</option>
                      <option>Cotización empresas</option>
                      <option>Verificación de diploma</option>
                      <option>Soporte aula virtual</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">Mensaje</label>
                  <textarea
                    rows={5}
                    placeholder="Escribe tu consulta aquí..."
                    required
                    className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gold text-petrol font-bold px-8 py-3 rounded-md hover:bg-gold-light transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="lg:w-80 space-y-6">
              <div className="bg-petrol rounded-xl p-8 text-surface-white">
                <h3 className="font-bold text-lg mb-6">Información</h3>
                <div className="space-y-5">
                  {OFFICE_INFO.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-petrol-border flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-white/40 mb-0.5">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface-white rounded-xl p-8 border border-border">
                <h3 className="font-bold text-base mb-3">¿Eres empresa?</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Tenemos planes corporativos con tarifas preferenciales y ejecutivo dedicado.
                </p>
                <Link to="/empresas" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors">
                  Ver planes empresas <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div ref={fadeRef3} className="max-w-3xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="font-heading text-3xl tracking-wide text-center mb-10">PREGUNTAS FRECUENTES</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden bg-surface-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-alt/50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <span className="text-xl text-text-secondary shrink-0 transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-surface-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl tracking-wide mb-4">¿PREFIERES QUE TE LLAMEMOS?</h2>
          <p className="text-white/90 leading-relaxed mb-8">
            Déjanos tu número en el formulario o escríbenos por WhatsApp y un asesor te contactará el mismo día.
          </p>
          <a
            href="https://wa.me/569XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-petrol font-bold px-8 py-3.5 rounded-md hover:bg-white/90 transition-colors"
          >
            <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
