import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/components/LanguageToggle';

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: '💻',
    skills: [
      { name: 'React/Next.js', level: 95, experience: '4+ years' },
      { name: 'TypeScript', level: 90, experience: '3+ years' },
      { name: 'Vue.js/Nuxt.js', level: 85, experience: '3+ years' },
      { name: 'HTML5/CSS3', level: 95, experience: '5+ years' },
      { name: 'Tailwind CSS', level: 90, experience: '2+ years' },
      { name: 'JavaScript (ES6+)', level: 95, experience: '5+ years' }
    ]
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js/Express', level: 90, experience: '4+ years' },
      { name: 'Python/FastAPI', level: 85, experience: '2+ years' },
      { name: 'PostgreSQL', level: 85, experience: '3+ years' },
      { name: 'MongoDB', level: 80, experience: '3+ years' },
      { name: 'REST APIs', level: 95, experience: '4+ years' },
      { name: 'GraphQL', level: 75, experience: '2+ years' }
    ]
  },
  {
    category: 'UX/UI Design',
    icon: '🎨',
    skills: [
      { name: 'Figma', level: 90, experience: '3+ years' },
      { name: 'Adobe Creative Suite', level: 85, experience: '4+ years' },
      { name: 'User Research', level: 80, experience: '2+ years' },
      { name: 'Prototyping', level: 85, experience: '3+ years' },
      { name: 'Design Systems', level: 90, experience: '2+ years' },
      { name: 'Usability Testing', level: 75, experience: '2+ years' }
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    skills: [
      { name: 'Git/GitHub', level: 95, experience: '5+ years' },
      { name: 'Docker', level: 80, experience: '2+ years' },
      { name: 'AWS/Cloud Services', level: 75, experience: '2+ years' },
      { name: 'CI/CD Pipelines', level: 80, experience: '2+ years' },
      { name: 'Linux/Unix', level: 85, experience: '3+ years' },
      { name: 'Testing (Jest/Cypress)', level: 85, experience: '3+ years' }
    ]
  }
];

const softSkills = [
  { name: 'Problem Solving', description: 'Analytical thinking and creative solutions' },
  { name: 'Team Leadership', description: 'Mentoring and guiding development teams' },
  { name: 'Communication', description: 'Clear technical and client communication' },
  { name: 'Project Management', description: 'Agile methodologies and delivery focus' },
  { name: 'Adaptability', description: 'Quick learning of new technologies' },
  { name: 'Attention to Detail', description: 'Pixel-perfect implementations and quality code' }
];

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-shimmer bg-gradient-to-r from-primary to-accent bg-clip-text">
            Technical Expertise
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning full-stack development, UX/UI design, and modern development practices
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="gradient-card hover-lift group creative-border p-8"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h3 className="font-bold text-2xl group-hover:text-shimmer transition-all duration-300">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-muted-foreground">{skill.experience}</span>
                          <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="animate-fade-up">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">
            Professional Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift group creative-border text-center"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-3 group-hover:text-shimmer transition-all duration-300">
                    {skill.name}
                  </h4>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full animate-bounce-subtle opacity-40"></div>
    </section>
  );
};