/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/open-react-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/open-react-template/' : '',
}

module.exports = nextConfig
