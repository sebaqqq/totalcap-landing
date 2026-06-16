import { useState } from "react";
import { Link } from "react-router-dom";
import { COURSES } from "../data/courses";

const SECTIONS = [
  { key: "basico", label: "NIVEL BÁSICO", filter: (c) => c.level === "basico" },
  { key: "supervision", label: "SUPERVISIÓN Y LIDERAZGO", filter: (c) => c.level === "supervision" },
  { key: "especializacion", label: "ESPECIALIZACIÓN", filter: (c) => c.level === "especializacion" && c.status === "Disponible" },
  { key: "proximamente", label: "PRÓXIMAMENTE", filter: (c) => c.status === "Próximamente" },
];

const FILTER_OPTIONS = [
  { label: "Todos", value: "todos" },
  { label: "Nivel Básico", value: "basico" },
  { label: "Supervisión", value: "supervision" },
  { label: "Especialización", value: "especializacion" },
  { label: "Próximamente", value: "proximamente" },
];

function CourseCard({ course, dimmed = false }) {
  return (
    <article className={`group bg-surface-white rounded-lg border border-border overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col ${dimmed ? "opacity-70" : ""}`}>
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
          <a href="#inscripcion" className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors">Ver curso &rarr;</a>
        </div>
      </div>
    </article>
  );
}

function CourseSection({ label, courses, dimmed = false }) {
  if (courses.length === 0) return null;
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold tracking-[1.5px] text-teal mb-6">{label}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.title} course={c} dimmed={dimmed} />
        ))}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [filter, setFilter] = useState("todos");

  const basico = COURSES.filter((c) => c.level === "basico");
  const supervision = COURSES.filter((c) => c.level === "supervision");
  const especializacion = COURSES.filter((c) => c.level === "especializacion" && c.status === "Disponible");
  const proximamente = COURSES.filter((c) => c.status === "Próximamente");

  const showAll = filter === "todos";

  return (
    <main>
      {/* Hero */}
      <section className="bg-petrol text-surface-white px-6 py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">Inicio</Link>
            <span className="text-white/50">/</span>
            <span className="font-semibold">Cursos</span>
          </nav>

          <h1 className="font-heading text-4xl lg:text-5xl tracking-wide mb-5">TODOS NUESTROS CURSOS</h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-10">
            Formación 100% online con acceso 24/7. Elige el curso que mejor se adapte a tu perfil profesional y comienza hoy mismo.
          </p>

          {/* Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold tracking-[1px] text-white/50">FILTRAR:</span>
            {FILTER_OPTIONS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === f.value
                    ? "bg-teal text-white"
                    : "bg-petrol-soft text-white hover:bg-petrol-border"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-6 py-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {(showAll || filter === "basico") && (
            <CourseSection label="NIVEL BÁSICO" courses={basico} />
          )}

          {(showAll || filter === "supervision") && (
            <CourseSection label="SUPERVISIÓN Y LIDERAZGO" courses={supervision} />
          )}

          {(showAll || filter === "especializacion") && (
            <CourseSection label="ESPECIALIZACIÓN" courses={especializacion} />
          )}

          {(showAll || filter === "proximamente") && (
            <CourseSection label="PRÓXIMAMENTE" courses={proximamente} dimmed />
          )}

          {/* Empty state */}
          {!showAll &&
            filter === "basico" && basico.length === 0 &&
            filter === "supervision" && supervision.length === 0 &&
            filter === "especializacion" && especializacion.length === 0 &&
            filter === "proximamente" && proximamente.length === 0 && (
              <p className="text-center text-text-secondary py-12">No hay cursos en esta categoria.</p>
            )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-surface-white px-6 py-16 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl tracking-wide mb-6">
            ¿NO ENCUENTRAS LO QUE BUSCAS?
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Contáctanos y te ayudamos a encontrar el programa que mejor se adapte a tus necesidades profesionales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#inscripcion" className="bg-gold text-petrol font-bold px-8 py-3 rounded-md hover:bg-gold-light transition-colors">
              Hablar con un Asesor
            </a>
            <Link to="/#empresas" className="border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
              Ver Plan Empresas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
