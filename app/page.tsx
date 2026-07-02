import { siteContent } from '@/lib/content'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Calendar,
  Shield,
  Activity,
  Syringe,
  Clock,
  Brain,
  Heart,
  Users,
  Star,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: siteContent.seoTitle,
  description: siteContent.seoDescription,
  keywords: siteContent.seoKeywords,
  alternates: {
    canonical: siteContent.website,
  },
  openGraph: {
    title: siteContent.seoTitle,
    description: siteContent.seoDescription,
    url: siteContent.website,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteContent.practiceName }],
  },
}

const services = [
  {
    name: 'Annual Wellness Exams',
    description:
      'Comprehensive yearly physical exams with age-appropriate labs, screenings, and personalized health counseling tailored to your risk factors.',
    Icon: Calendar,
  },
  {
    name: 'Chronic Disease Management',
    description:
      'Coordinated, ongoing care for diabetes, hypertension, thyroid disorders, and other long-term conditions with measurable goals and regular follow-up.',
    Icon: Activity,
  },
  {
    name: 'Preventive Screenings',
    description:
      'Colonoscopy referrals, mammogram orders, cardiovascular risk assessment, and cancer screenings calibrated to your age, sex, and family history.',
    Icon: Shield,
  },
  {
    name: 'Immunizations',
    description:
      'All recommended adult and childhood vaccines including flu, Shingrix, Tdap, pneumococcal, COVID-19 boosters, and travel immunizations.',
    Icon: Syringe,
  },
  {
    name: 'Urgent Sick Visits',
    description:
      'Same-Day & Next-Day Sick Appointments reserved daily for acute illness — infections, fevers, injuries, and sudden-onset symptoms.',
    Icon: Clock,
  },
  {
    name: 'Mental Health Screening',
    description:
      'PHQ-9 depression screening, GAD-7 anxiety assessment, medication management, and coordinated referrals to behavioral health specialists.',
    Icon: Brain,
  },
  {
    name: "Women's Health",
    description:
      "Pap smears, mammogram referrals, birth control management, and women's preventive screenings in a comfortable, supportive environment.",
    Icon: Heart,
  },
  {
    name: 'Geriatric Care',
    description:
      'Specialized attention for older adults including fall risk assessment, cognitive screening, medication review, and advance care planning.',
    Icon: Users,
  },
]

const testimonials = [
  {
    initials: 'R.L.',
    name: 'Rebecca L.', // [DEMO] replace with real patient review
    quote:
      "Dr. Johnson has been my family's doctor for seven years. She remembers every detail about each of us and genuinely listens. I've never felt rushed. Finding a primary care doctor this good in Meridian is rare — I tell everyone.", // [DEMO]
    stars: 5,
  },
  {
    initials: 'M.T.',
    name: 'Marcus T.', // [DEMO] replace with real patient review
    quote:
      'My A1C was 9.1 when I first came in. Dr. Johnson put together a plan that was actually achievable — diet, exercise, medication. Fourteen months later I am at 6.7 and off one of my medications. She changed the trajectory of my health.', // [DEMO]
    stars: 5,
  },
  {
    initials: 'S.K.',
    name: 'Sandra K.', // [DEMO] replace with real patient review
    quote:
      "I almost skipped my annual physical because I felt completely fine. Dr. Johnson found that my blood pressure was dangerously high — 168/102. No symptoms at all. Getting treated right away likely kept me out of the emergency room.", // [DEMO]
    stars: 5,
  },
]

