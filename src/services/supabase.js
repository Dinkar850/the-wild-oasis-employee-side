import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://popeadfhgqlywyzxczxx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcGVhZGZoZ3FseXd5enhjenh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyOTc3OTMsImV4cCI6MjA2NDg3Mzc5M30.2vXnp_2dvPukSpxgs05wmV17liFbPbeOV9OY6omjYtw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
//supabase client
