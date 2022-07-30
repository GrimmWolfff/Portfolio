/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.imageio.forbes.com','tailwindui.com']
  },
  theme: {
    extend: {
      backgroundImage: {
        'HEADER_IMAGE': "url('HEADER.png')"
      }
    }
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET
  },
  api: {
    bodyParser: false
  }
}

module.exports = nextConfig