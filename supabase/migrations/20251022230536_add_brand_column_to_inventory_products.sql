/*
  # Add brand column to inventory_products

  ## Overview
  Adds the brand field to inventory_products table to store product brand information.

  ## Changes
  1. Adds `brand` column to `inventory_products` table
     - Type: text (nullable)
     - Stores the brand name of the product

  ## Notes
  - Existing products will have NULL brand values initially
  - This field can be updated through the product form
*/

-- Add brand column to inventory_products table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'inventory_products' AND column_name = 'brand'
  ) THEN
    ALTER TABLE inventory_products ADD COLUMN brand text;
  END IF;
END $$;