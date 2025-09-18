import React from 'react';
import { ArrowRight, Truck, Clock, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Productos Frescos
              <span className="block text-yellow-300">Directo a tu Mesa</span>
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-lg">
              Descubre la mejor selección de productos frescos y de calidad. 
              Compramos directo de productores locales para garantizar frescura y sabor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center space-x-2 group">
                <span>Explorar Productos</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Ver Ofertas
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Productos frescos" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Garantizado</p>
                  <p className="text-sm text-gray-600">Calidad premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl mx-4 lg:mx-8 p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <Truck className="text-gray-900" size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Entrega Gratis</h3>
              <p className="text-emerald-100">En compras mayor a $50</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <Clock className="text-gray-900" size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Entrega Rápida</h3>
              <p className="text-emerald-100">En 2-4 horas</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <Shield className="text-gray-900" size={24} />
            </div>
            <div>
              <h3 className="font-semibold">100% Seguro</h3>
              <p className="text-emerald-100">Pago protegido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;