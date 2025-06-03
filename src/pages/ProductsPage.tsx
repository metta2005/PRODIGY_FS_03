import React, { useState } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';
import { Filter, SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import Button from '../components/ui/Button';

const ProductsPage: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states (simplified for demo)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Unique categories from products
  const categories = [...new Set(products.map(product => product.category))];
  
  // Filter products (simplified)
  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesPrice && matchesCategory;
  });
  
  return (
    <div className="pt-20 pb-12">
      <div className="bg-neutral-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">All Products</h1>
            <p className="text-neutral-600">
              Browse our complete collection of quality products. Use filters to find exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg shadow-soft p-6">
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          }
                        }}
                        className="rounded text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-neutral-700 capitalize">{category.replace('-', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-3">Price Range</h3>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-neutral-500">${priceRange[0]}</span>
                    <span className="text-sm text-neutral-500">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-500 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">In Stock</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-500 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">On Sale</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth
                  onClick={() => {
                    setPriceRange([0, 500]);
                    setSelectedCategories([]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex items-center">
                <span className="text-neutral-600 mr-2">
                  {filteredProducts.length} Products
                </span>
                <div className="hidden md:flex items-center ml-4 space-x-2">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-1.5 rounded ${view === 'grid' ? 'bg-primary-100 text-primary-500' : 'text-neutral-500 hover:text-neutral-700'}`}
                    aria-label="Grid view"
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-1.5 rounded ${view === 'list' ? 'bg-primary-100 text-primary-500' : 'text-neutral-500 hover:text-neutral-700'}`}
                    aria-label="List view"
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select className="appearance-none pl-3 pr-10 py-2 border border-neutral-300 rounded-md bg-white text-neutral-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Best Selling</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-neutral-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                
                <button
                  className="md:hidden flex items-center bg-neutral-100 hover:bg-neutral-200 py-2 px-3 rounded-md text-neutral-700"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter size={18} className="mr-2" />
                  Filters
                </button>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {isFilterOpen && (
              <div className="md:hidden bg-white rounded-lg shadow-md p-4 mb-6 animate-slide-down">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-lg">Filters</h3>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="text-neutral-500"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedCategories([...selectedCategories, category]);
                              } else {
                                setSelectedCategories(selectedCategories.filter(c => c !== category));
                              }
                            }}
                            className="rounded text-primary-500 focus:ring-primary-500"
                          />
                          <span className="ml-2 text-neutral-700 capitalize">{category.replace('-', ' ')}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="px-2">
                      <input
                        type="range"
                        min="0"
                        max="500"
                        step="10"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-neutral-500">${priceRange[0]}</span>
                        <span className="text-sm text-neutral-500">${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      fullWidth
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        setPriceRange([0, 500]);
                        setSelectedCategories([]);
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} columns={4} />
            ) : (
              <div className="py-12 text-center">
                <SlidersHorizontal size={48} className="mx-auto mb-4 text-neutral-400" />
                <h3 className="text-xl font-medium text-neutral-800 mb-2">No products found</h3>
                <p className="text-neutral-600">
                  Try changing your filters or search criteria.
                </p>
              </div>
            )}
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                  Previous
                </button>
                <button className="px-3 py-1 rounded bg-primary-500 text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                  2
                </button>
                <button className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                  3
                </button>
                <span className="px-2 text-neutral-500">...</span>
                <button className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;