
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentDate] = useState(new Date());
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full">
      {/* Top date and subscription bar */}
      <div className="w-full bg-white border-b border-nyt-gray-light">
        <div className="container-fluid py-2 flex justify-between items-center">
          <p className="text-caption font-sans text-nyt-gray">{formatDate(currentDate)}</p>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-caption font-sans">Welcome, {user?.name}</span>
              <button 
                onClick={handleLogoutClick}
                className="text-caption font-sans text-nyt-red animated-link"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/subscribe" className="text-caption font-sans text-nyt-blue animated-link">Subscribe Now</Link>
          )}
        </div>
      </div>

      {/* Main navigation */}
      <nav className={cn(
        "w-full bg-white transition-all duration-300 border-b border-nyt-gray-light z-50",
        isScrolled ? "sticky top-0 shadow-sm" : ""
      )}>
        <div className="container-fluid py-4">
          <div className="flex items-center justify-between">
            {/* Left: Menu button */}
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 transition-transform duration-300 hover:scale-105"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="font-broadway font-bold text-2xl tracking-tight animate-fade-in">Jatin Dangi</h1>
            </Link>

            {/* Right: Icons */}
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="p-2 transition-transform duration-300 hover:scale-105">
                <Search className="h-5 w-5" />
              </button>
              
              {!isLoggedIn && (
                <button 
                  onClick={handleLoginClick} 
                  aria-label="Login" 
                  className="p-2 transition-transform duration-300 hover:scale-105"
                >
                  <User className="h-5 w-5" />
                </button>
              )}
              
              {isLoggedIn && (
                <button 
                  onClick={() => navigate('/dashboard')}
                  aria-label="Dashboard" 
                  className="p-2 transition-transform duration-300 hover:scale-105"
                  title="Dashboard"
                >
                  <User className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden md:flex justify-center mt-4 space-x-8 overflow-x-auto">
            <Link to="/" className="nav-link">Writings</Link>
            <Link to="/section/design" className="nav-link">Digital Design</Link>
            <Link to="/section/photography" className="nav-link">Photography</Link>
            <Link to="/section/video" className="nav-link">Video Editing</Link>
            <Link to="/section/cs" className="nav-link">CS Projects</Link>
            <Link to="/section/biology" className="nav-link">Biology Research</Link>
            {isLoggedIn && (
              <Link to="/dashboard" className="nav-link text-nyt-red">Dashboard</Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-50 transition-transform duration-300 transform", 
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container-fluid py-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-broadway font-bold text-xl">Menu</h2>
            <button 
              onClick={toggleMenu}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <Link to="/" className="text-headline font-serif hover:text-nyt-blue transition-colors" onClick={toggleMenu}>Writings</Link>
            <Link to="/section/design" className="text-headline font-serif hover:text-nyt-blue transition-colors" onClick={toggleMenu}>Digital Design</Link>
            <Link to="/section/photography" className="text-headline font-serif hover:text-nyt-blue transition-colors" onClick={toggleMenu}>Photography</Link>
            <Link to="/section/video" className="text-headline font-serif hover:text-nyt-blue transition-colors" onClick={toggleMenu}>Video Editing</Link>
            <Link to="/section/cs" className="text-headline font-serif hover:text-nyt-blue transition-colors" onClick={toggleMenu}>CS Projects</Link>
            <Link to="/section/biology" className="text-headline font-serif hover:text-nyt-blue transition-colors" onClick={toggleMenu}>Biology Research</Link>
            
            {isLoggedIn && (
              <Link to="/dashboard" className="text-headline font-serif text-nyt-red hover:text-nyt-blue transition-colors" onClick={toggleMenu}>Dashboard</Link>
            )}
            
            {isLoggedIn ? (
              <button 
                onClick={() => {
                  logout();
                  toggleMenu();
                  navigate('/');
                }} 
                className="text-headline font-serif text-nyt-red hover:text-nyt-blue transition-colors text-left"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-headline font-serif hover:text-nyt-blue transition-colors" onClick={toggleMenu}>Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
