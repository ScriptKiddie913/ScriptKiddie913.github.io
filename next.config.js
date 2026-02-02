/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.credly.com', 
      'www.opswat.com', 
      'upload.wikimedia.org', 
      'brm-workforce.oracle.com'
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig