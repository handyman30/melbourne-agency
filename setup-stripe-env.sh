#!/bin/bash

# Setup Stripe environment variables for RankMelbourne

echo "Setting up Stripe environment variables..."

# Check if .env.local exists
if [ -f .env.local ]; then
    echo ".env.local already exists. Creating backup..."
    cp .env.local .env.local.backup
fi

# Create .env.local with Stripe keys
cat > .env.local << 'EOF'
# Stripe Configuration
# Development - Use test keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE

# Production - Use live keys (commented out for safety)
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_LIVE_PUBLISHABLE_KEY_HERE
# STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_SECRET_KEY_HERE

# Stripe Webhook Secret (will be added when webhooks are configured)
# STRIPE_WEBHOOK_SECRET=whsec_...

# Other Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3003
EOF

echo "✅ .env.local created with test Stripe keys"
echo ""
echo "To use production keys, uncomment the live keys in .env.local"
echo ""
echo "Next steps:"
echo "1. Create products in your Stripe Dashboard"
echo "2. Update price IDs in /app/api/stripe/create-subscription/route.ts"
echo "3. Restart your development server: npm run dev" 