import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/auth/authContext';
import Button from './Button';
import Cart from './Cart';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { openCart, cartCount } = useCart();
  const { currentUser, signOut } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  const handleSignOut = async () => {
    try {
      await signOut();
      setIsMobileMenuOpen(false);
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Skincare', path: '/category/skincare' },
    { name: 'Supplements', path: '/category/supplements' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300',
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="font-serif text-2xl font-medium tracking-wide text-cane-950 transition-opacity duration-200 hover:opacity-80"
            aria-label="Cané Home"
          >
            Cané
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-all duration-200 hover:text-cane-600',
                  location.pathname === link.path ? 'text-cane-950' : 'text-cane-700'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-5">
            <button 
              className="text-cane-950 hover:text-cane-600 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to={currentUser ? "/account" : "/login"}
              className="text-cane-950 hover:text-cane-600 transition-colors duration-200"
              aria-label={currentUser ? "Account" : "Sign in"}
            >
              <User size={20} />
              {currentUser && (
                <span className="absolute -top-1 -right-1 bg-green-500 rounded-full w-2 h-2"></span>
              )}
            </Link>
            <button 
              className="text-cane-950 hover:text-cane-600 transition-colors duration-200 relative"
              aria-label="Shopping bag"
              onClick={openCart}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cane-950 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-cane-950 hover:text-cane-600 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white flex flex-col transition-transform duration-300 ease-out-expo pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-medium py-2 border-b border-cane-100 transition-all duration-200',
                location.pathname === link.path ? 'text-cane-950' : 'text-cane-700'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            {currentUser ? (
              <>
                <Link to="/account" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" fullWidth>My Account</Button>
                </Link>
                <Button 
                  variant="outline" 
                  fullWidth 
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" fullWidth>Sign In</Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" fullWidth>Create Account</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Cart Component */}
      <Cart />
    </>
  );
};

export default Navbar;