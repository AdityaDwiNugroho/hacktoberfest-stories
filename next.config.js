/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir as it's no longer needed in Next.js 14
  images: {
    domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true, // Required for static export
  },
  // SEO optimizations
  poweredByHeader: false,
  compress: true,
  // Static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
