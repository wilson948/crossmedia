import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import { Star, ShoppingCart, Filter, Import as SortAsc } from 'lucide-react';
import { Product } from '../types';

interface ProductCatalogProps {
  addToCart: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ addToCart, selectedCategory, onCategoryChange }) => {
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, sortBy, searchTerm]);

  const getCategoryName = (categoryId: string) => {
    if (categoryId === 'all') return 'Todos los productos';
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Productos';
  };

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {getCategoryName(selectedCategory)}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {selectedCategory === 'all' 
              ? 'Descubre nuestra amplia selección de productos frescos y de calidad'
              : `Explora nuestra selección de ${getCategoryName(selectedCategory).toLowerCase()}`
            }
          </p>
        </div>

        {/* Category breadcrumb */}
        {selectedCategory !== 'all' && (
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => onCategoryChange('all')}
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Inicio
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{getCategoryName(selectedCategory)}</span>
            </nav>
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="all">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <SortAsc size={20} className="text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="name">Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="rating">Calificación</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProducts.length === 0 
              ? 'No se encontraron productos'
              : `Mostrando ${filteredProducts.length} producto${filteredProducts.length !== 1 ? 's' : ''}`
            }
            {selectedCategory !== 'all' && ` en ${getCategoryName(selectedCategory)}`}
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    -{product.discount}%
                  </div>
                )}
                <button
                  onClick={() => addToCart(product)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 font-medium">{product.brand}</span>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-emerald-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span className="hidden sm:inline">Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="text-gray-400" size={32} />
            </div>
            <p className="text-xl text-gray-500">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => onCategoryChange('all')}
                className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Ver todos los productos
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;