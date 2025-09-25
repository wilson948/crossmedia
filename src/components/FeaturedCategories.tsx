import React from 'react';
import { categories } from '../data/products';

interface FeaturedCategoriesProps {
  onCategorySelect: (categoryId: string) => void;
}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onCategorySelect }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra todo lo que necesitas organizados por categorías para una mejor experiencia de compra
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onClick={() => onCategorySelect(category.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-3 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl mb-2">{category.icon}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-90 rounded-lg px-3 py-1 text-sm font-semibold text-gray-900">
                    Ver productos
                  </div>
                </div>
              </div>
              <h3 className="text-center font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;