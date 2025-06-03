import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary-900 opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-4">
              Your Local Store, <br />
              <span className="text-accent-500">Now Online</span>
            </h1>
            
            <p className="text-lg text-neutral-700 max-w-lg mb-8">
              Discover quality products from your favorite local store, now available for online shopping with the same personalized service you know and love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {}}
              >
                Shop Now
              </Button>
              
              <Link to="/about" className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors">
                Learn more about us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-soft">
                <p className="text-2xl font-bold text-primary-500">500+</p>
                <p className="text-sm text-neutral-600">Products</p>
              </div>
              <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-soft">
                <p className="text-2xl font-bold text-primary-500">24h</p>
                <p className="text-sm text-neutral-600">Delivery</p>
              </div>
              <div className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-soft">
                <p className="text-2xl font-bold text-primary-500">15+</p>
                <p className="text-sm text-neutral-600">Years Local</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Local store products" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-neutral-200 ring-2 ring-white overflow-hidden"
                      >
                        <img 
                          src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} 
                          alt="Customer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Happy Customers</p>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star}
                          className="w-4 h-4 text-warning-500" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-lg shadow-md">
                <p className="text-sm font-bold">New Arrivals</p>
                <p className="text-xs">Just Added!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;