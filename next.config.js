/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'www.notion.so',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      's3.us-west-2.amazonaws.com',
      's3.amazonaws.com'
    ],
  },
}

module.exports = nextConfig
