'use client'

import { useState } from 'react'

export default function InstantDemo() {
  const [businessName, setBusinessName] = useState('')
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [revenue, setRevenue] = useState(0)

  const runAudit = async () => {
    if (!businessName.trim()) {
      return
    }

    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate random results
    setScore(Math.floor(Math.random() * 30) + 30)
    setRevenue((Math.floor(Math.random() * 10) + 5) * 1000)
    
    setLoading(false)
    setShowResults(true)
  }

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Your SEO Potential in <span className="gradient-text">10 Seconds</span>
          </h2>
          <p className="text-xl text-gray-600">
            Enter your business name or website to get instant insights
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g., 'Fit Physio Melbourne' or 'fitphysio.com.au'"
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none text-lg"
            />
            <button
              onClick={runAudit}
              disabled={loading}
              className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-0.5 transition-transform shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Now'
              )}
            </button>
          </div>

          {showResults && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl text-center">
                  <h3 className="font-semibold text-gray-900 mb-4">Current Visibility</h3>
                  <div className="text-5xl font-bold text-yellow-500 mb-2">
                    {score}<span className="text-2xl text-gray-400">/100</span>
                  </div>
                  <p className="text-gray-600">Below average - huge growth potential!</p>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Missed Opportunities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span>⚠️</span>
                      <span>Not ranking for "physio near me"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>⚠️</span>
                      <span>Missing 1,200 monthly searches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>⚠️</span>
                      <span>3 competitors ranking above you</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl text-center">
                  <h3 className="font-semibold text-gray-900 mb-4">Potential Revenue</h3>
                  <div className="text-5xl font-bold text-green-500 mb-2">
                    ${revenue.toLocaleString()}<span className="text-lg text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-600">Based on industry conversion rates</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-xl text-center">
                <p className="text-xl mb-4">🎉 Good news! We can fix these issues and get you ranking in 30 days.</p>
                <button className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-0.5 transition-transform shadow-lg">
                  Claim Your Free Strategy Call
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 