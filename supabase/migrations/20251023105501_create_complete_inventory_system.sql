/*
  # Sistema Completo de Inventario con Productos

  ## Descripción
  Crea el sistema de inventario completo con categorías, productos y movimientos de stock,
  además de insertar todos los productos predefinidos.

  ## Nuevas Tablas

  ### `categories`
  - `id` (text, primary key) - Identificador de categoría
  - `name` (text) - Nombre en español
  - `description` (text) - Descripción
  - `created_at` (timestamptz) - Fecha de creación

  ### `inventory_products`
  - `id` (uuid, primary key) - Identificador único
  - `name` (text) - Nombre del producto
  - `description` (text) - Descripción del producto
  - `sku` (text, unique) - Código SKU
  - `category_id` (text) - Referencia a categoría
  - `brand` (text) - Marca del producto
  - `price` (numeric) - Precio de venta en Bs
  - `cost` (numeric) - Costo del producto
  - `stock_quantity` (integer) - Cantidad en stock
  - `min_stock_level` (integer) - Nivel mínimo de alerta
  - `image_url` (text) - URL de imagen
  - `is_active` (boolean) - Si está activo
  - `created_at` (timestamptz) - Fecha de creación
  - `updated_at` (timestamptz) - Última actualización

  ### `stock_movements`
  - `id` (uuid, primary key) - Identificador único
  - `product_id` (uuid) - Referencia al producto
  - `movement_type` (text) - Tipo: in, out, adjustment
  - `quantity` (integer) - Cantidad movida
  - `previous_quantity` (integer) - Stock anterior
  - `new_quantity` (integer) - Stock nuevo
  - `reason` (text) - Razón del movimiento
  - `created_at` (timestamptz) - Fecha del movimiento

  ## Seguridad
  - RLS habilitado en todas las tablas
  - Políticas para lectura pública y gestión autenticada
*/

-- Crear tabla de categorías
CREATE TABLE IF NOT EXISTS categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Crear tabla de productos
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

-- Crear tabla de movimientos de stock
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

-- Índices
CREATE INDEX IF NOT EXISTS idx_inventory_products_sku ON inventory_products(sku);
CREATE INDEX IF NOT EXISTS idx_inventory_products_category ON inventory_products(category_id);
CREATE INDEX IF NOT EXISTS idx_stock_movements_product ON stock_movements(product_id);
CREATE INDEX IF NOT EXISTS idx_stock_movements_created_at ON stock_movements(created_at DESC);

-- RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE stock_movements ENABLE ROW LEVEL SECURITY;

-- Políticas para categories
CREATE POLICY "Anyone can view categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage categories" ON categories FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Políticas para inventory_products
CREATE POLICY "Anyone can view active products" ON inventory_products FOR SELECT USING (is_active = true OR auth.uid() IS NOT NULL);
CREATE POLICY "Authenticated users can manage products" ON inventory_products FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Políticas para stock_movements
CREATE POLICY "Authenticated users can view movements" ON stock_movements FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert movements" ON stock_movements FOR INSERT TO authenticated WITH CHECK (true);

-- Trigger para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_inventory_products_updated_at ON inventory_products;
CREATE TRIGGER update_inventory_products_updated_at
  BEFORE UPDATE ON inventory_products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insertar categorías
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

