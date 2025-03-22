
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cane-950 text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-medium tracking-wide">
              Cané
            </Link>
            <p className="mt-4 text-cane-300 text-sm">
              Premium skincare and supplements crafted with natural ingredients, designed to enhance your beauty and wellness journey.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cane-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cane-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-cane-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/shop" className="text-cane-300 hover:text-white transition-colors text-sm">All Products</Link></li>
              <li><Link to="/category/skincare" className="text-cane-300 hover:text-white transition-colors text-sm">Skincare</Link></li>
              <li><Link to="/category/supplements" className="text-cane-300 hover:text-white transition-colors text-sm">Supplements</Link></li>
              <li><Link to="/category/bundles" className="text-cane-300 hover:text-white transition-colors text-sm">Bundles</Link></li>
              <li><Link to="/category/gifts" className="text-cane-300 hover:text-white transition-colors text-sm">Gift Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-cane-300 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/ingredients" className="text-cane-300 hover:text-white transition-colors text-sm">Ingredients</Link></li>
              <li><Link to="/sustainability" className="text-cane-300 hover:text-white transition-colors text-sm">Sustainability</Link></li>
              <li><Link to="/blog" className="text-cane-300 hover:text-white transition-colors text-sm">Journal</Link></li>
              <li><Link to="/contact" className="text-cane-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider">Customer Care</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/shipping" className="text-cane-300 hover:text-white transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-cane-300 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/privacy" className="text-cane-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-cane-300 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cane-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cane-400 text-sm">&copy; {new Date().getFullYear()} Cané. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a href="#" className="text-cane-400 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-cane-400 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-cane-400 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
