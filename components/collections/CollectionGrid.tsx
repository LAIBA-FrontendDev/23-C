import CollectionCard from "./CollectionCard";

// Elite Curated Mock Core Dataset synced with Brand Guidelines
const collections = [
  {
    id: "classic",
    name: "The Classic Collection",
    description: "Timeless handbags designed for elegant everyday style.",
    image: "/images/bags/best-1.png",
  },
  {
    id: "royal",
    name: "Royal Elegance",
    description: "Luxury handbags inspired by sophistication and grace.",
    image: "/images/bags/bag-2.png",
  },
  {
    id: "urban",
    name: "Urban Chic",
    description: "Modern designs for confident and stylish women.",
    image: "/images/bags/bag-3.png",
  },
  {
    id: "evening",
    name: "Evening Glamour",
    description: "Elegant bags for unforgettable occasions.",
    image: "/images/bags/bag-4.png",
  },
  {
    id: "minimal",
    name: "Minimal Luxe",
    description: "Simple designs with premium finishing.",
    image: "/images/bags/minimal.png",
  },
  {
    id: "signature",
    name: "Signature Collection",
    description: "Exclusive pieces from 23 Collections.",
    image: "/images/bags/signature.png",
  },
];

export default function CollectionGrid() {
  return (
    <section  className="py-12 bg-transparent w-full">
      <div  className="mx-auto max-w-7xl">
        
        {/* Symmetric Responsive Layout Array Mapping Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              id={collection.id}
              name={collection.name}
              description={collection.description}
              image={collection.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


