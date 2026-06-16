import { useCountUp } from "../hooks/useCountUp";

function MetricItem({ value, suffix, label }) {
  const [count, ref] = useCountUp(value);
  return (
    <div ref={ref} className="text-center px-4 py-2">
      <p className="font-heading text-3xl sm:text-4xl text-petrol">{count.toLocaleString("es-CL")}{suffix}</p>
      <p className="text-sm text-text-secondary mt-1">{label}</p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-surface-alt py-10 border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <MetricItem value={15000} suffix="+" label="Alumnos Capacitados" />
        <MetricItem value={48} suffix=" ★" label="Calificación Google (320+ reseñas)" />
        <MetricItem value={200} suffix="+" label="Empresas Atendidas" />
        <MetricItem value={10} suffix="+" label="Años Acreditados" />
      </div>
    </section>
  );
}
