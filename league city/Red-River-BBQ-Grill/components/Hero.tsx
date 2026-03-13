
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden md:h-[600px]">
      {/* 
         Note: Using a high-quality placeholder that matches the BBQ vibe. 
         Real URL used in screenshots would be internal, so we simulate.
      */}
      <img 
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" 
        alt="Delicious BBQ Spread" 
        className="w-full h-auto md:h-full md:object-cover"
      />
    </div>
  );
};

export default Hero;
