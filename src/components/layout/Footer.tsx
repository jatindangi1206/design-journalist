
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
                I'm a Computer Science & Biology major, passionate about the intersection of digital design, 
                photography, video editing, and modern biological complex systems. When I'm not coding or in the lab, you'll find me 
                behind a camera or designing new digital experiences.
              </p>
              <p className="text-sm leading-relaxed">
                I specialize in software engineering, system design, and creative digital media. 
                My work bridges technical expertise with creative expression, allowing me to develop solutions 
                that are both functional and visually compelling.
              </p>
              <p className="text-sm leading-relaxed">
                I believe in the power of interdisciplinary approaches to solve complex problems.
                My background in both CS and Biology gives me a unique perspective on how technology
                can enhance our understanding of natural systems and improve human experiences.
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
            
            {/* Portfolio */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Portfolio</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Writings</Link></li>
                <li><Link to="/section/design" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Digital Design</Link></li>
                <li><Link to="/section/photography" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Photography</Link></li>
                <li><Link to="/section/video" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Video Editing</Link></li>
                <li><Link to="/section/cs" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">CS Projects</Link></li>
                <li><Link to="/section/biology" className="text-nyt-gray hover:text-nyt-blue text-sm font-sans animated-link">Biology Research</Link></li>
              </ul>
            </div>
            
            {/* Recent Work */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Recent Work</h3>
              <ul className="space-y-3">
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">UX Design for Biotech Interface</li>
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Photo Series: Urban Landscapes</li>
                <li className="text-sm text-nyt-gray-dark dark:text-nyt-gray-light">Video Project: Scientific Visualization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="heading-divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <div className="mb-4 md:mb-0">
            <h2 className="font-broadway font-bold text-xl">Jatin Dangi</h2>
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
