const ImageCollage = () => {
  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <div className="grid grid-cols-1 h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-screen/6 overflow-hidden"
          >
            <img
              src={src}
              alt={`Collage image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 hero-overlay" />
    </div>
  );
};

export default ImageCollage;