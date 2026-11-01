/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site is pre-rendered to `out/` for upload to
  // any static host (Cloudflare Pages, Netlify, GitHub Pages).
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,

  // Skip ESLint during production builds — run `npm run lint` separately
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Static export cannot use the Next.js image optimizer
  images: {
    unoptimized: true,
  },

  compress: true,

  // This VM has limited RAM: keep webpack in the main process and use a
  // single CPU so the build does not die in a worker (SIGBUS).
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
  },
};

export default nextConfig;
