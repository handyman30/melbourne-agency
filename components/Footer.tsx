import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold">RankMelbourne</span>
            </Link>
            <p className="text-gray-400 text-sm">
              The all-in-one growth platform for Melbourne businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/link-in-bio" className="hover:text-white">Link-in-Bio</Link></li>
              <li><Link href="/#services" className="hover:text-white">SEO Dashboard</Link></li>
              <li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <p className="text-gray-400 text-sm mb-4">
              Join 500+ Melbourne businesses growing with us.
            </p>
            <Link 
              href="/link-in-bio"
              className="inline-block gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:-translate-y-0.5 transition-transform"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 RankMelbourne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 