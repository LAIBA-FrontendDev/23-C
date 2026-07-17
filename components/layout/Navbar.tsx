"use client";

import Link from "next/link";
import { Menu, Heart, User, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Smooth scroll logic for single page sections
  const handleScroll = (id: string) => {
    setOpen(false); // Close mobile drawer if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#5B0A18] shadow-xl border-b border-[#D4AF37]/10 backdrop-blur-sm">
      {/* Tall Luxury Navbar - Height h-28 */}
      <nav className="mx-auto flex h-28 max-w-7xl items-center justify-between px-8 lg:px-12">
        
        {/* Left Side: Brand Identity Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.15em] text-white transition-all duration-500 hover:text-[#D4AF37] uppercase select-none cursor-pointer text-left hover:scale-105 active:scale-95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_10px_rgba(212,175,55,0.4)]"
        >
          23 Collections
        </button>

        {/* Right Side: Navigation Links & Luxury Icons */}
        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="text-xs uppercase tracking-[0.2em] font-bold text-white/90 transition-all duration-500 hover:text-[#D4AF37] cursor-pointer inline-block transform hover:scale-110 active:scale-95 hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)] relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#D4AF37] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-500"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="text-xs uppercase tracking-[0.2em] font-bold text-white/90 transition-all duration-500 hover:text-[#D4AF37] cursor-pointer inline-block transform hover:scale-110 active:scale-95 hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)] relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#D4AF37] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-500"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("featured")}
                className="text-xs uppercase tracking-[0.2em] font-bold text-white/90 transition-all duration-500 hover:text-[#D4AF37] cursor-pointer inline-block transform hover:scale-110 active:scale-95 hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)] relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#D4AF37] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-500"
              >
                Collections
              </button>
            </li>
            
            {/* COLLECTIONS BUTTON: Now scrolls to the product/collection section section */}
            <li>
              <button
                onClick={() => handleScroll("bestsellers")}
                className="text-xs uppercase tracking-[0.2em] font-bold text-white/90 transition-all duration-500 hover:text-[#D4AF37] cursor-pointer inline-block transform hover:scale-110 active:scale-95 hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)] relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#D4AF37] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-500"
              >
                Best Sellers
              </button>
            </li>

            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-xs uppercase tracking-[0.2em] font-bold text-white/90 transition-all duration-500 hover:text-[#D4AF37] cursor-pointer inline-block transform hover:scale-110 active:scale-95 hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)] relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#D4AF37] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-500"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Icon controls suite panel */}
          <div className="flex items-center gap-4 text-white border-l border-white/10 pl-6">
            <button
              onClick={() => handleScroll("reviews")}
              className="transition-all duration-500 hover:text-[#D4AF37] p-2 cursor-pointer transform hover:scale-120 hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)]"
              title="Reviews"
            >
              <Heart size={20} className="stroke-[1.5]" />
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="transition-all duration-500 hover:text-[#D4AF37] p-2 cursor-pointer transform hover:scale-120 hover:drop-shadow-[0_4px_8px_rgba(212,175,55,0.5)]"
              title="Account"
            >
              <User size={20} className="stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Responsive Mobile Controllers */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => handleScroll("reviews")}
            className="text-white p-2 cursor-pointer transition-all duration-300 hover:text-[#D4AF37]"
          >
            <Heart size={22} className="stroke-[1.5]" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none p-2 cursor-pointer transition-all duration-300 hover:text-[#D4AF37]"
            aria-label="Toggle Mobile Menu"
          >
            {open ? <X size={26} className="stroke-[1.5]" /> : <Menu size={26} className="stroke-[1.5]" />}
          </button>
        </div>

      </nav>

      {/* Responsive Structural Overlay Drawer Panel Layer */}
      {open && (
        <div className="bg-[#5B0A18] border-t border-white/5 px-8 py-8 lg:hidden shadow-inner transition-all duration-300 ease-in-out">
          <ul className="space-y-5">
            <li>
              <button onClick={() => handleScroll("home")} className="block w-full text-left text-sm uppercase tracking-widest font-semibold text-white/90 hover:text-[#D4AF37] py-2 border-b border-white/5 cursor-pointer">Home</button>
            </li>
            <li>
              <button onClick={() => handleScroll("about")} className="block w-full text-left text-sm uppercase tracking-widest font-semibold text-white/90 hover:text-[#D4AF37] py-2 border-b border-white/5 cursor-pointer">About</button>
            </li>
            <li>
              <button onClick={() => handleScroll("featured")} className="block w-full text-left text-sm uppercase tracking-widest font-semibold text-white/90 hover:text-[#D4AF37] py-2 border-b border-white/5 cursor-pointer">Collections</button>
            </li>
            <li>
              <button onClick={() => handleScroll("bestsellers")} className="block w-full text-left text-sm uppercase tracking-widest font-semibold text-white/90 hover:text-[#D4AF37] py-2 border-b border-white/5 cursor-pointer">Best Sellers</button>
            </li>
            <li>
              <button onClick={() => handleScroll("contact")} className="block w-full text-left text-sm uppercase tracking-widest font-semibold text-white/90 hover:text-[#D4AF37] py-2 border-b border-white/5 cursor-pointer">Contact</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

