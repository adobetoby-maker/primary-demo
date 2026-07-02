import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const SITE_URL = 'https://meridianfamilymedicine-demo.com' // [DEMO] update with real domain

export const metadata: Metadata = {
  title: 'Contact Us | Meridian Family Medicine, ID',
  description:
    'Contact Meridian Family Medicine. Address: 1765 W McMillan Rd Suite 110, Meridian, ID 83642. Phone: (208) 555-0185. Mon–Fri 8 AM–5 PM, Sat 9 AM–12 PM.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Meridian Family Medicine, ID',
    description:
      'Contact Meridian Family Medicine. 1765 W McMillan Rd Suite 110, Meridian, ID 83642. (208) 555-0185.',
    url: `${SITE_URL}/contact`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Contact Meridian Family Med' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Meridian Family Medicine, ID',
    description: 'Contact Meridian Family Medicine. 1765 W McMillan Rd Suite 110, Meridian, ID. (208) 555-0185.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalOrganization', 'LocalBusiness'],
  name: 'Meridian Family Medicine',
  description: 'Board-certified family medicine practice in Meridian, Idaho.',
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
    latitude: '42.5629', // [DEMO] verify coordinates
    longitude: '-114.4609', // [DEMO] verify coordinates
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
  hasMap: 'https://maps.google.com/?q=1765+W+McMillan+Rd+Suite+110+Meridian+ID+83642', // [DEMO] verify
  medicalSpecialty: 'GeneralPractice',
  priceRange: '$$',
}

const hours = [
  { day: 'Monday', open: '8:00 AM', close: '5:00 PM', closed: false },
  { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM', closed: false },
  { day: 'Wednesday', open: '8:00 AM', close: '5:00 PM', closed: false },
  { day: 'Thursday', open: '8:00 AM', close: '5:00 PM', closed: false },
  { day: 'Friday', open: '8:00 AM', close: '5:00 PM', closed: false },
  { day: 'Saturday', open: '9:00 AM', close: '12:00 PM', closed: false },
  { day: 'Sunday', open: '', close: '', closed: true },
] // [DEMO] verify real office hours with practice

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── Page header ── */}
      <section
        className="py-12"
        style={{ background: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)' }}
        aria-label="Page header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-white font-medium">
                Contact
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-white/70 mt-2">We&apos;re here to help. Reach out by phone, form, or stop by.</p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: address, phone, hours, map */}
            <div className="space-y-8">
              {/* Address card */}
              <div className="rounded-2xl border border-gray-100 p-7 bg-white shadow-sm">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#d1fae5' }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: '#064e3b' }} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 mb-1">Office Address</h2>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      1765 W McMillan Rd Suite 110<br />
                      Meridian, ID 83642
                    </address>
                    <a
                      href="https://maps.google.com/?q=1765+W+McMillan+Rd+Suite+110+Meridian+ID+83642"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                    >
                      Get directions &rarr;
                    </a>
                  </div>
                </div>

                {/* Map placeholder [DEMO] */}
                <div
                  className="rounded-xl overflow-hidden bg-gray-100 h-52 flex items-center justify-center border border-gray-200"
                  aria-label="Map of 1765 W McMillan Rd Suite 110, Meridian, ID [DEMO — replace with Google Maps embed]"
                >
                  <div className="text-center p-6">
                    <MapPin className="w-8 h-8 text-gray-300 mx-auto mb-2" aria-hidden="true" />
                    <p className="text-gray-400 text-sm font-medium">1765 W McMillan Rd Suite 110</p>
                    <p className="text-gray-400 text-sm">Meridian, ID 83642</p>
                    <p className="text-gray-300 text-xs mt-3 italic">
                      [DEMO] Replace with Google Maps embed
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-gray-100 p-7 bg-white shadow-sm">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#d1fae5' }}
                  >
                    <Phone className="w-5 h-5" style={{ color: '#064e3b' }} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 mb-1">Phone</h2>
                    <a
                      href="tel:2085550185"
                      className="text-2xl font-bold text-emerald-800 hover:text-emerald-700 cursor-pointer transition-colors duration-150"
                    >
                      (208) 555-0185
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Click to call from your phone
                    </p>
                    <div className="mt-3 p-3 rounded-lg bg-emerald-50 text-xs text-emerald-800">
                      <strong>Sick today?</strong> Call by 10 AM for same-day appointments.
                    </div>
                  </div>
                </div>
              </div>

              {/* Email placeholder [DEMO] */}
              <div className="rounded-2xl border border-gray-100 p-7 bg-white shadow-sm">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#d1fae5' }}
                  >
                    <Mail className="w-5 h-5" style={{ color: '#064e3b' }} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 mb-1">Email</h2>
                    {/* [DEMO] replace with real email */}
                    <a
                      href="mailto:info@meridianfamilymedicine-demo.com"
                      className="text-emerald-700 hover:underline text-sm cursor-pointer"
                    >
                      info@meridianfamilymedicine-demo.com [DEMO]
                    </a>
                    <p className="text-gray-400 text-xs mt-1">
                      For non-urgent inquiries only. For medical questions, please call.
                    </p>
                  </div>
                </div>
              </div>

              {/* Getting here / parking [DEMO] */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#f0fdf4' }}
              >
                <h2 className="font-bold text-gray-900 mb-3 text-sm">Getting Here &amp; Parking</h2>
                {/* [DEMO] replace with real parking and access notes */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  [DEMO] Free parking is available directly in front of the building and in the
                  adjacent lot. The office is ADA-accessible with ground-floor entry. If you have
                  mobility needs, please let our team know when scheduling and we will ensure
                  accommodations are in place.
                </p>
              </div>
            </div>

            {/* Right: Hours table */}
            <div>
              <div className="rounded-2xl border border-gray-100 p-7 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#d1fae5' }}
                  >
                    <Clock className="w-5 h-5" style={{ color: '#064e3b' }} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">Office Hours</h2>
                    <p className="text-xs text-gray-400">[DEMO] Verify real hours with practice</p>
                  </div>
                </div>

                <table className="w-full text-sm" aria-label="Office hours">
                  <tbody>
                    {hours.map(({ day, open, close, closed }) => (
                      <tr key={day} className="border-b border-gray-50 last:border-0">
                        <td className="py-3 font-medium text-gray-900">{day}</td>
                        <td className="py-3 text-right">
                          {closed ? (
                            <span className="text-red-500 font-medium">Closed</span>
                          ) : (
                            <span className="text-gray-600">
                              {open} – {close}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-amber-800 text-xs font-medium">
                    <strong>After Hours?</strong> For urgent medical concerns outside of office hours,
                    please call our after-hours line or go to the nearest emergency room.
                    {/* [DEMO] add real after-hours phone number */}
                  </p>
                </div>
              </div>

              {/* Book CTA */}
              <div
                className="mt-6 rounded-2xl p-7"
                style={{ backgroundColor: '#064e3b' }}
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  Ready to book?
                </h3>
                <p className="text-white/70 text-sm mb-5">
                  New and existing patients welcome. Same-Day &amp; Next-Day Sick Appointments available.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/appointments"
                    className="inline-flex items-center justify-center py-3 px-5 rounded-xl text-sm font-bold bg-white text-emerald-800 cursor-pointer hover:bg-emerald-50 transition-colors duration-150"
                  >
                    Book Online
                  </Link>
                  <a
                    href="tel:2085550185"
                    className="inline-flex items-center justify-center py-3 px-5 rounded-xl text-sm font-bold border-2 border-white/40 text-white cursor-pointer hover:bg-white/10 transition-colors duration-150"
                  >
                    Call (208) 555-0185
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
