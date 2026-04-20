/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/love-miumiu',
  assetPrefix: '/love-miumiu',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
