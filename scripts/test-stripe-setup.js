#!/usr/bin/env node

const Stripe = require('stripe');
require('dotenv').config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function testStripeSetup() {
  console.log('🧪 Testing Stripe setup...\n');

  try {
    // Test 1: List products
    console.log('📦 Fetching products...');
    const products = await stripe.products.list({ limit: 10 });
    console.log(`Found ${products.data.length} products:\n`);
    
    products.data.forEach(product => {
      console.log(`- ${product.name} (${product.id})`);
    });

    // Test 2: List prices
    console.log('\n💰 Fetching prices...');
    const prices = await stripe.prices.list({ limit: 10 });
    console.log(`Found ${prices.data.length} prices:\n`);
    
    prices.data.forEach(price => {
      const amount = price.unit_amount / 100;
      const interval = price.recurring?.interval || 'one-time';
      console.log(`- ${price.nickname || price.id}: $${amount} ${price.currency.toUpperCase()} / ${interval}`);
    });

    console.log('\n✅ Stripe setup verified successfully!');
    console.log('\n🚀 You can now test the subscription flow at: http://localhost:3003/signup');
    console.log('💳 Use test card: 4242 4242 4242 4242\n');

  } catch (error) {
    console.error('❌ Error testing Stripe setup:', error.message);
    process.exit(1);
  }
}

testStripeSetup(); 