"use client";

import Link from "next/link";
import useCart from "@/hooks/useCart";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  // Handle total price dynamic conversion safely
  const calculatedTotal = typeof totalPrice === "function" ? totalPrice() : totalPrice;

  return (
    <main className="bg-[#FAFAFA] py-32 min-h-screen">
      <section className="max-w-6xl mx-auto px-6">
        
        {/* Luxury Section Header */}
        <div className="border-b border-[#D4AF37]/30 pb-6 mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5B0A18] tracking-wide">
            Shopping Cart
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-2 font-medium">
            Review your selected luxury statements
          </p>
        </div>

        {items.length === 0 ? (
          <div className="mt-12 text-center bg-white rounded-2xl border border-gray-100 p-12 shadow-sm">
            <p className="text-gray-500 font-serif italic text-lg mb-6">
              Your luxury shopping cart is empty.
            </p>
            <Link
              href="/collections"
              className="inline-block bg-[#800020] text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-[#5B0A18] border border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300"
            >
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-gray-100 bg-white rounded-2xl p-6 shadow-sm gap-4 transition-all duration-300 hover:shadow-md"
                >
                  <div className="space-y-2">
                    <h2 className="font-serif text-lg font-bold text-gray-900 tracking-wide">
                      {item.name}
                    </h2>
                    <p className="text-[#800020] font-medium text-sm tracking-wider">
                      Rs. {Number(item.price).toLocaleString()}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 w-fit">
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        className="px-2 text-gray-500 hover:text-[#800020] font-bold transition-colors"
                      >
                        —
                      </button>
                      <span className="text-sm font-semibold px-1 text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item._id)}
                        className="px-2 text-gray-500 hover:text-[#800020] font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Item */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-xs uppercase tracking-widest font-bold text-red-700 hover:text-red-500 transition-colors p-2"
                  >
                    Remove Piece
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary Summary Container */}
            <div className="bg-[#FAF7F2] border border-[#D4AF37]/20 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-fit">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#5B0A18] mb-6 border-b border-gray-200 pb-3">
                  Summary
                </h2>
                <div className="flex justify-between items-center text-gray-700 text-sm mb-4">
                  <span>Selected Pieces:</span>
                  <span className="font-semibold">{items.reduce((acc, current) => acc + current.quantity, 0)}</span>
                </div>
                <div className="flex justify-between items-baseline border-t border-gray-200 pt-4 mt-4">
                  <span className="font-serif text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-xl md:text-2xl font-bold text-[#5B0A18] tracking-wider">
                    Rs. {Number(calculatedTotal).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Action Trigger */}
              <div className="mt-8">
                <Link
                  href="/order/checkout"
                  className="block w-full bg-[#800020] text-white text-center px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#5B0A18] border border-[#D4AF37]/40 hover:shadow-lg transition-all duration-300"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>

          </div>
        )}
      </section>
    </main>
  );
}

