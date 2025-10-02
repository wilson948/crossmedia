import React, { useState } from 'react';
import { X, Clock, CheckCircle, Copy, Download } from 'lucide-react';
import { CartItem } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  cartTotal: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, cartItems, cartTotal }) => {
  const [paymentStep, setPaymentStep] = useState<'method' | 'qr' | 'confirmation'>('method');
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const generateOrderNumber = () => {
    const number = 'SF' + Date.now().toString().slice(-6);
    setOrderNumber(number);
    return number;
  };

  const handleQRPayment = () => {
    generateOrderNumber();
    setPaymentStep('qr');
  };

  const handlePaymentConfirmation = () => {
    setPaymentStep('confirmation');
  };

  const copyOrderNumber = () => {
    navigator.clipboard.writeText(orderNumber);
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = '/Imagen de WhatsApp 2025-10-01 a las 21.23.53_63d9119c.jpg';
    link.download = 'qr-pago-superfresh.jpg';
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              {paymentStep === 'method' && 'Método de Pago'}
              {paymentStep === 'qr' && 'Pagar con QR'}
              {paymentStep === 'confirmation' && 'Pago Confirmado'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {paymentStep === 'method' && (
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Resumen del Pedido</h3>
                  <div className="space-y-2 mb-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span className="text-emerald-600">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Selecciona tu método de pago:</h3>
                  
                  <button
                    onClick={handleQRPayment}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors flex items-center space-x-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">QR</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Pago con QR</div>
                      <div className="text-sm text-gray-600">Yape, Plin, BIM y más</div>
                    </div>
                  </button>

                  <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors flex items-center space-x-3 opacity-50 cursor-not-allowed">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">CARD</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Tarjeta de Crédito/Débito</div>
                      <div className="text-sm text-gray-600">Próximamente disponible</div>
                    </div>
                  </button>

                  <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors flex items-center space-x-3 opacity-50 cursor-not-allowed">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">CASH</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Pago Contra Entrega</div>
                      <div className="text-sm text-gray-600">Próximamente disponible</div>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {paymentStep === 'qr' && (
              <div className="space-y-6 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-4 rounded-lg text-white">
                  <h3 className="font-bold text-lg mb-2">Escanea el QR para pagar</h3>
                  <p className="text-sm opacity-90">Pedido #{orderNumber}</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <img 
                    src="/Imagen de WhatsApp 2025-10-01 a las 21.23.53_63d9119c.jpg" 
                    alt="QR de pago Yape" 
                    className="w-64 h-64 mx-auto rounded-lg shadow-md"
                  />
                  
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">Escanea este QR para pagar a:</p>
                    <p className="font-semibold text-gray-900">Wilson Diaz De Oropeza Aparicio</p>
                    <p className="text-sm text-gray-500">Vencimiento: 22 oct 2025</p>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={copyOrderNumber}
                      className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Copy size={16} />
                      <span>Copiar Pedido</span>
                    </button>
                    <button
                      onClick={downloadQR}
                      className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Download size={16} />
                      <span>Descargar QR</span>
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-yellow-800">
                    <Clock size={16} />
                    <span className="font-semibold">Instrucciones:</span>
                  </div>
                  <ol className="text-sm text-yellow-700 mt-2 space-y-1 text-left">
                    <li>1. Abre tu app de pagos (Yape, Plin, BIM)</li>
                    <li>2. Escanea el código QR</li>
                    <li>3. Ingresa el monto: <strong>${cartTotal.toFixed(2)}</strong></li>
                    <li>4. Confirma el pago</li>
                    <li>5. Envía el comprobante por WhatsApp</li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handlePaymentConfirmation}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                  >
                    Ya Realicé el Pago
                  </button>
                  
                  <a
                    href={`https://wa.me/59161518317?text=Hola, acabo de realizar el pago del pedido ${orderNumber} por $${cartTotal.toFixed(2)}. Adjunto el comprobante.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>📱</span>
                    <span>Enviar Comprobante por WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            {paymentStep === 'confirmation' && (
              <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="text-green-600" size={40} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">¡Pago Confirmado!</h3>
                  <p className="text-gray-600">Tu pedido #{orderNumber} ha sido procesado exitosamente</p>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">¿Qué sigue?</h4>
                  <ul className="text-sm text-green-700 space-y-1 text-left">
                    <li>• Recibirás una confirmación por WhatsApp</li>
                    <li>• Prepararemos tu pedido en 30-45 minutos</li>
                    <li>• Te notificaremos cuando esté listo para entrega</li>
                    <li>• Tiempo estimado de entrega: 2-4 horas</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={onClose}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                  >
                    Continuar Comprando
                  </button>
                  
                  <a
                    href={`https://wa.me/59161518317?text=Hola, quiero consultar sobre el estado de mi pedido ${orderNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>📱</span>
                    <span>Consultar Estado del Pedido</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;