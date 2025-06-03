import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, itemCount, subtotal, clearCart } = useCart();
  
  // Format price with currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  // Calculate shipping (free over $50)
  const shippingCost = subtotal >= 50 ? 0 : 5.99;
  
  // Calculate tax (simplified example: 8%)
  const taxRate = 0.08;
  const taxAmount = subtotal * taxRate;
  
  // Calculate total
  const total = subtotal + shippingCost + taxAmount;
  
  if (items.length === 0) {
    return (
      <div className="pt-32 pb-12 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <ShoppingBag size={64} className="mx-auto mb-6 text-neutral-300" />
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products">
            <Button variant="primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Shopping Cart</h1>
          <div className="flex items-center text-sm">
            <Link to="/" className="text-neutral-500 hover:text-neutral-700">Home</Link>
            <ChevronRight size={16} className="mx-2 text-neutral-400" />
            <span className="text-neutral-900 font-medium">Cart</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <div className="p-6 border-b border-neutral-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Cart Items ({itemCount})
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-sm text-neutral-500 hover:text-error-500 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-neutral-200">
                {items.map((item) => (
                  <div key={item.product.id} className="p-6">
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-neutral-50 flex justify-between items-center">
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
                >
                  <ArrowRight size={18} className="mr-2 rotate-180" />
                  Continue Shopping
                </Link>
                
                <div className="text-right">
                  <span className="text-neutral-700 mr-2">Subtotal:</span>
                  <span className="font-semibold text-neutral-900">{formatPrice(subtotal)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <div className="p-6 border-b border-neutral-200">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Order Summary
                </h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tax</span>
                  <span className="font-medium">{formatPrice(taxAmount)}</span>
                </div>
                
                <div className="pt-4 border-t border-neutral-200">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold text-neutral-900">Total</span>
                    <span className="font-bold text-neutral-900">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-neutral-50">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={() => {}}
                >
                  Proceed to Checkout
                </Button>
                
                <div className="mt-4 text-center text-sm text-neutral-500">
                  <p>Secure checkout powered by Stripe</p>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-6 bg-white rounded-lg shadow-soft p-6">
              <h3 className="font-medium text-neutral-900 mb-3">We Accept</h3>
              <div className="flex space-x-2">
                {['visa', 'mastercard', 'amex', 'discover'].map((card) => (
                  <div key={card} className="w-12 h-8 bg-neutral-100 rounded flex items-center justify-center">
                    <span className="text-xs uppercase font-semibold text-neutral-500">{card}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="font-medium text-neutral-900 mt-6 mb-3">Need Help?</h3>
              <p className="text-sm text-neutral-600">
                Our customer service is available Mon-Fri: 9AM-5PM. 
                <a href="#" className="text-primary-500 hover:text-primary-600 ml-1">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;