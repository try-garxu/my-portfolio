import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    description: [
      'Lead development of enterprise-scale applications using Java Spring Boot and React',
      'Architect and implement microservices solutions deployed on AWS and Azure',
      'Mentor junior developers and conduct code reviews',
      'Collaborate with cross-functional teams to deliver high-quality software solutions'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led migration of monolithic application to microservices architecture',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ]
  },
  {
    id: '2',
    company: 'InnovateTech Inc.',
    position: 'Full Stack Java Developer',
    duration: '2020 - 2022',
    description: [
      'Developed and maintained web applications using Java, Spring Framework, and Angular',
      'Implemented RESTful APIs and integrated with third-party services',
      'Optimized database queries and improved application performance',
      'Participated in agile development processes and sprint planning'
    ],
    technologies: ['Java', 'Spring Framework', 'Angular', 'PostgreSQL', 'Docker', 'Jenkins'],
    achievements: [
      'Delivered 15+ successful projects on time and within budget',
      'Improved code coverage from 60% to 85% through comprehensive testing',
      'Reduced bug reports by 30% through improved code quality practices'
    ]
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Junior Java Developer',
    duration: '2018 - 2020',
    description: [
      'Built web applications using Java, Spring Boot, and JavaScript',
      'Collaborated with designers to implement responsive user interfaces',
      'Participated in code reviews and followed best practices',
      'Learned and applied modern development methodologies'
    ],
    technologies: ['Java', 'Spring Boot', 'JavaScript', 'MySQL', 'Git', 'Maven'],
    achievements: [
      'Successfully completed 20+ feature implementations',
      'Contributed to 50% reduction in customer-reported issues',
      'Earned promotion to Full Stack Developer within 18 months'
    ]
  }
];
