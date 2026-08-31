import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('app_user');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'Alex Morgan',
      email: 'alex.morgan@enterprise.io',
      role: 'Senior Product Manager',
      department: 'Engineering & Design',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    };
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('app_authenticated') === 'true';
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = (email, password) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const loggedUser = {
            name: email.split('@')[0].replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()) || 'Alex Morgan',
            email: email,
            role: 'Product Lead',
            department: 'Operations',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
          };
          setUser(loggedUser);
          setIsAuthenticated(true);
          localStorage.setItem('app_authenticated', 'true');
          localStorage.setItem('app_user', JSON.stringify(loggedUser));
          setIsLoading(false);
          resolve({ success: true });
        } else {
          setIsLoading(false);
          reject({ message: 'Please enter both email and password.' });
        }
      }, 600);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('app_authenticated');
  };

  const updateUserProfile = (updatedData) => {
    const newUserData = { ...user, ...updatedData };
    setUser(newUserData);
    localStorage.setItem('app_user', JSON.stringify(newUserData));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
