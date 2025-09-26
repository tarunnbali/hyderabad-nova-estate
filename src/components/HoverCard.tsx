import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

const HoverCard = ({ children, className = "" }: HoverCardProps) => {
  return (
    <div className={`
      bg-white rounded-xl p-6 border border-border/20 shadow-card
      hover:shadow-hover hover:border-primary/20 transition-all duration-300
      group cursor-pointer
      ${className}
    `}>
      {children}
    </div>
  );
};

export default HoverCard;