import React from 'react';
import { X, Trash2, MinusCircle, PlusCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Button from '@/components/Button';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from '@/components/ui/sheet';

const CartItem = ({ item }: { item: any }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex py-4 border-b border-cane-100">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-cane-100">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-cane-900">
          <h3>
            <Link to={`/product/${item.id}`} className="hover:text-cane-600">
              {item.name}
            </Link>
          </h3>
          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-cane-500">{item.category}</p>
        {item.size && (
          <p className="mt-1 text-sm text-cane-500">Size: {item.size}</p>
        )}
        
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border border-cane-200 rounded-full">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
              className="p-1 text-cane-600 hover:text-cane-900"
              aria-label="Decrease quantity"
            >
              <MinusCircle size={16} />
            </button>
            <span className="mx-2 text-cane-900 w-6 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
              className="p-1 text-cane-600 hover:text-cane-900"
              aria-label="Increase quantity"
            >
              <PlusCircle size={16} />
            </button>
          </div>
          
          <button
            onClick={() => removeItem(item.id, item.size)}
            className="text-cane-600 hover:text-cane-900"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cart, closeCart, cartCount, subtotal, clearCart } = useCart();

  return (
    <Sheet open={cart.isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Your Cart
              <span className="ml-2 rounded-full bg-cane-900 px-2 py-0.5 text-xs text-white">
                {cartCount}
              </span>
            </span>
            <button
              onClick={closeCart}
              className="rounded-md text-cane-600 hover:text-cane-900"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col flex-1 overflow-y-auto py-6 px-1">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-4 h-64">
              <ShoppingBag className="h-12 w-12 text-cane-300" />
              <p className="text-cane-600 text-lg">Your cart is empty</p>
              <Button variant="primary" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flow-root">
                <div className="divide-y divide-cane-100">
                  {cart.items.map((item) => (
                    <CartItem key={`${item.id}-${item.size || 'default'}`} item={item} />
                  ))}
                </div>
              </div>

              <div className="border-t border-cane-100 pt-6 mt-6">
                <div className="flex justify-between text-base font-medium text-cane-900 mb-2">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <p className="text-sm text-cane-500 mb-6">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="space-y-3">
                  <Button variant="primary" size="lg" fullWidth>
                    Checkout
                  </Button>
                  <Button variant="outline" size="lg" fullWidth onClick={closeCart}>
                    Continue Shopping
                  </Button>
                  {cart.items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-sm text-cane-600 hover:text-cane-900 flex items-center justify-center mt-2"
                    >
                      <Trash2 size={14} className="mr-1" />
                      Clear Cart
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;