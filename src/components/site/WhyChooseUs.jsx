import React from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import { Clock, Briefcase, Gem, Shield, Users, CalendarCheck, Award, FileText } from "lucide-react";

const REASONS = [
  { icon: Clock, title: "16+ Years Experience", desc: "Over a decade and a half of proven excellence in UK construction." },
  { icon: Briefcase, title: "Fully Managed Projects", desc: "End-to-end project management from initial consultation to handover." },
  { icon: Gem, title: "High-End Finishes", desc: "Luxury materials and meticulous attention to every detail." },
  { icon: Shield, title: "Trusted UK Builder", desc: "Established reputation built on reliability and integrity." },
  { icon: Users, title: "Skilled Tradesmen", desc: "Expert craftsmen across every building discipline." },
  { icon: CalendarCheck, title: "On-Time Delivery", desc: "Projects completed on schedule without compromising quality." },
  { icon: Award, title: "Quality Guaranteed", desc: "Every project backed by our commitment to excellence." },
  { icon: FileText, title: "Free Quotations", desc: "Detailed, transparent quotes with no hidden costs." },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView();

  return (
    <section className="py-24 lg:py-32 bg-lightgrey">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Why Us"
          title="Why Choose IOAN IOSIP LTD"
          description="Trusted by homeowners across the UK for exceptional quality and reliability."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 group hover:bg-charcoal transition-all duration-500 cursor-default"
            >
              <r.icon
                size={28}
                strokeWidth={1.5}
                className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-heading font-semibold text-charcoal group-hover:text-white text-base mb-3 transition-colors duration-500">
                {r.title}
              </h3>
              <p className="text-sm text-darkgrey/60 group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}