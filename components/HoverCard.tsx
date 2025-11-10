import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

const HoverCard = ({ children, className = "" }: HoverCardProps) => {
  return (
    <div className={`
      glass rounded-xl p-6 glow-hover transition-all duration-300
      hover:bg-card/30 hover:border-primary/30 hover:shadow-hover
      group cursor-pointer
      ${className}
    `}>
      {children}
    </div>
  );
};

export default HoverCard;