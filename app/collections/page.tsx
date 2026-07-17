import ProductGrid from "@/components/products/ProductGrid";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { ProductType } from "@/types/product";

export const metadata = {
  title: "Collections | 23 Collections",
  description: "Explore luxury handbags crafted for the modern woman.",
};

export default async function CollectionsPage() {
  // 1. Establish secure Server-Side connection based on lib/mongodb.ts
  await connectToDatabase();

  // 2. Fetch all products from MongoDB using raw performance optimizations
  const products = await Product.find({})
    .sort({ createdAt: -1 })
    .lean();

  // 3. Serialize MongoDB Documents into standard Client-safe TypeScript Types
  const serializedProducts: ProductType[] = products.map((product: any) => ({
    _id: product._id.toString(),
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category,
    rating: product.rating || 5,
    createdAt: product.createdAt ? product.createdAt.toISOString() : new Date().toISOString(),
    updatedAt: product.updatedAt ? product.updatedAt.toISOString() : new Date().toISOString(),
  }));

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32">
      <section className="max-w-7xl mx-auto px-6">
        
        {/* Luxury Brand Showcase Header */}
        <div className="text-center mb-16 border-b border-[#D4AF37]/20 pb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#5B0A18] tracking-wide uppercase">
            Our Collections
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-3 font-semibold">
            Where Timeless Elegance Meets Modern Luxury
          </p>
          <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto italic font-serif">
            Discover a signature statement carefully curated to celebrate your confidence and sophisticated style.
          </p>
        </div>

        {/* Dynamic Client Grid Component with Optimized Data Influx */}
        <ProductGrid products={serializedProducts} />

      </section>
    </main>
  );
}

