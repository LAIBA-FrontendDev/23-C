"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { ProductType } from "@/types/product";

interface ProductGridProps {
  products: ProductType[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  // Safely distill absolute unique category subsets for filter arrays
  const categories = useMemo(() => {
    if (!products) return [];
    return Array.from(
      new Set(products.map((product) => product.category).filter(Boolean))
    );
  }, [products]);

  // Execute performant client-side data matrix computations pipeline using useMemo hooks
  const filteredProducts = useMemo(() => {
    let result = products ? [...products] : [];

    // 1. Text Search Constraints Filtration
    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query))
      );
    }

    // 2. Strict Category Categorization Constraints Filtration
    if (category) {
      result = result.filter((product) => product.category === category);
    }

    // 3. Dynamic Accounting Sorting Operations Sequence Blocks
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "new") {
      result.sort((a, b) => {
        // Robust safety configuration processing serialization strings safely
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <section id="bestsellers"    className="w-full"  >
      {/* Structural Filter Controls Ribbon Layer */}
      <ProductFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />

      {/* Responsive Visual Dynamic Grid Layout Mapping */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center py-32 rounded-2xl border border-dashed border-gray-200 bg-white p-6 shadow-inner">
          <p className="font-serif italic text-lg text-gray-400 tracking-wide text-center">
            No signature showroom statements found matching your filter selection.
          </p>
        </div>
      )}
    </section>
  );
}

