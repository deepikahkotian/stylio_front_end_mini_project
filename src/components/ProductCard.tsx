
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Product } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };
  
  return (
    <Link to={`/product/${product.id}`} className={cn("group relative", className)}>
      <div className="relative aspect-square overflow-hidden rounded-md stylio-card-hover bg-gray-100">
        {/* Product image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
        />
        
        {/* Wishlist button */}
        <button 
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
          onClick={handleWishlistToggle}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={cn(
              "h-4 w-4 transition-colors", 
              inWishlist ? "fill-primary text-primary" : "text-gray-600"
            )}
          />
        </button>
        
        {/* Sale tag */}
        {product.discount && product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-primary text-white px-2 py-0.5 text-xs font-medium rounded">
            {product.discount}% OFF
          </span>
        )}
        
        {/* New tag */}
        {product.newArrival && (
          <span className="absolute bottom-2 left-2 bg-black text-white px-2 py-0.5 text-xs font-medium rounded">
            NEW
          </span>
        )}
      </div>
      
      {/* Product info */}
      <div className="mt-2">
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1.5">
            {product.originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="font-medium">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          
          {product.rating && (
            <div className="flex items-center">
              <span className="text-xs text-amber-500">★</span>
              <span className="text-xs ml-0.5">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
