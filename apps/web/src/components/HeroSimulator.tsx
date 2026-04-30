'use client';

import React, { useState, useRef, useEffect } from 'react';
import AmazonButton from './AmazonButton';

interface SimulationScenario {
  id: string;
  time: number;
  title: string;
  highlight: string;
  asin: string;
  productName: string;
  image: string;
  dataPoints: { label: string; value: string }[];
}

const HeroSimulator: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeScenario, setActiveScenario] = useState<SimulationScenario | null>(null);
  const [progress, setProgress] = useState(0);

  const scenarios: SimulationScenario[] = [
    {
      id: 'fusion',
      time: 5,
      title: 'HEAT-SET FUSION',
      highlight: 'Uniform Heat Distribution // Mechanical Interlock',
      asin: 'B0CHY5R5PQ',
      productName: 'M3 Brass Inserts',
      image: 'https://m.media-amazon.com/images/I/71R2o5-vMKL._AC_SL1500_.jpg',
      dataPoints: [
        { label: 'PULL-OUT STRENGTH', value: '450N' },
        { label: 'TEMP RANGE', value: '220-260°C' }
      ]
    },
    {
      id: 'torque',
      time: 15,
      title: 'TORQUE STRESS ANALYSIS',
      highlight: 'Max Torque Tolerance: +25% // 410 Stainless',
      asin: 'B0CHY6R8NP',
      productName: 'Self-Tapping Screws',
      image: 'https://m.media-amazon.com/images/I/61i-R-uC-DL._AC_SL1500_.jpg',
      dataPoints: [
        { label: 'HARDNESS', value: '45 HRC' },
        { label: 'TORQUE MAX', value: '5.2 Nm' }
      ]
    },
    {
      id: 'corrosion',
      time: 25,
      title: 'ANTI-CORROSION LAYER',
      highlight: '500h Salt Spray Test // Nano-Coating',
      asin: 'B0CHY6R8NP',
      productName: 'Zinc-Plated Fasteners',
      image: 'https://m.media-amazon.com/images/I/71R2o5-vMKL._AC_SL1500_.jpg',
      dataPoints: [
        { label: 'SALT SPRAY', value: '500+ Hours' },
        { label: 'THICKNESS', value: '8-12 μm' }
      ]
    }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const duration = video.duration || 1;
      setProgress((currentTime / duration) * 100);

      const current = scenarios.find(s => currentTime >= s.time && currentTime < s.time + 6);
      setActiveScenario(current || null);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="relative w-full aspect-video bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
      {/* Photorealistic Placeholder Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-700"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-mechanical-parts-of-a-clock-working-together-4654-large.mp4" type="video/mp4" />
      </video>

      {/* Subtle Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/20 pointer-events-none" />

      {/* Lab HUD */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-[#FF9900] rounded-full animate-pulse shadow-[0_0_10px_#FF9900]" />
          <span className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase">
            QSJ Physics Lab // Internal Sim v2.2
          </span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 tracking-tighter italic">
          {activeScenario ? activeScenario.title : 'SCANNING FOR STRESS...'}
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#FF9900] transition-all duration-300 z-30" style={{ width: `${progress}%` }} />

      {/* Product Highlight Card */}
      {activeScenario && (
        <div className="absolute bottom-12 right-12 w-80 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-100 shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-right-8 z-40">
          <div className="flex gap-4 mb-6">
            <img src={activeScenario.image} alt={activeScenario.productName} className="w-20 h-20 rounded-lg border border-gray-100 object-cover" />
            <div>
              <span className="text-[9px] text-[#FF9900] font-bold uppercase tracking-widest mb-1 block">Component Detail</span>
              <h3 className="text-gray-900 font-bold text-lg leading-tight">{activeScenario.productName}</h3>
              <p className="text-[10px] text-gray-400 mt-2 font-mono leading-relaxed italic uppercase">{activeScenario.highlight}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {activeScenario.dataPoints.map(dp => (
              <div key={dp.label} className="bg-gray-50 p-2 rounded border border-gray-100">
                <div className="text-[8px] text-gray-400 uppercase mb-0.5 font-bold">{dp.label}</div>
                <div className="text-xs font-black text-gray-900 font-mono">{dp.value}</div>
              </div>
            ))}
          </div>

          <AmazonButton asin={activeScenario.asin} />
        </div>
      )}

      {/* Interaction Hints */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-4">
        {scenarios.map(s => (
          <button
            key={s.id}
            onClick={() => { if (videoRef.current) videoRef.current.currentTime = s.time; }}
            className={`text-[9px] font-bold px-4 py-2 rounded-full transition-all border ${
              activeScenario?.id === s.id 
                ? 'bg-[#FF9900] text-white border-[#FF9900] shadow-lg shadow-orange-200' 
                : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-gray-600'
            }`}
          >
            SCENE: {s.id.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSimulator;
