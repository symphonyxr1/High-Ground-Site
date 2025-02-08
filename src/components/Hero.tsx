
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-playfair mb-8 bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent animate-gradient">
          Timeless Aura
        </h1>
        <p className="text-xl md:text-2xl mb-12 leading-relaxed">
          We build spaces for artists to thrive. From studio sessions to live shows,
          High Ground is a place where raw talent lives and grows. Connect with fellow
          creators, share your sound, and push your art further than you thought possible.
        </p>
        <div className="flex gap-6 justify-center">
          <Link 
            to="/events" 
            className="px-8 py-3 bg-gold text-dark font-semibold rounded hover:bg-opacity-90 transition-all"
          >
            Explore Events
          </Link>
          <button className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold hover:text-dark transition-all">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
