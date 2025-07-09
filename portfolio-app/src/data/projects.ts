import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise E-commerce Platform',
    description: 'Full-stack e-commerce solution built with Spring Boot and React',
    longDescription: 'A comprehensive e-commerce platform featuring microservices architecture, real-time inventory management, payment processing, and advanced analytics. Built with Spring Boot backend, React frontend, and deployed on AWS.',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/try-garxu/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.example.com',
    featured: true
  },
  {
    id: '2',
    title: 'Cloud-Native Microservices',
    description: 'Scalable microservices architecture with Kubernetes orchestration',
    longDescription: 'A cloud-native application demonstrating microservices patterns, service mesh, and container orchestration. Features automated CI/CD, monitoring, and scaling capabilities.',
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'Azure', 'MongoDB'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/try-garxu/microservices-demo',
    featured: true
  },
  {
    id: '3',
    title: 'Real-time Analytics Dashboard',
    description: 'Angular-based dashboard with real-time data visualization',
    longDescription: 'Interactive dashboard providing real-time business intelligence with advanced charting, filtering, and export capabilities. Built with Angular and integrated with multiple data sources.',
    technologies: ['Angular', 'TypeScript', 'D3.js', 'Spring Boot', 'WebSocket', 'Redis'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/try-garxu/analytics-dashboard',
    liveUrl: 'https://analytics-demo.example.com',
    featured: true
  },
  {
    id: '4',
    title: 'DevOps Automation Pipeline',
    description: 'Complete CI/CD pipeline with infrastructure as code',
    longDescription: 'Automated deployment pipeline featuring infrastructure as code, automated testing, security scanning, and multi-environment deployments using modern DevOps practices.',
    technologies: ['Python', 'Terraform', 'Jenkins', 'Docker', 'AWS', 'Ansible'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/try-garxu/devops-pipeline',
    featured: false
  },
  {
    id: '5',
    title: 'Mobile-First Progressive Web App',
    description: 'PWA built with React and optimized for mobile performance',
    longDescription: 'High-performance progressive web application with offline capabilities, push notifications, and native-like user experience across all devices.',
    technologies: ['React', 'TypeScript', 'PWA', 'Service Workers', 'IndexedDB'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/try-garxu/pwa-mobile',
    liveUrl: 'https://pwa-demo.example.com',
    featured: false
  },
  {
    id: '6',
    title: 'AI-Powered Code Review Tool',
    description: 'Machine learning tool for automated code quality analysis',
    longDescription: 'Intelligent code review system using machine learning to identify potential issues, suggest improvements, and maintain code quality standards across development teams.',
    technologies: ['Python', 'TensorFlow', 'Java', 'Spring Boot', 'React', 'PostgreSQL'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/try-garxu/ai-code-review',
    featured: false
  }
];
