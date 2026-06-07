'use client'

import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
// import OpenSourceContributionsCard from './OpenSourceContributionsCard'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'
import { portfolioConfig } from '@/config/portfolio'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 font-['Inter'] relative bg-white dark:bg-black">
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl">
          {/* Banner Section */}
          <Reveal delay={0.1} duration={0.8} amount={0.2}>
            <BannerSection
              bannerImage="/psudokit_banner.jpg"
              quote="Build • Ship • Learn • Repeat"
            />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2} duration={0.7} amount={0.3}>
            <ProfileHeader
              name={portfolioConfig.name}
              age={portfolioConfig.age}
              title={portfolioConfig.title}
              profileImage={`${portfolioConfig.socials.github}.png`}
              socialLinks={{
                twitter: portfolioConfig.socials.twitter,
                github: portfolioConfig.socials.github,
                linkedin: portfolioConfig.socials.linkedin,
                resume: "/cv",
              }}
            />
          </Reveal>

          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <ContentSection
                  subtitle={portfolioConfig.title}
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={20} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <ContentSection className="pb-8 pt-6">
                  {portfolioConfig.bio.map((paragraph, idx) => (
                    <ContentParagraph key={idx} className={idx === 0 ? "mt-6 mb-6" : "mb-4"}>
                      {paragraph}
                    </ContentParagraph>
                  ))}
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Experience Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 text-neutral-500 dark:text-neutral-400 mt-8">Professional Experience</h2>
                  <ExperienceContent />
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* Technical Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 py-4">
                  <h2 className="text-lg sm:text-xl mb-4 text-neutral-500 dark:text-neutral-400 mt-8">Technical Contributions</h2>
                  <div className="space-y-6 dark:text-white/70 text-black/70 pb-8">
                    {portfolioConfig.contributions.map((contribution, idx) => (
                      <ContentParagraph key={idx}>
                        {contribution}
                      </ContentParagraph>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* GitHub Contributions */}
              <Reveal delay={0.1} duration={0.6} amount={0.2}>
                <div className="sm:px-12 px-6 mt-4">
                  <h2 className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                    GitHub Contributions <span className="opacity-40">●</span> @{portfolioConfig.name}
                  </h2>
                  <div className="mb-6">
                    <ContributionsDisplay
                      username={portfolioConfig.githubUsername}
                      variant="compact"
                      className="w-full"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Tech Stack Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="sm:px-12 px-6 mt-6 mb-6">
                  <TechStackMarquee className="w-full" />
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Reachout Section */}
              <Reveal delay={0.1} duration={0.6} amount={0.3}>
                <div className="mt-6">
                  <Reachout
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.05} duration={0.4} y={15} amount={0.8}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* call to action*/}
              <Reveal delay={0.1} duration={0.6} amount={0.4}>
                <CallToAction />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
