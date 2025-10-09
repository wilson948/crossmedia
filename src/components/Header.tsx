import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, QrCode, CreditCard, Banknote } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  cartItemsCount: number;
  updateCartItem: (id: number, quantity: number) => void;
}

type PaymentMethod = 'qr' | 'card' | 'cash' | null;

export default function Header({ cartItems, cartItemsCount, updateCartItem }: HeaderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPayment(method);
  };

  const handleBackToPaymentOptions = () => {
    setSelectedPayment(null);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-green-600">Fresh Market</h1>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />

          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">Carrito de Compras</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <ShoppingCart className="w-16 h-16 mb-4" />
                    <p>Tu carrito está vacío</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-green-600 font-bold">Bs {item.price.toFixed(2)}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateCartItem(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateCartItem(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => updateCartItem(item.id, 0)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">Bs {cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Proceder al Pago</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-60" onClick={() => {
            setIsPaymentModalOpen(false);
            setSelectedPayment(null);
          }} />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 z-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setIsPaymentModalOpen(false);
                setSelectedPayment(null);
              }}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!selectedPayment ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Método de Pago
                </h2>
                <p className="text-gray-600 mb-6">
                  Selecciona cómo deseas pagar tu pedido
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Total a Pagar:</span>
                    <span className="text-2xl font-bold text-green-600">Bs {cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => handlePaymentSelect('qr')}
                    className="w-full bg-white border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 rounded-xl p-4 transition-all flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <QrCode className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900">Pago por QR</h3>
                      <p className="text-sm text-gray-600">Escanea y paga al instante</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePaymentSelect('card')}
                    className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-xl p-4 transition-all flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900">Tarjeta de Crédito/Débito</h3>
                      <p className="text-sm text-gray-600">Pago seguro con tarjeta</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePaymentSelect('cash')}
                    className="w-full bg-white border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 rounded-xl p-4 transition-all flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Banknote className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900">Efectivo</h3>
                      <p className="text-sm text-gray-600">Paga en efectivo al recibir</p>
                    </div>
                  </button>
                </div>
              </div>
            ) : selectedPayment === 'qr' ? (
              <div className="text-center">
                <button
                  onClick={handleBackToPaymentOptions}
                  className="mb-4 text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <span className="mr-2">←</span> Volver
                </button>

                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Escanea el QR para Pagar
                </h2>
                <p className="text-gray-600 mb-6">
                  Realiza tu pago escaneando el código QR
                </p>

                <div className="bg-white rounded-xl p-4 mb-6 border-2 border-gray-200">
                  <img
                    src="/Imagen de WhatsApp 2025-10-01 a las 21.23.53_8e296a48.jpg"
                    alt="Código QR de Pago"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Total a Pagar:</span>
                    <span className="text-2xl font-bold text-green-600">Bs {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1 text-left">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.quantity}x {item.name}</span>
                        <span>Bs {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  Después de realizar el pago, contáctanos por WhatsApp para confirmar tu pedido
                </div>

                <a
                  href="https://wa.me/59161518317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Confirmar por WhatsApp
                </a>
              </div>
            ) : selectedPayment === 'card' ? (
              <div>
                <button
                  onClick={handleBackToPaymentOptions}
                  className="mb-4 text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <span className="mr-2">←</span> Volver
                </button>

                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Pago con Tarjeta
                </h2>
                <p className="text-gray-600 mb-6">
                  Ingresa los datos de tu tarjeta
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Total a Pagar:</span>
                    <span className="text-2xl font-bold text-blue-600">Bs {cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de Tarjeta
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de Vencimiento
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre en la Tarjeta
                    </label>
                    <input
                      type="text"
                      placeholder="NOMBRE APELLIDO"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Procesar Pago
                  </button>
                </form>

                <div className="mt-4 flex items-center justify-center space-x-4 text-gray-400">
                  <CreditCard className="w-8 h-8" />
                  <span className="text-xs">Pago seguro y encriptado</span>
                </div>
              </div>
            ) : selectedPayment === 'cash' ? (
              <div className="text-center">
                <button
                  onClick={handleBackToPaymentOptions}
                  className="mb-4 text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <span className="mr-2">←</span> Volver
                </button>

                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Banknote className="w-6 h-6 text-orange-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Pago en Efectivo
                </h2>
                <p className="text-gray-600 mb-6">
                  Pagarás al momento de recibir tu pedido
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Total a Pagar:</span>
                    <span className="text-2xl font-bold text-orange-600">Bs {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1 text-left mt-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.quantity}x {item.name}</span>
                        <span>Bs {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 text-left space-y-2">
                  <h3 className="font-semibold text-gray-900 mb-2">Información Importante:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ten listo el monto exacto</li>
                    <li>• El repartidor llevará cambio limitado</li>
                    <li>• Confirma tu pedido por WhatsApp</li>
                    <li>• Tiempo de entrega: 2-4 horas</li>
                  </ul>
                </div>

                <a
                  href="https://wa.me/59161518317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Confirmar Pedido por WhatsApp
                </a>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
