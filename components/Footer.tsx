import Link from 'next/link'
import { MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book Appointment', href: '/appointments' },
  { label: 'Contact', href: '/contact' },
]

const insurancePlans = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'United Healthcare',
  'Medicare',
  'Medicaid',
  'SelectHealth',
  'Tricare',
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Practice info + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: '#10b981' }}
                aria-hidden="true"
              >
                PC
              </div>
              <span className="font-bold text-white text-base">Meridian Family Medicine</span>
            </div>
            <p className="text-white/60 text-sm italic mb-4">
              Your Health. Our Priority. For Life.
            </p>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" aria-hidden="true" />
                <span>
                  1765 W McMillan Rd Suite 110<br />
                  Meridian, ID 83642
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-emerald-400" aria-hidden="true" />
                <a
                  href="tel:2085550185"
                  className="hover:text-white transition-colors duration-150"
                >
                  (208) 555-0185
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" aria-hidden="true" />
                {/* [DEMO] replace with real hours */}
                <span>
                  Mon–Fri: 8:00 AM – 5:00 PM<br />
                  Sat: 9:00 AM – 12:00 PM<br />
                  Sun: Closed
                </span>
              </div>
            </address>
            {/* Social media placeholders [DEMO] */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Facebook [DEMO]"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors duration-150 cursor-pointer"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Instagram [DEMO]"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors duration-150 cursor-pointer"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn [DEMO]"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors duration-150 cursor-pointer"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Insurance + hours summary */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Insurance Accepted
            </h3>
            <ul className="space-y-1.5 mb-6">
              {insurancePlans.map((plan) => (
                <li key={plan} className="text-sm text-white/60">
                  {plan}
                </li>
              ))}
              {/* [DEMO] verify accepted insurance with billing department */}
            </ul>
            <p className="text-xs text-white/40">
              Don't see your plan? Call us — we accept many additional plans not listed here.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {currentYear} Meridian Family Medicine. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>ADA Compliant</span>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white/70 transition-colors duration-150 cursor-pointer">
              Privacy Policy {/* [DEMO] replace with real link */}
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white/70 transition-colors duration-150 cursor-pointer">
              HIPAA Notice {/* [DEMO] replace with real link */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
