import React from 'react';
import { X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const orderOptions = [
    { label: 'LEAGUE CITY | PICK-UP', url: '#' },
    { label: 'LEAGUE CITY | DELIVERY', url: '#' },
    { label: 'KATY | PICK-UP', url: '#' },
    { label: 'KATY | DELIVERY', url: '#' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full animate-scaleIn">
          {/* Header */}
          <div className="bg-[#cc0000] px-6 py-4 flex justify-between items-center rounded-t-lg">
            <h2 className="text-white font-oswald font-bold text-2xl uppercase">
              ORDER ONLINE
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-[#880000] p-1 rounded transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-3">
              {orderOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.url}
                  className="block w-full px-4 py-3 border-b-2 border-gray-300 text-[#cc0000] font-oswald font-bold uppercase text-center hover:bg-red-50 transition-colors last:border-b-0"
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default OrderModal;
