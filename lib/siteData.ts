export const PRACTICE_NAME = 'Primary Care of Twin Falls'

export const PRACTICE_PHONE = '(208) 555-0185'

export const PRACTICE_ADDRESS = '220 2nd Ave S, Twin Falls, ID 83301'

export const PRACTICE_CITY = 'Twin Falls, ID'

export const TAGLINE = 'Your Health. Your Partner. For Life.'

export const URGENCY = 'Same-Day & Next-Day Sick Appointments'

export const WEBSITE_URL = 'https://primarycaretwinfalls.com' // [DEMO] replace with real domain

export interface Physician {
  name: string
  credentials: string
  role: string
  specialty: string
  experience: string
  education: string
  residency: string
  hospital: string
  bio: string
}

export const PHYSICIAN: Physician = {
  name: 'Dr. Lisa M. Patel',
  credentials: 'MD, FAAFP',
  role: 'Board-Certified Family Medicine Physician',
  specialty: 'Family Medicine / Primary Care',
  experience: '16 years',
  education: 'University of Michigan Medical School',
  residency: 'UW Family Medicine Residency, Seattle, WA',
  hospital: "St. Luke's Magic Valley Regional Medical Center",
  bio: "Dr. Patel has dedicated 16 years to building long-term relationships with patients and families across the Magic Valley. A graduate of the University of Michigan Medical School and UW Family Medicine Residency, she brings a depth of expertise and a genuine passion for whole-person care. She is board-certified by the American Board of Family Medicine and holds fellowship status (FAAFP) with the American Academy of Family Physicians.", // [DEMO] replace with real physician bio
}

export const SERVICES: string[] = [
  'Annual Wellness Exams',
  'Chronic Disease Management',
  'Preventive Screenings',
  'Immunizations',
  'Urgent Sick Visits',
  'Mental Health Screening',
  "Women's Health",
  'Geriatric Care',
]

export const CONDITIONS: string[] = [
  'Diabetes',
  'Hypertension',
  'High Cholesterol',
  'Thyroid Disorders',
  'Asthma',
  'Depression & Anxiety',
  'Obesity',
  'Urinary Tract Infections',
]

export const INSURANCE_ACCEPTED: string[] = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare',
  'Medicaid',
  'SelectHealth',
  'Tricare',
  'Regence',
  'PacificSource',
] // [DEMO] verify accepted insurance plans with billing department
