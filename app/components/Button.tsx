import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const buttonVariants = {
  primary: 'bg-[#5B42F3] hover:bg-blue-700 text-white border border-blue-600 hover:border-blue-700',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-700',
  outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 border border-transparent',
  yellow: 'bg-yellow-400 hover:bg-yellow-500 text-black border border-yellow-400 hover:border-yellow-500'
};

const buttonSizes = {
  sm: 'px-2 py-` text-base',
  md: 'px-5 py-2.5 text-lg',
  lg: 'px-8 py-4 text-xl'
};

export default function Button({
  children,
  variant = 'primary',
  size = 'lg',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];
  
  const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
