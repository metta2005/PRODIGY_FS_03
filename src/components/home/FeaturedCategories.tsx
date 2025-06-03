import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-neutral-600 max-w-2xl">
            Browse our carefully curated collection of products across multiple categories, all hand-selected from local vendors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md bg-white h-60 md:h-72">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-white text-opacity-80">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;