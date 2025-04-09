
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArticleCard from '../components/ui/ArticleCard';
import SectionDivider from '../components/ui/SectionDivider';
import { getPublishedArticles, getArticlesByCategory, Article } from '../lib/articleService';
import { Loader2 } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const Section = () => {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        let fetchedArticles: Article[];
        
        if (category) {
          fetchedArticles = await getArticlesByCategory(category);
        } else {
          fetchedArticles = await getPublishedArticles();
        }
        
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, [category]);
  
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  
  // Default hero images for different categories
  const getCategoryHeroImage = () => {
    switch (category?.toLowerCase()) {
      case 'heritage':
        return "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case 'documentaries':
        return "https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case 'philanthropy':
        return "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=4221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      case 'gallery':
        return "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=3847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      default:
        return "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
  };
  
  // Category descriptions
  const getCategoryDescription = () => {
    switch (category?.toLowerCase()) {
      case 'heritage':
        return "Explore the rich cultural heritage and historical significance of the Mahmudabad royal estate, with centuries of art, architecture, and traditions.";
      case 'documentaries':
        return "Discover our collection of documentary films chronicling royal history, cultural preservation efforts, and the legacy of Mahmudabad.";
      case 'philanthropy':
        return "Learn about our ongoing initiatives to support education, cultural preservation, and community development across the region.";
      default:
        return "Explore articles, stories, and media related to the royal heritage of Mahmudabad.";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with category image */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={getCategoryHeroImage()} 
            alt={formattedCategory}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
            <h1 className="text-white font-serif text-4xl md:text-6xl font-bold mb-4 royal-header">
              {formattedCategory}
            </h1>
            <p className="text-white/90 max-w-2xl text-lg md:text-xl">
              {getCategoryDescription()}
            </p>
          </div>
        </div>
        
        <div className="container-fluid py-8">
          <div className="royal-divider my-8">
            <span className="text-royal-gold px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <path d="M6 19V5"/>
                <path d="M10 19V6.8"/>
                <path d="M14 19v-7.8"/>
                <path d="M18 19v-1.8"/>
                <path d="M12 19v-4"/>
                <path d="M16 19v-5"/>
                <path d="M2 19V9"/>
                <path d="M22 19v-9"/>
                <path d="M6 12H2"/>
                <path d="M10 7H6"/>
                <path d="M12 15h-2"/>
                <path d="M14 11h-2"/>
                <path d="M18 13h-4"/>
              </svg>
            </span>
          </div>
          
          {loading ? (
            <div className="py-16 flex justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-royal-gold" />
            </div>
          ) : articles.length > 0 ? (
            <>
              {category?.toLowerCase() === 'documentaries' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map(article => (
                    <Card key={article.id} className="overflow-hidden royal-card hover:royal-shadow">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={article.imageUrl || 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <CardContent className="p-5">
                        <div className="mb-2 flex items-center">
                          <span className="text-royal-gold font-sans text-xs uppercase tracking-wider mr-2">{article.category}</span>
                          <span className="text-nyt-gray-dark font-sans text-xs">• {article.date}</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-nyt-gray-dark text-sm mb-3 line-clamp-2">{article.subheading || article.content[0] || ''}</p>
                        <p className="text-nyt-gray font-sans text-xs">By {article.author}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map(article => (
                    <ArticleCard 
                      key={article.id} 
                      id={article.id}
                      title={article.title}
                      description={article.subheading || article.content[0] || ''}
                      imageUrl={article.imageUrl || 'https://images.unsplash.com/photo-1594971475674-6a93cc7b0834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'}
                      category={article.category}
                      date={article.date}
                      author={article.author}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="py-16 text-center">
              <h2 className="font-serif text-2xl mb-4 text-royal-gold">No articles in this category</h2>
              <p className="text-nyt-gray-dark">Check back later for new content or explore other categories.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Section;
