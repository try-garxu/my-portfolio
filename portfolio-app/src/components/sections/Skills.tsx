import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { skills } from '@/data/skills';
import * as Icons from 'lucide-react';

const skillCategories = {
  frontend: { title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  backend: { title: 'Backend', color: 'from-green-500 to-emerald-500' },
  cloud: { title: 'Cloud & DevOps', color: 'from-purple-500 to-violet-500' },
  database: { title: 'Databases', color: 'from-orange-500 to-red-500' },
  tools: { title: 'Tools & Technologies', color: 'from-pink-500 to-rose-500' }
};

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? IconComponent : Icons.Code;
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across the full development stack,
              from frontend frameworks to cloud infrastructure and everything in between.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {Object.entries(skillCategories).map(([category, config]) => {
              const categorySkills = getSkillsByCategory(category);
              if (categorySkills.length === 0) return null;

              return (
                <Card key={category} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${config.color} text-white text-sm font-medium mb-6`}>
                      {config.title}
                    </div>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => {
                        const Icon = getIcon(skill.icon);
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-primary" />
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Full Stack Development',
                'Microservices Architecture',
                'Cloud Computing',
                'DevOps & CI/CD',
                'Database Design',
                'API Development',
                'Performance Optimization',
                'Team Leadership',
                'Code Review',
                'Agile Methodologies'
              ].map((competency) => (
                <Badge 
                  key={competency} 
                  variant="outline" 
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 transition-colors"
                >
                  {competency}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
