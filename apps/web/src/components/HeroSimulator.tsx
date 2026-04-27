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
    <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
      {/* Photorealistic Placeholder Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-70"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-mechanical-parts-of-a-clock-working-together-4654-large.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none" />

      {/* Lab HUD */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-[#FF9900] rounded-full animate-pulse shadow-[0_0_10px_#FF9900]" />
          <span className="text-[10px] font-black text-white/50 tracking-[0.3em] uppercase">
            QSJ Physics Lab // Internal Sim v2.2
          </span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tighter italic">
          {activeScenario ? activeScenario.title : 'SCANNING FOR STRESS...'}
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-[#FF9900] transition-all duration-300 z-30" style={{ width: `${progress}%` }} />

      {/* Product Highlight Card */}
      {activeScenario && (
        <div className="absolute bottom-12 right-12 w-80 bg-[#0D1B2A]/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-right-8 z-40">
          <div className="flex gap-4 mb-6">
            <img src={activeScenario.image} alt={activeScenario.productName} className="w-20 h-20 rounded-lg border border-white/5 object-cover" />
            <div>
              <span className="text-[9px] text-[#FF9900] font-bold uppercase tracking-widest mb-1 block">Component Detail</span>
              <h3 className="text-white font-bold text-lg leading-tight">{activeScenario.productName}</h3>
              <p className="text-[10px] text-white/40 mt-2 font-mono leading-relaxed italic">{activeScenario.highlight}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {activeScenario.dataPoints.map(dp => (
              <div key={dp.label} className="bg-white/5 p-2 rounded border border-white/5">
                <div className="text-[8px] text-white/30 uppercase mb-0.5">{dp.label}</div>
                <div className="text-xs font-black text-white font-mono">{dp.value}</div>
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
            className={`text-[9px] font-bold px-3 py-1.5 rounded-full transition-all border ${
              activeScenario?.id === s.id 
                ? 'bg-[#FF9900] text-black border-[#FF9900]' 
                : 'bg-white/5 text-white/40 border-white/10 hover:border-white/30'
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
