
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero, SectionIntro, ProjectCard } from '../components/ui/SectionTemplate';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Code, Database, Server, Cpu } from 'lucide-react';

const CSProjects = () => {
  const projects = [
    {
      title: "BioSignal Processing Algorithm",
      description: "A machine learning algorithm for processing and analyzing EEG signals to detect patterns associated with cognitive states.",
      imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["Python", "TensorFlow", "Signal Processing"],
      category: "ML/AI",
      repoUrl: "https://github.com/username/biosignal-processing",
      demoUrl: "https://demo-link.com/biosignal"
    },
    {
      title: "Distributed Database System",
      description: "Implementation of a distributed NoSQL database with fault tolerance and horizontal scaling capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1682&q=80",
      tags: ["Go", "Docker", "Kubernetes"],
      category: "Systems",
      repoUrl: "https://github.com/username/distributed-db",
      demoUrl: null
    },
    {
      title: "Quantum Computing Simulator",
      description: "A simulation environment for testing quantum algorithms without quantum hardware.",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["Python", "NumPy", "Quantum Computing"],
      category: "Quantum",
      repoUrl: "https://github.com/username/quantum-simulator",
      demoUrl: "https://demo-link.com/quantum"
    },
    {
      title: "Augmented Reality SDK",
      description: "A software development kit for creating AR applications with advanced spatial mapping.",
      imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["C++", "OpenGL", "Computer Vision"],
      category: "AR/VR",
      repoUrl: "https://github.com/username/ar-sdk",
      demoUrl: null
    },
    {
      title: "Natural Language Processing Framework",
      description: "A framework for text analysis, sentiment detection, and semantic understanding of technical documents.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["Python", "NLTK", "Transformers"],
      category: "ML/AI",
      repoUrl: "https://github.com/username/nlp-framework",
      demoUrl: "https://demo-link.com/nlp"
    },
    {
      title: "Network Security Toolkit",
      description: "A collection of tools for network security analysis, vulnerability detection, and penetration testing.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["Python", "C", "Network Protocols"],
      category: "Security",
      repoUrl: "https://github.com/username/security-toolkit",
      demoUrl: null
    }
  ];

  const skills = {
    languages: ["Python", "JavaScript/TypeScript", "C++", "Java", "Go", "SQL"],
    frameworks: ["React", "TensorFlow", "Django", "Node.js", "PyTorch"],
    tools: ["Docker", "Kubernetes", "Git", "AWS", "Linux/Unix"],
    concepts: ["Algorithms", "Distributed Systems", "Machine Learning", "Computer Vision", "Security"]
  };

  const publications = [
    {
      title: "Optimizing Deep Learning Models for Biomedical Signal Processing",
      venue: "IEEE Transactions on Biomedical Engineering",
      year: "2024",
      link: "https://example.com/publication1"
    },
    {
      title: "Secure Distributed Computing for Medical Data Analysis",
      venue: "ACM Conference on Computer and Communications Security",
      year: "2023",
      link: "https://example.com/publication2"
    },
    {
      title: "Quantum Algorithm Approaches to Complex Biological System Simulation",
      venue: "Quantum Information Processing",
      year: "2023",
      link: "https://example.com/publication3"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SectionHero
          title="CS Projects"
          subtitle="Building software solutions at the intersection of computation and biology"
          backgroundImage="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        
        <SectionIntro>
          <p>My computer science work focuses on developing software solutions across various domains 
             including bioinformatics, machine learning, and distributed systems. I'm particularly 
             interested in applications that bridge computation with biological sciences.</p>
        </SectionIntro>
        
        <div className="container-fluid py-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mx-auto flex justify-center mb-10">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="ml-ai">ML/AI</TabsTrigger>
              <TabsTrigger value="systems">Systems</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden border border-nyt-gray-light hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                        <div className="flex space-x-2">
                          {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                              <Github size={18} />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-nyt-gray-dark text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-nyt-background text-nyt-gray-dark rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-nyt-red font-semibold mt-2">
                        {project.category}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ml-ai">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.category === "ML/AI")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden border border-nyt-gray-light hover:shadow-md transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                          <div className="flex space-x-2">
                            {project.repoUrl && (
                              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                                <Github size={18} />
                              </a>
                            )}
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-nyt-gray-dark text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 bg-nyt-background text-nyt-gray-dark rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-nyt-red font-semibold mt-2">
                          {project.category}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="systems">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => project.category === "Systems")
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden border border-nyt-gray-light hover:shadow-md transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                          <div className="flex space-x-2">
                            {project.repoUrl && (
                              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                                <Github size={18} />
                              </a>
                            )}
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-nyt-gray-dark text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 bg-nyt-background text-nyt-gray-dark rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-nyt-red font-semibold mt-2">
                          {project.category}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="other">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => !["ML/AI", "Systems"].includes(project.category))
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden border border-nyt-gray-light hover:shadow-md transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                          <div className="flex space-x-2">
                            {project.repoUrl && (
                              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                                <Github size={18} />
                              </a>
                            )}
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-nyt-gray-dark hover:text-nyt-blue transition-colors">
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-nyt-gray-dark text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 bg-nyt-background text-nyt-gray-dark rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-nyt-red font-semibold mt-2">
                          {project.category}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Skills Section */}
        <section className="bg-nyt-background py-16">
          <div className="container-fluid">
            <h2 className="font-serif text-3xl mb-10 text-center">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border border-nyt-gray-light">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl">
                    <Code className="mr-2 h-5 w-5 text-nyt-red" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {skills.languages.map((skill, index) => (
                      <li key={index} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-nyt-gray-light">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl">
                    <Database className="mr-2 h-5 w-5 text-nyt-red" />
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {skills.frameworks.map((skill, index) => (
                      <li key={index} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-nyt-gray-light">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl">
                    <Server className="mr-2 h-5 w-5 text-nyt-red" />
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {skills.tools.map((skill, index) => (
                      <li key={index} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-nyt-gray-light">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl">
                    <Cpu className="mr-2 h-5 w-5 text-nyt-red" />
                    Concepts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {skills.concepts.map((skill, index) => (
                      <li key={index} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Publications Section */}
        <section className="container-fluid py-16">
          <h2 className="font-serif text-3xl mb-10 text-center">Publications</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="p-6 border border-nyt-gray-light hover:bg-nyt-background transition-colors rounded-md">
                <h3 className="font-serif text-xl mb-2">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-nyt-blue transition-colors">
                    {pub.title}
                  </a>
                </h3>
                <div className="flex flex-wrap text-sm text-nyt-gray-dark">
                  <span className="mr-2">{pub.venue}</span>
                  <span>•</span>
                  <span className="ml-2">{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CSProjects;
