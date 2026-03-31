"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

export default function KeyboardScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const frameCount = 192;

  useEffect(() => {
    setIsClient(true);
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
       const img = new window.Image();
       img.src = `/keyboard/_MConverter.eu_Keyboard-${i}.jpg`;
       img.onload = () => {
         loadedCount++;
         setLoaded(loadedCount);
         if (loadedCount === frameCount) {
           setImages(loadedImages);
         }
       };
       loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Finish the animation at 80% scroll so the last frame stays visible
  const frameIndex = useTransform(scrollYProgress, [0, 0.80], [0, frameCount - 1]);
  
  const drawKeyboard = (latest: number) => {
    if (images.length === frameCount && canvasRef.current) {
      const idx = Math.min(frameCount - 1, Math.max(0, Math.floor(latest)));
      const img = images[idx];
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx || !img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      
      // Use COVER (Math.max) for all screens to prevent tiny "zoomed out" rectangles with hard edges.
      // The keyboard will gracefully crop its edges on mobile but remain large and immersive.
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
  };

  useMotionValueEvent(frameIndex, "change", drawKeyboard);

  useEffect(() => {
    const handleResize = () => drawKeyboard(frameIndex.get());
    if (images.length === frameCount) { handleResize(); }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, frameIndex]);

  // Readjust checkpoints since we have accurate 0-1 mapped progress now
  const text1Opacity = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  const text2Opacity = useTransform(scrollYProgress, [0.20, 0.28, 0.38, 0.45], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.20, 0.28], [30, 0]);

  const text3Opacity = useTransform(scrollYProgress, [0.50, 0.58, 0.68, 0.75], [0, 1, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.50, 0.58], [30, 0]);

  // Last text stays visible for the remaining scroll space
  const text4Opacity = useTransform(scrollYProgress, [0.80, 0.85, 1], [0, 1, 1]);
  const text4Y = useTransform(scrollYProgress, [0.80, 0.85], [30, 0]);


  return (
    <div ref={containerRef} className="h-[500vh] w-full relative bg-fog">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Loading Overlay */}
        {loaded < frameCount && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-fog px-6 text-center">
            <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-black/60 font-sans tracking-tight text-sm">Loading high-res frames... {Math.floor((loaded/frameCount)*100)}%</p>
          </div>
        )}

        <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000 ${loaded < frameCount ? 'opacity-0' : 'opacity-100'}`} />

        {/* Text 1: Top Center */}
        <motion.div 
          style={{ opacity: text1Opacity, y: text1Y }} 
          className="absolute inset-x-0 top-[10vh] flex flex-col items-center justify-start pointer-events-none z-10 px-4 text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-black/90 mb-2">
            <span className="text-orange-500 drop-shadow-sm">WpDev</span> Keyboard.
          </h1>
          <p className="text-lg md:text-2xl text-black/60 tracking-tight font-light">Engineered clarity.</p>
        </motion.div>

        {/* Text 2: Top Center on Mobile, Left Center on Desktop */}
        <motion.div 
          style={{ opacity: text2Opacity, y: text2Y }} 
          className="absolute inset-x-0 top-[12vh] md:top-auto md:inset-y-0 flex flex-col items-center md:items-start justify-start md:justify-center px-6 md:px-0 md:pl-[15%] pointer-events-none z-10 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-black/90 mb-2 max-w-sm">Built for Precision.</h2>
          <p className="text-lg md:text-xl text-black/60 tracking-tight font-light">Every detail, perfectly measured.</p>
        </motion.div>

        {/* Text 3: Top Center on Mobile, Right Center on Desktop */}
        <motion.div 
          style={{ opacity: text3Opacity, y: text3Y }} 
          className="absolute inset-x-0 top-[12vh] md:top-auto md:inset-y-0 flex flex-col items-center md:items-end justify-start md:justify-center px-6 md:px-0 md:pr-[15%] pointer-events-none z-10 text-center md:text-right"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-black/90 mb-2 max-w-sm">Layered Engineering.</h2>
          <p className="text-lg md:text-xl text-black/60 tracking-tight font-light">See exactly what’s inside.</p>
        </motion.div>

        {/* Text 4: Bottom Center */}
        <motion.div 
          style={{ opacity: text4Opacity, y: text4Y }} 
          className="absolute inset-x-0 bottom-[12vh] flex flex-col items-center justify-end pointer-events-none z-10 px-4 text-center"
        >
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-black/90 mb-2">
            Assembled. <span className="text-orange-500">Ready.</span>
          </h3>
          <p className="text-lg md:text-xl text-black/60 tracking-tight font-light bg-fog/80 px-4 py-1 rounded-full backdrop-blur-sm shadow-sm md:bg-transparent md:backdrop-blur-none md:shadow-none">Scroll further to discover more.</p>
        </motion.div>
      </div>
    </div>
  );
}
