'use client'

import { motion } from 'framer-motion'
import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

export default function ConstructionBanner() {
  const repeatingText = Array(15).fill("UNDER CONSTRUCTION • WORK IN PROGRESS").join(" • ")

  return (
    <div className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden py-24 select-none">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Center Warning Label (Neo-brutalist Sticker) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`z-30 bg-white dark:bg-black border-2 border-black dark:border-white p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] max-w-xs sm:max-w-sm rounded-none ${jetbrainsMono.className}`}
      >
        <p className="text-xs sm:text-sm font-extrabold text-black dark:text-white uppercase tracking-[0.2em] leading-relaxed">
          work in progress
        </p>
        <div className="h-[2px] w-10 bg-black dark:bg-white mx-auto my-3" />
        <p className="text-[10px] sm:text-xs font-semibold text-neutral-600 dark:text-neutral-400 tracking-[0.15em] uppercase">
          will update shortly
        </p>
      </motion.div>

      {/* Construction Hazard Tape 1: Slanted Left */}
      <div className="absolute w-[160%] h-12 bg-yellow-500 border-y-4 border-black flex items-center overflow-hidden -rotate-6 shadow-[0_10px_20px_rgba(0,0,0,0.15)] z-20 pointer-events-none origin-center">
        <motion.div
          animate={{ x: [0, -800] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="whitespace-nowrap text-black font-black uppercase tracking-widest text-xs sm:text-sm"
        >
          {repeatingText}
        </motion.div>
      </div>

      {/* Construction Hazard Tape 2: Slanted Right */}
      <div className="absolute w-[160%] h-12 bg-yellow-500 border-y-4 border-black flex items-center overflow-hidden rotate-6 shadow-[0_10px_20px_rgba(0,0,0,0.15)] z-20 pointer-events-none origin-center">
        <motion.div
          animate={{ x: [-800, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="whitespace-nowrap text-black font-black uppercase tracking-widest text-xs sm:text-sm"
        >
          {repeatingText}
        </motion.div>
      </div>
    </div>
  )
}
