import { 
  Wrench, 
  Settings, 
  Zap, 
  Gauge, 
  Car, 
  Shield, 
  Clock, 
  CheckCircle 
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Service Rutin',
      description: 'Ganti oli, filter, busi, dan pemeriksaan menyeluruh',
      price: 'Mulai Rp 75.000',
      features: ['Ganti oli mesin', 'Cek rem', 'Pembersihan karburator', 'Cek rantai'],
      popular: false
    },
    {
      icon: Settings,
      title: 'Perbaikan Mesin',
      description: 'Overhaul mesin, turun mesin, perbaikan sistem kelistrikan',
      price: 'Mulai Rp 350.000',
      features: ['Turun mesin', 'Ganti piston', 'Perbaikan head', 'Garansi 6 bulan'],
      popular: true
    },
    {
      icon: Zap,
      title: 'Service Kelistrikan',
      description: 'Perbaikan starter, alternator, dan sistem kelistrikan motor',
      price: 'Mulai Rp 150.000',
      features: ['Perbaikan starter', 'Ganti kiprok', 'Cek sistem pengisian', 'Tes aki'],
      popular: false
    },
    {
      icon: Gauge,
      title: 'Tune Up Performa',
      description: 'Tingkatkan performa motor dengan tune up profesional',
      price: 'Mulai Rp 200.000',
      features: ['Setting karburator', 'Ganti filter udara', 'Cek timing', 'Optimasi mesin'],
      popular: false
    },
    {
      icon: Car,
      title: 'Service CVT/Kopling',
      description: 'Spesialis CVT motor matic dan kopling motor manual',
      price: 'Mulai Rp 250.000',
      features: ['Bongkar CVT', 'Ganti belt', 'Cek roller', 'Pembersihan pulley'],
      popular: false
    },
    {
      icon: Shield,
      title: 'Service Berkala',
      description: 'Paket service berkala dengan jadwal teratur',
      price: 'Mulai Rp 60.000',
      features: ['Service 1000km', 'Service 5000km', 'Reminder otomatis', 'Diskon member'],
      popular: false
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Terbaik Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan service motor dengan teknisi berpengalaman 
            dan menggunakan spare part berkualitas tinggi
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border ${
                  service.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {service.price}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  service.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-blue-600 hover:text-white'
                }`}>
                  Pilih Layanan
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tidak Yakin Layanan Mana yang Tepat?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Konsultasikan kebutuhan motor Anda dengan teknisi ahli kami. 
              Kami akan memberikan rekomendasi terbaik sesuai kondisi motor Anda.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Konsultasi gratis 24/7</span>
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Konsultasi Gratis Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
