'use client'

import OnekoCat from '@/components/OnekoCat'
import MinimalNavigation from '@/components/MinimalNavigation'
import { BlogPost } from '@/types/blog'
import { FadeInUp } from '@/components/ui/PageTransitions'
import ConstructionBanner from '@/components/ConstructionBanner'

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
            <ConstructionBanner />
          </div>
        </div>
      </div>
    </div>
  )
}