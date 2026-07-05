import React from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";

export default function SectionHeading({ label, title, description, light = false }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="text-center mb-16 lg:mb-20">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: 60 } : {}}
        transition={{ duration: 0.8 }}
        className="h-[2px] bg-gold mx-auto mb-6"
      />
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-5 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-white/70" : "text-darkgrey/70"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}