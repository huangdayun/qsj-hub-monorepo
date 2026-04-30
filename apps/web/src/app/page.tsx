'use client';

import HeroSimulator from '../components/HeroSimulator';
import TechnicalLibrary from '../components/TechnicalLibrary';

export default function Home() {
  const catalog = [
    { sku: 'QSJ-INS-M3', material: 'Brass (H62)', hardness: '90-110 HV', resistance: 'Grade A', category: 'Heat-Set', asin: 'B0CHY5R5PQ' },
    { sku: 'QSJ-SCR-410-12', material: '410 Stainless', hardness: '40-45 HRC', resistance: '500h Salt Spray', category: 'Self-Tapping', asin: 'B0CHY6R8NP' },
    { sku: 'QSJ-NUT-304-M5', material: '304 Stainless', hardness: '200 HV', resistance: 'Acid/Alkali Res.', category: 'Hex Nut', asin: 'B0CHY5R5PQ' },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-gray-900 selection:bg-[#FF9900] selection:text-white font-sans">
      {/* Top Nav */}
      <nav className="border-b border-gray-100 py-4 px-8 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF9900] rounded-xl flex items-center justify-center font-black text-white text-xl shadow-[0_4px_12px_rgba(255,153,0,0.3)]">Q</div>
            <span className="font-black text-2xl tracking-tighter uppercase italic text-gray-900">QSJ Hardware</span>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-[#FF9900] transition-colors text-[#FF9900]">Lab Simulator</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors">Technical Catalog</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors">Resources</a>
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#FF9900] transition-all">
            Inquiry
          </button>
        </div>
      </nav>

      {/* Hero / Physics Lab */}
      <section className="pt-24 pb-32 px-8 relative overflow-hidden bg-white">
        {/* Subtle Decorative Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF9900]/10 border border-[#FF9900]/20 text-[#FF9900] px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              Mission-Critical Component Validation
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic uppercase leading-[0.9] text-gray-900">
              Visualize <span className="text-transparent stroke-text">Precision</span> <br /> 
              Experience <span className="text-[#FF9900]">Strength</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-tight">
              Professional Grade Hardware for Mission-Critical Builds. <br />
              Explore the physics behind high-torque inserts and precision fasteners.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute -inset-4 bg-gray-100 rounded-[40px] -z-10" />
            <HeroSimulator />
          </div>
        </div>
      </section>

      {/* Technical Index / Catalog */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-2 text-gray-900">Technical Index</h2>
              <p className="text-gray-400 text-sm uppercase font-bold tracking-widest font-mono">Full Catalog // 57 Industrial SKUs</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <input type="text" placeholder="SEARCH BY SKU / MATERIAL..." className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-xs font-bold w-full md:w-80 focus:ring-2 focus:ring-[#FF9900] focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-100">
                  <th className="p-6">Product SKU</th>
                  <th className="p-6">Category</th>
                  <th className="p-6">Material</th>
                  <th className="p-6">Hardness</th>
                  <th className="p-6">Corrosion Res.</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {catalog.map((item) => (
                  <tr key={item.sku} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="p-6 font-black text-sm text-gray-900">{item.sku}</td>
                    <td className="p-6"><span className="text-[10px] bg-gray-100 px-2 py-1 rounded font-bold uppercase text-gray-600">{item.category}</span></td>
                    <td className="p-6 text-sm text-gray-500 font-bold">{item.material}</td>
                    <td className="p-6 text-sm font-mono text-gray-400">{item.hardness}</td>
                    <td className="p-6 text-sm font-bold text-emerald-600">{item.resistance}</td>
                    <td className="p-6 text-right">
                      <a 
                        href={`https://www.amazon.com/dp/${item.asin}?me=AEEVOM437QYMG`}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#FF9900] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-tighter hover:bg-gray-900 transition-all shadow-sm"
                      >
                        Buy on Amazon
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-6 text-gray-900">Technical Resources</h2>
            <p className="text-gray-400 mb-10 max-w-md uppercase text-sm leading-relaxed font-bold tracking-tight">
              Free CAD libraries and technical documentation to ensure your engineering projects are built to spec.
            </p>
            <TechnicalLibrary />
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/50 rounded-[40px] blur-2xl group-hover:bg-[#FF9900]/10 transition-all" />
            <div className="relative bg-white p-12 rounded-[40px] border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-black uppercase italic mb-4 text-gray-900">Bulk Engineering Orders</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed uppercase font-medium tracking-tight">
                Direct manufacturing support for enterprise-scale projects. <br />
                Custom CNC and cold-heading solutions available upon request.
              </p>
              <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#FF9900] transition-all">
                Contact Engineering Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-gray-100 px-8 text-center bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
            © 2026 QSJ Industrial Hardware Group // All Rights Reserved
          </div>
        </div>
      </footer>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #E2E8F0;
        }
      `}</style>
    </main>
  );
}
