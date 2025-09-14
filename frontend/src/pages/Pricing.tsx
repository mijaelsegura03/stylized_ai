import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Perfect for fashion enthusiasts and content creators",
      icon: Crown,
      features: [
        "50 transformations per month",
        "HD quality output",
        "Priority processing",
        "Advanced styling options",
        "Custom backgrounds",
        "Email support"
      ],
      buttonText: "Start Pro Plan",
      buttonVariant: "gradient" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For businesses and professional use",
      icon: Zap,
      features: [
        "200 transformations per month",
        "Ultra HD quality output",
        "Instant processing",
        "API access",
        "Custom branding",
        "Bulk operations",
        "Priority support",
        "Advanced analytics"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "hero" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional AI-powered virtual try-on technology. Choose the plan that fits your needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={plan.name} 
                  className={`relative transition-all duration-300 hover:shadow-glow hover:scale-105 ${
                    plan.popular 
                      ? 'border-accent shadow-button bg-gradient-card' 
                      : 'bg-glass-bg backdrop-blur-sm border-glass-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      plan.popular ? 'bg-accent/20' : 'bg-gradient-card'
                    }`}>
                      <Icon className={`h-6 w-6 ${plan.popular ? 'text-accent' : 'text-accent'}`} />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="pt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.buttonVariant} 
                      size="lg" 
                      className="w-full"
                      asChild
                    >
                      <Link to="/register">{plan.buttonText}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold mb-2">What about a trial period?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer a 7-day trial period for the Pro plan so you can test our AI technology risk-free.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What file formats are supported?</h3>
                <p className="text-muted-foreground text-sm">
                  We support JPG, PNG, and WEBP formats for both your photos and clothing items.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How accurate are the results?</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI delivers highly realistic results with proper lighting, shadows, and fit adjustments.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is my data secure?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely. We use enterprise-grade security and never share your images with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;