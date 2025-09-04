import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Play, Smartphone, TreePine, Receipt, Apple, AlarmClock, Hash, Calendar, FileText, Moon } from "lucide-react";
// import monsterCharacter from "@/assets/monster-character.png";

const HeroSection = () => {
  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (!api) return;

    const autoScroll = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [api]);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
      {/* AI Mesh Background */}
      <div className="absolute inset-0 bg-mesh" />
      
      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-brand-green rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent-lime rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-accent-purple rounded-full opacity-30" style={{animation: 'float 6s ease-in-out infinite'}} />
        <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-accent-pink rounded-full opacity-40" style={{animation: 'float 4s ease-in-out infinite'}} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 text-center relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Main Heading with AI Gradient - Smaller Size */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight">
            Monster AI
            <br />
            <span className="text-gradient font-mono">
              Your Daily Life Agent
            </span>
          </h1>
          {/* Subtitle with enhanced styling */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Practical. Cheaper. More Life.
          </p>
          
          {/* CTA Buttons with enhanced design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group relative overflow-hidden bg-gradient-to-r from-brand-green to-accent-lime hover:shadow-glow-strong text-black font-semibold px-6 py-3 text-base">
              <span className="relative z-10">Join the Waitlist</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-lime to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="outline-hero" size="lg" className="group glass-effect hover:bg-white/10 text-white border-white/20 hover:border-brand-green/50 px-6 py-3 text-base">
              <Play className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>

          {/* Life Apps Carousel with AI styling - More Compact */}
          <div className="mt-8 mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-brand-green to-transparent w-24" />
              <h3 className="text-sm font-mono font-semibold text-brand-green mx-4 tracking-wider">
                30+ AI.AGENTS
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-brand-green to-transparent w-24" />
            </div>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-1 md:-ml-2 -space-x-1">
                 {[
                   { label: "Plant Care", bgPosition: "0% 0%" },
                   { label: "Sleep Tracker", bgPosition: "20% 0%" },
                   { label: "Bill Manager", bgPosition: "40% 0%" },
                   { label: "Calorie Tracker", bgPosition: "60% 0%" },
                   { label: "Smart Alarm", bgPosition: "80% 0%" },
                   { label: "Sudoku", bgPosition: "100% 0%" },
                   { label: "Period Tracker", bgPosition: "120% 0%" },
                   { label: "File Converter", bgPosition: "140% 0%" },
                 ].map((app, index) => (
                   <CarouselItem key={index} className="-ml-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                     <div className="flex flex-col items-center group cursor-pointer p-1.5">
                       {/* Monster character icon container */}
                       <div className="relative w-48 h-20 md:w-54 md:h-24 lg:w-60 lg:h-28 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden drop-shadow-md"
                            style={{
                              backgroundImage: "url('/lovable-uploads/dcaa1cf5-5b73-4d71-8010-18753a194608.png')",
                              backgroundSize: "800% 100%",
                              backgroundPosition: app.bgPosition,
                              backgroundRepeat: "no-repeat"
                            }}>
                         {/* Shine effect */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       </div>
                       
                       {/* App name */}
                       <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center mt-2 leading-tight max-w-full">{app.label}</span>
                     </div>
                   </CarouselItem>
                 ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex glass-effect hover:bg-brand-green/20 border-brand-green/30" />
              <CarouselNext className="hidden md:flex glass-effect hover:bg-brand-green/20 border-brand-green/30" />
            </Carousel>
          </div>
          
          {/* Status indicators with AI theme - More Compact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-brand-green rounded-full opacity-20" style={{animation: 'glow-pulse 2s ease-in-out infinite'}} />
              </div>
              <span className="text-muted-foreground group-hover:text-brand-green transition-colors font-mono">30+ AI.AGENTS.READY</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-accent-lime rounded-full opacity-20" style={{animation: 'glow-pulse 2s ease-in-out infinite 0.5s'}} />
              </div>
              <span className="text-muted-foreground group-hover:text-accent-lime transition-colors font-mono">7.DAY.FREE.TRIAL</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-accent-yellow rounded-full opacity-20" style={{animation: 'glow-pulse 2s ease-in-out infinite 1s'}} />
              </div>
              <span className="text-muted-foreground group-hover:text-accent-yellow transition-colors font-mono">EARLY.ACCESS.NOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;