
import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    id: '1',
    name: 'Hydrating Facial Serum',
    price: 64.00,
    image: 'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    isNew: true
  },
  {
    id: '2',
    name: 'Vitamin C Complex',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Supplements',
    isBestseller: true
  },
  {
    id: '3',
    name: 'Regenerating Night Cream',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare'
  },
  {
    id: '4',
    name: 'Collagen Boost Capsules',
    price: 54.00,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Supplements',
    isNew: true
  },
  {
    id: '5',
    name: 'Clarifying Face Wash',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare'
  },
  {
    id: '6',
    name: 'Antioxidant Day Cream',
    price: 56.00,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    isBestseller: true
  },
  {
    id: '7',
    name: 'Omega-3 Supplements',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Supplements'
  },
  {
    id: '8',
    name: 'Rejuvenating Eye Cream',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee140b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare'
  }
];

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-reveal-delay-1 opacity-0">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-cane-950">Shop All Products</h1>
            <p className="mt-4 max-w-2xl mx-auto text-cane-700">
              Discover our collection of premium skincare and supplements designed to enhance your natural beauty.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 animate-reveal-delay-2 opacity-0">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center text-cane-950 border border-cane-200 rounded px-4 py-2 mb-4 md:mb-0 hover:bg-cane-50 transition-colors"
            >
              <Filter size={18} className="mr-2" />
              <span className="font-medium">Filter</span>
            </button>
            
            <div className="flex items-center">
              <span className="text-sm text-cane-600 mr-2">Sort by:</span>
              <div className="relative">
                <select className="appearance-none bg-transparent border border-cane-200 rounded px-4 py-2 pr-8 text-cane-950 font-medium hover:bg-cane-50 transition-colors focus:outline-none focus:ring-2 focus:ring-cane-500">
                  <option>Featured</option>
                  <option>Price: Low to high</option>
                  <option>Price: High to low</option>
                  <option>Newest</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-cane-700 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {filterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-6 bg-cane-50 rounded-lg animate-reveal-delay-2 opacity-0">
              <div>
                <h3 className="font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Skincare</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Supplements</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Bundles</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">$100+</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Concern</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Hydration</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Anti-aging</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Brightening</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">New</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500" />
                    <span className="ml-2 text-sm">Bestseller</span>
                  </label>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-reveal-delay-3 opacity-0">
            {products.map((product, index) => (
              <div key={product.id} className="fade-in-section" style={{ transitionDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
