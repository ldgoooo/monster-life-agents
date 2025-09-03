import { Check, Smartphone, Sparkles, Users } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "One platform replaces dozens of paid apps",
      description: "Stop juggling multiple subscriptions. Monster AI consolidates everything you need into one intelligent platform."
    },
    {
      icon: Users,
      title: "Personalized AI that adapts to you",
      description: "Every agent learns your preferences, habits, and goals to provide truly personalized assistance that gets better over time."
    },
    {
      icon: Sparkles,
      title: "Continuous innovation: new agents built every day",
      description: "Our AI doesn't just serve you—it evolves. New agents are created constantly based on user needs and emerging opportunities."
    },
    {
      icon: Check,
      title: "Fun, human-like monsters that work only for you",
      description: "Unlike cold corporate AI, our monsters have personality. They're your digital companions who genuinely care about your success."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Monster AI?
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 p-8 bg-card rounded-2xl border border-border hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-muted/50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">30+</div>
                <div className="text-sm text-muted-foreground">AI Agents</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-green mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Daily Needs Covered</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always Working</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;