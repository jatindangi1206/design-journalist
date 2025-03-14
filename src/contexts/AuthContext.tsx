
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  name: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => false,
  logout: () => {},
  loading: false,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is already logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (loggedIn) {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
        setIsLoggedIn(true);
      }
    }
    setLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    // Validate credentials
    if (username === 'jatindangi07' && password === 'Footballer07@') {
      const user = { username: 'jatindangi07', name: 'Jatin' };
      setUser(user);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
