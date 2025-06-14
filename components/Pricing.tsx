'use client'

import { useState } from 'react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for testing the waters',
      features: [
        'Basic SEO tracking (1 keyword)',
        '1 link-in-bio page',
        '50 bookings/month',
        'Basic analytics dashboard',
        'Community support'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Growth',
      price: { monthly: 99, annual: 79 },
      description: 'Everything you need to grow',
      features: [
        'Full SEO suite (10 keywords)',
        'Unlimited bookings',
        'Email marketing (1,000 contacts)',
        'Review management',
        'AI content assistant',
        'Priority support'
      ],
      cta: 'Start Growing',
      popular: true
    },
    {
      name: 'Pro',
      price: { monthly: 299, annual: 239 },
      description: 'For serious businesses',
      features: [
        'Unlimited SEO keywords',
        'All AI tools unlocked',
        'Advanced analytics',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Go Pro',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing, <span className="gradient-text">Powerful Platform</span>
          </h2>
          <p className="text-xl text-gray-600">Start free, upgrade when you're ready</p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-8 bg-gray-200 rounded-full transition-colors duration-200"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                isAnnual ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className={`${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-2">Save 20%</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-[#FF6B35] scale-105 shadow-xl' : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                      <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'gradient-primary text-white hover:-translate-y-0.5 shadow-lg'
                    : 'bg-white border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need an Agency Plan?</h3>
          <p className="text-xl mb-8 opacity-90">
            Manage multiple clients, white-label everything, and get enterprise features
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold">$599</div>
              <div className="text-sm opacity-75">per month</div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <span>✓</span>
                <span>Manage unlimited clients</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span>✓</span>
                <span>5 team member accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>API access & webhooks</span>
              </div>
            </div>
          </div>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-0.5 transition-transform">
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  )
} 