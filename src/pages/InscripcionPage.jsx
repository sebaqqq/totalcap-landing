import { useState } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";
import { COURSES } from "../data/courses";

/* ───── DATA ───── */

const AVAILABLE_COURSES = COURSES.filter((c) => c.status === "Disponible");

const PAYMENT_METHODS = [
  { name: "Transferencia bancaria", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { name: "Tarjeta de débito", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { name: "Tarjeta de crédito", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
  { name: "Cuotas sin interés", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
];

const GUARANTEES = [
  "Acceso inmediato al aula virtual",
  "Diploma con código QR verificable",
  "Certificación acreditada OS-10, SPD y SENCE",
  "Soporte durante todo el curso",
];

/* ───── PAGE ───── */

export default function InscripcionPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const fadeRef1 = useFadeIn();
  const fadeRef2 = useFadeIn();

  const selected = AVAILABLE_COURSES.find((c) => c.title === selectedCourse);

  return (
    <main>
      {/* Hero */}
      <section className="bg-petrol text-surface-white px-6 py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/50">/</span>
            <span className="font-semibold">Inscripción</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl lg:text-5xl tracking-wide mb-5 animate-fade-up">
              INSCRÍBETE Y COMIENZA HOY
            </h1>
            <p className="text-white/50 text-lg leading-relaxed animate-fade-up-d1">
              Completa tus datos, elige tu curso y en minutos recibes tu acceso al aula virtual. Sin trámites, sin esperas.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 px-6">
        <div ref={fadeRef1} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="lg:flex lg:gap-16 lg:items-start">
            {/* Form */}
            <div className="flex-1 mb-12 lg:mb-0">
              {/* Step 1: Course selection */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white text-sm font-bold">1</div>
                  <h2 className="font-bold text-lg">Elige tu curso</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {AVAILABLE_COURSES.map((course) => (
                    <button
                      key={course.title}
                      onClick={() => setSelectedCourse(course.title)}
                      className={`text-left p-4 rounded-lg border transition-all ${
                        selectedCourse === course.title
                          ? "border-teal bg-teal/5 ring-2 ring-teal/20"
                          : "border-border bg-surface-white hover:border-gold/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-sm mb-1">{course.title}</p>
                          <p className="text-xs text-text-secondary">{course.hours} · 100% Online</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedCourse === course.title ? "border-teal bg-teal" : "border-border"
                        }`}>
                          {selectedCourse === course.title && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Personal info */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white text-sm font-bold">2</div>
                  <h2 className="font-bold text-lg">Tus datos personales</h2>
                </div>

                {/* TODO: Conectar a endpoint real de backend */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">Nombre completo</label>
                      <input type="text" placeholder="Juan Andrés Pérez Soto" required className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">RUT</label>
                      <input type="text" placeholder="12.345.678-9" required className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">Correo electrónico</label>
                      <input type="email" placeholder="tu@correo.cl" required className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">Teléfono</label>
                      <input type="tel" placeholder="+56 9 1234 5678" required className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Ciudad</label>
                    <input type="text" placeholder="Santiago" required className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                  </div>
                </form>
              </div>

              {/* Step 3: Payment */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white text-sm font-bold">3</div>
                  <h2 className="font-bold text-lg">Medio de pago</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {PAYMENT_METHODS.map((pm) => (
                    <div key={pm.name} className="flex items-center gap-3 p-4 rounded-lg bg-surface-white border border-border">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pm.icon} /></svg>
                      </div>
                      <span className="text-sm font-medium">{pm.name}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gold text-petrol font-bold px-10 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors"
                >
                  Completar Inscripción
                </button>
                <p className="text-xs text-text-secondary mt-3">Al inscribirte aceptas los <a href="#" className="text-teal hover:underline">términos y condiciones</a> y la <a href="#" className="text-teal hover:underline">política de privacidad</a>.</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-96 lg:sticky lg:top-24 space-y-6">
              {/* Selected course summary */}
              <div className="bg-petrol rounded-xl p-7 text-surface-white">
                <h3 className="font-bold text-base mb-4">Resumen de inscripción</h3>
                {selected ? (
                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      <img src={selected.img} alt={selected.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">{selected.title}</p>
                        <p className="text-xs text-white/50 mt-1">{selected.hours} · 100% Online</p>
                      </div>
                    </div>
                    <div className="border-t border-petrol-border pt-4 space-y-3">
                      {[
                        ["Modalidad", "100% Online"],
                        ["Duración", selected.hours],
                        ["Acceso", "Inmediato"],
                        ["Diploma", "Con código QR verificable"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between text-sm">
                          <span className="text-white/40">{label}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-3xl mb-3">👆</p>
                    <p className="text-sm text-white/50">Selecciona un curso para ver el resumen.</p>
                  </div>
                )}
              </div>

              {/* Guarantees */}
              <div className="bg-surface-white rounded-xl p-7 border border-border">
                <h3 className="font-bold text-base mb-4">Lo que incluye tu inscripción</h3>
                <ul className="space-y-3">
                  {GUARANTEES.map((g) => (
                    <li key={g} className="flex items-center gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help */}
              <div className="bg-surface-alt rounded-xl p-7 border border-border text-center">
                <p className="text-sm text-text-secondary mb-3">¿Necesitas ayuda con tu inscripción?</p>
                <a
                  href="https://wa.me/569XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-surface-alt py-12 px-6 border-y border-border">
        <div ref={fadeRef2} className="max-w-4xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "15.000+", label: "Alumnos ya certificados" },
              { value: "4.8 ★", label: "Calificación Google" },
              { value: "10+", label: "Años acreditados" },
            ].map((m) => (
              <div key={m.label}>
                <p className="font-heading text-2xl text-petrol">{m.value}</p>
                <p className="text-xs text-text-secondary mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-petrol text-surface-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl tracking-wide mb-4">¿QUIERES CAPACITAR A TU EQUIPO?</h2>
          <p className="text-white/50 leading-relaxed mb-8">
            Si necesitas inscribir a varias personas, tenemos planes corporativos con tarifas preferenciales.
          </p>
          <Link to="/empresas" className="inline-block bg-gold text-petrol font-bold px-8 py-3.5 rounded-md hover:bg-gold-light transition-colors">
            Ver Planes Empresas
          </Link>
        </div>
      </section>
    </main>
  );
}
