// middleware.ts
import { paymentMiddleware } from 'aptos-x402'

/**
 * Aptos x402 Payment Middleware
 * 
 * This middleware protects your API routes by requiring payment before access.
 * 
 * Setup Instructions:
 * 1. Add PAYMENT_RECIPIENT_ADDRESS to your .env.local file
 * 2. Add FACILITATOR_URL to your .env.local file (defaults to https://aptos-x402.vercel.app/api/facilitator)
 * 3. Customize the routes object below to protect your API endpoints
 * 4. Update the matcher array to match your protected route patterns
 */

export const middleware = paymentMiddleware(
  // Your Aptos wallet address (receives payments)
  // TODO: Set PAYMENT_RECIPIENT_ADDRESS in .env.local to your Aptos address
  process.env.PAYMENT_RECIPIENT_ADDRESS!,
  {
    // ========================================
    // PROTECTED ROUTES CONFIGURATION
    // ========================================
    // TODO: Customize the routes below to protect your API endpoints
    // Example route is provided - modify or add more as needed
    
    // Example: Protect the existing /api/weather route
    '/api/weather': {
      price: '1000000', // TODO: Set price in octas (1 APT = 100,000,000 octas, so this is 0.01 APT)
      network: 'aptos-testnet', // TODO: Change to 'aptos-mainnet' for production
      config: {
        description: 'Weather API access', // Optional: Description for the payment
      }
    },
    
    // TODO: Add more routes to protect (uncomment and customize as needed)
    // '[YOUR_API_ROUTE]': {
    //   price: '[PRICE_IN_OCTAS]', // e.g., '1000000' for 0.01 APT
    //   network: 'aptos-testnet', // or 'aptos-mainnet'
    //   config: {
    //     description: 'API endpoint description',
    //   }
    // },
  },
  {
    // Facilitator configuration for payment verification and settlement
    url: process.env.FACILITATOR_URL || 'https://aptos-x402.vercel.app/api/facilitator',
  }
)

// ========================================
// MIDDLEWARE MATCHER CONFIGURATION
// ========================================
// Configure which routes the middleware should run on
// TODO: Update the matcher patterns to match your protected routes
export const config = {
  matcher: [
    '/api/weather', // TODO: Add or modify patterns to match your API routes
    // '[YOUR_API_ROUTE_PATTERN]', // Example: '/api/premium/:path*'
    // '/api/protected/:path*',
  ],
}

