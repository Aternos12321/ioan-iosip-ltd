import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import { IMAGES } from "@/lib/images";

const STATS = [
  { value: 16, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
  { value: null, display: "A–Z", label: "Building Services" },
];

function Counter({ value, suffix, display }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView || display) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, display]);

  return (
    <span ref={ref} className="font-heading font-bold text-5xl lg:text-6xl text-gold">
      {display || `${count}${suffix}`}
    </span>
  );
}

export default function Statistics() {
  const [ref, inView] = useInView();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={IMAGES.staircase1} alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <Counter {...s} />
              <div className="w-8 h-[1px] bg-gold/50 mx-auto my-4" />
              <p className="text-white/60 text-sm tracking-[0.15em] uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}