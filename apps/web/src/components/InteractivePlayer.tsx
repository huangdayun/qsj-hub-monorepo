'use client';

import React, { useState, useRef, useEffect } from 'react';
import AmazonButton from './AmazonButton';

interface ProductTimestamp {
  time: number;
  label: string;
  asin: string;
  image: string;
  name: string;
  technicalNote?: string;
}

const InteractivePlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeProduct, setActiveProduct] = useState<ProductTimestamp | null>(null);
  const [showHud, setShowHud] = useState(true);

  const timestamps: ProductTimestamp[] = [
    {
      time: 5,
      label: 'Material Stress Test',
      asin: 'B0CHY5R5PQ',
      image: 'https://m.media-amazon.com/images/I/71R2o5-vMKL._AC_SL1500_.jpg',
      name: 'QSJ M3 Heat-Set Inserts',
      technicalNote: 'Optimized for Voron 2.4 / 3D Printed ABS Parts',
    },
    {
      time: 25,
      label: 'Thermal Profile Sync',
      asin: 'B0CHY6R8NP',
      image: 'https://m.media-amazon.com/images/I/61i-R-uC-DL._AC_SL1500_.jpg',
      name: 'QSJ Heat-Set Insertion Tool',
      technicalNote: 'Precision temp control (±2°C) for clean melds.',
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
    <div className="relative group rounded-xl overflow-hidden shadow-2xl bg-black border-4 border-[#1A202C]">
      {/* 3D Simulation Label */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-black text-white tracking-widest uppercase bg-black/50 px-2 py-1 rounded">
          LIVE 3D SIMULATION // V.04
        </span>
      </div>

      <video
        ref={videoRef}
        controls
        className="w-full aspect-video opacity-80"
        poster="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-microchip-extreme-close-up-4447-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Technical HUD Overlay */}
      {showHud && (
        <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
          <div className="absolute top-10 left-10 border-l border-t border-[#FF9900] w-12 h-12" />
          <div className="absolute top-10 right-10 border-r border-t border-[#FF9900] w-12 h-12" />
          <div className="absolute bottom-20 left-10 border-l border-b border-[#FF9900] w-12 h-12" />
          <div className="absolute bottom-20 right-10 border-r border-b border-[#FF9900] w-12 h-12" />
          <div className="absolute top-1/2 left-4 h-[1px] w-8 bg-[#FF9900]" />
          <div className="absolute top-1/2 right-4 h-[1px] w-8 bg-[#FF9900]" />
        </div>
      )}

      {/* Product Overlay */}
      {activeProduct && (
        <div className="absolute bottom-24 right-6 w-72 bg-[#0D1B2A] p-5 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-[#FF9900]/30 animate-in fade-in zoom-in-95 slide-in-from-bottom-8 z-30">
          <div className="flex gap-4 mb-4">
            <div className="relative">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-20 h-20 object-cover rounded-lg border border-gray-700"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF9900] rounded-full blur-[2px] animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">
                {activeProduct.name}
              </h4>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tight">
                {activeProduct.technicalNote}
              </p>
            </div>
          </div>
          <AmazonButton asin={activeProduct.asin} />
          <div className="mt-3 flex items-center justify-between text-[8px] text-gray-500 uppercase tracking-widest font-mono">
            <span>REF: QSJ-INS-V2</span>
            <span>STOCK: 100% READY</span>
          </div>
        </div>
      )}

      {/* Timestamps Navigation */}
      <div className="bg-[#0D1B2A] p-4 flex gap-4 overflow-x-auto border-t border-[#1A202C] relative z-20">
        <button 
          onClick={() => setShowHud(!showHud)}
          className={`text-[9px] font-bold px-2 py-1 rounded transition-colors ${showHud ? 'bg-[#FF9900] text-black' : 'bg-gray-800 text-gray-400'}`}
        >
          HUD {showHud ? 'ON' : 'OFF'}
        </button>
        <div className="w-[1px] h-4 bg-gray-700 mx-1" />
        {timestamps.map((t) => (
          <button
            key={t.time}
            onClick={() => {
              if (videoRef.current) videoRef.current.currentTime = t.time;
            }}
            className="flex-shrink-0 text-[10px] text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/btn"
          >
            <span className="bg-[#1A202C] border border-[#FF9900]/50 text-[#FF9900] px-2 py-0.5 rounded font-mono group-hover/btn:bg-[#FF9900] group-hover/btn:text-black transition-all">
              {Math.floor(t.time / 60)}:{(t.time % 60).toString().padStart(2, '0')}
            </span>
            <span className="uppercase tracking-tight">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractivePlayer;
