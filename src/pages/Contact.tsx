
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-cane-950">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-cane-700">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif font-medium text-cane-950 mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cane-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-cane-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cane-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cane-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-cane-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cane-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cane-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-cane-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cane-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns & Exchanges</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cane-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-cane-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cane-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cane-950 text-white py-3 px-6 rounded-md hover:bg-cane-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-medium text-cane-950 mb-4">Contact Information</h2>
              <div className="bg-cane-50 rounded-lg p-6 mb-6">
                <div className="flex items-start mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cane-700 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-cane-950 mb-1">Address</h3>
                    <p className="text-cane-700 text-sm">123 Wellness Blvd, Suite 200<br />San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cane-700 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-cane-950 mb-1">Phone</h3>
                    <p className="text-cane-700 text-sm">+1 (800) 555-CANE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cane-700 mt-1 mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-cane-950 mb-1">Email</h3>
                    <p className="text-cane-700 text-sm">hello@canebeauty.com</p>
                  </div>
                </div>
              </div>
              
              <h3 className="font-medium text-cane-950 mb-3">Business Hours</h3>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-cane-700">Monday - Friday</span>
                  <span className="text-cane-950 font-medium">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cane-700">Saturday</span>
                  <span className="text-cane-950 font-medium">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cane-700">Sunday</span>
                  <span className="text-cane-950 font-medium">Closed</span>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our office" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
