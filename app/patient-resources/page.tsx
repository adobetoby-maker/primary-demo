'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, FileText, ExternalLink } from 'lucide-react'

const SITE_URL = 'https://meridianfamilymedicine-demo.com' // [DEMO] update with real domain

const faqs = [
  {
    question: 'What insurance do you accept?',
    answer:
      'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, Medicare, Medicaid, SelectHealth, Tricare, Regence, and PacificSource. Because insurance networks and coverage change frequently, we recommend calling our office at (208) 555-0185 to verify that your specific plan is accepted before scheduling your appointment. We also see self-pay patients and can discuss our self-pay rates upon request.',
  },
  {
    question: 'Do I need a referral to see a specialist?',
    answer:
      'It depends on your insurance plan. Many insurance plans require a referral from your primary care physician before covering specialist visits — if you see a specialist without a required referral, you may be responsible for the full cost. At Meridian Family Medicine, Dr. Johnson coordinates specialist referrals as part of your ongoing care. If you need to see a cardiologist, endocrinologist, dermatologist, or any other specialist, call our office and we will facilitate the referral, communicate your health history to the specialist, and follow up on your results. This coordination is one of the most important functions of having a primary care physician.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'For your first visit as a new patient, please bring: a valid photo ID, your insurance card, a complete list of all current medications including dosages and frequency (prescription, over-the-counter, and supplements), any prior medical records, lab results, or imaging reports you have available, your vaccination history if you have it, and a list of any questions or health concerns you want to discuss with Dr. Johnson. Arriving 15 minutes early for new patient paperwork is recommended. If you have records from a previous physician, we can also accept records electronically — call our office for the secure fax number.',
  },
  {
    question: 'Do you offer telehealth visits?',
    answer:
      'Yes. We offer secure video telehealth appointments for established patients for many types of visits including follow-up appointments for chronic conditions, prescription refill consultations, mental health check-ins, review of lab results, and evaluation of many acute concerns such as UTIs, mild respiratory illness, and skin rashes. Telehealth is not appropriate for visits requiring a physical examination, such as annual physical exams, or for urgent symptoms that may indicate a serious condition. To schedule a telehealth visit, call our office or request one through the patient portal. Telehealth visits are covered by most insurance plans for established patients.',
  },
  {
    question: 'How do I request my medical records?',
    answer:
      'Medical records requests are handled in compliance with HIPAA regulations. To request your records, you will need to complete a Medical Records Release Authorization form — available at our front desk or through the patient portal. Records can be released to you directly, to another provider, or to a third party with your written authorization. Standard processing time is 7–10 business days, though urgent requests for active medical care can often be accommodated more quickly. There may be a small fee for copying and processing records depending on the volume and format requested. Please contact our office at (208) 555-0185 with questions about your specific records request.',
  },
]

const insurancePlans = [
  'Blue Cross Blue Shield of Idaho',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare (Parts A and B)',
  'Medicaid / Idaho Medicaid',
  'SelectHealth',
  'Tricare',
  'Regence BlueShield',
  'PacificSource',
] // [DEMO] verify with billing department — list may be incomplete or subject to change

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${index}`

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        id={`${id}-btn`}
        className="w-full flex items-center justify-between p-5 bg-white text-left cursor-pointer hover:bg-emerald-50 transition-colors duration-150"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-emerald-700 flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div
          id={id}
          role="region"
          aria-labelledby={`${id}-btn`}
          className="px-5 pb-5 bg-white border-t border-gray-100"
        >
          <p className="text-gray-600 text-sm leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function PatientResourcesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                Patient Resources
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Patient Resources</h1>
          <p className="text-white/70 mt-2">
            Everything you need to know as a patient at Meridian Family Medicine.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* ── Insurance ── */}
        <section aria-labelledby="insurance-heading">
          <h2 id="insurance-heading" className="text-2xl font-bold mb-2" style={{ color: '#064e3b' }}>
            Insurance Accepted
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            We accept the following plans. Please call to verify your specific plan is in-network before
            scheduling. {/* [DEMO] verify with billing department */}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {insurancePlans.map((plan) => (
              <div
                key={plan}
                className="px-4 py-3 rounded-xl text-sm font-medium text-center text-gray-700 border border-gray-200 bg-white hover:border-emerald-300 transition-colors duration-150"
              >
                {plan}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Don&apos;t see your plan? Call (208) 555-0185 — we accept many additional plans and can
            verify coverage on the spot. Self-pay rates available upon request.
          </p>
        </section>

        {/* ── New Patient Forms ── */}
        <section aria-labelledby="forms-heading">
          <h2 id="forms-heading" className="text-2xl font-bold mb-2" style={{ color: '#064e3b' }}>
            New Patient Forms
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Complete your new patient paperwork before your visit to save time in the office.
            {/* [DEMO] upload real forms and replace placeholder links */}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'New Patient Registration', description: 'Complete demographic and insurance information' },
              { name: 'Medical History Form', description: 'Past medical history, surgeries, and family history' },
              { name: 'HIPAA Privacy Notice & Acknowledgment', description: 'Required by federal law for all new patients' },
              { name: 'Insurance Authorization Form', description: 'Authorizes billing to your insurance carrier' },
              { name: 'Release of Medical Records', description: 'To transfer records from a prior provider' },
            ].map(({ name, description }) => (
              <div
                key={name}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#d1fae5' }}
                >
                  <FileText className="w-4 h-4" style={{ color: '#064e3b' }} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{description}</p>
                  {/* [DEMO] replace href with real form download URL */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                  >
                    Download PDF [DEMO]
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Patient Portal ── */}
        <section aria-labelledby="portal-heading">
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{ backgroundColor: '#064e3b' }}
          >
            <div className="flex-1">
              <h2 id="portal-heading" className="text-xl font-bold text-white mb-2">
                Patient Portal
              </h2>
              <p className="text-white/70 text-sm">
                {/* [DEMO] replace with real portal description */}
                Access your health records, lab results, appointment history, and medication list
                through our secure online patient portal. Request prescription refills, send messages
                to Dr. Johnson&apos;s team, and view your visit summaries — all in one place. [DEMO]
              </p>
            </div>
            {/* [DEMO] replace href with real patient portal URL */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white text-emerald-800 cursor-pointer hover:bg-emerald-50 transition-colors duration-150 flex-shrink-0"
            >
              Access Portal [DEMO]
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold mb-2" style={{ color: '#064e3b' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Answers to the questions our patients ask most often.
          </p>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Still have questions?{' '}
            <a
              href="tel:2085550185"
              className="text-emerald-700 font-semibold hover:underline cursor-pointer"
            >
              Call us at (208) 555-0185
            </a>{' '}
            and we&apos;ll be happy to help.
          </p>
        </section>
      </div>
    </div>
  )
}
