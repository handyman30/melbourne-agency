'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      monthlyPrice: 0,
      description: 'Perfect for trying out RankMelbourne',
      features: [
        '1 Link-in-Bio page',
        '5 links maximum',
        'Basic analytics',
        'RankMelbourne branding',
        'Community support'
      ],
      cta: 'Start Free',
      ctaLink: '/signup?plan=free',
      popular: false
    },
    {
      name: 'Growth',
      price: billingCycle === 'monthly' ? '$19' : '$15',
      monthlyPrice: billingCycle === 'monthly' ? 19 : 15,
      description: 'Everything you need to grow your Melbourne presence',
      features: [
        '✨ 3-day free trial',
        'Unlimited links',
        'SEO optimization',
        'Booking system',
        'Advanced analytics',
        'Custom branding',
        'Priority support',
        'Remove RankMelbourne branding'
      ],
      cta: 'Start 3-Day Free Trial',
      ctaLink: '/signup?plan=growth',
      popular: true,
      highlight: '3 days free, then $19/mo'
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$49' : '$39',
      monthlyPrice: billingCycle === 'monthly' ? 49 : 39,
      description: 'For serious creators and businesses',
      features: [
        '✨ 3-day free trial',
        'Everything in Growth',
        'AI content tools',
        'Multiple team members',
        'Custom domain',
        'API access',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Start 3-Day Free Trial',
      ctaLink: '/signup?plan=pro',
      popular: false,
      highlight: '3 days free, then $49/mo'
    }
  ]

  const savings = billingCycle === 'annual' ? '20%' : '0%'

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Free, Grow Fast
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Try RankMelbourne risk-free with our 3-day trial. Cancel anytime, no questions asked.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#FF6B35] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-[#FF6B35] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 text-center">
          <p className="text-green-800">
            <span className="font-semibold">🎉 Special Launch Offer:</span> Start your 3-day free trial today. 
            No credit card required for free plan. Cancel anytime during trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-[#FF6B35] transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-gray-600">
                      /{billingCycle === 'monthly' ? 'month' : 'month'}
                    </span>
                  )}
                </div>
                {plan.highlight && (
                  <p className="text-sm text-green-600 font-medium">{plan.highlight}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={feature.startsWith('✨') ? 'font-semibold' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-[#FF6B35] text-white hover:bg-[#E85A2C] hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold mb-2">How does the free trial work?</h4>
              <p className="text-gray-600">
                Start with a 3-day free trial on Growth or Pro plans. You'll need to add a payment method, 
                but you won't be charged until after the trial ends. Cancel anytime during the trial to avoid charges.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">
                Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through PayPal.
              </p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>30-day money-back guarantee • Cancel anytime • Secure payments by PayPal</span>
          </div>
        </div>
      </div>
    </section>
  )
} 