import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#5B0A18] text-white border-t border-[#D4AF37]/20 w-full mt-auto">
      
      {/* 3-Column Balanced Grid Matrix Layout */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 lg:px-8 items-start">
        
        {/* Brand Information Module */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl font-bold text-[#D4AF37] tracking-wide select-none">
            23 Collections
          </h2>
          <p className="text-sm text-gray-200/90 leading-relaxed font-normal">
            Luxury handbags crafted specifically for the modern woman. Discover a signature statement where timeless elegance meets absolute, sovereign confidence.
          </p>
        </div>

        {/* Dynamic Navigational Target Links Panel */}
        <div>
          <h3 className="mb-4 text-serif text-lg font-bold text-[#D4AF37] tracking-wider uppercase text-xs">
            Quick Navigation
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/#home" className="text-gray-200 hover:text-[#D4AF37] transition-colors duration-300">
                Home Showroom
              </Link>
            </li>
            <li>
              <Link href="/collections" className="text-gray-200 hover:text-[#D4AF37] transition-colors duration-300">
                Our Collections
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-gray-200 hover:text-[#D4AF37] transition-colors duration-300">
                Brand Story
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-gray-200 hover:text-[#D4AF37] transition-colors duration-300">
                Boutique Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Corporate Contact Information Grid Anchor */}
        <div>
          <h3 className="mb-4 text-serif text-lg font-bold text-[#D4AF37] tracking-wider uppercase text-xs">
            Boutique Concierge
          </h3>
          <div className="space-y-2 text-sm text-gray-200/90 font-normal">
            <p className="flex gap-2">
              <span className="text-[#D4AF37] font-semibold">Email:</span> 
              <span className="hover:text-[#D4AF37] transition-colors select-all">info@23collections.com</span>
            </p>
            <p className="flex gap-2">
              <span className="text-[#D4AF37] font-semibold">Phone:</span> 
              <span className="hover:text-[#D4AF37] transition-colors select-all">+92 300 0000000</span>
            </p>
            <p className="flex gap-2">
              <span className="text-[#D4AF37] font-semibold">HQ:</span> 
              <span>Pakistan Showroom Center</span>
            </p>
          </div>
        </div>

      </div>

      {/* Symmetric Trademark Closure Lower Ribbon */}
      <div className="border-t border-white/10 bg-black/10 py-5 text-center text-xs tracking-wider text-gray-300 font-normal">
        &copy; {new Date().getFullYear()} <span className="font-serif text-[#D4AF37] font-bold">23 Collections</span>. All luxury statements reserved globally.
      </div>

    </footer>
  );
}

