import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import OrderForm from "@/components/order/OrderForm";
import OrderSummary from "@/components/order/OrderSummary";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderPage({ params }: PageProps) {
  // 1. Await parameters to strictly comply with modern Next.js asynchronous specs
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  // 2. Establish Server-Side database connection based on lib/mongodb.ts
  await connectToDatabase();

  // 3. Fetch single product piece by its unique hex ID safely
  const product = await Product.findById(productId).lean();

  // 4. Return custom elegant premium Not-Found screen if reference missing
  if (!product) {
    return (
      <main className="min-h-screen py-32 bg-[#FAFAFA] flex flex-col items-center justify-center px-6">
        <div className="text-center bg-white rounded-2xl border border-gray-100 p-12 shadow-sm max-w-md">
          <h1 className="font-serif text-3xl font-bold text-[#5B0A18] mb-4">
            Piece Not Found
          </h1>
          <p className="text-gray-500 font-serif italic mb-6">
            The luxury handbag statement you are looking for does not exist or has been archived.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-[#800020] text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-[#5B0A18] border border-[#D4AF37]/30 transition-all duration-300"
          >
            Back to Collections
          </Link>
        </div>
      </main>
    );
  }

  // 5. Serialize data into simple JavaScript object matching standard product interfaces
  const serializedProduct = {
    _id: product._id.toString(),
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    category: product.category,
    rating: product.rating || 5,
  };

  return (
    <main className="min-h-screen py-32 bg-[#FAFAFA]">
      <section className="max-w-6xl mx-auto px-6">
        
        {/* Luxury Checkout Header Grid info */}
        <div className="border-b border-[#D4AF37]/30 pb-6 mb-12 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#5B0A18] tracking-wide">
            Secure Checkout
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-2 font-medium">
            Finalize your statement selection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Panel: Summary Module */}
          <OrderSummary product={serializedProduct} />

          {/* Right Panel: Transaction Input Modules */}
          <OrderForm product={serializedProduct} />
        </div>
        
      </section>
    </main>
  );
}

