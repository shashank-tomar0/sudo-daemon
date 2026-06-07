'use client';
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { Tooltip } from "./ui/tooltip-card";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";

interface ProfileHeaderProps {
  name?: string
  age?: string
  title?: string
  profileImage?: string
  socialLinks?: {
    twitter?: string
    resume?: string
    github?: string
    linkedin?: string
  }
}

export default function ProfileHeader({
  name = portfolioConfig.name,
  age = portfolioConfig.age,
  title = portfolioConfig.title,
  profileImage = portfolioConfig.avatar,
  socialLinks = {
    twitter: portfolioConfig.socials.twitter,
    github: portfolioConfig.socials.github,
    linkedin: portfolioConfig.socials.linkedin,
    resume: "/cv",
  }
}: ProfileHeaderProps) {

  return (
    <div className="flex-col -mt-10">
      <div
        className="w-28 h-28 mb-4 sm:ml-8 ml-4 relative z-10 rounded-full overflow-hidden bg-cover bg-center"
        role="img"
        aria-label={name}
        style={{ backgroundImage: `url("${profileImage}")` }}
      />
      <div className="text-left sm:flex sm:justify-between sm:items-center w-full sm:px-8 px-4 flex-col sm:flex-row">
        <div>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-2
          xl sm:text-5xl tracking-tighter font-black mb-2 uppercase hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-neutral-500 hover:to-neutral-900 dark:hover:from-primary dark:hover:to-white transition-all duration-300 cursor-default">
            {name}
          </h1>
          <p className="opacity-40 text-[14px]">
            {age} • {title}
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-3 sm:mt-0 px-0">
          {socialLinks.github && (
            <Tooltip
              preferredPosition="below"
              content={
                <div className="flex flex-col gap-0.5 p-1 select-none">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs">GitHub Profile</span>
                  <span className="text-[11px] text-neutral-500">@{portfolioConfig.githubUsername}</span>
                </div>
              }>
              <a
                className="neo-button flex items-center justify-center w-10 h-10 bg-white dark:bg-black text-black dark:text-primary rounded-none hover:bg-neutral-200 dark:hover:bg-neutral-900"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </Tooltip>
          )}
          {socialLinks.twitter && (
            <Tooltip
              preferredPosition="below"
              content={
                <div className="flex flex-col gap-0.5 p-1 select-none">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs">X / Twitter</span>
                  <span className="text-[11px] text-neutral-500">@shashank1tomar</span>
                </div>
              }>
              <a
                className="neo-button flex items-center justify-center w-10 h-10 bg-white dark:bg-black text-black dark:text-primary rounded-none hover:bg-neutral-200 dark:hover:bg-neutral-900"
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </a>
            </Tooltip>
          )}
          {socialLinks.resume && (
            <Tooltip
              preferredPosition="below"
              content={
                <div className="flex flex-col gap-0.5 p-1 select-none">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs">Resume / CV</span>
                  <span className="text-[11px] text-neutral-500">View on Google Drive</span>
                </div>
              }>
              <a
                className="neo-button flex items-center justify-center w-10 h-10 bg-white dark:bg-black text-black dark:text-primary rounded-none hover:bg-neutral-200 dark:hover:bg-neutral-900"
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPaperclip size={20} />
              </a>
            </Tooltip>
          )}

          {socialLinks.linkedin && (
            <Tooltip
              preferredPosition="below"
              content={
                <div className="flex flex-col gap-0.5 p-1 select-none">
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs">LinkedIn Profile</span>
                  <span className="text-[11px] text-neutral-500">@shashank1tomar</span>
                </div>
              }>
              <a
                className="neo-button flex items-center justify-center w-10 h-10 bg-white dark:bg-black text-black dark:text-primary rounded-none hover:bg-neutral-200 dark:hover:bg-neutral-900"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}
