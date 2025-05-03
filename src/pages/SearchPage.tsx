
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useQuery } from '@tanstack/react-query';
import { searchProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [filters, setFilters] = useState({
    subcategories: [],
    sizes: [],
    colors: [],
    minPrice: 0,
    maxPrice: 5000,
    sort: 'newest'
  });
  
  const { data: searchResults = [], isLoading, refetch } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => searchProducts(searchQuery),
    enabled: searchQuery.length > 0,
  });

  // Filter search results locally after fetching
  const filteredResults = React.useMemo(() => {
    let filtered = [...searchResults];
    
    // Apply filters
    if (filters.subcategories.length > 0) {
      filtered = filtered.filter(product => 
        product.subcategory && filters.subcategories.includes(product.subcategory)
      );
    }
    
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes && product.sizes.some(size => filters.sizes.includes(size))
      );
    }
    
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors && product.colors.some(color => filters.colors.includes(color))
      );
    }
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= filters.minPrice && product.price <= filters.maxPrice
    );
    
    // Apply sorting
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
          break;
        case 'popular':
          filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
      }
    }
    
    return filtered;
  }, [searchResults, filters]);

  // Re-run the query when search params change
  useEffect(() => {
    if (searchQuery) {
      refetch();
    }
  }, [searchQuery, refetch]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600 mb-6">
          {searchQuery ? `Showing results for "${searchQuery}"` : 'Enter a search term to find products'}
        </p>
        
        {searchQuery && (
          <ProductFilters 
            onFilterChange={handleFilterChange} 
            activeFilters={filters}
          />
        )}
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        ) : (
          <>
            {!searchQuery ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium">Enter a search term</h2>
                <p className="text-gray-600 mt-2">Use the search bar above to find products</p>
              </div>
            ) : filteredResults.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium">No products found</h2>
                <p className="text-gray-600 mt-2">Try a different search term or check out our featured products</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredResults.map(product => (
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

export default SearchPage;
