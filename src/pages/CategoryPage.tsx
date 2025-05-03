
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filters, setFilters] = useState({
    subcategories: [],
    sizes: [],
    colors: [],
    minPrice: 0,
    maxPrice: 5000,
    sort: 'newest'
  });
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', category, filters],
    queryFn: () => getProducts(category, undefined, filters.sort, undefined, filters),
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 capitalize">{category}'s Collection</h1>
        
        <ProductFilters 
          category={category} 
          onFilterChange={handleFilterChange} 
          activeFilters={filters}
        />
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium">No products found</h2>
                <p className="text-gray-600 mt-2">Try adjusting your filters or checking out our other categories</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
