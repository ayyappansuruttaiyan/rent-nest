import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ktbspcljzjadhndwcvna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0YnNwY2xqemphZGhuZHdjdm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2NTg4NjksImV4cCI6MjAzNzIzNDg2OX0.YOlalz-9so5pgl8D_CFCCoFvf318q9aZ6ohvRpi52ew";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
