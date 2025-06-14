'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [searchCount, setSearchCount] = useState(247)
  const [activeUsers, setActiveUsers] = useState(1847)
  const [bookingsToday, setBookingsToday] = useState(127)

  useEffect(() => {
    // Update counters
    const interval = setInterval(() => {
      setSearchCount(prev => 247 + Math.floor(Math.random() * 20) - 10)
      setActiveUsers(prev => 1847 + Math.floor(Math.random() * 50))
      setBookingsToday(prev => 127 + Math.floor(Math.random() * 10))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    { icon: '🔍', label: 'SEO Dashboard' },
    { icon: '🔗', label: 'Smart Links' },
    { icon: '📅', label: 'Bookings' },
    { icon: '📧', label: 'Marketing' },
    { icon: '🤖', label: 'AI Tools' }
  ]

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-orange-100 rounded-full opacity-30 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-custom"></span>
              <span className="text-sm text-gray-600">{activeUsers.toLocaleString()} Melbourne businesses growing right now</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              One Dashboard to <span className="gradient-text">Grow Your Melbourne Business</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              The all-in-one platform for influencers and small businesses. 
              SEO, bookings, marketing, and AI tools - everything you need to dominate your market.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                  <span>{feature.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/link-in-bio"
                className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-0.5 transition-transform shadow-lg inline-flex items-center gap-2"
              >
                Try Link-in-Bio Free
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 13L10 10L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <Link
                href="/sarahmelb"
                className="bg-white text-[#FF6B35] border-2 border-[#FF6B35] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FF6B35] hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 6.5V13.5L14 10L8 6.5Z" fill="currentColor"/>
                </svg>
                See Live Example
              </Link>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">500+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">{bookingsToday}</div>
                <div className="text-sm text-gray-600">Bookings Today</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35]">Free</div>
                <div className="text-sm text-gray-600">To Start</div>
              </div>
            </div>
          </div>

          {/* Platform Preview - Multi-module dashboard */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden animate-float">
              {/* Dashboard Header */}
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="text-white text-sm ml-auto">RankMelbourne Platform</span>
              </div>

              {/* Dashboard Content - showing multiple modules */}
              <div className="p-6">
                {/* Top stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">#3</div>
                    <div className="text-xs text-gray-500">Google Ranking</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">+34%</div>
                    <div className="text-xs text-gray-500">Traffic Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">$8.4k</div>
                    <div className="text-xs text-gray-500">Revenue/mo</div>
                  </div>
                </div>

                {/* Module cards */}
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🔗</span>
                      <div>
                        <div className="font-semibold text-sm">Link-in-Bio</div>
                        <div className="text-xs text-gray-600">324 clicks today</div>
                      </div>
                    </div>
                    <span className="text-green-500 text-xs">↑ 12%</span>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📅</span>
                      <div>
                        <div className="font-semibold text-sm">Bookings</div>
                        <div className="text-xs text-gray-600">18 appointments today</div>
                      </div>
                    </div>
                    <span className="text-green-500 text-xs">↑ 28%</span>
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🤖</span>
                      <div>
                        <div className="font-semibold text-sm">AI Content</div>
                        <div className="text-xs text-gray-600">5 posts generated</div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-500">New!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 