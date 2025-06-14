import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
})

// Price IDs for different plans - these need to be created in your Stripe dashboard
const PRICE_IDS = {
  growth_monthly: 'price_1RZqvGCcsYqHROqxX3GXSMiz',
  growth_annual: 'price_1RZqvGCcsYqHROqxsV87lCsA',
  pro_monthly: 'price_1RZqvHCcsYqHROqxFtx7RoOJ',
  pro_annual: 'price_1RZqvHCcsYqHROqx5Ay6mOjT',
}

export async function POST(req: NextRequest) {
  try {
    const { paymentMethodId, priceId, email, name } = await req.json()

    // Validate price ID
    const validPriceIds = Object.values(PRICE_IDS)
    if (!validPriceIds.includes(priceId)) {
      throw new Error('Invalid price ID')
    }

    // Create a new customer
    const customer = await stripe.customers.create({
      email,
      name,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    })

    // Create the subscription with 3-day trial
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      trial_period_days: 3,
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    })

    // For trial subscriptions, we don't need to confirm payment immediately
    return NextResponse.json({
      subscriptionId: subscription.id,
      status: subscription.status,
      customerId: customer.id,
      trialEnd: subscription.trial_end,
    })
  } catch (error: any) {
    console.error('Error creating subscription:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create subscription' },
      { status: 400 }
    )
  }
} 