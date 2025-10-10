import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main>
        <HeroSection
          title="Welcome to Your Amazing Website"
          subtitle="Building Tomorrow's Web Today"
          description="We create beautiful, responsive, and high-performance web experiences that help your business grow. Our team combines cutting-edge technology with stunning design to deliver exceptional results."
          ctaText="Explore Services"
          ctaLink="/services"
        />

        <section className="container-responsive py-16 md:py-24">
          <div className="glass rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="font-jaini text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Did You Know?
            </h2>
            <p className="font-montserrat text-responsive-lg text-white/90 leading-relaxed">
              We've successfully delivered over 100 projects, helping businesses transform 
              their digital presence and achieve their goals. Let us help you too!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
