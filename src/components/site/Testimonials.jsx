import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  { text: "Outstanding workmanship from start to finish. Our extension exceeded every expectation. The team was professional, punctual, and delivered a truly remarkable result.", author: "James & Sarah T.", location: "London" },
  { text: "Professional, reliable and incredibly skilled. IOAN IOSIP LTD transformed our entire home. We couldn't be happier with the quality of work.", author: "Michael R.", location: "Surrey" },
  { text: "The quality of finish is second to none. Every detail was perfect, from the structural work right through to the final coat of paint. Exceptional service.", author: "Emma & David L.", location: "Kent" },
  { text: "We would highly recommend IOAN IOSIP LTD to anyone looking for a premium construction company. Their attention to detail is remarkable.", author: "Rachel P.", location: "Essex" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % REVIEWS.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="The trust of our clients is our greatest achievement."
        />

        <div ref={ref} className="relative max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl lg:text-2xl text-charcoal leading-relaxed font-light italic mb-8">
                "{REVIEWS[current].text}"
              </p>

              {/* Author */}
              <div className="w-8 h-[1px] bg-gold mx-auto mb-4" />
              <p className="font-heading font-semibold text-charcoal">{REVIEWS[current].author}</p>
              <p className="text-xs text-darkgrey/50 tracking-[0.2em] uppercase mt-1">{REVIEWS[current].location}</p>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length)}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % REVIEWS.length)}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}