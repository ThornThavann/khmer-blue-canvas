import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm opacity-80">
            © 2024 Your Name. All rights reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};