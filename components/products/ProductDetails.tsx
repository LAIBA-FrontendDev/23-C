"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ProductType } from "@/types/product";
import useCart from "@/hooks/useCart";

interface ProductDetailsProps {
  product: ProductType;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start w-full">
      
      {/* High-Fashion Studio Visual Asset Viewport Frame */}
      <div className="relative h-[450px] sm:h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-102"
        />
        {/* Subtle Decorative Golden Edge Border */}
        <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-3xl pointer-events-none" />
      </div>

      {/* Premium Content Specification Panel Stack */}
      <div className="flex flex-col space-y-6 pt-4">
        <div>
          {/* Synchronized accurately with Mongoose schema layout tokens metrics */}
          <span className="text-xs text-[#D4AF37] uppercase tracking-[0.3em] font-extrabold block">
            {product.category || "Luxury Exclusive Piece"}
          </span>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5B0A18] tracking-wide mt-3 leading-tight">
            {product.name}
          </h1>
        </div>

        {/* Narrative Copywriting Block */}
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-normal">
          {product.description}
        </p>

        {/* Accounting Master Currency Tag Layer */}
        <div className="font-sans text-2xl sm:text-3xl font-bold text-[#800020] tracking-wider border-b border-gray-100 pb-4">
          Rs. {Number(product.price).toLocaleString()}
        </div>

        {/* Informational Multi-Box Parameters Grid Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4AF37]/10">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
              Category Matrix
            </p>
            <p className="font-serif text-base font-bold text-[#5B0A18]">
              {product.category || "Luxury Bag"}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/60">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
              Boutique Stock
            </p>
            <p className="font-sans text-base font-bold text-gray-900">
              {product.stock ?? "Available"} Pieces
            </p>
          </div>
        </div>

        {/* Transaction Actions Control Panel Ribbon wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {/* Action Trigger 1: Cart Influx Button */}
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
            className="flex items-center justify-center gap-3 bg-[#800020] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#5B0A18] border border-[#800020] transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
          >
            <ShoppingCart size={16} className="stroke-[2]" />
            Add To Cart
          </button>

          {/* Action Trigger 2: Instant Single Document Purchase Anchor */}
          <Link
            href={`/order/${product._id}`}
            className="block text-center bg-white border border-[#5B0A18] text-[#5B0A18] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#FAF7F2] hover:border-[#D4AF37] transition-all duration-300 shadow-none hover:shadow-md"
          >
            Order Now
          </Link>
        </div>

      </div>
    </section>
  );
}

