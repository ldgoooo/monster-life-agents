import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Gift, Star, Users, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(2547); // 默认值，将通过API获取实际数量
  const { toast } = useToast();
  
  // 获取等待列表人数
  const fetchWaitlistCount = async () => {
    try {
      const response = await fetch('http://localhost:3009/api/waitlist/count');
      const data = await response.json();
      
      if (response.ok && data.success) {
        setWaitlistCount(data.count);
      }
    } catch (error) {
      console.error('获取等待列表人数失败:', error);
    }
  };
  
  // 组件加载时获取等待列表人数
  useEffect(() => {
    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // 调用API保存邮箱
      const response = await fetch('http://localhost:3009/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || '保存失败');
      }
      
      // 显示成功提示
      toast({
        title: "🎉 欢迎加入 Monster AI!",
        description: `感谢 ${email.split('@')[0]}! 您已成功加入等待列表。我们将在产品发布时通知您。`,
        duration: 5000,
      });
      
      // 清空表单
      setEmail("");
      
      // 刷新等待列表人数
      fetchWaitlistCount();
      
    } catch (error) {
      console.error('提交失败:', error);
      toast({
        title: "提交失败",
        description: error instanceof Error ? error.message : "请稍后再试",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-brand-blue/5 via-accent-green/5 to-accent-orange/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-hero rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-accent rounded-full opacity-10 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Special Early Access Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Be the First to Try{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Monster AI
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sign up today and get exclusive early access + a 7-day free trial when we launch. Join thousands of early users shaping the future of AI living.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-lg border-border focus:ring-2 focus:ring-brand-blue"
                required
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="px-6 group"
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 animate-spin rounded-full border-2 border-background border-t-transparent mr-2" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe at any time. We'll notify you when Monster AI is ready.
            </p>
          </form>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-accent-green" />
              </div>
              <span className="text-sm font-medium text-foreground">7-Day Free Trial</span>
              <span className="text-xs text-muted-foreground">Full access included</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-accent-orange" />
              </div>
              <span className="text-sm font-medium text-foreground">Early Access</span>
              <span className="text-xs text-muted-foreground">Be among the first</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-brand-blue" />
              </div>
              <span className="text-sm font-medium text-foreground">Exclusive Benefits</span>
              <span className="text-xs text-muted-foreground">Founding member perks</span>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-gradient-hero rounded-full border border-background" />
                <div className="w-6 h-6 bg-gradient-accent rounded-full border border-background" />
                <div className="w-6 h-6 bg-gradient-primary rounded-full border border-background" />
              </div>
              <span>{waitlistCount.toLocaleString()}+ 人已加入等待列表</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;