export default function ContactForm() {
  return (
    <section id="inscripcion" className="bg-surface-alt py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-2xl mb-8">O déjanos tus datos y te contactamos</h2>
        {/* TODO: Conectar a endpoint real de backend */}
        <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-3 gap-4 mb-6">
          {[{ label: "Nombre", type: "text" }, { label: "Correo electrónico", type: "email" }, { label: "Teléfono", type: "tel" }].map((f) => (
            <div key={f.label} className="text-left">
              <label className="block text-xs font-medium text-text-secondary mb-1.5">{f.label}</label>
              <input type={f.type} placeholder={f.label} required className="w-full bg-surface-white border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
            </div>
          ))}
        </form>
        <button type="submit" className="bg-gold text-petrol font-bold px-8 py-3 rounded-md hover:bg-gold-light transition-colors">Enviar Consulta</button>
      </div>
    </section>
  );
}
