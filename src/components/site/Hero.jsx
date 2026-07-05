import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Luxury home extension at dusk by IOAN IOSIP LTD"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Gold accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[2px] bg-gold mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            Premium UK Construction
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-heading font-bold text-white leading-[1.1]"
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block">Building</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block">Exceptional</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block">
              Homes <span className="text-gold">From A–Z</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-white/80 mt-6 mb-4 font-heading font-medium"
          >
            Over 16 Years of Excellence in UK Construction
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-white/60 text-base leading-relaxed max-w-xl"
          >
            From extensions and loft conversions to complete renovations and luxury
            interiors, IOAN IOSIP LTD delivers quality craftsmanship from foundation
            to finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-gold text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#b8974f] transition-all duration-300"
            >
              Request a Free Quote
            </button>
            <button
              onClick={() => scrollTo("#projects")}
              className="border border-white/40 text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              View Our Projects
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-gold/50"
        />
      </motion.div>
    </section>
  );
}