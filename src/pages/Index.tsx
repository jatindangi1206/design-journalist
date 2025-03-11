
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArticleCard from '../components/ui/ArticleCard';
import FeaturedArticle from '../components/ui/FeaturedArticle';
import SectionDivider from '../components/ui/SectionDivider';

const Index = () => {
  // Updated article data for March 11, 2025
  const featuredArticle = {
    id: "1",
    title: "The Future of Urban Architecture: Sustainable Vertical Climate Arks",
    description: "Singapore's groundbreaking solarpunk project combines cutting-edge sustainability with tourism, completed five years ahead of schedule.",
    imageUrl: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "Environment",
    date: "March 11, 2025",
    author: "Alexandra Rivers"
  };

  const topStories = [
    {
      id: "2",
      title: "Google Launches Gemini 2.0 Flash and Career Dreamer AI Tools",
      description: "Tech giant expands AI portfolio with new developer tools and an innovative career planning assistant.",
      imageUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 11, 2025",
      author: "Jonathan Chen"
    },
    {
      id: "3",
      title: "Government Shutdown Looms as Congress Stalls on Funding",
      description: "Federal agencies prepare contingency plans as deadline approaches on March 17.",
      imageUrl: "https://images.unsplash.com/photo-1577722422778-7fa321b0721e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 10, 2025",
      author: "Sophia Rodriguez"
    },
    {
      id: "4",
      title: "President Appoints Loyalists to Naval Academy Board",
      description: "Former press secretary and personal valet among controversial appointments intensifying focus on military oversight.",
      imageUrl: "https://images.unsplash.com/photo-1591806013158-278e331c770d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 9, 2025",
      author: "Marcus Williams"
    }
  ];

  const politicsArticles = [
    {
      id: "5",
      title: "U.S.-Canada Trade Tensions Rise Over Tariff Threats",
      imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 8, 2025",
      author: "Robert Johnson"
    },
    {
      id: "6",
      title: "Ukraine Seeks Ceasefire Talks as Military Aid Reduced",
      imageUrl: "https://images.unsplash.com/photo-1658156042102-c07e5a8e0e1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 7, 2025",
      author: "Jennifer Adams"
    },
    {
      id: "7",
      title: "Marist Poll: 56% Say New Administration Moving Too Quickly",
      imageUrl: "https://images.unsplash.com/photo-1569702423278-a3aad3778a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 6, 2025",
      author: "Michael Thompson"
    },
    {
      id: "8",
      title: "VA Staffing Cuts Raise Concerns About Veteran Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 5, 2025",
      author: "Sarah Collins"
    }
  ];

  const technologyArticles = [
    {
      id: "9",
      title: "IBM's 10,000-Qubit Processor Achieves Commercial Error Correction",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 10, 2025",
      author: "David Kim"
    },
    {
      id: "10",
      title: "EU Implements 'Neural Receipts' for AI Transparency",
      imageUrl: "https://images.unsplash.com/photo-1642483160522-82c49e05eba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 9, 2025",
      author: "Rachel Foster"
    },
    {
      id: "11",
      title: "YouTube Integrates Veo 2 AI Video Generator for Shorts",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Technology",
      date: "March 8, 2025",
      author: "Brian Mitchell"
    },
    {
      id: "12",
      title: "Private Athena Lander Reaches Moon's South Pole",
      imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 7, 2025",
      author: "Emma Garcia"
    }
  ];

  const artsArticles = [
    {
      id: "13",
      title: "Glastonbury 2025 Lineup Announced with The 1975, Neil Young",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "March 11, 2025",
      author: "Olivia Wright"
    },
    {
      id: "14",
      title: "Kara Walker's SFMOMA Exhibit Blends Historical and Futuristic Themes",
      imageUrl: "https://images.unsplash.com/photo-1594971475674-6a93cc7b0834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Arts",
      date: "March 10, 2025",
      author: "Thomas Wilson"
    },
    {
      id: "15",
      title: "Kennedy Center Overhaul Prompts Artist Boycotts",
      imageUrl: "https://images.unsplash.com/photo-1518622358385-8f33c61636f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "March 9, 2025",
      author: "Natasha Davis"
    },
    {
      id: "16",
      title: "Gen Z's Analog Revival: Typewriter Sales Surge Among Digital Natives",
      imageUrl: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "March 8, 2025",
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
