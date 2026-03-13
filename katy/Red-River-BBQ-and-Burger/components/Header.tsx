
import React, { useState } from 'react';
import { Gift, ShoppingCart, Mail, Trophy } from 'lucide-react';
import OrderModal from './OrderModal';

const Header: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <header className="w-full">
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
      {/* Top Utility Bar */}
      <div className="bg-[#cc0000] border-b-4 border-[#880000]">
        <div className="max-w-7xl mx-auto flex justify-end items-center py-1 px-4 text-white text-[11px] font-bold uppercase tracking-wider space-x-6">
          <a href="#" className="flex items-center hover:underline">
            GIFT CARDS <Gift className="ml-1 w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="flex items-center hover:underline bg-transparent border-none cursor-pointer"
          >
            ORDER ONLINE <ShoppingCart className="ml-1 w-4 h-4" />
          </button>
          <a href="#" className="flex items-center hover:underline">
            E-CLUB <Mail className="ml-1 w-4 h-4" />
          </a>
          <a href="#" className="flex items-center hover:underline">
            REWARDS <Trophy className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Branding Bar */}
      <div className="chalkboard-texture py-6 px-4 shadow-xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="flex flex-col items-center">
               <h1 className="text-[#cc0000] text-3xl md:text-5xl font-oswald font-black italic uppercase leading-none drop-shadow-md">
                 Red River
               </h1>
               <div className="flex items-baseline space-x-1">
                 <span className="text-white text-xl md:text-2xl font-oswald uppercase tracking-widest font-bold">BAR-B-QUE</span>
                 <span className="text-[#5dade2] text-sm md:text-lg font-bold italic">& Grill</span>
               </div>
            </div>
            
            <div className="border-l border-gray-600 h-16 mx-4 hidden md:block"></div>
            
            <div className="bg-transparent border-2 border-yellow-500 rounded-sm p-1 px-2 flex flex-col items-center">
              <span className="text-yellow-500 text-[8px] font-bold">Est. 2002</span>
              <div className="text-white text-lg font-oswald font-bold leading-tight uppercase text-center">
                RED RIVER
              </div>
              <span className="text-white text-[8px] font-bold uppercase border-t border-gray-500 w-full text-center mt-1">BAR-B-QUE & BURGER</span>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="flex flex-col items-end">
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-white font-oswald font-bold uppercase text-sm md:text-base tracking-wide">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">LOCATIONS & MENUS</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">CATERING</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">PARTY ROOM</a></li>
              <li className="relative group">
                <a href="#" className="hover:text-yellow-500 transition-colors flex items-center">CAREERS <span className="ml-1 text-[8px]">▼</span></a>
              </li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">COMMUNITY</a></li>
            </ul>
            <div className="mt-2 flex space-x-4 text-[11px] font-bold">
              <a href="#" className="text-red-500 hover:underline">iPhone App</a>
              <a href="#" className="text-red-500 hover:underline">Android App</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
