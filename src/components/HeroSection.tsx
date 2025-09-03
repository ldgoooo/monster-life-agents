import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Smartphone, Heart, Clock, Wallet, Car, Home, Coffee, ShoppingBag } from "lucide-react";

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
          
          {/* Life Apps Grid */}
          <div className="mt-16 mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">覆盖生活各个场景</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Heart, label: "健康", color: "text-red-400" },
                { icon: Clock, label: "时间", color: "text-blue-400" },
                { icon: Wallet, label: "财务", color: "text-green-400" },
                { icon: Car, label: "出行", color: "text-purple-400" },
                { icon: Home, label: "家居", color: "text-orange-400" },
                { icon: Coffee, label: "饮食", color: "text-amber-400" },
                { icon: ShoppingBag, label: "购物", color: "text-pink-400" },
                { icon: Smartphone, label: "娱乐", color: "text-cyan-400" },
              ].map((app, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-card border border-border rounded-xl flex items-center justify-center mb-3 group-hover:border-brand-green group-hover:shadow-glow transition-all duration-300">
                    <app.icon className={`w-6 h-6 md:w-8 md:h-8 ${app.color} group-hover:text-brand-green transition-colors`} />
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{app.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span>30+ AI Agents Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
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