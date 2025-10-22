import { useState } from 'react';
import { supabase, type InventoryProduct } from '../lib/supabase';
import { X, Plus, Minus, RefreshCw } from 'lucide-react';

interface StockMovementModalProps {
  product: InventoryProduct;
  onClose: () => void;
}

export default function StockMovementModal({ product, onClose }: StockMovementModalProps) {
  const [movementType, setMovementType] = useState<'in' | 'out' | 'adjustment'>('in');
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const quantityNum = parseInt(quantity);
    if (isNaN(quantityNum) || quantityNum <= 0) {
      alert('Por favor ingresa una cantidad válida');
      setSaving(false);
      return;
    }

    let newQuantity = product.stock_quantity;
    if (movementType === 'in') {
      newQuantity += quantityNum;
    } else if (movementType === 'out') {
      newQuantity -= quantityNum;
      if (newQuantity < 0) {
        alert('No hay suficiente stock para realizar esta salida');
        setSaving(false);
        return;
      }
    } else {
      newQuantity = quantityNum;
    }

    const { error: movementError } = await supabase
      .from('stock_movements')
      .insert([{
        product_id: product.id,
        movement_type: movementType,
        quantity: movementType === 'adjustment' ? quantityNum : (movementType === 'in' ? quantityNum : -quantityNum),
        previous_quantity: product.stock_quantity,
        new_quantity: newQuantity,
        reason: reason || null,
      }]);

    if (movementError) {
      console.error('Error creating movement:', movementError);
      alert('Error al registrar el movimiento: ' + movementError.message);
      setSaving(false);
      return;
    }

    const { error: updateError } = await supabase
      .from('inventory_products')
      .update({ stock_quantity: newQuantity })
      .eq('id', product.id);

    if (updateError) {
      console.error('Error updating stock:', updateError);
      alert('Error al actualizar el stock: ' + updateError.message);
      setSaving(false);
      return;
    }

    onClose();
  };

  const getIcon = () => {
    switch (movementType) {
      case 'in':
        return <Plus className="h-5 w-5" />;
      case 'out':
        return <Minus className="h-5 w-5" />;
      case 'adjustment':
        return <RefreshCw className="h-5 w-5" />;
    }
  };

  const getTypeLabel = () => {
    switch (movementType) {
      case 'in':
        return 'Entrada de Stock';
      case 'out':
        return 'Salida de Stock';
      case 'adjustment':
        return 'Ajuste de Stock';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-xl font-bold text-gray-900">Movimiento de Stock</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600">Producto</p>
            <p className="text-lg font-semibold text-gray-900">{product.name}</p>
            <p className="text-sm text-gray-600 mt-2">Stock actual</p>
            <p className="text-2xl font-bold text-amber-600">{product.stock_quantity}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Movimiento
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setMovementType('in')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                    movementType === 'in'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Plus className="h-4 w-4" />
                  <span className="text-sm font-medium">Entrada</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMovementType('out')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                    movementType === 'out'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Minus className="h-4 w-4" />
                  <span className="text-sm font-medium">Salida</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMovementType('adjustment')}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                    movementType === 'adjustment'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <RefreshCw className="h-4 w-4" />
                  <span className="text-sm font-medium">Ajuste</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {movementType === 'adjustment' ? 'Nueva Cantidad' : 'Cantidad'} *
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder={movementType === 'adjustment' ? 'Cantidad total' : 'Cantidad a mover'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Motivo (opcional)
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Ej: Venta, Compra, Devolución, Inventario físico..."
              />
            </div>

            {quantity && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium mb-1">Vista Previa</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-900">Stock actual:</span>
                  <span className="text-sm font-semibold text-blue-900">{product.stock_quantity}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-blue-900">Nuevo stock:</span>
                  <span className="text-lg font-bold text-blue-900">
                    {movementType === 'in'
                      ? product.stock_quantity + parseInt(quantity || '0')
                      : movementType === 'out'
                      ? product.stock_quantity - parseInt(quantity || '0')
                      : parseInt(quantity || '0')
                    }
                  </span>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={saving}
                className={`flex items-center gap-2 px-6 py-2 text-white rounded-lg transition-colors disabled:opacity-50 ${
                  movementType === 'in'
                    ? 'bg-green-600 hover:bg-green-700'
                    : movementType === 'out'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {getIcon()}
                {saving ? 'Guardando...' : getTypeLabel()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
