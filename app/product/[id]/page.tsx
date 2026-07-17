import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  // 1. Resolve asynchronous routing parameter safely
  const { id } = await params;

  // 2. Establish server connection instance using lib/mongodb.ts
  await connectToDatabase();

  // 3. Fetch single item from the database using performance lean optimization
  const product = await Product.findById(id).lean();

  // 4. Trigger global Next.js 404 interceptor if document is missing
  if (!product) {
    notFound();
  }

  // 5. Serialize database properties into client-safe dynamic properties
  const serializedProduct = {
    _id: product._id.toString(),
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category,
    rating: product.rating || 5,
    createdAt: product.createdAt ? product.createdAt.toISOString() : new Date().toISOString(),
    updatedAt: product.updatedAt ? product.updatedAt.toISOString() : new Date().toISOString(),
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] py-32">
      <section className="max-w-7xl mx-auto px-6">
        
        {/* Render detailed product view injection layout smoothly */}
        <ProductDetails product={serializedProduct} />
        
      </section>
    </main>
  );
}

