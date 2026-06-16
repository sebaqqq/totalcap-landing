import { useState, useEffect, useRef } from "react";

/* ───── DATA ───── */

const COURSES = [
  { title: "Guardia de Seguridad", desc: "Formación integral para desempeñarte como guardia de seguridad privada certificado por OS-10.", hours: "32 horas", level: "basico", status: "Disponible", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80" },
  { title: "Operador CCTV", desc: "Aprende vigilancia electrónica, monitoreo de cámaras y gestión de sistemas de seguridad.", hours: "24 horas", level: "basico", status: "Disponible", img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" },
  { title: "Supervisor de Seguridad", desc: "Lidera equipos de seguridad con las competencias que exige la normativa vigente.", hours: "40 horas", level: "supervision", status: "Disponible", img: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&q=80" },
  { title: "Encargado de Seguridad", desc: "Gestiona la seguridad integral de instalaciones y coordina protocolos de emergencia.", hours: "48 horas", level: "supervision", status: "Disponible", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" },
  { title: "Jefe de Seguridad", desc: "Dirige departamentos de seguridad con visión estratégica y cumplimiento normativo.", hours: "56 horas", level: "especializacion", status: "Disponible", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
  { title: "Advance", desc: "Programa avanzado para profesionales que buscan especializarse en seguridad de alto nivel.", hours: "64 horas", level: "especializacion", status: "Disponible", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" },
  { title: "Ciberseguridad", desc: "Protege sistemas digitales y datos sensibles con técnicas actualizadas de ciberdefensa.", hours: "40 horas", level: "especializacion", status: "Próximamente", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80" },
  { title: "Dirección en Seguridad", desc: "Estrategia y liderazgo ejecutivo para la gestión integral de seguridad corporativa.", hours: "60 horas", level: "especializacion", status: "Próximamente", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" },
];

const TESTIMONIALS = [
  { quote: "Pude estudiar a mi ritmo y el diploma llegó con código QR verificable. En mi empresa lo escanearon y validaron al instante. Eso marca la diferencia.", name: "Carlos Muñoz", role: "Guardia de Seguridad", stars: 5, featured: true },
  { quote: "Necesitaba certificarme rápido para un ascenso. En 3 semanas ya tenía mi diploma de Supervisor. La plataforma es muy fácil de usar.", name: "María González", role: "Supervisora de Seguridad", stars: 5 },
  { quote: "Capacitamos a todo nuestro equipo de guardias. Proceso ágil, seguimiento personalizado y certificados al día.", name: "Roberto Soto", role: "Jefe de RRHH — Empresa de Seguridad", stars: 5 },
];

const FAQS = [
  { q: "¿Los cursos están acreditados por Carabineros (OS-10)?", a: "Sí. Todos nuestros cursos de seguridad privada cuentan con la acreditación oficial de OS-10 (Carabineros de Chile), SPD, SENCE y ASR Certificaciones." },
  { q: "¿Cuánto tiempo tengo para completar un curso?", a: "Tienes acceso al aula virtual las 24 horas del día, los 7 días de la semana. Puedes avanzar a tu propio ritmo dentro del plazo establecido para cada curso." },
  { q: "¿Cómo recibo mi diploma?", a: "Tu diploma digital se genera automáticamente al completar el curso. Incluye código QR de verificación y firma electrónica avanzada, lo que garantiza su autenticidad." },
  { q: "¿Puedo pagar en cuotas?", a: "Sí, aceptamos transferencia bancaria, tarjeta de débito y crédito. También ofrecemos pago en cuotas sin interés para algunos programas." },
  { q: "¿Los cursos sirven para trabajar como guardia de seguridad?", a: "Absolutamente. Nuestros cursos cumplen con todos los requisitos establecidos por OS-10 y SPD para ejercer como guardia de seguridad privada en Chile." },
  { q: "¿Ofrecen descuentos para empresas?", a: "Sí. Contamos con planes corporativos con tarifas preferenciales según el número de alumnos. Contáctanos para una cotización personalizada." },
];

const FILTERS = [
  { label: "Todos", value: "todos" },
  { label: "Nivel Básico", value: "basico" },
  { label: "Supervisión", value: "supervision" },
  { label: "Especialización", value: "especializacion" },
];

/*
 * Rangos salariales referenciales del mercado chileno de seguridad privada.
 * FUENTE APROXIMADA: Portales de empleo público (Trabajando.com, Indeed CL, CompuTrabajo) — consultas Q1 2025.
 * ⚠️ ESTOS VALORES SON ESTIMACIONES. El cliente DEBE validar con datos internos o estudios salariales actualizados antes de publicar.
 */
const CAREER_PATH = [
  { id: "guardia", title: "Guardia de Seguridad", salaryMin: 500, salaryMax: 650, course: "Guardia de Seguridad", desc: "Punto de entrada al sector. Rondas, control de acceso y prevención.", icon: "🛡️" },
  { id: "cctv", title: "Operador CCTV", salaryMin: 550, salaryMax: 700, course: "Operador CCTV", desc: "Monitoreo de cámaras, gestión de alertas y operación de sistemas.", icon: "📹" },
  { id: "supervisor", title: "Supervisor", salaryMin: 700, salaryMax: 950, course: "Supervisor de Seguridad", desc: "Lidera equipos de guardias, coordina turnos y reporta incidentes.", icon: "📋" },
  { id: "encargado", title: "Encargado", salaryMin: 850, salaryMax: 1200, course: "Encargado de Seguridad", desc: "Gestiona la seguridad de instalaciones completas y protocolos.", icon: "🏢" },
  { id: "jefe", title: "Jefe de Seguridad", salaryMin: 1100, salaryMax: 1600, course: "Jefe de Seguridad", desc: "Dirección estratégica del departamento y cumplimiento normativo.", icon: "⭐" },
];

const SOCIAL_PROOF_EVENTS = [
  { name: "María G.", city: "Antofagasta", course: "Guardia de Seguridad", time: "hace 2 horas" },
  { name: "Carlos R.", city: "Santiago", course: "Supervisor de Seguridad", time: "hace 45 min" },
  { name: "Empresa Prosegur", city: "Valparaíso", course: "15 alumnos inscritos", time: "hace 1 hora" },
  { name: "Andrea M.", city: "Concepción", course: "Operador CCTV", time: "hace 3 horas" },
  { name: "Luis P.", city: "Temuco", course: "Jefe de Seguridad", time: "hace 30 min" },
  { name: "Securitas Chile", city: "Santiago", course: "22 alumnos inscritos", time: "hoy" },
];

/* ───── HOOKS ───── */

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ───── SIGNATURE ELEMENT: Credential Card ───── */

function CredentialCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* The diploma card */}
      <div className="bg-surface-white rounded-lg border-2 border-gold/30 p-6 sm:p-8 shadow-[0_8px_40px_rgba(201,150,58,0.15)] animate-fade-up">
        {/* Header line */}
        <div className="border-b border-border pb-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <p className="text-[10px] text-text-secondary tracking-widest uppercase">Diploma N° 2025-08472</p>
          </div>
          {/* TODO: Reemplazar con nombre real de la OTEC */}
          <p className="font-heading text-lg text-petrol tracking-wide">ESCUELA SEGURIDAD</p>
          <p className="text-[11px] text-text-secondary mt-0.5">Organismo Técnico de Capacitación</p>
        </div>

        {/* Body */}
        <p className="text-xs text-text-secondary mb-1">Certifica que</p>
        <p className="font-semibold text-petrol text-base mb-1">Juan Andrés Pérez Soto</p>
        <p className="text-xs text-text-secondary mb-4">ha aprobado satisfactoriamente el curso</p>
        <p className="font-heading text-xl text-petrol tracking-wide mb-4">GUARDIA DE SEGURIDAD</p>

        {/* Footer with QR */}
        <div className="flex items-end justify-between pt-4 border-t border-border">
          <div>
            <p className="text-[10px] text-text-secondary">Firma Electrónica Avanzada</p>
            <p className="font-mono text-[9px] text-teal mt-0.5 animate-fade-up-d2">a7f3...c91d</p>
          </div>
          {/* QR code representation */}
          <div className="w-14 h-14 bg-petrol rounded p-1.5 animate-fade-up-d1">
            <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-[1.5px]">
              {[1,1,1,0,1, 1,0,1,1,0, 1,1,0,0,1, 0,1,1,0,1, 1,0,1,1,1].map((v, i) => (
                <div key={i} className={`rounded-[1px] ${v ? "bg-surface-white" : "bg-transparent"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Verified stamp */}
      <div className="absolute -bottom-3 -right-3 sm:bottom-2 sm:right-[-16px] animate-stamp">
        <div className="bg-teal text-surface-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border-2 border-surface-white rotate-[-6deg]">
          Verificado
        </div>
      </div>

      {/* Accreditation tags below the card */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center animate-fade-up-d3">
        {["OS-10", "SPD", "SENCE", "ASR"].map((tag) => (
          <span key={tag} className="text-[10px] font-semibold text-gold border border-gold/30 rounded-full px-3 py-1 bg-gold-muted">{tag}</span>
        ))}
      </div>
    </div>
  );
}

/* ───── COMPONENTS ───── */

function AnnouncementBar() {
  return (
    <div className="bg-petrol text-surface-white text-center py-2.5 px-4 text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
      <span className="text-white/70">Inscripciones abiertas — Cupos limitados para Julio 2025</span>
      <a href="#inscripcion" className="text-gold font-bold hover:underline">Reserva tu cupo →</a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-petrol/95 backdrop-blur-sm text-surface-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* TODO: Reemplazar con logo real del cliente */}
        <a href="#" className="font-heading text-xl tracking-wide">ESCUELA SEGURIDAD</a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded" aria-label="Abrir menú">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>

        <div className={`${open ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto bg-petrol lg:bg-transparent items-center gap-6 lg:gap-8 pb-6 lg:pb-0 px-6 lg:px-0`}>
          {["Cursos", "Acreditaciones", "Aula Virtual", "Empresas", "Contacto"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
          ))}
          <a href="#inscripcion" className="bg-gold text-petrol font-bold text-sm px-6 py-2.5 rounded-md hover:bg-gold-light transition-colors">Inscríbete</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-petrol text-surface-white overflow-hidden" id="inicio">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6 py-16 lg:px-12 lg:py-24">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-wide animate-fade-up">
            CERTIFÍCATE Y DA EL SIGUIENTE PASO EN TU CARRERA DE SEGURIDAD
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up-d1">
            Cursos 100% online con acceso 24/7. Tu diploma lleva código QR y firma electrónica avanzada: cualquier empleador lo escanea y confirma que es real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-d2">
            <a href="#inscripcion" className="bg-gold text-petrol font-bold px-8 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors text-center">Quiero Certificarme</a>
            <a href="#empresas" className="border-2 border-white/25 text-white/70 font-semibold px-8 py-3.5 rounded-md text-base hover:border-white/50 hover:text-white transition-colors text-center">Soy Empresa</a>
          </div>
        </div>

        {/* Signature element: the credential card */}
        <div className="flex-1 max-w-md w-full lg:py-4">
          <CredentialCard />
        </div>
      </div>
    </section>
  );
}

function MetricItem({ value, suffix, label }) {
  const [count, ref] = useCountUp(value);
  return (
    <div ref={ref} className="text-center px-4 py-2">
      <p className="font-heading text-3xl sm:text-4xl text-petrol">{count.toLocaleString("es-CL")}{suffix}</p>
      <p className="text-sm text-text-secondary mt-1">{label}</p>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="bg-surface-alt py-10 border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <MetricItem value={15000} suffix="+" label="Alumnos Capacitados" />
        <MetricItem value={48} suffix=" ★" label="Calificación Google (320+ reseñas)" />
        <MetricItem value={200} suffix="+" label="Empresas Atendidas" />
        <MetricItem value={10} suffix="+" label="Años Acreditados" />
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <article className="group bg-surface-white rounded-lg border border-border overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="h-40 overflow-hidden">
        <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[11px] font-semibold px-3 py-1 rounded ${course.status === "Disponible" ? "bg-teal text-white" : "bg-text-secondary/20 text-text-secondary"}`}>
            {course.status}
          </span>
          <span className="text-xs text-text-secondary">{course.hours}</span>
        </div>
        <h3 className="font-bold text-lg mb-2">{course.title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">{course.desc}</p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
          <span className="text-xs font-semibold text-teal">100% Online</span>
          <a href="#inscripcion" className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors">Ver curso →</a>
        </div>
      </div>
    </article>
  );
}

function CourseCatalog() {
  const [filter, setFilter] = useState("todos");
  const fadeRef = useFadeIn();
  const filtered = filter === "todos" ? COURSES : COURSES.filter((c) => c.level === filter);

  return (
    <section id="cursos" className="py-20 px-6">
      <div ref={fadeRef} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-wide">ELIGE TU CAMINO PROFESIONAL</h2>
          <p className="text-text-secondary mt-3 max-w-lg mx-auto">Todos nuestros cursos son 100% online, con acceso inmediato y diploma verificable.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${filter === f.value ? "bg-petrol text-surface-white" : "bg-surface-alt text-text-secondary hover:bg-border"}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => <CourseCard key={c.title} course={c} />)}
        </div>
      </div>
    </section>
  );
}

function AulaVirtual() {
  const fadeRef = useFadeIn();
  return (
    <section id="aula-virtual" className="bg-petrol text-surface-white py-20 px-6">
      <div ref={fadeRef} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <div className="lg:flex lg:items-center lg:gap-16">
          {/* Left: headline */}
          <div className="flex-1 mb-10 lg:mb-0">
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">COMIENZA A ESTUDIAR HOY</h2>
            <p className="text-white/50 max-w-md leading-relaxed">
              Sin trámites largos, sin esperas. En minutos ya estás dentro del aula virtual avanzando a tu ritmo.
            </p>
          </div>

          {/* Right: steps as a connected flow */}
          <div className="flex-1">
            <div className="space-y-6">
              {[
                { title: "Inscríbete y paga de forma segura", desc: "Elige tu curso, completa el formulario y listo." },
                { title: "Recibe tu acceso por correo", desc: "En minutos llegan tus credenciales al mail." },
                { title: "Estudia 24/7 desde cualquier dispositivo", desc: "Sin horarios fijos. Tu ritmo, tu tiempo." },
              ].map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center text-gold font-bold text-sm shrink-0">{i + 1}</div>
                    {i < 2 && <div className="w-px flex-1 bg-petrol-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <p className="font-semibold text-base mb-1">{s.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const fadeRef = useFadeIn();
  return (
    <section id="acreditaciones" className="bg-surface-alt py-20 px-6">
      <div ref={fadeRef} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        {/* Asymmetric layout: large left, stacked right */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Main card: accreditations — takes 3 cols */}
          <div className="lg:col-span-3 bg-surface-white rounded-xl p-8 sm:p-10 border border-border">
            <h2 className="font-heading text-2xl sm:text-3xl tracking-wide mb-2">TU CERTIFICACIÓN CON RESPALDO REAL</h2>
            <p className="text-text-secondary text-sm mb-8 max-w-lg">Cada institución que nos acredita valida que nuestros cursos cumplen con los estándares que exige la ley para ejercer en seguridad privada.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "OS-10", detail: "Carabineros de Chile" },
                { name: "SPD", detail: "Subsecretaría de Prevención del Delito" },
                { name: "SENCE", detail: "Servicio Nacional de Capacitación" },
                { name: "ASR", detail: "Certificaciones" },
              ].map((a) => (
                <div key={a.name} className="flex items-start gap-3 p-4 rounded-lg bg-surface-alt/70">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold text-xs font-bold flex items-center justify-center shrink-0 border border-gold/20">✓</span>
                  <div>
                    <p className="font-semibold text-sm">{a.name}</p>
                    <p className="text-xs text-text-secondary">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right stack: 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-surface-white rounded-xl p-8 border border-border flex-1">
              <h3 className="font-bold text-lg mb-4">Medios de Pago</h3>
              <ul className="space-y-3">
                {["Transferencia bancaria", "Tarjeta de débito", "Tarjeta de crédito", "Cuotas sin interés"].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-[10px] font-bold flex items-center justify-center shrink-0">$</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-petrol rounded-xl p-8 flex-1 text-surface-white">
              <h3 className="font-bold text-lg mb-3">Diplomas Verificables</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">Código QR + firma electrónica avanzada. Cualquier empleador puede verificar tu certificación al instante.</p>
              <div className="flex gap-3">
                {["QR", "Firma", "OS-10"].map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold text-gold border border-gold/30 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const fadeRef = useFadeIn();
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <section className="py-20 px-6">
      <div ref={fadeRef} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-center mb-12">LO QUE DICEN NUESTROS ALUMNOS</h2>

        {/* Featured + stacked layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured testimonial */}
          <blockquote className="bg-petrol text-surface-white rounded-xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4">{Array.from({ length: featured.stars }, (_, i) => <span key={i} className="text-gold text-lg">★</span>)}</div>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 text-white/90">&ldquo;{featured.quote}&rdquo;</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-petrol-border flex items-center justify-center text-sm font-bold text-gold">{featured.name[0]}</div>
              <div>
                <p className="font-semibold text-sm">{featured.name}</p>
                <p className="text-xs text-white/50">{featured.role}</p>
              </div>
            </div>
          </blockquote>

          {/* Smaller testimonials stacked */}
          <div className="flex flex-col gap-6">
            {rest.map((t) => (
              <blockquote key={t.name} className="bg-surface-white border border-border rounded-xl p-7 flex-1">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.stars }, (_, i) => <span key={i} className="text-gold text-sm">★</span>)}</div>
                <p className="text-sm italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center text-xs font-bold text-teal">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.role}</p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function B2BSection() {
  const fadeRef = useFadeIn();
  return (
    <section id="empresas" className="bg-petrol text-surface-white py-20 px-6">
      <div ref={fadeRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center opacity-0 translate-y-6 transition-all duration-700">
        <div className="flex-1 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-wide leading-tight">CAPACITA A TU EQUIPO CON RESPALDO OFICIAL</h2>
          <p className="text-white/50 leading-relaxed max-w-lg">
            Planes corporativos con tarifas preferenciales, seguimiento personalizado y reportes de avance. Cumple con la normativa vigente de forma simple y rápida.
          </p>
          <ul className="space-y-3">
            {["Tarifas preferenciales por volumen", "Reportes de avance por alumno", "Facturación empresa (con y sin SENCE)", "Ejecutivo de cuenta dedicado"].map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/60 text-sm">
                <span className="text-gold">→</span> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-md bg-petrol-soft rounded-xl p-8 space-y-5">
          <h3 className="font-bold text-xl">Solicita una cotización</h3>
          <p className="text-white/50 text-sm">Completa tus datos y te contactaremos en menos de 24 horas.</p>
          {/* TODO: Conectar a endpoint real de backend */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {["Nombre completo", "Empresa", "Correo corporativo", "Teléfono", "N° de personas a capacitar"].map((field) => (
              <div key={field}>
                <label className="block text-xs font-medium text-white/50 mb-1.5">{field}</label>
                <input
                  type={field.includes("Correo") ? "email" : field.includes("Teléfono") ? "tel" : "text"}
                  placeholder={`Ingresa ${field.toLowerCase()}`}
                  required
                  className="w-full bg-petrol-border/60 text-white placeholder-white/25 text-sm rounded-md px-4 py-2.5 border border-petrol-border focus:outline-none focus:ring-2 focus:ring-gold/50"
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
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const fadeRef = useFadeIn();

  return (
    <section className="py-20 px-6" id="preguntas">
      <div ref={fadeRef} className="max-w-3xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-center mb-10">¿TIENES DUDAS?</h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden bg-surface-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-alt/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <span className="text-xl text-text-secondary shrink-0 transition-transform duration-200" style={{ transform: openIndex === i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-petrol py-20 px-6 text-center text-surface-white">
      <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-4">¿LISTO PARA CERTIFICARTE?</h2>
      <p className="max-w-xl mx-auto text-white/50 leading-relaxed mb-8">
        Inscríbete hoy y comienza a estudiar de inmediato. Acceso 24/7, diploma verificable y el respaldo de más de 10 años de experiencia.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#inscripcion" className="bg-gold text-petrol font-bold px-8 py-3.5 rounded-md hover:bg-gold-light transition-colors">Inscríbete Ahora</a>
        {/* TODO: Reemplazar con número real de WhatsApp */}
        <a href="https://wa.me/569XXXXXXXX" target="_blank" rel="noopener noreferrer" className="border-2 border-white/25 text-white/70 font-semibold px-8 py-3.5 rounded-md hover:bg-white/5 transition-colors">
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="inscripcion" className="bg-surface-alt py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-2xl mb-8">O déjanos tus datos y te contactamos</h2>
        {/* TODO: Conectar a endpoint real de backend */}
        <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-3 gap-4 mb-6">
          {[{ label: "Nombre", type: "text" }, { label: "Correo electrónico", type: "email" }, { label: "Teléfono", type: "tel" }].map((f) => (
            <div key={f.label} className="text-left">
              <label className="block text-xs font-medium text-text-secondary mb-1.5">{f.label}</label>
              <input type={f.type} placeholder={f.label} required className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
            </div>
          ))}
        </form>
        <button type="submit" className="bg-gold text-petrol font-bold px-8 py-3 rounded-md hover:bg-gold-light transition-colors">Enviar Consulta</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-petrol text-surface-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            {/* TODO: Reemplazar con logo y nombre real */}
            <p className="font-heading text-lg mb-3">ESCUELA SEGURIDAD</p>
            <p className="text-white/40 text-sm leading-relaxed">Más de 10 años formando profesionales de seguridad privada en Chile. Acreditados por OS-10, SPD, SENCE y ASR.</p>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">Enlaces</p>
            {["Cursos", "Aula Virtual", "Acreditaciones", "Preguntas Frecuentes", "Contacto"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="block text-white/40 text-sm mb-2 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <div>
            <p className="font-bold text-sm mb-3">Contacto</p>
            {/* TODO: Reemplazar con datos reales */}
            <p className="text-white/40 text-sm mb-2">+56 9 XXXX XXXX</p>
            <p className="text-white/40 text-sm mb-2">contacto@[dominio].cl</p>
            <p className="text-white/40 text-sm">Santiago, Chile</p>
          </div>
          <div>
            <p className="font-bold text-sm mb-3">Legal</p>
            <a href="#" className="block text-white/40 text-sm mb-2 hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="block text-white/40 text-sm mb-2 hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="block text-white/40 text-sm mb-2 hover:text-white transition-colors">Política de Reembolso</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-petrol-border">
          <p className="text-white/30 text-xs">© 2025 [Nombre OTEC]. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {["LinkedIn", "Instagram", "Facebook", "YouTube"].map((s) => (
              <a key={s} href="#" aria-label={s} className="w-8 h-8 rounded-full bg-petrol-border flex items-center justify-center text-white/40 text-xs hover:bg-gold hover:text-petrol transition-colors">{s[0]}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    /* TODO: Reemplazar con número real de WhatsApp */
    <a
      href="https://wa.me/569XXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    </a>
  );
}

/* ───── FEATURE 1: CAREER PATH MAP ───── */

function CareerPathMap() {
  const [active, setActive] = useState(null);
  const fadeRef = useFadeIn();
  const maxSalary = Math.max(...CAREER_PATH.map((c) => c.salaryMax));

  return (
    <section className="py-20 px-6 bg-surface-alt" id="carrera">
      <div ref={fadeRef} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <div className="lg:flex lg:gap-12 lg:items-start">
          {/* Left: map */}
          <div className="flex-1 mb-10 lg:mb-0">
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wide mb-2">¿DÓNDE QUIERES LLEGAR?</h2>
            <p className="text-text-secondary text-sm mb-8 max-w-md">Cada certificación abre la puerta al siguiente nivel. Toca un cargo para ver el rango salarial y qué curso necesitas.</p>

            <div className="space-y-3">
              {CAREER_PATH.map((step, i) => {
                const isActive = active === i;
                const barWidth = Math.round((step.salaryMax / maxSalary) * 100);
                return (
                  <button
                    key={step.id}
                    onClick={() => setActive(isActive ? null : i)}
                    className={`w-full text-left rounded-lg p-4 transition-all duration-200 border ${isActive ? "bg-petrol text-surface-white border-petrol" : "bg-surface-white border-border hover:border-gold/40"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{step.icon}</span>
                        <span className="font-semibold text-sm">{step.title}</span>
                      </div>
                      <span className={`text-xs font-bold ${isActive ? "text-gold-light" : "text-gold"}`}>
                        ${step.salaryMin}k – ${step.salaryMax}k
                      </span>
                    </div>
                    {/* Salary bar */}
                    <div className={`h-2 rounded-full overflow-hidden ${isActive ? "bg-petrol-border" : "bg-surface-alt"}`}>
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${isActive ? "bg-gold" : "bg-gold/40"}`}
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                    {i < CAREER_PATH.length - 1 && (
                      <div className="flex justify-center mt-2">
                        <svg className={`w-4 h-4 ${isActive ? "text-gold-light" : "text-border"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-text-secondary mt-4 italic">* Rangos salariales referenciales en CLP miles/mes. Fuente: portales de empleo CL, Q1 2025. Valores sujetos a experiencia, región y empleador.</p>
          </div>

          {/* Right: detail panel */}
          <div className="lg:w-80 lg:sticky lg:top-24">
            {active !== null ? (
              <div className="bg-petrol rounded-xl p-6 text-surface-white animate-fade-up">
                <span className="text-3xl mb-3 block">{CAREER_PATH[active].icon}</span>
                <h3 className="font-heading text-xl tracking-wide mb-2">{CAREER_PATH[active].title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{CAREER_PATH[active].desc}</p>
                <div className="bg-petrol-soft rounded-lg p-4 mb-4">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Rango salarial estimado</p>
                  <p className="font-heading text-2xl text-gold">${CAREER_PATH[active].salaryMin}k – ${CAREER_PATH[active].salaryMax}k</p>
                  <p className="text-[11px] text-white/40">CLP / mes</p>
                </div>
                <p className="text-[11px] text-white/40 mb-2">Curso requerido:</p>
                <p className="text-sm font-semibold text-gold mb-4">{CAREER_PATH[active].course}</p>
                <a href="#inscripcion" className="block bg-gold text-petrol font-bold text-sm text-center py-2.5 rounded-md hover:bg-gold-light transition-colors">Inscribirme en este curso</a>
              </div>
            ) : (
              <div className="bg-surface-white border border-border rounded-xl p-6 text-center">
                <p className="text-3xl mb-3">👆</p>
                <p className="text-sm text-text-secondary">Selecciona un cargo para ver el detalle y el rango salarial.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── FEATURE 2: DIPLOMA VERIFICATION DEMO ───── */

function DiplomaVerificationDemo() {
  const [step, setStep] = useState(0); // 0=idle, 1=scanning, 2=verified
  const fadeRef = useFadeIn();

  function handleVerify() {
    setStep(1);
    setTimeout(() => setStep(2), 1500);
  }

  function handleReset() {
    setStep(0);
  }

  return (
    <section className="py-20 px-6">
      <div ref={fadeRef} className="max-w-4xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <div className="bg-petrol rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left: explanation */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="font-heading text-2xl sm:text-3xl tracking-wide text-surface-white mb-3">VERIFICACIÓN EN TIEMPO REAL</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Cada diploma incluye un código QR único. Cualquier empleador, institución o persona puede escanearlo y confirmar al instante que tu certificación es auténtica.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Pruébalo ahora mismo. Sin trucos, sin PDF estáticos: verificación criptográfica real.
              </p>
              {step === 0 && (
                <button onClick={handleVerify} className="bg-gold text-petrol font-bold text-sm py-3 px-6 rounded-md hover:bg-gold-light transition-colors self-start">
                  Simular verificación →
                </button>
              )}
              {step === 1 && (
                <div className="flex items-center gap-3 text-gold text-sm font-medium">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Escaneando código QR...
                </div>
              )}
              {step === 2 && (
                <button onClick={handleReset} className="text-white/40 text-xs hover:text-white/70 transition-colors self-start underline">
                  Reiniciar demo
                </button>
              )}
            </div>

            {/* Right: verification result */}
            <div className="bg-petrol-soft p-8 sm:p-10 flex items-center justify-center min-h-[320px]">
              {step === 0 && (
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-petrol rounded-lg border-2 border-dashed border-petrol-border flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                  </div>
                  <p className="text-white/30 text-sm">Código QR listo para escanear</p>
                </div>
              )}
              {step === 1 && (
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-petrol rounded-lg border-2 border-gold/50 flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                  </div>
                  <p className="text-gold text-sm font-medium">Verificando...</p>
                </div>
              )}
              {step === 2 && (
                <div className="bg-surface-white rounded-xl p-6 w-full max-w-xs shadow-lg animate-fade-up">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-teal flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-teal font-bold text-sm">Diploma Verificado</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Alumno</span>
                      <span className="font-medium">Juan A. Pérez S.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Curso</span>
                      <span className="font-medium">Guardia de Seguridad</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Fecha</span>
                      <span className="font-medium">12/06/2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">N° Diploma</span>
                      <span className="font-mono text-xs text-teal">2025-08472</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-gold/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-[11px] text-text-secondary">Firma electrónica avanzada válida</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── FEATURE 3: SOCIAL PROOF TOASTS ───── */

function SocialProofToasts() {
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const showNext = () => {
      setCurrent(SOCIAL_PROOF_EVENTS[indexRef.current]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
      indexRef.current = (indexRef.current + 1) % SOCIAL_PROOF_EVENTS.length;
    };
    const initial = setTimeout(showNext, 8000);
    const interval = setInterval(showNext, 15000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-24 left-6 z-40 max-w-xs transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-surface-white border border-border rounded-lg p-4 shadow-lg flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <p className="text-sm font-medium">{current.name} <span className="font-normal text-text-secondary">de {current.city}</span></p>
          <p className="text-xs text-text-secondary">{current.course}</p>
          <p className="text-[10px] text-text-secondary/60 mt-0.5">{current.time}</p>
        </div>
      </div>
    </div>
  );
}

/* ───── APP ───── */

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <CourseCatalog />
        <CareerPathMap />
        <AulaVirtual />
        <TrustSection />
        <DiplomaVerificationDemo />
        <Testimonials />
        <B2BSection />
        <FAQSection />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialProofToasts />
    </>
  );
}
