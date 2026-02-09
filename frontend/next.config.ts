import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static HTML export
  trailingSlash: true,
  images: {
    unoptimized: true, // disable Next.js Image Optimization (needed for static export)
  },
};

export default nextConfig;
