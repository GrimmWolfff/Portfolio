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
  }
}

module.exports = nextConfig
