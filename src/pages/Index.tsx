import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import AgentStoreSection from "@/components/AgentStoreSection";
import ExampleAgentsSection from "@/components/ExampleAgentsSection";
import WhySection from "@/components/WhySection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <AgentStoreSection />
        <ExampleAgentsSection />
        <WhySection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
