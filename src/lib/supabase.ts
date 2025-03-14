
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gkrmqrtabfmvravjtwws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdrcm1xcnRhYmZtdnJhdmp0d3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDQ4NjYsImV4cCI6MjA1NzUyMDg2Nn0.I0GdVKjh49uAn0OORx17tlwWddiezZKcBD0ixqssPh4';

export const supabase = createClient(supabaseUrl, supabaseKey);
