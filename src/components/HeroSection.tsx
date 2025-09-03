import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Play, Smartphone, Heart, Clock, Wallet, Car, Home, Coffee, ShoppingBag, Camera, Music, Gamepad2, Book, MapPin, Utensils, Plane, Calendar, ShieldCheck, Zap, Users, Briefcase, GraduationCap, Gift, Headphones, Monitor, Dumbbell, Car as Taxi, Pill, TreePine, ShoppingCart } from "lucide-react";

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
          
          {/* Life Apps Carousel */}
          <div className="mt-16 mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">30+ 生活场景 AI 助手</h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
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
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/8">
                    <div className="flex flex-col items-center group cursor-pointer">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-card border border-border rounded-xl flex items-center justify-center mb-3 group-hover:border-brand-green group-hover:shadow-glow transition-all duration-300">
                        <app.icon className={`w-6 h-6 md:w-7 md:h-7 ${app.color} group-hover:text-brand-green transition-colors`} />
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">{app.label}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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