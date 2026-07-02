import type { Metadata } from 'next'
import { siteContent } from '@/lib/content'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

const SITE_URL = 'https://meridianfamilymedicine-demo.com' // [DEMO] replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.website || 'https://demo.local'),
  title: {
    default: siteContent.seoTitle,
    template: `%s | ${siteContent.practiceName}`,
  },
  description: siteContent.seoDescription,
  keywords: siteContent.seoKeywords,
  openGraph: {
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
    url: siteContent.website,
    siteName: siteContent.practiceName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalOrganization', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Meridian Family Medicine',
  alternateName: 'Meridian Family Med',
  description:
    'Board-certified family medicine practice in Meridian, Idaho offering annual wellness exams, chronic disease management, same-day sick visits, preventive screenings, and more.',
  url: SITE_URL,
  telephone: '+12085550185',
  email: 'info@meridianfamilymedicine-demo.com', // [DEMO] replace with real email
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1765 W McMillan Rd Suite 110',
    addressLocality: 'Meridian',
    addressRegion: 'ID',
    postalCode: '83642',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '42.5629', // [DEMO] verify exact coordinates
    longitude: '-114.4609', // [DEMO] verify exact coordinates
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '12:00',
    },
  ],
  medicalSpecialty: 'GeneralPractice',
  priceRange: '$$',
  hasMap: 'https://maps.google.com/?q=1765+W+McMillan+Rd+Suite+110+Meridian+ID+83642', // [DEMO] verify map link
  member: {
    '@id': `${SITE_URL}/#physician`,
  },
  sameAs: [
    'https://www.healthgrades.com', // [DEMO] add real profile URLs
    'https://www.vitals.com',
  ],
}

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': ['Physician', 'Person'],
  '@id': `${SITE_URL}/#physician`,
  name: 'Dr. Emily Johnson',
  givenName: 'Lisa',
  familyName: 'Patel',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'MD, FAAFP',
  jobTitle: 'Board-Certified Family Medicine Physician',
  medicalSpecialty: 'GeneralPractice',
  description:
    'Dr. Emily Johnson is a board-certified family medicine physician with 12 years of experience, serving patients in Meridian, Idaho. She completed her training at the University of Michigan Medical School and UW Family Medicine Residency.',
  worksFor: {
    '@id': `${SITE_URL}/#organization`,
  },
  affiliation: {
    '@type': 'Hospital',
    name: "St. Luke's Magic Valley Regional Medical Center",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Meridian',
      addressRegion: 'ID',
    },
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'University of Michigan Medical School',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'UW Family Medicine Residency',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
        {/* Mobile fixed-bottom "Book Appointment" bar — only on small screens */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <Link
            href="/appointments"
            className="flex items-center justify-center w-full py-4 text-white font-bold text-base tracking-wide shadow-2xl cursor-pointer"
            style={{ backgroundColor: '#064e3b' }}
          >
            Book Appointment
          </Link>
        </div>
        {/* Spacer so content isn't hidden behind the fixed bottom bar on mobile */}
        <div className="h-14 md:hidden" aria-hidden="true" />
      </body>
    </html>
  )
}
