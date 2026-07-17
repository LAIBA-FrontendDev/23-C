import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARNING !!
    // Yeh line TypeScript ke errors ko ignore karke project ko deploy kar degi
    ignoreBuildErrors: true,
  },
};

export default nextConfig;


