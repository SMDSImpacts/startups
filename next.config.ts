import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
            {
                protocol: 'https',
                hostname: 'https://res.cloudinary.com/smdsimages',
            }
        ]
    },
     experimental: {
    ppr: "incremental",
  },
  devIndicators: {    
    position: "bottom-right",    
  },
};

export default nextConfig;
