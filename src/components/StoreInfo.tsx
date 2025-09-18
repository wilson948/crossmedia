import React from 'react';
import { MapPin, Clock, Phone, Mail, Truck, CreditCard, ShieldCheck, Users } from 'lucide-react';

const StoreInfo: React.FC = () => {
  const storeLocations = [
    {
      id: 1,
      name: "SuperFresh Centro",
      address: "Av. Principal 123, Centro",
      phone: "+1 234 567 8900",
      hours: "Lun-Dom: 8:00 AM - 10:00 PM",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "SuperFresh Norte",
      address: "Calle 45 #567, Zona Norte",
      phone: "+1 234 567 8901",
      hours: "Lun-Dom: 7:00 AM - 11:00 PM",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "SuperFresh Sur",
      address: "Av. Sur 890, Zona Sur",
      phone: "+1 234 567 8902",
      hours: "Lun-Dom: 8:00 AM - 10:00 PM",
      image: "https://images.pexels.com/photos/6292704/pexels-photo-6292704.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const services = [
    {
      icon: Truck,
      title: "Entrega a Domicilio",
      description: "Servicio de entrega rápida en 2-4 horas",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: CreditCard,
      title: "Múltiples Formas de Pago",
      description: "Efectivo, tarjetas, pagos móviles",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: ShieldCheck,
      title: "Garantía de Calidad",
      description: "100% garantía en todos nuestros productos",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Staff especializado para ayudarte",
      color: "text-orange-600 bg-orange-100"
    }
  ];

  return (
    <section id="store-info" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestras Tiendas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visítanos en cualquiera de nuestras sucursales o aprovecha nuestros servicios
          </p>
        </div>

        {/* Store Locations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {storeLocations.map((store) => (
            <div key={store.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{store.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">{store.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-emerald-600 flex-shrink-0" size={18} />
                    <span className="text-gray-600">{store.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-emerald-600 flex-shrink-0" size={18} />
                    <span className="text-gray-600">{store.hours}</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Ver en Mapa
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nuestros Servicios
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}>
                  <service.icon size={28} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Tienes alguna pregunta?</h3>
              <p className="text-gray-600 mb-6">
                Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-emerald-600" size={20} />
                  <span className="text-gray-600">info@superfresh.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-emerald-600" size={20} />
                  <span className="text-gray-600">+1 234 567 8900</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <input
                type="text"
                placeholder="Asunto"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;