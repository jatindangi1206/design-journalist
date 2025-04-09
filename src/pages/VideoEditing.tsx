
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero, SectionIntro } from '../components/ui/SectionTemplate';
import { Card, CardContent } from "@/components/ui/card";
import { Play } from 'lucide-react';

const VideoEditing = () => {
  const videoProjects = [
    {
      title: "Science Visualization: DNA Replication",
      description: "An educational animation explaining the complex process of DNA replication in a visually engaging way.",
      thumbnailUrl: "https://images.unsplash.com/photo-1634622583565-1f313dc112e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "https://www.youtube.com/embed/TNKWgcFPHqw",
      duration: "4:27",
      category: "Educational",
      featuredProject: true
    },
    {
      title: "Short Film: Urban Reflections",
      description: "A cinematic exploration of city life through reflections in glass, water, and metal surfaces.",
      thumbnailUrl: "https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "https://www.youtube.com/embed/xmR5LFAe-DM",
      duration: "6:12",
      category: "Short Film",
      featuredProject: true
    },
    {
      title: "Music Video: Acoustic Session",
      description: "Intimate studio recording of an acoustic performance with dynamic visual treatment.",
      thumbnailUrl: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "https://www.youtube.com/embed/mi9r_qzmYUU",
      duration: "3:58",
      category: "Music",
      featuredProject: true
    },
    {
      title: "Product Animation: Tech Showcase",
      description: "3D animation highlighting the features of a new tech product with dynamic motion graphics.",
      thumbnailUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80",
      videoUrl: "https://www.youtube.com/embed/xH_YhutdnhU",
      duration: "2:15",
      category: "Commercial",
      featuredProject: false
    },
    {
      title: "Documentary Short: Local Artisans",
      description: "A glimpse into the lives and work of traditional craftspeople preserving historical techniques.",
      thumbnailUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      videoUrl: "https://www.youtube.com/embed/jGgP_TbkGTQ",
      duration: "7:42",
      category: "Documentary",
      featuredProject: false
    },
    {
      title: "Travel Vlog: Hidden Corners",
      description: "Exploring off-the-beaten-path locations with immersive videography and storytelling.",
      thumbnailUrl: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      videoUrl: "https://www.youtube.com/embed/kXx_j4YB1lE",
      duration: "5:28",
      category: "Travel",
      featuredProject: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SectionHero
          title="Video Editing"
          subtitle="Visual storytelling through motion, emotion, and rhythm"
          backgroundImage="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
        />
        
        <SectionIntro>
          <p>My video work spans educational content, narrative storytelling, music videos, 
             and motion graphics. I combine technical precision with creative vision to create 
             compelling visual narratives that engage viewers.</p>
        </SectionIntro>
        
        {/* Featured Projects */}
        <section className="container-fluid py-12">
          <h2 className="font-serif text-3xl mb-10 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoProjects
              .filter(project => project.featuredProject)
              .map((project, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src={project.videoUrl}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-nyt-gray-dark mb-2">{project.description}</p>
                  <div className="flex items-center space-x-3 text-xs text-nyt-gray mt-auto">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              ))}
          </div>
        </section>
        
        {/* All Projects */}
        <section className="bg-nyt-background py-16">
          <div className="container-fluid">
            <h2 className="font-serif text-3xl mb-10 text-center">More Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoProjects
                .filter(project => !project.featuredProject)
                .map((project, index) => (
                  <Card key={index} className="overflow-hidden border border-nyt-gray-light">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.thumbnailUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="rounded-full bg-white/80 p-3">
                              <Play className="h-8 w-8 text-nyt-red" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                        <p className="text-sm text-nyt-gray-dark mb-4">{project.description}</p>
                        <div className="flex items-center space-x-3 text-xs text-nyt-gray">
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="container-fluid py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl mb-6 text-center">My Editing Process</h2>
            
            <div className="prose prose-lg mx-auto">
              <p>My approach to video editing begins with understanding the core narrative and emotional journey. 
                 Whether it's a scientific visualization, documentary, or creative piece, I focus on creating a 
                 rhythm and flow that serves the content's purpose.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-2">Pre-Production</h3>
                  <p className="text-sm">Planning the visual language, storyboarding, and establishing the project's technical requirements.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-2">Production</h3>
                  <p className="text-sm">Capturing footage with composition, lighting, and motion in mind for the editing phase.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl mb-2">Post-Production</h3>
                  <p className="text-sm">Editing, color grading, sound design, and motion graphics to create the final piece.</p>
                </div>
              </div>
              
              <p>I work primarily in Adobe Premiere Pro and After Effects, with additional tools like DaVinci Resolve 
                 for color grading. Each project presents unique challenges that I approach with both technical 
                 knowledge and creative intuition.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VideoEditing;
