
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-eco-blue to-eco-green p-1">
          <div className="bg-background rounded-xl p-8 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the Climate Solution Revolution
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Explore how our Hybrid Cooling & CO₂ Capture Machine can help you reduce your carbon footprint while creating more comfortable environments. See the technology in action with our interactive dashboard.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-gradient-eco hover:opacity-90">
                  <Link to="/dashboard">Try the Dashboard</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/devices">Explore Devices</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
