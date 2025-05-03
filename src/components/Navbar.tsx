
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Search, Menu, User, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, profile, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Women", "Men", "Kids", "Accessories", "Sale"];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };
  
  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-stylio">
              STYLIO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link key={category} to={`/category/${category.toLowerCase()}`} className="text-sm font-medium hover:text-stylio transition-colors">
                {category}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>

            {/* User account */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              onClick={() => user ? navigate('/account') : navigate('/auth')}
              title={user ? `Logged in as ${user.email}` : "Sign in / Register"}
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate('/wishlist')}
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stylio text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Button>

            {/* Shopping cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stylio text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div 
          className={cn(
            "pb-4 overflow-hidden transition-all duration-300",
            isSearchOpen ? "h-16 opacity-100" : "h-0 opacity-0"
          )}
        >
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-stylio"
              aria-label="Search"
            />
            <Button 
              type="submit" 
              className="absolute right-1 top-1 bg-stylio hover:bg-stylio/90"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container h-full flex flex-col">
          <div className="flex items-center justify-between py-4 border-b">
            <Link to="/" className="text-2xl font-bold text-stylio">STYLIO</Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col py-8 space-y-6">
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/category/${category.toLowerCase()}`}
                className="text-lg font-medium hover:text-stylio transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t py-4">
            <div className="flex flex-col space-y-4">
              {user ? (
                <>
                  <Link to="/account" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-5 w-5" />
                    <span>My Account</span>
                  </Link>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="flex items-center space-x-2 text-red-500">
                    <X className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link to="/auth" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <User className="h-5 w-5" />
                  <span>Login / Register</span>
                </Link>
              )}
              <Link to="/wishlist" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="bg-stylio text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="h-5 w-5" />
                <span>Shopping Cart</span>
                {cartCount > 0 && (
                  <span className="bg-stylio text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-auto">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
