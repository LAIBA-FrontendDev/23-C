export interface CollectionType {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Elite Curated Mock Collections Dataset synchronized across home showroom modules
export const collections: CollectionType[] = [
  {
    id: "classic",
    name: "The Classic Collection",
    description: "Timeless handbags designed for elegant everyday style, crafted with pristine leather cuts.",
    image: "/images/bags/classic.png",
  },
  {
    id: "royal",
    name: "Royal Elegance",
    description: "Luxury handbags inspired by sophistication and grace, designed for high-end boutique appeal.",
    image: "/images/bags/royal.png",
  },
  {
    id: "urban",
    name: "Urban Chic",
    description: "Modern designs for confident and stylish women, effortlessly blending comfort with high fashion.",
    image: "/images/bags/urban.png",
  },
  {
    id: "evening",
    name: "Evening Glamour",
    description: "Elegant bags and statement clutches tailored perfectly for unforgettable premium occasions.",
    image: "/images/bags/evening.png",
  },
  {
    id: "minimal",
    name: "Minimal Luxe",
    description: "Simple designs with premium finishing, curated for modern professional women projecting power.",
    image: "/images/bags/minimal.png",
  },
  {
    id: "signature",
    name: "Signature Collection",
    description: "Exclusive master pieces representing confidence, elegance, and elite sovereign design aesthetics.",
    image: "/images/bags/signature.png",
  },
];

