import Navigation from "@/components/Navigation";

const Music = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <div className="pt-24 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-playfair text-gold text-center mb-12">
          Mixshow
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLCBAwATROgx-3FuokaKvPN1eAt7X_czht"
              title="High Ground Mixshow"
              className="w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;