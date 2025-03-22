
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out-expo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cane-800 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-cane-950 text-white hover:bg-cane-800',
    secondary: 'bg-cane-100 text-cane-950 hover:bg-cane-200',
    outline: 'border border-cane-950 text-cane-950 hover:bg-cane-50',
    ghost: 'text-cane-950 hover:bg-cane-50',
    link: 'text-cane-950 underline-offset-4 hover:underline p-0 h-auto'
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded',
    md: 'text-sm px-4 py-2 rounded-md',
    lg: 'text-base px-6 py-3 rounded-md'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
