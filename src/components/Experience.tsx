import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/LanguageToggle';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Corp',
    period: '2022 - Present',
    type: 'Full-time',
    location: 'Phnom Penh, Cambodia',
    description: 'Leading full-stack development projects and mentoring junior developers in modern web technologies.',
    achievements: [
      'Led development of 5+ enterprise applications serving 10,000+ users',
      'Improved application performance by 60% through optimization',
      'Mentored 8 junior developers and established coding standards',
      'Implemented CI/CD pipelines reducing deployment time by 80%'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    title: 'UX/UI Designer & Frontend Developer',
    company: 'Design Studio Plus',
    period: '2021 - 2022',
    type: 'Full-time',
    location: 'Remote',
    description: 'Designed and developed user-centered digital experiences with focus on accessibility and performance.',
    achievements: [
      'Redesigned 3 major applications improving user satisfaction by 45%',
      'Created design system used across 15+ projects',
      'Conducted user research and usability testing for 20+ features',
      'Reduced bounce rate by 35% through UX improvements'
    ],
    technologies: ['Figma', 'React', 'Vue.js', 'Sass', 'Adobe Creative Suite', 'Sketch']
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Innovations',
    period: '2020 - 2021',
    type: 'Full-time',
    location: 'Phnom Penh, Cambodia',
    description: 'Developed MVP applications and scaled products from concept to production.',
    achievements: [
      'Built 3 successful MVP applications from scratch',
      'Implemented payment systems processing $100K+ monthly',
      'Optimized database queries improving response times by 70%',
      'Collaborated with product team to define technical requirements'
    ],
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe', 'Firebase', 'Heroku']
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Agency Pro',
    period: '2019 - 2020',
    type: 'Full-time',
    location: 'Phnom Penh, Cambodia',
    description: 'Developed responsive websites and learned modern development practices.',
    achievements: [
      'Delivered 25+ responsive websites for various clients',
      'Reduced page load times by 50% through optimization',
      'Learned and implemented modern JavaScript frameworks',
      'Collaborated with design team to ensure pixel-perfect implementations'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress']
  }
];

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-shimmer bg-gradient-to-r from-primary to-accent bg-clip-text">
            Professional Experience
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of growth, innovation, and impact across diverse tech environments
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="gradient-card hover-lift group creative-border relative p-8"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl lg:text-3xl group-hover:text-shimmer transition-all duration-300 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-muted-foreground mb-4 lg:mb-0">{exp.description}</p>
                  </div>
                  <div className="lg:text-right space-y-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
                      {exp.period}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{exp.type}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                          <span className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-bounce-subtle opacity-40"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-float opacity-30"></div>
    </section>
  );
};