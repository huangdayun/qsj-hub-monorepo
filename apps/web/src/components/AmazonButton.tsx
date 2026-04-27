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
      className="w-full bg-[#FF9900] hover:bg-white text-black font-black py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(255,153,0,0.39)] group"
    >
      {copied ? (
        <span className="text-xs uppercase tracking-tighter">Code Copied! Redirecting...</span>
      ) : (
        <>
          <span className="text-xs uppercase tracking-tight">View on Amazon</span>
          <span className="bg-black/10 px-1.5 py-0.5 rounded text-[9px] font-bold">-10% OFF</span>
        </>
      )}
    </button>
  );
};

export default AmazonButton;
