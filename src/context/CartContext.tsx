import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

// Define types
export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  category: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string; size?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number; size?: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' };

// Create initial state
const initialState: CartState = {
  items: [],
  isOpen: false,
};

// Load cart from localStorage if available
const loadCartFromStorage = (): CartState => {
  if (typeof window === 'undefined') {
    return initialState;
  }
  
  try {
    const storedCart = localStorage.getItem('caneCart');
    return storedCart ? JSON.parse(storedCart) : initialState;
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return initialState;
  }
};

// Create the reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: updatedItems, isOpen: true };
      } else {
        // New item, add to cart
        return { 
          ...state, 
          items: [...state.items, action.payload],
          isOpen: true
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        item => !(item.id === action.payload.id && item.size === action.payload.size)
      );
      return { ...state, items: updatedItems };
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id && item.size === action.payload.size) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, items: updatedItems };
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [] };
    
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    
    default:
      return state;
  }
};

// Create context
type CartContextType = {
  cart: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number, size?: string) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  cartCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Create provider component
const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('caneCart', JSON.stringify(cart));
  }, [cart]);

  // Helper functions
  const addItem = (item: Omit<CartItem, 'quantity'>, quantity = 1, size?: string) => {
    const cartItem = {
      ...item,
      quantity,
      size,
    };
    
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const removeItem = (id: string, size?: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
    
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    if (quantity < 1) {
      removeItem(id, size);
      return;
    }
    
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, size } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  // Calculate totals
  const cartCount = cart.items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create custom hook
function useCart(): CartContextType {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
}

// Export both the provider and hook
export { CartProvider, useCart };