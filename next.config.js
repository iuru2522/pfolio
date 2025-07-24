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
    // Optimize for Cloudflare Pages
    output: 'export',
    trailingSlash: true,
    distDir: '.next'
  };
  
  module.exports = nextConfig;