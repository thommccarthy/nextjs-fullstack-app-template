/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  domains: [`i.pravatar.cc`],
  images: {
    domains: [`i.pravatar.cc`],
  },
};

module.exports = nextConfig;
