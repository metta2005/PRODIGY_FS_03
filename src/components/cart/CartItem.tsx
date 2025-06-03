import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrementQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  // Format price with currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  return (
    <div className="flex flex-col sm:flex-row py-6 border-b border-neutral-200 animate-fade-in">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 bg-neutral-100 rounded-md overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex-1 sm:ml-4 flex flex-col sm:flex-row sm:items-start justify-between">
        <div className="flex-1">
          <h3 className="text-base font-medium text-neutral-800 mb-1">{product.name}</h3>
          <p className="text-sm text-neutral-500 mb-2">Category: {product.category}</p>
          <div className="flex items-center sm:mt-auto">
            {/* Quantity Controls */}
            <div className="flex items-center border border-neutral-300 rounded-md">
              <button
                onClick={handleDecrementQuantity}
                className="px-2 py-1 text-neutral-500 hover:text-neutral-700 focus:outline-none"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="px-2 py-1 text-sm min-w-[2rem] text-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrementQuantity}
                className="px-2 py-1 text-neutral-500 hover:text-neutral-700 focus:outline-none"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            
            {/* Remove Button (Mobile) */}
            <button
              onClick={handleRemove}
              className="ml-4 sm:hidden text-neutral-500 hover:text-error-500 focus:outline-none"
              aria-label="Remove item"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="flex items-start justify-between mt-4 sm:mt-0 sm:ml-6">
          {/* Price */}
          <div className="text-right">
            <span className="text-base font-medium text-neutral-900">
              {formatPrice(product.price * quantity)}
            </span>
            {quantity > 1 && (
              <p className="text-xs text-neutral-500">
                {formatPrice(product.price)} each
              </p>
            )}
          </div>
          
          {/* Remove Button (Desktop) */}
          <button
            onClick={handleRemove}
            className="hidden sm:block ml-6 text-neutral-400 hover:text-error-500 focus:outline-none"
            aria-label="Remove item"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;