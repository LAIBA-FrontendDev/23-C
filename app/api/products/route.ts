import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";

// GET: Fetch all luxury products for grids and collections
export async function GET() {
  try {
    // 1. Connect to Database using lib/mongodb.ts setup
    await connectToDatabase();

    // 2. Fetch and sort products by latest arrivals
    const products = await Product.find({}).sort({ createdAt: -1 });

    // 3. Return structured data mapped with frontend state expectation
    return NextResponse.json(
      {
        success: true,
        data: products,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Fetch Products API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch products",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// POST: Add new luxury product item
export async function POST(request: Request) {
  try {
    // 1. Connect to Database
    await connectToDatabase();

    // 2. Parse request body
    const body = await request.json();
    const { name, description, price, image, category, rating } = body;

    // 3. Server-side validation check
    if (!name || !description || !price || !image || !category) {
      return NextResponse.json(
        { success: false, error: "Missing required product fields" },
        { status: 400 }
      );
    }

    // 4. Create database entry with structural model
    const product = await Product.create({
      name,
      description,
      price,
      image,
      category,
      rating: rating || 5,
    });

    // 5. Success payload callback
    return NextResponse.json(
      {
        success: true,
        message: "Product created successfully",
        data: product,
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Create Product API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create product",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

