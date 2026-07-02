import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Calendar,
  Activity,
  Shield,
  Syringe,
  Clock,
  Brain,
  Heart,
  Users,
} from 'lucide-react'

const SITE_URL = 'https://meridianfamilymedicine-demo.com' // [DEMO] update with real domain

export const metadata: Metadata = {
  title: 'Primary Care Services Meridian, ID | Dr. Emily Johnson',
  description:
    'Comprehensive primary care services in Meridian, Idaho: annual wellness exams, chronic disease management, preventive screenings, immunizations, urgent sick visits, and more.',
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Primary Care Services Meridian, ID | Dr. Emily Johnson',
    description:
      'Comprehensive primary care services in Meridian, Idaho. Annual exams, chronic disease management, preventive screenings, immunizations, same-day sick visits.',
    url: `${SITE_URL}/services`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Meridian Family Medicine Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primary Care Services Meridian, ID | Dr. Emily Johnson',
    description: 'Comprehensive primary care services in Meridian, Idaho. Accepting new patients.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
}

const proceduresSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Primary Care Services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'MedicalProcedure',
        name: 'Annual Wellness Exam',
        description:
          'Comprehensive yearly physical examination including vital signs, blood work, age-appropriate screenings, immunization review, and personalized health counseling.',
        procedureType: 'https://schema.org/PhysicianVisit',
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'MedicalProcedure',
        name: 'Chronic Disease Management',
        description:
          'Ongoing coordinated care for diabetes, hypertension, high cholesterol, thyroid disorders, asthma, and other long-term conditions.',
        procedureType: 'https://schema.org/PhysicianVisit',
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'MedicalProcedure',
        name: 'Preventive Screenings',
        description:
          'Cancer screenings, cardiovascular risk assessment, colonoscopy referrals, and wellness counseling to detect problems before symptoms appear.',
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'MedicalProcedure',
        name: 'Immunizations',
        description:
          'All recommended adult vaccines including annual flu shot, Shingrix, Tdap, pneumococcal, COVID-19 boosters, and travel vaccines.',
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'MedicalProcedure',
        name: 'Urgent Sick Visits',
        description:
          'Same-Day and Next-Day sick appointments for acute illness including infections, fevers, minor injuries, and sudden-onset symptoms.',
        procedureType: 'https://schema.org/PhysicianVisit',
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'MedicalProcedure',
        name: 'Mental Health Screening',
        description:
          'Depression and anxiety screening using validated tools, medication management, and coordinated referrals to behavioral health specialists.',
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'MedicalProcedure',
        name: "Women's Health",
        description:
          "Pap smears, mammogram referrals, birth control management, and women's preventive screenings.",
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'MedicalProcedure',
        name: 'Geriatric Care',
        description:
          'Specialized care for older adults including fall risk assessment, cognitive screening, polypharmacy review, and advance care planning.',
        performedBy: { '@id': `${SITE_URL}/#physician` },
      },
    },
  ],
}

