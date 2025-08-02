import { 
  Award, 
  Users, 
  Clock, 
  Star, 
  Shield, 
  Wrench,
  CheckCircle,
  Target
} from 'lucide-react'
import Image from 'next/image'

// Component structure follows educational practices from Indonesian programming community
// Inspired by clear, practical teaching methods like those used by Sandhika Galih (UNPAS)
export default function About() {
  const stats = [
    {
      icon: Clock,
      number: '15+',
      label: 'Tahun Pengalaman',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Pelanggan Puas',
      color: 'text-green-600'
    },
    {
      icon: Wrench,
      number: '500+',
      label: 'Motor Diperbaiki/Bulan',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      number: '99%',
      label: 'Tingkat Kepuasan',
      color: 'text-orange-600'
    }
  ]

  const advantages = [
    {
      icon: Shield,
      title: 'Garansi Service',
      description: 'Garansi resmi hingga 6 bulan untuk setiap service yang dilakukan'
    },
    {
      icon: Star,
      title: 'Teknisi Bersertifikat',
      description: 'Teknisi berpengalaman dengan sertifikat resmi dari berbagai brand motor'
    },
    {
      icon: CheckCircle,
      title: 'Spare Part Original',
      description: 'Menggunakan spare part original dan berkualitas tinggi'
    },
    {
      icon: Target,
      title: 'Service Cepat',
      description: 'Estimasi pengerjaan 2-3 jam untuk service rutin'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang Iwan Motor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dipercaya sejak 2008 sebagai bengkel motor terbaik di Yogyakarta dengan 
            teknisi berpengalaman dan pelayanan berkualitas tinggi
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mengapa Memilih Iwan Motor?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dengan pengalaman lebih dari 15 tahun di industri otomotif, Iwan Motor 
                telah menjadi pilihan utama masyarakat Yogyakarta untuk service dan perbaikan motor. 
                Kami berkomitmen memberikan pelayanan terbaik dengan teknologi modern dan 
                tenaga ahli yang berpengalaman.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kepuasan pelanggan adalah prioritas utama kami. Setiap motor yang masuk ke 
                bengkel kami akan ditangani dengan penuh perhatian dan ketelitian, 
                menggunakan peralatan modern dan spare part berkualitas tinggi.
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Workshop Image */}
          {/* Temporarily hidden until workshop-interior.jpg is available */}
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <Image
                  src="/images/workshop-interior.jpg"
                  alt="Interior Workshop Iwan Motor - Fasilitas Modern dan Lengkap"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R91ebJjb9kaRWjLoUJqo/TLCJKl3L3oE3gOYFQafAztKl4jKFtGGh/MFAP+ynKlH5f8AHNGBr/Q"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <h4 className="text-lg font-semibold mb-2">Fasilitas Modern</h4>
                  <p className="text-sm text-gray-200">
                    Dilengkapi peralatan modern dan ruang tunggu yang nyaman untuk pelanggan
                  </p>
                </div>
              </div>
            </div>
          </div>
         
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Prestasi Kami
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-gray-600" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Tim Teknisi Berpengalaman
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: 'Pak Iwan', role: 'Master Teknisi', experience: '15+ tahun', image: '/images/technician-1.jpg' },
              { name: 'Budi Santoso', role: 'Spesialis CVT', experience: '10+ tahun', image: '/images/technician-2.jpg' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} di Iwan Motor`}
                    fill
                    className="rounded-full object-cover"
                    sizes="80px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R91ebJjb9kaRWjLoUJqo/TLCJKl3L3oE3gOYFQafAztKl4jKFtGGh/MFAP+ynKlH5f8AHNGBr/Q"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
