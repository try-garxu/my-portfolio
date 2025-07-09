import { Code, Server, Cloud, Database, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const highlights = [
  {
    icon: Code,
    title: 'Frontend Excellence',
    description: 'Expert in React, Angular, and TypeScript with a focus on modern UI/UX design and performance optimization.'
  },
  {
    icon: Server,
    title: 'Backend Mastery',
    description: 'Deep expertise in Java, Spring Framework, and microservices architecture for scalable enterprise solutions.'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Experienced with AWS and Azure cloud platforms, containerization with Docker and Kubernetes orchestration.'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Proficient in both SQL and NoSQL databases, with expertise in PostgreSQL, MongoDB, and Redis.'
  },
  {
    icon: Zap,
    title: 'DevOps & CI/CD',
    description: 'Skilled in automation, infrastructure as code, and implementing robust deployment pipelines.'
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Experienced in mentoring developers, conducting code reviews, and leading cross-functional teams.'
  }
];

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate Full Stack Java Developer with 6+ years of experience building enterprise-scale applications.
              I specialize in creating robust, scalable solutions that bridge the gap between complex business requirements
              and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey in software development began with a fascination for solving complex problems through code.
                Over the years, I've evolved from a curious junior developer to a seasoned professional who thrives
                on architecting scalable solutions and mentoring the next generation of developers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying current with emerging technologies.
                My experience spans from building responsive frontends to designing robust backend systems,
                always with a focus on delivering exceptional user experiences and business value.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Java Expert', 'Cloud Architect', 'Team Leader', 'Full Stack', 'DevOps'].map((badge) => (
                  <Badge key={badge} variant="secondary" className="px-3 py-1">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">TG</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{highlight.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
