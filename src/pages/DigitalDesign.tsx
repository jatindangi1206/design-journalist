
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero, SectionIntro, SectionGrid, ProjectCard } from '../components/ui/SectionTemplate';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const DigitalDesign = () => {
  const designProjects = [
    {
      title: "UX Design for Biotech Interface",
      description: "A modern interface design for a biotechnology application that simplifies complex data visualization and analysis.",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["UX/UI", "Figma", "Biotech"],
      link: "/article/design-project-1"
    },
    {
      title: "Mobile App Redesign",
      description: "Complete redesign of a productivity application focusing on accessibility and clean visual hierarchy.",
      imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      tags: ["Mobile", "UI Design", "Adobe XD"],
      link: "/article/design-project-2"
    },
    {
      title: "Brand Identity System",
      description: "Comprehensive brand identity design for a sustainable products company including logo, color system, and typography guidelines.",
      imageUrl: "https://images.unsplash.com/photo-1635405574926-925e8c4c3fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      tags: ["Branding", "Illustrator", "Identity Design"],
      link: "/article/design-project-3"
    },
    {
      title: "Interactive Data Dashboard",
      description: "User interface design for a complex data dashboard with interactive elements and real-time visualization.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Dashboard", "Data Viz", "Figma"],
      link: "/article/design-project-4"
    },
    {
      title: "E-commerce Website Design",
      description: "Complete website design for a premium fashion retailer with focus on product display and seamless checkout experience.",
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["E-commerce", "Web Design", "UX Research"],
      link: "/article/design-project-5"
    },
    {
      title: "Digital Magazine Layout",
      description: "Editorial design for a digital magazine with dynamic layouts and interactive elements that enhance the reading experience.",
      imageUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      tags: ["Editorial", "InDesign", "Digital Publishing"],
      link: "/article/design-project-6"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SectionHero
          title="Digital Design"
          subtitle="Creating visual experiences that merge aesthetics and functionality"
          backgroundImage="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1764&q=80"
        />
        
        <SectionIntro>
          <p>My digital design work spans across UI/UX, branding, editorial, and interactive experiences. 
             I focus on creating thoughtful visual solutions that elevate the user experience while 
             maintaining aesthetic integrity.</p>
        </SectionIntro>
        
        <div className="container-fluid py-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mx-auto flex justify-center mb-10">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="ui">UI/UX</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="editorial">Editorial</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <SectionGrid columns={3}>
                {designProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    tags={project.tags}
                    link={project.link}
                  />
                ))}
              </SectionGrid>
            </TabsContent>
            <TabsContent value="ui">
              <SectionGrid columns={3}>
                {designProjects
                  .filter(p => p.tags?.includes("UX/UI") || p.tags?.includes("UI Design") || p.tags?.includes("Dashboard"))
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      tags={project.tags}
                      link={project.link}
                    />
                  ))}
              </SectionGrid>
            </TabsContent>
            <TabsContent value="branding">
              <SectionGrid columns={3}>
                {designProjects
                  .filter(p => p.tags?.includes("Branding") || p.tags?.includes("Identity Design"))
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      tags={project.tags}
                      link={project.link}
                    />
                  ))}
              </SectionGrid>
            </TabsContent>
            <TabsContent value="editorial">
              <SectionGrid columns={3}>
                {designProjects
                  .filter(p => p.tags?.includes("Editorial") || p.tags?.includes("Digital Publishing"))
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      tags={project.tags}
                      link={project.link}
                    />
                  ))}
              </SectionGrid>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalDesign;
