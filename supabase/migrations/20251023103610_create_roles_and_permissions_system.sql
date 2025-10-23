/*
  # Sistema de Roles, Usuarios y Permisos

  ## Descripción
  Sistema completo de autenticación y autorización con roles y permisos granulares.

  ## Nuevas Tablas

  ### `user_roles`
  Define los roles disponibles en el sistema
  - `id` (uuid, primary key) - Identificador único del rol
  - `name` (text, unique) - Nombre del rol (admin, manager, cashier, viewer)
  - `description` (text) - Descripción del rol
  - `created_at` (timestamptz) - Fecha de creación

  ### `user_permissions`
  Define los permisos granulares del sistema
  - `id` (uuid, primary key) - Identificador único del permiso
  - `name` (text, unique) - Nombre del permiso (ej: products.create, products.edit)
  - `description` (text) - Descripción del permiso
  - `category` (text) - Categoría del permiso (products, inventory, users, reports)
  - `created_at` (timestamptz) - Fecha de creación

  ### `role_permissions`
  Tabla de relación entre roles y permisos
  - `id` (uuid, primary key) - Identificador único
  - `role_id` (uuid, foreign key) - Referencia a user_roles
  - `permission_id` (uuid, foreign key) - Referencia a user_permissions
  - `created_at` (timestamptz) - Fecha de creación

  ### `user_profiles`
  Perfiles extendidos de usuarios con roles asignados
  - `id` (uuid, primary key) - Referencia a auth.users
  - `role_id` (uuid, foreign key) - Referencia a user_roles
  - `full_name` (text) - Nombre completo del usuario
  - `phone` (text) - Teléfono del usuario
  - `branch_id` (uuid, foreign key) - Sucursal asignada
  - `is_active` (boolean) - Si el usuario está activo
  - `created_at` (timestamptz) - Fecha de creación
  - `updated_at` (timestamptz) - Última actualización

  ### `branches`
  Sucursales del supermercado con ubicaciones de Google Maps
  - `id` (uuid, primary key) - Identificador único
  - `name` (text) - Nombre de la sucursal
  - `address` (text) - Dirección completa
  - `phone` (text) - Teléfono de contacto
  - `email` (text) - Email de contacto
  - `hours` (text) - Horario de atención
  - `latitude` (numeric) - Latitud para Google Maps
  - `longitude` (numeric) - Longitud para Google Maps
  - `image_url` (text) - URL de imagen de la sucursal
  - `is_active` (boolean) - Si la sucursal está activa
  - `created_at` (timestamptz) - Fecha de creación

  ## Seguridad
  - RLS habilitado en todas las tablas
  - Políticas restrictivas según roles
  - Solo administradores pueden gestionar roles y permisos
  - Usuarios solo pueden ver su propio perfil
  - Sucursales visibles para todos

  ## Índices
  - Índices en relaciones de foreign keys
  - Índices en campos de búsqueda frecuente
*/

-- Crear tabla de roles
CREATE TABLE IF NOT EXISTS user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Crear tabla de permisos
CREATE TABLE IF NOT EXISTS user_permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Crear tabla de relación roles-permisos
CREATE TABLE IF NOT EXISTS role_permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role_id uuid REFERENCES user_roles(id) ON DELETE CASCADE NOT NULL,
  permission_id uuid REFERENCES user_permissions(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(role_id, permission_id)
);

