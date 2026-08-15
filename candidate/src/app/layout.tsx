import type { Metadata } from "next"
import type { ReactNode } from "react"

import { siteContent } from "../content/siteContent"
import "./globals.css"

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  icons: {
    icon: siteContent.seo.icon,
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
