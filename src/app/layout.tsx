import type { Metadata } from "next";
import {Inter_Tight, Instrument_Serif} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"
import BackgroundMusic from "@/components/BackgroundMusicWrapper"
import { portfolioConfig } from "@/config/portfolio"

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.socials.github),
  title: portfolioConfig.name,
  description: `Personal portfolio of ${portfolioConfig.name} - ${portfolioConfig.title}.`,
  openGraph: {
    url: portfolioConfig.socials.github,
    siteName: `${portfolioConfig.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: `${portfolioConfig.name} - Portfolio`
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${instrumentSerif.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="relative z-10">
              {children}
            </div>
            <ScrollToTop />
            <BackgroundMusic />
        </ThemeProvider>
      </body>
    </html>
  );
}
