import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, name, price, image, category });
  };
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-cane-100 transition-all duration-300 ease-out-expo relative hover-lift">
        <div 
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse",
            isImageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            onLoad={() => setIsImageLoaded(true)}
            className={cn(
              "h-full w-full object-cover object-center transition-all duration-700",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        </Link>
        
        {/* Product badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-cane-950 text-white text-xs px-2.5 py-1 rounded font-medium">
              New
            </span>
          )}
          {isBestseller && (
            <span className="bg-cane-800 text-white text-xs px-2.5 py-1 rounded font-medium">
              Bestseller
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-2 transition-all duration-300 ease-out-expo",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <button 
            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition-colors duration-200"
            aria-label="Add to wishlist"
          >
            <Heart size={20} className="text-cane-950" />
          </button>
          <button 
            className="bg-cane-950 p-2.5 rounded-full hover:bg-cane-800 transition-colors duration-200 flex-1"
            aria-label="Add to bag"
            onClick={handleAddToCart}
          >
            <div className="flex items-center justify-center text-white gap-2">
              <ShoppingBag size={18} />
              <span className="text-sm font-medium">Add to Bag</span>
            </div>
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="text-xs text-cane-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h3 className="text-base font-medium text-cane-950 transition-colors duration-200 hover:text-cane-700">
            {name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-medium text-cane-950">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;