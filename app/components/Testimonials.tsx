'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rudi Hermawan',
      motor: 'Honda Vario 150',
      rating: 5,
      comment: 'Service CVT motor matic saya di sini hasilnya sangat memuaskan. Motor jadi lebih responsif dan tarikan lebih halus. Teknisinya profesional dan harga fair.',
      date: '2 minggu lalu',
      service: 'Service CVT'
    },
    {
      name: 'Sari Wulandari',
      motor: 'Yamaha Mio M3',
      rating: 5,
      comment: 'Bengkel terpercaya! Motor saya yang sering mogok sekarang sudah normal kembali. Pelayanannya ramah dan dijelaskan dengan detail masalah motornya.',
      date: '1 bulan lalu',
      service: 'Perbaikan Kelistrikan'
    },
    {
      name: 'Bambang Sutrisno',
      motor: 'Suzuki Satria FU',
      rating: 5,
      comment: 'Overhaul mesin motor sport saya di sini hasilnya luar biasa. Performa motor kembali seperti baru dan garansi 6 bulan bikin tenang.',
      date: '3 minggu lalu',
      service: 'Overhaul Mesin'
    },
    {
      name: 'Indah Pratiwi',
      motor: 'Honda Beat',
      rating: 5,
      comment: 'Service rutin di sini selalu puas. Harga transparan, tidak ada biaya tersembunyi. Motor selalu dalam kondisi prima setelah service.',
      date: '1 minggu lalu',
      service: 'Service Rutin'
    },
    {
      name: 'Agus Setiawan',
      motor: 'Kawasaki Ninja 250',
      rating: 5,
      comment: 'Tune up motor sport saya hasilnya sangat bagus. RPM jadi lebih stabil dan konsumsi BBM lebih irit. Recomended banget!',
      date: '2 bulan lalu',
      service: 'Tune Up'
    },
    {
      name: 'Maya Kusuma',
      motor: 'Yamaha NMAX',
      rating: 5,
      comment: 'Bengkel langganan keluarga. Pelayanan selalu memuaskan, teknisi berpengalaman, dan spare part selalu original. Pokoknya top!',
      date: '1 bulan lalu',
      service: 'Service Berkala'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman pelanggan kami yang telah merasakan pelayanan 
            terbaik dari Bengkel Motor Iwan
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[400px]">
              {/* Main Testimonial */}
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="h-12 w-12 text-blue-600 mb-6" />
                
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].comment}"
                </blockquote>

                <div className="flex items-center mb-6">
                  <div className="flex mr-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <span className="text-gray-600">
                    {testimonials[currentIndex].rating}/5 bintang
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].motor}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">
                      {testimonials[currentIndex].service}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentIndex].date}
                  </div>
                </div>
              </div>

              {/* Side Panel with Navigation */}
              <div className="bg-blue-900 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl font-bold mb-6">
                    Testimoni Lainnya
                  </h3>
                  
                  {/* Testimonial previews */}
                  <div className="space-y-4">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                          index === currentIndex % 3 
                            ? 'bg-blue-800' 
                            : 'bg-blue-800/50 hover:bg-blue-800'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                      >
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        <div className="text-white font-medium text-sm mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-blue-200 text-xs">
                          {testimonial.service}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors duration-200"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors duration-200"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="flex justify-center mb-3">
              {renderStars(5)}
            </div>
            <div className="text-gray-600 mb-2">Rating rata-rata dari</div>
            <div className="text-2xl font-bold text-gray-900">150+ Review</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ingin Merasakan Pelayanan Terbaik Kami?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan kepuasan 
            service di Iwan Motor
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Booking Service Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
