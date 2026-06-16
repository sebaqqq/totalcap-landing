import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Cursos", to: "/cursos" },
  { label: "Acreditaciones", to: "/acreditaciones" },
  { label: "Aula Virtual", to: "/aula-virtual" },
  { label: "Empresas", to: "/empresas" },
  { label: "Contacto", to: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-petrol/95 backdrop-blur-sm text-surface-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* TODO: Reemplazar con logo real del cliente */}
        <Link to="/" className="font-heading text-xl tracking-wide">ESCUELA SEGURIDAD</Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded" aria-label="Abrir menú">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>

        <div className={`${open ? "flex" : "hidden"} lg:flex flex-col lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto bg-petrol lg:bg-transparent items-center gap-6 lg:gap-8 pb-6 lg:pb-0 px-6 lg:px-0`}>
          {NAV_ITEMS.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm transition-colors ${location.pathname === item.to ? "text-white font-semibold" : "text-white/60 hover:text-white"}`}
              >
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">{item.label}</a>
            )
          )}
          <Link to="/inscripcion" className="bg-gold text-petrol font-bold text-sm px-6 py-2.5 rounded-md hover:bg-gold-light transition-colors">Inscríbete</Link>
        </div>
      </nav>
    </header>
  );
}
