import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';

const Promotions: React.FC = () => {
  const promotions = [
    {
      id: 1,
      title: "50% OFF en Frutas Frescas",
      description: "Aprovecha descuentos increíbles en nuestra selección premium de frutas",
      discount: "50%",
      validUntil: "2025-01-31",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-gradient-to-r from-orange-400 to-red-500"
    },
    {
      id: 2,
      title: "Productos Lácteos 2x1",
      description: "Lleva 2 productos lácteos por el precio de 1 en marcas seleccionadas",
      discount: "2x1",
      validUntil: "2025-01-28",
      image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Descuento Especial Carnes",
      description: "30% de descuento en todas las carnes premium y orgánicas",
      discount: "30%",
      validUntil: "2025-02-05",
      image: "https://images.pexels.com/photos/5945805/pexels-photo-5945805.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-gradient-to-r from-emerald-500 to-green-600"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="promotions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ofertas Especiales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No te pierdas nuestras promociones exclusivas con descuentos increíbles
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`${promo.bgColor} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <Tag className="text-white" size={24} />
                  </div>
                  <div className="text-right">
                    <div className="bg-white text-gray-900 rounded-lg px-3 py-2 font-bold text-2xl">
                      {promo.discount}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="text-white text-opacity-90 mb-4">{promo.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock size={16} />
                    <span>Válido hasta {formatDate(promo.validUntil)}</span>
                  </div>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 group">
                    <span>Ver más</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
              <div className="h-32 bg-gray-200 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Quieres recibir nuestras ofertas?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín y sé el primero en conocer nuestras promociones exclusivas y nuevos productos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;