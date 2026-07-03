import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-rdr-black/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-western text-2xl tracking-widest text-rdr-parchment hover:text-rdr-red transition-colors cursor-pointer text-glow">
          RDR II
        </div>
        
        <ul className="hidden md:flex space-x-8 font-title tracking-widest text-lg text-rdr-parchment/80">
          {['Home', 'Story', 'Characters', 'Gallery', 'Timeline', 'About'].map((item) => (
            <li 
              key={item} 
              className="group relative cursor-pointer hover:text-white transition-colors"
              onClick={() => {
                const id = item.toLowerCase();
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else if (id === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rdr-red transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
