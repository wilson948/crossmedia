import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold">SuperFresh</h3>
                <p className="text-sm text-gray-400">Tu supermercado de confianza</p>
              </div>
            </div>
            <p className="text-gray-300">
              Ofrecemos los productos más frescos y de mejor calidad, 
              trabajando directamente con productores locales para garantizar 
              la mejor experiencia de compra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#catalog" className="text-gray-300 hover:text-emerald-400 transition-colors">Catálogo</a></li>
              <li><a href="#promotions" className="text-gray-300 hover:text-emerald-400 transition-colors">Ofertas</a></li>
              <li><a href="#store-info" className="text-gray-300 hover:text-emerald-400 transition-colors">Nuestras Tiendas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Frutas y Verduras</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Carnes y Pescados</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Lácteos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Panadería</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Productos Orgánicos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Bebidas</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Av. Cristo Redentor 123, Centro<br />Santa Cruz de la Sierra, Bolivia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-emerald-400 flex-shrink-0" size={18} />
                <a href="https://wa.me/59161518317" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  +591 61518317
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-emerald-400 flex-shrink-0" size={18} />
                <span className="text-gray-300">info@superfresh.com.bo</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Lun-Dom<br />8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SuperFresh. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Aceptamos:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-800 rounded text-xs flex items-center justify-center text-white font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;