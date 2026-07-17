import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
  isBestSeller: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Product label naming display string identifier entry is mandatory."],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "High-fashion descriptive content copy writing parameters document string layer is required."],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Accounting valuation pricing currency number metric sequence tracking integer is required."],
      min: [0, "Pricing index computation metrics cannot measure evaluation scores less than absolute baseline score zero."],
    },
    category: {
      type: String,
      required: [true, "Boutique drop-down filtering synchronization categorization string tracking entry is mandatory."],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Media resource asset server URL folder directory absolute destination path file tracking string indicator is required."],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, "Inventory numeric copy statement available count tracker descriptor scale verification component is required."],
      default: 0,
      min: [0, "Warehouse asset quantity scaling benchmarks cannot define structural values lesser than zero items units."],
    },
    rating: {
      type: Number,
      default: 5,
      min: [1, "Showroom trust parameters score evaluation matrix limits cannot drop lower than index rank 1 star unit."],
      max: [5, "Exquisite validation scoring rating limits cannot stretch beyond standard master index score 5 star units."],
    },
    isBestSeller: {
      type: Boolean,
      default: false, // Automation tracking parameter highlighting signature iconic pieces metrics layout views across home cards grids
    },
  },
  {
    timestamps: true, // Automating insertion lifecycle timestamps for system collection entities entries updates records tracking
  }
);

// Named export architecture standard optimization preventing internal schema validation layers cache collisions compilation breaks
export const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

  