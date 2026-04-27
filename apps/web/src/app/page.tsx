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
    <main className="min-h-screen bg-[#050B14] text-white selection:bg-[#FF9900] selection:text-black">
      {/* Top Nav */}
      <nav className="border-b border-white/5 py-4 px-8 sticky top-0 z-50 bg-[#050B14]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF9900] rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(255,153,0,0.3)]">Q</div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">QSJ Hardware</span>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
            <a href="#" className="hover:text-[#FF9900] transition-colors text-[#FF9900]">Lab Simulator</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors">Technical Catalog</a>
            <a href="#" className="hover:text-[#FF9900] transition-colors">Resources</a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#FF9900] transition-all">
            Inquiry
          </button>
        </div>
      </nav>

      {/* Hero / Physics Lab */}
      <section className="pt-20 pb-32 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8 animate-pulse">
              Mission-Critical Component Validation
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic uppercase leading-[0.9]">
              Visualize <span className="text-transparent stroke-text">Precision</span> <br /> 
              Experience <span className="text-[#FF9900]">Strength</span>
            </h1>
            <p className="text-lg text-white/40 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-tight">
              Professional Grade Hardware for Mission-Critical Builds. <br />
              Explore the physics behind high-torque inserts and precision fasteners.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <HeroSimulator />
          </div>
        </div>
      </section>

      {/* Technical Index / Catalog */}
      <section className="py-32 px-8 bg-white text-black rounded-t-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-2">Technical Index</h2>
              <p className="text-black/40 text-sm uppercase font-bold tracking-widest">Full Catalog // 57 Industrial SKUs</p>
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="SEARCH BY SKU / MATERIAL..." className="bg-black/5 border-none rounded-xl px-6 py-3 text-xs font-bold w-80 focus:ring-2 focus:ring-[#FF9900]" />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white text-[10px] font-black uppercase tracking-widest">
                  <th className="p-6">Product SKU</th>
                  <th className="p-6">Category</th>
                  <th className="p-6">Material</th>
                  <th className="p-6">Hardness</th>
                  <th className="p-6">Corrosion Res.</th>
                  <th className="p-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {catalog.map((item) => (
                  <tr key={item.sku} className="hover:bg-gray-50 transition-colors group">
                    <td className="p-6 font-black text-sm">{item.sku}</td>
                    <td className="p-6"><span className="text-[10px] bg-black/5 px-2 py-1 rounded font-bold uppercase">{item.category}</span></td>
                    <td className="p-6 text-sm text-black/60 font-bold">{item.material}</td>
                    <td className="p-6 text-sm font-mono">{item.hardness}</td>
                    <td className="p-6 text-sm font-bold text-green-600">{item.resistance}</td>
                    <td className="p-6 text-right">
                      <a 
                        href={`https://www.amazon.com/dp/${item.asin}?me=AEEVOM437QYMG`}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#FF9900] text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-tighter group-hover:bg-black group-hover:text-white transition-all"
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
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-6">Technical Resources</h2>
            <p className="text-white/40 mb-10 max-w-md uppercase text-sm leading-relaxed font-bold tracking-tight">
              Free CAD libraries and technical documentation to ensure your engineering projects are built to spec.
            </p>
            <TechnicalLibrary />
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#FF9900]/20 rounded-[40px] blur-2xl group-hover:bg-[#FF9900]/30 transition-all" />
            <div className="relative bg-[#0D1B2A] p-12 rounded-[40px] border border-white/10">
              <h3 className="text-2xl font-black uppercase italic mb-4">Bulk Engineering Orders</h3>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                Direct manufacturing support for enterprise-scale projects. <br />
                Custom CNC and cold-heading solutions available upon request.
              </p>
              <button className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-[#FF9900] transition-all">
                Contact Engineering Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
            © 2026 QSJ Industrial Hardware Group // All Rights Reserved
          </div>
        </div>
      </footer>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </main>
  );
}
