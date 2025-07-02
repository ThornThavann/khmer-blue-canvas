import React from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle, useLanguage } from '@/components/LanguageToggle';

export const Header: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-primary">
            Portfolio
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('home')}
              className="hover:text-primary"
            >
              {t('nav.home')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="hover:text-primary"
            >
              {t('nav.about')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('projects')}
              className="hover:text-primary"
            >
              {t('nav.projects')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary"
            >
              {t('nav.contact')}
            </Button>
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};