import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hhcLogo from '@/assets/hhc-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={hhcLogo} 
              alt="HHC Logo" 
              className="h-10 w-auto transition-transform hover:scale-105"
            />
            <span className="text-xl font-bold text-primary">Hyderabad Housing Consultancy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#solutions" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Solutions
              </a>
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
              <Zap className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-foreground/70 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#solutions" className="block px-3 py-2 text-foreground/70 hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#about" className="block px-3 py-2 text-foreground/70 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block px-3 py-2 text-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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