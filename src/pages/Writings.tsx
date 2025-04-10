
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionHero, SectionIntro, SectionGrid, ProjectCard } from '../components/ui/SectionTemplate';
import { getPublishedArticles, Article } from '../lib/articleService';
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';

const Writings = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const publishedArticles = await getPublishedArticles();
        setArticles(publishedArticles);
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
        <SectionHero
          title="Writings"
          subtitle="Thoughts, essays, and reflections on technology, design, and science"
          backgroundImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        >
          <Button variant="outline" className="mt-6 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/40 text-white">
            Latest Articles
          </Button>
        </SectionHero>
        
        <SectionIntro>
          <h2 className="text-3xl font-serif mb-4">My Written Work</h2>
          <p>
            Welcome to my collection of articles, essays, and reflections. Here, I share my thoughts on 
            the intersection of technology, design, biology, and computer science. These writings are a 
            reflection of my experiences, research, and creative journey.
          </p>
        </SectionIntro>
        
        {loading ? (
          <div className="py-16 flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-nyt-red" />
          </div>
        ) : articles.length > 0 ? (
          <SectionGrid columns={3}>
            {articles.map((article) => (
              <ProjectCard
                key={article.id}
                title={article.title}
                description={article.subheading || article.content[0] || ''}
                imageUrl={article.imageUrl || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'}
                tags={article.tags}
                link={`/article/${article.id}`}
              />
            ))}
          </SectionGrid>
        ) : (
          <div className="container-fluid py-16 text-center">
            <h2 className="font-serif text-2xl mb-4">No articles published yet</h2>
            <p className="text-nyt-gray-dark">Check back soon for new content!</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Writings;
