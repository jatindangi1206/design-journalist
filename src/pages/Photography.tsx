
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero, SectionIntro } from '../components/ui/SectionTemplate';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photoCollections = [
    {
      title: "Urban Landscapes",
      description: "Exploring the geometry and texture of city environments",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1556&q=80",
          alt: "City skyline at dusk",
          location: "Chicago, USA"
        },
        {
          url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
          alt: "Geometric patterns in architecture",
          location: "Tokyo, Japan"
        },
        {
          url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
          alt: "Urban walkway with reflections",
          location: "London, UK"
        }
      ]
    },
    {
      title: "Natural World",
      description: "Capturing the beauty and intricacy of natural environments",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          alt: "Mountain landscape at sunset",
          location: "Montana, USA"
        },
        {
          url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80",
          alt: "Ocean waves at sunrise",
          location: "Maui, Hawaii"
        },
        {
          url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
          alt: "Dense forest with sunlight",
          location: "Olympic National Park, USA"
        }
      ]
    },
    {
      title: "Portraiture",
      description: "Exploring personality and emotion through portrait photography",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
          alt: "Portrait of a woman in profile",
          location: "Studio"
        },
        {
          url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          alt: "Close-up portrait of a man",
          location: "Natural light studio"
        },
        {
          url: "https://images.unsplash.com/photo-1557555187-23d685287bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
          alt: "Environmental portrait with available light",
          location: "New York, USA"
        }
      ]
    },
    {
      title: "Abstract & Minimal",
      description: "Finding beauty in simplicity, texture, and form",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
          alt: "Abstract architectural forms",
          location: "Los Angeles, USA"
        },
        {
          url: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1054&q=80",
          alt: "Minimalist color and texture",
          location: "Studio"
        },
        {
          url: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          alt: "Light and shadow abstract",
          location: "Barcelona, Spain"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SectionHero
          title="Photography"
          subtitle="Capturing moments, emotions, and perspectives through the lens"
          backgroundImage="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        />
        
        <SectionIntro>
          <p>Photography allows me to explore the world from different perspectives, 
             finding beauty in both the extraordinary and everyday moments. My work spans 
             several genres including urban landscapes, nature, portraiture, and abstract compositions.</p>
        </SectionIntro>
        
        <div className="container-fluid py-8">
          {photoCollections.map((collection, index) => (
            <div key={index} className="mb-20">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl mb-2">{collection.title}</h2>
                <p className="text-nyt-gray-dark italic">{collection.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {collection.photos.map((photo, photoIndex) => (
                  <Card 
                    key={photoIndex}
                    className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md border border-nyt-gray-light"
                    onClick={() => setSelectedImage(photo.url)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={photo.url} 
                            alt={photo.alt} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <p className="text-white text-sm">{photo.alt}</p>
                          <p className="text-white/80 text-xs">{photo.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <Dialog 
          open={!!selectedImage} 
          onOpenChange={(open) => !open && setSelectedImage(null)}
        >
          <DialogContent className="max-w-6xl p-0 bg-transparent border-0">
            {selectedImage && (
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Expanded view" 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
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
