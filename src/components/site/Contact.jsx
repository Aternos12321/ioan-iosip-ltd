import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import useInView from "@/components/site/useInView";
import SectionHeading from "@/components/site/SectionHeading";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast, toastDismissible } from "@/components/ui/use-toast";

const WEB3FORMS_ACCESS_KEY = "60c4a528-a40b-4019-9cbd-2bc809596c96";

const SERVICES = [
  "House Extension",
  "Loft Conversion",
  "Full Renovation",
  "Kitchen",
  "Bathroom",
  "Structural Work",
  "Carpentry",
  "Landscaping",
  "Other",
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);
  const lastSuccessRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Enquiry from ${form.name} — IOAN IOSIP LTD`,
          from_name: "IOAN IOSIP LTD Website",
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        if (lastSuccessRef.current) lastSuccessRef.current.dismiss();
        lastSuccessRef.current = toastDismissible({
          title: "Message Sent",
          description: "Thank you! We have received your enquiry and will contact you shortly.",
        });
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: data.message || "Something went wrong. Please try again or call us directly.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: "Could not send your enquiry. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full bg-lightgrey border-0 px-5 py-4 text-sm text-charcoal placeholder:text-gray-400 focus:ring-1 focus:ring-gold outline-none transition-all";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Get In Touch"
          title="Contact Us"
          description="Ready to start your project? Get in touch for a free, no-obligation quotation."
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required className={inputClass} />
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputClass} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
                <select name="service" value={form.service} onChange={handleChange} className={`${inputClass} appearance-none`} required>
                  <option value="">Service Required *</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-charcoal text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading font-semibold text-charcoal text-lg mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-charcoal">IOAN IOSIP LTD</p>
                    <p className="text-sm text-darkgrey/60">Wembley, London</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-darkgrey/60">Phone</p>
                    <a href="tel:+447576369933" className="text-sm font-medium text-charcoal hover:text-gold transition-colors">+44 7576 369933</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-darkgrey/60">Email</p>
                    <a href="mailto:ioaniosipltd@yahoo.com" className="text-sm font-medium text-charcoal hover:text-gold transition-colors">ioaniosipltd@yahoo.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-darkgrey/60">Working Hours</p>
                    <p className="text-sm font-medium text-charcoal">Mon – Fri: 7:00 – 18:00</p>
                    <p className="text-sm text-darkgrey/60">Sat: 8:00 – 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[4/3] overflow-hidden">
              <iframe
                title="IOAN IOSIP LTD — Wembley, London"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3120%2C51.5450%2C-0.2620%2C51.5750&layer=mapnik&marker=51.5600%2C-0.2870"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}