import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Zap, 
  Building2, 
  Users, 
  CreditCard, 
  BarChart3,
  Home,
  Calculator,
  FileText,
  Settings
} from 'lucide-react';
import HoverCard from './HoverCard';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI Property Analytics",
      description: "Advanced machine learning algorithms analyze market trends, property values, and investment opportunities in real-time.",
      features: ["Predictive Market Analysis", "Risk Assessment", "ROI Forecasting"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Smart Loan Processing",
      description: "Automated loan approval system with instant eligibility checks and seamless bank integration.",
      features: ["Instant Pre-approval", "Multi-bank Comparison", "Zero Paperwork"],
      color: "secondary"
    },
    {
      icon: Building2,
      title: "Property Management Hub",
      description: "Comprehensive property portfolio management with tenant tracking, maintenance scheduling, and financial reporting.",
      features: ["Tenant Management", "Maintenance Tracking", "Financial Reports"],
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Investment Intelligence",
      description: "Data-driven investment recommendations with market insights and performance tracking.",
      features: ["Market Intelligence", "Portfolio Optimization", "Performance Analytics"],
      color: "primary"
    },
    {
      icon: CreditCard,
      title: "Digital Payments",
      description: "Secure payment processing for rent collection, loan EMIs, and property transactions.",
      features: ["Automated Collections", "Multi-payment Options", "Transaction Security"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Client Experience Platform",
      description: "Personalized client portal with 24/7 support, document management, and real-time updates.",
      features: ["Client Portal", "Document Vault", "Real-time Updates"],
      color: "accent"
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Home Loan Solutions",
      description: "Compare offers from 50+ banks with AI-powered matching",
      stats: "₹5Cr+ Disbursed"
    },
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Smart calculator with dynamic interest rate predictions",
      stats: "10K+ Calculations"
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "AI-powered document verification and processing",
      stats: "99.9% Accuracy"
    },
    {
      icon: Settings,
      title: "Loan Management",
      description: "End-to-end loan lifecycle management platform",
      stats: "5000+ Happy Clients"
    }
  ];

  return (
    <section id="solutions" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Next-Gen
            <span className="holographic block">Property Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing real estate with cutting-edge technology, AI-powered insights, 
            and seamless user experiences.
          </p>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <HoverCard key={index} className="relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`
                    p-3 rounded-xl
                    ${solution.color === 'primary' ? 'bg-primary/10 border border-primary/20' : ''}
                    ${solution.color === 'secondary' ? 'bg-secondary/10 border border-secondary/20' : ''}
                    ${solution.color === 'accent' ? 'bg-accent/10 border border-accent/20' : ''}
                  `}>
                    <solution.icon className={`
                      h-6 w-6
                      ${solution.color === 'primary' ? 'text-primary' : ''}
                      ${solution.color === 'secondary' ? 'text-secondary' : ''}
                      ${solution.color === 'accent' ? 'text-accent' : ''}
                    `} />
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Zap className={`
                        h-3 w-3
                        ${solution.color === 'primary' ? 'text-primary' : ''}
                        ${solution.color === 'secondary' ? 'text-secondary' : ''}
                        ${solution.color === 'accent' ? 'text-accent' : ''}
                      `} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </HoverCard>
          ))}
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h3>
            <p className="text-muted-foreground">Comprehensive property and loan solutions powered by technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <HoverCard key={index} className="text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                    <div className="text-xs bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1 inline-block">
                      {service.stats}
                    </div>
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default SolutionsSection;