-- Insertar todos los productos
INSERT INTO inventory_products (name, description, sku, category_id, brand, price, cost, stock_quantity, min_stock_level, image_url, is_active) VALUES
  -- Frutas
  ('Manzanas Rojas Premium', 'Manzanas rojas crujientes y dulces, perfectas para snacks saludables', 'PROD-001', 'fruits', 'FreshFarm', 27.77, 20.00, 50, 10, 'https://th.bing.com/th/id/OIP.223_gHI1bMdQx5Ac6Jn2UwHaGI?w=232&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3', true),
  ('Plátanos Orgánicos', 'Plátanos orgánicos maduros, ricos en potasio y fibra', 'PROD-002', 'fruits', 'EcoBio', 17.33, 12.00, 80, 15, 'https://tse1.mm.bing.net/th/id/OIP.q_nZp-rRxUfnj1GxZmNKwQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Aguacates Hass', 'Aguacates Hass cremosos, ricos en grasas saludables', 'PROD-006', 'fruits', 'TropicalFresh', 34.73, 25.00, 40, 10, 'https://tse1.mm.bing.net/th/id/OIP.7dPilp3SEx3KXXDD59W69AHaGL?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Naranjas Valencia', 'Naranjas Valencia jugosas, perfectas para zumo natural', 'PROD-008', 'fruits', 'CitrusFresh', 22.90, 15.00, 60, 15, 'https://tse4.mm.bing.net/th/id/OIP.TVeOkslkSXc0vA5rRqlumAFMC8?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Fresas Orgánicas', 'Fresas orgánicas dulces y aromáticas, cultivadas sin pesticidas', 'PROD-010', 'fruits', 'BerryBest', 41.69, 30.00, 30, 10, 'https://img.freepik.com/fotos-premium/fresas-organicas-frescas_863013-115754.jpg', true),
  ('Limones Frescos', 'Limones frescos jugosos, ricos en vitamina C', 'PROD-012', 'fruits', 'CitrusFresh', 17.33, 10.00, 70, 15, 'https://tse4.mm.bing.net/th/id/OIP.lBuFyfCSpZH6afw5rSztCAHaFx?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Peras Anjou', 'Peras Anjou dulces y jugosas, perfectas para postres', 'PROD-014', 'fruits', 'OrchardFresh', 27.77, 20.00, 45, 10, 'https://tse2.mm.bing.net/th/id/OIP.wqlj5nAn9Qto82k017BqwAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  
  -- Verduras
  ('Zanahorias Baby', 'Zanahorias baby tiernas y dulces, ideales para ensaladas', 'PROD-003', 'vegetables', 'GreenFields', 13.85, 8.00, 90, 20, 'https://i.blogs.es/3b963e/carrots-1508847_1920/840_560.jpg', true),
  ('Espinacas Frescas', 'Espinacas frescas ricas en hierro y vitaminas', 'PROD-004', 'vegetables', 'LeafyGreens', 20.82, 15.00, 50, 15, 'https://www.soldelevante.com/wp-content/uploads/2022/07/Espinacas-frescas.jpg', true),
  ('Tomates Cherry', 'Tomates cherry dulces y jugosos, perfectos para ensaladas', 'PROD-005', 'vegetables', 'SunnyVeggies', 24.29, 18.00, 60, 15, 'https://tse1.mm.bing.net/th/id/OIP.kxLJelopYuQZdFtsSYn_SQHaFy?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Brócoli Fresco', 'Brócoli fresco rico en vitaminas y antioxidantes', 'PROD-007', 'vegetables', 'GreenCrown', 19.42, 12.00, 55, 15, 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=600', true),
  ('Lechuga Romana', 'Lechuga romana crujiente, base perfecta para ensaladas César', 'PROD-009', 'vegetables', 'CrispyGreens', 13.15, 8.00, 75, 20, 'https://th.bing.com/th/id/OIP.uPsBXJm0NSLrXRUT0TalAgHaFv?rs=1&pid=ImgDetMain', true),
  ('Cebollas Rojas', 'Cebollas rojas frescas, perfectas para ensaladas y guisos', 'PROD-011', 'vegetables', 'FreshVeggies', 13.85, 8.00, 100, 25, 'https://tse3.mm.bing.net/th/id/OIP.KvpWji6WMcV3DwF1Zq274QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Apio Fresco', 'Apio fresco crujiente, ideal para jugos y ensaladas', 'PROD-013', 'vegetables', 'CrispyGreens', 15.64, 10.00, 65, 15, 'https://tse2.mm.bing.net/th/id/OIP.yW5vs99_OzyXbCwKeLDO8gHaFW?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Pepinos Orgánicos', 'Pepinos orgánicos frescos, ideales para ensaladas', 'PROD-015', 'vegetables', 'EcoBio', 20.82, 14.00, 70, 15, 'https://img.freepik.com/fotos-premium/cultivo-pepinos-organicos_641010-10848.jpg', true),
  
  -- Carnes
  ('Pechuga de Pollo Sin Piel', 'Pechuga de pollo fresca sin piel, alta en proteínas', 'PROD-016', 'meat', 'FarmFresh', 62.58, 45.00, 40, 10, 'https://th.bing.com/th/id/OIP.5oY0wQgv2xo1Uf4estk5sAHaHa?rs=1&pid=ImgDetMain', true),
  ('Carne de Res Premium', 'Carne de res premium, perfecta para asados y parrillas', 'PROD-017', 'meat', 'PrimeCuts', 111.29, 85.00, 30, 8, 'https://tse4.mm.bing.net/th/id/OIP.ZdV2eESDGivcsZ6Sb-JRuQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Chuletas de Cerdo', 'Chuletas de cerdo tiernas y jugosas', 'PROD-020', 'meat', 'PorkPrime', 90.42, 65.00, 35, 10, 'https://walmarthn.vtexassets.com/arquivos/ids/295951/Chuleta-Cerdo-Instituc-Prog-Congelada-Paquete-Und-Chuleta-Cerdo-Instituc-Prog-Cong-Paq-Und-1-19878.jpg?v=638207017803600000', true),
  ('Pavo Molido', 'Pavo molido magro, opción saludable alta en proteínas', 'PROD-022', 'meat', 'LeanMeat', 69.54, 50.00, 40, 10, 'https://www.agrosuperventas.com/medias/1030211-1-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjU3NTB8aW1hZ2UvanBlZ3xhREkzTDJnMlpDODROems0TWpRd09UWTBOak00THpFd016QXlNVEZmTVY4ek1EQlhlRE13TUVnfDRmMjBmZDk2MWRhZmQyZjJkNDRmYmFkZDFiZTk0MTY1ZTZmMGVkNTAwMmIxYzZlZjBlYjkwY2IzZjY1NGZmYmE', true),
  ('Costillas de Res', 'Costillas de res perfectas para barbacoa', 'PROD-024', 'meat', 'BBQMaster', 118.25, 90.00, 25, 8, 'https://d50xhnwqnrbqk.cloudfront.net/images/products/large/COSTILLA-DE-RES_2.png', true),
  
  -- Pescados
  ('Salmón Atlántico', 'Salmón atlántico fresco, rico en omega-3', 'PROD-018', 'seafood', 'OceanFresh', 173.95, 130.00, 20, 5, 'https://metroio.vtexassets.com/arquivos/ids/451217/Filete-de-Salm-n-Atl-ntico-Aqua-500g-1-312828457.jpg?v=638285098405930000', true),
  ('Camarones Jumbo', 'Camarones jumbo frescos, ideales para platos gourmet', 'PROD-019', 'seafood', 'SeaDelights', 132.17, 100.00, 25, 8, 'https://tse2.mm.bing.net/th/id/OIP.FcrgXkYLCrkSeBGm419WKQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Atún Fresco', 'Atún fresco de calidad sashimi', 'PROD-021', 'seafood', 'TunaSelect', 160.02, 120.00, 20, 5, 'https://meatstorehn.com/wp-content/uploads/2020/05/Atun-fresco-en-cubos1.jpg', true),
  ('Bacalao Fresco', 'Bacalao fresco del Atlántico Norte', 'PROD-023', 'seafood', 'NordicFish', 139.16, 105.00, 22, 6, 'https://i.blogs.es/04895d/bacalao_salado/1024_2000.jpg', true),
  ('Cangrejo Real', 'Cangrejo real de Alaska, delicadeza marina premium', 'PROD-025', 'seafood', 'RoyalSea', 320.09, 250.00, 15, 5, 'https://th.bing.com/th/id/OIP.3iaxnfwmFR_FoxzraqyK6QAAAA?rs=1&pid=ImgDetMain', true),
  
  -- Lácteos
  ('Leche Entera Orgánica', 'Leche entera orgánica de vacas alimentadas con pasto', 'PROD-026', 'dairy', 'PureDairy', 31.25, 22.00, 60, 15, 'https://th.bing.com/th/id/OIP.D-FNl52LzqkWsMzHh6EF1gHaHa?rs=1&pid=ImgDetMain', true),
  ('Queso Cheddar Añejo', 'Queso cheddar añejo con sabor intenso y textura cremosa', 'PROD-027', 'dairy', 'CheeseWorks', 55.62, 40.00, 35, 10, 'https://th.bing.com/th/id/R.c28e8dcc2f6e1f16ffcb717187f89c00?rik=TkybX5HkA2RDDg&riu=http%3a%2f%2fwww.quesosnavarro.com%2fassets%2fimg%2fqueso-navarro-cheddar-a%c3%b1ejo.png&ehk=EROaM14YsQdPi0X99Z65Xqds8Csv6O9fDZ1dki2ddRg%3d&risl=&pid=ImgRaw&r=0', true),
  ('Yogur Griego Natural', 'Yogur griego natural cremoso, alto en proteínas', 'PROD-028', 'dairy', 'GreekGold', 41.69, 30.00, 50, 15, 'https://tse3.mm.bing.net/th/id/OIP.8aROfS6E1FG0EX55OoCeBQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Mantequilla Artesanal', 'Mantequilla artesanal hecha con crema fresca', 'PROD-029', 'dairy', 'CreamyCraft', 45.18, 32.00, 40, 12, 'https://montefino.pe/wp-content/uploads/2023/08/mantequilla-1.png', true),
  ('Queso Mozzarella Fresca', 'Mozzarella fresca italiana, perfecta para caprese', 'PROD-030', 'dairy', 'ItalianStyle', 62.58, 45.00, 30, 10, 'https://th.bing.com/th/id/R.ad57402fb75707b4bbcdee79f7f9c42c?rik=V%2fpTO7v14vAC6g&riu=http%3a%2f%2fdismar.mx%2ffichas%2fQuesos-Gourmet%2fjpg%2fFicha_Tecnica_Mozarella_226g_GALBANI.jpg&ehk=8KN2Yz6N%2fQqHwsJGCk97oufK%2bPeFzjDA%2fXnHuJV5LEE%3d&risl=&pid=ImgRaw&r=0', true),
  
  -- Panadería
  ('Pan Integral Artesanal', 'Pan integral artesanal horneado diariamente', 'PROD-031', 'bakery', 'ArtisanBread', 27.77, 18.00, 50, 15, 'https://tiemporeal.periodismoudec.cl/wp-content/uploads/2016/11/pan-integral-1132x509.jpg', true),
  ('Croissants Franceses', 'Croissants franceses mantecosos y hojaldrados', 'PROD-032', 'bakery', 'FrenchBake', 20.82, 14.00, 40, 12, 'https://tse3.mm.bing.net/th/id/OIP.g1RQBKSF2t_VVIZb35e0ZgHaEY?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Muffins de Arándanos', 'Muffins esponjosos con arándanos frescos', 'PROD-033', 'bakery', 'BerryBake', 31.25, 22.00, 35, 10, 'https://cocina.guru/wp-content/uploads/2023/03/muffins-de-arandanos.jpg', true),
  ('Baguette Tradicional', 'Baguette francesa tradicional con corteza crujiente', 'PROD-034', 'bakery', 'ClassicBread', 17.33, 10.00, 60, 15, 'https://img2.rtve.es/i/?w=1600&i=1676541025640.jpg', true),
  ('Donuts Glaseados', 'Donuts glaseados frescos, perfectos para el desayuno', 'PROD-035', 'bakery', 'SweetTreats', 41.69, 28.00, 45, 12, 'https://canalcocina.es/medias/images/0001083606QuiqueAlCuboT02E021HDonuts-de-galletasCLEAN01.jpg', true),
  
  -- Orgánicos
  ('Quinoa Orgánica', 'Quinoa orgánica boliviana, superalimento completo', 'PROD-036', 'organic', 'SuperGrain', 62.58, 45.00, 40, 12, 'https://th.bing.com/th/id/R.d2605ceed7e311ac810a628b733e11c6?rik=ftT%2b6nem2xWnLg&pid=ImgRaw&r=0', true),
  ('Aceite de Oliva Extra Virgen', 'Aceite de oliva extra virgen prensado en frío', 'PROD-037', 'organic', 'MediterraneanGold', 90.42, 65.00, 30, 10, 'https://www.cerrodelosmedanos.com.ar/wp-content/uploads/2020/07/3107201-1030x1030.jpg', true),
  ('Miel de Abeja Pura', 'Miel de abeja pura sin procesar', 'PROD-038', 'organic', 'BeeNatural', 69.54, 50.00, 35, 10, 'https://th.bing.com/th/id/R.760d1a0021b4efa58ef8aba4fa086466?rik=FUQ4oyAm59xyKA&pid=ImgRaw&r=0', true),
  ('Arroz Integral Orgánico', 'Arroz integral orgánico de grano largo', 'PROD-039', 'organic', 'GrainPure', 41.69, 28.00, 50, 15, 'https://tse2.mm.bing.net/th/id/OIP.UocVVtz304JPIkuvREt3GQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Semillas de Chía', 'Semillas de chía orgánicas ricas en omega-3', 'PROD-040', 'organic', 'SuperSeeds', 55.62, 40.00, 45, 12, 'https://www.moncloa.com/wp-content/uploads/2023/06/img_d3d61f0968deee01299f8fda33105f61.jpg', true),
  
  -- Bebidas
  ('Agua Mineral Natural', 'Agua mineral natural de manantial', 'PROD-041', 'beverages', 'PureSpring', 13.85, 8.00, 100, 25, 'https://tse3.mm.bing.net/th/id/OIP.E2uOrx-sFZtqy4-OeytEcQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Jugo de Naranja Natural', 'Jugo de naranja 100% natural sin azúcar añadido', 'PROD-042', 'beverages', 'FreshSqueeze', 34.73, 25.00, 60, 15, 'https://th.bing.com/th/id/R.b410fb036f11c656324f7fb0714dbf0e?rik=xWebU1kRqnIS%2fg&pid=ImgRaw&r=0', true),
  ('Café Orgánico en Grano', 'Café orgánico en grano tostado medio', 'PROD-043', 'beverages', 'MountainRoast', 90.42, 65.00, 40, 12, 'https://www.bioplaza.com.co/wp-content/uploads/2021/11/granosarrayan1.png', true),
  ('Kombucha de Jengibre', 'Kombucha probiótica con jengibre fresco', 'PROD-044', 'beverages', 'FermentedLife', 38.21, 28.00, 35, 10, 'https://tse4.mm.bing.net/th/id/OIP.Rq70vEatgmGhzsDMKmFMAQHaIM?rs=1&pid=ImgDetMain&o=7&rm=3', true),
  ('Smoothie Verde', 'Smoothie verde con espinaca, manzana y jengibre', 'PROD-045', 'beverages', 'GreenBlend', 48.67, 35.00, 30, 10, 'https://tse3.mm.bing.net/th/id/OIP.-UCyOamPCZS17AFg_QFVGQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3', true)
ON CONFLICT (sku) DO NOTHING;