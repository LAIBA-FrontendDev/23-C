"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAF7F2] min-h-[calc(100vh-112px)] flex items-center py-20 border-y border-[#D4AF37]/10 w-full overflow-hidden"
    >
      {/* Symmetrical container matching the padding grid of your hero layout seamlessly */}
      <div className="mx-auto grid max-w-7xl gap-16 px-12 md:px-20 lg:px-24 md:grid-cols-2 items-center w-full">
        
        {/* Left Side: Premium Rounded Image Matrix Module with Rotating Accent Ring Frame */}
        <div className="flex justify-center items-center w-full relative">
          
          {/* External Luxury Golden Spinning Frame Accent Border */}
          <div className="absolute h-[404px] w-[404px] rounded-full border border-dashed border-[#D4AF37]/60 pointer-events-none transition-transform duration-1000 ease-out group-hover:rotate-180 transform -z-0" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-[380px] w-[380px] rounded-full bg-white overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(91,10,24,0.12)] border border-gray-100/50 group cursor-pointer z-10 transition-all duration-700 ease-in-out"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5B0A18]/10 via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* Smooth Zoom and Dynamic Internal Scale Waves Frame Filter */}
            <Image
              src="/images/banners/made-for-her.png" 
              alt="23 Collections Luxury Craftsmanship"
              fill
              sizes="380px"
              className="object-cover opacity-95 group-hover:scale-115 group-hover:rotate-2 transition-transform duration-1000 ease-out fallback-display"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = "none";
              }}
            />
            
            {/* Internal Luxury Core Micro-Overlay Ring */}
            <div className="absolute inset-4 border border-white/20 rounded-full pointer-events-none group-hover:scale-95 transition-transform duration-700 ease-out" />
          </motion.div>
        </div>

        {/* Right Side: Brand Storytelling Content Panel with Intense Interaction Animations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-6"
        >
          {/* Brand Tag with interactive tracking layout slide */}
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold block transform transition-transform duration-500 hover:translate-x-2 cursor-default select-none origin-left">
            The Brand Story
          </span>

          {/* Heading with smooth layout drift translation, color swap, and dynamic glow shadow filter */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#5B0A18] leading-tight tracking-wide transform transition-all duration-700 hover:text-[#D4AF37] hover:translate-x-3 cursor-default select-none hover:drop-shadow-[0_10px_12px_rgba(91,10,24,0.1)]">
            Elegance In Every Detail
          </h2>

          {/* Paragraph text with layout spacing shifts on mouse interaction grids */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal transition-all duration-500 hover:text-gray-900 hover:translate-x-1.5 cursor-default">
            At 23 Collections, we believe a handbag is more than an accessory —
            it is a statement of confidence, elegance, and individuality. Designed for women who carry absolute confidence and sovereign power.
          </p>

          {/* Premium Features List Grid Section */}
          <div className="pt-4 space-y-6">
            
            {/* Feature Item 1 */}
            <div className="flex gap-5 items-start group cursor-default">
              {/* Luxury Micro Gold Bullet Node Asset */}
              <div className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#5B0A18] group-hover:shadow-[0_0_8px_rgba(212,175,55,1)]" />
              <div className="transform transition-transform duration-500 group-hover:translate-x-2">
                <h3 className="font-serif text-lg font-bold text-[#5B0A18] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  Premium Quality
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-800">
                  Carefully selected materials, pristine leather cuts, and refined luxury stitching.
                </p>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="flex gap-5 items-start group cursor-default">
              <div className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#5B0A18] group-hover:shadow-[0_0_8px_rgba(212,175,55,1)]" />
              <div className="transform transition-transform duration-500 group-hover:translate-x-2">
                <h3 className="font-serif text-lg font-bold text-[#5B0A18] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  Timeless Design
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-800">
                  Masterpiece statements created specifically to amplify elegance across every high-end occasion.
                </p>
              </div>
            </div>

            {/* Feature Item 3 */}
            <div className="flex gap-5 items-start group cursor-default">
              <div className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#5B0A18] group-hover:shadow-[0_0_8px_rgba(212,175,55,1)]" />
              <div className="transform transition-transform duration-500 group-hover:translate-x-2">
                <h3 className="font-serif text-lg font-bold text-[#5B0A18] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  Made For Her
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-800">
                  Exquisite luxury that completely celebrates identity, power, confidence, and sovereign style.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

