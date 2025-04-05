
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  Thermometer, 
  CloudSnow, 
  CircleArrowDown, 
  CircleArrowUp, 
  Sun, 
  Wind, 
  Zap 
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Our Technology</h1>
          <p className="text-lg text-foreground/80 mb-8">
            The Hybrid Cooling & CO₂ Capture Machine represents a breakthrough in sustainable climate technology, addressing both immediate cooling needs and long-term carbon reduction goals.
          </p>

          <div className="bg-muted/30 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              We're on a mission to create innovative climate solutions that tackle global warming on two fronts: reducing urban heat islands through advanced cooling technology and directly capturing atmospheric CO₂.
            </p>
            <p>
              By integrating these systems with renewable energy sources, we're pioneering a path toward sustainable cities and a healthier planet.
            </p>
          </div>

          <Tabs defaultValue="cooling" className="mb-12">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="cooling">Cooling Technology</TabsTrigger>
              <TabsTrigger value="carbon">Carbon Capture</TabsTrigger>
              <TabsTrigger value="energy">Renewable Energy</TabsTrigger>
            </TabsList>
            <TabsContent value="cooling">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <CloudSnow className="h-8 w-8 text-eco-blue mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Advanced Cooling System</h3>
                      <p className="text-foreground/80 mb-4">
                        Our cooling technology combines three innovative approaches to reduce ambient temperatures without harmful refrigerants or excessive energy use.
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <CircleArrowDown className="h-5 w-5 text-eco-blue mr-2 flex-shrink-0" />
                          <span><strong>Radiative Cooling:</strong> Specialized panels that emit heat directly into space through the atmospheric window, providing passive cooling.</span>
                        </li>
                        <li className="flex items-start">
                          <CircleArrowDown className="h-5 w-5 text-eco-blue mr-2 flex-shrink-0" />
                          <span><strong>Evaporative Cooling:</strong> Water-efficient evaporative systems that provide additional cooling capacity in various climate conditions.</span>
                        </li>
                        <li className="flex items-start">
                          <CircleArrowDown className="h-5 w-5 text-eco-blue mr-2 flex-shrink-0" />
                          <span><strong>Thermoelectric Cooling:</strong> Advanced solid-state cooling technology that transforms temperature differentials into additional cooling capacity.</span>
                        </li>
                      </ul>
                      <p className="text-foreground/80">
                        This integrated approach allows us to achieve temperature reductions of 5-8°C in ambient environments while using minimal energy input.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="carbon">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Database className="h-8 w-8 text-eco-green mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">CO₂ Capture & Sequestration</h3>
                      <p className="text-foreground/80 mb-4">
                        Our direct air capture (DAC) system filters CO₂ directly from ambient air using innovative sorbent materials and processes that require minimal energy input.
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <CircleArrowDown className="h-5 w-5 text-eco-green mr-2 flex-shrink-0" />
                          <span><strong>Advanced Sorbents:</strong> Proprietary materials that selectively bind to CO₂ molecules in the air with high efficiency.</span>
                        </li>
                        <li className="flex items-start">
                          <CircleArrowDown className="h-5 w-5 text-eco-green mr-2 flex-shrink-0" />
                          <span><strong>Integrated Processing:</strong> The captured CO₂ is processed and compressed for storage or utilization.</span>
                        </li>
                        <li className="flex items-start">
                          <CircleArrowDown className="h-5 w-5 text-eco-green mr-2 flex-shrink-0" />
                          <span><strong>Utilization Pathways:</strong> Captured carbon can be used for synthetic fuels, building materials, or permanently sequestered.</span>
                        </li>
                      </ul>
                      <p className="text-foreground/80">
                        Each unit can capture 1-2 tons of CO₂ annually, equivalent to the annual emissions absorption of approximately 40-80 mature trees.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="energy">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="flex mr-4 flex-shrink-0">
                      <Sun className="h-8 w-8 text-eco-blue" />
                      <Wind className="h-8 w-8 text-eco-teal ml-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Renewable Energy Integration</h3>
                      <p className="text-foreground/80 mb-4">
                        Our systems are powered by integrated renewable energy sources, making them self-sufficient and carbon-neutral in operation.
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-start">
                          <Sun className="h-5 w-5 text-eco-blue mr-2 flex-shrink-0" />
                          <span><strong>Solar Power:</strong> High-efficiency photovoltaic panels that provide primary power during daylight hours.</span>
                        </li>
                        <li className="flex items-start">
                          <Wind className="h-5 w-5 text-eco-teal mr-2 flex-shrink-0" />
                          <span><strong>Wind Energy:</strong> Micro wind turbines that supplement power generation, especially at night or during cloudy periods.</span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="h-5 w-5 text-eco-blue mr-2 flex-shrink-0" />
                          <span><strong>Energy Storage:</strong> Advanced battery systems that store excess energy for continuous operation.</span>
                        </li>
                      </ul>
                      <p className="text-foreground/80">
                        This integrated renewable approach ensures that our climate solution doesn't contribute additional carbon emissions, creating a truly sustainable system.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CloudSnow className="h-5 w-5 text-eco-blue mr-2" />
                  Cooling System
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Cooling Capacity:</span>
                    <span className="font-medium">1.5 - 5.0 kW</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Temperature Reduction:</span>
                    <span className="font-medium">5 - 8°C</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Operational Modes:</span>
                    <span className="font-medium">4 Settings</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Water Consumption:</span>
                    <span className="font-medium">0.5 - 2.0 L/day</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Database className="h-5 w-5 text-eco-green mr-2" />
                  CO₂ Capture
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Capture Rate:</span>
                    <span className="font-medium">0.5 - 2.0 kg/day</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Annual Capacity:</span>
                    <span className="font-medium">1 - 2 tons CO₂</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Storage Capacity:</span>
                    <span className="font-medium">25 - 50 kg</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Sorbent Lifespan:</span>
                    <span className="font-medium">3 - 5 years</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Zap className="h-5 w-5 text-eco-blue mr-2" />
                  Energy System
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Solar Capacity:</span>
                    <span className="font-medium">0.5 - 2.0 kW</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Wind Capacity:</span>
                    <span className="font-medium">0.2 - 0.7 kW</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Battery Storage:</span>
                    <span className="font-medium">2 - 8 kWh</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Grid Connection:</span>
                    <span className="font-medium">Optional</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Thermometer className="h-5 w-5 text-eco-teal mr-2" />
                  Physical Specifications
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Dimensions (Residential):</span>
                    <span className="font-medium">80 x 60 x 30 cm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Weight:</span>
                    <span className="font-medium">45 - 75 kg</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Noise Level:</span>
                    <span className="font-medium">&lt; 45 dB</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Design Lifespan:</span>
                    <span className="font-medium">15+ years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">AI-Powered Optimization</h2>
            <p className="mb-4">
              Our proprietary AI system continuously monitors environmental conditions, system performance, and user preferences to optimize operation for maximum efficiency and impact.
            </p>
            <p className="mb-4">
              The system learns from usage patterns and adapts its operation to balance cooling needs, CO₂ capture rates, and energy consumption, ensuring optimal performance in any environment.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Make an Impact?</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Join us in creating a cooler, cleaner future with innovative climate technology that works for both people and the planet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-eco hover:opacity-90">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg">
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
