const ImageCollage = () => {
  const images = [
    "/lovable-uploads/aaf641f4-03cf-42c9-83be-a05352169077.png",
    "/lovable-uploads/9f1fb71b-6ccd-4574-870c-e9ad7374ab40.png",
    "/lovable-uploads/65c57735-93e2-476e-ab39-2df18697b54f.png",
    "/lovable-uploads/1bb91c27-562b-46ce-8716-2d4757ba4956.png",
    "/lovable-uploads/425e5284-af0e-49e7-b27f-adc50df3d258.png",
    "/lovable-uploads/6a7835df-c3be-4046-9d67-569e7c7bad7b.png",
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <div className="grid grid-cols-3 h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-screen overflow-hidden group"
          >
            <img
              src={src}
              alt={`Collage image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-[15000ms] ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 hero-overlay" />
    </div>
  );
};

export default ImageCollage;