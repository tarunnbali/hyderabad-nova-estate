import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import HoverCard from './HoverCard';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Let's Build Your
                <span className="holographic block">Property Future</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to experience the future of property management? 
                Our AI-powered platform is here to transform your real estate journey.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <HoverCard className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </HoverCard>

              <HoverCard className="flex items-center space-x-4">
                <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-xl">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">hello@hyderabadhousing.com</p>
                </div>
              </HoverCard>

              <HoverCard className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-xl">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-muted-foreground">HITEC City, Hyderabad, Telangana</p>
                </div>
              </HoverCard>
            </div>

            {/* Quick Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Why Choose Our Platform?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "AI-Powered Analytics",
                  "Instant Loan Approval", 
                  "Zero Hidden Fees",
                  "24/7 Support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div>
            <HoverCard>
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold flex items-center justify-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>Get In Touch</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Start your property journey with a free consultation
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name" 
                      className="bg-input/50 border-border/30 focus:border-primary/50"
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="bg-input/50 border-border/30 focus:border-primary/50"
                    />
                  </div>

                  <Input 
                    type="email"
                    placeholder="Email Address" 
                    className="bg-input/50 border-border/30 focus:border-primary/50"
                  />

                  <Input 
                    type="tel"
                    placeholder="Phone Number" 
                    className="bg-input/50 border-border/30 focus:border-primary/50"
                  />

                  <select className="w-full px-3 py-2 bg-input/50 border border-border/30 rounded-lg focus:border-primary/50 focus:outline-none">
                    <option>Service Interest</option>
                    <option>Home Loan</option>
                    <option>Property Management</option>
                    <option>Investment Advisory</option>
                    <option>Other</option>
                  </select>

                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    className="bg-input/50 border-border/30 focus:border-primary/50 min-h-[100px]"
                  />

                  <Button className="w-full bg-gradient-primary text-primary-foreground glow-hover">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    🔒 Your information is secure and encrypted
                  </p>
                </div>
              </div>
            </HoverCard>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ContactSection;