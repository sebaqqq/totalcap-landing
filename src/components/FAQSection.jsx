import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { FAQS } from "../data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const fadeRef = useFadeIn();

  return (
    <section className="py-20 px-6" id="preguntas">
      <div ref={fadeRef} className="max-w-3xl mx-auto opacity-0 translate-y-6 transition-all duration-700">
        <h2 className="font-heading text-3xl sm:text-4xl tracking-wide text-center mb-10">¿TIENES DUDAS?</h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden bg-surface-white">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface-alt/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <span className="text-xl text-text-secondary shrink-0 transition-transform duration-200" style={{ transform: openIndex === i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
