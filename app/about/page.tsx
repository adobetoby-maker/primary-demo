import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Award, Building2, GraduationCap, Clock } from 'lucide-react'

const SITE_URL = 'https://primarycaretwinfalls.com' // [DEMO] update with real domain

export const metadata: Metadata = {
  title: 'About Dr. Lisa M. Patel, MD, FAAFP | Primary Care Twin Falls',
  description:
    'Meet Dr. Lisa M. Patel — board-certified family medicine physician with 16 years of experience in Twin Falls, ID. University of Michigan Medical School graduate.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Dr. Lisa M. Patel, MD, FAAFP | Primary Care Twin Falls',
    description:
      'Meet Dr. Lisa M. Patel — board-certified family medicine physician with 16 years of experience in Twin Falls, ID.',
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Dr. Lisa M. Patel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Lisa M. Patel, MD, FAAFP | Primary Care Twin Falls',
    description: 'Board-certified family medicine physician with 16 years of experience in Twin Falls, ID.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#physician`,
  name: 'Dr. Lisa M. Patel',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'MD, FAAFP',
  givenName: 'Lisa',
  familyName: 'Patel',
  jobTitle: 'Board-Certified Family Medicine Physician',
  description:
    'Dr. Lisa M. Patel is a board-certified family medicine physician with 16 years of experience, serving patients in Twin Falls, Idaho.',
  medicalSpecialty: 'https://schema.org/GeneralPractice',
  worksFor: {
    '@type': 'MedicalOrganization',
    name: 'Primary Care of Twin Falls',
    url: SITE_URL,
  },
  affiliation: [
    {
      '@type': 'Hospital',
      name: "St. Luke's Magic Valley Regional Medical Center",
    },
    {
      '@type': 'Organization',
      name: 'American Academy of Family Physicians',
    },
  ],
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

const credentials = [
  {
    Icon: Award,
    label: 'Board Certification',
    value: 'American Board of Family Medicine (ABFM)',
  },
  {
    Icon: Award,
    label: 'Fellowship',
    value: 'Fellow, American Academy of Family Physicians (FAAFP)',
  },
  {
    Icon: Building2,
    label: 'Hospital Privileges',
    value: "St. Luke's Magic Valley Regional Medical Center",
  },
  {
    Icon: GraduationCap,
    label: 'Medical School',
    value: 'University of Michigan Medical School',
  },
  {
    Icon: GraduationCap,
    label: 'Residency',
    value: 'UW Family Medicine Residency, Seattle, WA',
  },
  {
    Icon: Clock,
    label: 'Years in Practice',
    value: '16 years of clinical experience',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
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
                About
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            About Dr. Lisa M. Patel
          </h1>
          <p className="text-white/70 mt-2">
            Board-Certified Family Medicine &mdash; Twin Falls, Idaho
          </p>
        </div>
      </section>

      {/* ── Physician hero ── */}
      <section className="py-16" aria-labelledby="physician-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo placeholder [DEMO] */}
            <div>
              <div
                className="rounded-2xl overflow-hidden bg-gray-100 aspect-[3/4] flex items-center justify-center max-w-sm mx-auto lg:mx-0"
                aria-label="Dr. Lisa M. Patel [DEMO — replace with real physician photo]"
              >
                <div className="text-center p-10">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-4xl font-bold"
                    style={{ backgroundColor: '#064e3b' }}
                  >
                    LP
                  </div>
                  <p className="text-gray-600 font-semibold">Dr. Lisa M. Patel</p>
                  <p className="text-gray-400 text-sm mt-1">MD, FAAFP</p>
                  <p className="text-gray-300 text-xs mt-4 italic">[DEMO] Replace with real physician photo</p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-6 max-w-sm mx-auto lg:mx-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-100">
                  <CheckCircle className="w-3 h-3" aria-hidden="true" />
                  Accepting New Patients
                </span>
                {/* [DEMO] replace with verified review count */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-800 bg-amber-100">
                  ★ 4.9 / 5.0 &mdash; 200+ Reviews [DEMO]
                </span>
                {/* [DEMO] replace with verified patient count */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-800 bg-blue-100">
                  3,000+ Patients Served [DEMO]
                </span>
              </div>
            </div>

            {/* Bio content */}
            <div>
              <h2
                id="physician-hero-heading"
                className="text-3xl font-bold mb-1"
                style={{ color: '#064e3b' }}
              >
                Dr. Lisa M. Patel, MD, FAAFP
              </h2>
              <p className="text-gray-500 font-medium mb-6">
                Board-Certified Family Medicine Physician &bull; 16 Years in Practice
              </p>

              {/* [DEMO] replace with real physician bio */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dr. Lisa M. Patel is a board-certified family medicine physician who has spent her
                  career building something that is increasingly rare in modern healthcare: true
                  longitudinal relationships with patients across every stage of life. She completed
                  her medical training at the University of Michigan Medical School before completing
                  her residency at the UW Family Medicine Residency in Seattle.
                </p>
                <p>
                  Over 16 years of clinical practice in Twin Falls, Dr. Patel has cared for infants,
                  teenagers, adults managing complex chronic conditions, and elderly patients requiring
                  specialized geriatric attention. Her philosophy is grounded in the belief that
                  exceptional primary care is about understanding the whole person: their health
                  history, their family, their stress levels, their goals, and what matters most
                  to them.
                </p>
                <p>
                  Board-certified by the American Board of Family Medicine and honored with Fellow
                  status (FAAFP) by the American Academy of Family Physicians, Dr. Patel holds
                  privileges at St.&nbsp;Luke&apos;s Magic Valley Regional Medical Center. She is
                  actively accepting new patients and is committed to providing accessible,
                  relationship-centered primary care across the Magic Valley.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointments"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer hover:opacity-90 transition-opacity duration-150"
                  style={{ backgroundColor: '#064e3b' }}
                >
                  Book an Appointment
                </Link>
                <a
                  href="tel:2085550185"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold border-2 text-emerald-800 cursor-pointer hover:bg-emerald-50 transition-colors duration-150"
                  style={{ borderColor: '#064e3b' }}
                >
                  Call (208) 555-0185
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials Grid ── */}
      <section
        className="py-16"
        style={{ backgroundColor: '#f0fdf4' }}
        aria-labelledby="credentials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="credentials-heading"
            className="text-2xl font-bold mb-10 text-center"
            style={{ color: '#064e3b' }}
          >
            Education, Training &amp; Credentials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-6 border border-emerald-100 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#d1fae5' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#064e3b' }} aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-gray-900 font-medium text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy statement ── */}
      <section className="py-16 bg-white" aria-labelledby="philosophy-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="philosophy-heading"
            className="text-2xl font-bold mb-6"
            style={{ color: '#064e3b' }}
          >
            A Philosophy of Whole-Person Care
          </h2>
          {/* [DEMO] replace with real philosophy statement */}
          <blockquote className="text-xl italic text-gray-600 leading-relaxed border-l-4 border-emerald-400 pl-6 text-left">
            &ldquo;Great primary care isn&apos;t about writing prescriptions and moving on to the
            next patient. It&apos;s about building a relationship over years &mdash; knowing your
            history, understanding your goals, and helping you navigate every health decision with
            clarity and confidence. That&apos;s what I try to do for every person who walks into
            this clinic.&rdquo;
          </blockquote>
          <p className="mt-4 text-gray-500 text-sm font-medium">
            &mdash; Dr. Lisa M. Patel, MD, FAAFP {/* [DEMO] verify quote */}
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-14"
        style={{ backgroundColor: '#064e3b' }}
        aria-labelledby="about-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="about-cta-heading" className="text-2xl font-bold text-white mb-4">
            Schedule Your First Appointment
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Dr. Patel is accepting new patients of all ages. Same-Day &amp; Next-Day Sick
            Appointments available for acute illness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold bg-white text-emerald-800 cursor-pointer hover:bg-emerald-50 transition-colors duration-150"
            >
              Book Appointment
            </Link>
            <a
              href="tel:2085550185"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-white/60 text-white cursor-pointer hover:bg-white/10 transition-colors duration-150"
            >
              (208) 555-0185
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
