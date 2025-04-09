
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

-- Insert sample portfolio content
INSERT INTO articles (id, title, subheading, category, author, date, imageUrl, isdraft, content)
VALUES
  (
    'ux-design-biotech',
    'UX Design for Biotechnology Research Interface',
    'Creating intuitive interfaces for complex scientific data',
    'Design',
    'Jatin Dangi',
    '2023-11-15',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    false,
    ARRAY['This project focused on designing an intuitive user interface for biotechnology researchers to visualize complex genomic data.', 'I developed wireframes, user flows, and high-fidelity prototypes that simplified data visualization while maintaining scientific accuracy.', 'The final interface reduced analysis time by 40% and improved data interpretation accuracy according to user testing.']
  ),
  (
    'urban-photography',
    'Urban Landscapes: A Photographic Study',
    'Exploring the intersection of nature and urban environments',
    'Photography',
    'Jatin Dangi',
    '2023-12-20',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    false,
    ARRAY['This photography series examines the relationship between urban architecture and natural elements.', 'Shot over six months in various cities, the collection explores how nature adapts and thrives in urban environments.', 'The series uses a consistent color palette and composition style to highlight the contrast and harmony between built and natural environments.']
  ),
  (
    'ai-ml-research',
    'Machine Learning Algorithms for Biological Data Analysis',
    'Applying computer science to solve biological problems',
    'CS',
    'Jatin Dangi',
    '2024-01-10',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    false,
    ARRAY['This research project developed novel machine learning algorithms to analyze complex biological datasets.', 'I implemented several supervised and unsupervised learning approaches to identify patterns in gene expression data.', 'The resulting models achieved 92% accuracy in predicting protein interactions from genomic data.']
  ),
  (
    'cell-culture-optimization',
    'Optimization of Mammalian Cell Culture Conditions',
    'Experimental approaches to improve cell culture efficiency',
    'Biology',
    'Jatin Dangi',
    '2024-02-05',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    false,
    ARRAY['This research focused on optimizing culture conditions for mammalian cell lines used in biological research.', 'Through systematic experimentation, I identified key variables affecting cell growth rates and protein expression.', 'The optimized protocols increased cell viability by 35% and protein yield by 28% compared to standard methods.']
  ),
  (
    'science-documentary',
    'Visual Storytelling in Science Communication',
    'Using video to communicate complex scientific concepts',
    'Video',
    'Jatin Dangi',
    '2024-03-01',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    false,
    ARRAY['This video project demonstrates how effective visual storytelling can improve science communication.', 'I produced and edited a short documentary explaining CRISPR gene editing technology for a general audience.', 'The video combines animation, interviews, and laboratory footage to explain complex concepts in an accessible way.']
  ),
  (
    'responsive-web-design',
    'Responsive Design Principles for Scientific Applications',
    'Ensuring scientific web applications work across all devices',
    'Design',
    'Jatin Dangi',
    '2024-03-15',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    false,
    ARRAY['This project explored responsive design principles specifically for scientific web applications.', 'I developed a framework that ensures complex data visualizations and interactive tools remain usable across desktop, tablet, and mobile devices.', 'The approach prioritizes data integrity while adapting the interface to different screen sizes and interaction modes.']
  );
