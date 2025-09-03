import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background">
      {/* Content */}
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Daily Life{" "}
            <span className="text-brand-green">
              Agent
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            AI that understands your needs and helps you live better every day
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-hero" size="lg" className="group">
              <Play className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span>30+ AI Agents Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
              <span>7-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse" />
              <span>Early Access Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;