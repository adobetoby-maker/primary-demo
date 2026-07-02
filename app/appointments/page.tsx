import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Phone } from 'lucide-react'

const SITE_URL = 'https://meridianfamilymedicine-demo.com' // [DEMO] update with real domain

export const metadata: Metadata = {
  title: 'Book Appointment | Meridian Family Medicine, ID',
  description:
    'Schedule an appointment with Dr. Emily Johnson in Meridian, ID. Same-Day & Next-Day Sick Appointments available. New and existing patients welcome.',
  alternates: {
    canonical: `${SITE_URL}/appointments`,
  },
  openGraph: {
    title: 'Book Appointment | Meridian Family Medicine, ID',
    description:
      'Schedule an appointment with Dr. Emily Johnson in Meridian, ID. Same-Day & Next-Day Sick Appointments available.',
    url: `${SITE_URL}/appointments`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Book Appointment Meridian' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Appointment | Meridian Family Medicine, ID',
    description: 'Schedule with Dr. Emily Johnson in Meridian, ID. New and existing patients welcome.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-white">
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
                Appointments
              </li>
            </ol>
          </nav>
          <div className="flex items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Book an Appointment</h1>
              <p className="text-white/70 mt-2">
                New and existing patients welcome. Accepting all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Urgency banner ── */}
      <div
        className="py-4"
        style={{ backgroundColor: '#d1fae5' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-emerald-800">
              <Clock className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm font-semibold">
                Same-Day &amp; Next-Day Sick Appointments — Call by 10 AM for best availability
              </p>
            </div>
            <a
              href="tel:2085550185"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white cursor-pointer hover:opacity-90 transition-opacity duration-150 flex-shrink-0"
              style={{ backgroundColor: '#064e3b' }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (208) 555-0185
            </a>
          </div>
        </div>
      </div>

      {/* ── Form + sidebar ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form — [DEMO] not functional */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold mb-1" style={{ color: '#064e3b' }}>
                  Request an Appointment
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  {/* [DEMO] This form is not functional — connect to real scheduling system */}
                  Fill out the form below and our office will confirm your appointment within 1 business day.{' '}
                  <strong>[DEMO] Connect to real scheduling system.</strong>
                </p>

                <form aria-label="Appointment request form" className="space-y-5">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        First Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Last Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="lastName"
                        required
                        autoComplete="family-name"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  {/* Date of birth + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Date of Birth <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dateOfBirth"
                        required
                        autoComplete="bday"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                        placeholder="(208) 555-0000"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* New / Existing Patient */}
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700 mb-3">
                      Patient Type <span className="text-red-500" aria-hidden="true">*</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label
                        htmlFor="new-patient"
                        className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-emerald-400 transition-colors duration-150 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50"
                      >
                        <input
                          type="radio"
                          id="new-patient"
                          name="patientType"
                          value="new"
                          className="w-4 h-4 accent-emerald-700"
                          defaultChecked
                        />
                        <div>
                          <span className="block text-sm font-bold text-gray-900">New Patient</span>
                          <span className="block text-xs text-gray-500">First visit to our practice</span>
                        </div>
                      </label>
                      <label
                        htmlFor="existing-patient"
                        className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-emerald-400 transition-colors duration-150 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50"
                      >
                        <input
                          type="radio"
                          id="existing-patient"
                          name="patientType"
                          value="existing"
                          className="w-4 h-4 accent-emerald-700"
                        />
                        <div>
                          <span className="block text-sm font-bold text-gray-900">Existing Patient</span>
                          <span className="block text-xs text-gray-500">I am already a patient</span>
                        </div>
                      </label>
                    </div>
                  </fieldset>

                  {/* Insurance */}
                  <div>
                    <label
                      htmlFor="insurance"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Insurance Carrier
                    </label>
                    <select
                      id="insurance"
                      name="insurance"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    >
                      <option value="">Select insurance...</option>
                      <option value="bcbs">Blue Cross Blue Shield</option>
                      <option value="aetna">Aetna</option>
                      <option value="cigna">Cigna</option>
                      <option value="uhc">United Healthcare</option>
                      <option value="medicare">Medicare</option>
                      <option value="medicaid">Medicaid</option>
                      <option value="selecthealth">Select Health</option>
                      <option value="tricare">Tricare</option>
                      <option value="other">Other</option>
                      <option value="self-pay">Self-Pay / Uninsured</option>
                    </select>
                  </div>

                  {/* Reason for visit */}
                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Reason for Visit <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                      placeholder="Describe your symptoms, reason for visit, or the type of appointment you are requesting (e.g., annual physical, sick visit, follow-up)..."
                    />
                  </div>

                  {/* Preferred date */}
                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferred-date"
                      name="preferredDate"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      We will do our best to accommodate your preferred date but cannot guarantee availability.
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl text-base font-bold text-white cursor-pointer hover:opacity-90 transition-opacity duration-150 mt-2"
                    style={{ backgroundColor: '#064e3b' }}
                  >
                    Request Appointment
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    {/* [DEMO] connect to real HIPAA-compliant form processor */}
                    By submitting this form you agree to our Privacy Policy and HIPAA Notice.
                    [DEMO] Form not functional — connect to real scheduling system.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Prefer to call */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#f0fdf4' }}
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  Prefer to call?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Call our office and our team will schedule you directly — often same day for sick visits.
                </p>
                <a
                  href="tel:2085550185"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-bold text-white cursor-pointer hover:opacity-90 transition-opacity duration-150"
                  style={{ backgroundColor: '#064e3b' }}
                >
                  (208) 555-0185
                </a>
                <p className="text-xs text-gray-400 mt-2 text-center">
                  {/* [DEMO] verify hours */}
                  Mon–Fri 8 AM–5 PM &bull; Sat 9 AM–12 PM
                </p>
              </div>

              {/* Sick visits */}
              <div className="rounded-2xl p-6 border border-emerald-200 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  <h3 className="font-bold text-gray-900 text-sm">Same-Day Sick Visits</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Need to be seen today? Call by 10 AM for the best availability. We reserve daily
                  slots specifically for acute illness.
                </p>
              </div>

              {/* What to bring */}
              <div className="rounded-2xl p-6 border border-gray-100 bg-white">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">New Patient? Bring:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  {[
                    'Photo ID',
                    'Insurance card',
                    'List of current medications & dosages',
                    'Prior medical records (if available)',
                    'List of questions for Dr. Johnson',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold mt-0.5" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
