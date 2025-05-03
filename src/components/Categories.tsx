
import React from "react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: 1,
    name: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/category/women",
    color: "from-pink-500/80 to-pink-500/30"
  },
  {
    id: 2,
    name: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/category/men",
    color: "from-blue-500/80 to-blue-500/30"
  },
  {
    id: 3,
    name: "Kids Collection",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/category/kids",
    color: "from-yellow-500/80 to-yellow-500/30"
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/category/accessories",
    color: "from-purple-500/80 to-purple-500/30"
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative rounded-lg overflow-hidden aspect-square shadow-md hover:shadow-lg transition-shadow stylio-card-hover"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t opacity-80",
                category.color
              )} />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium transform transition-transform group-hover:scale-105">
                    Shop Now
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
