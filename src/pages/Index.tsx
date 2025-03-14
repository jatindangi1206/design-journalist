
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ArticleCard from '../components/ui/ArticleCard';
import FeaturedArticle from '../components/ui/FeaturedArticle';
import SectionDivider from '../components/ui/SectionDivider';
import { getPublishedArticles, Article } from '../lib/articleService';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [categorizedArticles, setCategorizedArticles] = useState<Record<string, Article[]>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        // Fetch published articles from Supabase
        const publishedArticles = await getPublishedArticles();
        
        setArticles(publishedArticles);
        
        // Set the first article as featured if it exists
        if (publishedArticles.length > 0) {
          setFeaturedArticle(publishedArticles[0]);
        }
        
        // Categorize articles
        const categories: Record<string, Article[]> = {};
        publishedArticles.forEach(article => {
          if (!categories[article.category]) {
            categories[article.category] = [];
          }
          categories[article.category].push(article);
        });
        
        setCategorizedArticles(categories);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {loading ? (
          <div className="py-16 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-nyt-red" />
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredArticle && (
              <section className="container-fluid py-8 md:py-12">
                <FeaturedArticle 
                  id={featuredArticle.id}
                  title={featuredArticle.title}
                  description={featuredArticle.subheading || featuredArticle.content[0] || ''}
                  imageUrl={featuredArticle.imageUrl || 'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
                  category={featuredArticle.category}
                  date={featuredArticle.date}
                  author={featuredArticle.author}
                />
              </section>
            )}
            
            {/* Top Stories */}
            {articles.length > 1 && (
              <section className="container-fluid py-8">
                <SectionDivider title="Top Stories" className="mb-8" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.slice(1, 4).map(article => (
                    <ArticleCard 
                      key={article.id} 
                      id={article.id}
                      title={article.title}
                      description={article.subheading || article.content[0] || ''}
                      imageUrl={article.imageUrl || 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}
                      category={article.category}
                      date={article.date}
                      author={article.author}
                    />
                  ))}
                </div>
              </section>
            )}
            
            {/* Display Category Sections */}
            {Object.keys(categorizedArticles).map(category => (
              categorizedArticles[category].length > 0 && (
                <section className="container-fluid py-8" key={category}>
                  <SectionDivider 
                    title={category} 
                    link={`/section/${category.toLowerCase()}`} 
                    withViewMore={true} 
                    className="mb-8" 
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categorizedArticles[category].slice(0, 4).map(article => (
                      <ArticleCard 
                        key={article.id} 
                        id={article.id}
                        title={article.title}
                        imageUrl={article.imageUrl || 'https://images.unsplash.com/photo-1594971475674-6a93cc7b0834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'}
                        category={article.category}
                        date={article.date}
                        author={article.author}
                        size="small"
                      />
                    ))}
                  </div>
                </section>
              )
            ))}

            {articles.length === 0 && (
              <section className="container-fluid py-16 text-center">
                <h2 className="font-serif text-2xl mb-4">No articles published yet</h2>
                <p className="text-nyt-gray-dark">Visit the Editor to create and publish your first article.</p>
              </section>
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
