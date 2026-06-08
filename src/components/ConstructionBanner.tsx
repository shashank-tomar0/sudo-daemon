'use client'

import { motion } from 'framer-motion'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
})

export default function ConstructionBanner() {
  return (
    <div className={`w-full flex flex-col items-center justify-center py-32 text-center select-none ${jetbrainsMono.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-2"
      >
        <p className="text-sm font-light text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.25em] leading-relaxed">
          work in progress
        </p>
        <div className="h-[1px] w-8 bg-neutral-200 dark:bg-neutral-800 mx-auto my-3" />
        <p className="text-xs font-light text-neutral-400 dark:text-neutral-500 tracking-[0.2em]">
          will update shortly
        </p>
      </motion.div>
    </div>
  )
}
