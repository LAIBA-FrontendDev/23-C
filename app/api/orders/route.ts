import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Order } from "@/models/Order";

export async function POST(request: Request) {
  try {
    // 1. Database Connection call based on lib/mongodb.ts
    await connectToDatabase();

    // 2. Parse Request Body
    const body = await request.json();
    const { fullName, email, phone, address, city, productName, productId, price, quantity } = body;

    // 3. Strict Server-Side Validation for E-Commerce Integrity
    if (!fullName || !email || !phone || !address || !city || !productId || !price || !productName) {
      return NextResponse.json(
        { success: false, message: "Missing required order fields" },
        { status: 400 }
      );
    }

    // 4. Create Order using the exact Mongoose named export
    const order = await Order.create({
      fullName,
      email,
      phone,
      address,
      city,
      productName,
      productId,
      price,
      quantity: quantity || 1,
    });

    // 5. Success Response back to client
    return NextResponse.json(
      {
        success: true,
        message: "Order created successfully",
        order,
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Order API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Order failed",
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

