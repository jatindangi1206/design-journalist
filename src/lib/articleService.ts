
import { supabase } from './supabase';

export interface ArticleMetadata {
  id: string;
  title: string;
  subheading?: string;
  category: string;
  author: string;
  date: string;
  imageUrl?: string;
  imageCaption?: string;
  tags?: string[];
  isDraft: boolean;
}

export interface Article extends ArticleMetadata {
  content: string[];
  pullQuote?: string;
}

// Helper to generate a unique ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Get all articles
export const getArticles = async (): Promise<Article[]> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*');
    
    if (error) {
      console.error('Error fetching articles:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

// Get a single article by ID
export const getArticleById = async (id: string): Promise<Article | undefined> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching article:', error);
      return undefined;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching article:', error);
    return undefined;
  }
};

// Save a new article or update an existing one
export const saveArticle = async (article: Omit<Article, 'id'> & { id?: string }): Promise<Article> => {
  const newArticle = {
    ...article,
    id: article.id || generateId(),
    category: article.category.trim() || 'Uncategorized'
  };
  
  try {
    if (article.id) {
      // Update
      const { error } = await supabase
        .from('articles')
        .update(newArticle)
        .eq('id', article.id);
      
      if (error) {
        console.error('Error updating article:', error);
        throw error;
      }
    } else {
      // Insert
      const { error } = await supabase
        .from('articles')
        .insert(newArticle);
      
      if (error) {
        console.error('Error inserting article:', error);
        throw error;
      }
    }
    
    return newArticle;
  } catch (error) {
    console.error('Error saving article:', error);
    throw error;
  }
};

// Delete an article
export const deleteArticle = async (id: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting article:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error deleting article:', error);
    throw error;
  }
};

// Get all drafts
export const getDrafts = async (): Promise<Article[]> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('isDraft', true);
    
    if (error) {
      console.error('Error fetching drafts:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching drafts:', error);
    return [];
  }
};

// Get all published articles
export const getPublishedArticles = async (): Promise<Article[]> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('isDraft', false);
    
    if (error) {
      console.error('Error fetching published articles:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching published articles:', error);
    return [];
  }
};

// Get articles by category (case insensitive)
export const getArticlesByCategory = async (category: string): Promise<Article[]> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('isDraft', false)
      .ilike('category', category);
    
    if (error) {
      console.error('Error fetching articles by category:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching articles by category:', error);
    return [];
  }
};

// Publish a draft
export const publishArticle = async (id: string): Promise<Article | undefined> => {
  try {
    const article = await getArticleById(id);
    if (article && article.isDraft) {
      const updatedArticle = { ...article, isDraft: false };
      await saveArticle(updatedArticle);
      return updatedArticle;
    }
    return article;
  } catch (error) {
    console.error('Error publishing article:', error);
    throw error;
  }
};

// Get all available categories from published articles
export const getCategories = async (): Promise<string[]> => {
  try {
    const articles = await getPublishedArticles();
    const categories = new Set(articles.map(article => article.category));
    return Array.from(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Extract text content from uploaded files
export const extractContentFromFile = async (file: File): Promise<{
  title: string;
  content: string[];
  category: string;
  author: string;
}> => {
  // This is a simplified example. In production, you would need server-side
  // processing for proper file extraction from PDFs, Word docs, etc.
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        if (!event.target?.result) {
          throw new Error("Failed to read file");
        }
        
        const text = event.target.result.toString();
        
        // Simple parsing logic - would be more sophisticated in production
        const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
        
        // Assume first line is title
        const title = lines[0] || 'Untitled Document';
        
        // Try to extract author - look for "By" or "Author:" pattern
        let author = 'Unknown Author';
        let authorIndex = -1;
        
        for (let i = 1; i < Math.min(5, lines.length); i++) {
          if (lines[i].toLowerCase().startsWith('by ') || 
              lines[i].toLowerCase().includes('author:')) {
            author = lines[i].replace(/^by |author:/i, '').trim();
            authorIndex = i;
            break;
          }
        }
        
        // Extract content, skipping title and author
        const content = lines
          .filter((_, index) => index !== 0 && index !== authorIndex)
          .map(line => line.trim())
          .filter(line => line.length > 0);
        
        // Try to determine category from content
        const academicKeywords = [
          { term: 'research', category: 'Research' },
          { term: 'study', category: 'Study' },
          { term: 'analysis', category: 'Analysis' },
          { term: 'review', category: 'Review' },
          { term: 'paper', category: 'Academic' }
        ];
        
        let category = 'Academic';
        
        // Simple category detection
        for (const keyword of academicKeywords) {
          if (content.some(paragraph => 
            paragraph.toLowerCase().includes(keyword.term)
          )) {
            category = keyword.category;
            break;
          }
        }
        
        resolve({
          title,
          content,
          category,
          author
        });
      } catch (error) {
        reject(new Error("Failed to parse document"));
      }
    };
    
    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
    
    // Read as text for basic extraction
    // In production, you would need different strategies for different file types
    reader.readAsText(file);
  });
};
