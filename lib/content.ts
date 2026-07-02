export interface Testimonial {
  name: string
  text: string
  rating: number
}

export interface ServiceItem {
  name: string
  description: string
  icon: string
}

export interface ConditionItem {
  name: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  keyword: string
  author: string
  date: string
  readTime: string
  body: string
}

export interface SiteContent {
  practiceName: string
  tagline: string
  specialty: string
  patientJourney: string
  city: string
  state: string
  zip: string
  address: string
  phone: string
  email: string
  website: string
  physicianName: string
  physicianTitle: string
  physicianYears: string
  physicianBio: string
  physicianEducation: string
  services: ServiceItem[]
  conditions: ConditionItem[]
  testimonials: Testimonial[]
  insurance: string[]
  story: string
  mission: string
  patientPortalUrl: string
  faq: { question: string; answer: string }[]
  availableSlots: string
  bookingNote: string
  heroImageAlt: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  bgLightColor: string
  medicalSpecialty: string
  schemaType: string
  jsonLd: Record<string, unknown>
}

export const siteContent: SiteContent = {
  practiceName: 'Meridian Family Medicine', // [DEMO] replace with real practice name
  tagline: "Your Family's Health Partner — From Birth to Every Stage of Life", // [DEMO] replace with real tagline
  specialty: 'Primary Care',
  patientJourney:
    'Compassionate, continuous care for every member of your family, from newborns to seniors',
  city: 'Meridian', // [DEMO] replace with real city
  state: 'Idaho',
  zip: '83642', // [DEMO] replace with real zip
  address: '1765 W McMillan Rd Suite 110', // [DEMO] replace with real address
  phone: '(208) 555-0187', // [DEMO] replace with real phone number
  email: 'info@meridianfamilymed.com', // [DEMO] replace with real email
  website: 'https://meridianfamilymed.com',
  physicianName: 'Dr. Emily Johnson, MD', // [DEMO] replace with real physician name
  physicianTitle: 'Board-Certified Family Physician',
  physicianYears: '12', // [DEMO] replace with real years in practice
  physicianBio:
    'Dr. Johnson is a board-certified family physician who has served the Meridian community for over 12 years. She completed her residency at the University of Washington Medical Center and is passionate about building long-term relationships with patients of all ages. Her approach combines evidence-based medicine with genuine attention to each patient\'s individual needs and goals.', // [DEMO] replace with real physician bio
  physicianEducation:
    'MD, University of Idaho | Residency, University of Washington Medical Center, Seattle', // [DEMO] replace with real education
  services: [
    {
      name: 'Annual Physical Exams',
      description:
        'Comprehensive yearly wellness exams with lab work, preventive screenings, and personalized health counseling tailored to your age and risk factors.',
      icon: 'heart',
    },
    {
      name: 'Chronic Disease Management',
      description:
        'Ongoing, coordinated care for diabetes, hypertension, high cholesterol, thyroid disorders, and other long-term conditions to help you stay healthy and functional.',
      icon: 'activity',
    },
    {
      name: 'Preventive Care & Screenings',
      description:
        'Cancer screenings, cardiovascular risk assessment, colonoscopy referrals, and wellness counseling to catch problems before they become serious.',
      icon: 'shield',
    },
    {
      name: 'Immunizations & Vaccines',
      description:
        'All recommended vaccines for children and adults, including flu shots, Shingrix, Tdap, pneumonia vaccine, COVID-19 boosters, and travel immunizations.',
      icon: 'check-circle',
    },
    {
      name: 'Urgent Care Visits',
      description:
        'Same-day sick appointments for acute illnesses such as infections, fevers, minor injuries, and sudden-onset symptoms — so you get care when you need it.',
      icon: 'clock',
    },
    {
      name: 'Pediatric Care',
      description:
        'Well-child exams, growth and developmental monitoring, vaccinations, and acute illness care for infants, children, and adolescents.',
      icon: 'users',
    },
    {
      name: "Women's Health",
      description:
        "Pap smears, mammogram referrals, birth control management, prenatal care coordination, and women's preventive screenings in a comfortable, supportive environment.",
      icon: 'user',
    },
    {
      name: 'Telehealth Appointments',
      description:
        'Secure video visits for follow-up care, prescription refills, minor acute concerns, and chronic disease check-ins — from the comfort of your home.',
      icon: 'video',
    },
  ],
  conditions: [
    {
      name: 'Diabetes',
      description:
        'Type 1 and Type 2 diabetes management including A1C monitoring, continuous glucose tracking, medication optimization, and lifestyle coaching.',
    },
    {
      name: 'Hypertension',
      description:
        'High blood pressure management with medication titration, lifestyle counseling, and regular monitoring to protect your heart and kidneys.',
    },
    {
      name: 'High Cholesterol',
      description:
        'Lipid panel monitoring and management through dietary guidance, statin therapy, and cardiovascular risk reduction strategies.',
    },
    {
      name: 'Obesity',
      description:
        'Comprehensive weight management support including behavioral counseling, nutritional planning, and medical treatment when appropriate.',
    },
    {
      name: 'Thyroid Disorders',
      description:
        'Hypothyroidism and hyperthyroidism diagnosis and management with TSH and thyroid hormone monitoring and medication adjustment.',
    },
    {
      name: 'Anxiety & Depression',
      description:
        'Mental health screening, medication management, and coordinated referrals to therapists and psychiatrists for anxiety disorders and depression.',
    },
    {
      name: 'Asthma',
      description:
        'Asthma action plan development, controller and rescue inhaler prescribing, trigger identification, and pulmonology referrals for complex cases.',
    },
    {
      name: 'Urinary Tract Infections',
      description:
        'Rapid diagnosis and antibiotic treatment for UTIs, with evaluation for recurrent infections and urology referral when indicated.',
    },
  ],
  testimonials: [
    {
      name: 'Rebecca L.', // [DEMO] replace with real patient name and review
      text: "Dr. Johnson has been our family doctor for seven years — my husband, both kids, and me. She remembers everything about each of us and genuinely feels like a partner in our health. I can't imagine going anywhere else.",
      rating: 5,
    },
    {
      name: 'Marcus T.', // [DEMO] replace with real patient name and review
      text: "I came in with an A1C of 9.4 and felt completely overwhelmed by my diabetes diagnosis. Dr. Johnson walked me through everything step by step. Two years later my A1C is 6.8 and I've lost 30 pounds. She changed my life.",
      rating: 5,
    },
    {
      name: 'Sandra K.', // [DEMO] replace with real patient name and review
      text: 'I almost skipped my annual physical because I felt fine. Dr. Johnson found that my blood pressure was dangerously high — I had no idea. Starting treatment early probably kept me out of the ER. I am so grateful I came in.',
      rating: 5,
    },
    {
      name: 'James P.', // [DEMO] replace with real patient name and review
      text: "The telehealth option has been a game changer for me. I travel for work and used to miss follow-up appointments constantly. Now I can check in with Dr. Johnson from anywhere. It's exactly the kind of flexibility a busy family needs.",
      rating: 5,
    },
  ],
  insurance: [
    'Blue Cross Blue Shield',
    'Aetna',
    'Cigna',
    'United Healthcare',
    'Medicare',
    'Medicaid',
    'Regence',
    'SelectHealth',
  ], // [DEMO] verify accepted insurance plans with billing department
  story:
    'Meridian Family Medicine was founded with a simple but powerful belief: every patient deserves a doctor who takes the time to truly know them. Dr. Emily Johnson established the practice in Meridian after completing her residency in Seattle, driven by a desire to provide the kind of continuous, relationship-based care that makes a real difference in patients\' lives. Over 12 years, she has grown a practice built on trust, thoroughness, and a genuine commitment to the health of the Treasure Valley community.', // [DEMO] replace with real practice story
  mission:
    'To deliver comprehensive, compassionate primary care that helps individuals and families in Meridian, Idaho live healthier, longer lives — through prevention, early detection, and evidence-based treatment that honors each patient as a whole person.', // [DEMO] replace with real mission statement
  patientPortalUrl: '#', // [DEMO] replace with real patient portal URL
  faq: [
    {
      question: 'How often do I need an annual physical?',
      answer:
        'Most adults should have a comprehensive physical exam once a year. Your annual physical is typically covered at no cost by your insurance as a preventive benefit. Even if you feel healthy, yearly visits allow us to catch silent conditions like high blood pressure or pre-diabetes early, update your screenings, and review your medications. Patients with chronic conditions may benefit from more frequent check-ins.',
    },
    {
      question: 'Do you see children?',
      answer:
        'Yes — we provide pediatric care for patients from birth through adolescence. We offer well-child exams on the CDC-recommended schedule, vaccines, developmental screenings, sports physicals, and sick visits for children of all ages. Many families choose to have everyone — from newborn to grandparent — seen by Dr. Johnson, which allows for more coordinated family health management.',
    },
    {
      question: "What's included in an annual wellness visit?",
      answer:
        "An annual wellness visit includes a comprehensive review of your health history, vital signs, a head-to-toe physical examination, and age-appropriate lab work such as a cholesterol panel, blood glucose, and complete blood count. We also update your immunizations, perform preventive screenings appropriate for your age and sex (Pap smears, colorectal cancer screening referrals, etc.), and discuss any health concerns or goals you have. It's a full picture of your current health.",
    },
    {
      question: 'Do you offer same-day sick visits?',
      answer:
        'Yes. We reserve appointment slots each day specifically for acute illness so that established patients can be seen when they need care. If you call before 10 AM, we can almost always accommodate a same-day visit. For after-hours concerns, we have an on-call line to help guide your care until we can see you. We want to be your first call when you get sick — not the urgent care down the street.',
    },
    {
      question: 'When is telehealth available?',
      answer:
        'Telehealth video visits are available Monday through Friday during regular office hours for established patients. Telehealth is a great option for follow-up appointments, prescription refill discussions, chronic disease check-ins, and many minor acute concerns such as UTIs, mild respiratory illness, and rashes. Some visits — like annual physicals and certain procedures — do require an in-person appointment. Call our office and we can help determine whether your need qualifies for telehealth.',
    },
    {
      question: 'What adult vaccines should I be getting?',
      answer:
        'Most adults need an annual flu vaccine, a Tdap booster every 10 years (or with each pregnancy), and COVID-19 boosters per current CDC guidance. Adults 50 and older should receive the Shingrix (shingles) vaccine series. Depending on your age and health status, you may also need pneumococcal vaccines, Hepatitis B, or travel vaccines. At every visit we review your immunization record and make sure you are up to date — no guessing required.',
    },
  ],
  availableSlots: 'Same-day sick visit appointments available', // [DEMO] verify actual scheduling availability
  bookingNote:
    'Accepting new patients of all ages. Call our office or use our online patient portal to schedule. Same-day sick visits available for acute illness — call by 10 AM for best availability.', // [DEMO] update with real booking instructions
  heroImageAlt:
    'Dr. Emily Johnson consulting with a patient at Clearwater Family Medicine in Twin Falls, Idaho', // [DEMO] update alt text when real photo is provided
  seoTitle: 'Meridian Family Medicine | Primary Care Doctor Meridian Idaho',
  seoDescription:
    'Family physician accepting new patients in Meridian, ID. Annual physicals, chronic disease management, same-day sick visits. Book online today.',
  seoKeywords:
    'primary care doctor Twin Falls Idaho, family physician Twin Falls ID, family medicine Magic Valley, annual physical Twin Falls, same-day sick visit Twin Falls Idaho',
  primaryColor: '#15803d',
  secondaryColor: '#0ea5e9',
  accentColor: '#f59e0b',
  bgLightColor: '#f0fdf4',
  medicalSpecialty: 'GeneralPractice',
  schemaType: 'GeneralPractice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalOrganization', 'LocalBusiness'],
        '@id': 'https://primary-demo.demo/#organization',
        name: 'Meridian Family Medicine', // [DEMO] replace with real practice name
        alternateName: 'Meridian Family Med',
        telephone: '(208) 555-0187', // [DEMO] replace with real phone
        email: 'info@clearwaterfamilymed.com', // [DEMO] replace with real email
        url: 'https://primary-demo.demo',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '671 Poleline Rd Suite A', // [DEMO] replace with real address
          addressLocality: 'Twin Falls',
          addressRegion: 'ID',
          postalCode: '83301', // [DEMO] replace with real zip
          addressCountry: 'US',
        },
        openingHours: 'Mo-Fr 08:00-17:00', // [DEMO] replace with real hours
        medicalSpecialty: 'GeneralPractice',
        priceRange: '$$',
        hasMap: 'https://maps.google.com/?q=671+Poleline+Rd+Suite+A+Twin+Falls+ID+83301', // [DEMO] replace with real Google Maps link
        member: {
          '@id': 'https://primary-demo.demo/#physician',
        },
      },
      {
        '@type': ['Physician', 'Person'],
        '@id': 'https://primary-demo.demo/#physician',
        name: 'Dr. Emily Johnson, MD', // [DEMO] replace with real physician name
        jobTitle: 'Board-Certified Family Physician',
        medicalSpecialty: 'GeneralPractice',
        worksFor: {
          '@id': 'https://primary-demo.demo/#organization',
        },
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'University of Idaho College of Medicine', // [DEMO] replace with real school
          },
          {
            '@type': 'EducationalOrganization',
            name: 'University of Washington Medical Center', // [DEMO] replace with real residency program
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How often do I need an annual physical?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most adults should have a comprehensive physical exam once a year. Even if you feel healthy, yearly visits allow us to catch silent conditions like high blood pressure or pre-diabetes early, update your screenings, and review your medications.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you see children?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — we provide pediatric care for patients from birth through adolescence, including well-child exams, vaccines, developmental screenings, sports physicals, and sick visits for children of all ages.',
            },
          },
          {
            '@type': 'Question',
            name: "What's included in an annual wellness visit?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An annual wellness visit includes a review of health history, vital signs, a head-to-toe physical examination, age-appropriate lab work, immunization updates, and preventive screenings appropriate for your age and sex.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer same-day sick visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We reserve appointment slots each day for acute illness. If you call before 10 AM, we can almost always accommodate a same-day visit. We also have an on-call line for after-hours guidance.',
            },
          },
          {
            '@type': 'Question',
            name: 'When is telehealth available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Telehealth video visits are available Monday through Friday during regular office hours for established patients, for follow-ups, prescription refills, chronic disease check-ins, and many minor acute concerns.',
            },
          },
          {
            '@type': 'Question',
            name: 'What adult vaccines should I be getting?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most adults need an annual flu vaccine, Tdap every 10 years, and COVID-19 boosters. Adults 50 and older should receive Shingrix. We review your immunization record at every visit and make sure you are up to date.',
            },
          },
        ],
      },
    ],
  },
}
