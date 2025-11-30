"use client"

import { WagmiProvider, createConfig, http } from "wagmi"
import { localhost } from "wagmi/chains"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RainbowKitProvider, getDefaultConfig, midnightTheme } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"

const CYBER_VOID = {
  accent: "#6d75ff", // --accent
  accentForeground: "rgba(245, 247, 255, 0.94)", // --text-primary
  borderDefault: "rgba(130, 150, 255, 0.35)", // --border-default
  borderSoft: "rgba(130, 150, 255, 0.18)", // --border-soft
  accentWeak: "rgba(109, 117, 255, 0.24)", // --accent-weak
}

const config = getDefaultConfig({
  appName: "dMrkt",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "YOUR_PROJECT_ID",
  chains: [localhost],
  ssr: true,
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={midnightTheme({
            accentColor: CYBER_VOID.accent,
            accentColorForeground: CYBER_VOID.accentForeground,
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
