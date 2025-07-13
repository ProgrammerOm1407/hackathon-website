/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Next.js dev tools menu
  devIndicators: false,
  // Disable React Strict Mode for cleaner development
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
