import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  cartItemsCount: number;
  updateCartItem: (id: number, quantity: number) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, cartItemsCount, updateCartItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Top bar */}
      <div className="bg-emerald-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-1 sm:mb-0">
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>Av. Principal 123, Ciudad</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>+1 234 567 8900</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            <span>Lun-Dom: 8:00 AM - 10:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SuperFresh</h1>
                <p className="text-xs text-gray-600">Tu supermercado de confianza</p>
              </div>
            </div>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Navigation and Cart */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span className="hidden sm:inline">Carrito</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Search bar - Mobile */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2">
                <a href="#catalog" className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Catálogo
                </a>
                <a href="#promotions" className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Ofertas
                </a>
                <a href="#store-info" className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Tienda
                </a>
                <a href="#contact" className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Contacto
                </a>
              </nav>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex space-x-8 py-3">
              <a href="#catalog" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Catálogo
              </a>
              <a href="#promotions" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Ofertas
              </a>
              <a href="#store-info" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Tienda
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Carrito de Compras</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500 mt-8">Tu carrito está vacío</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-emerald-600 font-semibold">${item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateCartItem(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                            >
                              -
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateCartItem(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-emerald-600">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                    Proceder al Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;