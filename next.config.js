/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.credly.com', 'www.opswat.com', 'upload.wikimedia.org', 'brm-workforce.oracle.com'],
  },
}

module.exports = nextConfig