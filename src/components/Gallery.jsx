import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/characters-images/full_gang.jpg', alt: 'The Van der Linde Gang' },
  { id: 2, src: '/characters-images/aurthor_morgan.jpg', alt: 'Arthur Morgan Portrait' },
  { id: 3, src: '/characters-images/dutch.jpg', alt: 'Dutch van der Linde' },
  { id: 4, src: '/characters-images/saddie_adler.jpg', alt: 'Sadie Adler' },
  { id: 5, src: '/characters-images/john_marston.jpg', alt: 'John Marston' },
  { id: 6, src: '/characters-images/micah_bell.jpg', alt: 'Micah Bell' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-rdr-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-western text-center text-rdr-parchment mb-16 text-glow">
          Gallery
        </h2>
        
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="relative overflow-hidden group cursor-pointer break-inside-avoid rounded-sm"
              onClick={() => setSelectedImage(img)}
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rdr-red transition-colors duration-300 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-rdr-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto grayscale-[30%] sepia-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 block" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-rdr-red transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[90vh] object-contain shadow-[0_0_50px_rgba(139,0,0,0.3)] animate-in fade-in zoom-in duration-300"
          />
          <p className="absolute bottom-8 text-rdr-parchment font-typewriter tracking-widest uppercase">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </section>
  );
}
