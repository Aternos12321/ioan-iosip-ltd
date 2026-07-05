import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import Projects from "@/components/site/Projects";
import BeforeAfter from "@/components/site/BeforeAfter";
import Statistics from "@/components/site/Statistics";
import Testimonials from "@/components/site/Testimonials";
import CTA from "@/components/site/CTA";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import ScrollToTopButton from "@/components/site/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <Projects />
      <BeforeAfter />
      <Statistics />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}