/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // vypne App Router, pokud náhodou Next zkouší použít složku /app
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = nextConfig;
