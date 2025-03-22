
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-cane-950">About Cané</h1>
            <p className="mt-4 max-w-2xl mx-auto text-cane-700">
              Our journey to redefining beauty and wellness through natural ingredients and science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif font-medium text-cane-950 mb-4">Our Story</h2>
              <p className="text-cane-700 mb-4">
                Founded in 2020, Cané began with a simple mission: to create effective skincare and supplements that harness the power of nature, backed by scientific research.
              </p>
              <p className="text-cane-700 mb-4">
                Our founder, after struggling to find products that were both natural and effective, decided to create a line that would bridge the gap between synthetic products and purely natural alternatives that often lacked efficacy.
              </p>
              <p className="text-cane-700">
                Today, Cané is recognized for its innovative formulations that combine the best of nature with cutting-edge science, creating products that not only work but respect both your body and the environment.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-80 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cané team working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-cane-50 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-serif font-medium text-cane-950 mb-6 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cane-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cane-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="font-medium text-cane-950 mb-2">Science-Backed</h3>
                <p className="text-cane-700 text-sm">Every formula is developed with scientific research and tested for efficacy.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cane-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cane-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-medium text-cane-950 mb-2">Natural Ingredients</h3>
                <p className="text-cane-700 text-sm">We prioritize natural, sustainable ingredients that are kind to your body and the planet.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cane-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cane-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="font-medium text-cane-950 mb-2">Ethical Practices</h3>
                <p className="text-cane-700 text-sm">We're committed to ethical sourcing, cruelty-free testing, and eco-friendly packaging.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-medium text-cane-950 mb-6 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Elena Petrov" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-cane-950">Elena Petrov</h3>
                <p className="text-cane-600 text-sm">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="David Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-cane-950">David Chen</h3>
                <p className="text-cane-600 text-sm">Chief Scientific Officer</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Sara Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-cane-950">Sara Johnson</h3>
                <p className="text-cane-600 text-sm">Head of Product Development</p>
              </div>
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Marcus Williams" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-cane-950">Marcus Williams</h3>
                <p className="text-cane-600 text-sm">Sustainability Director</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
