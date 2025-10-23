import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
import ProductCatalog from './components/ProductCatalog';
import Promotions from './components/Promotions';
import StoreInfo from './components/StoreInfo';
import Footer from './components/Footer';
import InventoryManager from './components/InventoryManager';
import UserManagement from './components/UserManagement';
import { CartItem } from './types';
import { supabase } from './lib/supabase';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showInventory, setShowInventory] = useState(false);
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [productStock, setProductStock] = useState<Record<string, number>>({});

  useEffect(() => {
    loadProductStock();
  }, []);

  const loadProductStock = async () => {
    const { data, error } = await supabase
      .from('inventory_products')
      .select('sku, stock_quantity');

    if (!error && data) {
      const stockMap: Record<string, number> = {};
      data.forEach((product: any) => {
        const id = parseInt(product.sku.split('-')[1]) || 0;
        stockMap[id] = product.stock_quantity;
      });
      setProductStock(stockMap);
    }
  };

  const addToCart = (product: any) => {
    const availableStock = productStock[product.id] || 0;

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      const currentQuantity = existingItem ? existingItem.quantity : 0;
      const newQuantity = currentQuantity + 1;

      if (newQuantity > availableStock) {
        alert(`Lo sentimos, solo contamos con ${availableStock} unidades disponibles de este producto.`);
        return prev;
      }

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartItem = (id: number, quantity: number) => {
    const availableStock = productStock[id] || 0;

    if (quantity > availableStock) {
      alert(`Lo sentimos, solo contamos con ${availableStock} unidades disponibles de este producto.`);
      return;
    }

    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll to catalog section
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showInventory) {
    return <InventoryManager onBack={() => setShowInventory(false)} />;
  }

  if (showUserManagement) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button
              onClick={() => setShowUserManagement(false)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <span>←</span>
              <span>Volver al inicio</span>
            </button>
          </div>
        </div>
        <UserManagement />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        cartItemsCount={cartItemsCount}
        updateCartItem={updateCartItem}
        onInventoryClick={() => setShowInventory(true)}
        onUserManagementClick={() => setShowUserManagement(true)}
        onAdminToggle={() => setIsAdminMode(!isAdminMode)}
        isAdmin={isAdminMode}
      />
      <HeroSection />
      <FeaturedCategories onCategorySelect={handleCategorySelect} />
      <ProductCatalog
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        isAdmin={isAdminMode}
      />
      <Promotions />
      <StoreInfo />
      <Footer />
    </div>
  );
}

export default App;