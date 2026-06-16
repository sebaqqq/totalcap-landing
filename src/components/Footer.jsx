export default function Footer() {
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
