import React, { ForwardedRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  placeholder?: string;
  error?: string;
}

const Input = React.forwardRef(
  (
    { type = "text", name, placeholder, error, className = "", ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <input
          type={type}
          name={name}
          ref={ref}
          placeholder={placeholder}
          {...props}
          className={`
            w-full 
            rounded-xl 
            border 
            border-gray-200 
            bg-gray-50/50 
            px-4 
            py-3 
            text-sm 
            font-medium 
            text-gray-900 
            placeholder-gray-400 
            outline-none 
            transition-all 
            duration-300 
            focus:bg-white 
            focus:border-[#5B0A18] 
            focus:ring-4 
            focus:ring-[#5B0A18]/5 
            disabled:opacity-40 
            disabled:cursor-not-allowed
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" : ""} 
            ${className}
          `}
        />
        {/* Dynamic Client Form Framework Validation Error Messages output node */}
        {error && (
          <p className="text-xs text-red-600 font-medium font-serif italic ml-0.5 mt-0.5">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

