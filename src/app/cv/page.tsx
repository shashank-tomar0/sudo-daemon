'use client'

import Link from 'next/link'
import MinimalNavigation from '@/components/MinimalNavigation'
import OnekoCat from '@/components/OnekoCat'
import { FaArrowLeft, FaDownload, FaGithub, FaEnvelope } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio'

const RESUME_DRIVE_LINK = portfolioConfig.socials.resume
const isDriveLink = RESUME_DRIVE_LINK.includes('drive.google.com')
const RESUME_EMBED_LINK = isDriveLink 
  ? RESUME_DRIVE_LINK.replace(/\/view\?usp=sharing$/, '/preview').replace(/\/view$/, '/preview')
  : RESUME_DRIVE_LINK

export default function CVPage() {
  return (
    <div>
      <MinimalNavigation />
      <OnekoCat />
      <div className="pt-16 sm:pt-16">
        <div className="min-h-screen transition-colors duration-300 font-['Inter'] relative bg-white dark:bg-black">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-8 py-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-8"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
              >
                <FaArrowLeft size={12} />
                back
              </Link>
              {isDriveLink && (
                <a
                  href={RESUME_DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button flex items-center gap-2 px-4 py-2 bg-white dark:bg-black text-black dark:text-primary text-sm hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-colors duration-200"
                >
                  <FaDownload size={12} />
                  Download
                </a>
              )}
            </motion.div>

            {/* Resume Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full"
            >
              {isDriveLink ? (
                <div className="neo-button overflow-hidden w-full" style={{ aspectRatio: '8.5/11' }}>
                  <iframe
                    src={RESUME_EMBED_LINK}
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title={`${portfolioConfig.name} - Resume`}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center border-2 border-neutral-200 dark:border-neutral-800 rounded-lg p-8 sm:p-12 text-center bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-sm">
                  <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] font-medium mb-4">
                    Resume is being finalized
                  </h2>
                  <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                    I am currently updating my resume with my latest AI/ML systems and Full Stack contributions. In the meantime, you can explore my open-source work on GitHub or reach out to me directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none">
                    <a
                      href={portfolioConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-button flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-sm font-medium transition-colors duration-200"
                    >
                      <FaGithub size={16} />
                      Inspect GitHub
                    </a>
                    <a
                      href={portfolioConfig.socials.mail}
                      className="neo-button flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 text-sm font-medium transition-colors duration-200"
                    >
                      <FaEnvelope size={16} />
                      Send Email
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
