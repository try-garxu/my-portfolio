import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Award, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Award },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/40' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              Portfolio
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10 neon-glow'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b border-border/40">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center gap-3 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
