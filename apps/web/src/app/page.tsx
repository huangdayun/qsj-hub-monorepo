'use client';

import InteractivePlayer from '../components/InteractivePlayer';
import TechnicalLibrary from '../components/TechnicalLibrary';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <nav className="bg-[#0D1B2A] text-white py-4 px-8 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF9900] rounded flex items-center justify-center font-bold text-black">Q</div>
            <span className="font-bold text-xl tracking-tight">QSJ HARDWARE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#FF9900] transition-colors text-[#FF9900]">Solution Hub</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors text-gray-400">Products</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors text-gray-400">Technical Docs</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors text-gray-400">Project Guide</a>
          </div>
          <a 
            href="https://www.amazon.com/s?me=AEEVOM437QYMG" 
            target="_blank"
            className="bg-[#FF9900] text-black px-4 py-1.5 rounded text-sm font-bold hover:bg-white transition-all"
          >
            Amazon Store
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0D1B2A] text-white pt-20 pb-40 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Professional Hardware <br /> 
            <span className="text-[#FF9900]">Solution Hub</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            High-precision fasteners and DIY guides for makers, engineers, and hobbyists. 
            Build your next project with the strength it deserves.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 -mt-24 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Video Solution */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
            <InteractivePlayer />
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Guide to Heat-Set Inserts</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                In this masterclass, we explore the nuances of heat-set insertion for 3D printed parts. 
                Whether you're building a Voron 2.4 or a custom enclosure, using the right 
                brass inserts and temperature profile is critical for joint strength.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-900 text-sm mb-1">Recommended Temp</h4>
                  <p className="text-2xl font-black text-blue-600">220°C - 240°C</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-900 text-sm mb-1">Max Shear Load</h4>
                  <p className="text-2xl font-black text-orange-600">450 N</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Technical Library */}
        <div className="space-y-8">
          <TechnicalLibrary />
          
          <div className="bg-[#FF9900]/10 border border-[#FF9900]/20 p-6 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-2">Need a Bulk Order?</h3>
            <p className="text-sm text-gray-600 mb-4">
              For commercial projects and custom manufacturing requirements, 
              contact our engineering team directly.
            </p>
            <button className="w-full bg-[#0D1B2A] text-white py-2 rounded font-bold text-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="text-gray-400 text-sm">
            © 2026 QSJ Hardware Hub. All rights reserved. 
          </div>
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Shipping Info</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
