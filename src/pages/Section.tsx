
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArticleCard from '../components/ui/ArticleCard';
import SectionDivider from '../components/ui/SectionDivider';
import { getPublishedArticles, Article } from '../lib/articleService';

const Section = () => {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Get all published articles
    const publishedArticles = getPublishedArticles();
    
    // Filter articles by category (case insensitive)
    const filteredArticles = publishedArticles.filter(article => 
      article.category.toLowerCase() === category?.toLowerCase()
    );
    
    setArticles(filteredArticles);
    setLoading(false);
  }, [category]);
  
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container-fluid py-8">
        <SectionDivider title={formattedCategory} className="mb-8" />
        
        {loading ? (
          <div className="py-16 text-center">
            <p className="text-nyt-gray-dark">Loading articles...</p>
          </div>
        ) : articles.length > 0 ? (
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
        ) : (
          <div className="py-16 text-center">
            <h2 className="font-serif text-2xl mb-4">No articles in this category</h2>
            <p className="text-nyt-gray-dark">Check back later for new content or explore other categories.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Section;
