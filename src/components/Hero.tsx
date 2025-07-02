import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageToggle';
import heroImage from '@/assets/hero-image.jpg';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-muted-foreground">{t('hero.greeting')}</span>
              <br />
              <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-foreground/80">
              {t('hero.title')}
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              {t('hero.subtitle')}
            </p>
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="gradient-primary text-white hover:opacity-90 transition-opacity"
            >
              {t('hero.cta')}
            </Button>
          </div>
          
          <div className="animate-fade-in-delay">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional workspace"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};