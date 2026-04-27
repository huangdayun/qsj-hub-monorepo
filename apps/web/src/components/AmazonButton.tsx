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
      className="bg-[#FF9900] hover:bg-[#E68A00] text-white font-bold py-3 px-6 rounded-md transition-all flex items-center gap-2 shadow-lg"
    >
      {copied ? (
        <span>Code Copied! Redirecting...</span>
      ) : (
        <>
          <span>View on Amazon</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs">Save 10% with {discountCode}</span>
        </>
      )}
    </button>
  );
};

export default AmazonButton;
