import { Metadata } from 'next'
import { portfolioConfig } from '@/config/portfolio'

export const metadata: Metadata = {
  title: `Blog | ${portfolioConfig.name}`,
  description: `Technical writings and thoughts by ${portfolioConfig.name}`,
  openGraph: {
    title: `Blog | ${portfolioConfig.name}`,
    description: `Technical writings and thoughts by ${portfolioConfig.name}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${portfolioConfig.name}`,
    description: `Technical writings and thoughts by ${portfolioConfig.name}`,
  }
} 