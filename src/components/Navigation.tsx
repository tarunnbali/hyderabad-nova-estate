import { useState } from 'react';
import { Menu, X, Zap, Building2, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Building2 className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="text-xl font-bold holographic">HHC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#solutions" className="text-foreground/80 hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary text-primary-foreground glow-hover">
              <Zap className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#solutions" className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#about" className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-primary text-primary-foreground">
                <Zap className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;