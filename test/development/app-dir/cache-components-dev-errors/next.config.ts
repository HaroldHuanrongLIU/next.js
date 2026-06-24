import type { NextConfig } from 'next'

const appShellsEnabled = !!process.env.NEXT_TEST_ENABLE_APP_SHELLS

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: appShellsEnabled,
  experimental: {
    instantInsights: {
      validationLevel: 'manual-warning',
    },
    appShells: appShellsEnabled,
  },
}

export default nextConfig
