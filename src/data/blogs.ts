import { BlogPost } from '@/types/blog'
import { portfolioConfig } from '@/config/portfolio'

export const blogs: BlogPost[] = portfolioConfig.blogs;

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
