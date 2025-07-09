import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground mb-2">Full Stack</span>
            <span className="block gradient-text">Java Developer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting scalable enterprise solutions with{' '}
            <span className="text-primary font-semibold">Java</span>,{' '}
            <span className="text-primary font-semibold">Spring Boot</span>, and{' '}
            <span className="text-primary font-semibold">modern web technologies</span>.
            Passionate about cloud architecture and innovative development practices.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full neon-glow hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full border border-border/40 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://github.com/try-garxu" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full border border-border/40 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://linkedin.com/in/try-garxu" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('contact')}
              className="h-12 w-12 rounded-full border border-border/40 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Contact</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
