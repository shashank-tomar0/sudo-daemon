import { Project } from '@/types/project'
import { portfolioConfig } from '@/config/portfolio'

export const projects: Project[] = portfolioConfig.projects;

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
