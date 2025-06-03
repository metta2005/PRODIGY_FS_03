import React, { useState } from 'react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend service
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription status after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };
  
  return (
    <section className="py-12 md:py-16 bg-primary-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with New Arrivals & Exclusive Offers
          </h2>
          <p className="text-primary-100 mb-8">
            Subscribe to our newsletter and be the first to know about new products, special promotions, and local events.
          </p>
          
          {isSubscribed ? (
            <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4 animate-fade-in">
              <p className="text-white font-medium">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-2 rounded-md bg-white bg-opacity-10 border border-primary-400 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                type="submit" 
                variant="secondary"
              >
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-primary-200 text-sm mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;