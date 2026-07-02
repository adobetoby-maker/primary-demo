'use client'
import { siteContent } from '@/lib/content'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Appointments', href: '/appointments' },
  { label: 'Contact', href: '/contact' },
  { label: 'Patient Resources', href: '/patient-resources' },
  { label: 'Blog', href: '/blog' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Practice Name */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: '#064e3b' }}
              aria-hidden="true"
            >
              PC
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
              {siteContent.practiceName}
              <span className="block text-xs font-normal text-gray-500 leading-none">
                {siteContent.city}, {siteContent.state}
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-emerald-800 hover:bg-emerald-50 transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right: phone + Book button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2085550185"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-emerald-800 transition-colors duration-150 cursor-pointer"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (208) 555-0185
            </a>
            <Link
              href="/appointments"
              className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-colors duration-150 cursor-pointer hover:opacity-90"
              style={{ backgroundColor: '#064e3b' }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:2085550185"
              className="flex items-center justify-center w-9 h-9 rounded-full text-emerald-800 hover:bg-emerald-50 transition-colors duration-150 cursor-pointer"
              aria-label="Call (208) 555-0185"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/appointments"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-3 rounded-lg text-sm font-bold text-white cursor-pointer hover:opacity-90"
                style={{ backgroundColor: '#064e3b' }}
              >
                Book Appointment
              </Link>
            </div>
            <div className="pb-2 text-center">
              <a
                href="tel:2085550185"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-emerald-800 transition-colors duration-150 cursor-pointer"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                (208) 555-0185
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
