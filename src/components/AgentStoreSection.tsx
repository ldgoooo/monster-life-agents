import { Brain, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const AgentStoreSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Personal{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                AI Agent Store
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monster AI continuously produces new agents. At launch, you'll have access to 30+ Life Agents — already covering 70% of daily needs. And every day, new ones are born to make your life easier.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-hero opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  24/7 Working Team
                </h3>
                <p className="text-muted-foreground">
                  Monster AI never sleeps. Your agents work around the clock, monitoring, optimizing, and taking action on your behalf.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <Plus className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Wishlist Support
                </h3>
                <p className="text-muted-foreground">
                  Tell us what you need, and Monster builds it. Our AI continuously creates new agents based on your requests and needs.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent-green" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Life Partner
                </h3>
                <p className="text-muted-foreground">
                  More than a tool, it grows with you. Monster AI learns your patterns, preferences, and goals to become your perfect AI companion.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-muted/50 rounded-full px-6 py-3 mb-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-full border-2 border-background" />
                <div className="w-8 h-8 bg-gradient-accent rounded-full border-2 border-background" />
                <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">30+ Agents Ready at Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentStoreSection;