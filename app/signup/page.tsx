'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

// Initialize Stripe - Using environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

type PlanType = {
  name: string
  price: number
  priceId?: string
  features: string[]
}

function CheckoutForm({ plan, onSuccess, formData }: { plan: PlanType; onSuccess: () => void; formData: any }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)
    setError('')

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      return
    }

    // Create payment method
    const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (pmError) {
      setError(pmError.message || 'Payment failed')
      setProcessing(false)
      return
    }

    // Create subscription on your backend
    try {
      const response = await fetch('/api/stripe/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          priceId: plan.priceId,
          email: formData.email,
          name: formData.name,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create subscription')
      }

      // TODO: Save user data and subscription ID to your database
      console.log('Subscription created:', data.subscriptionId)
      
      onSuccess()
    } catch (err: any) {
      setError(err.message || 'Failed to create subscription. Please try again.')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Information
        </label>
        <div className="border border-gray-300 rounded-lg p-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Test mode: Use card 4242 4242 4242 4242, any future expiry, any 3-digit CVC, and any 5-digit ZIP (e.g., 12345)
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          processing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-[#FF6B35] text-white hover:bg-[#E85A2C]'
        }`}
      >
        {processing ? 'Processing...' : 'Start 3-Day Free Trial'}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        Your card will be charged ${plan.price}/month after the 3-day trial ends.
        Cancel anytime.
      </p>
    </form>
  )
}

export default function SignupPage() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan') || 'growth'
  
  const [selectedPlan, setSelectedPlan] = useState(planParam)
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [step, setStep] = useState(1) // 1: Account, 2: Payment, 3: Success
  const [error, setError] = useState('')
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    businessName: '',
    username: ''
  })

  const plans: Record<string, PlanType> = {
    free: {
      name: 'Starter',
      price: 0,
      features: ['1 Link-in-Bio page', '5 links maximum', 'Basic analytics']
    },
    growth: {
      name: 'Growth',
      price: billingCycle === 'monthly' ? 19 : 15,
      priceId: billingCycle === 'monthly' ? 'price_1RZqvGCcsYqHROqxX3GXSMiz' : 'price_1RZqvGCcsYqHROqxsV87lCsA',
      features: ['Unlimited links', 'SEO optimization', 'Booking system', 'Advanced analytics']
    },
    pro: {
      name: 'Pro',
      price: billingCycle === 'monthly' ? 49 : 39,
      priceId: billingCycle === 'monthly' ? 'price_1RZqvHCcsYqHROqxFtx7RoOJ' : 'price_1RZqvHCcsYqHROqx5Ay6mOjT',
      features: ['Everything in Growth', 'AI content tools', 'Custom domain', 'API access']
    }
  }

  const currentPlan = plans[selectedPlan]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAccountSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.username) {
      setError('Please fill in all required fields')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    // For free plan, skip payment
    if (selectedPlan === 'free') {
      // TODO: Create account via API
      setStep(3)
    } else {
      setStep(2)
    }
  }

  const handlePaymentSuccess = () => {
    setStep(3)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-[#FF6B35] text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              1
            </div>
            <div className={`w-24 h-1 ${step >= 2 ? 'bg-[#FF6B35]' : 'bg-gray-300'}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-[#FF6B35] text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              2
            </div>
            <div className={`w-24 h-1 ${step >= 3 ? 'bg-[#FF6B35]' : 'bg-gray-300'}`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-[#FF6B35] text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              3
            </div>
          </div>
        </div>

        {/* Step Labels */}
        <div className="flex justify-between max-w-sm mx-auto mb-12 text-sm">
          <span className={step === 1 ? 'text-[#FF6B35] font-semibold' : 'text-gray-500'}>Account</span>
          <span className={step === 2 ? 'text-[#FF6B35] font-semibold' : 'text-gray-500'}>Payment</span>
          <span className={step === 3 ? 'text-[#FF6B35] font-semibold' : 'text-gray-500'}>Success</span>
        </div>

        {/* Step 1: Account Creation */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Create Your Account</h2>
            <p className="text-gray-600 text-center mb-8">
              Start your {currentPlan.name} plan {currentPlan.price > 0 ? 'with a 3-day free trial' : 'for free'}
            </p>

            {/* Plan Selection */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Selected Plan</label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
              >
                <option value="free">Starter (Free)</option>
                <option value="growth">Growth ($19/mo)</option>
                <option value="pro">Pro ($49/mo)</option>
              </select>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleAccountSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                <div className="flex items-center">
                  <span className="bg-gray-100 px-4 py-2 rounded-l-lg text-gray-600">rmelb.co/</span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                    placeholder="johndoe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="••••••••"
                  minLength={8}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name (Optional)</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  placeholder="Melbourne Fashion Co."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B35] text-white py-3 rounded-lg font-semibold hover:bg-[#E85A2C] transition-colors"
              >
                {selectedPlan === 'free' ? 'Create Free Account' : 'Continue to Payment'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link href="/login" className="text-[#FF6B35] hover:underline">
                Log in
              </Link>
            </p>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && currentPlan.price > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Start Your Free Trial</h2>
            <p className="text-gray-600 text-center mb-8">
              3 days free, then ${currentPlan.price}/month. Cancel anytime.
            </p>

            {/* Billing Cycle Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-[#FF6B35] shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === 'annual'
                      ? 'bg-white text-[#FF6B35] shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual
                  <span className="ml-1 text-xs text-green-600 font-semibold">Save 20%</span>
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{currentPlan.name} Plan ({billingCycle})</span>
                  <span>${currentPlan.price}/mo</span>
                </div>
                {billingCycle === 'annual' && (
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Billed annually</span>
                    <span>${currentPlan.price * 12}/year</span>
                  </div>
                )}
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>3-Day Free Trial</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Due Today</span>
                  <span>$0.00</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  First charge on {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Stripe Payment Form */}
            <Elements stripe={stripePromise}>
              <CheckoutForm plan={currentPlan} onSuccess={handlePaymentSuccess} formData={formData} />
            </Elements>

            <div className="mt-6 text-center">
              <button
                onClick={() => setStep(1)}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back to account details
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center justify-center gap-4 text-gray-500">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs">Secure payments by Stripe</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs">30-day money back guarantee</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold mb-2">Welcome to RankMelbourne!</h2>
            <p className="text-gray-600 mb-8">
              Your account has been created successfully. Let's set up your first link-in-bio page!
            </p>

            <Link
              href="/dashboard"
              className="inline-block bg-[#FF6B35] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#E85A2C] transition-colors"
            >
              Go to Dashboard
            </Link>

            {currentPlan.price > 0 && (
              <div className="mt-8 bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Trial Period Active:</strong> You have 3 days to explore all features. 
                  We'll send you a reminder before your trial ends.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 