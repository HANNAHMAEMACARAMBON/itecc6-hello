import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nfyvimlvqwpseeehqxap.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5meXZpbWx2cXdwc2VlZWhxeGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNjQyMzgsImV4cCI6MjA5MTc0MDIzOH0.SQHaSKn0yeHExTmcu_1_BAXlcwNgNtYB21C9jjE2cIs'
export const supabase = createClient (supabaseUrl, supabaseKey