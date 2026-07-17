import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import BestSellers from "@/components/home/BestSellers";
import Reviews from "@/components/home/Reviews";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA] overflow-hidden">
      
      {/* 1. Hero Section - Dynamic Intro & Main Call To Action */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Featured Collections - Showcase of Top 6 Luxury Segments */}
      <section id="collections">
        <FeaturedCollections />
      </section>

      {/* 3. About Section - Brand Identity & Storytelling Layout */}
      <section id="about">
        <About />
      </section>

      {/* 4. Best Sellers - Highlighting Trending Statement Pieces */}
      <section id="bestsellers">
        <BestSellers />
      </section>

      {/* 6. Customer Reviews - Social Proof & Elite Trust System */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* 7. Contact Section - Customer Interaction & Message Form */}
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

