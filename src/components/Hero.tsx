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
    <section id="home" className="min-h-screen flex items-center gradient-hero floating-shapes relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-muted-foreground animate-slide-in">{t('hero.greeting')}</span>
                <br />
                <span className="text-shimmer text-primary bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text">
                  Your Name
                </span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-medium text-foreground/80 animate-fade-in-delay">
                {t('hero.title')}
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToProjects}
                className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse-glow px-8 py-4 text-lg font-semibold"
              >
                {t('hero.cta')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
              >
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in-delay">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl animate-pulse-glow"></div>
              <div className="relative creative-border">
                <img 
                  src={heroImage} 
                  alt="Professional workspace"
                  className="rounded-2xl shadow-2xl hover-tilt w-full object-cover aspect-square lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 via-transparent to-accent/20"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full animate-bounce-subtle opacity-80"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full animate-float opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
    </section>
  );
};