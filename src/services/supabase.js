import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fpenplmhipyucjqsopcy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZW5wbG1oaXB5dWNqcXNvcGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzODMyMTksImV4cCI6MjAxODk1OTIxOX0.f3DvSqrPXDKX60cb2YSDWqh03uE58Otd2f1cGvSICm4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
