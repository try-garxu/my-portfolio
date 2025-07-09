import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Microservices Architecture: Best Practices and Pitfalls',
    excerpt: 'Learn the essential patterns and anti-patterns when building microservices with Spring Boot and Kubernetes.',
    content: 'Microservices architecture has become increasingly popular for building scalable, maintainable applications...',
    publishDate: '2024-03-15',
    tags: ['Microservices', 'Spring Boot', 'Kubernetes', 'Architecture'],
    readTime: 8
  },
  {
    id: '2',
    title: 'Optimizing React Performance in Large Applications',
    excerpt: 'Discover advanced techniques for improving React application performance and user experience.',
    content: 'As React applications grow in complexity, performance optimization becomes crucial...',
    publishDate: '2024-02-28',
    tags: ['React', 'Performance', 'JavaScript', 'Frontend'],
    readTime: 6
  },
  {
    id: '3',
    title: 'Cloud-Native Development with AWS and Docker',
    excerpt: 'A comprehensive guide to building and deploying cloud-native applications using modern DevOps practices.',
    content: 'Cloud-native development represents a fundamental shift in how we build and deploy applications...',
    publishDate: '2024-02-10',
    tags: ['AWS', 'Docker', 'Cloud', 'DevOps'],
    readTime: 10
  },
  {
    id: '4',
    title: 'TypeScript Best Practices for Enterprise Applications',
    excerpt: 'Essential TypeScript patterns and practices for building robust, maintainable enterprise software.',
    content: 'TypeScript has revolutionized JavaScript development by adding static typing...',
    publishDate: '2024-01-22',
    tags: ['TypeScript', 'JavaScript', 'Enterprise', 'Best Practices'],
    readTime: 7
  }
];
