/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir as it's no longer needed in Next.js 14
  images: {
    domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com'],
  },
  // SEO optimizations
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
