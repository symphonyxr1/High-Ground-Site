const ImageCollage = () => {
  const images = [
    "/lovable-uploads/1c037471-1e89-4e28-8443-48d7a2078f50.png",
    "/lovable-uploads/da83e904-7d86-486e-b21c-440a1cc9dcc6.png",
    "/lovable-uploads/4ef84699-3e63-4c4a-88ec-eaa2c5cd021e.png",
    "/lovable-uploads/4066d064-7380-4ffe-a60f-a8a80bbfd93f.png",
    "/lovable-uploads/da7ce760-82b4-41c6-b350-3da37c64d492.png",
    "/lovable-uploads/c2de37bb-b96c-4ae8-bbf6-f5f49f3f9bb9.png",
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <div className="grid grid-cols-3 h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-[50vh] overflow-hidden border-4 border-black"
          >
            <img
              src={src}
              alt={`Collage image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-[15000ms] ease-in-out hover:scale-125"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 hero-overlay" />
    </div>
  );
};

export default ImageCollage;