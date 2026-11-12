import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-12 md:h-16 lg:h-20 w-auto object-contain',
  variant = 'color',
}) => {
  const variantClassName = {
    light: 'brightness-0 invert',
    dark: 'brightness-0',
    color: '',
  }[variant];

  return (
    <img
      src="/images/abiy-ethiopia-tours-logo.png"
      alt="Abiy Ethiopia Tours"
      className={`${className} ${variantClassName}`}
    />
  );
};