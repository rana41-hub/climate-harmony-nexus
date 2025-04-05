
import { 
  AirVent, 
  Database, 
  Sun, 
  Wind, 
  Thermometer, 
  CircleArrowDown, 
  CircleArrowUp,
  BatteryCharging,
  Monitor,
  Smartphone,
  Building,
  Factory,
  Home,
  CloudSnow,
  Zap,
  Grid2X2
} from "lucide-react";

const features = [
  {
    icon: <CloudSnow className="h-10 w-10 text-eco-blue" />,
    title: "Advanced Air Cooling System",
    description: "Uses a combination of radiative cooling, evaporative cooling, and thermoelectric cooling to reduce ambient temperatures.",
  },
  {
    icon: <Database className="h-10 w-10 text-eco-green" />,
    title: "CO₂ Capture & Storage",
    description: "Utilizes direct air capture (DAC) technology to filter CO₂ from the air and store it for energy conversion or industrial reuse.",
  },
  {
    icon: <div className="flex gap-2"><Sun className="h-10 w-10 text-eco-blue" /><Wind className="h-10 w-10 text-eco-teal" /></div>,
    title: "Renewable Energy Integration",
    description: "Powered by solar panels and wind turbines, making it a self-sustaining system with zero carbon emissions.",
  },
  {
    icon: <Zap className="h-10 w-10 text-eco-blue" />,
    title: "AI-Powered Optimization",
    description: "A smart AI system monitors environmental conditions, optimizing cooling efficiency and CO₂ capture rates.",
  },
  {
    icon: <BatteryCharging className="h-10 w-10 text-eco-green" />,
    title: "Energy Storage & Utilization",
    description: "Converts captured CO₂ into usable energy, such as synthetic fuels or battery storage, enhancing sustainability.",
  },
  {
    icon: <div className="flex gap-2"><Monitor className="h-10 w-10 text-eco-blue" /><Smartphone className="h-10 w-10 text-eco-teal" /></div>,
    title: "Smart Dashboard & Mobile App",
    description: "Users can monitor system performance, track CO₂ reduction, control cooling settings, and receive alerts through a user-friendly app.",
  },
  {
    icon: <div className="flex gap-2"><Building className="h-10 w-10 text-eco-blue" /><Home className="h-10 w-10 text-eco-teal" /></div>,
    title: "Urban Cooling & Climate Resilience",
    description: "Can be deployed in urban areas, industries, and homes, helping reduce the urban heat island effect while cutting CO₂ emissions.",
  },
  {
    icon: <Grid2X2 className="h-10 w-10 text-eco-green" />,
    title: "Scalable & Modular Design",
    description: "Designed for various applications, from small-scale home cooling systems to large-scale city-wide climate solutions.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Our innovative system combines multiple technologies to create an effective solution for both cooling and carbon capture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
