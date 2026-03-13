
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
      {/* 
         Note: Using a high-quality placeholder that matches the BBQ vibe. 
         Real URL used in screenshots would be internal, so we simulate.
      */}
      <img 
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" 
        alt="Delicious BBQ Spread" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
