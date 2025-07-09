import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ContactForm } from '@/types';

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/try-garxu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/try-garxu', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/try-garxu', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${isIntersecting ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore collaboration opportunities?
              I'd love to hear from you. Let's build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">try.garxu@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Open to remote opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-6">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="icon"
                          asChild
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-5 w-5" />
                            <span className="sr-only">{social.label}</span>
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
