
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero } from '../components/ui/SectionTemplate';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Download, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SectionHero
          title="About Me"
          subtitle="Computer Science & Biology Researcher, Designer, Photographer"
          backgroundImage="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        >
          <div className="flex justify-center mt-8 space-x-4">
            <a href="https://github.com/jatindangi1206" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/40">
                <Github className="h-5 w-5 text-white" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/jatin-dangi" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/40">
                <Linkedin className="h-5 w-5 text-white" />
              </Button>
            </a>
            <a href="https://instagram.com/jatindangi07" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/40">
                <Instagram className="h-5 w-5 text-white" />
              </Button>
            </a>
            <a href="mailto:contact@jatindangi.com">
              <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/40">
                <Mail className="h-5 w-5 text-white" />
              </Button>
            </a>
          </div>
        </SectionHero>
        
        {/* Bio Section */}
        <section className="container-fluid py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="col-span-1">
              <div className="sticky top-24">
                <div className="aspect-[3/4] overflow-hidden rounded-md mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Jatin Dangi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-nyt-red" />
                    <span>Boston, Massachusetts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-nyt-red" />
                    <span>CS & Biology, MIT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-nyt-red" />
                    <span>Class of 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen size={16} className="text-nyt-red" />
                    <span>Research Fellow, Broad Institute</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="/Jatin_Dangi_CV.pdf" target="_blank">
                    <Button className="w-full flex items-center justify-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <h2 className="font-serif text-3xl mb-6">My Story</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  I'm Jatin Dangi, a Computer Science and Biology dual major with a passion for interdisciplinary 
                  research and creative expression through various digital mediums. My academic journey has been 
                  focused on exploring the synergies between computational methods and biological systems, 
                  while nurturing my creative interests in design, photography, and digital media.
                </p>
                
                <p>
                  At the core of my academic work is the belief that computational approaches can transform 
                  our understanding of complex biological systems. My research spans from developing 
                  machine learning algorithms for analyzing biomedical data to designing systems for 
                  synthetic biology applications. I'm particularly interested in neural circuit analysis 
                  and the development of tools that bridge the gap between computational models and 
                  biological experimentation.
                </p>
                
                <p>
                  Beyond my scientific endeavors, I have cultivated a passion for visual storytelling 
                  through photography, videography, and digital design. I believe that effective communication 
                  of complex ideas requires both technical precision and creative expression. This philosophy 
                  guides my approach to both scientific communication and artistic projects.
                </p>
                
                <blockquote>
                  "The intersection of science, technology, and art offers the most fertile ground for innovation."
                </blockquote>
                
                <p>
                  My technical expertise includes proficiency in multiple programming languages (Python, C++, JavaScript), 
                  machine learning frameworks, and computational biology tools. In the creative realm, I work with 
                  the Adobe Creative Suite, various photography and videography equipment, and digital design platforms.
                </p>
                
                <p>
                  When I'm not in the lab or behind a camera, you might find me hiking in search of perfect 
                  landscape shots, exploring new cuisines, or engaging in discussions about the ethical 
                  implications of emerging technologies. I believe that diverse experiences fuel both 
                  scientific insight and creative vision.
                </p>
              </div>
              
              <div className="heading-divider my-12"></div>
              
              <h2 className="font-serif text-3xl mb-6">Education</h2>
              
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="font-serif text-xl mb-1">
                    Massachusetts Institute of Technology (MIT)
                  </h3>
                  <p className="text-nyt-red font-sans uppercase text-sm tracking-widest mb-2">
                    BS in Computer Science & Biology — 2021-2025
                  </p>
                  <p className="text-nyt-gray-dark">
                    Thesis: "Computational Models for Integrating Multi-modal Biological Data in Neural Circuit Analysis"<br />
                    Advisor: Prof. Emily Richards
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-xl mb-1">
                    Summer Research Program
                  </h3>
                  <p className="text-nyt-red font-sans uppercase text-sm tracking-widest mb-2">
                    Broad Institute of MIT and Harvard — Summer 2023
                  </p>
                  <p className="text-nyt-gray-dark">
                    Research focus: "Development of Machine Learning Methods for Single-cell RNA-seq Analysis"
                  </p>
                </div>
              </div>
              
              <h2 className="font-serif text-3xl mb-6">Awards & Recognition</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="border border-nyt-gray-light">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl mb-2">Undergraduate Research Award</h3>
                    <p className="text-nyt-gray-dark mb-2">MIT Department of Biology, 2024</p>
                    <p className="text-sm">For outstanding contributions to research in computational systems biology.</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-nyt-gray-light">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl mb-2">Design Excellence Award</h3>
                    <p className="text-nyt-gray-dark mb-2">Student Design Showcase, 2023</p>
                    <p className="text-sm">First place for UI/UX design in scientific data visualization interfaces.</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-nyt-gray-light">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl mb-2">Photography Competition Winner</h3>
                    <p className="text-nyt-gray-dark mb-2">National Geographic Student Contest, 2022</p>
                    <p className="text-sm">Finalist in the Nature category for "Patterns in Ecosystems" series.</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-nyt-gray-light">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl mb-2">Coding Challenge Champion</h3>
                    <p className="text-nyt-gray-dark mb-2">MIT Hackathon, 2022</p>
                    <p className="text-sm">Winning team for developing an AI-based tool for medical image analysis.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 className="font-serif text-3xl mb-6">Personal Interests</h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p>
                  Beyond my academic and creative pursuits, I'm passionate about:
                </p>
                
                <ul>
                  <li><strong>Outdoor Adventures:</strong> Hiking, camping, and landscape photography in national parks</li>
                  <li><strong>Culinary Exploration:</strong> Experimenting with fusion cuisine and food photography</li>
                  <li><strong>Science Communication:</strong> Making complex scientific concepts accessible through visual storytelling</li>
                  <li><strong>Music:</strong> Playing piano and composing electronic music</li>
                  <li><strong>Literature:</strong> Science fiction, philosophy, and biographies of scientists and artists</li>
                </ul>
                
                <p>
                  I believe that these diverse interests enrich my perspective and contribute to my interdisciplinary approach 
                  to both scientific research and creative projects. The ability to draw connections between seemingly unrelated 
                  fields is something I actively cultivate and value.
                </p>
              </div>
              
              <div className="heading-divider my-12"></div>
              
              <div className="flex justify-center">
                <div className="max-w-lg text-center">
                  <h2 className="font-serif text-2xl mb-4">Let's Connect</h2>
                  <p className="text-nyt-gray-dark mb-6">
                    I'm always interested in new collaborations, research opportunities, and creative projects. 
                    Feel free to reach out through social media or email.
                  </p>
                  
                  <a href="mailto:contact@jatindangi.com">
                    <Button className="mx-auto">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
