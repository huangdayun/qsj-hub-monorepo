'use client';

import React, { useState } from 'react';

interface AmazonButtonProps {
  asin: string;
  discountCode?: string;
}

const AmazonButton: React.FC<AmazonButtonProps> = ({ asin, discountCode = 'QSJ10' }) => {
  const [copied, setCopied] = useState(false);

  const handleRedirect = () => {
    // 1. Copy discount code
    navigator.clipboard.writeText(discountCode);
    setCopied(true);

    // 2. Track event (Mock GA4)
    console.log(`GA4: outbound_click, asin: ${asin}, discount: ${discountCode}`);

    // 3. Redirect to Amazon after a short delay
    setTimeout(() => {
      window.open(`https://www.amazon.com/dp/${asin}?me=AEEVOM437QYMG`, '_blank');
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleRedirect}
      className="w-full bg-[#FF9900] hover:bg-gray-900 text-white font-black py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(255,153,0,0.3)] group active:scale-[0.98]"
    >
      {copied ? (
        <span className="text-[10px] uppercase tracking-widest">Code Copied // Redirecting...</span>
      ) : (
        <>
          <span className="text-[10px] uppercase tracking-[0.2em]">View on Amazon</span>
          <div className="w-[1px] h-3 bg-white/20 mx-1" />
          <span className="text-[9px] font-bold">10% OFF</span>
        </>
      )}
    </button>
  );
};

export default AmazonButton;
