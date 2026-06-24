import { NextConfig } from 'next'

const appShellsEnabled = !!process.env.NEXT_TEST_ENABLE_APP_SHELLS

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: appShellsEnabled,
  experimental: {
    appShells: appShellsEnabled,
    // Future but produces bad results.
    reactDebugChannel: false,
  },
}

export default nextConfig
