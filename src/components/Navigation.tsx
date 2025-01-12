import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="hotel-container">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-semibold text-hotel-brown">
              Disa Rixos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-hotel-gold ${
                  isActive(item.path)
                    ? "text-hotel-brown"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-hotel-gold hover:bg-hotel-brown text-white"
            >
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 inset-x-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 animate-fade-in">
            <div className="hotel-container py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-base font-medium transition-colors hover:text-hotel-gold ${
                    isActive(item.path)
                      ? "text-hotel-brown"
                      : "text-gray-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-hotel-gold hover:bg-hotel-brown text-white"
              >
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;