import Navigation from "@/components/Navigation";

const Music = () => {
  return (
    <div 
      className="min-h-screen bg-dark relative"
      style={{
        backgroundImage: "url('/lovable-uploads/75e561d7-369d-4021-8113-a6b765783de6.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Navigation />
      <div className="pt-36 px-4 md:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl font-playfair text-gold text-center mb-12">
          Mixsets
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLCBAwATROgx-3FuokaKvPN1eAt7X_czht"
              title="High Ground Mixsets"
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