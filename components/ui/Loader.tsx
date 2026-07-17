interface LoaderProps {
  fullPage?: boolean;
}

export default function Loader({ fullPage = false }: LoaderProps) {
  return (
    <div
      className={`
        flex 
        items-center 
        justify-center 
        transition-all 
        duration-300
        ${fullPage ? "fixed inset-0 min-h-screen w-screen bg-white/80 backdrop-blur-sm z-50 py-0" : "w-full py-12"}
      `}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        {/* Symmetric Luxury High-Fashion Spinning Micro-Graphic */}
        <div
          className="
            h-12 
            w-12 
            animate-spin 
            rounded-full 
            border-4 
            border-[#D4AF37]/20 
            border-t-[#5B0A18]
          "
          style={{ borderRightColor: "var(--gold, #D4AF37)" }}
        />
        
        {/* Subdued Premium Monogram Label for site-wide consistency */}
        {fullPage && (
          <span className="font-serif text-xs uppercase tracking-widest text-[#5B0A18] font-bold animate-pulse mt-2 select-none">
            23 Collections
          </span>
        )}
      </div>
    </div>
  );
}


