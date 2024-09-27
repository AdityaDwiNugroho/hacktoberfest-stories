'use client'

import { useState } from 'react'
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  MessageCircle,
  CheckCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    motor: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        motor: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon/WhatsApp',
      content: '+62 819-1553-9242',
      link: 'tel:+6281915539242'
    },
    {
      icon: MapPin,
      title: 'Alamat Bengkel',
      content: 'Iwan Motor, Yogyakarta, Daerah Istimewa Yogyakarta',
      link: 'https://www.google.com/maps/place/Iwan+Motor/@-7.8545098,110.3566963,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5640c272c36b:0xc74f6e44ceb0382c!8m2!3d-7.8543921!4d110.3566719!16s%2Fg%2F11c2pp5h30'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 08:00 - 17:00\nMinggu: Tutup',
      link: null
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'haryantitas@gmail.com',
      link: 'mailto:haryantitas@gmail.com'
    }
  ]

  const services = [
    'Service Rutin',
    'Perbaikan Mesin',
    'Service Kelistrikan',
    'Tune Up Performa',
    'Service CVT/Kopling',
    'Service Berkala',
    'Lainnya'
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap melayani Anda dengan pelayanan terbaik. Hubungi kami untuk konsultasi 
            gratis atau booking service motor Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Hubungi Langsung
              </h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/6281915539242"
                  className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat WhatsApp
                </a>
                <a
                  href="tel:+6281915539242"
                  className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Telepon Sekarang
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1234567890123!2d110.3566963!3d-7.8545098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5640c272c36b%3A0xc74f6e44ceb0382c!2sIwan%20Motor!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Iwan Motor"
                className="rounded-xl"
              />
              <div className="bg-white p-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Iwan Motor</h4>
                      <p className="text-gray-600 text-sm">Yogyakarta, Indonesia</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Iwan+Motor/@-7.8545098,110.3566963,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5640c272c36b:0xc74f6e44ceb0382c!8m2!3d-7.8543921!4d110.3566719!16s%2Fg%2F11c2pp5h30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Booking Service
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Booking Berhasil!
                  </h4>
                  <p className="text-gray-600">
                    Terima kasih! Kami akan segera menghubungi Anda untuk konfirmasi jadwal service.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Contoh: +62 812-3456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="motor" className="block text-sm font-medium text-gray-700 mb-2">
                      Merk dan Tipe Motor *
                    </label>
                    <input
                      type="text"
                      id="motor"
                      name="motor"
                      value={formData.motor}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Contoh: Honda Vario 150"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Layanan *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih jenis layanan</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Keluhan atau Catatan Tambahan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jelaskan keluhan motor atau catatan khusus lainnya..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Kirim Booking
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Catatan Penting
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Booking dapat dilakukan H-1 atau langsung datang</li>
                    <li>• Estimasi waktu service 2-3 jam untuk service rutin</li>
                    <li>• Bawa STNK dan kunci serep motor</li>
                    <li>• Konsultasi gratis untuk diagnosa awal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
