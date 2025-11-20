import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // generate static HTML
  images: {
    unoptimized: true,    // required for GitHub Pages
  },
};

export default nextConfig;
