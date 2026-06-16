import { useFadeIn } from "../hooks/useFadeIn";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  const fadeRef = useFadeIn();
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <section className="py-20 px-6">
      <div ref={fadeRef} className="max-w-7xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-center mb-12">LO QUE DICEN NUESTROS ALUMNOS</h2>

        {/* Featured + stacked layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured testimonial */}
          <blockquote className="bg-petrol text-surface-white rounded-xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4">{Array.from({ length: featured.stars }, (_, i) => <span key={i} className="text-gold text-lg">★</span>)}</div>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 text-white/90">&ldquo;{featured.quote}&rdquo;</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-petrol-border flex items-center justify-center text-sm font-bold text-gold">{featured.name[0]}</div>
              <div>
                <p className="font-semibold text-sm">{featured.name}</p>
                <p className="text-xs text-white/50">{featured.role}</p>
              </div>
            </div>
          </blockquote>

          {/* Smaller testimonials stacked */}
          <div className="flex flex-col gap-6">
            {rest.map((t) => (
              <blockquote key={t.name} className="bg-surface-white border border-border rounded-xl p-7 flex-1">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.stars }, (_, i) => <span key={i} className="text-gold text-sm">★</span>)}</div>
                <p className="text-sm italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center text-xs font-bold text-teal">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.role}</p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
