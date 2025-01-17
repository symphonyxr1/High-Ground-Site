import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageCollage from "@/components/ImageCollage";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <ImageCollage />
      <Navigation />
      <Hero />
    </main>
  );
};

export default Index;