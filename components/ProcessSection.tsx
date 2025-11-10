import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import HoverCard from './HoverCard';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Smart Assessment",
      description: "AI-powered analysis of your financial profile and property requirements",
      details: ["Credit Score Analysis", "Income Verification", "Property Matching"],
      color: "primary"
    },
    {
      number: "02", 
      title: "Intelligent Matching",
      description: "Advanced algorithms match you with the best loan offers and properties",
      details: ["Multi-bank Comparison", "Rate Optimization", "Terms Analysis"],
      color: "secondary"
    },
    {
      number: "03",
      title: "Digital Processing",
      description: "Streamlined digital workflow with automated documentation",
      details: ["Document Upload", "Verification Process", "Approval Tracking"],
      color: "accent"
    },
    {
      number: "04",
      title: "Seamless Closure",
      description: "Quick disbursement and property handover with complete support",
      details: ["Fund Transfer", "Legal Clearance", "Key Handover"],
      color: "primary"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Simplified
            <span className="holographic block">Process Flow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-driven process makes property acquisition and loan processing 
            faster, smarter, and more transparent than ever before.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <HoverCard className="h-full">
                  <div className="space-y-6">
                    {/* Step Number */}
                    <div className="flex items-center justify-between">
                      <div className={`
                        text-6xl font-bold opacity-20
                        ${step.color === 'primary' ? 'text-primary' : ''}
                        ${step.color === 'secondary' ? 'text-secondary' : ''}
                        ${step.color === 'accent' ? 'text-accent' : ''}
                      `}>
                        {step.number}
                      </div>
                      <Sparkles className={`
                        h-6 w-6
                        ${step.color === 'primary' ? 'text-primary' : ''}
                        ${step.color === 'secondary' ? 'text-secondary' : ''}
                        ${step.color === 'accent' ? 'text-accent' : ''}
                      `} />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className={`
                              h-4 w-4
                              ${step.color === 'primary' ? 'text-primary' : ''}
                              ${step.color === 'secondary' ? 'text-secondary' : ''}
                              ${step.color === 'accent' ? 'text-accent' : ''}
                            `} />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </HoverCard>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="bg-background p-2 rounded-full border border-border/30">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: "5000+", label: "Happy Clients", suffix: "" },
            { number: "₹500", label: "Crores Disbursed", suffix: "Cr+" },
            { number: "50+", label: "Bank Partners", suffix: "" },
            { number: "99.9", label: "Success Rate", suffix: "%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold holographic mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ProcessSection;