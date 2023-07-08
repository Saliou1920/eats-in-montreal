/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');
const nextConfig = withAxiom({
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
});

module.exports = nextConfig;
