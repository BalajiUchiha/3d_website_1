import KeyboardScroll from "../components/KeyboardScroll";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="bg-fog min-h-screen selection:bg-black/10 selection:text-black relative">
      {/* 
        The top hero scroll sequence perfectly transitions downward into 
        the standard landing page sections. Since KeyboardScroll un-sticks 
        at exactly 400vh, the subsequent sections naturally scroll up 
        behind it!
      */}
      <KeyboardScroll />
      <div className="relative z-20 bg-fog">
        <Features />
        <Pricing />
        <Testimonials />
      </div>
    </main>
  );
}
