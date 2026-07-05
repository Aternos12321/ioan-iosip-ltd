import React from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  { q: "What areas do you cover?", a: "We work across the United Kingdom, primarily in London, the South East, and surrounding counties including Surrey, Kent, Essex, Hertfordshire, and Buckinghamshire." },
  { q: "Do you provide free quotations?", a: "Yes, we offer completely free, no-obligation quotations for all projects. We'll visit your property, discuss your requirements, and provide a detailed written quote." },
  { q: "How long does a typical project take?", a: "Project timelines vary depending on scope. A standard extension typically takes 8–12 weeks, while a full renovation may take 12–20 weeks. We provide a detailed timeline during the planning phase." },
  { q: "Are you fully insured?", a: "Yes, IOAN IOSIP LTD is fully insured with comprehensive public liability insurance and professional indemnity cover." },
  { q: "Do you handle planning permission?", a: "Yes, we manage the entire planning process including drawings, submissions to local authorities, and compliance with all building regulations." },
  { q: "Can you work on listed or period properties?", a: "Absolutely. We have extensive experience working with period properties and listed buildings, ensuring all renovations respect the heritage of the original structure." },
  { q: "What is your payment structure?", a: "We typically work on a staged payment basis aligned with project milestones, ensuring transparency throughout the build. Full details are provided in your contract." },
];

export default function FAQ() {
  const [ref, inView] = useInView();

  return (
    <section className="py-24 lg:py-32 bg-lightgrey">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your project."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border-none px-6"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-charcoal text-base hover:text-gold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-darkgrey/70 text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}