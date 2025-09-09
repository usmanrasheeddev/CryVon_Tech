import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ✅ build ke time ESLint errors ignore ho jayenge
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
