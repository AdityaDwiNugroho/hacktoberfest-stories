import Script from 'next/script'

interface AnalyticsProps {
  googleAnalyticsId?: string
}

export default function Analytics({ googleAnalyticsId }: AnalyticsProps) {
  if (!googleAnalyticsId) return null

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </Script>

      {/* Schema.org structured data for better SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRepair',
            name: 'Iwan Motor',
            alternateName: 'Bengkel Iwan Motor',
            description: 'Bengkel motor terpercaya di Yogyakarta, spesialis service motor matic dan manual dengan teknisi berpengalaman 15+ tahun.',
            url: 'https://iwanmotor.com',
            telephone: '+62-819-1553-9242',
            email: 'info@iwanmotor.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Jl. Colombo No.1',
              addressLocality: 'Yogyakarta',
              addressRegion: 'DI Yogyakarta',
              postalCode: '55281',
              addressCountry: 'ID'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -7.7956,
              longitude: 110.3695
            },
            openingHours: [
              'Mo-Sa 08:00-17:00',
              'Su 08:00-12:00'
            ],
            priceRange: '$$',
            currenciesAccepted: 'IDR',
            paymentAccepted: ['Cash', 'Transfer Bank'],
            areaServed: {
              '@type': 'City',
              name: 'Yogyakarta'
            },
            founder: {
              '@type': 'Person',
              name: 'Iwan',
              jobTitle: 'Master Teknisi'
            },
            employee: [
              {
                '@type': 'Person',
                name: 'Iwan',
                jobTitle: 'Master Teknisi'
              },
              {
                '@type': 'Person',
                name: 'Budi Santoso',
                jobTitle: 'Spesialis CVT'
              },
              {
                '@type': 'Person',
                name: 'Ahmad Ridwan',
                jobTitle: 'Teknisi Kelistrikan'
              }
            ],
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: -7.7956,
                longitude: 110.3695
              },
              geoRadius: '25000'
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  name: 'Service Motor Matic',
                  description: 'Service rutin dan perbaikan motor matic semua merk'
                },
                {
                  '@type': 'Offer',
                  name: 'Service Motor Manual',
                  description: 'Service dan perbaikan motor manual dengan spare part original'
                },
                {
                  '@type': 'Offer',
                  name: 'Tune Up Mesin',
                  description: 'Tune up mesin untuk performa optimal'
                },
                {
                  '@type': 'Offer',
                  name: 'Ganti Oli',
                  description: 'Penggantian oli mesin dan oli transmisi'
                },
                {
                  '@type': 'Offer',
                  name: 'Perbaikan CVT',
                  description: 'Spesialis perbaikan sistem CVT motor matic'
                },
                {
                  '@type': 'Offer',
                  name: 'Service Kelistrikan',
                  description: 'Perbaikan sistem kelistrikan motor'
                }
              ]
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '150',
              bestRating: '5',
              worstRating: '1'
            },
            review: [
              {
                '@type': 'Review',
                author: {
                  '@type': 'Person',
                  name: 'Budi Setiawan'
                },
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5'
                },
                reviewBody: 'Service bagus, mekanik profesional, harga terjangkau. Motor saya jadi halus lagi setelah di tune up di sini.'
              },
              {
                '@type': 'Review',
                author: {
                  '@type': 'Person',
                  name: 'Sari Indah'
                },
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: '5',
                  bestRating: '5'
                },
                reviewBody: 'Bengkel recommended! CVT motor saya bermasalah, setelah diperbaiki di sini langsung normal. Teknisinya sangat ahli.'
              }
            ]
          }),
        }}
      />
    </>
  )
}
