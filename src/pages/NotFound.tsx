import React, { useState } from 'react';
import { Play, ChevronRight } from 'lucide-react';

const NotFound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-[#1D0B38]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Unlock powerful insights with the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              next-generation stethoscope
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how medical professionals are using Asper to transform patient care and monitoring.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden group">
          {!isPlaying ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Asper device video thumbnail"
                className="w-full h-[500px] object-cover"
              />
              <button
                onClick={handlePlayVideo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 
                         bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all 
                         w-20 h-20 rounded-full flex items-center justify-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <Play fill="white" size={24} className="ml-1" />
                </div>
                <div className="absolute w-20 h-20 rounded-full bg-purple-500/30 animate-ping"></div>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-2xl font-bold mb-2">How Asper is changing healthcare</h3>
                <p className="text-gray-300 mb-4">Learn how our technology provides clinical-grade insights for everyone</p>
                <div className="flex items-center">
                  <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400 whitespace-nowrap">0:00 / 5:23</span>
                </div>
              </div>
            </>
          ) : (
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Asper device demonstration"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium">
            Watch more tutorials
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;