const services = [
  {
    slug: 'annual-wellness-exams',
    name: 'Annual Wellness Exams',
    Icon: Calendar,
    description:
      'Your annual physical exam is the cornerstone of preventive healthcare. Dr. Johnson conducts a comprehensive head-to-toe physical examination, reviews your complete health history, and orders a personalized panel of lab work — including complete blood count, comprehensive metabolic panel, lipid panel, HbA1c, thyroid function, and urinalysis. The visit also includes a review of all current medications, age-specific cancer screenings, immunization updates, and a conversation about any symptoms or health goals you want to address. Adults with no chronic conditions typically benefit from an annual visit; those managing chronic disease may need more frequent follow-up.',
  },
  {
    slug: 'chronic-disease-management',
    name: 'Chronic Disease Management',
    Icon: Activity,
    description:
      'Living with a chronic condition requires more than a prescription — it requires a long-term partner who tracks your progress, adjusts your treatment plan as your needs change, and coordinates care across specialists when necessary. Dr. Johnson provides structured, evidence-based management for diabetes (including continuous glucose monitor interpretation and GLP-1 therapy), hypertension, high cholesterol, thyroid disorders, asthma, depression and anxiety, obesity, and chronic kidney disease. Each chronic disease visit includes measurement of relevant biomarkers, medication reconciliation, lifestyle counseling, and goal setting. We use shared decision-making to ensure your treatment plan aligns with both clinical evidence and your personal priorities.',
  },
  {
    slug: 'preventive-screenings',
    name: 'Preventive Screenings',
    Icon: Shield,
    description:
      'Preventive screenings save lives by identifying cancer, cardiovascular disease, and metabolic disorders before symptoms appear. Dr. Johnson follows USPSTF guidelines to determine which screenings are appropriate for your age, sex, and risk factors. This includes colorectal cancer screening starting at age 45 (colonoscopy referrals, stool-based testing), cervical cancer screening (Pap smear and HPV co-testing per current guidelines), mammogram referrals for breast cancer screening, lung cancer low-dose CT for high-risk smokers, bone density (DEXA) for osteoporosis in women 65+, abdominal aortic aneurysm screening for male smokers, and cardiovascular risk scoring using the ACC/AHA Pooled Cohort equations to guide statin therapy decisions.',
  },
  {
    slug: 'immunizations',
    name: 'Immunizations',
    Icon: Syringe,
    description:
      "Adult vaccination is one of the most evidence-based and cost-effective tools in preventive medicine, yet many adults are behind on recommended vaccines without knowing it. At every visit, Dr. Johnson reviews your immunization record and ensures you are current on all indicated vaccines. For most adults this includes annual influenza vaccine, Tdap booster every 10 years, COVID-19 vaccination per current CDC guidance, and Hepatitis B series if not previously completed. Adults 50 and older should receive the Shingrix (recombinant zoster vaccine) two-dose series — it is 90% effective against shingles. Adults 65 and older need pneumococcal vaccines (PCV20 or PCV15 + PPSV23). Travel vaccines are available with advance notice for international travel.",
  },
  {
    slug: 'urgent-sick-visits',
    name: 'Urgent Sick Visits',
    Icon: Clock,
    description:
      'When acute illness strikes, you should be able to reach your own doctor — not a walk-in clinic staffed by someone who has never met you. Dr. Johnson reserves appointment slots every day specifically for same-day and next-day sick visits for established patients. We see patients for upper respiratory infections, sinus infections, influenza, strep throat, ear infections, urinary tract infections, skin infections, rashes, conjunctivitis, minor injuries, and other acute concerns. Calling before 10 AM provides the best chance of a same-day appointment. For after-hours guidance, our on-call line helps direct your care until we can see you in person. Telehealth is available for many acute concerns when an in-person visit is not possible.',
  },
  {
    slug: 'mental-health-screening',
    name: 'Mental Health Screening',
    Icon: Brain,
    description:
      'Mental health is an inseparable part of overall health, and primary care is often the first — and most accessible — point of contact for patients experiencing depression, anxiety, or other behavioral health concerns. Dr. Johnson screens for depression using the validated PHQ-9 and for anxiety using the GAD-7 at annual visits and whenever clinically indicated. She provides initial medication management for depression and anxiety, which is effective for many patients in a primary care setting. For patients requiring more intensive therapy or psychiatric care, she maintains a network of trusted behavioral health referral partners in the Meridian area and coordinates closely to ensure continuity of care. Suicidal ideation is addressed with immediate clinical attention and appropriate crisis resources.',
  },
  {
    slug: 'womens-health',
    name: "Women's Health",
    Icon: Heart,
    description:
      "Women's health at a primary care practice encompasses both general preventive care and gynecologic health services in a single, trusted relationship. Dr. Johnson performs in-office Pap smears for cervical cancer screening, manages birth control options including oral contraceptives and IUD referral coordination, provides preconception counseling, evaluates irregular menstrual cycles, manages perimenopause and menopause symptoms, and coordinates mammogram referrals for breast cancer screening. She also screens for domestic violence and intimate partner violence using validated tools as part of routine preventive care. Women who prefer to have their gynecologic and primary care in one place often find this model more convenient and more comfortable.",
  },
  {
    slug: 'geriatric-care',
    name: 'Geriatric Care',
    Icon: Users,
    description:
      'Older adults often have complex, interconnected health needs that require a thoughtful, specialized approach. Dr. Johnson provides comprehensive geriatric primary care including fall risk assessment and prevention planning, cognitive screening using validated tools such as the Mini-Cog and MoCA, polypharmacy review to reduce inappropriate or duplicative medications, osteoporosis evaluation and management, hearing and vision screening coordination, urinary incontinence evaluation, and advance care planning conversations including POLST (Physician Orders for Life-Sustaining Treatment) and healthcare proxy documentation. She works closely with family members and caregivers when patients consent, recognizing that older adults often have the best outcomes when their care team includes the people who support them daily.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(proceduresSchema) }}
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
                Services
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h1>
          <p className="text-white/70 mt-2 max-w-xl">
            Comprehensive primary care for every stage of life in Meridian, Idaho.
          </p>
        </div>
      </section>

      {/* ── Services list ── */}
      <section className="py-16" aria-label="Services detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map(({ slug, name, Icon, description }, index) => (
              <div
                key={slug}
                id={slug}
                className={`rounded-2xl p-8 ${
                  index % 2 === 0 ? 'bg-white border border-gray-100' : 'bg-emerald-50'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#d1fae5' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#064e3b' }} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2
                      className="text-xl font-bold mb-3"
                      style={{ color: '#064e3b' }}
                    >
                      {name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
                    <Link
                      href="/appointments"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:underline cursor-pointer transition-colors duration-150"
                    >
                      Book for {name} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-14"
        style={{ backgroundColor: '#064e3b' }}
        aria-labelledby="services-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-heading" className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Same-Day &amp; Next-Day Sick Appointments available. Accepting new patients of all ages.
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
