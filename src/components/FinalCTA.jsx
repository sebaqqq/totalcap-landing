export default function FinalCTA() {
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
