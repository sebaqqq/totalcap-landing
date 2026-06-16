import { useState } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

/* ───── DATA ───── */

const ACCREDITATIONS = [
  {
    id: "os10",
    name: "OS-10",
    fullName: "Departamento de Seguridad Privada de Carabineros",
    desc: "OS-10 es la unidad de Carabineros de Chile encargada de fiscalizar, controlar y supervisar a las entidades de seguridad privada en el país. Toda persona que trabaje en seguridad privada debe contar con cursos acreditados por este organismo.",
    what: "Valida que nuestros programas cumplen con los contenidos mínimos exigidos por la normativa para el ejercicio de la seguridad privada en Chile.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    id: "spd",
    name: "SPD",
    fullName: "Subsecretaría de Prevención del Delito",
    desc: "La SPD, dependiente del Ministerio del Interior y Seguridad Pública, es la entidad que regula y registra a las empresas y trabajadores del rubro de seguridad privada en Chile.",
    what: "Certifica que nuestra OTEC cumple con los requisitos legales para impartir formación en seguridad privada, conforme al Decreto Supremo N° 93.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    id: "sence",
    name: "SENCE",
    fullName: "Servicio Nacional de Capacitación y Empleo",
    desc: "SENCE es el organismo del Estado de Chile encargado de promover y fiscalizar la capacitación laboral. Las empresas pueden utilizar la franquicia tributaria SENCE para financiar la capacitación de sus trabajadores.",
    what: "Permite que las empresas utilicen la franquicia tributaria para financiar los cursos de sus trabajadores, haciendo deducible el costo de capacitación.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
  {
    id: "asr",
    name: "ASR",
    fullName: "ASR Certificaciones",
    desc: "ASR es un organismo de certificación que verifica la calidad y cumplimiento de los procesos formativos. Su sello garantiza que los procedimientos de enseñanza y evaluación siguen estándares de calidad reconocidos.",
    what: "Certifica la calidad de nuestros procesos de enseñanza, evaluación y emisión de diplomas bajo estándares de mejora continua.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

const DIPLOMA_FEATURES = [
  { title: "Código QR único", desc: "Cada diploma incluye un código QR exclusivo que enlaza directamente al registro de verificación." },
  { title: "Firma electrónica avanzada", desc: "Validez legal conforme a la Ley 19.799 de Firma Electrónica. Garantiza integridad y autenticidad." },
  { title: "Verificación instantánea", desc: "Cualquier persona o empresa puede escanear el QR y confirmar en segundos que el diploma es auténtico." },
  { title: "Registro permanente", desc: "Los diplomas quedan registrados de forma permanente. No caducan ni pueden ser alterados." },
];

const LEGAL_REFS = [
  { law: "Decreto Supremo N° 93", desc: "Reglamento que establece los requisitos para la formación de guardias y personal de seguridad privada." },
  { law: "Ley 19.303", desc: "Ley sobre seguridad privada que regula las funciones y obligaciones del sector." },
  { law: "Ley 19.799", desc: "Ley de firma electrónica que respalda la validez legal de los diplomas digitales." },
  { law: "Estatuto SENCE", desc: "Normativa que regula la franquicia tributaria de capacitación para empresas." },
];

/* ───── PAGE ───── */

export default function AcreditacionesPage() {
  const [activeAccred, setActiveAccred] = useState("os10");
  const fadeRef1 = useFadeIn();
  const fadeRef2 = useFadeIn();
  const fadeRef3 = useFadeIn();

  const current = ACCREDITATIONS.find((a) => a.id === activeAccred);

  return (
    <main>
      {/* Hero */}
      <section className="bg-petrol text-surface-white px-6 py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/50">/</span>
            <span className="font-semibold">Acreditaciones</span>
          </nav>

          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="flex-1 mb-10 lg:mb-0">
              <h1 className="font-heading text-4xl lg:text-5xl tracking-wide mb-5 animate-fade-up">
                RESPALDO QUE SE VERIFICA
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-lg animate-fade-up-d1">
                No basta con decir que estamos acreditados. Acá te explicamos quién nos acredita, qué significa cada sello y por qué tu diploma tiene validez real.
              </p>
            </div>

            <div className="flex-1 max-w-sm animate-fade-up-d2">
              <div className="grid grid-cols-2 gap-3">
                {ACCREDITATIONS.map((a) => (
                  <div key={a.id} className="bg-petrol-soft rounded-lg p-5 border border-petrol-border text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={a.icon} /></svg>
                    </div>
                    <p className="font-heading text-lg text-gold">{a.name}</p>
                    <p className="text-[10px] text-white/40 mt-1 leading-tight">{a.fullName.split(" ").slice(0, 3).join(" ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Detail */}
      <section className="py-20 px-6">
        <div ref={fadeRef1} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-3">NUESTRAS ACREDITACIONES</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">QUIÉN NOS RESPALDA</h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">Selecciona una acreditación para conocer en detalle qué organismo la otorga y qué garantiza.</p>
          </div>

          <div className="lg:flex lg:gap-12 lg:items-start">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-3 mb-8 lg:mb-0 lg:w-56 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {ACCREDITATIONS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setActiveAccred(a.id)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-lg text-left whitespace-nowrap lg:whitespace-normal transition-all shrink-0 lg:w-full ${
                    activeAccred === a.id
                      ? "bg-petrol text-surface-white"
                      : "bg-surface-white border border-border hover:border-gold/40"
                  }`}
                >
                  <span className={`text-sm font-bold ${activeAccred === a.id ? "text-gold" : "text-teal"}`}>{a.name}</span>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            {current && (
              <div className="flex-1 bg-surface-white rounded-xl border border-border p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={current.icon} /></svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl tracking-wide">{current.name}</h3>
                    <p className="text-sm text-text-secondary">{current.fullName}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-teal mb-2">QUÉ ES</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{current.desc}</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-xs font-semibold tracking-wider text-teal mb-2">QUÉ GARANTIZA</p>
                    <p className="text-sm leading-relaxed">{current.what}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Diploma Verification */}
      <section className="bg-petrol text-surface-white py-20 px-6">
        <div ref={fadeRef2} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="lg:flex lg:gap-16 lg:items-center">
            <div className="flex-1 mb-12 lg:mb-0">
              <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-3">DIPLOMAS VERIFICABLES</p>
              <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">TU DIPLOMA NO ES UN PDF CUALQUIERA</h2>
              <p className="text-white/50 leading-relaxed max-w-lg mb-8">
                Cada diploma que emitimos incluye tecnología de verificación que lo hace infalsificable y verificable por cualquier persona en cualquier momento.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {DIPLOMA_FEATURES.map((f) => (
                  <div key={f.title} className="bg-petrol-soft rounded-lg p-5 border border-petrol-border">
                    <h4 className="font-semibold text-sm mb-2">{f.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diploma mockup */}
            <div className="flex-1 max-w-sm mx-auto lg:mx-0">
              <div className="bg-surface-white rounded-lg border-2 border-gold/30 p-6 sm:p-8 shadow-[0_8px_40px_rgba(201,150,58,0.15)]">
                <div className="border-b border-border pb-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <p className="text-[10px] text-text-secondary tracking-widest uppercase">Diploma N° 2025-08472</p>
                  </div>
                  <p className="font-heading text-lg text-petrol tracking-wide">ESCUELA SEGURIDAD</p>
                  <p className="text-[11px] text-text-secondary mt-0.5">Organismo Técnico de Capacitación</p>
                </div>
                <p className="text-xs text-text-secondary mb-1">Certifica que</p>
                <p className="font-semibold text-petrol text-base mb-1">Juan Andrés Pérez Soto</p>
                <p className="text-xs text-text-secondary mb-4">ha aprobado satisfactoriamente el curso</p>
                <p className="font-heading text-xl text-petrol tracking-wide mb-4">GUARDIA DE SEGURIDAD</p>
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-[10px] text-text-secondary">Firma Electrónica Avanzada</p>
                    <p className="font-mono text-[9px] text-teal mt-0.5">a7f3...c91d</p>
                  </div>
                  <div className="w-14 h-14 bg-petrol rounded p-1.5">
                    <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-[1.5px]">
                      {[1,1,1,0,1, 1,0,1,1,0, 1,1,0,0,1, 0,1,1,0,1, 1,0,1,1,1].map((v, i) => (
                        <div key={i} className={`rounded-[1px] ${v ? "bg-surface-white" : "bg-transparent"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {["OS-10", "SPD", "SENCE", "ASR"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold text-gold border border-gold/30 rounded-full px-3 py-1 bg-gold-muted">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="bg-surface-alt py-20 px-6">
        <div ref={fadeRef3} className="max-w-4xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-3">MARCO LEGAL</p>
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">NORMATIVA QUE NOS RIGE</h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">Nuestros cursos y diplomas se enmarcan en la legislación vigente de Chile.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {LEGAL_REFS.map((ref) => (
              <div key={ref.law} className="bg-surface-white rounded-xl p-7 border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-petrol flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{ref.law}</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{ref.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-surface-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl lg:text-4xl tracking-wide mb-4">CERTIFÍCATE CON RESPALDO REAL</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Más de 15.000 profesionales ya tienen un diploma verificable emitido por nuestra escuela. Tú puedes ser el siguiente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inscripcion" className="bg-gold text-petrol font-bold px-8 py-3.5 rounded-md hover:bg-gold-light transition-colors">
              Inscribirme ahora
            </Link>
            <Link to="/cursos" className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors">
              Ver cursos disponibles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
