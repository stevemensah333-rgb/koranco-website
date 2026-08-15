import type { Metadata } from "next"
import type { ReactNode } from "react"

import "./globals.css"

export const metadata: Metadata = {
  title: "Farmio",
  description:
    "Koranco Farms delivers smart, sustainable farming solutions that improve productivity and strengthen agricultural growth.",
  icons: {
    icon: "/assets/images/tUtWFipl6qdHjA2F5yK6HmnJM3U.svg",
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
