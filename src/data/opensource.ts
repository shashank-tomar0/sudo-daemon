import { portfolioConfig } from '@/config/portfolio'

export interface OpenSourceItem {
  id: string
  title: string
  description: string
  repo: string
  repoUrl: string
  type: 'own' | 'contribution'
  status: 'merged' | 'open' | 'active' | 'closed'
  stars?: number
  tags: string[]
  url: string
  date: string
}

export const openSourceItems: OpenSourceItem[] = portfolioConfig.projects.map(proj => ({
  id: proj.id,
  title: proj.title,
  description: proj.description,
  repo: `${portfolioConfig.githubUsername}/${proj.id}`,
  repoUrl: proj.githubLink || `https://github.com/${portfolioConfig.githubUsername}/${proj.id}`,
  type: 'own' as const,
  status: 'active' as const,
  tags: proj.tags,
  url: proj.githubLink || `https://github.com/${portfolioConfig.githubUsername}/${proj.id}`,
  date: '2026'
}));
