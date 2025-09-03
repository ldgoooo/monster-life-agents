import { Zap, Clock, Shield } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI That Works for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Your Life
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Monster AI is not just one assistant. It's a team of AI agents that notice your daily needs, from managing money to tracking health. Always working, always focused on you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Instant Intelligence
              </h3>
              <p className="text-muted-foreground">
                Your AI agents work in real-time, processing information and making decisions faster than you can think.
              </p>
            </div>
            
            <div className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                24/7 Availability
              </h3>
              <p className="text-muted-foreground">
                Never sleep, never rest. Your Monster AI team is always active, monitoring and optimizing your daily life.
              </p>
            </div>
            
            <div className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Privacy First
              </h3>
              <p className="text-muted-foreground">
                Your data stays yours. Monster AI works for you alone, with enterprise-grade security and privacy protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;