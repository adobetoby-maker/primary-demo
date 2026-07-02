import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'
import { Clock, ArrowRight } from 'lucide-react'

const SITE_URL = 'https://meridianfamilymedicine-demo.com' // [DEMO] update with real domain

export const metadata: Metadata = {
  title: 'Health Blog | Meridian Family Medicine, ID',
  description:
    'Patient education articles from Dr. Emily Johnson, MD, FAAFP — covering preventive care, chronic disease management, and health topics relevant to Meridian, Idaho patients.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Health Blog | Meridian Family Medicine, ID',
    description:
      'Patient education articles from Dr. Emily Johnson — preventive care, chronic disease, and health topics for Meridian, Idaho patients.',
    url: `${SITE_URL}/blog`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Meridian Family Medicine Health Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Blog | Meridian Family Medicine, ID',
    description: 'Patient education from Dr. Emily Johnson — preventive care and health topics for Meridian patients.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
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
                Blog
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Health &amp; Wellness Blog</h1>
          <p className="text-white/70 mt-2 max-w-xl">
            Patient education articles from Dr. Emily Johnson, MD, FAAFP — written to help you
            understand your health and make informed decisions.
          </p>
        </div>
      </section>

      {/* ── Blog grid ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all duration-200 bg-white flex flex-col"
              >
                {/* Category badge / thumbnail area */}
                <div
                  className="h-40 flex items-center justify-center p-6"
                  style={{ backgroundColor: '#f0fdf4' }}
                >
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 bg-emerald-200"
                  >
                    {post.category}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-emerald-800 transition-colors duration-150 cursor-pointer"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.metaDescription}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer transition-colors duration-150 mt-auto"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-14"
        style={{ backgroundColor: '#064e3b' }}
        aria-labelledby="blog-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="blog-cta-heading" className="text-2xl font-bold text-white mb-4">
            Questions About Your Health?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Don&apos;t rely solely on internet searches for medical guidance. Schedule a visit with
            Dr. Johnson for personalized, evidence-based answers.
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
