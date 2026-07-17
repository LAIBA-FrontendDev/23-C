"use client";

import { motion } from "framer-motion";

// Curated Luxury Showroom Customer Testimonials Array Dataset
const reviews = [
  {
    name: "Ayesha Khan",
    review: "The quality and design of my handbag exceeded my expectations. Truly luxurious craftsmanship in every single stitch.",
    initials: "AK"
  },
  {
    name: "Sara Ahmed",
    review: "23 Collections delivers unmatched elegance and timeless style. I absolutely loved my premium boutique showroom purchase.",
    initials: "SA"
  },
  {
    name: "Fatima Ali",
    review: "Incredibly beautiful classic designs with absolute pristine, premium finishing. Extremely highly recommended for modern statement collection enthusiasts.",
    initials: "FA"
  },
];

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="bg-white py-28 md:py-36 border-b border-gray-100 w-full flex items-center justify-center min-h-[510px]"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        
        {/* Elite Brand Signature Testimonials Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 space-y-2"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#5B0A18] tracking-wide uppercase">
            What Our Customers Say
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
            Social proof of elite luxury and trust
          </p>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-4" />
        </motion.div>

        {/* 3-Column Layout Grid with Max Shadow Opacity (0.85) on Hover */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {reviews.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group rounded-2xl bg-[#FAF7F2] p-10 md:p-12 border-2 border-[#5B0A18] shadow-sm hover:-translate-y-3 hover:shadow-[0_30px_70px_rgba(91,10,24,0.85)] transition-all duration-500 flex flex-col justify-between min-h-[380px]"
            >
              <div className="space-y-6 flex flex-col items-center text-center">
                {/* Clean Typographic Initial Badge Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5B0A18] text-white font-serif font-bold text-base tracking-wider shadow-md border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-[#5B0A18] transition-colors duration-500">
                  {item.initials}
                </div>

                {/* Symmetric Luxury Gold Stars Array Block Vector */}
                <div className="text-[#D4AF37] text-lg tracking-widest select-none">
                  ★★★★★
                </div>

                {/* Blockquote Narrative Content Panel */}
                <p className="text-base md:text-lg text-gray-700 font-normal leading-relaxed italic font-serif">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Customer Signoff Title Footer Section - Centered in Mid Layout */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center flex flex-col items-center justify-center w-full">
                <h3 className="font-serif text-lg font-bold text-[#5B0A18] tracking-wide">
                  {item.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold block mt-1">
                  Verified Connoisseur
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}



