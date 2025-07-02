import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/LanguageToggle';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive full-stack e-commerce solution with modern payment integration, real-time inventory management, and responsive design. Built with advanced features like wishlist, cart persistence, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    role: 'Full Stack Developer & UX Designer',
    status: 'Completed',
    category: 'Full Stack',
    features: ['Payment Integration', 'Admin Dashboard', 'Real-time Updates', 'Mobile Responsive'],
    duration: '3 months',
    impact: '40% increase in user engagement'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, drag-and-drop functionality, and comprehensive analytics dashboard for productivity tracking.',
    tech: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Docker', 'Jest'],
    role: 'Frontend Lead & UX/UI Designer',
    status: 'In Progress',
    category: 'Frontend & UX/UI',
    features: ['Real-time Collaboration', 'Drag & Drop', 'Analytics', 'Team Management'],
    duration: '4 months',
    impact: '60% improvement in team productivity'
  },
  {
    title: 'Healthcare Management System',
    description: 'Complete healthcare management platform with patient records, appointment scheduling, telemedicine integration, and HIPAA-compliant data handling with role-based access control.',
    tech: ['React', 'Next.js', 'Prisma', 'PostgreSQL', 'TypeScript', 'Tailwind'],
    role: 'Full Stack Developer',
    status: 'Completed',
    category: 'Full Stack',
    features: ['Patient Records', 'Appointment System', 'Telemedicine', 'HIPAA Compliant'],
    duration: '6 months',
    impact: 'Reduced administrative work by 50%'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Advanced social media analytics and management platform with multi-platform integration, automated posting, engagement tracking, and comprehensive reporting features.',
    tech: ['React', 'Python', 'FastAPI', 'MongoDB', 'Chart.js', 'OAuth'],
    role: 'Full Stack Developer & Data Analyst',
    status: 'Completed',
    category: 'Full Stack',
    features: ['Multi-platform Integration', 'Analytics', 'Automated Posting', 'Reporting'],
    duration: '4 months',
    impact: '300% increase in social media efficiency'
  },
  {
    title: 'Food Delivery Mobile App',
    description: 'Cross-platform mobile application for food delivery with GPS tracking, real-time order updates, payment integration, and intuitive user experience design.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe'],
    role: 'Mobile Developer & UX Designer',
    status: 'In Progress',
    category: 'Mobile & UX/UI',
    features: ['GPS Tracking', 'Real-time Updates', 'Payment Gateway', 'Push Notifications'],
    duration: '5 months',
    impact: 'Improved delivery efficiency by 45%'
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with multi-language support, dynamic animations, and modern design principles. Features smooth transitions and interactive elements.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    role: 'Solo Developer & Designer',
    status: 'Completed',
    category: 'Frontend & UX/UI',
    features: ['Multi-language', 'Animations', 'Responsive Design', 'Modern UI'],
    duration: '1 month',
    impact: 'Increased client inquiries by 80%'
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'Intelligent customer service chatbot with natural language processing, machine learning capabilities, and seamless integration with existing business systems.',
    tech: ['Python', 'TensorFlow', 'React', 'Flask', 'NLP', 'Docker'],
    role: 'AI Developer & Backend Engineer',
    status: 'Completed',
    category: 'AI & Backend',
    features: ['Natural Language Processing', 'Machine Learning', 'API Integration', 'Real-time Chat'],
    duration: '3 months',
    impact: 'Reduced support tickets by 70%'
  },
  {
    title: 'Financial Trading Platform',
    description: 'Real-time trading platform with advanced charting, portfolio management, risk analysis, and secure transaction processing with institutional-grade security.',
    tech: ['React', 'WebSocket', 'Node.js', 'PostgreSQL', 'TradingView', 'Redis'],
    role: 'Senior Full Stack Developer',
    status: 'Completed',
    category: 'FinTech',
    features: ['Real-time Trading', 'Advanced Charts', 'Portfolio Management', 'Security'],
    duration: '8 months',
    impact: 'Processed $10M+ in transactions'
  }
];

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend & UX/UI', 'Mobile & UX/UI', 'AI & Backend', 'FinTech'];
  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const filteredProjects = selectedCategory === 'All' 
    ? displayedProjects 
    : displayedProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-shimmer bg-gradient-to-r from-primary to-accent bg-clip-text">
            {t('projects.title')}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing comprehensive full-stack development and UX/UI design expertise across diverse industries and technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-delay">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? "gradient-primary text-white shadow-lg hover:scale-105" 
                  : "border-primary/30 text-primary hover:bg-primary/10 hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="gradient-card hover-lift overflow-hidden group creative-border relative min-h-[500px]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl lg:text-3xl group-hover:text-shimmer transition-all duration-300 mb-2">
                      {project.title}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-medium"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    project.status === 'Completed' 
                      ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800 group-hover:scale-110' 
                      : 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 group-hover:scale-110'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-base group-hover:text-foreground/90 transition-colors duration-300 flex-1">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-primary">Role:</span>
                      <p className="text-muted-foreground">{project.role}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Duration:</span>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-primary text-sm">Key Features:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-gradient-to-r from-accent/20 to-primary/20 text-accent-foreground rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-primary text-sm">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
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

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4">
                    <span className="font-semibold text-primary text-sm">Impact:</span>
                    <p className="text-muted-foreground text-sm mt-1">{project.impact}</p>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce-subtle opacity-60"></div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="text-center animate-fade-up">
            <Button
              size="lg"
              onClick={() => setShowAll(true)}
              className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 px-12 py-4 text-lg font-semibold"
            >
              View All Projects ({projects.length - 4} more)
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center animate-fade-up">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(false)}
              className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 px-12 py-4 text-lg"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-bounce-subtle opacity-40"></div>
    </section>
  );
};