const insuranceBadges = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare',
  'Medicaid',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
        }}
        aria-label="Hero"
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              Same-Day &amp; Next-Day Sick Appointments
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Meridian
              <span className="block text-emerald-200">Family Medicine</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-3 font-medium italic">
              Your Health. Our Priority. For Life.
            </p>

            <p className="text-base text-white/70 mb-8 leading-relaxed max-w-lg">
              Dr. Emily Johnson, MD — board-certified family physician with 12 years
              of experience. Compassionate, comprehensive care for every stage of life in Meridian, Idaho.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-bold bg-white text-emerald-800 hover:bg-emerald-50 shadow-lg transition-colors duration-150 cursor-pointer"
              >
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-bold border-2 border-white/60 text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
              >
                Meet Dr. Johnson
              </Link>
            </div>

            {/* Click-to-call */}
            <a
              href="tel:2085550185"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-150 cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (208) 555-0185
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: '#064e3b' }}
            >
              Comprehensive Primary Care Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From annual wellness to complex chronic disease — all under one roof with a doctor
              who knows you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ name, description, Icon }) => (
              <div
                key={name}
                className="group rounded-2xl border border-gray-100 p-6 hover:border-emerald-200 hover:shadow-md transition-all duration-200 bg-white"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#d1fae5' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#064e3b' }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer hover:opacity-90 transition-opacity duration-150"
              style={{ backgroundColor: '#064e3b' }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section
        className="py-20"
        style={{ backgroundColor: '#f0fdf4' }}
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1">
              {/* [DEMO] replace with real physician photo */}
              <div
                className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200 flex items-center justify-center max-w-sm mx-auto lg:mx-0"
                aria-label="Photo of Dr. Emily Johnson, MD [DEMO — replace with real photo]"
              >
                <div className="text-center p-8">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold"
                    style={{ backgroundColor: '#064e3b' }}
                  >
                    LP
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Dr. Emily Johnson</p>
                  <p className="text-gray-400 text-xs mt-1">MD, FAAFP</p>
                  <p className="text-gray-300 text-xs mt-3 italic">[DEMO] Replace with real photo</p>
                </div>
              </div>
            </div>

            {/* Bio content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-emerald-800 bg-emerald-100">
                <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                Board-Certified Family Medicine
              </div>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#064e3b' }}
              >
                Dr. Emily Johnson
              </h2>
              <p className="text-gray-500 font-medium mb-4">MD, FAAFP &mdash; 16 Years in Practice</p>
              {/* [DEMO] replace with real physician bio */}
              <p className="text-gray-700 leading-relaxed mb-4">
                A graduate of the University of Michigan Medical School and the UW Family Medicine
                Residency, Dr. Johnson has spent 12 years building long-term relationships with patients
                and families across the Magic Valley. She brings a depth of expertise and a genuine
                passion for whole-person, continuous care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Board-certified by the American Board of Family Medicine and a Fellow of the American
                Academy of Family Physicians (FAAFP), she holds privileges at St.&nbsp;Luke&apos;s Magic
                Valley Regional Medical Center and is actively accepting new patients.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  'University of Michigan Med School',
                  'UW Family Medicine Residency',
                  "St. Luke's Magic Valley",
                  'ABFM Board Certified',
                  'FAAFP Fellow',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full text-xs font-medium text-emerald-800 bg-emerald-100"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white cursor-pointer hover:opacity-90 transition-opacity duration-150"
                style={{ backgroundColor: '#064e3b' }}
              >
                Meet Dr. Johnson
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ color: '#064e3b' }}
            >
              What Our Patients Say
            </h2>
            <p className="text-gray-600">Real outcomes from real relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ initials, name, quote, stars }) => (
              <div
                key={name}
                className="rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow duration-200 bg-white"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`${stars} out of 5 stars`}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: '#064e3b' }}
                    aria-hidden="true"
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{name}</p>
                    <p className="text-xs text-gray-400">Verified Patient {/* [DEMO] */}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE ROW ── */}
      <section
        className="py-14"
        style={{ backgroundColor: '#064e3b' }}
        aria-labelledby="insurance-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="insurance-heading"
            className="text-center text-lg font-bold text-white mb-7"
          >
            We Accept Most Major Insurance Plans
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {insuranceBadges.map((plan) => (
              <span
                key={plan}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/15 text-white border border-white/20"
              >
                {plan}
              </span>
            ))}
          </div>
          {/* [DEMO] verify accepted insurance with billing department */}
          <p className="text-center text-white/50 text-xs mt-5">
            Don&apos;t see yours? Call us &mdash; we accept many additional plans.
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 bg-white" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#064e3b' }}
          >
            Ready to feel better?
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Accepting new patients of all ages. Book online in minutes or call our office directly.
            Same-Day &amp; Next-Day Sick Appointments available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white shadow-lg cursor-pointer hover:opacity-90 transition-opacity duration-150"
              style={{ backgroundColor: '#064e3b' }}
            >
              New Patient Appointment
            </Link>
            {/* [DEMO] replace href with real patient portal URL */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold border-2 text-emerald-800 cursor-pointer hover:bg-emerald-50 transition-colors duration-150"
              style={{ borderColor: '#064e3b' }}
            >
              Existing Patient Portal {/* [DEMO] */}
            </a>
          </div>

          <div className="mt-8">
            <a
              href="tel:2085550185"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-800 text-sm transition-colors duration-150 cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Or call us: (208) 555-0185
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
