import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ComponentsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('components-section');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.75;
      
      if (isInView) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="components-section" className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#1D0B38] to-[#160A2A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built from the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              ground up
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every component designed with precision and purpose, creating a medical device that's both functional and beautiful.
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div 
            className={`relative h-64 md:h-80 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex space-x-3 md:space-x-6">
                {[...Array(5)].map((_, index) => (
                  <div 
                    key={index} 
                    className="w-12 h-48 md:w-16 md:h-64 bg-purple-900/20 backdrop-blur-sm rounded-full border border-purple-500/20 transform rotate-12"
                    style={{ 
                      transitionDelay: `${100 * index}ms`,
                      transitionDuration: '700ms',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible 
                        ? `translateY(${index % 2 === 0 ? '-10px' : '10px'}) rotate(${index * 5}deg)` 
                        : 'translateY(50px) rotate(0deg)',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-purple-900/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20">
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Asper, developed at the intersection of innovation</h3>
              <p className="text-gray-400 mb-6">
                Our team of medical professionals and engineers have worked together to create a device that meets the highest standards of accuracy and ease of use.
              </p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Learn about our team
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 p-6">
              <h4 className="text-lg font-semibold mb-3">Active noise cancellation</h4>
              <div className="h-32 flex items-end overflow-hidden">
                <div className="flex space-x-1 w-full">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-blue-500/70 w-full" 
                      style={{ 
                        height: `${Math.sin(i * 0.5) * 40 + 50}%`,
                        animation: 'pulse 2s infinite',
                        animationDelay: `${i * 0.1}s` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 p-6">
              <h4 className="text-lg font-semibold mb-3">AI-powered health insights</h4>
              <div className="h-32 flex items-center justify-center">
                <div className="grid grid-cols-5 grid-rows-5 gap-1">
                  {[...Array(25)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-4 h-4 rounded-full bg-purple-500/70" 
                      style={{ 
                        animation: 'pulse 3s infinite',
                        animationDelay: `${i * 0.12}s` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 p-6 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Real-time feedback</h3>
            <div className="h-16 w-full bg-black/20 rounded-lg mb-4 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <span className="text-xs font-medium">Processing...</span>
                  <span className="text-xs font-medium">75%</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['Resting', 'Active', 'Sleep', 'Stress'].map((state, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-full h-2 bg-gray-700 rounded-full mb-2">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      style={{ width: `${(index + 1) * 25}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{state}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 p-6">
            <h3 className="text-xl font-bold mb-4">Movement detection</h3>
            <div className="flex space-x-2 mb-4">
              {['X', 'Y', 'Z'].map((axis) => (
                <div key={axis} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                  <span className="text-xs text-gray-400">{axis}-axis</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[80, 40, 65].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-4 h-24 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                      style={{ height: `${value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;