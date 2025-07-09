import { useState } from 'react';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { blogPosts } from '@/data/blog';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing knowledge and insights about modern software development, best practices,
              and emerging technologies in the ever-evolving tech landscape.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === '' ? 'default' : 'outline'}
                onClick={() => setSelectedTag('')}
                size="sm"
              >
                All Topics
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  onClick={() => setSelectedTag(tag as string)}
                  size="sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.publishDate)}
                      <Clock className="h-4 w-4 ml-2" />
                      {post.readTime} min read
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Card className="inline-block bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Want to stay updated?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Subscribe to get notified about new technical articles and insights.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
