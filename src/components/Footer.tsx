import monsterLogo from "@/assets/monster-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center gap-3">
              <img src={monsterLogo} alt="Monster AI" className="w-8 h-8 brightness-0 invert" />
              <span className="text-xl font-bold">Monster AI</span>
            </div>
            
            <nav className="flex flex-wrap gap-8 text-sm">
              <a href="#about" className="hover:text-background/80 transition-colors">
                About
              </a>
              <a href="#community" className="hover:text-background/80 transition-colors">
                Community
              </a>
              <a href="#support" className="hover:text-background/80 transition-colors">
                Support
              </a>
              <a href="#terms" className="hover:text-background/80 transition-colors">
                Terms
              </a>
              <a href="#privacy" className="hover:text-background/80 transition-colors">
                Privacy
              </a>
            </nav>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-sm text-background/70">
              © 2025 Monster AI. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;