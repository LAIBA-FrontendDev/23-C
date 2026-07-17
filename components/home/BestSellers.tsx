import Image from "next/image";
import Link from "next/link";
// Database imports hata kar direct apni products data file import karein
import { products } from "@/data/products"; 

export default function BestSellers() {
  // Database se query karne ke bajaye direct array se filter kar rahe hain
  const data = products
    .filter((product) => product.isBestSeller === true)
    .slice(0, 4);

  return (
    <section id="bestsellers" className="py-28 bg-white border-b border-gray-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Elite Brand Section Header */}
        <div className="text-center mb-20 space-y-2 group/header">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#5B0A18] tracking-wide uppercase transition-all duration-500 hover:tracking-[0.12em] hover:text-[#D4AF37] cursor-default select-none">
            Best Sellers
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
            Our most coveted iconic statements
          </p>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-4 transition-all duration-700 group-hover/header:w-40" />
        </div>

        {/* 4-Column Responsive Premium Grid Product Cards */}
        {data.length === 0 ? (
          <p className="text-center text-gray-400 italic text-sm py-12">
            No bestselling pieces found in the showroom collection.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
            {data.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-2xl border-2 border-[#5B0A18] overflow-hidden hover:-translate-y-3 shadow-sm hover:shadow-[0_25px_60px_rgba(91,10,24,0.7)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Media Container with Adaptive Image Loading */}
                <div className="relative h-80 w-full bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image} // Ab yeh direct data/products.ts ka accurate path uthaye ga
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority={false}
                  />
                  
                  {/* Luxury Brand Styling Badge */}
                  <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#5B0A18] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-md border border-white/20">
                    Best Seller
                  </span>
                </div>

                {/* Content Panel Area */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-[#FAF7F2]/20">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 tracking-wide line-clamp-1 group-hover:text-[#5B0A18] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-[#800020] font-bold text-base tracking-wider transition-transform duration-300 group-hover:translate-x-1">
                      Rs. {Number(product.price).toLocaleString()}
                    </p>
                  </div>

                  {/* Call To Action */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href={`/product/${product._id}`}
                      className="block w-full text-center bg-[#800020] text-white px-5 py-3 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#5B0A18] border border-[#D4AF37]/20 transition-all duration-300 shadow-sm"
                    >
                      View Piece
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

