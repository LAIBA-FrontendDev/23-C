"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ProductType } from "@/types/product";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div
      className="
      group 
      bg-white 
      rounded-2xl 
      border 
      border-gray-100 
      shadow-sm 
      overflow-hidden 
      hover:shadow-xl 
      transition-all 
      duration-500 
      flex 
      flex-col 
      justify-between
      "
    >
      {/* Dynamic Luxury Visual Media Asset Container */}
      <div className="relative h-80 w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
        
        {/* Subtle Decorative Golden Overlay Edge frame */}
        <div className="absolute inset-0 border border-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Description Content Module Dashboard layout panel info */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Synced accurately with Mongoose schema category metadata variables rules */}
          <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-extrabold block">
            {product.category || "Exclusive Statement"}
          </span>
          
          <h3 className="font-serif text-xl font-bold text-gray-900 tracking-wide mt-2 line-clamp-1 group-hover:text-[#5B0A18] transition-colors duration-300">
            {product.name}
          </h3>
          
          <p className="mt-2 text-xs md:text-sm text-gray-500 font-normal leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Master Interactions transactional lower grid actions strip footer */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50">
          <span className="font-sans text-base font-bold text-[#800020] tracking-wider">
            Rs. {Number(product.price).toLocaleString()}
          </span>

          <div className="flex items-center gap-2">
            {/* Dynamic Interactive Shopping Action Button */}
            <button
              onClick={() =>
                addToCart({
                  _id: product._id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                })
              }
              className="bg-[#800020] text-white p-2.5 rounded-full hover:bg-[#FAF7F2] hover:text-[#5B0A18] border border-[#800020] hover:border-[#D4AF37] transition-all duration-300 shadow-sm shadow-[#800020]/10 cursor-pointer"
              aria-label="Add Piece to Shopping Cart"
            >
              <ShoppingCart size={16} className="stroke-[1.8]" />
            </button>

            {/* Anchor Redirection route to single details sheet mapping lookup profiles */}
            <Link
              href={`/product/${product._id}`}
              className="bg-gray-50 border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#5B0A18] hover:text-white hover:border-[#5B0A18] transition-all duration-300 shadow-none hover:shadow-md"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

