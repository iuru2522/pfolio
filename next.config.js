/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
    serverExternalPackages: ['@react-email/render', '@react-email/tailwind'],
    experimental: {
      serverActions: {},
    },
  };
  
  module.exports = nextConfig;