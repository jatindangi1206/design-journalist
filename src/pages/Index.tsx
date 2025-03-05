
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArticleCard from '../components/ui/ArticleCard';
import FeaturedArticle from '../components/ui/FeaturedArticle';
import SectionDivider from '../components/ui/SectionDivider';

const Index = () => {
  // Mock data for articles
  const featuredArticle = {
    id: "1",
    title: "The Architectural Renaissance: How Modern Design is Reshaping Urban Spaces",
    description: "A deep dive into how contemporary architects are transforming city skylines while addressing environmental concerns and social needs.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "Architecture",
    date: "May 15, 2023",
    author: "Alexandra Rivers"
  };

  const topStories = [
    {
      id: "2",
      title: "The Economic Impact of Artificial Intelligence on Global Markets",
      description: "Economists predict significant shifts in job markets as AI adoption accelerates across industries.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "May 14, 2023",
      author: "Jonathan Chen"
    },
    {
      id: "3",
      title: "Climate Summit Concludes with New Global Emissions Targets",
      description: "World leaders agree to ambitious carbon reduction goals amid growing climate concerns.",
      imageUrl: "https://images.unsplash.com/photo-1569163139599-0f4259cc6a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Environment",
      date: "May 13, 2023",
      author: "Sophia Rodriguez"
    },
    {
      id: "4",
      title: "The Revival of Traditional Craftsmanship in Modern Fashion",
      description: "Luxury brands turn to heritage techniques as consumers seek authenticity and sustainability.",
      imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Style",
      date: "May 12, 2023",
      author: "Marcus Williams"
    }
  ];

  const politicsArticles = [
    {
      id: "5",
      title: "Senate Passes Historic Infrastructure Bill After Months of Negotiation",
      imageUrl: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "May 11, 2023",
      author: "Robert Johnson"
    },
    {
      id: "6",
      title: "New Voter Access Laws Face Constitutional Challenges in Supreme Court",
      imageUrl: "https://images.unsplash.com/photo-1575672913784-11a7cd4f25df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "May 10, 2023",
      author: "Jennifer Adams"
    },
    {
      id: "7",
      title: "Foreign Policy Reset: Administration Announces New Diplomatic Initiatives",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      category: "Politics",
      date: "May 9, 2023",
      author: "Michael Thompson"
    },
    {
      id: "8",
      title: "Local Governments Implement New Transparency Measures for Police Departments",
      imageUrl: "https://images.unsplash.com/photo-1464039397811-476f652a343b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "May 8, 2023",
      author: "Sarah Collins"
    }
  ];

  const technologyArticles = [
    {
      id: "9",
      title: "Quantum Computing Breakthrough Could Revolutionize Cryptography",
      imageUrl: "https://images.unsplash.com/photo-1639065455976-fd3c6547da1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "May 7, 2023",
      author: "David Kim"
    },
    {
      id: "10",
      title: "Tech Giants Announce Joint Effort to Combat Misinformation Online",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "May 6, 2023",
      author: "Rachel Foster"
    },
    {
      id: "11",
      title: "Next-Generation Virtual Reality Headsets Promise New Era of Immersion",
      imageUrl: "https://images.unsplash.com/photo-1626387346567-68d15fe6c2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Technology",
      date: "May 5, 2023",
      author: "Brian Mitchell"
    },
    {
      id: "12",
      title: "Sustainable Tech: How Startups Are Creating Eco-Friendly Electronics",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "May 4, 2023",
      author: "Emma Garcia"
    }
  ];

  const artsArticles = [
    {
      id: "13",
      title: "Retrospective Exhibition Celebrates Pioneer of Abstract Expressionism",
      imageUrl: "https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "May 3, 2023",
      author: "Olivia Wright"
    },
    {
      id: "14",
      title: "Independent Filmmakers Finding New Audiences Through Streaming Platforms",
      imageUrl: "https://images.unsplash.com/photo-1593566629847-acee33dbdcfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Arts",
      date: "May 2, 2023",
      author: "Thomas Wilson"
    },
    {
      id: "15",
      title: "Digital Art Revolution: NFTs Continue to Transform the Art Market",
      imageUrl: "https://images.unsplash.com/photo-1561046255-d4ef8bd2b4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "May 1, 2023",
      author: "Natasha Davis"
    },
    {
      id: "16",
      title: "Classical Music Innovation: Symphony Orchestras Embrace Modern Compositions",
      imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "April 30, 2023",
      author: "James Peterson"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Featured Article */}
        <section className="container-fluid py-8 md:py-12">
          <FeaturedArticle {...featuredArticle} />
        </section>
        
        {/* Top Stories */}
        <section className="container-fluid py-8">
          <SectionDivider title="Top Stories" className="mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topStories.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>
        
        {/* Politics Section */}
        <section className="container-fluid py-8">
          <SectionDivider 
            title="Politics" 
            link="/section/politics" 
            withViewMore={true} 
            className="mb-8" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {politicsArticles.map(article => (
              <ArticleCard 
                key={article.id} 
                {...article}
                size="small"
              />
            ))}
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="container-fluid py-8">
          <SectionDivider 
            title="Technology" 
            link="/section/technology" 
            withViewMore={true} 
            className="mb-8" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyArticles.map(article => (
              <ArticleCard 
                key={article.id} 
                {...article}
                size="small"
              />
            ))}
          </div>
        </section>
        
        {/* Arts Section */}
        <section className="container-fluid py-8">
          <SectionDivider 
            title="Arts & Culture" 
            link="/section/arts" 
            withViewMore={true} 
            className="mb-8" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artsArticles.map(article => (
              <ArticleCard 
                key={article.id} 
                {...article}
                size="small"
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
