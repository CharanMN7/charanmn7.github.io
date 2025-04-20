import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["uvt8fr24f6.ufs.sh", "cdn.buymeacoffee.com"],
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://my-blog-three-virid.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://my-blog-three-virid.vercel.app/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
