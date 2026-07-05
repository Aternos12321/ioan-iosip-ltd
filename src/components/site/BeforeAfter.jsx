import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import { IMAGES } from "@/lib/images";

const COMPARISONS = [
  { title: "Bathroom — Design Variations", before: IMAGES.bathroom1, after: IMAGES.bathroom2 },
  { title: "Vanity — Finish Comparison", before: IMAGES.bathroom5, after: IMAGES.bathroom6 },
  { title: "Kitchen — Style Comparison", before: IMAGES.kitchen1, after: IMAGES.kitchen2 },
  { title: "Living Space — Layout Comparison", before: IMAGES.living1, after: IMAGES.living2 },
  { title: "Bathroom — Material Comparison", before: IMAGES.bathroom3, after: IMAGES.bathroom4 },
  { title: "Bathroom — Detail Comparison", before: IMAGES.bathroom7, after: IMAGES.bathroom8 },
];

function Slider({ before, after, title }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  const handleStart = () => { dragging.current = true; };
  const handleEnd = () => { dragging.current = false; };
  const handleMove = (e) => {
    if (!dragging.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updatePos(clientX);
  };

  return (
    <div className="text-center">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onMouseMove={handleMove}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onTouchMove={handleMove}
      >
        {/* After image (full) */}
        <img src={after} alt={`${title} variant B`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`${title} variant A`}
            loading="lazy"
            className="absolute inset-0 h-full object-cover"
            style={{ minWidth: containerRef.current ? containerRef.current.offsetWidth : "100%" }}
          />
        </div>

        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gold z-10" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
              <path d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 bg-charcoal/80 text-white text-xs px-3 py-1 tracking-wider uppercase z-20">Option A</span>
        <span className="absolute top-4 right-4 bg-gold/90 text-white text-xs px-3 py-1 tracking-wider uppercase z-20">Option B</span>
      </div>
      <h3 className="font-heading font-semibold text-charcoal mt-4 text-lg">{title}</h3>
    </div>
  );
}

export default function BeforeAfter() {
  const [ref, inView] = useInView();

  return (
    <section className="py-24 lg:py-32 bg-lightgrey">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Showcase"
          title="Design Comparisons"
          description="Drag the slider to explore different finishes and design approaches across our projects."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPARISONS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Slider {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}