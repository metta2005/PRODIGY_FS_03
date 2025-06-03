import React from 'react';
import { products } from '../../data/products';
import ProductGrid from '../products/ProductGrid';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products (products with original price - on sale)
  const featuredProducts = products
    .filter(product => product.originalPrice)
    .slice(0, 4);
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              Featured Products
            </h2>
            <p className="text-neutral-600 max-w-2xl">
              Discover our most popular items at special prices. Limited-time offers on quality products.
            </p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0">
            <Button variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;