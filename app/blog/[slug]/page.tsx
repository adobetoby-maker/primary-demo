import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/blogPosts'
import { Clock, ArrowLeft, Calendar } from 'lucide-react'

const SITE_URL = 'https://meridianfamilymedicine-demo.com' // [DEMO] update with real domain

interface Params {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { title: 'Post Not Found | Meridian Family Medicine' }
  }

  return {
    title: `${post.title} | Meridian Family Medicine`,
    description: post.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dr. Emily Johnson, MD, FAAFP'],
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Dr. Emily Johnson',
      honorificSuffix: 'MD, FAAFP',
      jobTitle: 'Board-Certified Family Medicine Physician',
      worksFor: {
        '@type': 'MedicalOrganization',
        name: 'Meridian Family Medicine',
        url: SITE_URL,
      },
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Meridian Family Medicine',
      url: SITE_URL,
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Post header ── */}
      <section
        className="py-14"
        style={{ background: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)' }}
        aria-label="Post header"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-150">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-white/80 truncate max-w-xs">
                {post.title}
              </li>
            </ol>
          </nav>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-200 mb-4">
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Post content ── */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-gray prose-sm sm:prose-base max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-li:text-gray-600
              prose-strong:text-gray-900
              prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer transition-colors duration-150"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </div>

          {/* ── About the Author ── */}
          <div
            className="mt-10 rounded-2xl p-7 flex flex-col sm:flex-row gap-6 items-start"
            style={{ backgroundColor: '#f0fdf4' }}
          >
            {/* Photo placeholder [DEMO] */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ backgroundColor: '#064e3b' }}
              aria-hidden="true"
            >
              LP
              {/* [DEMO] replace with real physician headshot */}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                About the Author
              </p>
              <p className="font-bold text-gray-900 mb-1">Dr. Emily Johnson, MD, FAAFP</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {/* [DEMO] replace with real physician bio */}
                Dr. Johnson is a board-certified family medicine physician with 12 years of experience
                serving patients in Meridian, Idaho. She is a graduate of the University of Michigan
                Medical School and completed her residency at UW Family Medicine. She holds privileges
                at St. Luke&apos;s Magic Valley Regional Medical Center.
              </p>
              <Link
                href="/about"
                className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
              >
                Read full bio &rarr;
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            className="mt-8 rounded-2xl p-7 text-center"
            style={{ backgroundColor: '#064e3b' }}
          >
            <h2 className="text-lg font-bold text-white mb-2">
              Questions about your health?
            </h2>
            <p className="text-white/70 text-sm mb-5">
              Schedule a consultation with Dr. Johnson for personalized, evidence-based guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold bg-white text-emerald-800 cursor-pointer hover:bg-emerald-50 transition-colors duration-150"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:2085550185"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold border-2 border-white/60 text-white cursor-pointer hover:bg-white/10 transition-colors duration-150"
              >
                (208) 555-0185
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* ── Related posts ── */}
      <section className="py-12 border-t border-gray-100" aria-labelledby="related-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-xl font-bold mb-8" style={{ color: '#064e3b' }}>
            More from Our Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .map((relPost) => (
                <article
                  key={relPost.slug}
                  className="rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-emerald-200 transition-all duration-200 bg-white"
                >
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-100 mb-3">
                    {relPost.category}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">
                    <Link
                      href={`/blog/${relPost.slug}`}
                      className="hover:text-emerald-800 transition-colors duration-150 cursor-pointer"
                    >
                      {relPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">
                    {relPost.metaDescription.slice(0, 100)}...
                  </p>
                  <Link
                    href={`/blog/${relPost.slug}`}
                    className="text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                  >
                    Read More &rarr;
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
