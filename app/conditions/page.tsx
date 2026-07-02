import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const SITE_URL = 'https://primarycaretwinfalls.com' // [DEMO] update with real domain

export const metadata: Metadata = {
  title: 'Conditions We Treat | Primary Care Twin Falls, ID',
  description:
    'Dr. Lisa M. Patel treats diabetes, hypertension, high cholesterol, thyroid disorders, asthma, depression, obesity, and more in Twin Falls, Idaho.',
  alternates: {
    canonical: `${SITE_URL}/conditions`,
  },
  openGraph: {
    title: 'Conditions We Treat | Primary Care Twin Falls, ID',
    description:
      'Dr. Lisa M. Patel treats diabetes, hypertension, high cholesterol, thyroid disorders, asthma, depression, obesity, and more in Twin Falls, Idaho.',
    url: `${SITE_URL}/conditions`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Conditions Treated in Twin Falls ID' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conditions We Treat | Primary Care Twin Falls, ID',
    description: 'Dr. Lisa M. Patel treats diabetes, hypertension, high cholesterol, thyroid disorders, and more.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Conditions', item: `${SITE_URL}/conditions` },
  ],
}

const conditions = [
  {
    name: 'Diabetes',
    description:
      'Diabetes management in primary care includes HbA1c monitoring, fasting glucose and lipid panel review, continuous glucose monitor (CGM) interpretation, medication optimization (including GLP-1 agonists and SGLT-2 inhibitors), and lifestyle counseling. We also screen for and manage diabetic complications including nephropathy, neuropathy, retinopathy, and cardiovascular risk. Dr. Patel helps patients set realistic glycemic targets and builds structured care plans that fit their daily lives.',
  },
  {
    name: 'Hypertension',
    description:
      'High blood pressure is diagnosed through confirmed readings on multiple occasions and managed with a combination of lifestyle modification (sodium reduction, DASH diet, exercise, weight loss) and antihypertensive medications when indicated. Treatment targets are individualized based on age, cardiovascular risk, and comorbid conditions. Dr. Patel monitors blood pressure trends over time, evaluates for end-organ damage, and adjusts medication regimens to reach target blood pressure while minimizing side effects.',
  },
  {
    name: 'High Cholesterol',
    description:
      'Elevated LDL cholesterol is a primary modifiable risk factor for heart attack and stroke. Dr. Patel orders fasting lipid panels and calculates 10-year cardiovascular risk using the ACC/AHA Pooled Cohort equations to determine whether statin therapy is appropriate. Dietary counseling, plant sterol recommendations, and physical activity guidance are offered alongside medication management. Statins, ezetimibe, and PCSK9 inhibitors are prescribed based on risk level and patient-specific factors.',
  },
  {
    name: 'Thyroid Disorders',
    description:
      'Hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid) are among the most commonly missed conditions in primary care because their symptoms — fatigue, weight changes, mood shifts, cold or heat intolerance — overlap with many other conditions. Dr. Patel screens with TSH and confirms with additional thyroid hormone testing when indicated. Hypothyroidism is managed with levothyroxine titrated to achieve a TSH in the target range. Hyperthyroidism evaluation may involve referral to endocrinology for radioactive iodine or medication management.',
  },
  {
    name: 'Asthma',
    description:
      'Asthma management in primary care begins with confirming the diagnosis (pulmonary function testing referral when needed), identifying triggers, classifying severity, and developing a written asthma action plan. Dr. Patel prescribes appropriate controller inhalers (inhaled corticosteroids, LABAs, combination formulas) and rescue bronchodilators based on current GINA and NAEPP guidelines. Patients with poorly controlled or severe asthma are referred to pulmonology. Seasonal and year-round environmental trigger modification is addressed at every visit.',
  },
  {
    name: 'Depression & Anxiety',
    description:
      'Depression and anxiety disorders are among the most prevalent conditions in primary care. Dr. Patel uses validated screening tools (PHQ-9 for depression, GAD-7 for anxiety) at annual visits and whenever symptoms are reported. First-line treatment includes SSRIs and SNRIs, with medication selection guided by the patient\'s symptom profile, prior treatment history, and comorbidities. Therapy referrals are coordinated with local behavioral health partners. Patients with treatment-resistant depression, bipolar features, or active suicidal ideation are referred for psychiatric evaluation.',
  },
  {
    name: 'Obesity',
    description:
      'Obesity is a chronic, complex disease that requires the same structured long-term management as any other chronic condition. Dr. Patel provides comprehensive weight management including BMI and waist circumference assessment, dietary counseling, physical activity prescription, behavioral strategies, and pharmacotherapy when appropriate. Newer weight loss medications — including GLP-1 receptor agonists (semaglutide, tirzepatide) — have transformed obesity treatment and are prescribed for eligible patients. Bariatric surgery referral is discussed with patients meeting appropriate criteria.',
  },
  {
    name: 'Urinary Tract Infections',
    description:
      'Urinary tract infections (UTIs) are among the most common bacterial infections in primary care, particularly in women. Dr. Patel diagnoses UTIs through urinalysis and urine culture, prescribes appropriate antibiotic therapy based on local resistance patterns and culture sensitivities, and manages uncomplicated and complicated UTIs including those in pregnant women and older adults. Patients with recurrent UTIs (three or more per year) receive evaluation for underlying risk factors and may benefit from prophylactic strategies. Pyelonephritis (kidney infection) is evaluated and treated with close follow-up or referral as clinically indicated.',
  },
]

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                Conditions
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Conditions We Treat</h1>
          <p className="text-white/70 mt-2 max-w-xl">
            Evidence-based management for the most common chronic and acute conditions in primary care.
          </p>
        </div>
      </section>

      {/* ── Conditions grid ── */}
      <section className="py-16" aria-label="Conditions list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map(({ name, description }) => (
              <article
                key={name}
                className="rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:border-emerald-200 transition-all duration-200 bg-white"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2
                    className="text-lg font-bold"
                    style={{ color: '#064e3b' }}
                  >
                    {name}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-100 whitespace-nowrap flex-shrink-0">
                    <CheckCircle className="w-3 h-3" aria-hidden="true" />
                    We treat this
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                <Link
                  href="/appointments"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:underline cursor-pointer transition-colors duration-150"
                >
                  Book appointment &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-14"
        style={{ backgroundColor: '#064e3b' }}
        aria-labelledby="conditions-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="conditions-cta-heading" className="text-2xl font-bold text-white mb-4">
            Managing a Chronic Condition?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Dr. Patel offers structured, evidence-based chronic disease management with regular
            follow-up, lab monitoring, and personalized treatment plans.
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
