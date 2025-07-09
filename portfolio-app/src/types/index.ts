export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'cloud' | 'tools' | 'database';
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  tags: string[];
  readTime: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
