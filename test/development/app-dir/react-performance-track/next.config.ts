import { NextConfig } from 'next'

const partialPrefetching = !!process.env.__NEXT_PARTIAL_PREFETCHING

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching,
  experimental: {
    // Future but produces bad results.
    reactDebugChannel: false,
  },
}

export default nextConfig
