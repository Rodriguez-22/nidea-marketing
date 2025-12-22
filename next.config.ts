import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
<<<<<<< HEAD
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
=======
    formats: ['image/avif', 'image/webp'], // Google ama estos formatos
>>>>>>> a9586bd00a3c911f0e737b969e7e4159aee83764
  },
};

export default nextConfig;