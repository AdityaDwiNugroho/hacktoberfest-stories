import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/_next/'],
    },
    sitemap: 'https://iwan-motor-git-main-adityaadn.vercel.app/sitemap.xml',
  }
}
