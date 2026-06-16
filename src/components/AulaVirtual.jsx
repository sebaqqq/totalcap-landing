import { useFadeIn } from "../hooks/useFadeIn";

export default function AulaVirtual() {
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
