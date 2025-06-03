import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LocalShop</h3>
            <p className="text-neutral-400 max-w-xs">
              Your one-stop destination for quality products with personalized service from your local community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-400 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-neutral-400 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-neutral-400 hover:text-white transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-neutral-400 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-neutral-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-accent-500" />
                <span className="text-neutral-400">
                  123 Main Street, Anytown, ST 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent-500" />
                <span className="text-neutral-400">
                  (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent-500" />
                <span className="text-neutral-400">
                  info@localshop.com
                </span>
              </li>
              <li className="pt-2">
                <h4 className="font-medium text-white mb-1">Store Hours</h4>
                <p className="text-neutral-400">Mon-Fri: 9AM-8PM</p>
                <p className="text-neutral-400">Sat: 10AM-6PM</p>
                <p className="text-neutral-400">Sun: 11AM-5PM</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} LocalShop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-neutral-500 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-neutral-500 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/accessibility" className="text-neutral-500 text-sm hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;