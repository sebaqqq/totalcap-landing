import { useState, useEffect, useRef } from "react";
import { SOCIAL_PROOF_EVENTS } from "../data/socialProofEvents";

export default function SocialProofToasts() {
  const [current, setCurrent] = useState(null);
  const [visible, setVisible] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const showNext = () => {
      setCurrent(SOCIAL_PROOF_EVENTS[indexRef.current]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
      indexRef.current = (indexRef.current + 1) % SOCIAL_PROOF_EVENTS.length;
    };
    const initial = setTimeout(showNext, 8000);
    const interval = setInterval(showNext, 15000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-24 left-6 z-40 max-w-xs transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-surface-white border border-border rounded-lg p-4 shadow-lg flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
          <p className="text-sm font-medium">{current.name} <span className="font-normal text-text-secondary">de {current.city}</span></p>
          <p className="text-xs text-text-secondary">{current.course}</p>
          <p className="text-[10px] text-text-secondary/60 mt-0.5">{current.time}</p>
        </div>
      </div>
    </div>
  );
}
