import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { siteConfig } from '@config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  manifest: siteConfig.manifest,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-[1000vh] bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey={siteConfig.storageThemeKey}
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
