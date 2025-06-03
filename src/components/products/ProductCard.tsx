import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  // Format price with currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-product transition-all duration-300 hover:shadow-card bg-white animate-fade-in">
      {/* Discount Tag */}
      {product.originalPrice && (
        <div className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded z-10">
          {discountPercentage}% OFF
        </div>
      )}
      
      {/* Wishlist Button */}
      <button
        className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-neutral-100"
        aria-label="Add to wishlist"
        onClick={(e) => e.preventDefault()}
      >
        <Heart size={18} className="text-neutral-700" />
      </button>
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative pt-[100%] overflow-hidden bg-neutral-100">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      
      {/* Quick Add Button (shown on hover) */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 transform translate-y-4 group-hover:translate-y-0">
        <Button 
          variant="primary" 
          size="sm" 
          fullWidth 
          onClick={handleAddToCart}
          icon={<ShoppingBag size={16} />}
        >
          Add to Cart
        </Button>
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-base font-medium text-neutral-800 mb-1 line-clamp-1 group-hover:text-primary-500 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-baseline mt-1 mb-2">
            <span className="text-lg font-semibold text-neutral-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-neutral-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          {/* Ratings */}
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-warning-500'
                      : i < product.rating
                      ? 'text-warning-500'
                      : 'text-neutral-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.934l-6.18 3.25 1.18-6.876L.5 7.938l6.902-1L10 .684l2.598 6.254 6.902 1-4.5 4.37 1.18 6.876-6.18-3.25z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-neutral-500">
              ({product.reviewCount})
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;