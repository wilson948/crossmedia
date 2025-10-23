import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

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
