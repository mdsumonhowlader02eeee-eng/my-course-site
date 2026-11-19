// Shared setup. Only the PUBLISHABLE key goes here. Never put a secret key in this file.
const SUPABASE_URL = "https://bmpafnoynctdvvwrrgzp.supabase.co";
const SUPABASE_KEY = "sb_publishable_A3W8tYESXacXl6X7dNvx3Q_ZSlB8N0e";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
