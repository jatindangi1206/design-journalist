
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero, SectionIntro } from '../components/ui/SectionTemplate';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  ChevronRight, 
  Image, 
  GalleryHorizontal, 
  GalleryVertical,
  ArrowRight
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCollection, setActiveCollection] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Apple-inspired photography collections with refined description
  const photoCollections = [
    {
      title: "Urban Perspectives",
      description: "Exploring architectural geometry through minimalist compositions",
      icon: <GalleryVertical className="w-6 h-6" />,
      photos: [
        {
          url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1556&q=80",
          alt: "Architectural perspective with clean lines",
          location: "Chicago, USA",
          year: "2023"
        },
        {
          url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
          alt: "Geometric patterns captured with precise alignment",
          location: "Tokyo, Japan",
          year: "2022"
        },
        {
          url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
          alt: "Urban reflections with balanced composition",
          location: "London, UK",
          year: "2023"
        }
      ]
    },
    {
      title: "Natural Elements",
      description: "Capturing organic forms with precision and clarity",
      icon: <Image className="w-6 h-6" />,
      photos: [
        {
          url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          alt: "Landscape composition with dynamic range",
          location: "Montana, USA",
          year: "2022"
        },
        {
          url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80",
          alt: "Water textures with extended exposure",
          location: "Maui, Hawaii",
          year: "2023"
        },
        {
          url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          alt: "Forest light captured with selective focus",
          location: "Olympic National Park, USA",
          year: "2021"
        }
      ]
    },
    {
      title: "Portrait Studies",
      description: "Human expression documented with technical precision",
      icon: <Camera className="w-6 h-6" />,
      photos: [
        {
          url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
          alt: "Portrait with studio lighting techniques",
          location: "Studio",
          year: "2023"
        },
        {
          url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          alt: "Portrait with directional lighting",
          location: "Natural light studio",
          year: "2022"
        },
        {
          url: "https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
          alt: "Environmental portrait with natural light",
          location: "New York, USA",
          year: "2023"
        }
      ]
    },
    {
      title: "Minimal Forms",
      description: "Reducing complexity to essential visual elements",
      icon: <GalleryHorizontal className="w-6 h-6" />,
      photos: [
        {
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
          alt: "Abstract architectural study",
          location: "Los Angeles, USA",
          year: "2023"
        },
        {
          url: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1054&q=80",
          alt: "Color study with controlled lighting",
          location: "Studio",
          year: "2022"
        },
        {
          url: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          alt: "Light and shadow interplay",
          location: "Barcelona, Spain",
          year: "2023"
        }
      ]
    }
  ];

  // Track scroll for parallax and progress effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const totalScrollable = docHeight - windowHeight;
      const progress = Math.min(scrollY / totalScrollable, 1);
      setScrollProgress(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth collection transition
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCollection((prev) => (prev + 1) % photoCollections.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [photoCollections.length]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Progress indicator - Apple style */}
      <div className="fixed top-0 left-0 w-full h-0.5 z-50">
        <div 
          className="h-full bg-nyt-black transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <main className="flex-grow">
        {/* Hero section with refined typography */}
        <div ref={heroRef} className="relative">
          <SectionHero
            title="Photography"
            subtitle="Visual stories captured with precision and perspective"
            backgroundImage="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          >
            <div className="mt-8 flex items-center justify-center space-x-2">
              {photoCollections.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCollection(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeCollection === index ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                  aria-label={`View collection ${index + 1}`}
                />
              ))}
            </div>
          </SectionHero>
        </div>
        
        {/* Introduction with refined typography */}
        <SectionIntro>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed mb-4">
              My approach to photography draws from years of studying visual systems and design principles, 
              capturing moments with technical precision and artistic intent. I focus on clean compositions, 
              thoughtful framing, and meticulous attention to light and shadow—values honed through 
              professional experience with industry-leading creative teams.
            </p>
            <div className="flex items-center justify-center mt-8 overflow-hidden">
              <div className="h-px bg-nyt-gray-light w-full" />
              <span className="mx-4 text-nyt-gray flex-shrink-0 font-sans tracking-wider text-sm">FEATURED COLLECTIONS</span>
              <div className="h-px bg-nyt-gray-light w-full" />
            </div>
          </div>
        </SectionIntro>
        
        {/* Apple-inspired category navigation */}
        <div className="container-fluid relative z-10 -mt-6">
          <div className="bg-white/80 backdrop-blur-md border border-nyt-gray-light rounded-xl shadow-sm p-2 mb-12">
            <div className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory">
              {photoCollections.map((collection, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCollection(index)}
                  className={`flex-shrink-0 snap-start flex items-center px-4 py-2 mx-1 rounded-lg transition-all duration-300 ${
                    activeCollection === index 
                      ? 'bg-nyt-black text-white shadow-md' 
                      : 'hover:bg-nyt-gray-light/50'
                  }`}
                >
                  <span className="mr-2">{collection.icon}</span>
                  <span className="whitespace-nowrap font-sans text-sm">{collection.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured carousel with Apple-inspired animation */}
        <div className="container-fluid py-8 overflow-hidden">
          <div className="mb-12">
            <h2 className="font-serif text-3xl mb-1">{photoCollections[activeCollection].title}</h2>
            <p className="text-nyt-gray-dark italic mb-6">{photoCollections[activeCollection].description}</p>
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {photoCollections[activeCollection].photos.map((photo, photoIndex) => (
                  <CarouselItem key={photoIndex} className="md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="cursor-pointer relative group overflow-hidden rounded-lg border border-nyt-gray-light"
                      onClick={() => setSelectedImage(photo.url)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={photo.url} 
                          alt={photo.alt} 
                          className="w-full h-full object-cover transition-all duration-700 
                                    group-hover:scale-105 group-hover:brightness-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                        <div className="text-white">
                          <p className="font-serif">{photo.alt}</p>
                          <div className="flex justify-between items-center mt-1 text-xs text-white/80">
                            <span>{photo.location}</span>
                            <span>{photo.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
              <CarouselNext className="hidden md:flex -right-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
            </Carousel>
          </div>
        </div>
        
        {/* Full collection display with animation on scroll */}
        <div className="container-fluid py-8">
          {photoCollections.map((collection, index) => (
            <div 
              key={index} 
              className={`mb-20 transition-all duration-700 ${
                activeCollection === index ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-4'
              }`}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center mb-3">
                  <div className="mr-2">{collection.icon}</div>
                  <h2 className="font-serif text-3xl">{collection.title}</h2>
                </div>
                <p className="text-nyt-gray-dark italic">{collection.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collection.photos.map((photo, photoIndex) => (
                  <Card 
                    key={photoIndex}
                    className="overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg 
                               border border-nyt-gray-light group hover:border-nyt-black/30"
                    onClick={() => setSelectedImage(photo.url)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={photo.url} 
                            alt={photo.alt} 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent
                                      transform transition-transform duration-300 group-hover:translate-y-0">
                          <div className="transform transition-transform duration-300 group-hover:translate-y-0">
                            <p className="text-white text-sm font-medium">{photo.alt}</p>
                            <div className="flex justify-between mt-1">
                              <p className="text-white/80 text-xs">{photo.location}</p>
                              <p className="text-white/80 text-xs">{photo.year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-3 px-4 border-t border-nyt-gray-light/50 flex justify-between items-center">
                        <span className="font-sans text-xs text-nyt-gray">{`Shot ${photoIndex + 1}/${collection.photos.length}`}</span>
                        <ArrowRight className="w-4 h-4 text-nyt-gray-dark opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Process section - Apple-inspired design principles */}
        <div className="bg-nyt-background py-16">
          <div className="container-fluid">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl mb-6">My Photographic Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-nyt-black flex items-center justify-center mb-4">
                    <span className="text-white font-sans text-xl">01</span>
                  </div>
                  <h3 className="font-serif text-xl mb-2">Composition</h3>
                  <p className="text-nyt-gray-dark text-sm">Meticulously arranged visual elements with precision and balance</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-nyt-black flex items-center justify-center mb-4">
                    <span className="text-white font-sans text-xl">02</span>
                  </div>
                  <h3 className="font-serif text-xl mb-2">Light</h3>
                  <p className="text-nyt-gray-dark text-sm">Careful manipulation of light to create depth and visual hierarchy</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-nyt-black flex items-center justify-center mb-4">
                    <span className="text-white font-sans text-xl">03</span>
                  </div>
                  <h3 className="font-serif text-xl mb-2">Refinement</h3>
                  <p className="text-nyt-gray-dark text-sm">Technical post-processing with attention to detail and visual consistency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image viewer dialog with elegant animation */}
        <Dialog 
          open={!!selectedImage} 
          onOpenChange={(open) => !open && setSelectedImage(null)}
        >
          <DialogContent className="max-w-6xl p-0 bg-black/90 backdrop-blur-lg border-none rounded-lg overflow-hidden">
            {selectedImage && (
              <div className="relative animate-fade-in">
                <img 
                  src={selectedImage} 
                  alt="Expanded view" 
                  className="w-full h-auto max-h-[85vh] object-contain p-2"
                />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md 
                             flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                >
                  ✕
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      
      <Footer />
    </div>
  );
};

export default Photography;
