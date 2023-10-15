import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { NextUIProvider } from "@/components/providers/next-ui-provider"
import "./globals.css"
import { Nav as Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = siteConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="px-4 py-8 max-w-5xl mx-auto min-w-[300px] flex-1 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  )
}
