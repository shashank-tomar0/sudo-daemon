'use client'

import OnekoCat from '@/components/OnekoCat'
import MinimalNavigation from '@/components/MinimalNavigation'
import { MasonryGrid } from '@/components/MasonryGrid'
import { Project } from '@/types/project'
import { motion } from 'framer-motion'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {

  return (
      <div className="min-h-screen w-full bg-white dark:bg-black">
        <MinimalNavigation />
        <OnekoCat />
          
          {/* Page Header */}
          <div className="w-full relative bg-neutral-50/30 dark:bg-neutral-900/30 border-b border-neutral-200 dark:border-neutral-700 pt-20 sm:pt-24">
            <div className="px-6 sm:px-8 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-instrument-serif)] font-medium mb-6 sm:mb-8 text-center leading-tight">proof of work</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                >
                  <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed">
                    A showcase of my work and side projects.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Section Transition */}
          <div className="w-full h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-neutral-50/30 dark:from-neutral-900/30 to-neutral-100 dark:to-[#161616]"></div>

          {/* Work in Progress Banner */}
          <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="neo-card p-8 sm:p-12 bg-white dark:bg-black border-2 border-black dark:border-white inline-block max-w-lg"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-950 border border-yellow-400 dark:border-yellow-600 rounded-full mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200 uppercase tracking-widest">Work in Progress</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-4">
                Projects Showcase Coming Soon
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                We are currently curating and documenting our proof-of-work project showcase. Stay tuned — detailed case studies and repositories will be added here shortly.
              </p>
            </motion.div>
          </div>
        </div>
  )
}
