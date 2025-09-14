import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Image, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-hero rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              Your Style with
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AI Magic
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Upload your photo and any clothing item, accessory, or jewelry. 
              Watch our AI create stunning, realistic images of you wearing them perfectly.
              Perfect for personal styling and e-commerce integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Start Creating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-glass-bg border border-glass-border rounded-full px-4 py-2">
                <Image className="h-4 w-4 text-accent" />
                <span className="text-sm select-none">Any Clothing</span>
              </div>
              <div className="flex items-center space-x-2 bg-glass-bg border border-glass-border rounded-full px-4 py-2">
                <Wand2 className="h-4 w-4 text-accent" />
                <span className="text-sm select-none">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2 bg-glass-bg border border-glass-border rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm select-none">HD Quality</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="AI-powered virtual try-on transformation"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-2xl rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;