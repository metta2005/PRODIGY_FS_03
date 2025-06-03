import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, TruckIcon, ArrowLeft, Star, ChevronRight, CheckCircle } from 'lucide-react';
import { getProductById } from '../data/products';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');
  
  if (!product) {
    return (
      <div className="pt-32 pb-12 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Product Not Found</h1>
          <p className="text-neutral-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button variant="primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // Format price with currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center text-sm">
          <Link to="/" className="text-neutral-500 hover:text-neutral-700">Home</Link>
          <ChevronRight size={16} className="mx-2 text-neutral-400" />
          <Link to="/products" className="text-neutral-500 hover:text-neutral-700">Products</Link>
          <ChevronRight size={16} className="mx-2 text-neutral-400" />
          <Link to={`/category/${product.category}`} className="text-neutral-500 hover:text-neutral-700 capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <ChevronRight size={16} className="mx-2 text-neutral-400" />
          <span className="text-neutral-900 font-medium truncate">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="md:sticky md:top-24 md:self-start">
            <div className="bg-white rounded-lg overflow-hidden shadow-product">
              <div className="relative pt-[100%]">
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-white text-sm font-medium px-2 py-1 rounded z-10">
                    {discountPercentage}% OFF
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Thumbnail Gallery (simplified) */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`cursor-pointer border rounded-md overflow-hidden ${i === 0 ? 'border-primary-500' : 'border-neutral-200'}`}
                >
                  <div className="relative pt-[100%]">
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              {product.name}
            </h1>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-warning-500 fill-warning-500'
                        : i < product.rating
                        ? 'text-warning-500'
                        : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-neutral-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="ml-3 text-lg text-neutral-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-accent-600 mt-1">
                  You save {formatPrice(product.originalPrice - product.price)} ({discountPercentage}%)
                </p>
              )}
            </div>
            
            {/* Short Description */}
            <p className="text-neutral-700 mb-6">
              {product.description}
            </p>
            
            {/* Features List */}
            {product.features && (
              <div className="mb-6">
                <h3 className="font-medium text-neutral-900 mb-2">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Quantity & Add to Cart */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="px-3 py-2 border border-neutral-300 rounded-l-md bg-neutral-100 text-neutral-700 disabled:opacity-50"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                  className="w-16 px-3 py-2 border-y border-neutral-300 text-center focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-3 py-2 border border-neutral-300 rounded-r-md bg-neutral-100 text-neutral-700"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                icon={<ShoppingBag size={20} />}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {}}
                icon={<Heart size={20} />}
              >
                Add to Wishlist
              </Button>
            </div>
            
            {/* Shipping & Returns */}
            <div className="bg-neutral-50 rounded-lg p-4 mb-8">
              <div className="flex items-start mb-3">
                <TruckIcon size={20} className="text-primary-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-neutral-900">Free Shipping</h4>
                  <p className="text-sm text-neutral-600">On orders over $50. Delivered in 2-5 business days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <ArrowLeft size={20} className="text-primary-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-neutral-900">Easy Returns</h4>
                  <p className="text-sm text-neutral-600">30-day return policy. See our return policy for details.</p>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-neutral-200 mb-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-2 text-sm font-medium border-b-2 ${
                    activeTab === 'description'
                      ? 'border-primary-500 text-primary-500'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`py-2 text-sm font-medium border-b-2 ${
                    activeTab === 'details'
                      ? 'border-primary-500 text-primary-500'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`py-2 text-sm font-medium border-b-2 ${
                    activeTab === 'reviews'
                      ? 'border-primary-500 text-primary-500'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Reviews ({product.reviewCount})
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'description' && (
                <div>
                  <p className="text-neutral-700">
                    {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-neutral-700 mt-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              )}
              
              {activeTab === 'details' && (
                <div>
                  <h3 className="font-medium text-lg mb-3">Product Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Material</span>
                      <span className="font-medium">Premium Quality</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Dimensions</span>
                      <span className="font-medium">12" x 8" x 4"</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Weight</span>
                      <span className="font-medium">2.5 lbs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Warranty</span>
                      <span className="font-medium">1 Year</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">Country of Origin</span>
                      <span className="font-medium">USA</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600">SKU</span>
                      <span className="font-medium">{product.id}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-lg">Customer Reviews</h3>
                    <Button variant="outline" size="sm">Write a Review</Button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Sample reviews */}
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="border-b border-neutral-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">John Doe</h4>
                          <span className="text-sm text-neutral-500">
                            {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={16}
                              className={j < 5 - i ? 'text-warning-500 fill-warning-500' : 'text-neutral-300'}
                            />
                          ))}
                        </div>
                        <p className="text-neutral-700">
                          {i === 0
                            ? "Absolutely love this product! It exceeded my expectations and the quality is outstanding. Highly recommend!"
                            : i === 1
                            ? "Great product for the price. Shipping was fast and the item looks exactly as pictured."
                            : "Good product but took a bit longer than expected to arrive. Overall satisfied with my purchase."}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="ghost">Load More Reviews</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;