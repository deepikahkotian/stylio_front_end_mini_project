
import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';

interface FilterOption {
  id: string;
  label: string;
}

interface ProductFiltersProps {
  category?: string;
  onFilterChange: (filters: any) => void;
  activeFilters: any;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ 
  category, 
  onFilterChange,
  activeFilters,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [localFilters, setLocalFilters] = React.useState({ ...activeFilters });
  const [priceRange, setPriceRange] = React.useState([activeFilters.minPrice || 0, activeFilters.maxPrice || 5000]);

  // Default filter options based on category
  const subcategories: FilterOption[] = React.useMemo(() => {
    switch(category?.toLowerCase()) {
      case 'women':
        return [
          { id: 'dresses', label: 'Dresses' },
          { id: 'tops', label: 'Tops & Blouses' },
          { id: 'skirts', label: 'Skirts' },
          { id: 'pants', label: 'Pants & Jeans' },
          { id: 'outerwear', label: 'Outerwear' },
        ];
      case 'men':
        return [
          { id: 'shirts', label: 'Shirts' },
          { id: 'tshirts', label: 'T-shirts' },
          { id: 'pants', label: 'Pants & Jeans' },
          { id: 'jackets', label: 'Jackets' },
          { id: 'suits', label: 'Suits' },
        ];
      case 'kids':
        return [
          { id: 'boys', label: 'Boys' },
          { id: 'girls', label: 'Girls' },
          { id: 'infants', label: 'Infants' },
          { id: 'teens', label: 'Teens' },
        ];
      case 'accessories':
        return [
          { id: 'bags', label: 'Bags & Purses' },
          { id: 'jewelry', label: 'Jewelry' },
          { id: 'hats', label: 'Hats' },
          { id: 'sunglasses', label: 'Sunglasses' },
          { id: 'belts', label: 'Belts' },
        ];
      default:
        return [];
    }
  }, [category]);

  const sizes: FilterOption[] = [
    { id: 'XS', label: 'XS' },
    { id: 'S', label: 'S' },
    { id: 'M', label: 'M' },
    { id: 'L', label: 'L' },
    { id: 'XL', label: 'XL' },
    { id: 'XXL', label: 'XXL' },
  ];

  const colors: FilterOption[] = [
    { id: 'Black', label: 'Black' },
    { id: 'White', label: 'White' },
    { id: 'Blue', label: 'Blue' },
    { id: 'Red', label: 'Red' },
    { id: 'Green', label: 'Green' },
    { id: 'Yellow', label: 'Yellow' },
    { id: 'Pink', label: 'Pink' },
    { id: 'Purple', label: 'Purple' },
    { id: 'Brown', label: 'Brown' },
    { id: 'Grey', label: 'Grey' },
    { id: 'Orange', label: 'Orange' },
    { id: 'Multicolor', label: 'Multicolor' },
  ];

  const toggleFilter = (type: string, value: string) => {
    setLocalFilters(prev => {
      const currentValues = prev[type] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v: string) => v !== value)
        : [...currentValues, value];
      
      return { ...prev, [type]: newValues };
    });
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    setLocalFilters(prev => ({
      ...prev,
      minPrice: values[0],
      maxPrice: values[1]
    }));
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
    setIsOpen(false);
  };

  const clearFilters = () => {
    const emptyFilters = {
      subcategories: [],
      sizes: [],
      colors: [],
      minPrice: 0,
      maxPrice: 5000,
      sort: activeFilters.sort || 'newest'
    };
    setLocalFilters(emptyFilters);
    setPriceRange([0, 5000]);
    onFilterChange(emptyFilters);
    setIsOpen(false);
  };

  const activeFilterCount = React.useMemo(() => {
    let count = 0;
    if (localFilters.subcategories?.length) count += localFilters.subcategories.length;
    if (localFilters.sizes?.length) count += localFilters.sizes.length;
    if (localFilters.colors?.length) count += localFilters.colors.length;
    if (localFilters.minPrice > 0 || localFilters.maxPrice < 5000) count += 1;
    return count;
  }, [localFilters]);

  return (
    <div className="mb-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center gap-2">
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter size={16} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            
            {/* Quick filter buttons for subcategories */}
            {subcategories.length > 0 && (
              <div className="hidden md:flex gap-2 overflow-x-auto pb-1">
                {subcategories.slice(0, 4).map(subcat => (
                  <Button 
                    key={subcat.id}
                    variant={localFilters.subcategories?.includes(subcat.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      toggleFilter('subcategories', subcat.id);
                      // Apply filter immediately for quick filters
                      onFilterChange({
                        ...localFilters,
                        subcategories: localFilters.subcategories?.includes(subcat.id)
                          ? localFilters.subcategories.filter(id => id !== subcat.id)
                          : [...(localFilters.subcategories || []), subcat.id]
                      });
                    }}
                  >
                    {subcat.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <select 
              className="px-3 py-1 border rounded-md text-sm"
              value={localFilters.sort || 'newest'}
              onChange={(e) => {
                const newFilters = { ...localFilters, sort: e.target.value };
                setLocalFilters(newFilters);
                onFilterChange(newFilters);
              }}
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Popularity</option>
            </select>
          </div>
        </div>
        
        <SheetContent side="left" className="w-full sm:w-[350px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-xl">Filters</SheetTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute right-4 top-4"
              onClick={clearFilters}
            >
              Clear all
            </Button>
          </SheetHeader>
          
          <div className="mt-6 space-y-6">
            {/* Subcategories */}
            {subcategories.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {subcategories.map((subcat) => (
                    <div key={subcat.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`subcategory-${subcat.id}`}
                        checked={localFilters.subcategories?.includes(subcat.id)}
                        onCheckedChange={() => toggleFilter('subcategories', subcat.id)}
                      />
                      <label 
                        htmlFor={`subcategory-${subcat.id}`}
                        className="text-sm"
                      >
                        {subcat.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <Slider 
                  defaultValue={[localFilters.minPrice || 0, localFilters.maxPrice || 5000]} 
                  max={5000} 
                  step={100} 
                  value={priceRange}
                  onValueChange={handlePriceChange}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            {/* Sizes */}
            <div>
              <h3 className="font-medium mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <Button 
                    key={size.id}
                    variant={localFilters.sizes?.includes(size.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter('sizes', size.id)}
                    className="w-full"
                  >
                    {size.label}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Colors */}
            <div>
              <h3 className="font-medium mb-3">Color</h3>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => (
                  <div 
                    key={color.id} 
                    className={`flex items-center space-x-2 p-2 border rounded-md ${
                      localFilters.colors?.includes(color.id) ? 'border-primary bg-primary/5' : ''
                    }`}
                    onClick={() => toggleFilter('colors', color.id)}
                  >
                    <span 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: color.id.toLowerCase() === 'multicolor' 
                        ? 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
                        : color.id.toLowerCase() 
                      }}
                    />
                    <span className="text-sm">{color.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <SheetFooter className="mt-8">
            <Button onClick={applyFilters} className="w-full">
              Apply Filters
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductFilters;
