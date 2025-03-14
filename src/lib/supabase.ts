
import { createClient } from '@supabase/supabase-js';

// You may need to update these with your actual Supabase project details
const supabaseUrl = 'https://gkrmqrtabfmvravjtwws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdrcm1xcnRhYmZtdnJhdmp0d3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDQ4NjYsImV4cCI6MjA1NzUyMDg2Nn0.I0GdVKjh49uAn0OORx17tlwWddiezZKcBD0ixqssPh4';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Simple test function to verify connection
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('articles').select('count', { count: 'exact' });
    if (error) throw error;
    console.log('Supabase connection successful, found articles table');
    return true;
  } catch (error) {
    console.error('Supabase connection error:', error);
    return false;
  }
};
