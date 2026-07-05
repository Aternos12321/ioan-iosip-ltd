import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import { IMAGES } from "@/lib/images";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "Extensions", "Kitchens", "Bathrooms", "Loft Conversions", "Living Spaces", "Staircases", "Exterior", "Renovations"];

const ALL_PROJECTS = [
  // Extensions
  { img: IMAGES.exterior1, title: "Rear Extension with Bi-Fold Doors", category: "Extensions", location: "London" },
  { img: IMAGES.exterior2, title: "Modern Glass Extension", category: "Extensions", location: "Surrey" },
  { img: IMAGES.ext_build1, title: "Extension Build — Brickwork Stage", category: "Extensions", location: "London" },
  { img: IMAGES.ext_build2, title: "Extension Build — Roof Frame", category: "Extensions", location: "Essex" },
  { img: IMAGES.ext_build3, title: "Rear Extension Completed", category: "Extensions", location: "Kent" },
  { img: IMAGES.ext_build4, title: "Extension — Scaffolding & Roofing", category: "Extensions", location: "London" },
  { img: IMAGES.ext_build5, title: "Side Extension — Block & Brick", category: "Extensions", location: "Surrey" },
  { img: IMAGES.ext_build6, title: "Extension — Loft Raise", category: "Extensions", location: "Hertfordshire" },
  { img: IMAGES.ext_build7, title: "Double-Storey Extension Build", category: "Extensions", location: "London" },
  { img: IMAGES.ext_build8, title: "Extension — Brickwork Detail", category: "Extensions", location: "Kent" },
  { img: IMAGES.ext_build9, title: "Front Extension Under Construction", category: "Extensions", location: "London" },
  // Kitchens
  { img: IMAGES.kitchen1, title: "Shaker-Style Kitchen Island", category: "Kitchens", location: "Surrey" },
  { img: IMAGES.kitchen2, title: "High-Gloss Black Kitchen", category: "Kitchens", location: "London" },
  { img: IMAGES.kitchen3, title: "Shaker Kitchen with Garden View", category: "Kitchens", location: "Essex" },
  // Bathrooms
  { img: IMAGES.bathroom1, title: "Floating Vanity with Gold Fixtures", category: "Bathrooms", location: "Kent" },
  { img: IMAGES.bathroom2, title: "Freestanding Tub & Walk-In Shower", category: "Bathrooms", location: "Essex" },
  { img: IMAGES.bathroom3, title: "Marble Bathroom with Gold Details", category: "Bathrooms", location: "London" },
  { img: IMAGES.bathroom4, title: "LED Mirror & Charcoal Vanity", category: "Bathrooms", location: "Hertfordshire" },
  { img: IMAGES.bathroom5, title: "Double Vanity & Gold Hardware", category: "Bathrooms", location: "Buckinghamshire" },
  { img: IMAGES.bathroom6, title: "Backlit Mirror & Stone Sink", category: "Bathrooms", location: "London" },
  { img: IMAGES.bathroom7, title: "Black Vanity & Gold Mosaic Niche", category: "Bathrooms", location: "Kent" },
  { img: IMAGES.bathroom8, title: "Ribbed Stone & Matte Black", category: "Bathrooms", location: "Surrey" },
  { img: IMAGES.bathroom10, title: "Dark Marble & Backlit Mirror", category: "Bathrooms", location: "London" },
  { img: IMAGES.bathroom11, title: "Sage Green & Marble Bathroom", category: "Bathrooms", location: "London" },
  { img: IMAGES.bathroom13, title: "Lit Niche & Dark Marble Tile", category: "Bathrooms", location: "Surrey" },
  { img: IMAGES.bathroom14, title: "Full-Height Marble Shower Room", category: "Bathrooms", location: "Kent" },
  { img: IMAGES.bathroom15, title: "Luxury Ensuite Renovation", category: "Bathrooms", location: "Essex" },
  // Loft Conversions
  { img: IMAGES.loft1, title: "Loft Bedroom with En-Suite Tub", category: "Loft Conversions", location: "London" },
  { img: IMAGES.loft2, title: "Loft Conversion — Master Suite", category: "Loft Conversions", location: "London" },
  // Living Spaces
  { img: IMAGES.living1, title: "Open-Plan Living & Dining", category: "Living Spaces", location: "Essex" },
  { img: IMAGES.living2, title: "Living Room with Marble Feature Wall", category: "Living Spaces", location: "London" },
  { img: IMAGES.living3, title: "Brick Feature Wall & Open Plan", category: "Living Spaces", location: "Kent" },
  { img: IMAGES.living4, title: "LED Ceiling & Open-Plan Living", category: "Living Spaces", location: "London" },
  { img: IMAGES.living5, title: "Stone Fireplace Feature Wall", category: "Living Spaces", location: "Surrey" },
  // Staircases
  { img: IMAGES.staircase1, title: "Floating Staircase & Open Kitchen", category: "Staircases", location: "London" },
  { img: IMAGES.staircase2, title: "Loft Landing & Staircase", category: "Staircases", location: "London" },
  { img: IMAGES.staircase3, title: "Curved Spiral Staircase", category: "Staircases", location: "London" },
  // Exterior & Landscaping
  { img: IMAGES.garden1, title: "Garden & Patio with Artificial Turf", category: "Exterior", location: "London" },
  { img: IMAGES.garden2, title: "Rear Garden & Extension Exterior", category: "Exterior", location: "Surrey" },
  { img: IMAGES.garden3, title: "Landscaped Garden with Paving", category: "Exterior", location: "Essex" },
  // Renovations / Flooring
  { img: IMAGES.interior1, title: "Minimalist Interior with Bi-Folds", category: "Renovations", location: "Hertfordshire" },
  { img: IMAGES.flooring1, title: "Herringbone Engineered Wood Flooring", category: "Renovations", location: "London" },
  { img: IMAGES.carpentry1, title: "Panelled Feature Wall — Carpentry", category: "Renovations", location: "Surrey" },
  { img: IMAGES.ext_build10, title: "Extension Interior — Build Stage", category: "Renovations", location: "London" },
];

export default function Projects() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === active);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const nextImg = () => setLightbox((prev) => (prev + 1) % filtered.length);
  const prevImg = () => setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="A curated selection of our finest residential construction and renovation work."
        />

        {/* Filter tabs */}
        <div ref={ref} className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-charcoal text-white"
                  : "bg-lightgrey text-darkgrey hover:bg-charcoal hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-1">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title + p.img}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group relative overflow-hidden cursor-pointer ${
                  i === 0 ? "row-span-2 col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
                onClick={() => openLightbox(i)}
              >
                <div className={`overflow-hidden ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                    <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">{p.category}</p>
                    <p className="text-white font-heading font-semibold text-lg">{p.title}</p>
                    <p className="text-white/50 text-xs mt-1">{p.location}</p>
                  </div>
                </div>
                {/* Gold corner accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-10">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-4 lg:left-8 text-white/50 hover:text-white z-10"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-4 lg:right-8 text-white/50 hover:text-white z-10"
            >
              <ChevronRight size={36} />
            </button>
            <div onClick={(e) => e.stopPropagation()} className="max-w-5xl max-h-[85vh] w-full">
              <img
                src={filtered[lightbox]?.img}
                alt={filtered[lightbox]?.title}
                className="w-full h-full object-contain"
              />
              <div className="text-center mt-4">
                <p className="text-white font-heading font-semibold text-lg">{filtered[lightbox]?.title}</p>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mt-1">{filtered[lightbox]?.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}