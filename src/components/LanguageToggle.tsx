import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export type Language = 'en' | 'km';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: {
    en: string;
    km: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', km: 'ទំព័រដើម' },
  'nav.about': { en: 'About', km: 'អំពីខ្ញុំ' },
  'nav.projects': { en: 'Projects', km: 'គម្រោង' },
  'nav.contact': { en: 'Contact', km: 'ទំនាក់ទំនង' },
  
  // Hero Section
  'hero.greeting': { en: 'Hello, I\'m', km: 'សួស្តី ខ្ញុំឈ្មោះ' },
  'hero.title': { en: 'Full Stack Developer', km: 'អ្នកអភិវឌ្ឍន៍ពេញលេញ' },
  'hero.subtitle': { en: 'Passionate about creating digital solutions and building amazing experiences', km: 'មានចំណុចចិត្តក្នុងការបង្កើតដំណោះស្រាយឌីជីថល និងបទពិសោធន៍អស្ចារ្យ' },
  'hero.cta': { en: 'View My Work', km: 'មើលការងាររបស់ខ្ញុំ' },
  
  // About Section
  'about.title': { en: 'About Me', km: 'អំពីខ្ញុំ' },
  'about.intro': { en: 'I\'m a passionate developer with a love for creating innovative solutions.', km: 'ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ដែលមានចំណុចចិត្តក្នុងការបង្កើតដំណោះស្រាយថ្មី។' },
  
  // Projects Section
  'projects.title': { en: 'My Projects', km: 'គម្រោងរបស់ខ្ញុំ' },
  'projects.subtitle': { en: 'Here are some of my recent works', km: 'នេះគឺជាការងារចុងក្រោយរបស់ខ្ញុំ' },
  
  // Contact Section
  'contact.title': { en: 'Get In Touch', km: 'ទាក់ទងមកខ្ញុំ' },
  'contact.subtitle': { en: 'Let\'s work together on your next project', km: 'តោះធ្វើការជាមួយគ្នាលើគម្រោងបន្ទាប់របស់អ្នក' },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'km' : 'en')}
      className="border-primary/20 hover:bg-primary/10"
    >
      {language === 'en' ? '🇰🇭 ខ្មែរ' : '🇺🇸 EN'}
    </Button>
  );
};