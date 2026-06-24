import type { NextConfig } from 'next'

const appShellsEnabled = !!process.env.NEXT_TEST_ENABLE_APP_SHELLS

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: appShellsEnabled,
  productionBrowserSourceMaps: true,
  experimental: {
    prerenderEarlyExit: false,
    appShells: appShellsEnabled,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
