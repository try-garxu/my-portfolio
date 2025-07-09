import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { projects } from '@/data/projects';

const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.technologies))
).sort();

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedFilter));

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work in full-stack development, cloud architecture, and modern web technologies.
              Each project demonstrates different aspects of my technical expertise and problem-solving approach.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Button
              variant={selectedFilter === 'All' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('All')}
              className="rounded-full"
            >
              <Filter className="h-4 w-4 mr-2" />
              All Projects
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={selectedFilter === tech ? 'default' : 'outline'}
                onClick={() => setSelectedFilter(tech as string)}
                className="rounded-full"
              >
                {tech}
              </Button>
            ))}
          </div>

          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-500/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
