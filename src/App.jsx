import Navbar from './components/Navbar';
import HeroSequence from './components/HeroSequence';
import CharacterSection from './components/CharacterSection';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { characters } from './data/characters';

function App() {
  return (
    <div className="relative bg-rdr-black min-h-screen text-rdr-parchment font-body selection:bg-rdr-red selection:text-white">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 film-grain"></div>
      
      <Navbar />
      
      <main>
        <HeroSequence />
        
        <div id="characters" className="relative z-10 bg-rdr-black">
          {characters.map((char, index) => (
            <CharacterSection 
              key={char.id}
              {...char}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        <div id="timeline">
          <Timeline />
        </div>
        
        <div id="gallery">
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
