"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Robust core validations matching schemas and database criteria
const orderSchema = z.object({
  name: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid luxury email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().min(5, "Shipping address details are required"),
  city: z.string().min(2, "City name is required"),
  quantity: z.number().min(1, "Minimum purchase quantity is 1"),
});

type OrderFormType = z.infer<typeof orderSchema>;

interface Props {
  product: {
    _id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function OrderForm({ product }: Props) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<OrderFormType>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      quantity: 1
    }
  });

  const submitOrder = async (data: OrderFormType) => {
    setLoading(false);
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: data.name, // Mapped accurately to match api route requirements
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          quantity: data.quantity,
          productName: product.name,
          productId: product._id, // Connected directly to schema expectations
          price: product.price,
        })
      });

      const responseData = await res.json();

      if (res.ok && responseData.success) {
        setStatus({ type: "success", message: "Your luxury order statement has been placed successfully!" });
        reset();
      } else {
        setStatus({ type: "error", message: responseData.message || "Failed to process transaction. Check entries." });
      }
    } catch (error) {
      console.error("Checkout pipeline failure:", error);
      setStatus({ type: "error", message: "Network connection breakdown. Request timed out." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md w-full">
      <h2 className="font-serif text-2xl font-bold text-[#5B0A18] mb-6 border-b border-gray-100 pb-3">
        Delivery Information
      </h2>

      <form onSubmit={handleSubmit(submitOrder)} className="space-y-4">
        {/* Full Name */}
        <div>
          <input
            {...register("name")}
            placeholder="Full Name"
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-[#5B0A18] transition-all bg-white disabled:opacity-50"
          />
          {errors.name?.message && (
            <p className="text-xs text-red-600 mt-1 font-medium font-serif italic">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-[#5B0A18] transition-all bg-white disabled:opacity-50"
          />
          {errors.email?.message && (
            <p className="text-xs text-red-600 mt-1 font-medium font-serif italic">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register("phone")}
            placeholder="Phone Number"
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-[#5B0A18] transition-all bg-white disabled:opacity-50"
          />
          {errors.phone?.message && (
            <p className="text-xs text-red-600 mt-1 font-medium font-serif italic">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <input
            {...register("address")}
            placeholder="Shipping Address"
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-[#5B0A18] transition-all bg-white disabled:opacity-50"
          />
          {errors.address?.message && (
            <p className="text-xs text-red-600 mt-1 font-medium font-serif italic">{errors.address.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <input
            {...register("city")}
            placeholder="City"
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-[#5B0A18] transition-all bg-white disabled:opacity-50"
          />
          {errors.city?.message && (
            <p className="text-xs text-red-600 mt-1 font-medium font-serif italic">{errors.city.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-1.5 ml-0.5">
            Quantity
          </label>
          <input
            type="number"
            {...register("quantity", { valueAsNumber: true })}
            disabled={loading}
            className="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none focus:border-[#5B0A18] transition-all bg-gray-50 font-semibold disabled:opacity-50"
          />
          {errors.quantity?.message && (
            <p className="text-xs text-red-600 mt-1 font-medium font-serif italic">{errors.quantity.message}</p>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#800020] text-white py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#5B0A18] border border-[#D4AF37]/30 shadow-sm transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Authorizing Statement..." : "Place Order"}
          </button>
        </div>

        {/* Interactive Response Alerts UI */}
        {status && (
          <p className={`text-xs mt-3 text-center font-medium font-serif italic ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}

