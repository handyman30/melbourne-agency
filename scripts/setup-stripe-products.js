#!/usr/bin/env node

const Stripe = require('stripe');
require('dotenv').config({ path: '.env.local' });

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function setupStripeProducts() {
  console.log('🚀 Setting up Stripe products and prices...\n');

  try {
    // Create Growth Plan Product
    console.log('Creating Growth Plan product...');
    const growthProduct = await stripe.products.create({
      name: 'RankMelbourne Growth',
      description: 'Perfect for growing influencers and small businesses',
      metadata: {
        features: JSON.stringify([
          'Unlimited links',
          'SEO optimization', 
          'Booking system',
          'Advanced analytics',
          'Priority support'
        ])
      }
    });
    console.log('✅ Growth product created:', growthProduct.id);

    // Create Growth Plan Prices
    console.log('Creating Growth Plan prices...');
    const growthMonthly = await stripe.prices.create({
      product: growthProduct.id,
      unit_amount: 1900, // $19.00
      currency: 'aud',
      recurring: {
        interval: 'month',
        trial_period_days: 3
      },
      nickname: 'Growth Monthly'
    });
    console.log('✅ Growth monthly price:', growthMonthly.id);

    const growthAnnual = await stripe.prices.create({
      product: growthProduct.id,
      unit_amount: 1500, // $15.00/month billed annually
      currency: 'aud',
      recurring: {
        interval: 'month',
        interval_count: 1,
        trial_period_days: 3
      },
      nickname: 'Growth Annual',
      metadata: {
        billing: 'annual'
      }
    });
    console.log('✅ Growth annual price:', growthAnnual.id);

    // Create Pro Plan Product
    console.log('\nCreating Pro Plan product...');
    const proProduct = await stripe.products.create({
      name: 'RankMelbourne Pro',
      description: 'For professionals who want it all',
      metadata: {
        features: JSON.stringify([
          'Everything in Growth',
          'AI content tools',
          'Custom domain',
          'API access',
          'White-label options',
          'Dedicated account manager'
        ])
      }
    });
    console.log('✅ Pro product created:', proProduct.id);

    // Create Pro Plan Prices
    console.log('Creating Pro Plan prices...');
    const proMonthly = await stripe.prices.create({
      product: proProduct.id,
      unit_amount: 4900, // $49.00
      currency: 'aud',
      recurring: {
        interval: 'month',
        trial_period_days: 3
      },
      nickname: 'Pro Monthly'
    });
    console.log('✅ Pro monthly price:', proMonthly.id);

    const proAnnual = await stripe.prices.create({
      product: proProduct.id,
      unit_amount: 3900, // $39.00/month billed annually
      currency: 'aud',
      recurring: {
        interval: 'month',
        interval_count: 1,
        trial_period_days: 3
      },
      nickname: 'Pro Annual',
      metadata: {
        billing: 'annual'
      }
    });
    console.log('✅ Pro annual price:', proAnnual.id);

    // Output the configuration
    console.log('\n🎉 Success! Products and prices created.\n');
    console.log('Add these price IDs to your /app/api/stripe/create-subscription/route.ts:\n');
    console.log(`const PRICE_IDS = {
  growth_monthly: '${growthMonthly.id}',
  growth_annual: '${growthAnnual.id}',
  pro_monthly: '${proMonthly.id}',
  pro_annual: '${proAnnual.id}',
};\n`);

    // Also save to a file for reference
    const fs = require('fs');
    const config = `// Stripe Price IDs - Generated ${new Date().toISOString()}
export const STRIPE_PRICE_IDS = {
  growth_monthly: '${growthMonthly.id}',
  growth_annual: '${growthAnnual.id}',
  pro_monthly: '${proMonthly.id}',
  pro_annual: '${proAnnual.id}',
};

// Product IDs
export const STRIPE_PRODUCT_IDS = {
  growth: '${growthProduct.id}',
  pro: '${proProduct.id}',
};
`;

    fs.writeFileSync('stripe-config.js', config);
    console.log('Configuration saved to stripe-config.js');

  } catch (error) {
    console.error('❌ Error setting up Stripe products:', error.message);
    if (error.type === 'StripeAuthenticationError') {
      console.error('\n⚠️  Authentication failed. Please check your Stripe secret key in .env.local');
    }
    process.exit(1);
  }
}

// Check if we're using test or live keys
if (process.env.STRIPE_SECRET_KEY) {
  const isTestMode = process.env.STRIPE_SECRET_KEY.startsWith('sk_test_');
  console.log(`\n🔑 Using ${isTestMode ? 'TEST' : 'LIVE'} Stripe keys\n`);
  
  if (!isTestMode) {
    console.log('⚠️  WARNING: You are using LIVE keys. Products will be created in your live Stripe account.');
    console.log('Press Ctrl+C to cancel, or wait 5 seconds to continue...\n');
    setTimeout(() => {
      setupStripeProducts();
    }, 5000);
  } else {
    setupStripeProducts();
  }
} else {
  console.error('❌ No Stripe secret key found. Please run ./setup-stripe-env.sh first.');
  process.exit(1);
} 