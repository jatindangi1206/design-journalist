
-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subheading TEXT,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL,
  imageUrl TEXT,
  imageCaption TEXT,
  tags TEXT[],
  isdraft BOOLEAN NOT NULL DEFAULT TRUE,
  content TEXT[] NOT NULL,
  pullQuote TEXT
);

-- Add RLS (Row Level Security) policies
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Allow anonymous access for reading published articles
CREATE POLICY "Allow anonymous access to published articles" ON articles
  FOR SELECT
  USING (isdraft = false);

-- Allow authenticated users to read all articles
CREATE POLICY "Allow authenticated users to read all articles" ON articles
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert articles
CREATE POLICY "Allow authenticated users to insert articles" ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update articles
CREATE POLICY "Allow authenticated users to update articles" ON articles
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users to delete articles
CREATE POLICY "Allow authenticated users to delete articles" ON articles
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert some sample articles data
INSERT INTO articles (id, title, subheading, category, author, date, imageUrl, isdraft, content)
VALUES
  (
    'sample-article-1',
    'Getting Started with React',
    'A comprehensive guide for beginners',
    'Technology',
    'Jatin',
    '2023-06-15',
    'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    false,
    ARRAY['React is a popular JavaScript library for building user interfaces.', 'In this article, we will explore the basics of React and how to create your first React application.', 'We will cover components, props, state, and more.']
  ),
  (
    'sample-article-2',
    'Understanding TypeScript',
    'Why TypeScript is essential for modern web development',
    'Programming',
    'Jatin',
    '2023-07-20',
    'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    false,
    ARRAY['TypeScript adds static typing to JavaScript, making it easier to catch errors during development.', 'This article explains the benefits of TypeScript and how to integrate it into your projects.', 'We will discuss interfaces, types, generics, and best practices.']
  ),
  (
    'draft-article-1',
    'Working with Supabase',
    'Building applications with Supabase and React',
    'Database',
    'Jatin',
    '2023-08-10',
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    true,
    ARRAY['Supabase is an open-source Firebase alternative.', 'This article shows how to integrate Supabase with React applications.', 'We will cover authentication, database operations, and real-time subscriptions.']
  );

