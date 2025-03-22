
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      
      {/* Brand Values Section */}
      <section className="py-24 px-4 md:px-8 bg-cane-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <span className="text-sm font-medium text-cane-600 uppercase tracking-wide">Our Philosophy</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-medium text-cane-950 max-w-3xl mx-auto">
              Elevating natural beauty through the science of botanical skincare
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="text-center fade-in-section">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cane-900 text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.26 10a14 14 0 0 0 0 4"></path>
                  <path d="M4 12H2"></path>
                  <path d="M5.5 8.5C7.5 6.5 11 6.5 14 8.5s6.5 4.5 6.5 8.5H5.5c0-4 2.5-6 6.5-8 4-2 8-1.5 10 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-cane-950 mb-3">Sustainable Sourcing</h3>
              <p className="text-cane-700">
                We source our ingredients responsibly, prioritizing organic farms and sustainable harvesting methods that respect both nature and communities.
              </p>
            </div>
            
            <div className="text-center fade-in-section">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cane-900 text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0"></path>
                  <path d="M12 2v1"></path>
                  <path d="M12 21v-1"></path>
                  <path d="M4.93 4.93l.7.7"></path>
                  <path d="M18.36 18.36l-.7-.7"></path>
                  <path d="M2 12h1"></path>
                  <path d="M21 12h-1"></path>
                  <path d="M4.93 19.07l.7-.7"></path>
                  <path d="M18.36 5.64l-.7.7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-cane-950 mb-3">Scientific Formulation</h3>
              <p className="text-cane-700">
                Our team of expert dermatologists and cosmetic chemists create clinically proven formulas that deliver real results without harmful additives.
              </p>
            </div>
            
            <div className="text-center fade-in-section">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cane-900 text-white mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 2h6l3 7H6l3-7Z"></path>
                  <path d="M12 9v13"></path>
                  <path d="M9 22h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-medium text-cane-950 mb-3">Cruelty-Free Promise</h3>
              <p className="text-cane-700">
                We never test on animals and are committed to ethical practices throughout our supply chain, from ingredient sourcing to packaging.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <span className="text-sm font-medium text-cane-600 uppercase tracking-wide">Testimonials</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-medium text-cane-950">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cane-50 p-8 rounded-lg fade-in-section">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" className="text-yellow-500" />
                ))}
              </div>
              <p className="text-cane-700 mb-6">
                "The Hydrating Facial Serum completely transformed my skin. After just two weeks, my complexion is noticeably more radiant and my fine lines have diminished."
              </p>
              <div className="font-medium">
                <p className="text-cane-950">Emily R.</p>
                <p className="text-cane-600 text-sm">Verified Customer</p>
              </div>
            </div>
            
            <div className="bg-cane-50 p-8 rounded-lg fade-in-section">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" className="text-yellow-500" />
                ))}
              </div>
              <p className="text-cane-700 mb-6">
                "I've tried countless vitamin supplements, but Cané's Vitamin C Complex has made a real difference. My energy levels are up and my immune system feels stronger."
              </p>
              <div className="font-medium">
                <p className="text-cane-950">Michael T.</p>
                <p className="text-cane-600 text-sm">Verified Customer</p>
              </div>
            </div>
            
            <div className="bg-cane-50 p-8 rounded-lg fade-in-section">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" className="text-yellow-500" />
                ))}
              </div>
              <p className="text-cane-700 mb-6">
                "The Regenerating Night Cream is now an essential part of my evening routine. I wake up with my skin feeling nourished, plump, and incredibly soft."
              </p>
              <div className="font-medium">
                <p className="text-cane-950">Sarah K.</p>
                <p className="text-cane-600 text-sm">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="py-24 px-4 md:px-8 bg-cane-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section">
            <span className="text-sm font-medium text-cane-600 uppercase tracking-wide">@canéskincare</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-medium text-cane-950">
              Follow Us on Instagram
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-in-section">
            {[
              'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1577467014586-ff8093965148?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1530630458944-0d9c743562a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1595352165656-7f8d24960c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
            ].map((img, index) => (
              <a 
                key={index} 
                href="#" 
                className="block aspect-square overflow-hidden rounded-lg group"
              >
                <img 
                  src={img} 
                  alt="Instagram" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 px-4 md:px-8 bg-cane-900 text-white">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Join Our Newsletter
          </h2>
          <p className="mb-8 text-cane-300">
            Sign up to receive updates on new products, special offers, and skincare tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-cane-800 border border-cane-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder:text-cane-500 text-white"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-white text-cane-950 font-medium rounded-md hover:bg-cane-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-cane-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
