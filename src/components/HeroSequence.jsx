import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 300;
const currentFrame = index => (
  `/ezgif-new-jpg/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
);

export default function HeroSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sequenceRef = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    const container = containerRef.current;

    const img = new Image();
    img.src = currentFrame(0);
    const images = [];
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const imgObj = new Image();
      imgObj.src = currentFrame(i);
      images.push(imgObj);
    }

    img.onload = () => {
      handleResize();
    };

    const renderImage = (image) => {
      if (!image || !image.complete) return;
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      const hRatio = canvasWidth / image.width;
      const vRatio = canvasHeight / image.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvasWidth - image.width * ratio) / 2;
      const centerShift_y = (canvasHeight - image.height * ratio) / 2;
      
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Use image smoothing for better upscaling quality
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      
      context.drawImage(image, 0, 0, image.width, image.height,
        centerShift_x, centerShift_y, image.width * ratio, image.height * ratio);
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      // Set actual size in memory (scaled to account for extra pixel density)
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // CSS pixels
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      renderImage(images[sequenceRef.current.frame]);
    };
    window.addEventListener('resize', handleResize);

    const st = gsap.to(sequenceRef.current, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1000%", // Double the scroll distance to significantly slow down the animation
        scrub: 0.1, 
        pin: true,
      },
      onUpdate: () => {
        renderImage(images[sequenceRef.current.frame]);
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (st.scrollTrigger) st.scrollTrigger.kill();
      st.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-rdr-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 pointer-events-none vignette">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-rdr-parchment text-glow mb-4 text-center drop-shadow-2xl">
          Red Dead<br/>Redemption II
        </h1>
        <p className="text-xl md:text-3xl font-body italic text-white/90 drop-shadow-lg">
          The Van der Linde Gang
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-pulse">
        <span className="font-typewriter text-sm tracking-widest text-rdr-parchment uppercase mb-2">Scroll to Begin</span>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-rdr-red"></div>
      </div>
    </div>
  );
}
