import { motion } from "framer-motion";
import { ArrowRight, Star, Utensils, Wifi, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet access throughout the hotel.",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Fine Dining",
      description: "Experience exquisite cuisine at our award-winning restaurants.",
    },
    {
      icon: <Wine className="h-6 w-6" />,
      title: "Premium Bar",
      description: "Enjoy carefully crafted cocktails and premium spirits at our elegant bar.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white hotel-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium mb-6">
              Welcome to Luxury Living
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200">
              Experience unparalleled comfort and elegance at Disa Rixos
            </p>
            <Button
              asChild
              size="lg"
              className="bg-hotel-gold hover:bg-hotel-brown text-white"
            >
              <Link to="/booking">
                Book Your Stay
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-hotel-beige">
        <div className="hotel-container">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">
              Experience Excellence
            </h2>
            <p className="text-gray-600">
              Discover the perfect blend of luxury, comfort, and exceptional service
              at Disa Rixos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-hotel-gold/10 text-hotel-gold mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding">
        <div className="hotel-container">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center space-x-1 text-hotel-gold mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-serif text-gray-900 mb-4">
              "An unforgettable experience of luxury and comfort. The attention to
              detail and service quality exceeded all expectations."
            </blockquote>
            <cite className="text-gray-600 not-italic">
              — Sarah Johnson, New York
            </cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;