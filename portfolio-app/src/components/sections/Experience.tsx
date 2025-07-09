import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { experiences } from '@/data/experience';

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'Oracle Certified Professional Java SE', issuer: 'Oracle', year: '2022' },
  { name: 'Microsoft Azure Developer Associate', issuer: 'Microsoft', year: '2023' },
  { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2022' }
];

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My career journey showcasing progressive growth, technical leadership, and successful project deliveries
              across various industries and technology stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div key={experience.id} className="relative">
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-px bg-border"></div>
                    )}
                    <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-full bg-primary/10 border-2 border-primary/20">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-1">{experience.position}</CardTitle>
                            <p className="text-lg font-medium text-primary">{experience.company}</p>
                            <p className="text-sm text-muted-foreground">{experience.duration}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {experience.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{cert.name}</h4>
                          <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                          <Badge variant="outline" className="mt-2">
                            {cert.year}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm committed to staying current with emerging technologies and best practices.
                    Currently pursuing advanced certifications in cloud architecture and DevOps practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
