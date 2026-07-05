import React from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import { IMAGES } from "@/lib/images";

export default function CTA() {
  const [ref, inView] = useInView();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.kitchen1} alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 60 } : {}}
          transition={{ duration: 0.8 }}
          className="h-[2px] bg-gold mx-auto mb-8"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
        >
          Ready to Build Your Dream Home?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-lg mb-10"
        >
          Let's discuss your next project.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="bg-gold text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-[#b8974f] transition-colors"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+447576369933"
            className="border border-white/30 text-white px-10 py-4 text-sm font-medium tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}