# Stripe Subscription Setup

## Overview
RankMelbourne uses Stripe for handling subscription payments with a 3-day free trial for paid plans.

## Environment Variables
Create a `.env.local` file by copying from `env.example`:

```bash
cp env.example .env.local
```

### Test Keys (Development)
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
```

### Live Keys (Production)
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_LIVE_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_SECRET_KEY_HERE
```

## Stripe Dashboard Setup

### 1. Create Products and Prices
You need to create the following products in your Stripe Dashboard:

#### Growth Plan
- **Product Name**: RankMelbourne Growth
- **Monthly Price**: $19/month
- **Annual Price**: $15/month (billed annually)

#### Pro Plan
- **Product Name**: RankMelbourne Pro
- **Monthly Price**: $49/month
- **Annual Price**: $39/month (billed annually)

### 2. Update Price IDs
After creating products in Stripe, update the price IDs in:
`/app/api/stripe/create-subscription/route.ts`

```typescript
const PRICE_IDS = {
  growth_monthly: 'price_123...', // Replace with actual price ID
  growth_annual: 'price_456...',  // Replace with actual price ID
  pro_monthly: 'price_789...',    // Replace with actual price ID
  pro_annual: 'price_012...',     // Replace with actual price ID
}
```

### 3. Configure Webhooks
For production, you'll need to set up Stripe webhooks to handle:
- Subscription created
- Subscription updated
- Subscription cancelled
- Payment failed

Webhook endpoint: `https://yourdomain.com/api/stripe/webhook`

## Testing

### Test Card Numbers
Use these test cards in development:
- **Success**: 4242 4242 4242 4242
- **Requires authentication**: 4000 0025 0000 3155
- **Declined**: 4000 0000 0000 9995

All test cards use:
- Any future expiry date
- Any 3-digit CVC
- Any 5-digit ZIP

## Subscription Flow

1. **User creates account** with email, password, username
2. **If paid plan selected**: User enters card details
3. **3-day free trial starts** automatically
4. **First charge** occurs after trial ends
5. **Monthly/annual billing** continues until cancelled

## API Endpoints

### POST /api/stripe/create-subscription
Creates a new subscription with trial period.

Request body:
```json
{
  "paymentMethodId": "pm_...",
  "priceId": "price_...",
  "email": "user@example.com",
  "name": "John Doe"
}
```

Response:
```json
{
  "subscriptionId": "sub_...",
  "clientSecret": "seti_...",
  "status": "trialing"
}
```

## Next Steps

1. **Database Integration**: Connect user accounts to Stripe customers
2. **Webhook Handler**: Implement webhook endpoint for subscription events
3. **Customer Portal**: Enable users to manage subscriptions
4. **Usage Tracking**: Implement feature limits based on plans
5. **Invoice Management**: Set up invoice emails and receipts 