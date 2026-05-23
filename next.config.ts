import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // serverExternalPackages: ["playwright-core"],
  serverExternalPackages: ["playwright"],
};

export default nextConfig;
