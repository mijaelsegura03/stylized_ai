import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, TrendingUp, Users, Zap, ShoppingCart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Returns",
      description: "Up to 40% reduction in returns when customers can virtually try products first"
    },
    {
      icon: Users,
      title: "Boost Engagement",
      description: "Increase time on site and customer interaction with your products"
    },
    {
      icon: ShoppingCart,
      title: "Higher Conversion",
      description: "Convert more browsers to buyers with confidence-building try-on experiences"
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description: "Simple REST API integration that works with any e-commerce platform"
    }
  ];

  const integrations = [
    "Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Platforms"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-card backdrop-blur-sm border border-glass-border rounded-full px-4 py-2 mb-6">
            <Code className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">For E-commerce Businesses</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Integrate Virtual Try-On
            </span>
            <br />
            Into Your Online Store
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Transform your e-commerce experience by letting customers virtually try on clothing, accessories, 
            and jewelry before they buy. Perfect integration for fashion retailers, marketplaces, and brand websites.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center bg-glass-bg backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-xl mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Platform Compatibility */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-card backdrop-blur-sm border border-glass-border rounded-2xl p-8 text-center">
            <h4 className="font-semibold mb-4 flex items-center justify-center">
              <Code className="h-5 w-5 mr-2 text-accent" />
              Compatible Platforms
            </h4>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {integrations.map((platform, index) => (
                <span 
                  key={index} 
                  className="bg-glass-bg border border-glass-border rounded-full px-3 py-1 text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            <h4 className="font-semibold mb-4 flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2 text-accent" />
              Perfect For
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Fashion e-commerce stores</li>
              <li>• Jewelry and accessories retailers</li>
              <li>• Marketplace platforms</li>
              <li>• Brand direct-to-consumer sites</li>
              <li>• Mobile shopping apps</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Boost Your E-commerce Sales?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join leading fashion retailers who have increased their conversion rates and reduced returns 
                with our virtual try-on technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="xl">
                  Schedule Demo
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link to="/pricing">View API Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;