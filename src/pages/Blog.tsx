import { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPost = {
    title: "High Ground: A Space for Visionaries to Create, Connect, and Elevate",
    image: "/lovable-uploads/1545420b-c3ab-44a1-a65e-5fe67501f531.png",
    content: `High Ground is a community built for creators who seek to transform their ideas into impactful projects. By offering unique spaces for collaboration and skill-building, we provide artists and innovators the resources they need to grow. Here, creativity flourishes in an environment designed to inspire and connect.

What Sets High Ground Apart
High Ground prioritizes meaningful engagement and practical support for its members. Instead of overwhelming participants with trends or jargon, we focus on creating opportunities for genuine growth. Through workshops, residencies, and events, we foster a culture of collaboration and purposeful creation.

Our Offerings
Creative Residencies
Our residencies offer extended time for creators to dive into their work, surrounded by supportive peers. Artists and innovators use this time to refine their craft, collaborate, and develop projects that resonate beyond the walls of High Ground.

Skill-Building Workshops
From music production to storytelling, our workshops provide practical, hands-on guidance led by experts. These sessions are designed for creators to leave with actionable skills and tangible progress on their goals.

Collaborative Projects
High Ground thrives on collaboration. Community projects like group art installations and shared music playlists bring members together to create something greater than themselves.

Looking Ahead
High Ground is committed to innovation and sustainability. Future plans include:

High Ground Quest: A hybrid scavenger hunt combining real-world exploration and digital storytelling.
Exclusive Merchandise: Products like the Enigma Journal, designed to inspire creativity, and the Sound Capsule, offering immersive audio experiences.
Augmented Reality Experiences: Bridging the physical and digital worlds to deepen engagement and connection.

How to Join
High Ground welcomes creators who are eager to grow and contribute. By joining, you'll gain access to a community that values authenticity and shared purpose. Together, we'll build projects and legacies that inspire.

Visit our website to explore membership options, upcoming events, and ways to participate.`,
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/lovable-uploads/65ff115e-83d3-42dc-98d4-8b5693ac2d00.png")',
      }}
    >
      <div className="min-h-screen bg-black/50">
        <Navigation />
        <div className="pt-36 px-4 md:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair text-gold text-center mb-12">
            Blog
          </h1>

          <div className="max-w-2xl mx-auto">
            <div 
              className="bg-black/50 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 duration-300"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={blogPost.image}
                alt="Blog post cover"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-playfair text-gold mb-4">
                  {blogPost.title}
                </h2>
                <p className="text-white/80 line-clamp-3">
                  {blogPost.content.split('\n')[0]}
                </p>
              </div>
            </div>
          </div>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-dark border-gold">
              <DialogHeader>
                <DialogTitle className="text-2xl font-playfair text-gold">
                  {blogPost.title}
                </DialogTitle>
              </DialogHeader>
              <img
                src={blogPost.image}
                alt="Blog post cover"
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <div className="text-white/80 whitespace-pre-line">
                {blogPost.content}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Blog;