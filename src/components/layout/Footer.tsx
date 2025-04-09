
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [signature] = useState('/signature.png'); // Default placeholder, can be updated via CMS/admin

  return (
    <footer className="w-full bg-white border-t border-nyt-gray-light mt-16 pt-12 pb-8 animate-fade-in dark:bg-nyt-black dark:border-nyt-gray-dark">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* About Me Section */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-6">Prince of Mahmudabad</h3>
            <div className="space-y-4 text-nyt-gray-dark dark:text-nyt-gray-light">
              <p className="text-sm leading-relaxed">
                As the Prince of Mahmudabad, I am dedicated to preserving our rich cultural heritage 
                while embracing the opportunities of the modern age. My family's history stretches back 
                centuries, with a legacy of art, architecture, and statesmanship.
              </p>
              <p className="text-sm leading-relaxed">
                Today, I focus on documenting our royal history, creating educational films, and 
                engaging in philanthropic work that honors our past while building toward a brighter future. 
                My career spans traditional royal duties and contemporary endeavors.
              </p>
              <p className="text-sm leading-relaxed">
                Through this platform, I share glimpses into our heritage, my personal journey, and the 
                ongoing work to preserve the cultural significance of Mahmudabad for generations to come.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-6">
              {signature && (
                <img 
                  src={signature} 
                  alt="Prince of Mahmudabad's signature" 
                  className="h-12 opacity-80 dark:opacity-60"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
            </div>
          </div>
          
          {/* Right Column - Social, Features & News */}
          <div className="space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Connect</h3>
              <div className="flex space-x-5">
                <a 
                  href="https://instagram.com/princemahmudabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-nyt-gray-dark hover:text-nyt-blue transition-colors duration-300 dark:text-nyt-gray-light"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/princemahmudabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-nyt-gray-dark hover:text-nyt-blue transition-colors duration-300 dark:text-nyt-gray-light"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/princemahmudabad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-nyt-gray-dark hover:text-nyt-blue transition-colors duration-300 dark:text-nyt-gray-light"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Features */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Explore</h3>
              <ul className="space-y-3">
                <li><Link to="/section/heritage" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Royal Heritage</Link></li>
                <li><Link to="/section/documentaries" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Documentary Films</Link></li>
                <li><Link to="/section/gallery" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Photo Gallery</Link></li>
              </ul>
            </div>
            
            {/* News */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Recent Updates</h3>
              <ul className="space-y-3">
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Heritage preservation initiatives</li>
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Upcoming documentary premiere</li>
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Annual cultural foundation event</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="heading-divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="mb-4 md:mb-0">
            <h2 className="font-broadway font-bold text-xl">Mahmudabad Royal Heritage</h2>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs font-sans text-nyt-gray-dark mb-2 dark:text-nyt-gray-light">
              © {currentYear} Office of the Prince of Mahmudabad. All Rights Reserved.
            </p>
            <div className="flex space-x-4 justify-center md:justify-end">
              <Link to="/privacy" className="text-xs font-sans text-nyt-gray-dark hover:text-nyt-blue animated-link dark:text-nyt-gray-light">Privacy</Link>
              <Link to="/terms" className="text-xs font-sans text-nyt-gray-dark hover:text-nyt-blue animated-link dark:text-nyt-gray-light">Terms</Link>
              <Link to="/contact" className="text-xs font-sans text-nyt-gray-dark hover:text-nyt-blue animated-link dark:text-nyt-gray-light">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
