import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Optimize luxury fonts integration
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Production-ready Elite SEO Metadata Config
export const metadata: Metadata = {
  title: "23 Collections | Luxury Handbags Crafted For The Modern Woman",
  description: "Where timeless elegance meets modern luxury. Discover premium women's handbags designed for those who carry absolute confidence.",
  keywords: ["luxury handbags", "women fashion bags", "designer purses", "premium luxury accessories", "23 collections"],
  authors: [{ name: "23 Collections" }],
  metadataBase: new URL("https://vercel.app"), // Fallback base URL for metadata tracking
  openGraph: {
    title: "23 Collections | Luxury Handbags",
    description: "Luxury handbags crafted for the modern woman.",
    url: "/",
    siteName: "23 Collections",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Next.js 15 separate viewport configuration injection
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${playfair.variable} 
          ${inter.variable} 
          antialiased 
          min-h-screen 
          flex 
          flex-col 
          bg-[#FAFAFA]
        `}
      >
        {/* Global Luxury Navigation System */}
        <Navbar />

        {/* Dynamic Inner Layout Body wrapper ensuring perfect viewport flexibility */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Persistent Brand Footer Module */}
        <Footer />
      </body>
    </html>
  );
}

