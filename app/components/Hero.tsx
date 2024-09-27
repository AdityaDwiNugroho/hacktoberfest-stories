import { Star, CheckCircle, Clock, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">4.9/5 dari 150+ review</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bengkel Motor Terpercaya di
              <span className="text-blue-900 block">Yogyakarta</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Spesialis service motor matic dan manual dengan teknisi berpengalaman 15+ tahun. 
              Menggunakan spare part original dan garansi service hingga 6 bulan.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Teknisi Bersertifikat</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Service Cepat 2-3 Jam</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Garansi 6 Bulan</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Spare Part Original</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 text-center"
              >
                Booking Service Sekarang
              </a>
              <a
                href="tel:+6281915539242"
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors duration-200 text-center"
              >
                Hubungi WhatsApp
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-blue-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-96">
                <Image
                  src="/images/workshop-hero.jpg"
                  alt="Iwan Motor - Bengkel Motor Terpercaya di Yogyakarta"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R91ebJjb9kaRWjLoUJqo/TLCJKl3L3oE3gOYFQafAztKl4jKFtGGh/MFAP+ynKlH5f8AHNGBr/Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Iwan Motor</h3>
                  <p className="text-blue-200">Spesialis Motor Matic & Manual</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-900">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">15+</div>
                <div className="text-gray-600 text-sm">Tahun Pengalaman</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className="text-gray-600 text-sm">Motor Diperbaiki</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
