import type { NextConfig } from "next";
import WebpackObfuscator from "webpack-obfuscator";

const nextConfig: NextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new WebpackObfuscator(
          {
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
            compact: true,
          },
          ['*/_next/static/chunks/framework*.js', '*/_next/static/chunks/main*.js']
        )
      );
    }
    return config;
  },
};

export default nextConfig;
