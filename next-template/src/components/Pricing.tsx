export default function Pricing() {
  return (
    <section className="bg-fog py-32 px-6 lg:px-24 border-t border-orange-500/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        <div className="md:w-1/3 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-black/90 mb-4">Pricing.</h2>
          <p className="text-xl text-black/60 font-light">A single, perfect configuration.</p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="border border-black/10 rounded-3xl p-10 bg-[#e3e3e3] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-medium mb-2">Base Kit</h3>
            <div className="text-5xl font-light tracking-tighter mb-8">$299</div>
            <ul className="space-y-4 mb-10 text-black/70 font-light">
              <li className="flex gap-2"><span className="text-orange-500">—</span> Barebone chassis</li>
              <li className="flex gap-2"><span className="text-orange-500">—</span> FR4 & PC Plates</li>
              <li className="flex gap-2"><span className="text-orange-500">—</span> Carrying Case</li>
            </ul>
            <button className="w-full py-4 border border-black/20 rounded-full font-medium transition hover:bg-black/5 hover:border-orange-500/50">Build Yours</button>
          </div>

          <div className="border border-orange-500/30 rounded-3xl p-10 bg-black text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-medium mb-2 opacity-90 text-orange-400">Founders Edition</h3>
            <div className="text-5xl font-light tracking-tighter mb-8 opacity-90">$499</div>
            <ul className="space-y-4 mb-10 text-white/70 font-light">
              <li className="flex gap-2"><span className="text-orange-400">—</span> Pre-assembled</li>
              <li className="flex gap-2"><span className="text-orange-400">—</span> Custom PBT Keycaps</li>
              <li className="flex gap-2"><span className="text-orange-400">—</span> Signature Brass Weight</li>
            </ul>
            <button className="w-full py-4 bg-orange-500 text-white rounded-full font-medium transition hover:bg-orange-400">Order Now</button>
          </div>
        </div>

      </div>
    </section>
  );
}
