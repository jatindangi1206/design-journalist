
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero, SectionIntro } from '../components/ui/SectionTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { FileText, Microscope, Dna, FlaskConical } from 'lucide-react';

const BiologyResearch = () => {
  const researchAreas = [
    {
      title: "Systems Biology",
      description: "Studying biological systems through computational modeling and network analysis, focusing on cellular pathways and their interactions.",
      imageUrl: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      key: "systems-biology",
      projects: [
        {
          title: "Gene Regulatory Network Analysis in Stem Cell Differentiation",
          description: "Computational modeling of gene regulatory networks that control stem cell fate decisions, with particular focus on neural lineages.",
          techniques: ["Single-cell RNA-seq", "Network Inference Algorithms", "Gene Perturbation Analysis"]
        },
        {
          title: "Metabolic Pathway Modeling",
          description: "Developing constraint-based models of cellular metabolism to predict metabolic shifts under different environmental conditions.",
          techniques: ["Flux Balance Analysis", "C13 Metabolic Flux Analysis", "Kinetic Modeling"]
        }
      ]
    },
    {
      title: "Synthetic Biology",
      description: "Designing and constructing novel biological systems for specific functions, combining principles from engineering and biology.",
      imageUrl: "https://images.unsplash.com/photo-1576086135878-bd1240c4cde4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      key: "synthetic-biology",
      projects: [
        {
          title: "Engineered Biosensors for Environmental Monitoring",
          description: "Creating genetically modified bacteria that can detect and report the presence of specific environmental toxins through fluorescent protein expression.",
          techniques: ["CRISPR/Cas9 Gene Editing", "Reporter Gene Assays", "Microfluidics"]
        },
        {
          title: "Synthetic Gene Circuits",
          description: "Designing artificial gene regulatory networks that perform computational operations within living cells.",
          techniques: ["Gibson Assembly", "Optogenetics", "Mathematical Modeling"]
        }
      ]
    },
    {
      title: "Neurobiology",
      description: "Investigating neural circuits and brain function through a combination of experimental and computational approaches.",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      key: "neurobiology",
      projects: [
        {
          title: "Neural Circuit Mapping in Decision-Making Processes",
          description: "Identifying and characterizing neural circuits involved in complex decision-making tasks through a combination of optogenetics and behavioral analysis.",
          techniques: ["Two-photon Imaging", "Optogenetics", "Behavioral Assays"]
        },
        {
          title: "Computational Models of Synaptic Plasticity",
          description: "Developing mathematical models that predict how synapses change strength during learning and memory formation.",
          techniques: ["Patch-clamp Electrophysiology", "Calcium Imaging", "Differential Equation Models"]
        }
      ]
    }
  ];

  const publications = [
    {
      title: "Systems-level analysis of the gene regulatory network governing mammalian neural stem cell differentiation",
      authors: "Dangi J, Smith A, Chen H, et al.",
      journal: "Nature Neuroscience",
      year: "2024",
      doi: "10.1038/nn.xxxx"
    },
    {
      title: "Synthetic gene circuits for environmental toxin detection with tunable sensitivity",
      authors: "Williams B, Dangi J, Rodriguez M, et al.",
      journal: "ACS Synthetic Biology",
      year: "2023",
      doi: "10.1021/acssynbio.xxxx"
    },
    {
      title: "Computational framework for predicting metabolic adaptation in complex environments",
      authors: "Dangi J, Johnson K, et al.",
      journal: "Cell Systems",
      year: "2023",
      doi: "10.1016/j.cels.xxxx"
    },
    {
      title: "Neural correlates of decision confidence revealed through targeted optogenetic manipulation",
      authors: "Zhang L, Dangi J, Parker R, et al.",
      journal: "Neuron",
      year: "2022",
      doi: "10.1016/j.neuron.xxxx"
    }
  ];
  
  const methods = [
    {
      title: "Experimental",
      items: [
        "Next-generation sequencing (RNA-seq, ChIP-seq)",
        "CRISPR/Cas9 genome editing",
        "Single-cell technologies",
        "Fluorescence microscopy",
        "Protein biochemistry",
        "Cell culture and tissue engineering",
        "Optogenetics and chemogenetics"
      ],
      icon: <Microscope className="h-5 w-5 text-nyt-red" />
    },
    {
      title: "Computational",
      items: [
        "Machine learning for biological data analysis",
        "Network modeling and inference",
        "Bioinformatics pipelines for NGS data",
        "Statistical methods for high-dimensional data",
        "Agent-based modeling of biological systems",
        "Bayesian inference methods",
        "Natural language processing for literature mining"
      ],
      icon: <Dna className="h-5 w-5 text-nyt-red" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SectionHero
          title="Biology Research"
          subtitle="Exploring the complexity of living systems through interdisciplinary approaches"
          backgroundImage="https://images.unsplash.com/photo-1637437740021-817011ccc3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        
        <SectionIntro>
          <p>My research integrates biology with computational methods to understand complex 
             biological systems. I work at the intersection of multiple disciplines including 
             systems biology, synthetic biology, and neuroscience, combining wet lab experiments 
             with computational analysis and modeling.</p>
        </SectionIntro>
        
        {/* Research Areas */}
        <section className="container-fluid py-12">
          <h2 className="font-serif text-3xl mb-10 text-center">Research Areas</h2>
          
          <Tabs defaultValue={researchAreas[0].key} className="w-full">
            <TabsList className="mx-auto flex justify-center mb-10">
              {researchAreas.map((area) => (
                <TabsTrigger key={area.key} value={area.key}>{area.title}</TabsTrigger>
              ))}
            </TabsList>
            
            {researchAreas.map((area) => (
              <TabsContent key={area.key} value={area.key}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="col-span-1">
                    <div className="aspect-[4/3] overflow-hidden rounded-md">
                      <img 
                        src={area.imageUrl} 
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-2xl mt-4 mb-2">{area.title}</h3>
                    <p className="text-nyt-gray-dark">{area.description}</p>
                  </div>
                  
                  <div className="col-span-1 lg:col-span-2 space-y-6">
                    <h3 className="font-serif text-xl">Current Projects</h3>
                    
                    {area.projects.map((project, idx) => (
                      <Card key={idx} className="border border-nyt-gray-light">
                        <CardHeader>
                          <CardTitle className="font-serif text-lg">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-nyt-gray-dark mb-4">{project.description}</p>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">Techniques & Methods:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techniques.map((technique, tidx) => (
                                <span 
                                  key={tidx} 
                                  className="text-xs px-2 py-1 bg-nyt-background text-nyt-gray-dark rounded-full"
                                >
                                  {technique}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
        
        {/* Methods & Approaches */}
        <section className="bg-nyt-background py-16">
          <div className="container-fluid">
            <h2 className="font-serif text-3xl mb-10 text-center">Methods & Approaches</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {methods.map((method, idx) => (
                <Card key={idx} className="border border-nyt-gray-light">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      {method.icon}
                      <span className="ml-2">{method.title} Methods</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {method.items.map((item, iidx) => (
                        <li key={iidx} className="flex items-start">
                          <span className="text-nyt-red mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Publications */}
        <section className="container-fluid py-16">
          <h2 className="font-serif text-3xl mb-10 text-center">Selected Publications</h2>
          
          <div className="max-w-4xl mx-auto">
            {publications.map((pub, idx) => (
              <div key={idx} className="flex items-start gap-4 mb-8 pb-8 border-b border-nyt-gray-light last:border-0">
                <div className="flex-shrink-0 pt-1">
                  <FileText className="h-6 w-6 text-nyt-red" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{pub.title}</h3>
                  <p className="text-nyt-gray-dark mb-1">{pub.authors}</p>
                  <p className="text-nyt-gray">
                    <span className="italic">{pub.journal}</span>, {pub.year}
                  </p>
                  <p className="text-nyt-gray text-sm">DOI: {pub.doi}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Lab Resources */}
        <section className="container-fluid py-16 bg-nyt-background">
          <h2 className="font-serif text-3xl mb-10 text-center">Collaborations & Resources</h2>
          
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p>My research benefits from collaborations across multiple institutions and fields. 
               I believe in the power of interdisciplinary approaches to solve complex biological problems.</p>
               
            <h3>Partner Institutions</h3>
            <ul>
              <li>Stanford University - Department of Bioengineering</li>
              <li>MIT - Synthetic Biology Center</li>
              <li>UCSD - Systems Biology Research Group</li>
              <li>Allen Institute for Brain Science</li>
            </ul>
            
            <h3>Funding Sources</h3>
            <ul>
              <li>National Institutes of Health (NIH) - R01 Grant</li>
              <li>National Science Foundation (NSF) - CAREER Award</li>
              <li>DARPA - Biological Technologies Office</li>
              <li>Chan Zuckerberg Initiative</li>
            </ul>
            
            <div className="flex items-center justify-center my-8">
              <FlaskConical size={60} className="text-nyt-red opacity-20" />
            </div>
            
            <p className="text-center italic">
              "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'" <br/>
              — Isaac Asimov
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BiologyResearch;
