// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kfwnqpequaejndvrkugc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmd25xcGVxdWFlam5kdnJrdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDIzOTAsImV4cCI6MjA2MTc3ODM5MH0.xJM6_uQMomPblgkcvePuERJrtzggAxmmmoHWp4PNgi8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);