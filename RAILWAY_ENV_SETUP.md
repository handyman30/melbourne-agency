# Railway Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Railway project settings:

### 1. Stripe Configuration (Required)
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

For production, use your live keys:
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_live_YOUR_KEY_HERE
```

### 2. Optional Configuration
```bash
NEXT_PUBLIC_APP_URL=https://your-railway-app.railway.app
```

## How to Add in Railway

1. Go to your Railway project dashboard
2. Click on your service (melbourne-agency)
3. Go to the "Variables" tab
4. Click "New Variable" or "Raw Editor"
5. Add each environment variable

## Important Notes

- **NEXT_PUBLIC_** prefix is required for client-side variables
- Railway automatically rebuilds when you update environment variables
- Never commit actual API keys to your repository
- Use test keys for development, live keys for production

## Verifying Your Setup

After adding the variables and deployment completes:
1. Visit `/signup` and select a paid plan
2. Try entering a test card (4242 4242 4242 4242)
3. Check Railway logs for any errors

If you see "Payment system not configured" error, double-check that STRIPE_SECRET_KEY is set correctly. 