
import { 
  CircleArrowDown, 
  CircleArrowUp, 
  Wind, 
  Sun, 
  Database, 
  Zap, 
  AirVent 
} from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            The Hybrid Cooling & CO₂ Capture Machine combines multiple technologies into one integrated system.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-eco-blue via-eco-teal to-eco-green"></div>

          {/* Steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-semibold mb-4">Air Cooling</h3>
                <p className="text-foreground/80">
                  The system utilizes radiative cooling panels that emit heat into space, combined with advanced evaporative and thermoelectric technologies to efficiently reduce ambient temperatures without harmful refrigerants.
                </p>
              </div>
              <div className="md:w-24 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-eco flex items-center justify-center animate-pulse-slow z-10">
                  <AirVent className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div className="bg-muted/50 rounded-xl p-6 border">
                  <CircleArrowDown className="h-8 w-8 text-eco-blue mb-4" />
                  <div className="font-semibold text-eco-blue mb-2">Temperature Reduction</div>
                  <div className="text-3xl font-bold">5-8°C</div>
                  <div className="text-sm text-foreground/70">Average cooling effect</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right order-1 md:order-1">
                <div className="bg-muted/50 rounded-xl p-6 border">
                  <Database className="h-8 w-8 text-eco-green mb-4" />
                  <div className="font-semibold text-eco-green mb-2">CO₂ Captured</div>
                  <div className="text-3xl font-bold">1-2 tons</div>
                  <div className="text-sm text-foreground/70">Per unit annually</div>
                </div>
              </div>
              <div className="md:w-24 flex justify-center order-3 md:order-2">
                <div className="w-12 h-12 rounded-full bg-gradient-eco flex items-center justify-center animate-pulse-slow z-10">
                  <Database className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16 order-2 md:order-3">
                <h3 className="text-2xl font-semibold mb-4">Carbon Capture</h3>
                <p className="text-foreground/80">
                  As air passes through the cooling system, integrated direct air capture technology filters out CO₂ molecules, storing them for later conversion or sequestration, effectively reducing greenhouse gas concentrations.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-semibold mb-4">Renewable Power</h3>
                <p className="text-foreground/80">
                  The entire system is powered by integrated solar panels and small wind turbines, with energy storage capabilities to ensure 24/7 operation regardless of weather conditions.
                </p>
              </div>
              <div className="md:w-24 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-eco flex items-center justify-center animate-pulse-slow z-10">
                  <Sun className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                <div className="bg-muted/50 rounded-xl p-6 border">
                  <Zap className="h-8 w-8 text-eco-teal mb-4" />
                  <div className="font-semibold text-eco-teal mb-2">Self-Sufficient</div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-foreground/70">Renewable energy powered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
