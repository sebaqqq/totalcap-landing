import CredentialCard from "./CredentialCard";

export default function Hero() {
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
