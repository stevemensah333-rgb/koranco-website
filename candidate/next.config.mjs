/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
