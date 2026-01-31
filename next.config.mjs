/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 🔥 FIX image timeout
    remotePatterns: [
      {
        protocol: "https",
        hostname: "realestate123.pythonanywhere.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
