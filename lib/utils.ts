import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Formats a raw numerical price balance securely into the premium Pakistani Showroom Currency representation template specs.
 * @param price - Raw numeric value sequence data descriptor tracking block input.
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Premium Utility Matrix combining clsx structural class generation with dynamic performant tailwind merge evaluations runtime handles.
 * Preventing layout properties compilation blocks string collisions effectively across custom luxury components sheet inputs wrappers.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}


