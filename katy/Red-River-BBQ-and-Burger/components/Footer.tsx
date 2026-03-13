
import React from 'react';
import { Facebook, Users, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="diagonal-stripes py-16 px-4 text-gray-300 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        
        {/* League City Column */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-white font-bold text-sm uppercase">Red River BBQ & Burger</h3>
            <p className="text-sm font-bold text-gray-400">League City, Texas</p>
            <p className="text-sm">Phone: 281.578.3800</p>
            <p className="text-sm italic">1711 S Mason Rd</p>
            <p className="text-sm italic">Katy, TX 77450</p>
          </div>
          <div className="pt-4">
            <a href="#" className="flex items-center text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
              <Users className="mr-2 w-4 h-4" /> CAREERS <span className="ml-1 text-[8px]">👫</span>
            </a>
          </div>
        </div>

        {/* League City Hours */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div>
            <h3 className="text-white font-bold text-sm uppercase">League City Hours:</h3>
            <p className="text-sm"><span className="font-bold">Sunday – Thursday |</span> 11:00 am – 9:00pm</p>
            <p className="text-sm"><span className="font-bold">Friday & Saturday |</span> 11:00 am – 9:30pm</p>
          </div>
          <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors">
            <Facebook className="w-5 h-5 fill-current" />
          </a>
        </div>

        {/* Rewards Box (Center) */}
        <div className="border-2 border-dashed border-gray-500 rounded-lg p-6 flex flex-col items-center justify-center text-center space-y-4 bg-black/40">
          <h3 className="text-white font-oswald text-xl uppercase font-bold">Red River Restaurants Rewards</h3>
          <p className="text-xs">Earn points, unlock rewards, get a birthday bonus.</p>
          <a href="#" className="border-2 border-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center">
            SIGN UP FOR REWARDS 🎁
          </a>
        </div>

        {/* Katy Hours */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div>
              <h3 className="text-white font-bold text-sm uppercase">Katy Hours:</h3>
              <p className="text-sm"><span className="font-bold">Sunday – Thursday |</span> 11:00 am – 9:00pm</p>
              <p className="text-sm"><span className="font-bold">Friday & Saturday |</span> 11:00 am – 9:30pm</p>
          </div>
          <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors">
            <Facebook className="w-5 h-5 fill-current" />
          </a>
        </div>

        {/* Katy Location */}
        <div className="flex flex-col items-end text-right space-y-4">
          <div>
            <h3 className="text-white font-bold text-sm uppercase">Red River BBQ & Burger</h3>
            <p className="text-sm font-bold text-gray-400">Katy, Texas</p>
            <p className="text-sm">Phone: 281.578.3800</p>
            <p className="text-sm italic">1711 S Mason Rd.</p>
            <p className="text-sm italic">Katy, TX 77450</p>
          </div>
          <div className="pt-4">
            <a href="#" className="flex items-center text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
               CAREERS <span className="ml-1 text-[8px]">👫</span> <Users className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Logos */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Main Logo */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 border-4 border-red-600 rounded-full flex flex-col items-center justify-center p-2 bg-white/5 relative">
            <div className="text-red-600 font-oswald text-center leading-tight">
               <div className="text-[10px] font-bold uppercase tracking-tighter">RED RIVER</div>
               <div className="text-2xl font-black italic">B.B.Q.</div>
               <div className="text-[10px] font-bold uppercase border-t border-red-600 pt-1">and Grill</div>
            </div>
            <div className="absolute inset-0 border border-gray-600 rounded-full m-1 pointer-events-none"></div>
            <div className="text-[8px] absolute bottom-2 font-bold italic text-gray-400">est. 2002</div>
          </div>
        </div>

        {/* Cantina Logo */}
        <div className="flex flex-col items-center">
          <div className="text-[#00a79d] flex flex-col items-center">
            <div className="text-sm font-oswald font-bold uppercase tracking-[0.2em]">EST. 2017</div>
            <div className="text-4xl md:text-5xl font-oswald font-black italic uppercase leading-none mt-1">
              RED RIVER
            </div>
            <div className="text-3xl md:text-4xl font-oswald italic uppercase tracking-widest -mt-1">
              Cantina
            </div>
            <div className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-widest flex items-center">
              TEX-MEX <span className="mx-2">•</span> FAJITAS <span className="mx-2">•</span> MARGARITAS
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#333333] text-white p-2 border border-gray-600 hover:bg-red-600 transition-colors"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
