
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const translateY = scrollPosition * 0.4;
      
      heroRef.current.style.opacity = opacity > 0 ? String(opacity) : '0';
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen-dynamic overflow-hidden bg-cane-50">
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full object-cover hero-mask"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541943466803-709fe3a7ac8f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.15
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full pt-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-cane-900 px-3 py-1 rounded-full animate-reveal-delay-1 opacity-0">
              <p className="text-xs font-medium tracking-wide text-white uppercase">Discover nature's luxury</p>
            </div>
            
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-cane-950 animate-reveal-delay-2 opacity-0">
              Elevate your natural beauty
            </h1>
            
            <p className="mt-6 text-lg text-cane-700 max-w-lg animate-reveal-delay-3 opacity-0">
              Luxurious formulas crafted with care. Experience natural skincare and supplements designed for your well-being.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-reveal-delay-3 opacity-0">
              <Button size="lg">
                <Link to="/shop" className="flex items-center">
                  Shop Collection
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center animate-bounce">
        <div className="w-12 h-12 flex items-center justify-center rounded-full glass">
          <ArrowRight size={20} className="text-cane-950 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
