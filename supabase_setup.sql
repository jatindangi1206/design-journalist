
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
    'royal-heritage-history',
    'The Royal Legacy of Mahmudabad',
    'A journey through centuries of cultural heritage',
    'Heritage',
    'Prince of Mahmudabad',
    '2023-06-15',
    'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    false,
    ARRAY['The Mahmudabad estate represents one of the most significant cultural and architectural treasures in our region.', 'With a history stretching back several centuries, our family has been entrusted with preserving this legacy for generations to come.', 'This article explores the architectural wonders, artistic traditions, and royal customs that define our heritage.']
  ),
  (
    'documentary-royal-kitchens',
    'The Royal Kitchens: A Culinary Journey',
    'Documenting ancient recipes and cooking traditions',
    'Documentaries',
    'Prince of Mahmudabad',
    '2023-07-20',
    'https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=6000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    false,
    ARRAY['Our latest documentary explores the hidden world of the royal kitchens of Mahmudabad.', 'For centuries, these kitchens have produced culinary masterpieces that blend Persian, Mughal, and local influences.', 'This film documents the efforts to preserve these recipes and cooking techniques for future generations.']
  ),
  (
    'philanthropy-education-initiative',
    'Royal Education Initiative',
    'Building schools and supporting educational access across the region',
    'Philanthropy',
    'Prince of Mahmudabad',
    '2023-08-10',
    'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=4221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    false,
    ARRAY['Education has always been a cornerstone of our philanthropic efforts.', 'The Mahmudabad Education Initiative aims to provide quality education to children across our region, regardless of their background.', 'This article highlights our ongoing projects, partnerships with educational institutions, and future plans to expand our impact.']
  );
