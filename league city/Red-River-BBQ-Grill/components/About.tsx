
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl md:text-4xl font-oswald font-bold uppercase tracking-tight mb-8 relative inline-block">
          LOCAL FAVORITE SINCE 2002
          <div className="h-1 bg-yellow-500 w-1/2 mx-auto mt-1"></div>
        </h2>
        
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Our original location in League City since 2002. We offer a family friendly dining experience with a large dining room, private banquet rooms, outdoor dining and a play area for kids to enjoy. Come enjoy some Texas bar-b-que and home cooking! We also offer catering for any type of event & size. See our catering menu for more details. See you soon!
        </p>
      </div>

      {/* Jagged Divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="relative block w-full h-[60px]"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.33V0Z" 
                className="fill-[#222]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
