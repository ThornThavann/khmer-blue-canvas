import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageToggle';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
];

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-shimmer bg-gradient-to-r from-primary to-accent bg-clip-text">
            {t('about.title')}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in space-y-8">
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-primary group-hover:text-shimmer transition-all duration-300">
                  Background
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm a dedicated full-stack developer with experience in modern web technologies. 
                  I enjoy solving complex problems and creating user-friendly applications that make a difference.
                </p>
              </div>
              
              <div className="group">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-primary group-hover:text-shimmer transition-all duration-300">
                  Personal Traits
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center space-x-3 hover:text-primary transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>Strong problem-solving and analytical skills</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:text-primary transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <span>Excellent communication and teamwork abilities</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:text-primary transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    <span>Passionate about continuous learning</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:text-primary transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    <span>Detail-oriented and deadline-focused</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-in-delay">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift gradient-card creative-border group hover:shadow-2xl transition-all duration-500"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="font-semibold text-xl mb-4 text-primary group-hover:text-shimmer transition-all duration-300">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-4 py-2 bg-gradient-to-r from-accent/50 to-primary/30 text-accent-foreground rounded-full text-sm font-medium hover:from-primary/20 hover:to-accent/40 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-bounce-subtle opacity-40"></div>
    </section>
  );
};