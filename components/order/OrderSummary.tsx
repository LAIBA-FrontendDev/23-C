import Image from "next/image";

interface OrderSummaryProps {
  product: {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function OrderSummary({ product }: OrderSummaryProps) {
  return (
    <div
      className="
      bg-white 
      rounded-2xl 
      shadow-md 
      p-6 
      border 
      border-gray-100 
      w-full
      "
    >
      {/* Luxury Block Title Showcase */}
      <h2 className="font-serif text-2xl font-bold text-[#5B0A18] mb-6 border-b border-gray-100 pb-3">
        Order Summary
      </h2>

      {/* High-Fashion Media Aspect Box Container */}
      <div className="relative h-72 rounded-xl overflow-hidden bg-gray-50 border border-gray-100/60 shadow-inner group">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 group-hover:scale-102"
          priority
        />
        
        {/* Subtle Luxury Corner Stamp overlay */}
        <div className="absolute bottom-3 right-3 bg-[#5B0A18]/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded border border-[#D4AF37]/30 select-none">
          Showroom Piece
        </div>
      </div>

      {/* Meta Specifications Description Stack */}
      <div className="mt-6 space-y-2">
        <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-extrabold block">
          {product.category || "Luxury Statement"}
        </span>
        
        <h3 className="font-serif text-2xl font-bold text-gray-900 tracking-wide leading-tight">
          {product.name}
        </h3>
        
        <p className="text-xs text-gray-500 font-normal leading-relaxed line-clamp-3 pt-1 border-t border-gray-50 mt-2">
          {product.description}
        </p>
      </div>

      {/* Master Accounting Grand Financial Layer */}
      <div className="mt-6 pt-5 border-t border-gray-100 bg-[#FAF7F2]/40 rounded-xl p-4 flex flex-row items-baseline justify-between">
        <span className="font-serif text-sm font-bold text-gray-700">Subtotal Price:</span>
        <span className="text-2xl font-bold text-[#5B0A18] tracking-wider font-sans">
          Rs. {Number(product.price).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

