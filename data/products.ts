import { ProductType } from "@/types/product";

// Elite Curated Mock Datasets strictly matching Mongoose models schema properties and type attributes
export const products: ProductType[] = [
  {
    _id: "65a123456789abcdef000001", // Mapped with valid Hex String representations for smooth layout operations
    name: "Royal Maroon Elegance",
    description: "A premium luxury handbag designed with timeless elegance, pristine stitching configurations, and modern sophistication.",
    price: 20000,
    category: "Royal", // Perfectly synchronized with dropdown filter components mapping loops criteria rules
    image: "/images/bags/best-1.png",
    stock: 10,
    rating: 5,
    isBestSeller: true,
    createdAt: "2026-01-01T12:00:00.000Z",
    updatedAt: "2026-01-01T12:00:00.000Z"
  },
  {
    _id: "65a123456789abcdef000002",
    name: "Classic Pearl Handbag",
    description: "A classic leather handbag crafted explicitly for sophisticated women who love minimal, elegant, and timeless fashion statements.",
    price: 25000,
    category: "Classic",
    image: "/images/bags/bag-3.png",
    stock: 15,
    rating: 5,
    isBestSeller: false,
    createdAt: "2026-01-02T12:00:00.000Z",
    updatedAt: "2026-01-02T12:00:00.000Z"
  },
  {
    _id: "65a123456789abcdef000003",
    name: "Urban Chic Bag",
    description: "A highly stylish high-fashion everyday handbag effortlessly combining structural comfort with elite luxury showroom design metrics.",
    price: 28000,
    category: "Urban",
    image: "/images/bags/bag-4.png",
    stock: 20,
    rating: 4,
    isBestSeller: true,
    createdAt: "2026-01-03T12:00:00.000Z",
    updatedAt: "2026-01-03T12:00:00.000Z"
  },
  {
    _id: "65a123456789abcdef000004",
    name: "Evening Glamour Clutch",
    description: "An incredibly elegant exquisite evening luxury statement clutch bag perfect for unforgettable special occasions and formal elite gala events.",
    price: 32000,
    category: "Evening",
    image: "/images/bags/bag-1.png",
    stock: 8,
    rating: 5,
    isBestSeller: true,
    createdAt: "2026-01-04T12:00:00.000Z",
    updatedAt: "2026-01-04T12:00:00.000Z"
  },
  {
    _id: "65a123456789abcdef000005",
    name: "Minimal Luxe Bag",
    description: "Simple yet extraordinarily luxurious premium leather handbag tailored for modern professional women who project executive power and style.",
    price: 29000,
    category: "Minimal",
    image: "/images/bags/bag-5.png",
    stock: 12,
    rating: 4,
    isBestSeller: false,
    createdAt: "2026-01-05T12:00:00.000Z",
    updatedAt: "2026-01-05T12:00:00.000Z"
  },
  {
    _id: "65a123456789abcdef000006",
    name: "Signature Collection Bag",
    description: "Our absolute master signature piece representing pristine confidence, premium luxury craftsmanship materials, and elite sovereign design aesthetics.",
    price: 35000,
    category: "Signature",
    image: "/images/bags/bag-6.png",
    stock: 5,
    rating: 5,
    isBestSeller: true,
    createdAt: "2026-01-06T12:00:00.000Z",
    updatedAt: "2026-01-06T12:00:00.000Z"
  }
];

