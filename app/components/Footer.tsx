import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Kontak', href: '#contact' }
  ]

  const services = [
    'Service Rutin',
    'Perbaikan Mesin',
    'Service Kelistrikan',
    'Tune Up Performa',
    'Service CVT/Kopling',
    'Service Berkala'
  ]

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/6281915539242',
      color: 'hover:text-green-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/bengkeliwan',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/bengkeliwan',
      color: 'hover:text-pink-500'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Iwan Motor
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Bengkel motor terpercaya sejak 2008 dengan teknisi berpengalaman 
              dan pelayanan berkualitas tinggi di Yogyakarta.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Iwan Motor<br />
                    Yogyakarta<br />
                    Daerah Istimewa Yogyakarta
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+6281915539242"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +62 819-1553-9242
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:haryantitas@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  haryantitas@gmail.com
                </a>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Senin - Sabtu: 08:00 - 17:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              Butuh Service Motor Segera?
            </h3>
            <p className="text-blue-200 mb-4">
              Hubungi kami sekarang untuk konsultasi gratis dan booking service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281915539242"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat WhatsApp
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <a
                href="tel:+6281915539242"
                className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Iwan Motor. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Iwan Motor",
            "image": "https://iwanmotor.com/logo.png",
            "description": "Bengkel motor terpercaya di Yogyakarta spesialis service motor matic dan manual dengan teknisi berpengalaman 15+ tahun",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Iwan Motor",
              "addressLocality": "Yogyakarta",
              "addressRegion": "Daerah Istimewa Yogyakarta",
              "postalCode": "55000",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -7.8543921,
              "longitude": 110.3566719
            },
            "telephone": "+6281915539242",
            "email": "haryantitas@gmail.com",
            "url": "https://iwanmotor.com",
            "openingHours": "Mo-Sa 08:00-17:00",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "150"
            }
          })
        }}
      />
    </footer>
  )
}
