import React from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Play, Smartphone, Heart, Clock, Wallet, Car, Home, Coffee, ShoppingBag, Camera, Music, Gamepad2, Book, MapPin, Utensils, Plane, Calendar, ShieldCheck, Zap, Users, Briefcase, GraduationCap, Gift, Headphones, Monitor, Dumbbell, Car as Taxi, Pill, TreePine, ShoppingCart } from "lucide-react";
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
          {/* Monster Characters Team */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <img 
                src="/lovable-uploads/e4d05f88-e4ca-4e76-837a-7cf08738a6f0.png" 
                alt="Monster AI Characters Team" 
                className="w-80 h-48 md:w-96 md:h-60 lg:w-[28rem] lg:h-64 object-contain monster-glow group-hover:scale-105 transition-all duration-500"
              />
              {/* Multi-colored glow effect behind characters */}
              <div className="absolute inset-0 bg-gradient-monsters opacity-20 rounded-3xl blur-3xl -z-10 group-hover:opacity-30 transition-all duration-500" />
              {/* Individual character glows */}
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-monster-pink/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-monster-purple/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-monster-blue/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>

          {/* Main Heading with AI Gradient - Smaller Size */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-none tracking-tight">
            Monster AI,{" "}
            <span className="text-gradient font-mono">
              Your Daily Life Agent.
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
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { icon: Heart, label: "健康", color: "text-red-400" },
                  { icon: Clock, label: "时间", color: "text-blue-400" },
                  { icon: Wallet, label: "财务", color: "text-green-400" },
                  { icon: Car, label: "出行", color: "text-purple-400" },
                  { icon: Home, label: "家居", color: "text-orange-400" },
                  { icon: Coffee, label: "饮食", color: "text-amber-400" },
                  { icon: ShoppingBag, label: "购物", color: "text-pink-400" },
                  { icon: Smartphone, label: "娱乐", color: "text-cyan-400" },
                  { icon: Camera, label: "摄影", color: "text-violet-400" },
                  { icon: Music, label: "音乐", color: "text-indigo-400" },
                  { icon: Gamepad2, label: "游戏", color: "text-emerald-400" },
                  { icon: Book, label: "阅读", color: "text-teal-400" },
                  { icon: MapPin, label: "导航", color: "text-rose-400" },
                  { icon: Utensils, label: "烹饪", color: "text-yellow-400" },
                  { icon: Plane, label: "旅行", color: "text-sky-400" },
                  { icon: Calendar, label: "日程", color: "text-slate-400" },
                  { icon: ShieldCheck, label: "安全", color: "text-lime-400" },
                  { icon: Zap, label: "效率", color: "text-orange-500" },
                  { icon: Users, label: "社交", color: "text-purple-500" },
                  { icon: Briefcase, label: "工作", color: "text-gray-400" },
                  { icon: GraduationCap, label: "学习", color: "text-blue-500" },
                  { icon: Gift, label: "礼品", color: "text-pink-500" },
                  { icon: Headphones, label: "音频", color: "text-indigo-500" },
                  { icon: Monitor, label: "办公", color: "text-slate-500" },
                  { icon: Dumbbell, label: "健身", color: "text-red-500" },
                  { icon: Taxi, label: "打车", color: "text-yellow-500" },
                  { icon: Pill, label: "医疗", color: "text-green-500" },
                  { icon: TreePine, label: "环保", color: "text-emerald-500" },
                  { icon: ShoppingCart, label: "电商", color: "text-orange-600" },
                ].map((app, index) => (
                  <CarouselItem key={index} className="pl-3 md:pl-4 basis-1/4 sm:basis-1/5 md:basis-1/7 lg:basis-1/9">
                    <div className="flex flex-col items-center group cursor-pointer p-2">
                      {/* App Store style icon */}
                      <div className="relative w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
                        {/* Icon background gradient based on color */}
                        <div className={`absolute inset-0 bg-gradient-to-br opacity-20 ${
                          app.color.includes('red') ? 'from-red-400 to-red-600' :
                          app.color.includes('blue') ? 'from-blue-400 to-blue-600' :
                          app.color.includes('green') ? 'from-green-400 to-green-600' :
                          app.color.includes('purple') ? 'from-purple-400 to-purple-600' :
                          app.color.includes('orange') ? 'from-orange-400 to-orange-600' :
                          app.color.includes('amber') ? 'from-amber-400 to-amber-600' :
                          app.color.includes('pink') ? 'from-pink-400 to-pink-600' :
                          app.color.includes('cyan') ? 'from-cyan-400 to-cyan-600' :
                          app.color.includes('violet') ? 'from-violet-400 to-violet-600' :
                          app.color.includes('indigo') ? 'from-indigo-400 to-indigo-600' :
                          app.color.includes('emerald') ? 'from-emerald-400 to-emerald-600' :
                          app.color.includes('teal') ? 'from-teal-400 to-teal-600' :
                          app.color.includes('rose') ? 'from-rose-400 to-rose-600' :
                          app.color.includes('yellow') ? 'from-yellow-400 to-yellow-600' :
                          app.color.includes('sky') ? 'from-sky-400 to-sky-600' :
                          app.color.includes('slate') ? 'from-slate-400 to-slate-600' :
                          app.color.includes('lime') ? 'from-lime-400 to-lime-600' :
                          app.color.includes('gray') ? 'from-gray-400 to-gray-600' :
                          'from-brand-green to-accent-lime'
                        }`} />
                        
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <app.icon className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 ${app.color} drop-shadow-sm`} />
                        </div>
                        
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