"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "@/types/product";

export default function WishlistPage() {
  const [items, setItems] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Sync with localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Error parsing wishlist data:", error);
      }
    }
    setLoading(false);
  }, []);

  // Remove item from wishlist and update localStorage
  const removeFromWishlist = (id: string) => {
    const updatedItems = items.filter((item) => item._id !== id);
    setItems(updatedItems);
    localStorage.setItem("wishlist", JSON.stringify(updatedItems));
  };

  if (loading) {
    return (
      <main className="py-32 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#800020]"></div>
      </main>
    );
  }

  return (
    <main className="py-32 bg-[#FAFAFA] min-h-screen">
      <section className="mx-auto max-w-6xl px-6">
        
        {/* Page Heading with Luxury Styling */}
        <div className="border-b border-[#D4AF37]/30 pb-6 mb-10 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#5B0A18] tracking-wide">
            Your Wishlist
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-2 font-medium">
            Your Curated Luxury Pieces
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <p className="text-gray-500 font-serif italic text-lg mb-6">
              Your wishlist is currently empty.
            </p>
            <Link 
              href="/collections" 
              className="inline-block bg-[#800020] text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-[#5B0A18] border border-[#D4AF37]/40 hover:shadow-lg transition-all duration-300"
            >
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item._id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h2 className="text-xl font-serif font-bold text-gray-900 tracking-wide line-clamp-1">
                      {item.name}
                    </h2>
                    <p className="text-[#800020] font-medium mt-2 tracking-wider">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <Link
                      href={`/product/${item._id}`}
                      className="w-full bg-white text-[#800020] text-center border border-[#800020] px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-[#800020] hover:text-white transition-all duration-300"
                    >
                      View Piece
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item._id)}
                      className="w-full bg-[#800020] text-white px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-[#5B0A18] border border-[#D4AF37]/30 transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

