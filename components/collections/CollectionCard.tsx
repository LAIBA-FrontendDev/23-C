import Link from "next/link";
import Image from "next/image";

interface CollectionCardProps {
  id: string;
  name: string;
  description: string;
  image: string; // URL path or fallback string
}

export default function CollectionCard({
  id,
  name,
  description,
  image,
}: CollectionCardProps) {
  return (
    <div
      className="
      group 
      overflow-hidden 
      rounded-2xl 
      bg-white 
      border 
      border-gray-100 
      shadow-md 
      transition-all 
      duration-500 
      hover:-translate-y-2 
      hover:shadow-xl 
      flex 
      flex-col 
      justify-between
      "
    >
      {/* Visual Asset Container */}
      <div className="relative h-72 w-full bg-[#FAF7F2] overflow-hidden flex items-center justify-center">
        {image && image.startsWith("/") ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
            <span className="text-sm font-serif italic text-gray-400 tracking-wider transition-transform duration-500 group-hover:scale-105">
              {name} Showcase
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-60">
              Luxury Craftsmanship
            </span>
          </div>
        )}
        
        {/* Subtle Decorative Golden Overlay Edge border */}
        <div className="absolute inset-0 border border-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Description Content Module */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#5B0A18] tracking-wide line-clamp-1">
            {name}
          </h3>
          <p className="mt-3 text-sm text-gray-600 font-normal leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Dynamic Navigation Integration targeting master filtering parameters */}
        <div className="mt-6 pt-4 border-t border-gray-100/60">
          <Link
            href={`/collections?category=${encodeURIComponent(name.replace(/\s+Collection|Luxe|Elegance|Chic|Glamour/gi, "").trim())}`}
            className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-[#5B0A18] transition-colors duration-300 hover:text-[#D4AF37] gap-1 group/link"
          >
            Explore Pieces 
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

