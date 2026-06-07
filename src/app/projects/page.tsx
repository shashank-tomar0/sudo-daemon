import { projects } from '@/data/projects'
import ProjectsListClient from '@/components/ProjectsListClient'
import { portfolioConfig } from '@/config/portfolio'

export const metadata = {
  title: `Projects | ${portfolioConfig.name}`,
  description: `Showcase of projects and work by ${portfolioConfig.name}`,
}

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />
}
