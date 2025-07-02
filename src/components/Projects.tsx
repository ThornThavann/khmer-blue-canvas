import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageToggle';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    role: 'Full Stack Developer',
    status: 'Completed'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    tech: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
    role: 'Frontend Lead',
    status: 'In Progress'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with multi-language support',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    role: 'Solo Developer',
    status: 'Completed'
  }
];

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">{t('projects.title')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="gradient-card hover-lift overflow-hidden group creative-border relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-xl lg:text-2xl group-hover:text-shimmer transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    project.status === 'Completed' 
                      ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 group-hover:scale-110' 
                      : 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 group-hover:scale-110'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-base group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mb-6 space-y-3">
                  <p className="text-sm font-semibold text-primary">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-accent/30 text-accent-foreground hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    GitHub
                  </Button>
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce-subtle opacity-60"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};