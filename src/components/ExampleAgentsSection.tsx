import { Heart, DollarSign, Clock, Camera, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExampleAgentsSection = () => {
  const agents = [
    {
      icon: Heart,
      name: "Health Tracker",
      description: "Calories & wellness management",
      color: "bg-gradient-hero",
      preview: "Automatically tracks your meals, suggests healthier alternatives, and monitors your fitness goals."
    },
    {
      icon: DollarSign,
      name: "Finance Guide",
      description: "Smarter money, lower costs",
      color: "bg-gradient-accent",
      preview: "Finds better deals, tracks subscriptions, and optimizes your spending patterns."
    },
    {
      icon: Clock,
      name: "Time Keeper",
      description: "Schedule & reminders",
      color: "bg-gradient-primary",
      preview: "Manages your calendar, sets smart reminders, and optimizes your daily schedule."
    },
    {
      icon: Camera,
      name: "Memory Album",
      description: "Photo & subscription management",
      color: "bg-brand-blue",
      preview: "Organizes your photos, cancels unused subscriptions, and creates beautiful memories."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Life Agents
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are just a few of the 30+ agents you'll start with. Watch how they actually solve problems in real life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <div 
                  key={index}
                  className="group bg-card p-6 rounded-2xl border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                    <div className={`w-full h-full ${agent.color}`} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 ${agent.color} rounded-xl flex items-center justify-center mb-4 shadow-soft`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {agent.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {agent.description}
                    </p>
                    
                    <p className="text-xs text-muted-foreground mb-4 opacity-80">
                      {agent.preview}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-muted/50 transition-colors"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              And 26+ more agents ready to work for you from day one
            </p>
            <Button variant="outline-hero" size="lg">
              View All Agents
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleAgentsSection;