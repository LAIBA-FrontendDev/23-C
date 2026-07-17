"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Sync body scroll layout behavior lock to maintain elite viewport control on state changes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed 
        inset-0 
        z-50 
        flex 
        items-center 
        justify-center 
        bg-black/60 
        backdrop-blur-sm 
        px-4 
        transition-all 
        duration-300
      "
      onClick={onClose}
    >
      {/* Structural Card Container Box Element with Luxury Theme Styling */}
      <div
        className="
          relative 
          w-full 
          max-w-lg 
          rounded-2xl 
          bg-white 
          p-8 
          shadow-2xl 
          border 
          border-[#D4AF37]/10 
          transform 
          transition-all 
          duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Core Lucide Vector Close Controller Button Interface */}
        <button
          onClick={onClose}
          className="
            absolute 
            right-5 
            top-5 
            text-gray-400 
            hover:text-[#5B0A18] 
            transition-colors 
            duration-300 
            p-1.5 
            rounded-full 
            hover:bg-gray-50 
            cursor-pointer
          "
          aria-label="Close Luxury Dialog Overlay Window"
        >
          <X size={18} className="stroke-[2]" />
        </button>

        {/* Injected Content Inner Layout Dynamic Wrapper Module Slot */}
        <div className="w-full mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
