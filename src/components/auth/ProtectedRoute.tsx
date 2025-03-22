import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../auth/authContext';

const ProtectedRoute: React.FC = () => {
  const { currentUser, loading } = useAuth();
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cane-600"></div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;