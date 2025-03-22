
import React, { useState } from 'react';
import { Filter, ChevronDown, Heart, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { toast } from "@/components/ui/use-toast";

const products = [
  {
    id: '1',
    name: 'Hydrating Facial Serum',
    price: 64.00,
    image: 'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    isNew: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Vitamin C Complex',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Supplements',
    isBestseller: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Regenerating Night Cream',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    rating: 4.7,
    reviews: 76
  },
  {
    id: '4',
    name: 'Collagen Boost Capsules',
    price: 54.00,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Supplements',
    isNew: true,
    rating: 4.5,
    reviews: 52
  },
  {
    id: '5',
    name: 'Clarifying Face Wash',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    rating: 4.9,
    reviews: 104
  },
  {
    id: '6',
    name: 'Antioxidant Day Cream',
    price: 56.00,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    isBestseller: true,
    rating: 4.8,
    reviews: 93
  },
  {
    id: '7',
    name: 'Omega-3 Supplements',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Supplements',
    rating: 4.6,
    reviews: 68
  },
  {
    id: '8',
    name: 'Rejuvenating Eye Cream',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee140b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    rating: 4.7,
    reviews: 81
  }
];

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const productsPerPage = 8;
  
  const handleAddToCart = (product) => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  
  // Calculate products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  
  return (
    <div className="min-h-screen flex flex-col bg-cane-50">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-cane-950">Shop All Products</h1>
            <p className="mt-4 max-w-2xl mx-auto text-cane-700">
              Discover our collection of premium skincare and supplements designed to enhance your natural beauty.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center text-cane-950 border border-cane-200 rounded-full px-6 py-3 mb-4 md:mb-0 hover:bg-white transition-colors shadow-sm"
            >
              <Filter size={18} className="mr-2" />
              <span className="font-medium">Filter</span>
            </button>
            
            <div className="flex items-center">
              <span className="text-sm text-cane-600 mr-2">Sort by:</span>
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-cane-200 rounded-full px-6 py-3 pr-10 text-cane-950 font-medium hover:bg-cane-50 transition-colors focus:outline-none focus:ring-2 focus:ring-cane-500 shadow-sm"
                  value={sortBy}
                  onChange={handleSortChange}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to high</option>
                  <option value="price-high-low">Price: High to low</option>
                  <option value="rating">Highest rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-cane-700 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {filterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 p-8 bg-white rounded-lg shadow-md">
              <div>
                <h3 className="font-medium text-lg mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Skincare</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Supplements</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Bundles</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Price</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">$100+</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Concern</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Hydration</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Anti-aging</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Brightening</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Type</h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">New</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-cane-950 focus:ring-cane-500 w-5 h-5" />
                    <span className="ml-3 text-cane-800">Bestseller</span>
                  </label>
                </div>
              </div>
              
              <div className="md:col-span-4 mt-6 flex justify-between">
                <button className="px-6 py-2 border border-cane-200 rounded-full text-cane-800 hover:bg-cane-100 transition-colors">
                  Clear All
                </button>
                <button className="px-6 py-2 bg-cane-900 text-white rounded-full hover:bg-cane-800 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {currentProducts.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full aspect-square object-cover"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-cane-900 text-white text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="absolute top-3 left-3 bg-cane-700 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}
                  <button 
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-cane-50 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={16} className="text-cane-700" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-cane-950 font-medium line-clamp-2">{product.name}</h3>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                          className="text-yellow-500"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-cane-600">({product.reviews})</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-medium text-cane-950">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-cane-900 text-white text-sm px-4 py-2 rounded-full hover:bg-cane-800 transition-colors"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16">
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                        className="cursor-pointer rounded-full border border-cane-200 hover:bg-cane-100" 
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        isActive={currentPage === index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`cursor-pointer rounded-full ${
                          currentPage === index + 1 
                            ? "bg-cane-900 text-white" 
                            : "hover:bg-cane-100"
                        }`}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                        className="cursor-pointer rounded-full border border-cane-200 hover:bg-cane-100" 
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
