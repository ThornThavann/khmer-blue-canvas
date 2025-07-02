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
            <Card key={index} className="gradient-card hover-lift overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};