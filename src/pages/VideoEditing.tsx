
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero } from '../components/ui/SectionTemplate';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Film, Scissors, FastForward, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const VideoEditing = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const videoProjects = [
    {
      id: "dna-replication",
      title: "SCIENCE VISUALIZATION: DNA REPLICATION",
      description: "An educational animation explaining the complex process of DNA replication in a visually engaging way.",
      thumbnailUrl: "https://images.unsplash.com/photo-1634622583565-1f313dc112e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "https://www.youtube.com/embed/TNKWgcFPHqw",
      duration: "4:27",
      category: "Educational",
      featuredProject: true
    },
    {
      id: "urban-reflections",
      title: "SHORT FILM: URBAN REFLECTIONS",
      description: "A cinematic exploration of city life through reflections in glass, water, and metal surfaces.",
      thumbnailUrl: "https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "https://www.youtube.com/embed/xmR5LFAe-DM",
      duration: "6:12",
      category: "Short Film",
      featuredProject: true
    },
    {
      id: "acoustic-session",
      title: "MUSIC VIDEO: ACOUSTIC SESSION",
      description: "Intimate studio recording of an acoustic performance with dynamic visual treatment.",
      thumbnailUrl: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "https://www.youtube.com/embed/mi9r_qzmYUU",
      duration: "3:58",
      category: "Music",
      featuredProject: true
    },
    {
      id: "tech-showcase",
      title: "PRODUCT ANIMATION: TECH SHOWCASE",
      description: "3D animation highlighting the features of a new tech product with dynamic motion graphics.",
      thumbnailUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80",
      videoUrl: "https://www.youtube.com/embed/xH_YhutdnhU",
      duration: "2:15",
      category: "Commercial",
      featuredProject: false
    },
    {
      id: "local-artisans",
      title: "DOCUMENTARY SHORT: LOCAL ARTISANS",
      description: "A glimpse into the lives and work of traditional craftspeople preserving historical techniques.",
      thumbnailUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "https://www.youtube.com/embed/jGgP_TbkGTQ",
      duration: "7:42",
      category: "Documentary",
      featuredProject: false
    },
    {
      id: "hidden-corners",
      title: "TRAVEL VLOG: HIDDEN CORNERS",
      description: "Exploring off-the-beaten-path locations with immersive videography and storytelling.",
      thumbnailUrl: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      videoUrl: "https://www.youtube.com/embed/kXx_j4YB1lE",
      duration: "5:28",
      category: "Travel",
      featuredProject: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const handleProjectClick = (id: string) => {
    setSelectedProject(id === selectedProject ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <SectionHero
          title="Video Editing"
          subtitle="VISUAL STORYTELLING THROUGH MOTION, EMOTION, AND RHYTHM"
          backgroundImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
        />
        
        {/* Tarantino-style Intro */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#ea384c]/10 mix-blend-overlay"></div>
          <div className="container-fluid relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-broadway text-6xl text-[#ea384c] mb-8 tracking-tighter text-center">PULP FICTION MEETS DIGITAL</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl mb-6 font-serif leading-relaxed">
                  My approach to video editing is like a Tarantino film — bold, unconventional, and often 
                  non-linear. I find beauty in the unexpected cuts, dramatic transitions, and carefully 
                  crafted visual tension.
                </p>
                <p className="text-xl font-serif leading-relaxed">
                  Each project is a chance to tell a story with a distinctive visual language, 
                  whether it's an educational piece, a commercial, or an artistic experiment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Projects - Chapter Style */}
        <section className="py-16 bg-[#222]">
          <div className="container-fluid">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-broadway text-5xl text-white mb-12 text-center">CHAPTER ONE: FEATURED PROJECTS</h2>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {videoProjects
                .filter(project => project.featuredProject)
                .map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    className="flex flex-col"
                    variants={itemVariants}
                  >
                    <div className="relative aspect-video overflow-hidden mb-4 border-4 border-[#ea384c]">
                      <iframe 
                        className="absolute inset-0 w-full h-full"
                        src={project.videoUrl}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="font-broadway text-xl mb-2 text-[#ea384c]">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                    <div className="flex items-center space-x-3 text-xs text-gray-400 mt-auto">
                      <span className="font-bold uppercase">{project.category}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>
        
        {/* Projects Gallery - Dialogue Style */}
        <section className="py-16 bg-gradient-to-b from-black to-[#222]">
          <div className="container-fluid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-broadway text-5xl text-white mb-12 text-center">CHAPTER TWO: THE OTHER STUFF</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoProjects
                .filter(project => !project.featuredProject)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <Card className={cn(
                      "overflow-hidden bg-black border-2 cursor-pointer transform transition-all duration-300",
                      selectedProject === project.id ? "border-[#ea384c] scale-105" : "border-gray-800 hover:border-gray-600"
                    )}>
                      <CardContent className="p-0">
                        <div className="relative">
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={project.thumbnailUrl} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="rounded-full bg-[#ea384c]/80 p-3">
                                <Play className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </div>
                          {selectedProject === project.id && (
                            <motion.div 
                              className="absolute top-2 right-2 bg-[#ea384c] p-1 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            >
                              <AlertCircle className="h-4 w-4 text-white" />
                            </motion.div>
                          )}
                        </div>
                        <div className="p-5 bg-black">
                          <h3 className="font-broadway text-xl mb-2 text-white group-hover:text-[#ea384c] transition-colors">{project.title}</h3>
                          {selectedProject === project.id && (
                            <motion.p 
                              className="text-sm text-gray-300 mb-4"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              {project.description}
                            </motion.p>
                          )}
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span className="uppercase">{project.category}</span>
                            <span>•</span>
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
        
        {/* Process Section - Film Reel Style */}
        <section className="py-16 bg-black relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/film.png')] opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('https://www.transparenttextures.com/patterns/film.png')] opacity-30"></div>
          
          <div className="container-fluid max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="font-broadway text-5xl mb-12 text-center text-[#ea384c]">THE EDITING PROCESS</h2>
              
              <div className="space-y-12">
                <motion.div 
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#ea384c] p-6 rounded-full">
                    <Film className="h-12 w-12 text-white" />
                  </div>
                  <div className="md:flex-1">
                    <h3 className="font-broadway text-2xl mb-3 text-white">SCENE 1: PRE-PRODUCTION</h3>
                    <p className="text-gray-300">Every great edit starts before the camera rolls. Storyboarding, shot lists, and 
                      visual references lay the groundwork for what will eventually become the final cut.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="md:order-2 bg-[#ea384c] p-6 rounded-full">
                    <Scissors className="h-12 w-12 text-white" />
                  </div>
                  <div className="md:flex-1">
                    <h3 className="font-broadway text-2xl mb-3 text-white">SCENE 2: THE ROUGH CUT</h3>
                    <p className="text-gray-300">This is where the magic begins. From raw footage to the first assembly, 
                      this phase is all about finding the rhythm of the story and deciding which moments deserve the spotlight.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#ea384c] p-6 rounded-full">
                    <FastForward className="h-12 w-12 text-white" />
                  </div>
                  <div className="md:flex-1">
                    <h3 className="font-broadway text-2xl mb-3 text-white">SCENE 3: FINAL CUT</h3>
                    <p className="text-gray-300">Color grading, sound design, visual effects, and music all come together 
                      in this phase. It's about the details that transform a good edit into something memorable.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Ending Credits */}
        <section className="py-16 bg-black text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-broadway text-3xl text-white mb-4">DIRECTED BY</h2>
            <p className="text-2xl text-[#ea384c] font-serif mb-8">YOUR NAME</p>
            
            <div className="max-w-lg mx-auto">
              <p className="text-gray-400 italic">"The right cut at the right moment can create magic. That's what I'm always looking for."</p>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VideoEditing;
