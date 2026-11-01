import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ 
  // Given a responsive default size so it works properly everywhere if no class is passed
  className = 'h-12 md:h-16 lg:h-20 w-auto object-contain' 
}) => {
  return (
    <img 
      src="https://res.cloudinary.com/dw1ohipim/image/upload/v1791479927/rozez2grmcld6b3dovps.png" 
      alt="Abiy One Ethiopia Tours" 
      className={className} 
    />
  );
};