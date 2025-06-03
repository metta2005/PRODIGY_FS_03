import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { categories } from '../../data/products';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-primary-500">LocalShop</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/' ? 'text-primary-500' : 'text-neutral-800'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium transition-colors hover:text-primary-500">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              to="/products" 
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/products' ? 'text-primary-500' : 'text-neutral-800'
              }`}
            >
              All Products
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/about' ? 'text-primary-500' : 'text-neutral-800'
              }`}
            >
              About Us
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-neutral-700 hover:text-primary-500 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/wishlist" 
              className="text-neutral-700 hover:text-primary-500 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>
            <Link 
              to="/account" 
              className="text-neutral-700 hover:text-primary-500 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            <Link 
              to="/cart" 
              className="relative text-neutral-700 hover:text-primary-500 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-accent-500 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link 
              to="/cart" 
              className="relative text-neutral-700"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-accent-500 rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-700"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white animate-slide-down">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link 
              to="/" 
              className="block py-3 text-base font-medium text-neutral-800 border-b border-neutral-200"
            >
              Home
            </Link>
            <div>
              <button 
                className="flex items-center justify-between w-full py-3 text-base font-medium text-neutral-800 border-b border-neutral-200"
              >
                <span>Categories</span>
              </button>
              <div className="pl-4 space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="block py-2 text-sm text-neutral-700"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/products" 
              className="block py-3 text-base font-medium text-neutral-800 border-b border-neutral-200"
            >
              All Products
            </Link>
            <Link 
              to="/about" 
              className="block py-3 text-base font-medium text-neutral-800 border-b border-neutral-200"
            >
              About Us
            </Link>
            <Link 
              to="/account" 
              className="block py-3 text-base font-medium text-neutral-800 border-b border-neutral-200"
            >
              My Account
            </Link>
            <Link 
              to="/wishlist" 
              className="block py-3 text-base font-medium text-neutral-800 border-b border-neutral-200"
            >
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;