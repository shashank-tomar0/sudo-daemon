'use client'

import { motion } from 'framer-motion'

export default function ConstructionBanner() {
  const repeatingText = Array(15).fill("UNDER CONSTRUCTION • WORK IN PROGRESS").join(" • ")

  return (
    <div className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden py-24 select-none">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Center Warning Shield */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="z-10 bg-white dark:bg-[#0c0c0c] border-2 border-yellow-500 p-8 max-w-sm text-center shadow-[8px_8px_0px_0px_rgba(234,179,8,0.15)] dark:shadow-[8px_8px_0px_0px_rgba(234,179,8,0.05)] rounded-sm"
      >
        <div className="w-14 h-14 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl animate-pulse">
          ⚠️
        </div>
        <h3 className="text-xl font-black uppercase text-black dark:text-white tracking-wider mb-2">
          RESTRICTED AREA
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
          This layout is currently under active build pipelines. New code blocks and integrations are arriving shortly.
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
