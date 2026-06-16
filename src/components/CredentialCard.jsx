export default function CredentialCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* The diploma card */}
      <div className="bg-surface-white rounded-lg border-2 border-gold/30 p-6 sm:p-8 shadow-[0_8px_40px_rgba(201,150,58,0.15)] animate-fade-up">
        {/* Header line */}
        <div className="border-b border-border pb-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <p className="text-[10px] text-text-secondary tracking-widest uppercase">Diploma N° 2025-08472</p>
          </div>
          {/* TODO: Reemplazar con nombre real de la OTEC */}
          <p className="font-heading text-lg text-petrol tracking-wide">ESCUELA SEGURIDAD</p>
          <p className="text-[11px] text-text-secondary mt-0.5">Organismo Técnico de Capacitación</p>
        </div>

        {/* Body */}
        <p className="text-xs text-text-secondary mb-1">Certifica que</p>
        <p className="font-semibold text-petrol text-base mb-1">Juan Andrés Pérez Soto</p>
        <p className="text-xs text-text-secondary mb-4">ha aprobado satisfactoriamente el curso</p>
        <p className="font-heading text-xl text-petrol tracking-wide mb-4">GUARDIA DE SEGURIDAD</p>

        {/* Footer with QR */}
        <div className="flex items-end justify-between pt-4 border-t border-border">
          <div>
            <p className="text-[10px] text-text-secondary">Firma Electrónica Avanzada</p>
            <p className="font-mono text-[9px] text-teal mt-0.5 animate-fade-up-d2">a7f3...c91d</p>
          </div>
          {/* QR code representation */}
          <div className="w-14 h-14 bg-petrol rounded p-1.5 animate-fade-up-d1">
            <div className="w-full h-full grid grid-cols-5 grid-rows-5 gap-[1.5px]">
              {[1,1,1,0,1, 1,0,1,1,0, 1,1,0,0,1, 0,1,1,0,1, 1,0,1,1,1].map((v, i) => (
                <div key={i} className={`rounded-[1px] ${v ? "bg-surface-white" : "bg-transparent"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Verified stamp */}
      <div className="absolute -bottom-3 -right-3 sm:bottom-2 sm:right-[-16px] animate-stamp">
        <div className="bg-teal text-surface-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg border-2 border-surface-white rotate-[-6deg]">
          Verificado
        </div>
      </div>

      {/* Accreditation tags below the card */}
      <div className="flex flex-wrap gap-2 mt-6 justify-center animate-fade-up-d3">
        {["OS-10", "SPD", "SENCE", "ASR"].map((tag) => (
          <span key={tag} className="text-[10px] font-semibold text-gold border border-gold/30 rounded-full px-3 py-1 bg-gold-muted">{tag}</span>
        ))}
      </div>
    </div>
  );
}
