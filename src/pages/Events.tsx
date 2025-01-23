import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Artist Meet-up at The Turn Arounds",
      date: "Date TBA",
      location: "Carlsbad, CA",
      description: "Join fellow artists for an evening of creativity and connection at The Turns. Share your work, meet like-minded creators, and be inspired by the stunning coastal views. This gathering is perfect for both established artists and those just beginning their creative journey.",
      image: "/lovable-uploads/a6aeba57-4ad0-4d2a-be62-90eadfaa7783.png"
    },
    {
      id: 2,
      title: "Sunset Photography Session",
      date: "Date TBA",
      location: "Oceanside",
      description: "Capture the magic of golden hour with our community of photographers. Whether you're a professional or enthusiast, this session offers the perfect opportunity to expand your portfolio and learn from fellow photographers.",
      image: "/lovable-uploads/00797b6b-c7aa-4e8e-9b2d-ebe7d2d0cb90.png"
    }
  ];

  return (
    <div className="min-h-screen bg-dark relative">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/feaa3860-33e5-4434-a68c-e89357c12b98.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>

    <div className="relative z-10">
      <Navigation />
      <div className="pt-36 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-playfair text-gold text-center mb-12">Upcoming Events</h1>
        
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 group cursor-pointer"
                   onClick={() => setSelectedEvent(event)}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-playfair text-gold">{event.title}</h2>
                <p className="text-white/80">
                  {event.location}
                </p>
                <p className="text-white/60 line-clamp-3">{event.description}</p>
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="text-gold hover:text-white transition-colors duration-300"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-dark/95 text-white border-gold max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <div className="space-y-6">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <h2 className="text-3xl font-playfair text-gold">{selectedEvent.title}</h2>
              <p className="text-white/80">
                {selectedEvent.location}
              </p>
              <p className="text-white/60 leading-relaxed">{selectedEvent.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
