
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleShopWomen = () => {
    navigate('/category/women');
  };

  const handleShopMen = () => {
    navigate('/category/men');
  };

  return (
    <section className="relative">
      {/* Hero background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
      
      <div className="relative h-[70vh] min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
          alt="Stylio Fashion" 
          className="w-full h-full object-cover" 
        />
        
        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in text-stylio">
            STYLIO
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 animate-fade-in">
            Elevate your style with our new summer collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-stylio hover:bg-stylio/90 text-white"
              onClick={handleShopWomen}
            >
              Shop Women
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100"
              onClick={handleShopMen}
            >
              Shop Men
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-4 -mt-12 relative z-30">
        {[
          { title: "Free Shipping", desc: "Orders over ₹1,999" },
          { title: "Easy Returns", desc: "30 day return policy" },
          { title: "Secure Checkout", desc: "100% secure payment" },
          { title: "24/7 Support", desc: "Dedicated support" },
        ].map((feature, index) => (
          <div 
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="font-medium text-sm">{feature.title}</h3>
            <p className="text-xs text-gray-600 mt-1">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
