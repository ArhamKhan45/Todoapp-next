/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  api: {
    bodyParser: true,
  },
};

module.exports = nextConfig;
