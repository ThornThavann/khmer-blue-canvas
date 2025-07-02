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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.intro')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated full-stack developer with experience in modern web technologies. 
                  I enjoy solving complex problems and creating user-friendly applications that make a difference.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Personal Traits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Strong problem-solving and analytical skills</li>
                  <li>• Excellent communication and teamwork abilities</li>
                  <li>• Passionate about continuous learning</li>
                  <li>• Detail-oriented and deadline-focused</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h4 className="font-semibold text-lg mb-3 text-primary">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
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
    </section>
  );
};