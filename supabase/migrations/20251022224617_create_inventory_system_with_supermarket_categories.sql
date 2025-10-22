/*
  # Create Inventory Management System with Supermarket Categories

  ## Overview
  This migration creates a complete inventory management system for the supermarket.

  ## New Tables
  
  ### `categories`
  - `id` (text, primary key) - Category identifier (e.g., "fruits", "vegetables")
  - `name` (text) - Category name in Spanish (e.g., "Frutas", "Verduras")
  - `description` (text, nullable) - Category description
  - `created_at` (timestamptz) - Record creation timestamp

  ### `inventory_products`
  - `id` (uuid, primary key) - Unique identifier for each product
  - `name` (text) - Product name
  - `description` (text, nullable) - Product description
  - `sku` (text, unique) - Stock Keeping Unit code
  - `category_id` (text, foreign key) - References categories table
  - `brand` (text) - Product brand
  - `price` (numeric) - Product price
  - `cost` (numeric) - Product cost (for profit calculation)
  - `stock_quantity` (integer) - Current stock quantity
  - `min_stock_level` (integer) - Minimum stock alert level
  - `image_url` (text, nullable) - Product image URL
  - `is_active` (boolean) - Whether product is active/visible
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `stock_movements`
  - `id` (uuid, primary key) - Unique identifier for each movement
  - `product_id` (uuid, foreign key) - References inventory_products table
  - `movement_type` (text) - Type: 'in' (entrada), 'out' (salida), 'adjustment' (ajuste)
  - `quantity` (integer) - Quantity moved (positive or negative)
  - `previous_quantity` (integer) - Stock before movement
  - `new_quantity` (integer) - Stock after movement
  - `reason` (text, nullable) - Reason for movement
  - `created_at` (timestamptz) - Movement timestamp

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Add policies for authenticated users to manage inventory
  - Public users can only view active products

  ## Indexes
  - Index on product SKU for fast lookups
  - Index on category_id for filtered queries
  - Index on stock_movements product_id for movement history
*/

-- Create categories table with text ID
CREATE TABLE IF NOT EXISTS categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create inventory_products table
CREATE TABLE IF NOT EXISTS inventory_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  sku text UNIQUE NOT NULL,
  category_id text REFERENCES categories(id) ON DELETE SET NULL,
  brand text,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  cost numeric(10, 2) NOT NULL DEFAULT 0,
  stock_quantity integer NOT NULL DEFAULT 0,
  min_stock_level integer NOT NULL DEFAULT 5,
  image_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create stock_movements table
CREATE TABLE IF NOT EXISTS stock_movements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES inventory_products(id) ON DELETE CASCADE,
  movement_type text NOT NULL CHECK (movement_type IN ('in', 'out', 'adjustment')),
  quantity integer NOT NULL,
  previous_quantity integer NOT NULL,
  new_quantity integer NOT NULL,
  reason text,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_inventory_products_sku ON inventory_products(sku);
CREATE INDEX IF NOT EXISTS idx_inventory_products_category ON inventory_products(category_id);
CREATE INDEX IF NOT EXISTS idx_stock_movements_product ON stock_movements(product_id);
CREATE INDEX IF NOT EXISTS idx_stock_movements_created_at ON stock_movements(created_at DESC);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE stock_movements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON categories FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for inventory_products
CREATE POLICY "Anyone can view active products"
  ON inventory_products FOR SELECT
  USING (is_active = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert products"
  ON inventory_products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON inventory_products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON inventory_products FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for stock_movements
CREATE POLICY "Authenticated users can view stock movements"
  ON stock_movements FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert stock movements"
  ON stock_movements FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on inventory_products
DROP TRIGGER IF EXISTS update_inventory_products_updated_at ON inventory_products;
CREATE TRIGGER update_inventory_products_updated_at
  BEFORE UPDATE ON inventory_products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert supermarket categories
INSERT INTO categories (id, name, description) VALUES
  ('fruits', 'Frutas', 'Frutas frescas y orgánicas'),
  ('vegetables', 'Verduras', 'Verduras frescas y vegetales'),
  ('meat', 'Carnes', 'Carnes frescas y productos cárnicos'),
  ('seafood', 'Pescados', 'Pescados y mariscos frescos'),
  ('dairy', 'Lácteos', 'Productos lácteos y derivados'),
  ('bakery', 'Panadería', 'Productos de panadería frescos'),
  ('organic', 'Orgánicos', 'Productos orgánicos y naturales'),
  ('beverages', 'Bebidas', 'Bebidas y jugos naturales')
ON CONFLICT (id) DO NOTHING;