import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/2880cc99-b40c-427c-860c-f6daac4f5280.png" alt="Monster AI" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Monster AI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#agents" className="text-muted-foreground hover:text-foreground transition-colors">
              Agents
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;