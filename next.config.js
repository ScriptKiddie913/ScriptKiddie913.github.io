/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.credly.com', 'www.opswat.com', 'upload.wikimedia.org', 'brm-workforce.oracle.com'],
    unoptimized: true,
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  }
}

module.exports = nextConfig