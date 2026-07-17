import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#5B0A18]
        px-8
        py-3.5
        text-xs
        uppercase
        tracking-widest
        font-bold
        text-white
        border
        border-[#5B0A18]
        shadow-sm
        transition-all
        duration-300
        cubic-bezier(0.4, 0, 0.2, 1)
        hover:bg-[#FAF7F2]
        hover:text-[#5B0A18]
        hover:border-[#D4AF37]
        hover:shadow-md
        active:scale-98
        disabled:cursor-not-allowed
        disabled:opacity-40
        disabled:bg-gray-400
        disabled:text-white
        disabled:border-gray-400
        disabled:shadow-none
        disabled:transform-none
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}

