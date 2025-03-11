
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
export const getArticles = (): Article[] => {
  const articles = localStorage.getItem('articles');
  return articles ? JSON.parse(articles) : [];
};

// Get a single article by ID
export const getArticleById = (id: string): Article | undefined => {
  const articles = getArticles();
  return articles.find(article => article.id === id);
};

// Save a new article or update an existing one
export const saveArticle = (article: Omit<Article, 'id'> & { id?: string }): Article => {
  const articles = getArticles();
  const newArticle = {
    ...article,
    id: article.id || generateId()
  };
  
  const existingIndex = articles.findIndex(a => a.id === newArticle.id);
  
  if (existingIndex >= 0) {
    articles[existingIndex] = newArticle;
  } else {
    articles.push(newArticle);
  }
  
  localStorage.setItem('articles', JSON.stringify(articles));
  return newArticle;
};

// Delete an article
export const deleteArticle = (id: string): void => {
  const articles = getArticles();
  const filteredArticles = articles.filter(article => article.id !== id);
  localStorage.setItem('articles', JSON.stringify(filteredArticles));
};

// Get all drafts
export const getDrafts = (): Article[] => {
  return getArticles().filter(article => article.isDraft);
};

// Get all published articles
export const getPublishedArticles = (): Article[] => {
  return getArticles().filter(article => !article.isDraft);
};

// Publish a draft
export const publishArticle = (id: string): Article | undefined => {
  const article = getArticleById(id);
  if (article && article.isDraft) {
    const updatedArticle = { ...article, isDraft: false };
    saveArticle(updatedArticle);
    return updatedArticle;
  }
  return article;
};
