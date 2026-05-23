import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["playwright-core"],
  experimental: {
    bundlePagesExternals: true,
  }
};

export default nextConfig;
