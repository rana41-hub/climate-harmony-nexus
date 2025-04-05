
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-4 md:pt-40 md:pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-eco">
                Hybrid Cooling &<br />CO₂ Capture
              </span>
              <br />
              <span>Machine</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              A revolutionary sustainable system that simultaneously cools ambient air and captures CO₂ while utilizing renewable energy sources.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-gradient-eco hover:opacity-90">
                <Link to="/dashboard">
                  View Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-blue/20 to-eco-green/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-eco-blue/30 to-eco-green/30 rounded-full animate-pulse-slow animation-delay-700"></div>
              <div className="absolute inset-16 bg-gradient-eco rounded-full shadow-xl flex items-center justify-center">
                <div className="text-white text-2xl md:text-4xl font-bold">HC²</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
