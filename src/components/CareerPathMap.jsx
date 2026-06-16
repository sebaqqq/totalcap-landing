import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { CAREER_PATH } from "../data/careerPath";

export default function CareerPathMap() {
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
