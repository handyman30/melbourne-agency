'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data - in production this would come from a database
  const userData = {
    name: 'Sarah Chen',
    username: 'sarahchen',
    plan: 'Growth',
    trialEnds: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    profileViews: 1247,
    linkClicks: 342,
    bookings: 5,
    links: [
      { id: 1, title: '🛍️ Shop My Looks', url: 'https://shop.example.com', clicks: 234 },
      { id: 2, title: '📸 Book a Photoshoot', url: 'https://calendly.com/sarah', clicks: 156 },
      { id: 3, title: '🎯 Brand Collaborations', url: 'mailto:collabs@sarah.com', clicks: 89 }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-xl font-bold">RankMelbourne</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href={`/${userData.username}`}
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                View Public Page →
              </Link>
              <button className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#E85A2C]">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-2xl p-6 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {userData.name}!</h1>
          <p className="opacity-90">
            Your link is live at{' '}
            <a 
              href={`https://rmelb.co/${userData.username}`} 
              target="_blank" 
              className="underline font-semibold"
            >
              rmelb.co/{userData.username}
            </a>
          </p>
          {userData.plan !== 'Free' && (
            <p className="mt-2 text-sm opacity-75">
              Trial ends on {userData.trialEnds.toLocaleDateString()} • {userData.plan} Plan
            </p>
          )}
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Profile Views</span>
              <span className="text-2xl">👀</span>
            </div>
            <div className="text-3xl font-bold">{userData.profileViews.toLocaleString()}</div>
            <div className="text-sm text-green-600 mt-1">+12% from last week</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Link Clicks</span>
              <span className="text-2xl">🔗</span>
            </div>
            <div className="text-3xl font-bold">{userData.linkClicks}</div>
            <div className="text-sm text-green-600 mt-1">+34% from last week</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Bookings</span>
              <span className="text-2xl">📅</span>
            </div>
            <div className="text-3xl font-bold">{userData.bookings}</div>
            <div className="text-sm text-green-600 mt-1">5 new this week</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              {['overview', 'links', 'analytics', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-[#FF6B35] text-[#FF6B35]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link 
                    href="/link-in-bio"
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#FF6B35] transition-colors"
                  >
                    <div className="text-3xl mb-2">➕</div>
                    <span className="font-medium">Add New Link</span>
                  </Link>
                  
                  <button className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow text-left">
                    <div className="text-3xl mb-2">📊</div>
                    <span className="font-medium">View Full Analytics</span>
                  </button>
                  
                  <button className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow text-left">
                    <div className="text-3xl mb-2">🎨</div>
                    <span className="font-medium">Customize Theme</span>
                  </button>
                </div>

                <h3 className="text-lg font-bold mt-8 mb-4">Your Links Performance</h3>
                <div className="space-y-3">
                  {userData.links.map((link) => (
                    <div key={link.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium">{link.title}</span>
                        <p className="text-sm text-gray-600">{link.url}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{link.clicks} clicks</div>
                        <div className="text-sm text-gray-600">27.4% CTR</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'links' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Manage Links</h2>
                  <Link 
                    href="/link-in-bio"
                    className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#E85A2C]"
                  >
                    Edit Links
                  </Link>
                </div>
                <p className="text-gray-600">
                  You have {userData.links.length} active links. Drag to reorder, click to edit.
                </p>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Analytics Overview</h2>
                <p className="text-gray-600">
                  Detailed analytics coming soon. Track your growth with advanced insights.
                </p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Account Settings</h2>
                <div className="space-y-4 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                      type="text"
                      value={userData.username}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <button className="bg-[#FF6B35] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#E85A2C]">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 