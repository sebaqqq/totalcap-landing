import { useFadeIn } from "../hooks/useFadeIn";

export default function B2BSection() {
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
