
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-eco flex items-center justify-center">
                <span className="text-white font-bold text-xs">HC²</span>
              </div>
              <span className="text-xl font-semibold">ClimateNexus</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-4">
              Sustainable cooling and carbon capture technology to combat climate change.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard" className="text-foreground/80 hover:text-foreground">Dashboard</Link></li>
              <li><Link to="/devices" className="text-foreground/80 hover:text-foreground">Devices</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Technical Specs</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Use Cases</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/80 hover:text-foreground">About Us</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Contact</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/70 mb-4 md:mb-0">
            © {currentYear} ClimateNexus. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/80 hover:text-foreground">Privacy</a>
            <a href="#" className="text-foreground/80 hover:text-foreground">Terms</a>
            <a href="#" className="text-foreground/80 hover:text-foreground">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
