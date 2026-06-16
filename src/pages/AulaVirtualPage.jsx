import { useState } from "react";
import { Link } from "react-router-dom";
import { useFadeIn } from "../hooks/useFadeIn";

/* ───── PLATFORM MOCKUP DATA ───── */

const MODULES = [
  { id: 1, title: "Módulo 1: Marco Legal", progress: 100, lessons: 4 },
  { id: 2, title: "Módulo 2: Control de Acceso", progress: 100, lessons: 5 },
  { id: 3, title: "Módulo 3: Prevención de Riesgos", progress: 60, lessons: 6 },
  { id: 4, title: "Módulo 4: Primeros Auxilios", progress: 0, lessons: 4 },
  { id: 5, title: "Módulo 5: Comunicación y Reporte", progress: 0, lessons: 3 },
];

const QUIZ_QUESTIONS = [
  {
    q: "¿Cuál es el organismo que fiscaliza la seguridad privada en Chile?",
    options: ["PDI", "OS-10 de Carabineros", "Ministerio del Interior", "SEC"],
    correct: 1,
  },
];

/* ───── PLATFORM MOCKUP TABS ───── */

function DashboardTab() {
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons, 0);
  const overallProgress = Math.round(MODULES.reduce((s, m) => s + m.progress, 0) / MODULES.length);

  return (
    <div className="space-y-4">
      {/* Progress summary */}
      <div className="flex items-center gap-4 p-4 bg-surface-alt rounded-lg">
        <div className="relative w-14 h-14 shrink-0">
          <svg viewBox="0 0 36 36" className="w-14 h-14 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E0DDD7" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15.5" fill="none" stroke="#0D8B8B" strokeWidth="3"
              strokeDasharray={`${overallProgress} ${100 - overallProgress}`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-teal">{overallProgress}%</span>
        </div>
        <div>
          <p className="text-sm font-semibold">Guardia de Seguridad</p>
          <p className="text-xs text-text-secondary">{totalLessons} lecciones · 32 horas</p>
        </div>
      </div>

      {/* Modules list */}
      <div className="space-y-2">
        {MODULES.map((m) => (
          <div key={m.id} className="flex items-center gap-3 p-3 rounded-lg bg-surface-white border border-border">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${m.progress === 100 ? "bg-teal text-white" : m.progress > 0 ? "bg-gold/20 text-gold" : "bg-surface-alt text-text-secondary"}`}>
              {m.progress === 100 ? "✓" : m.id}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">{m.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 bg-surface-alt rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-teal transition-all" style={{ width: `${m.progress}%` }} />
                </div>
                <span className="text-[10px] text-text-secondary shrink-0">{m.lessons} clases</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LessonTab() {
  return (
    <div className="space-y-4">
      {/* Video player mockup */}
      <div className="relative bg-petrol rounded-lg overflow-hidden aspect-video flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-petrol to-petrol-soft" />
        <div className="relative z-10 text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
          <p className="text-white/60 text-xs">Lección 3.4</p>
          <p className="text-white text-sm font-semibold mt-1">Procedimientos de Evacuación</p>
        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-petrol-border">
          <div className="h-full bg-gold w-[35%]" />
        </div>
      </div>

      {/* Lesson content */}
      <div className="p-4 bg-surface-white border border-border rounded-lg">
        <p className="text-xs font-semibold text-teal mb-1">Módulo 3 · Lección 4 de 6</p>
        <p className="text-sm font-semibold mb-2">Procedimientos de Evacuación</p>
        <p className="text-xs text-text-secondary leading-relaxed">
          En esta lección aprenderás los protocolos estándar de evacuación según la normativa vigente, incluyendo roles, rutas de escape y puntos de encuentro.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button className="text-xs text-text-secondary hover:text-text flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Lección anterior
        </button>
        <button className="text-xs text-teal font-semibold hover:text-teal-dark flex items-center gap-1">
          Siguiente lección
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

function EvaluationTab() {
  const [selected, setSelected] = useState(null);
  const question = QUIZ_QUESTIONS[0];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-surface-white border border-border rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-teal">Evaluación · Módulo 3</p>
          <span className="text-[10px] text-text-secondary bg-surface-alt px-2 py-1 rounded">Pregunta 1 de 10</span>
        </div>
        <p className="text-sm font-semibold mb-4">{question.q}</p>
        <div className="space-y-2">
          {question.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = selected !== null && i === question.correct;
            const isWrong = isSelected && i !== question.correct;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left text-xs p-3 rounded-lg border transition-all ${
                  isCorrect
                    ? "border-teal bg-teal/10 text-teal font-semibold"
                    : isWrong
                    ? "border-red-400 bg-red-50 text-red-600"
                    : isSelected
                    ? "border-petrol bg-petrol/5"
                    : "border-border hover:border-gold/40 bg-surface-white"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    isCorrect ? "border-teal text-teal" : isWrong ? "border-red-400 text-red-500" : "border-border text-text-secondary"
                  }`}>
                    {isCorrect ? "✓" : isWrong ? "✗" : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
        {selected !== null && (
          <div className={`mt-3 p-3 rounded-lg text-xs ${selected === question.correct ? "bg-teal/10 text-teal" : "bg-red-50 text-red-600"}`}>
            {selected === question.correct
              ? "Correcto. OS-10 es la unidad de Carabineros encargada de fiscalizar la seguridad privada."
              : "Incorrecto. La respuesta correcta es OS-10 de Carabineros."}
          </div>
        )}
      </div>

      {/* Progress indicator */}
      <div className="flex items-center gap-1.5 justify-center">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-teal" : "bg-border"}`} />
        ))}
      </div>
    </div>
  );
}

