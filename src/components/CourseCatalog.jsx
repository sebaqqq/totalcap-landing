import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { COURSES, FILTERS } from "../data/courses";

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

export default function CourseCatalog() {
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
