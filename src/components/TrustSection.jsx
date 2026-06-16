import { useFadeIn } from "../hooks/useFadeIn";

export default function TrustSection() {
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
