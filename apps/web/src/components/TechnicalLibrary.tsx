'use client';

import React from 'react';

interface TechnicalAsset {
  id: string;
  name: string;
  type: 'CAD' | 'PDF' | 'Spec';
  description: string;
  size: string;
  asinRelated: string;
}

const TechnicalLibrary: React.FC = () => {
  const assets: TechnicalAsset[] = [
    {
      id: '1',
      name: 'M3-M6 Heat-Set Insert Dimension Chart',
      type: 'PDF',
      description: 'Comprehensive spec sheet for all QSJ metric inserts.',
      size: '1.2 MB',
      asinRelated: 'B0CHY5R5PQ',
    },
    {
      id: '2',
      name: 'Voron 2.4 Hardware Kit CAD Model',
      type: 'CAD',
      description: 'STEP files for the complete hardware arrangement.',
      size: '24 MB',
      asinRelated: 'B0CHY6R8NP',
    },
  ];

  const handleDownload = (asset: TechnicalAsset) => {
    // 1. Copy code
    navigator.clipboard.writeText('QSJ-DOCS');
    alert(`Discount code "QSJ-DOCS" copied! You will be redirected to the relevant hardware page.`);
    
    // 2. Redirect
    window.open(`https://www.amazon.com/dp/${asset.asinRelated}?me=AEEVOM437QYMG`, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-gray-900 p-8 text-white">
        <h3 className="text-xl font-black uppercase italic tracking-tighter">Technical Resource Library</h3>
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-2">Free CAD and PDF resources for your DIY projects.</p>
      </div>
      <div className="divide-y divide-gray-100">
        {assets.map((asset) => (
          <div key={asset.id} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between">
            <div className="flex gap-4 items-start">
              <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                {asset.type === 'CAD' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                )}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{asset.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{asset.description}</p>
                <div className="flex gap-3 mt-2">
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-700 font-mono">
                    {asset.type}
                  </span>
                  <span className="text-xs text-gray-400">{asset.size}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDownload(asset)}
              className="flex items-center gap-2 text-sm font-bold text-[#FF9900] hover:text-[#E68A00] transition-colors"
            >
              <span>Download & Get Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalLibrary;
