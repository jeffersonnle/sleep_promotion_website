import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint errors during production build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript errors during production build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
