import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
import ProductCatalog from './components/ProductCatalog';
import Promotions from './components/Promotions';
import StoreInfo from './components/StoreInfo';
import Footer from './components/Footer';
import InventoryManager from './components/InventoryManager';
import { CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showInventory, setShowInventory] = useState(false);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartItem = (id: number, quantity: number) => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        cartItemsCount={cartItemsCount}
        updateCartItem={updateCartItem}
        onInventoryClick={() => setShowInventory(true)}
      />
      <HeroSection />
      <FeaturedCategories onCategorySelect={handleCategorySelect} />
      <ProductCatalog
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Promotions />
      <StoreInfo />
      <Footer />
    </div>
  );
}

export default App;