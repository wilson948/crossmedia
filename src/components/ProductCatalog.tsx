import React, { useState, useMemo, useEffect } from 'react';
import { Star, ShoppingCart, Filter, Grid2x2 as Grid, List, Edit2 } from 'lucide-react';
import { supabase, type InventoryProduct, type Category } from '../lib/supabase';
import { Product } from '../types';

interface ProductCatalogProps {
  addToCart: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  isAdmin?: boolean;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  addToCart,
  selectedCategory,
  onCategoryChange,
  isAdmin = false
}) => {
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [products, setProducts] = useState<InventoryProduct[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await Promise.all([loadProducts(), loadCategories()]);
    setLoading(false);
  };

  const loadProducts = async () => {
    const { data, error } = await supabase
      .from('inventory_products')
      .select('*')
      .eq('is_active', true)
      .order('name');

    if (error) {
      console.error('Error loading products:', error);
      return;
    }

    setProducts(data || []);
  };

  const loadCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error loading categories:', error);
      return;
    }

    setCategories(data || []);
  };

  const handleEditPrice = (productId: string, currentPrice: number) => {
    setEditingProduct(productId);
    setEditPrice(currentPrice.toString());
  };

  const handleSavePrice = async (productId: string) => {
    const newPrice = parseFloat(editPrice);
    if (isNaN(newPrice) || newPrice < 0) {
      alert('Precio inválido');
      return;
    }

    const { error } = await supabase
      .from('inventory_products')
      .update({ price: newPrice })
      .eq('id', productId);

    if (error) {
      console.error('Error updating price:', error);
      alert('Error al actualizar el precio');
      return;
    }

    setEditingProduct(null);
    loadProducts();
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditPrice('');
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category_id === selectedCategory;
      const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
      return categoryMatch && priceMatch;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return (a.name || '').localeCompare(b.name || '');
      }
    });
  }, [selectedCategory, sortBy, priceRange, products]);

  const convertToCartProduct = (inventoryProduct: InventoryProduct): Product => {
    return {
      id: parseInt(inventoryProduct.sku.split('-')[1]) || 0,
      name: inventoryProduct.name,
      price: inventoryProduct.price,
      image: inventoryProduct.image_url || '',
      category: inventoryProduct.category_id || '',
      brand: inventoryProduct.brand || '',
      description: inventoryProduct.description || '',
      inStock: inventoryProduct.stock_quantity > 0,
      rating: 4.5
    };
  };

  if (loading) {
    return (
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      </section>
    );
  }

  const getCategoryIcon = (categoryId: string | null) => {
    const iconMap: Record<string, string> = {
      'fruits': '🍎',
      'vegetables': '🥕',
      'meat': '🥩',
      'seafood': '🐟',
      'dairy': '🥛',
      'bakery': '🍞',
      'organic': '🌱',
      'beverages': '🥤'
    };
    return iconMap[categoryId || ''] || '📦';
  };

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia selección de productos frescos y de calidad
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="mb-8 space-y-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-emerald-50'
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                <span>{getCategoryIcon(category.id)}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="name">Ordenar por Nombre</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Rango de precio:</span>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                  className="w-24"
                />
                <span className="text-sm text-gray-600">Bs {priceRange.max}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
        }`}>
          {filteredAndSortedProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${
                viewMode === 'list' ? 'flex items-center p-4' : ''
              }`}
            >
              <div className={`${viewMode === 'list' ? 'w-24 h-24 flex-shrink-0' : 'h-48'} relative overflow-hidden ${viewMode === 'grid' ? 'rounded-t-2xl' : 'rounded-lg'}`}>
                <img
                  src={product.image_url || 'https://via.placeholder.com/300x300?text=Sin+Imagen'}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.stock_quantity === 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold">Agotado</span>
                  </div>
                )}
              </div>

              <div className={`${viewMode === 'list' ? 'flex-1 ml-4' : 'p-4'}`}>
                <div className={`${viewMode === 'list' ? 'flex justify-between items-start' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <p className="text-sm text-gray-500 mb-1">{product.brand || 'Sin marca'}</p>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

                    <div className="flex items-center mb-2">
                      <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                        Stock: {product.stock_quantity}
                      </span>
                    </div>

                    {viewMode === 'list' && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    )}

                    <div className="flex items-center justify-between">
                      {editingProduct === product.id && isAdmin ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                            className="w-24 px-2 py-1 border border-gray-300 rounded"
                            step="0.01"
                          />
                          <button
                            onClick={() => handleSavePrice(product.id)}
                            className="text-xs px-2 py-1 bg-emerald-600 text-white rounded"
                          >
                            Guardar
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="text-xs px-2 py-1 bg-gray-300 text-gray-700 rounded"
                          >
                            Cancelar
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-emerald-600">
                            Bs {product.price.toFixed(2)}
                          </span>
                          {isAdmin && (
                            <button
                              onClick={() => handleEditPrice(product.id, product.price)}
                              className="text-gray-400 hover:text-emerald-600"
                            >
                              <Edit2 size={16} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`${viewMode === 'list' ? 'ml-4' : 'mt-3'}`}>
                    <button
                      onClick={() => addToCart(convertToCartProduct(product))}
                      disabled={product.stock_quantity === 0}
                      className={`${
                        viewMode === 'list' ? 'px-4 py-2' : 'w-full py-2 px-4'
                      } bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed`}
                    >
                      <ShoppingCart size={18} />
                      <span>{viewMode === 'list' ? 'Agregar' : 'Agregar al Carrito'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;