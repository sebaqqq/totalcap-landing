import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";

export default function DiplomaVerificationDemo() {
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
