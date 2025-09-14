import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Zap, Shield, Smartphone, Download, Palette, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "E-commerce Integration",
      description: "Perfect for online stores! Integrate our API to let customers virtually try on your products, boosting confidence and reducing returns."
    },
    {
      icon: Wand2,
      title: "AI-Powered Magic",
      description: "Advanced AI algorithms create realistic, high-quality images of you wearing any clothing item with perfect fit and lighting."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your transformed images in seconds, not minutes. Our optimized processing delivers instant results."
    },
    {
      icon: Shield,
      title: "Privacy First",  
      description: "Your photos are processed securely and never stored longer than necessary. Complete privacy guaranteed."
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works perfectly on any device. Upload and transform images seamlessly from your phone or desktop."
    },
    {
      icon: Download,
      title: "HD Downloads",
      description: "Download your transformed images in high resolution, perfect for social media or personal use."
    }
  ];

  const examples = [
    {
      title: "E-commerce Stores",
      description: "Integrate with online fashion retailers to let customers try before they buy",
      image: "🛒"
    },
    {
      title: "Fashion Brands",
      description: "Showcase new collections with virtual try-on experiences",
      image: "👗"
    },
    {
      title: "Content Creation",
      description: "Create stunning outfit posts and style content for social media",
      image: "📸"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Stylized-AI</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of virtual try-on technology with features designed for fashion enthusiasts, professionals, and e-commerce businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-glass-bg backdrop-blur-sm border-glass-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-card rounded-xl mb-4 group-hover:bg-gradient-accent transition-all duration-300">
                    <Icon className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Use Cases */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            Perfect For Every <span className="bg-gradient-hero bg-clip-text text-transparent">Use Case</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From e-commerce integration to personal styling, Stylized-AI empowers businesses and individuals alike.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <Card key={index} className="text-center bg-gradient-card backdrop-blur-sm border-glass-border hover:shadow-card transition-all duration-300">
              <CardContent className="pt-8">
                <div className="text-4xl mb-4">{example.image}</div>
                <CardTitle className="text-lg font-semibold mb-3">{example.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {example.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-card backdrop-blur-sm border border-glass-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Style?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who are already creating stunning AI-generated fashion content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;