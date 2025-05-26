import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/hooks/use-language"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Digital Base - Azərbaycanda Aparıcı Rəqəmsal Agentlik",
    template: "%s | Digital Base",
  },
  description:
    "Digital Base - Azərbaycanda aparıcı rəqəmsal agentlik. Veb sayt hazırlanması, mobil tətbiqlər, UI/UX dizayn, e-ticarət həlləri və rəqəmsal marketinq xidmətləri.",
  keywords: [
    "veb sayt hazırlanması",
    "mobil tətbiq",
    "rəqəmsal marketinq",
    "UI/UX dizayn",
    "e-ticarət",
    "Azərbaycan",
    "Bakı",
    "digital agency",
  ],
  authors: [{ name: "Digital Base Team" }],
  creator: "Digital Base",
  publisher: "Digital Base",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "https://digitalbase.az",
    siteName: "Digital Base",
    title: "Digital Base - Azərbaycanda Aparıcı Rəqəmsal Agentlik",
    description: "Veb sayt hazırlanması, mobil tətbiqlər, UI/UX dizayn və rəqəmsal marketinq xidmətləri.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Base - Rəqəmsal Agentlik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Base - Azərbaycanda Aparıcı Rəqəmsal Agentlik",
    description: "Veb sayt hazırlanması, mobil tətbiqlər, UI/UX dizayn və rəqəmsal marketinq xidmətləri.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://digitalbase.az" />
        <meta name="geo.region" content="AZ" />
        <meta name="geo.placename" content="Baku" />
        <meta name="geo.position" content="40.4093;49.8671" />
        <meta name="ICBM" content="40.4093, 49.8671" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <LanguageProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </LanguageProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
