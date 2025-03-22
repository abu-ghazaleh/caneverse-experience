
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingBag, Heart, ChevronDown, ArrowRight, Truck, RotateCcw, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';

// Sample product data - in a real app, this would come from an API
const productData = {
  id: '1',
  name: 'Hydrating Facial Serum',
  price: 64.00,
  description: 'A deeply hydrating facial serum that replenishes moisture and restores radiance. Formulated with hyaluronic acid, vitamin E, and botanical extracts to lock in moisture and protect against environmental stressors.',
  benefits: [
    'Deep hydration and moisture retention',
    'Improves skin elasticity and firmness',
    'Reduces appearance of fine lines',
    'Antioxidant protection against environmental damage'
  ],
  ingredients: 'Aqua, Glycerin, Sodium Hyaluronate, Tocopherol (Vitamin E), Panthenol, Aloe Barbadensis Leaf Juice, Rosa Damascena Flower Water, Calendula Officinalis Flower Extract, Chamomilla Recutita Flower Extract, Sodium PCA, Allantoin, Phenoxyethanol, Ethylhexylglycerin.',
  howToUse: 'Apply 3-4 drops to clean skin morning and evening. Gently press into face and neck, followed by moisturizer. For best results, use daily as part of your skincare routine.',
  images: [
    'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ],
  category: 'Skincare',
  tags: ['hydrating', 'anti-aging', 'serum'],
  size: '30ml',
  rating: 4.8,
  reviews: 124,
  isNew: true,
  stock: 35
};

// Sample related products
const relatedProducts = [
  {
    id: '3',
    name: 'Regenerating Night Cream',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare'
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
    id: '8',
    name: 'Rejuvenating Eye Cream',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee140b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare'
  }
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  
  // In a real app, we would fetch the product data based on the ID
  // For now, we'll just use our sample data
  const product = productData;
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  // Generate array of stars for rating display
  const renderStars = () => {
    const stars = [];
    const rating = Math.round(product.rating);
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          fill={i <= rating ? 'currentColor' : 'none'} 
          className={i <= rating ? 'text-yellow-500' : 'text-gray-300'} 
        />
      );
    }
    
    return stars;
  };
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-cane-100 animate-reveal-delay-1 opacity-0">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 animate-reveal-delay-2 opacity-0">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`aspect-square rounded-md overflow-hidden bg-cane-100 hover:opacity-95 transition-opacity ${
                      index === selectedImage ? 'ring-2 ring-cane-950' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="animate-reveal-delay-2 opacity-0">
              <div className="mb-2">
                <span className="inline-block text-sm font-medium text-cane-600 uppercase tracking-wide">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-cane-950 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {renderStars()}
                </div>
                <span className="text-sm text-cane-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-medium text-cane-950">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="mb-8">
                <p className="text-cane-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-cane-950">Size</span>
                  <span className="text-sm text-cane-600">{product.size}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                  <div className="relative flex-1 max-w-[120px]">
                    <select
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-full appearance-none border border-cane-200 rounded-md py-2 pl-4 pr-10 bg-white text-cane-950 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cane-950"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <ChevronDown 
                      size={16} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-cane-600 pointer-events-none" 
                    />
                  </div>
                  
                  <Button size="lg" fullWidth>
                    <div className="flex items-center justify-center">
                      <ShoppingBag size={18} className="mr-2" />
                      <span>Add to Bag</span>
                    </div>
                  </Button>
                  
                  <button 
                    className="flex-shrink-0 p-3 border border-cane-200 rounded-md text-cane-950 hover:bg-cane-50 transition-colors"
                    aria-label="Add to Wishlist"
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4 border-t border-cane-100 pt-6">
                <div className="flex items-start">
                  <Truck size={18} className="text-cane-600 mt-0.5 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-cane-950">Free Shipping</p>
                    <p className="text-xs text-cane-600">On all orders over $75</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RotateCcw size={18} className="text-cane-600 mt-0.5 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-cane-950">Easy Returns</p>
                    <p className="text-xs text-cane-600">30-day money back guarantee</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield size={18} className="text-cane-600 mt-0.5 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-cane-950">Secure Checkout</p>
                    <p className="text-xs text-cane-600">SSL encrypted payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mb-16 animate-reveal-delay-3 opacity-0">
            <div className="border-b border-cane-200 mb-6">
              <div className="flex flex-wrap -mb-px">
                <button
                  className={`mr-8 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'description'
                      ? 'border-cane-950 text-cane-950'
                      : 'border-transparent text-cane-600 hover:text-cane-950'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`mr-8 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'ingredients'
                      ? 'border-cane-950 text-cane-950'
                      : 'border-transparent text-cane-600 hover:text-cane-950'
                  }`}
                  onClick={() => setActiveTab('ingredients')}
                >
                  Ingredients
                </button>
                <button
                  className={`mr-8 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'howToUse'
                      ? 'border-cane-950 text-cane-950'
                      : 'border-transparent text-cane-600 hover:text-cane-950'
                  }`}
                  onClick={() => setActiveTab('howToUse')}
                >
                  How to Use
                </button>
              </div>
            </div>
            
            <div className="prose prose-cane max-w-none">
              {activeTab === 'description' && (
                <div>
                  <p className="text-cane-700 mb-6">{product.description}</p>
                  <h3 className="text-xl font-serif font-medium text-cane-950 mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cane-600 mr-2">•</span>
                        <span className="text-cane-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'ingredients' && (
                <div>
                  <p className="text-cane-700">{product.ingredients}</p>
                </div>
              )}
              
              {activeTab === 'howToUse' && (
                <div>
                  <p className="text-cane-700">{product.howToUse}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Related Products */}
          <div className="pt-8 border-t border-cane-200 animate-reveal-delay-3 opacity-0">
            <h2 className="text-2xl font-serif font-medium text-cane-950 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((product, index) => (
                <div key={product.id} className="fade-in-section" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
