
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import Button from './Button';
import { Link } from 'react-router-dom';

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
  }
];

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-in-section">
          <div>
            <span className="text-sm font-medium text-cane-600 uppercase tracking-wide">Featured Collection</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-medium text-cane-950">Bestselling Products</h2>
          </div>
          <Link to="/shop" className="mt-4 md:mt-0 group flex items-center text-cane-950 font-medium">
            View All Collection
            <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="fade-in-section" style={{ transitionDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <Button size="lg">
            <Link to="/shop" className="flex items-center">
              Shop All Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