/* ───── PLATFORM MOCKUP WRAPPER ───── */

const TABS = [
  { id: "dashboard", label: "Mi Progreso", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" },
  { id: "lesson", label: "Lección", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" },
  { id: "evaluation", label: "Evaluación", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
];

function PlatformMockup() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="bg-surface-white rounded-xl border border-border shadow-[0_8px_40px_rgba(15,43,60,0.08)] overflow-hidden max-w-lg mx-auto">
      {/* Top bar */}
      <div className="bg-petrol px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <span className="text-white text-xs font-semibold">Aula Virtual</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-petrol-border flex items-center justify-center text-[9px] font-bold text-gold">JP</div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[11px] font-medium transition-colors ${
              activeTab === tab.id
                ? "text-teal border-b-2 border-teal bg-teal/5"
                : "text-text-secondary hover:text-text"
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} /></svg>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4">
        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "lesson" && <LessonTab />}
        {activeTab === "evaluation" && <EvaluationTab />}
      </div>
    </div>
  );
}

/* ───── FEATURES ───── */

const FEATURES = [
  {
    title: "Acceso 24/7",
    desc: "Estudia cuando quieras. La plataforma no cierra: madrugada, fin de semana o feriado.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Cualquier dispositivo",
    desc: "Celular, tablet o computador. La plataforma se adapta a tu pantalla.",
    icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Video + material descargable",
    desc: "Cada lección tiene video explicativo y documentos PDF que puedes guardar.",
    icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
  },
  {
    title: "Evaluaciones en línea",
    desc: "Rinde tus pruebas directamente en la plataforma. Resultado inmediato.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Seguimiento de progreso",
    desc: "Visualiza cuánto llevas, qué te falta y tu rendimiento en cada módulo.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Soporte directo",
    desc: "¿Dudas? Escríbenos por chat o WhatsApp y te respondemos el mismo día.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

/* ───── REQUIREMENTS ───── */

const REQUIREMENTS = [
  { label: "Conexión a internet", detail: "Mínimo 2 Mbps para video fluido" },
  { label: "Navegador actualizado", detail: "Chrome, Firefox, Safari o Edge" },
  { label: "Dispositivo", detail: "Celular, tablet o computador" },
  { label: "Audio", detail: "Parlantes o audífonos para las lecciones en video" },
];

/* ───── PAGE ───── */

export default function AulaVirtualPage() {
  const fadeRef1 = useFadeIn();
  const fadeRef2 = useFadeIn();
  const fadeRef3 = useFadeIn();

  return (
    <main>
      {/* Hero */}
      <section className="bg-petrol text-surface-white px-6 py-16 lg:px-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/50">/</span>
            <span className="font-semibold">Aula Virtual</span>
          </nav>

          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="flex-1 mb-12 lg:mb-0">
              <h1 className="font-heading text-4xl lg:text-5xl tracking-wide mb-5 animate-fade-up">
                TU AULA, TU RITMO
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-8 animate-fade-up-d1">
                Una plataforma pensada para que aprendas sin complicaciones. Entras, estudias, avanzas. Sin horarios, sin desplazarte, desde donde estés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-d2">
                <a href="/#inscripcion" className="bg-gold text-petrol font-bold px-8 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors text-center">
                  Comenzar ahora
                </a>
                <a href="#plataforma" className="border-2 border-white/25 text-white/70 font-semibold px-8 py-3.5 rounded-md text-base hover:border-white/50 hover:text-white transition-colors text-center">
                  Ver la plataforma
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex-1 max-w-sm">
              <div className="grid grid-cols-2 gap-4 animate-fade-up-d1">
                {[
                  { value: "24/7", label: "Acceso permanente" },
                  { value: "100%", label: "Online" },
                  { value: "5 min", label: "Para empezar a estudiar" },
                  { value: "0", label: "Requisitos técnicos especiales" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-petrol-soft rounded-lg p-5 border border-petrol-border">
                    <p className="font-heading text-2xl text-gold mb-1">{stat.value}</p>
                    <p className="text-white/40 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform mockup */}
      <section id="plataforma" className="py-20 px-6">
        <div ref={fadeRef1} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="lg:flex lg:items-start lg:gap-16">
            <div className="flex-1 mb-12 lg:mb-0">
              <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-3">EXPLORA LA PLATAFORMA</p>
              <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">ASÍ SE VE POR DENTRO</h2>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md mb-8">
                Navega entre las pestañas para ver cómo funciona tu experiencia de aprendizaje. Progreso, lecciones y evaluaciones, todo en un solo lugar.
              </p>

              {/* Callouts */}
              <div className="space-y-4">
                {[
                  { title: "Progreso visual", desc: "Sabes exactamente cuánto llevas y qué módulo viene." },
                  { title: "Video por lección", desc: "Cada tema tiene una clase grabada que puedes pausar y repetir." },
                  { title: "Evaluación inmediata", desc: "Respondes y sabes al instante si tu respuesta fue correcta." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The interactive mockup */}
            <div className="flex-1">
              <PlatformMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-surface-alt py-20 px-6">
        <div ref={fadeRef2} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">TODO LO QUE NECESITAS PARA APRENDER</h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">Sin instalaciones, sin software extra. Solo tú, tu dispositivo y ganas de avanzar.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-surface-white rounded-xl p-6 border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                </div>
                <h3 className="font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-petrol text-surface-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-3">DE LA INSCRIPCIÓN AL DIPLOMA</h2>
            <p className="text-white/50 text-sm max-w-lg mx-auto">El proceso completo, sin sorpresas. Desde que te inscribes hasta que recibes tu diploma verificable.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Inscríbete", desc: "Elige tu curso y completa el pago de forma segura." },
              { step: "2", title: "Accede al aula", desc: "Recibes tus credenciales por correo en minutos." },
              { step: "3", title: "Estudia y rinde", desc: "Avanza por los módulos y aprueba las evaluaciones." },
              { step: "4", title: "Recibe tu diploma", desc: "Diploma digital con código QR y firma electrónica." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-gold flex items-center justify-center text-gold font-heading text-xl mb-4">
                  {s.step}
                </div>
                <p className="font-semibold text-base mb-2">{s.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical requirements */}
      <section className="py-16 px-6">
        <div ref={fadeRef3} className="max-w-3xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
          <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-center mb-8">REQUISITOS TÉCNICOS</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {REQUIREMENTS.map((r) => (
              <div key={r.label} className="flex items-start gap-3 p-4 bg-surface-alt rounded-lg border border-border">
                <span className="w-6 h-6 rounded-full bg-petrol flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <p className="text-sm font-semibold">{r.label}</p>
                  <p className="text-xs text-text-secondary">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-text-secondary mt-6">No necesitas instalar ningún programa. Todo funciona desde el navegador.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-surface-white px-6 py-16 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl tracking-wide mb-4">EMPIEZA A ESTUDIAR HOY</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            En 5 minutos ya puedes estar dentro del aula, avanzando en tu certificación profesional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#inscripcion" className="bg-gold text-petrol font-bold px-8 py-3.5 rounded-md hover:bg-gold-light transition-colors">
              Inscribirme ahora
            </a>
            <Link to="/cursos" className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors">
              Ver cursos disponibles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
