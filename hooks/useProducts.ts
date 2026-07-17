"use client";

import { useEffect, useState } from "react";
import { ProductType } from "@/types/product";

export function useProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to retrieve showroom product data entries.");
        }

        const data = await response.json();

        // Synchronized precisely with the unified response payload key structure inside app/api/products/route.ts
        if (data.success) {
          setProducts(data.data || []);
        } else {
          throw new Error(data.error || "Failed to load luxury products.");
        }

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unhandled connection error occurred within the showroom pipeline.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
  };
}

