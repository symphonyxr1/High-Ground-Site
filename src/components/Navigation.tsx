import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6">
      <div className="container mx-auto flex flex-col items-center">
        <Link to="/" className="text-2xl font-playfair text-gold mb-6">
          High Ground
        </Link>
        <div className="space-x-8">
          <Link to="/events" className="text-white hover:text-gold transition-colors">
            Events
          </Link>
          <Link to="/music" className="text-white hover:text-gold transition-colors">
            Music
          </Link>
          <Link to="/blog" className="text-white hover:text-gold transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;