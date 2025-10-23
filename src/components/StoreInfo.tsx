import React, { useEffect, useState } from 'react';
import { MapPin, Clock, Phone, Mail, Truck, CreditCard, ShieldCheck, Users } from 'lucide-react';
import { supabase, type Branch } from '../lib/supabase';

const StoreInfo: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBranches();
  }, []);

  const loadBranches = async () => {
    try {
      const { data, error } = await supabase
        .from('branches')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setBranches(data || []);
    } catch (error) {
      console.error('Error loading branches:', error);
    } finally {
      setLoading(false);
    }
  };

  const openGoogleMaps = (latitude: number | null, longitude: number | null, address: string) => {
    if (latitude && longitude) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    }
  };

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
          {loading ? (
            <div className="col-span-3 text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              <p className="mt-4 text-gray-600">Cargando sucursales...</p>
            </div>
          ) : branches.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600">No hay sucursales disponibles.</p>
            </div>
          ) : (
            branches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                {branch.image_url && (
                  <img
                    src={branch.image_url}
                    alt={branch.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.name}</h3>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{branch.address}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="text-emerald-600 flex-shrink-0" size={18} />
                      <a
                        href={`https://wa.me/${branch.phone.replace(/[\s+]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-emerald-600 transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="text-emerald-600 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{branch.hours}</span>
                    </div>

                    {branch.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="text-emerald-600 flex-shrink-0" size={18} />
                        <a
                          href={`mailto:${branch.email}`}
                          className="text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                        >
                          {branch.email}
                        </a>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => openGoogleMaps(branch.latitude, branch.longitude, branch.address)}
                    className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MapPin size={18} />
                    <span>Ver en Google Maps</span>
                  </button>
                </div>
              </div>
            ))
          )}
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
                  <span className="text-gray-600">info@superfresh.com.bo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-emerald-600" size={20} />
                  <a 
                    href="https://wa.me/59173186255" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    +591 73186255
                  </a>
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