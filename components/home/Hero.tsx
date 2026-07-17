"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleScrollToCollections = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("collections-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const brandTitle = "23 Collections";
  const characterVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-white pt-36 pb-16 flex items-center w-full overflow-hidden"
    >
      {/* Balanced layout width and precise padding to move text slightly inward from screen edges */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:gap-16 px-12 md:px-16 lg:px-20 md:grid-cols-2 w-full">
        
        {/* Left Side: Elite Brand Narrative Copywriting Panel */}
        <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start space-y-6">
          
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold block transform transition-transform duration-500 hover:translate-x-2 select-none">
            Premium Showroom Edition
          </span>

          {/* Staggered text dynamic loading & golden hover shadow animation */}
          <motion.h1 
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.05 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#5B0A18] leading-tight tracking-wide cursor-default select-none relative group"
          >
            {brandTitle.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={characterVariants}
                className="inline-block transition-all duration-300 group-hover:text-[#D4AF37] group-hover:scale-110 hover:!text-[#5B0A18] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <h2 className="font-serif text-xl sm:text-2xl text-gray-800 font-medium tracking-wide transform transition-all duration-500 hover:scale-[1.02] cursor-default">
            Luxury Handbags Crafted For The Modern Woman
          </h2>

          {/* Elegant sliding text animation on hover for paragraph text */}
          <p className="max-w-xl text-sm sm:text-base text-gray-500 leading-relaxed font-normal transition-all duration-500 ease-in-out hover:text-[#5B0A18] hover:translate-x-2 cursor-default">
            Where timeless elegance meets modern luxury. Discover exclusive statement pieces explicitly designed for sophisticated women who carry sovereign confidence and power.
          </p>

          <div className="pt-4 w-full md:w-auto">
            <a
              href="#collections-section"
              onClick={handleScrollToCollections}
              className="inline-block rounded-full bg-[#5B0A18] px-10 py-4 text-xs uppercase tracking-[0.25em] font-bold text-white transition-all duration-500 hover:bg-white hover:text-[#5B0A18] border border-[#5B0A18] hover:border-[#D4AF37] shadow-sm hover:shadow-[0_12px_24px_rgba(214,175,55,0.3)] transform hover:scale-105 active:scale-95 text-center w-full md:w-auto cursor-pointer"
            >
              Explore Collections
            </a>
          </div>
        </div>

        {/* Right Side: High-Fashion Luxury Media Product Module (Restored completely to original layout) */}
        <div className="flex justify-center w-full relative">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-[#FAF7F2]/60 rounded-full filter blur-3xl pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ rotate: 3, scale: 1.03 }}
            className="relative h-[480px] w-full max-w-[380px] rounded-3xl bg-[#FAF7F2] overflow-hidden shadow-md border border-gray-100/40 flex items-center justify-center group cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src="/images/banners/building-img.png"
                alt="23 Collections Premium Luxury Statement Handbag"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-8 group-hover:scale-102 transition-transform duration-700 fallback-display"
                priority
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                }}
              />
              
              <div className="flex flex-col items-center justify-center p-6 text-center space-y-2 z-0">
                <span className="font-serif italic text-xl text-[#5B0A18] tracking-wide opacity-80"></span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold border-t border-[#D4AF37]/20 pt-1"></span>
              </div>
            </motion.div>
            
            <div className="absolute inset-4 border border-[#D4AF37]/10 rounded-2xl pointer-events-none group-hover:border-[#D4AF37]/20 transition-colors duration-500" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}





