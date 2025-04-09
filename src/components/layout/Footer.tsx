
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
            <h3 className="font-serif font-bold text-xl mb-6">Jatin Dangi</h3>
            <div className="space-y-4 text-nyt-gray-dark dark:text-nyt-gray-light">
              <p className="text-sm leading-relaxed">
                I'm a Computer Science & Biology major, passionate about the intersection of digital health 
                and modern biological complex systems. When I'm not coding or in the lab, you'll find me 
                on the football field or designing websites.
              </p>
              <p className="text-sm leading-relaxed">
                I specialize in software engineering, system design, and optimizing large-scale SaaS platforms. 
                Currently, I'm planning a solo trip to Japan—a journey I've been anticipating for a while.
              </p>
              <p className="text-sm leading-relaxed">
                Those who know me would say I'm funny and outgoing, yet I deeply appreciate solitude. 
                I embrace emptiness and have never feared boredom—it's often where my best ideas come to life.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-6">
              {signature && (
                <img 
                  src={signature} 
                  alt="Jatin Dangi's signature" 
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
                  href="https://instagram.com/jatindangi07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-nyt-gray-dark hover:text-nyt-blue transition-colors duration-300 dark:text-nyt-gray-light"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/jatindangi1206" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-nyt-gray-dark hover:text-nyt-blue transition-colors duration-300 dark:text-nyt-gray-light"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/jatin-dangi" 
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
              <h3 className="font-serif font-bold text-lg mb-4">Features</h3>
              <ul className="space-y-3">
                <li><Link to="/section/technology" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Tech Articles</Link></li>
                <li><Link to="/section/science" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Biology Research</Link></li>
                <li><Link to="/dashboard" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Dashboard</Link></li>
              </ul>
            </div>
            
            {/* News */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">News</h3>
              <ul className="space-y-3">
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Planning solo trip to Japan</li>
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Working on SaaS optimization</li>
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Latest football tournament: Semi-finalist</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="heading-divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="mb-4 md:mb-0">
            <h2 className="font-broadway font-bold text-xl">The Thought</h2>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs font-sans text-nyt-gray-dark mb-2 dark:text-nyt-gray-light">
              © {currentYear} Jatin Dangi. All Rights Reserved.
            </p>
            <div className="flex space-x-4 justify-center md:justify-end">
              <Link to="/privacy" className="text-xs font-sans text-nyt-gray-dark hover:text-nyt-blue animated-link dark:text-nyt-gray-light">Privacy</Link>
              <Link to="/terms" className="text-xs font-sans text-nyt-gray-dark hover:text-nyt-blue animated-link dark:text-nyt-gray-light">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
