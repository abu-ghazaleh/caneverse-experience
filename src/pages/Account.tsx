// src/pages/Account.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/auth/authContext';

const Account = () => {
  const { currentUser, userProfile } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-cane-950">My Account</h1>
            <p className="mt-4 max-w-2xl mx-auto text-cane-700">
              Welcome back, {userProfile?.displayName || currentUser?.email}
            </p>
          </div>
          
          {/* Account content here */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-serif font-medium text-cane-950 mb-4">Account Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-cane-600">Email</p>
                <p className="font-medium">{currentUser?.email}</p>
              </div>
              {userProfile?.displayName && (
                <div>
                  <p className="text-sm text-cane-600">Name</p>
                  <p className="font-medium">{userProfile.displayName}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-cane-600">Account Created</p>
                <p className="font-medium">{userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;