-- Crear tabla de sucursales
CREATE TABLE IF NOT EXISTS branches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  phone text NOT NULL,
  email text,
  hours text NOT NULL,
  latitude numeric(10, 7),
  longitude numeric(10, 7),
  image_url text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Crear tabla de perfiles de usuario
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id uuid REFERENCES user_roles(id) ON DELETE SET NULL,
  branch_id uuid REFERENCES branches(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  phone text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Crear índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_role_permissions_role ON role_permissions(role_id);
CREATE INDEX IF NOT EXISTS idx_role_permissions_permission ON role_permissions(permission_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_role ON user_profiles(role_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_branch ON user_profiles(branch_id);
CREATE INDEX IF NOT EXISTS idx_branches_active ON branches(is_active);

-- Habilitar RLS
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches ENABLE ROW LEVEL SECURITY;

-- Políticas para user_roles
CREATE POLICY "Todos pueden ver roles"
  ON user_roles FOR SELECT
  USING (true);

CREATE POLICY "Solo administradores pueden crear roles"
  ON user_roles FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

CREATE POLICY "Solo administradores pueden actualizar roles"
  ON user_roles FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

-- Políticas para user_permissions
CREATE POLICY "Usuarios autenticados pueden ver permisos"
  ON user_permissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Solo administradores pueden gestionar permisos"
  ON user_permissions FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

-- Políticas para role_permissions
CREATE POLICY "Usuarios autenticados pueden ver role_permissions"
  ON role_permissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Solo administradores pueden gestionar role_permissions"
  ON role_permissions FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

-- Políticas para user_profiles
CREATE POLICY "Usuarios pueden ver su propio perfil"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Administradores pueden ver todos los perfiles"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

CREATE POLICY "Usuarios pueden actualizar su propio perfil"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id AND role_id = (SELECT role_id FROM user_profiles WHERE id = auth.uid()));

CREATE POLICY "Solo administradores pueden crear perfiles"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

CREATE POLICY "Solo administradores pueden eliminar perfiles"
  ON user_profiles FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

-- Políticas para branches
CREATE POLICY "Todos pueden ver sucursales activas"
  ON branches FOR SELECT
  USING (is_active = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Solo administradores pueden gestionar sucursales"
  ON branches FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      JOIN user_roles ur ON up.role_id = ur.id
      WHERE up.id = auth.uid() AND ur.name = 'admin'
    )
  );

-- Función para actualizar updated_at en user_profiles
CREATE OR REPLACE FUNCTION update_user_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_user_profiles_updated_at_trigger ON user_profiles;
CREATE TRIGGER update_user_profiles_updated_at_trigger
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_user_profiles_updated_at();

-- Insertar roles predefinidos
INSERT INTO user_roles (name, description) VALUES
  ('admin', 'Administrador con acceso completo al sistema'),
  ('manager', 'Gerente con acceso a reportes y gestión de inventario'),
  ('cashier', 'Cajero con acceso a ventas y consulta de productos'),
  ('viewer', 'Usuario con acceso de solo lectura')
ON CONFLICT (name) DO NOTHING;

-- Insertar permisos predefinidos
INSERT INTO user_permissions (name, description, category) VALUES
  -- Permisos de productos
  ('products.view', 'Ver productos', 'products'),
  ('products.create', 'Crear productos', 'products'),
  ('products.edit', 'Editar productos', 'products'),
  ('products.delete', 'Eliminar productos', 'products'),
  
  -- Permisos de inventario
  ('inventory.view', 'Ver inventario', 'inventory'),
  ('inventory.manage', 'Gestionar inventario (entradas/salidas)', 'inventory'),
  ('inventory.adjust', 'Ajustar inventario', 'inventory'),
  
  -- Permisos de usuarios
  ('users.view', 'Ver usuarios', 'users'),
  ('users.create', 'Crear usuarios', 'users'),
  ('users.edit', 'Editar usuarios', 'users'),
  ('users.delete', 'Eliminar usuarios', 'users'),
  
  -- Permisos de reportes
  ('reports.view', 'Ver reportes', 'reports'),
  ('reports.export', 'Exportar reportes', 'reports'),
  
  -- Permisos de sucursales
  ('branches.view', 'Ver sucursales', 'branches'),
  ('branches.manage', 'Gestionar sucursales', 'branches')
ON CONFLICT (name) DO NOTHING;

-- Asignar permisos a roles
DO $$
DECLARE
  admin_role_id uuid;
  manager_role_id uuid;
  cashier_role_id uuid;
  viewer_role_id uuid;
BEGIN
  -- Obtener IDs de roles
  SELECT id INTO admin_role_id FROM user_roles WHERE name = 'admin';
  SELECT id INTO manager_role_id FROM user_roles WHERE name = 'manager';
  SELECT id INTO cashier_role_id FROM user_roles WHERE name = 'cashier';
  SELECT id INTO viewer_role_id FROM user_roles WHERE name = 'viewer';

  -- Admin tiene todos los permisos
  INSERT INTO role_permissions (role_id, permission_id)
  SELECT admin_role_id, id FROM user_permissions
  ON CONFLICT DO NOTHING;

  -- Manager: productos, inventario, reportes, ver usuarios
  INSERT INTO role_permissions (role_id, permission_id)
  SELECT manager_role_id, id FROM user_permissions
  WHERE category IN ('products', 'inventory', 'reports') OR name = 'users.view'
  ON CONFLICT DO NOTHING;

  -- Cashier: ver productos, ver inventario, ver reportes básicos
  INSERT INTO role_permissions (role_id, permission_id)
  SELECT cashier_role_id, id FROM user_permissions
  WHERE name IN ('products.view', 'inventory.view', 'reports.view', 'branches.view')
  ON CONFLICT DO NOTHING;

  -- Viewer: solo lectura
  INSERT INTO role_permissions (role_id, permission_id)
  SELECT viewer_role_id, id FROM user_permissions
  WHERE name LIKE '%.view'
  ON CONFLICT DO NOTHING;
END $$;

-- Insertar sucursales con coordenadas de Google Maps
INSERT INTO branches (name, address, phone, email, hours, latitude, longitude, image_url, is_active) VALUES
  (
    'SuperFresh Plan 3000',
    'Av. Cristo Redentor 123, Plan 3000, Santa Cruz de la Sierra',
    '+591 73186255',
    'plan3000@superfresh.com.bo',
    'Lun-Dom: 8:00 AM - 10:00 PM',
    -17.7650,
    -63.1350,
    'https://tse4.mm.bing.net/th/id/OIP.mjZz61nxwQ4jbVSgKUoF4AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
    true
  ),
  (
    'SuperFresh Norte',
    'Av. Banzer 456, Zona Norte, Santa Cruz de la Sierra',
    '+591 61518318',
    'norte@superfresh.com.bo',
    'Lun-Dom: 7:00 AM - 11:00 PM',
    -17.7500,
    -63.1800,
    'https://tse4.mm.bing.net/th/id/OIP.V--UnJ9tgao6NKi8G3XvawHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3',
    true
  ),
  (
    'SuperFresh Equipetrol',
    'Av. Equipetrol 789, Equipetrol, Santa Cruz de la Sierra',
    '+591 61518319',
    'equipetrol@superfresh.com.bo',
    'Lun-Dom: 8:00 AM - 10:00 PM',
    -17.7834,
    -63.1821,
    'https://tse4.mm.bing.net/th/id/OIP.RUxtopiQweycQaGOhP2fwgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    true
  )
ON CONFLICT DO NOTHING;