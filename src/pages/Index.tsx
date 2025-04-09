
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
                  imageUrl={featuredArticle.imageUrl || 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  category={featuredArticle.category}
                  date={featuredArticle.date}
                  author={featuredArticle.author}
                />
              </section>
            )}
            
            {/* Heritage Highlights */}
            <section className="container-fluid py-8 bg-nyt-background">
              <SectionDivider title="Royal Heritage" link="/section/heritage" withViewMore={true} className="mb-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedArticles['Heritage']?.slice(0, 3).map(article => (
                  <ArticleCard 
                    key={article.id} 
                    id={article.id}
                    title={article.title}
                    description={article.subheading || article.content[0] || ''}
                    imageUrl={article.imageUrl || 'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    category={article.category}
                    date={article.date}
                    author={article.author}
                  />
                )) || (
                  <div className="col-span-3 text-center py-8">
                    <p className="text-nyt-gray-dark">Heritage articles coming soon.</p>
                  </div>
                )}
              </div>
            </section>
            
            {/* Documentaries Section */}
            <section className="container-fluid py-8">
              <SectionDivider title="Documentaries" link="/section/documentaries" withViewMore={true} className="mb-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categorizedArticles['Documentaries']?.slice(0, 4).map(article => (
                  <ArticleCard 
                    key={article.id} 
                    id={article.id}
                    title={article.title}
                    imageUrl={article.imageUrl || 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    category={article.category}
                    date={article.date}
                    author={article.author}
                    size="small"
                  />
                )) || (
                  <div className="col-span-4 text-center py-8">
                    <p className="text-nyt-gray-dark">Documentary features coming soon.</p>
                  </div>
                )}
              </div>
            </section>
            
            {/* Display Other Category Sections */}
            {Object.keys(categorizedArticles)
              .filter(category => !['Heritage', 'Documentaries'].includes(category))
              .map(category => (
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
                          imageUrl={article.imageUrl || 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=4221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                          category={article.category}
                          date={article.date}
                          author={article.author}
                          size="small"
                        />
                      ))}
                    </div>
                  </section>
                )
              )
            )}

            {articles.length === 0 && (
              <section className="container-fluid py-16 text-center">
                <h2 className="font-serif text-2xl mb-4">Welcome to the Royal Heritage of Mahmudabad</h2>
                <p className="text-nyt-gray-dark">Content is being curated. Visit again soon to explore our rich heritage and contemporary initiatives.</p>
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
