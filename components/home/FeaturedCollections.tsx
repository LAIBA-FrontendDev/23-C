"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    id: "classic",
    name: "Classic Collection",
    description: "Timeless handbags designed for elegant everyday style.",
    image: "/images/bags/bag-1.png",
  },
  {
    id: "royal",
    name: "Royal Elegance",
    description: "Luxury handbags inspired by sophistication and grace.",
    image: "/images/bags/bag-2.png",
  },
  {
    id: "urban",
    name: "Urban Chic",
    description: "Modern designs for confident and stylish women.",
    image: "/images/bags/bag-3.png",
  },
  {
    id: "evening",
    name: "Evening Glamour",
    description: "Elegant bags for unforgettable occasions.",
    image: "/images/bags/bag-4.png",
  },
  {
    id: "minimal",
    name: "Minimal Luxe",
    description: "Simple designs with premium finishing.",
    image: "/images/bags/bag-5.png",
  },
  {
    id: "signature",
    name: "Signature Collection",
    description: "Exclusive pieces from 23 Collections.",
    image: "/images/bags/bag-6.png",
  },
];

export default function FeaturedCollections() {
  return (
    <section 
      id="featured" 
      className="h-screen max-h-screen min-h-[780px] bg-white border-b border-gray-100 w-full overflow-hidden flex flex-col justify-center py-4"
    >
      <div className="mx-auto max-w-7xl px-8 w-full flex flex-col h-full justify-center">
        
        {/* Upper Heading Section */}
        <div className="text-center mb-6 group cursor-default select-none shrink-0">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#5B0A18] tracking-wide uppercase transition-all duration-750 hover:text-[#D4AF37] hover:scale-[1.01] hover:drop-shadow-[0_5px_8px_rgba(91,10,24,0.1)]">
            Discover Our Signature Collections
          </h2>
          <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] mt-1 font-semibold transition-transform duration-500 hover:translate-x-1">
            Curated masterpieces tailored to your sophistication
          </p>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2 transition-all duration-500 group-hover:w-24" />
        </div>

        {/* Dynamic Card Grid with Zero Padding Constraints */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full items-stretch overflow-hidden mx-auto">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-[#FAF7F2] p-0 overflow-hidden border-4 border-[#5B0A18] h-[340px] transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer hover:shadow-[0_0_45px_rgba(91,10,24,0.85)]"
            >
              
              {/* Image Frame covers 100% layout width and max height space with zero padding edges */}
              <div className="relative w-full h-[255px] bg-white flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover p-0 transition-transform duration-700 group-hover:scale-110 fallback-display"
                  priority={false}
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Compressed Minimal Bottom Meta Strip Zone */}
              <div className="px-4 pb-3 pt-2 bg-[#FAF7F2] flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#5B0A18] tracking-wide transform transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-[#D4AF37]">
                    {item.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 leading-none font-normal line-clamp-1 mt-0.5 transition-colors duration-500 group-hover:text-gray-900">
                    {item.description}
                  </p>
                </div>

                {/* Micro Action Button Anchor */}
                <div className="mt-2 pt-1 border-t border-[#5B0A18]/10">
                  <Link
                    href={`/collections?category=${encodeURIComponent(item.name.replace(/\s+Collection|Luxe|Elegance|Chic|Glamour/gi, "").trim())}`}
                    className="inline-flex items-center text-[9px] uppercase tracking-widest font-bold text-[#5B0A18] transition-all duration-300 hover:text-[#D4AF37] gap-1 group/btn"
                  >
                    Discover More 
                    <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

