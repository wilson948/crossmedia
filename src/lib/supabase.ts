import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://0ec90b57d6e95fcbda19832f.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Category = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
};

export type InventoryProduct = {
  id: string;
  name: string;
  description: string | null;
  sku: string;
  category_id: string | null;
  brand: string | null;
  price: number;
  cost: number;
  stock_quantity: number;
  min_stock_level: number;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type StockMovement = {
  id: string;
  product_id: string;
  movement_type: 'in' | 'out' | 'adjustment';
  quantity: number;
  previous_quantity: number;
  new_quantity: number;
  reason: string | null;
  created_at: string;
};

export type Branch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string | null;
  hours: string;
  latitude: number | null;
  longitude: number | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
};

export type UserRole = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
};

export type UserPermission = {
  id: string;
  name: string;
  description: string | null;
  category: string;
  created_at: string;
};

export type UserProfile = {
  id: string;
  role_id: string | null;
  branch_id: string | null;
  full_name: string;
  phone: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};
