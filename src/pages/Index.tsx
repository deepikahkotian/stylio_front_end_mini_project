
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts title="New Arrivals" />
      
      {/* Summer Sale Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Sale Up To 50% Off</h2>
              <p className="text-lg mb-6">
                Discover our summer collection and enjoy amazing discounts on selected items.
                Limited time offer!
              </p>
              <Button 
                onClick={() => navigate('/category/sale')}
                className="bg-stylio text-white hover:bg-stylio/90"
                size="lg"
              >
                Shop the Sale
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Summer Sale"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts title="Best Sellers" />
      
      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Fashion",
                description: "We're committed to reducing our environmental impact through sustainable practices and eco-friendly materials.",
                icon: "🌱"
              },
              {
                title: "Satisfaction Guaranteed",
                description: "Not happy with your purchase? Return within 30 days for a full refund or exchange.",
                icon: "✓"
              },
              {
                title: "Made with Quality",
                description: "Each piece is carefully crafted with premium materials to ensure durability and comfort.",
                icon: "⭐"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 rounded-full bg-secondary text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
