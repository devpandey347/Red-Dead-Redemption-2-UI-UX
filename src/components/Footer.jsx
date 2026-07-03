import { MessageCircle, Globe, Share2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-rdr-black py-20 overflow-hidden border-t border-rdr-red/20">
      <div className="absolute inset-0 opacity-10 bg-grain pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-western text-rdr-parchment mb-4 text-glow">
          Red Dead Redemption II
        </h2>
        <p className="font-body italic text-white/50 mb-12">
          "Outlaws for life."
        </p>

        <div className="flex space-x-6 mb-12">
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-rdr-red hover:text-white transition-colors duration-300">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-rdr-red hover:text-white transition-colors duration-300">
            <Globe size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-rdr-red hover:text-white transition-colors duration-300">
            <Share2 size={20} />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="font-typewriter uppercase tracking-widest text-sm text-rdr-parchment/60 hover:text-rdr-red transition-colors mb-12 flex flex-col items-center group"
        >
          <span className="w-px h-12 bg-rdr-red/50 group-hover:bg-rdr-red transition-colors mb-4 block transform rotate-180"></span>
          Back to Top
        </button>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between w-full text-xs font-body text-white/40">
          <p>Made by Dev Pandey</p>
          <p>Inspired by Rockstar Games</p>
        </div>
      </div>
    </footer>
  );
}
