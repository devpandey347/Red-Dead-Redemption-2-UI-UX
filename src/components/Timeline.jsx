import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { year: '1878', title: 'The Beginning', desc: 'Dutch van der Linde and Hosea Matthews meet and decide to form a gang.' },
  { year: '1887', title: 'Taking in John', desc: 'A twelve-year-old John Marston is saved by Dutch and joins the gang.' },
  { year: '1899', title: 'Blackwater Massacre', desc: 'A ferry robbery goes horribly wrong, forcing the gang to flee into the snowy mountains.' },
  { year: '1899', title: 'Horseshoe Overlook', desc: 'The gang establishes a camp in the Heartlands, hoping to lie low.' },
  { year: '1899', title: 'Saint Denis Bank Robbery', desc: 'A disastrous heist leads to the deaths of key members and the gang\'s exile to Guarma.' },
  { year: '1899', title: 'The Fall', desc: 'Betrayal and Pinkerton attacks shatter the gang completely.' },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main timeline line
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );

      // Animate each event node
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-32 bg-rdr-black overflow-hidden" ref={containerRef}>
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-fixed bg-center pointer-events-none grayscale"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}characters-images/full_gang.jpg)` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-western text-center text-rdr-parchment mb-24 text-glow">
          Gang Timeline
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/10"></div>
          <div ref={lineRef} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-rdr-red"></div>

          {events.map((evt, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                ref={el => itemsRef.current[idx] = el}
                className={`relative flex items-center justify-between mb-16 ${isLeft ? 'flex-row-reverse' : ''}`}
              >
                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
                
                {/* Node */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-rdr-black border-4 border-rdr-red z-10 shadow-[0_0_15px_rgba(139,0,0,0.8)]"></div>
                </div>
                
                {/* Content */}
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <span className="font-typewriter text-rdr-red text-xl">{evt.year}</span>
                  <h3 className="font-title text-3xl text-rdr-parchment tracking-wide mt-1 mb-2">{evt.title}</h3>
                  <p className="font-body text-white/70">{evt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
