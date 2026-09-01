import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dkstatics-public.digikala.com',
        port: '',
        pathname: '/superapp-file/**',
        // search: '',
      },
      {
        protocol: 'https',
        hostname: 'dkstatics-public.digikala.com',
        port: '',
        pathname: '/superapp-pillar-theme-item/**',
        // search: '',
      },
    ]
  }
};

export default nextConfig;
