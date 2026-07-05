import React from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import { MessageSquare, PenTool, HardHat, Sparkles, Key } from "lucide-react";

const STEPS = [
  { icon: MessageSquare, title: "Consultation", desc: "We discuss your vision, assess your property, and understand your requirements in detail." },
  { icon: PenTool, title: "Design & Planning", desc: "Detailed planning, architectural drawings, and project preparation with full transparency." },
  { icon: HardHat, title: "Construction", desc: "Professional execution by our skilled builders with regular progress updates." },
  { icon: Sparkles, title: "Finishing", desc: "Luxury detailing, premium finishes, and rigorous quality inspection at every stage." },
  { icon: Key, title: "Handover", desc: "Your dream home completed and delivered to the highest standard." },
];

export default function Process() {
  const [ref, inView] = useInView();

  return (
    <section className="py-24 lg:py-32 bg-lightgrey">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="How We Work"
          title="Our Process"
          description="A proven five-step approach that ensures every project is delivered with precision and care."
        />

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical plumb line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 -translate-x-1/2" />

          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 bg-gold rounded-full border-2 border-white z-10 mt-1" />

                {/* Content card */}
                <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-32px)] ${isLeft ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}>
                  <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                    <step.icon size={20} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-xs text-gold tracking-[0.2em] uppercase font-medium">Step {i + 1}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal text-xl mb-2">{step.title}</h3>
                  <p className="text-darkgrey/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}