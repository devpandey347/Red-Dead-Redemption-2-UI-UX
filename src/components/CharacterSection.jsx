import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CharacterSection({
  name,
  role,
  bio,
  facts,
  quote,
  relationship,
  appearances,
  imagePath,
  isReversed = false,
  isFeatured = false
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Reveal text content
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      // Reveal and slight zoom on image
      gsap.fromTo(imageRef.current, 
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 flex items-center overflow-hidden">
      {/* Background element for smoke/dust effect */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-rdr-black via-transparent to-rdr-black"></div>
        {/* Placeholder for smoke texture if provided */}
      </div>

      <div className={`container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div ref={imageRef} className="relative w-full max-w-lg aspect-[3/4] rounded-sm overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-rdr-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src={imagePath} 
              alt={name} 
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            {/* Border accent */}
            <div className="absolute inset-4 border border-rdr-parchment/30 group-hover:border-rdr-red/50 transition-colors duration-500 pointer-events-none"></div>
          </div>
        </div>

        {/* Text Side */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col space-y-6">
          {isFeatured && (
            <div className="w-16 h-1 bg-rdr-red mb-2"></div>
          )}
          
          <div>
            <h2 className={`${isFeatured ? 'text-6xl md:text-8xl' : 'text-5xl md:text-7xl'} font-western text-rdr-parchment`}>
              {name}
            </h2>
            <p className="text-xl md:text-2xl font-title text-rdr-red tracking-widest mt-2">{role}</p>
          </div>

          <div className="prose prose-invert prose-p:font-body prose-p:text-lg prose-p:leading-relaxed text-rdr-parchment/80">
            <p>{bio}</p>
          </div>

          <blockquote className="border-l-4 border-rdr-red pl-6 py-2 my-8 italic font-body text-xl md:text-2xl text-white/90">
            "{quote}"
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 font-body text-sm text-rdr-parchment/70">
            <div>
              <h4 className="font-typewriter text-rdr-red uppercase tracking-wider mb-2">Relationship with Arthur</h4>
              <p>{relationship}</p>
            </div>
            <div>
              <h4 className="font-typewriter text-rdr-red uppercase tracking-wider mb-2">Interesting Facts</h4>
              <ul className="list-disc pl-4 space-y-1">
                {facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
