import React from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import { IMAGES } from "@/lib/images";

const SERVICES = [
  { title: "House Extensions", desc: "Beautiful extensions designed to transform your home.", img: IMAGES.exterior1 },
  { title: "Loft Conversions", desc: "Turn unused loft space into stunning bedrooms and living areas.", img: IMAGES.loft1 },
  { title: "Complete Renovations", desc: "Full house refurbishments from start to finish.", img: IMAGES.living3 },
  { title: "Luxury Kitchens", desc: "Custom designed kitchens with premium finishes.", img: IMAGES.kitchen1 },
  { title: "Luxury Bathrooms", desc: "Modern spa-inspired bathrooms.", img: IMAGES.bathroom2 },
  { title: "Structural Work", desc: "Steel beams, wall removals, and complete structural alterations.", img: IMAGES.interior1 },
  { title: "Carpentry & Joinery", desc: "Bespoke woodwork, doors, staircases, wardrobes and cabinetry.", img: IMAGES.staircase2 },
  { title: "Landscaping", desc: "Gardens, patios, driveways and outdoor living spaces.", img: IMAGES.garden2 },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="What We Do"
          title="Our Services"
          description="Complete building services from foundation to finish, delivering exceptional results on every project."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden cursor-default"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent flex flex-col justify-end p-6">
                <div className="w-8 h-[2px] bg-gold mb-3 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-heading font-semibold text-white text-lg mb-1">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}