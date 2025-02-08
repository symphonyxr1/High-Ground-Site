
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6">
      <div className="container mx-auto max-w-[50%]">
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <Link 
              to="/" 
              className="text-2xl font-playfair text-gold hover:text-gold/80 transition-colors"
            >
              High Ground
            </Link>
            <div className="flex items-center space-x-8">
              <Link 
                to="/events" 
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                Events
              </Link>
              <Link 
                to="/music" 
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                Music
              </Link>
              <Link 
                to="/blog" 
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
