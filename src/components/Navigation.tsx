
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <Link to="/" className="text-2xl font-playfair text-gold">
          High Ground
        </Link>
        <div className="bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <Link to="/events" className="text-white hover:text-gold transition-colors text-sm md:text-base">
              Events
            </Link>
            <Link to="/music" className="text-white hover:text-gold transition-colors text-sm md:text-base">
              Music
            </Link>
            <Link to="/blog" className="text-white hover:text-gold transition-colors text-sm md:text-base">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
