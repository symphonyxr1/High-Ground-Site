import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events: Event[] = [
    {
      id: 1,
      title: "Artist Meet-up at The Turn Arounds",
      date: "January 28, 2025",
      location: "Carlsbad, CA",
      description: "Join fellow artists for an evening of creativity and connection at The Turns. Share your work, meet like-minded creators, and be inspired by the stunning coastal views. This gathering is perfect for both established artists and those just beginning their creative journey.",
      image: "/lovable-uploads/a6aeba57-4ad0-4d2a-be62-90eadfaa7783.png"
    },
    {
      id: 2,
      title: "Sunset Photography Session",
      date: "January 28, 2025",
      location: "High Ground Studio",
      description: "Capture the magic of golden hour with our community of photographers. Whether you're a professional or enthusiast, this session offers the perfect opportunity to expand your portfolio and learn from fellow photographers.",
      image: "/lovable-uploads/00797b6b-c7aa-4e8e-9b2d-ebe7d2d0cb90.png"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-dark relative"
      style={{
        backgroundImage: "url('/lovable-uploads/e95da017-261a-4510-847d-a4aceda3e3d4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/70" />
      
      <Navigation />
      
      <div className="relative z-10 pt-24 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-playfair text-gold text-center mb-12">
          Events
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-black/50 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 duration-300"
              onClick={() => {
                setSelectedEvent(event);
                setIsModalOpen(true);
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-playfair text-gold mb-2">
                  {event.title}
                </h2>
                <p className="text-white/80 mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex justify-between text-white/60">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-black/95 text-white border-gold">
            {selectedEvent && (
              <div className="p-6">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h2 className="text-3xl font-playfair text-gold mb-4">
                  {selectedEvent.title}
                </h2>
                <p className="text-white/80 mb-6 whitespace-pre-wrap">
                  {selectedEvent.description}
                </p>
                <div className="flex justify-between text-white/60">
                  <span>{selectedEvent.date}</span>
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Events;