"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setIsSuccess(false);
        setStatusMessage(data.error || "Failed to deliver message. Please check required fields.");
      }
    } catch (error) {
      console.error("Submission pipeline error:", error);
      setIsSuccess(false);
      setStatusMessage("Network error. Failed to establish connection with 23 Collections server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section 
      id="contact"
      className="bg-[#5B0A18] min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 md:px-12 overflow-hidden border-b border-[#D4AF37]/10"
    >
      {/* Reduced height slightly to min-h-[510px] for tighter and more compact layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl min-h-[510px] bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(214,175,55,0.35)] border border-[#D4AF37]/10 grid md:grid-cols-2 gap-10 lg:gap-14 items-center transition-all duration-700 ease-out"
      >
        
        {/* Left Side: Brand Story & Big Info Text */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] font-bold block transform transition-transform duration-500 hover:translate-x-2 select-none origin-left">
              Contact
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#5B0A18] leading-tight tracking-wide transform transition-colors duration-500 hover:text-[#D4AF37] cursor-default select-none whitespace-nowrap">
              23 Collections
            </h2>
          </div>

          <p className="text-base text-gray-500 leading-relaxed font-normal transition-all duration-500 hover:text-gray-800 cursor-default">
            We would love to hear from you. Connect with our dedicated showroom concierge team for custom luxury handbag orders, questions, and exclusive boutique updates.
          </p>

          {/* Premium Contact Details Suite */}
          <div className="pt-3 space-y-5 text-sm md:text-base text-gray-700 font-semibold">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="h-10 w-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] bg-[#FAF7F2] transition-all duration-500 group-hover:bg-[#5B0A18] group-hover:text-white group-hover:scale-110">
                <Mail size={18} className="stroke-[1.5]" />
              </div>
              <p className="transform transition-transform duration-500 group-hover:translate-x-1.5">
                Email: <span className="text-gray-900 font-bold block mt-0.5 select-all">info@23collections.com</span>
              </p>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="h-10 w-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] bg-[#FAF7F2] transition-all duration-500 group-hover:bg-[#5B0A18] group-hover:text-white group-hover:scale-110">
                <Phone size={18} className="stroke-[1.5]" />
              </div>
              <p className="transform transition-transform duration-500 group-hover:translate-x-1.5">
                Phone: <span className="text-gray-900 font-bold block mt-0.5 select-all">+92 300 0000000</span>
              </p>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="h-10 w-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] bg-[#FAF7F2] transition-all duration-500 group-hover:bg-[#5B0A18] group-hover:text-white group-hover:scale-110">
                <MapPin size={18} className="stroke-[1.5]" />
              </div>
              <p className="transform transition-transform duration-500 group-hover:translate-x-1.5">
                Showroom Address: <span className="text-gray-900 font-bold block mt-0.5">Pakistan HQ</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Input Form Panel with Maroon Borders */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          
          <div>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              disabled={loading}
              className="w-full border border-[#5B0A18]/40 rounded-xl px-4 py-3.5 text-sm md:text-base outline-none text-gray-900 bg-[#FAF7F2]/30 transition-all focus:border-[#5B0A18] focus:ring-1 focus:ring-[#5B0A18] placeholder-gray-400 disabled:opacity-40"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              disabled={loading}
              className="w-full border border-[#5B0A18]/40 rounded-xl px-4 py-3.5 text-sm md:text-base outline-none text-gray-900 bg-[#FAF7F2]/30 transition-all focus:border-[#5B0A18] focus:ring-1 focus:ring-[#5B0A18] placeholder-gray-400 disabled:opacity-40"
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              disabled={loading}
              className="w-full border border-[#5B0A18]/40 rounded-xl px-4 py-3.5 text-sm md:text-base outline-none text-gray-900 bg-[#FAF7F2]/30 transition-all focus:border-[#5B0A18] focus:ring-1 focus:ring-[#5B0A18] placeholder-gray-400 disabled:opacity-40"
            />
          </div>

          <div>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              disabled={loading}
              className="w-full border border-[#5B0A18]/40 rounded-xl px-4 py-3.5 text-sm md:text-base outline-none text-gray-900 bg-[#FAF7F2]/30 transition-all focus:border-[#5B0A18] focus:ring-1 focus:ring-[#5B0A18] placeholder-gray-400 resize-none disabled:opacity-40"
            />
          </div>

          {/* Action Status Notifications */}
          {statusMessage && (
            <div className={`text-sm font-semibold ${isSuccess ? "text-emerald-600" : "text-rose-600"}`}>
              {statusMessage}
            </div>
          )}

          {/* Premium Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full relative group overflow-hidden rounded-xl py-4 bg-[#5B0A18] text-white border border-[#5B0A18] font-sans tracking-widest text-sm uppercase font-semibold transition-all duration-500 hover:text-[#5B0A18] disabled:opacity-50"
          >
            <span className="absolute inset-0 w-0 bg-[#FAF7F2] transition-all duration-500 ease-out group-hover:w-full z-0"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending to Atelier...
                </>
              ) : (
                "Send Message"
              )}
            </span>
          </button>
        </form>

      </motion.div>
    </section>
  );
}







