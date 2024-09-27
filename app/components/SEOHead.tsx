export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://iwanmotor.com/#organization",
        "name": "Iwan Motor",
        "url": "https://iwanmotor.com",
        "telephone": "+6281915539242",
        "email": "haryantitas@gmail.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://iwanmotor.com/images/logo.png",
          "width": 400,
          "height": 400
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://iwanmotor.com/images/workshop-hero.jpg",
          "width": 1200,
          "height": 630
        },
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
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "150"
        },
        "sameAs": [
          "https://wa.me/6281915539242",
          "https://www.google.com/maps/place/Iwan+Motor/@-7.8545098,110.3566963,17z"
        ]
      },
      {
        "@type": "AutoRepair",
        "@id": "https://iwanmotor.com/#autorepair",
        "name": "Iwan Motor",
        "description": "Service motor matic dan manual profesional di Yogyakarta",
        "serviceType": [
          "Service Rutin Motor",
          "Perbaikan Mesin Motor",
          "Service CVT Motor Matic",
          "Tune Up Motor",
          "Service Kelistrikan Motor",
          "Ganti Oli Motor"
        ],
        "areaServed": {
          "@type": "City",
          "name": "Yogyakarta"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Layanan Service Motor",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Service Rutin Motor",
                "description": "Ganti oli, filter, busi, dan pemeriksaan menyeluruh"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "75000",
                "priceCurrency": "IDR"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Perbaikan Mesin Motor",
                "description": "Overhaul mesin, turun mesin, perbaikan sistem kelistrikan"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "350000",
                "priceCurrency": "IDR"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://iwanmotor.com/#website",
        "url": "https://iwanmotor.com",
        "name": "Iwan Motor - Bengkel Motor Yogyakarta",
        "description": "Website resmi Iwan Motor, bengkel motor terpercaya di Yogyakarta",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://iwanmotor.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "WebPage",
        "@id": "https://iwanmotor.com/#webpage",
        "url": "https://iwanmotor.com",
        "name": "Iwan Motor | Service Motor Terpercaya Yogyakarta",
        "isPartOf": {
          "@id": "https://iwanmotor.com/#website"
        },
        "about": {
          "@id": "https://iwanmotor.com/#organization"
        },
        "description": "Bengkel motor profesional dengan layanan service berkualitas, spare part original, dan teknisi berpengalaman di Yogyakarta.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://iwanmotor.com"
            }
          ]
        },
        "mainEntity": {
          "@id": "https://iwanmotor.com/#organization"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}
