
import React from 'react';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedProducts } from '@/data/products';

interface FeaturedProductsProps {
  title: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title }) => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['featured-products', title],
    queryFn: () => getFeaturedProducts(title, 4),
  });

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
