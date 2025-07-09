import { Heart, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500" /> and <Code className="h-4 w-4 text-primary" /> 
            using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Full Stack Java Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
