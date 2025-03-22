import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Truck, 
  Package, 
  Shield, 
  MinusCircle, 
  PlusCircle,
  ShoppingBag,
  Heart,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { useCart } from '@/context/CartContext';
import { Slider } from '@/components/ui/slider';
import ProductCard from '@/components/ProductCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock product data
const product = {
  id: '1',
  name: 'Hydrating Facial Serum',
  price: 64.00,
  description: 'A lightweight, fast-absorbing serum that delivers intense hydration and helps restore skins natural moisture balance. Formulated with hyaluronic acid, vitamin B5, and botanical extracts to plump and smooth the skin.',
  benefits: [
    'Deeply hydrates and plumps skin',
    'Reduces the appearance of fine lines',
    'Improves skin texture and tone',
    'Boosts skins natural moisture retention'
  ],
  ingredients: 'Aqua, Glycerin, Propanediol, Sodium Hyaluronate, Panthenol, Aloe Barbadensis Leaf Juice, Camellia Sinensis Leaf Extract, Cucumis Sativus Fruit Extract, Rosa Canina Fruit Extract, Sodium PCA, Allantoin, Xanthan Gum, Caprylyl Glycol, Ethylhexylglycerin, Phenoxyethanol, Citric Acid.',
  howToUse: 'Apply 3-4 drops to clean, damp skin morning and evening. Gently press and pat into skin, then follow with your favorite moisturizer.',
  size: '30ml / 1.0 fl oz',
  images: [
    'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1592136957897-b2b6ca21e10d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ],
  reviews: 128,
  rating: 4.8,
  category: 'Skincare'
};

// Related products
const relatedProducts = [
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
    rating: 4.9,
    reviews: 67
  },
  {
    id: '4',
    name: 'Collagen Boost Capsules',
    price: 54.00,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Supplements',
    rating: 4.5,
    reviews: 42
  },
  {
    id: '5',
    name: 'Clarifying Face Wash',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Skincare',
    rating: 4.7,
    reviews: 105
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState('30ml');
  const [ratingValue, setRatingValue] = useState([4]);
  const { addItem } = useCart();
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      size: selectedSize
    }, quantity);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-cane-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-cane-600">
            <Link to="/" className="hover:text-cane-900">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/shop" className="hover:text-cane-900">Shop</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-cane-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-cane-50">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((img, index) => (
                  <button 
                    key={index}
                    className={`w-20 h-20 rounded-xl overflow-hidden ${selectedImage === index ? 'ring-2 ring-cane-900' : 'opacity-70'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif font-medium text-cane-950">{product.name}</h1>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-cane-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-medium text-cane-950">${product.price.toFixed(2)}</span>
                </div>
              </div>
              
              <p className="text-cane-700">{product.description}</p>
              
              {/* Size selector */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-cane-900">Size</label>
                <div className="flex space-x-3">
                  {['15ml', '30ml', '50ml'].map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-full border ${
                        selectedSize === size 
                          ? 'border-cane-900 bg-cane-900 text-white' 
                          : 'border-cane-200 text-cane-800 hover:border-cane-300'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity selector */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-cane-900">Quantity</label>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={decrementQuantity}
                    className="text-cane-600 hover:text-cane-900"
                    aria-label="Decrease quantity"
                  >
                    <MinusCircle size={24} />
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="text-cane-600 hover:text-cane-900"
                    aria-label="Increase quantity"
                  >
                    <PlusCircle size={24} />
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-4 pt-4">
                <Button fullWidth variant="primary" size="lg" onClick={handleAddToCart}>
                  <ShoppingBag size={18} />
                  Add to Cart
                </Button>
                <button 
                  className="h-12 w-12 flex items-center justify-center rounded-full border border-cane-200 text-cane-800 hover:bg-cane-50"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
              
              {/* Shipping info */}
              <div className="border-t border-b border-cane-100 py-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Truck size={20} className="text-cane-800 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cane-900">Free Shipping</h4>
                    <p className="text-sm text-cane-600">Free standard shipping on orders over $75</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package size={20} className="text-cane-800 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cane-900">Easy Returns</h4>
                    <p className="text-sm text-cane-600">30-day hassle-free returns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield size={20} className="text-cane-800 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-cane-900">Satisfaction Guaranteed</h4>
                    <p className="text-sm text-cane-600">Love it or get a full refund</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 px-4 bg-cane-50">
        <div className="container mx-auto">
          <div className="border-b border-cane-200">
            <div className="flex space-x-8">
              {['description', 'ingredients', 'how to use', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 font-medium text-sm uppercase tracking-wide ${
                    activeTab === tab 
                      ? 'text-cane-900 border-b-2 border-cane-900' 
                      : 'text-cane-600 hover:text-cane-800'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none prose-cane">
                <p className="text-cane-700">{product.description}</p>
                <h4 className="font-medium text-lg text-cane-900 mt-6 mb-4">Benefits</h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cane-900 mr-2">•</span>
                      <span className="text-cane-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div className="prose max-w-none prose-cane">
                <p className="text-cane-700">{product.ingredients}</p>
              </div>
            )}
            
            {activeTab === 'how to use' && (
              <div className="prose max-w-none prose-cane">
                <p className="text-cane-700">{product.howToUse}</p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-medium text-cane-900 mb-2">Customer Reviews</h3>
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-cane-700">{product.rating} out of 5</span>
                    </div>
                    <p className="text-sm text-cane-600">{product.reviews} reviews</p>
                  </div>
                  
                  <div className="md:w-2/3 mt-6 md:mt-0">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-cane-900 mb-2">Rate this product</label>
                        <Slider 
                          max={5} 
                          step={0.5} 
                          value={ratingValue} 
                          onValueChange={setRatingValue}
                          className="max-w-md"
                        />
                        <div className="mt-2 text-sm text-cane-600">
                          Your rating: {ratingValue[0]} out of 5
                        </div>
                      </div>
                      
                      <Button variant="outline" size="md">
                        Write a Review
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Sample reviews */}
                <div className="border-t border-cane-200 pt-8 space-y-8">
                  {[
                    {
                      name: "Emily R.",
                      date: "April 15, 2023",
                      rating: 5,
                      review: "The Hydrating Facial Serum completely transformed my skin. After just two weeks, my complexion is noticeably more radiant and my fine lines have diminished."
                    },
                    {
                      name: "Michael T.",
                      date: "March 22, 2023",
                      rating: 4,
                      review: "Great product that absorbs quickly and doesn't feel sticky. I've noticed my skin feels more hydrated throughout the day. The only downside is the price point."
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-cane-100 pb-8 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-cane-900">{review.name}</h4>
                        <span className="text-sm text-cane-600">{review.date}</span>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <p className="text-cane-700">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-serif font-medium text-cane-950 mb-8">You May Also Like</h2>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {relatedProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end mt-6 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductPage;