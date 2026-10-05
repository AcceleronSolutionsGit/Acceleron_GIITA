// next.config.ts
import type { NextConfig } from 'next';

// 🔐 Security headers
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    // ⚠️ Adjust CSP if you use external scripts/fonts/analytics/APIs.
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: blob:;",
      "font-src 'self' data:;",
      "connect-src 'self';",
      "frame-src 'self' https://*.openstreetmap.org https://*.google.com https://*.google.co.in;",
      "frame-ancestors 'self';",
      "base-uri 'self';",
      "form-action 'self';",
    ].join(' '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false, // Hide X-Powered-By

  images: {
    // No external domains — safe defaults.
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Strip console logs in prod
  },
};

export default nextConfig;