import { useState } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

/* ───── DATA ───── */

const VALUE_PROPS = [
  { title: "Cumplimiento Normativo", desc: "Todos los cursos acreditados por OS-10, SPD y SENCE. Tu empresa cumple la ley sin trámites adicionales.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Reportes de Avance", desc: "Dashboard con el progreso de cada alumno en tiempo real. Sabes quién avanza y quién necesita seguimiento.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { title: "Tarifas Corporativas", desc: "Precios preferenciales por volumen. Mientras más personas capacitas, mejor es tu tarifa.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Ejecutivo Dedicado", desc: "Un ejecutivo de cuenta asignado a tu empresa que coordina todo el proceso de principio a fin.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
];

const STEPS = [
  { num: "01", title: "Cotización", desc: "Cuéntanos cuántas personas necesitas capacitar y en qué cursos." },
  { num: "02", title: "Inscripción", desc: "Recibimos la nómina de alumnos y activamos los accesos al aula." },
  { num: "03", title: "Capacitación", desc: "Tu equipo estudia 24/7. Tú recibes reportes de avance periódicos." },
  { num: "04", title: "Certificación", desc: "Diplomas verificables con código QR para cada alumno aprobado." },
];

const PLANS = [
  {
    name: "Básico",
    range: "5 – 15 alumnos",
    features: ["Acceso al aula virtual 24/7", "Diploma con código QR", "Soporte por email", "Reporte final de avance"],
    highlight: false,
  },
  {
    name: "Profesional",
    range: "16 – 50 alumnos",
    features: ["Todo lo del plan Básico", "Ejecutivo de cuenta dedicado", "Reportes semanales de avance", "Facturación con/sin SENCE", "Onboarding personalizado"],
    highlight: true,
  },
  {
    name: "Enterprise",
    range: "51+ alumnos",
    features: ["Todo lo del plan Profesional", "Tarifas preferenciales máximas", "Cursos a medida", "Dashboard corporativo", "Soporte prioritario 24/7"],
    highlight: false,
  },
];

const CLIENT_LOGOS = ["Prosegur", "Securitas", "G4S", "Brink's", "Loomis", "Grupo SOS"];

const FORM_FIELDS = [
  { label: "Nombre completo", type: "text" },
  { label: "Empresa", type: "text" },
  { label: "Correo corporativo", type: "email" },
  { label: "Teléfono", type: "tel" },
  { label: "N° de personas a capacitar", type: "text" },
];

/* ───── PAGE ───── */

export default function EmpresasPage() {
  const fadeRef1 = useFadeIn();
  const fadeRef2 = useFadeIn();
  const fadeRef3 = useFadeIn();
  const fadeRef4 = useFadeIn();

  return (
    <main>
      {/* Hero */}
      <section className="bg-petrol text-surface-white px-6 py-16 lg:px-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/50">/</span>
            <span className="font-semibold">Empresas</span>
          </nav>

          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="flex-1 mb-12 lg:mb-0">
              <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-4 animate-fade-up">SOLUCIONES CORPORATIVAS</p>
              <h1 className="font-heading text-4xl lg:text-[3.25rem] tracking-wide leading-[1.05] mb-5 animate-fade-up">
                CAPACITA A TU EQUIPO CON RESPALDO OFICIAL
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-8 animate-fade-up-d1">
                Planes corporativos con seguimiento por alumno, reportes de avance y certificación acreditada por OS-10, SPD y SENCE. Cumple la normativa sin complicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-d2">
                <a href="#cotizacion" className="bg-gold text-petrol font-bold px-8 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors text-center">
                  Solicitar Cotización
                </a>
                <Link to="/cursos" className="border-2 border-white/25 text-white/70 font-semibold px-8 py-3.5 rounded-md text-base hover:border-white/50 hover:text-white transition-colors text-center">
                  Ver Cursos
                </Link>
              </div>
            </div>

            <div className="flex-1 max-w-md animate-fade-up-d1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15.000+", label: "Alumnos capacitados" },
                  { value: "200+", label: "Empresas confían en nosotros" },
                  { value: "100%", label: "Cursos acreditados OS-10" },
                  { value: "24/7", label: "Acceso al aula virtual" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-petrol-soft rounded-lg p-6 border border-petrol-border">
                    <p className="font-heading text-3xl text-gold mb-1">{stat.value}</p>
                    <p className="text-white/40 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-surface-alt py-20 px-6">
        <div ref={fadeRef1} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-3">POR QUÉ ELEGIRNOS</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">LO QUE TU EMPRESA NECESITA</h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">Nos encargamos de la capacitación para que tú te enfoques en tu operación.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUE_PROPS.map((prop) => (
              <div key={prop.title} className="bg-surface-white rounded-xl p-7 border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={prop.icon} /></svg>
                </div>
                <h3 className="font-semibold text-base mb-2">{prop.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-petrol text-surface-white py-20 px-6">
        <div ref={fadeRef2} className="max-w-5xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-3">PROCESO SIMPLE</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">DE LA COTIZACIÓN A LA CERTIFICACIÓN</h2>
            <p className="text-white/50 text-sm">En 4 pasos tu equipo queda capacitado y certificado.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-gold flex items-center justify-center mb-4">
                  <span className="font-heading text-xl text-gold">{step.num}</span>
                </div>
                <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-6">
        <div ref={fadeRef3} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-3">PLANES CORPORATIVOS</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">ELIGE EL PLAN PARA TU EQUIPO</h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">Todos los planes incluyen acceso 24/7, diploma verificable y soporte dedicado.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-petrol text-surface-white border-2 border-petrol"
                    : "bg-surface-white border border-border"
                }`}
              >
                {plan.highlight && (
                  <span className="self-start text-[11px] font-semibold tracking-wider text-white bg-teal rounded px-3 py-1 mb-4">
                    MÁS POPULAR
                  </span>
                )}
                <h3 className="font-heading text-2xl tracking-wide mb-1">{plan.name.toUpperCase()}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? "text-white/50" : "text-text-secondary"}`}>{plan.range}</p>

                <div className={`border-t mb-6 ${plan.highlight ? "border-petrol-border" : "border-border"}`} />

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm">
                      <span className="text-teal font-bold text-xs">✓</span>
                      <span className={plan.highlight ? "text-white/80" : ""}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cotizacion"
                  className={`block text-center font-bold py-3 rounded-md transition-colors ${
                    plan.highlight
                      ? "bg-gold text-petrol hover:bg-gold-light"
                      : "bg-gold text-petrol hover:bg-gold-light"
                  }`}
                >
                  Solicitar Cotización
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-surface-alt py-12 px-6 border-y border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[1.5px] text-text-secondary mb-8">EMPRESAS QUE CONFÍAN EN NOSOTROS</p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {CLIENT_LOGOS.map((name) => (
              <span key={name} className="font-heading text-xl text-text-secondary/30 tracking-wide">{name.toUpperCase()}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="cotizacion" className="bg-petrol text-surface-white py-20 px-6">
        <div ref={fadeRef4} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center opacity-0 translate-y-6 transition-all duration-700">
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold tracking-[1.5px] text-teal">CONTACTO EMPRESAS</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide leading-[1.05]">SOLICITA TU COTIZACIÓN</h2>
            <p className="text-white/50 leading-relaxed max-w-lg">
              Completa el formulario y te contactaremos en menos de 24 horas con una propuesta a la medida de tu empresa.
            </p>
            <ul className="space-y-3">
              {["Respuesta en menos de 24 horas", "Cotización sin compromiso", "Facturación empresa"].map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/60 text-sm">
                  <span className="text-gold">→</span> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-md bg-petrol-soft rounded-xl p-8 space-y-5">
            <h3 className="font-bold text-xl">Solicita una cotización</h3>
            <p className="text-white/50 text-sm">Todos los campos son obligatorios.</p>
            {/* TODO: Conectar a endpoint real de backend */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {FORM_FIELDS.map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={`Ingresa ${field.label.toLowerCase()}`}
                    required
                    className="w-full bg-petrol text-white placeholder-white/25 text-sm rounded-md px-4 py-2.5 border border-petrol-border focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              ))}
              <button type="submit" className="w-full bg-gold text-petrol font-bold py-3 rounded-md hover:bg-gold-light transition-colors">
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-surface-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl tracking-wide mb-4">¿LISTO PARA CAPACITAR A TU EQUIPO?</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Más de 200 empresas ya confían en nosotros. Solicita tu cotización hoy y comienza a certificar a tu personal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#cotizacion" className="bg-gold text-petrol font-bold px-8 py-3.5 rounded-md hover:bg-gold-light transition-colors">
              Solicitar Cotización
            </a>
            <a
              href="https://wa.me/569XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
