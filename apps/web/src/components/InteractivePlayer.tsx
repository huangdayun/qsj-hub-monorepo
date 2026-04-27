'use client';

import React, { useState, useRef, useEffect } from 'react';
import AmazonButton from './AmazonButton';

interface ProductTimestamp {
  time: number;
  label: string;
  asin: string;
  image: string;
  name: string;
}

const InteractivePlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeProduct, setActiveProduct] = useState<ProductTimestamp | null>(null);

  const timestamps: ProductTimestamp[] = [
    {
      time: 10,
      label: 'Prepare Heat-Set Inserts',
      asin: 'B0CHY5R5PQ',
      image: 'https://m.media-amazon.com/images/I/71R2o5-vMKL._AC_SL1500_.jpg',
      name: 'QSJ M3 Heat-Set Inserts',
    },
    {
      time: 45,
      label: 'Using the Soldering Tip',
      asin: 'B0CHY6R8NP',
      image: 'https://m.media-amazon.com/images/I/61i-R-uC-DL._AC_SL1500_.jpg',
      name: 'QSJ Heat-Set Insertion Tool',
    },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const matching = timestamps.find(
        (t) => currentTime >= t.time && currentTime < t.time + 5
      );
      if (matching) {
        setActiveProduct(matching);
      } else {
        setActiveProduct(null);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-2xl bg-black">
      <video
        ref={videoRef}
        controls
        className="w-full aspect-video"
        poster="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Product Overlay */}
      {activeProduct && (
        <div className="absolute bottom-16 right-4 w-64 bg-white p-4 rounded-lg shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex gap-3 mb-3">
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="text-sm font-bold text-gray-900 leading-tight">
                {activeProduct.name}
              </h4>
              <p className="text-xs text-gray-500 mt-1">Direct from QSJ Store</p>
            </div>
          </div>
          <AmazonButton asin={activeProduct.asin} />
        </div>
      )}

      {/* Timestamps Navigation */}
      <div className="bg-[#1A202C] p-4 flex gap-4 overflow-x-auto border-t border-gray-700">
        {timestamps.map((t) => (
          <button
            key={t.time}
            onClick={() => {
              if (videoRef.current) videoRef.current.currentTime = t.time;
            }}
            className="flex-shrink-0 text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="bg-[#FF9900] text-black px-1.5 py-0.5 rounded font-mono">
              {Math.floor(t.time / 60)}:{(t.time % 60).toString().padStart(2, '0')}
            </span>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractivePlayer;
