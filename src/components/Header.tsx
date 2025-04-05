
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 fixed top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-eco flex items-center justify-center">
              <span className="text-white font-bold text-xs">HC²</span>
            </div>
            <span className="text-xl font-semibold">ClimateNexus</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/devices" className="text-foreground/80 hover:text-foreground transition-colors">
            Devices
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Button className="bg-gradient-eco hover:opacity-90">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg p-4 border-b z-50">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-foreground transition-colors p-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="text-foreground/80 hover:text-foreground transition-colors p-2"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/devices" 
              className="text-foreground/80 hover:text-foreground transition-colors p-2"
              onClick={toggleMenu}
            >
              Devices
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 hover:text-foreground transition-colors p-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Button className="bg-gradient-eco hover:opacity-90 w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
