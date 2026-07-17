import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOrder extends Document {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  productId: mongoose.Types.ObjectId;
  productName: string;
  price: number;
  quantity: number;
  status: "Pending" | "Shipped" | "Delivered";
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    fullName: {
      type: String,
      required: [true, "Customer full name parameter string description registration is mandatory."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Customer transaction contact email address verification identifier field is required."],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Contact verification mobile telephone tracking reference layer field is required."],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Detailed physical logistics home location delivery shipping framework address description line field data target element tracking block is required."],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "Logistics delivery target municipality shipping reference city parameter descriptor code entry is required."],
      trim: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product", // Explicit relational database schema binding mapping link tracking references configuration token model mapping metrics securely
      required: [true, "Core product collection object database relational hex string reference link sequence key identifier is mandatory."],
    },
    productName: {
      type: String,
      required: [true, "Product inventory statement item catalog entry display label name descriptor parameter string data is mandatory."],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Accounting monetary currency calculation pricing valuation metric base integer payload tracking sequence field is mandatory."],
    },
    quantity: {
      type: Number,
      required: [true, "Transaction inventory acquisition distribution quantity numerical scale index validation parameter element is required."],
      default: 1,
      min: [1, "Order baseline payload quantity distribution cannot measure calculation indexes less than a baseline index score of 1 copy item descriptor."],
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      default: "Pending", // Custom logistics fulfillment automated management property layer framework variables definition setup blocks patterns tracker
    },
  },
  {
    timestamps: true, // Automating the system default schema insertion lifecycle data tracking timestamps properties attributes keys
  }
);

// Named export structural registry optimization layer preventing internal mongoose layout schemas collisions compilation blocks
export const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

  