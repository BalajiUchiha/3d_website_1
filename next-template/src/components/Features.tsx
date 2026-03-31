export default function Features() {
  const features = [
    { title: "Gasket Mounted", desc: "Acoustically tuned flex-cuts deliver a cloud-like typing feel." },
    { title: "CNC Aluminum", desc: "Milled from a single block of aerospace-grade alloy." },
    { title: "Hot-Swappable", desc: "Change switches on the fly without ever touching a soldering iron." },
    { title: "Wireless Low Latency", desc: "Sub-1ms response times via 2.4GHz alongside dual Bluetooth 5.1." }
  ];

  return (
    <section className="bg-fog py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-black/90">Function dictating <span className="text-orange-500">form.</span></h2>
          <p className="text-xl text-black/60 max-w-2xl font-light">We stripped away the unnecessary, leaving only the peak of mechanical engineering and tactile performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-orange-500/20 pt-16">
          {features.map((f, i) => (
            <div key={i} className="space-y-3 group cursor-default">
              <h3 className="text-2xl font-medium tracking-tight text-black/90 group-hover:text-orange-500 transition-colors">{f.title}</h3>
              <p className="text-lg text-black/60 font-light max-w-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
