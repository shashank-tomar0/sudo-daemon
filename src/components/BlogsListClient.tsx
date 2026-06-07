'use client'

import { BlogCard } from '@/components/BlogCard'
import OnekoCat from '@/components/OnekoCat'
import MinimalNavigation from '@/components/MinimalNavigation'
import { BlogPost } from '@/types/blog'
import { FadeInUp } from '@/components/ui/PageTransitions'

interface BlogsListClientProps {
  blogs: BlogPost[]
}

export default function BlogsListClient({ blogs }: BlogsListClientProps) {

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <MinimalNavigation />
      <OnekoCat />

      {/* Page Content - Swiss Design Layout */}
      <div className="w-full relative pt-16 sm:pt-16">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">

            {/* Header - Minimal Typography */}
            <div className="mb-16 sm:mb-20">
              <FadeInUp delay={0.2}>
                <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-instrument-serif)] font-medium mb-4 text-black dark:text-white tracking-tight">
                  Blogs
                </h1>
              </FadeInUp>
              <FadeInUp delay={0.4}>
                <p className="text-lg text-neutral-800 dark:text-neutral-400 tracking-wide">
                  Technical writings and thoughts
                </p>
              </FadeInUp>
            </div>

            {/* Blog List - Work in Progress */}
            <FadeInUp delay={0.5}>
              <div className="text-center py-16 sm:py-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-950 border border-yellow-400 dark:border-yellow-600 rounded-full mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
                  <span className="text-xs font-bold text-yellow-800 dark:text-yellow-200 uppercase tracking-widest">Work in Progress</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-4">
                  Writing Hub Under Construction
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium max-w-lg mx-auto">
                  Technical writings, research notes, and architectural deep-dives are currently in draft. We are preparing the publication pipeline and will release the first articles soon.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  )
}