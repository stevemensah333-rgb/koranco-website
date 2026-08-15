import type { Metadata } from "next"
import type { ReactNode } from "react"

import { siteContent } from "../content/siteContent"
import "./globals.css"

const siteUrl = "https://koranco-website.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    siteName: siteContent.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  icons: {
    icon: [
      { url: siteContent.seo.icon, type: "image/svg+xml" },
      { url: siteContent.seo.icon32, sizes: "32x32", type: "image/png" },
      { url: siteContent.seo.icon16, sizes: "16x16", type: "image/png" },
    ],
    apple: siteContent.seo.appleTouchIcon,
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
