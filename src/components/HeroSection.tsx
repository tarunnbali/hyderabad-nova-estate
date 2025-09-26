import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HoverCard from './HoverCard';
import heroCityscape from '@/assets/hero-cityscape.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroCityscape} 
          alt="Futuristic cityscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Future-Ready
                <span className="text-primary block">Property Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience next-generation property management with AI-powered insights, 
                seamless loan processing, and intelligent real estate solutions.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Instant Processing</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                Explore Solutions
              </Button>
            </div>
          </div>

          {/* Right Content - Eligibility Form */}
          <div className="lg:ml-auto">
            <HoverCard className="max-w-md w-full">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Quick Assessment</h3>
                  <p className="text-muted-foreground">Get instant eligibility insights</p>
                </div>

                <div className="space-y-4">
                  <Input 
                    placeholder="Full Name" 
                    className="bg-input/50 border-border/30 focus:border-primary/50"
                  />
                  <Input 
                    placeholder="Phone Number" 
                    className="bg-input/50 border-border/30 focus:border-primary/50"
                  />
                  <Input 
                    placeholder="City" 
                    className="bg-input/50 border-border/30 focus:border-primary/50"
                  />
                  <select className="w-full px-3 py-2 bg-input/50 border border-border/30 rounded-lg focus:border-primary/50 focus:outline-none">
                    <option>Employment Type</option>
                    <option>Salaried</option>
                    <option>Self-Employed</option>
                    <option>Business Owner</option>
                  </select>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                  Get Free Consultation
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    ✨ Professional Service • 🔒 100% Secure • ⚡ Instant Results
                  </p>
                </div>
              </div>
            </HoverCard>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/10 rounded-full blur-xl float" style={{ animationDelay: '-4s' }} />
    </section>
  );
};

export default HeroSection;