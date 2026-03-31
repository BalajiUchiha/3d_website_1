export default function Testimonials() {
  return (
    <section className="bg-fog py-32 px-6 lg:px-24 border-t border-orange-500/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-black/90 mb-16">The standard has been set.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="p-8 border border-black/10 rounded-2xl bg-[#f0f0f0] transition hover:shadow-lg hover:border-orange-500/30">
            <p className="text-lg text-black/70 mb-8 font-light italic">"Typing on the WpDev feels like drumming on a cloud. Easiest recommendation I've made all year for productivity setups."</p>
            <div className="font-medium text-black/90">Marques B.</div>
            <div className="text-sm text-orange-600 font-medium">Tech Reviewer</div>
          </div>

          <div className="p-8 border border-black/10 rounded-2xl bg-[#f0f0f0] transition hover:shadow-lg hover:border-orange-500/30">
            <p className="text-lg text-black/70 mb-8 font-light italic">"The build quality is completely unreasonable for this price. It makes my other premium boards feel like toys."</p>
            <div className="font-medium text-black/90">Alex T.</div>
            <div className="text-sm text-orange-600 font-medium">Developer</div>
          </div>

          <div className="p-8 border border-black/10 rounded-2xl bg-[#f0f0f0] transition hover:shadow-lg hover:border-orange-500/30">
            <p className="text-lg text-black/70 mb-8 font-light italic">"The acoustic profile on the Founders Edition is deep, muted, and completely distraction-free in my open office."</p>
            <div className="font-medium text-black/90">Sarah L.</div>
            <div className="text-sm text-orange-600 font-medium">Product Designer</div>
          </div>

        </div>
      </div>
      
      <footer className="max-w-7xl mx-auto mt-32 border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black/50 gap-4">
        <div>&copy; 2026 WpDev Industries</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Discord</a>
        </div>
      </footer>
    </section>
  );
}
