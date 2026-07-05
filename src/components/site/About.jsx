import React from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import { IMAGES } from "@/lib/images";

const SERVICES_LIST = [
  "House Extensions", "Loft Conversions", "Full House Renovations",
  "Structural Alterations", "Luxury Kitchens", "Luxury Bathrooms",
  "Roofing", "Carpentry", "Flooring", "Electrical",
  "Plumbing", "Painting & Decorating", "Landscaping", "Project Management",
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={IMAGES.living1}
              alt="Luxury living room renovation by IOAN IOSIP LTD"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold -z-10" />
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-white p-6 lg:p-8">
              <span className="block font-heading font-bold text-3xl lg:text-4xl text-gold">16+</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/70">Years</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-[2px] bg-gold mb-6" />
            <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4">About Us</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal mb-6">
              About IOAN IOSIP LTD
            </h2>
            <p className="text-darkgrey/80 leading-[1.8] mb-6">
              IOAN IOSIP LTD is a trusted UK building company with more than 16 years
              of experience delivering outstanding residential construction projects.
            </p>
            <p className="text-darkgrey/80 leading-[1.8] mb-8">
              We provide complete building services from A–Z, including:
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {SERVICES_LIST.map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  <span className="text-sm text-darkgrey">{s}</span>
                </div>
              ))}
            </div>

            <p className="text-darkgrey/80 leading-[1.8]">
              Our commitment to quality, precision, and customer satisfaction has earned
              us an excellent reputation throughout the UK.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}