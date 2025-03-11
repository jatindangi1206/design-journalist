
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArticleCard from '../components/ui/ArticleCard';
import FeaturedArticle from '../components/ui/FeaturedArticle';
import SectionDivider from '../components/ui/SectionDivider';

const Index = () => {
  // Updated featured article
  const featuredArticle = {
    id: "1",
    title: "Trump's Naval Academy Appointments Intensify Military Oversight Focus",
    description: "President Trump appointed loyalists, including former press secretary Sean Spicer and valet Walt Nauta, to the Naval Academy Board, intensifying his focus on military oversight.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "Politics",
    date: "March 15, 2025",
    author: "Robert Johnson"
  };

  // Updated top stories
  const topStories = [
    {
      id: "2",
      title: "Google Launches Gemini 2.0 Flash and Career Dreamer AI Tools",
      description: "Google expands its AI portfolio with Gemini 2.0 Flash for developers and Career Dreamer, an AI career-planning tool.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 14, 2025",
      author: "Jonathan Chen"
    },
    {
      id: "3",
      title: "Government Shutdown Looms as Congress Stalls on Funding",
      description: "Federal agencies prepare contingency plans as funding deadline approaches, risking a shutdown by March 17.",
      imageUrl: "https://images.unsplash.com/photo-1569163139599-0f4259cc6a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 13, 2025",
      author: "Sophia Rodriguez"
    },
    {
      id: "4",
      title: "X (Twitter) Faces Global Outage, Musk Blames Cyberattack",
      description: "Elon Musk attributed a platform-wide disruption to a 'massive cyberattack' by a 'coordinated group or country'.",
      imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 12, 2025",
      author: "Marcus Williams"
    }
  ];

  // Updated politics articles
  const politicsArticles = [
    {
      id: "5",
      title: "U.S.-Canada Trade Tensions Escalate As Trump Delays Tariffs",
      imageUrl: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 11, 2025",
      author: "Robert Johnson"
    },
    {
      id: "6",
      title: "Marist Poll: 56% Believe Trump Moving Too Quickly on Policies",
      imageUrl: "https://images.unsplash.com/photo-1575672913784-11a7cd4f25df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 10, 2025",
      author: "Jennifer Adams"
    },
    {
      id: "7",
      title: "Ukraine-Russia Conflict: Kyiv Seeks Ceasefire After Aid Reduction",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      category: "Politics",
      date: "March 9, 2025",
      author: "Michael Thompson"
    },
    {
      id: "8",
      title: "VA Staffing Cuts: Proposed Layoffs Spark Healthcare Access Concerns",
      imageUrl: "https://images.unsplash.com/photo-1464039397811-476f652a343b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "March 8, 2025",
      author: "Sarah Collins"
    }
  ];

  // Updated technology articles
  const technologyArticles = [
    {
      id: "9",
      title: "EU's AI Transparency Mandate: 'Neural Receipts' Required from March 15",
      imageUrl: "https://images.unsplash.com/photo-1639065455976-fd3c6547da1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 7, 2025",
      author: "David Kim"
    },
    {
      id: "10",
      title: "IBM's 10,000-Qubit Processor Achieves Commercial Error Correction",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 6, 2025",
      author: "Rachel Foster"
    },
    {
      id: "11",
      title: "YouTube Integrates Veo 2 AI Video Generation Into Dream Screen",
      imageUrl: "https://images.unsplash.com/photo-1626387346567-68d15fe6c2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Technology",
      date: "March 5, 2025",
      author: "Brian Mitchell"
    },
    {
      id: "12",
      title: "Athena Moon Lander Reaches South Pole with Uncertain Status",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      date: "March 4, 2025",
      author: "Emma Garcia"
    }
  ];

  // Updated arts articles
  const artsArticles = [
    {
      id: "13",
      title: "Kennedy Center Overhaul: Trump Adds Fox News Hosts to Board",
      imageUrl: "https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "March 3, 2025",
      author: "Olivia Wright"
    },
    {
      id: "14",
      title: "Glastonbury 2025 Lineup: The 1975, Neil Young, and Olivia Rodrigo",
      imageUrl: "https://images.unsplash.com/photo-1593566629847-acee33dbdcfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      category: "Arts",
      date: "March 2, 2025",
      author: "Thomas Wilson"
    },
    {
      id: "15",
      title: "Kara Walker's SFMOMA Exhibit Blends Historical and Futuristic Themes",
      imageUrl: "https://images.unsplash.com/photo-1561046255-d4ef8bd2b4d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      date: "March 1, 2025",
      author: "Natasha Davis"
    },
    {
      id: "16",
      title: "Kim Kardashian's Outfit Controversy: Bianca Censori-Inspired Look",
      imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      category: "Style",
      date: "February 28, 2025",
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

