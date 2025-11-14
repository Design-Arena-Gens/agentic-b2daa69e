/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["date-fns", "classnames"],
  },
};

module.exports = nextConfig;
