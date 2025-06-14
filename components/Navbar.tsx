'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl font-bold">RankMelbourne</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/link-in-bio" className="gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:-translate-y-0.5 transition-transform">
              Try Link-in-Bio
            </Link>
          </div>

          <button className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 