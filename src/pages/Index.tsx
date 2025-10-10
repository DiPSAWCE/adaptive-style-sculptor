import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main>
        <HeroSection
          title="Creative Full-Stack Dev"
          description="Building clean, modern web experiences with a conscience. Efficient, sustainable websites that are lightweight, fast, and environmentally mindful."
          ctaText="Work with me!"
          ctaLink="/start-project"
        />

        <section className="container-responsive py-16 md:py-24">
          <div className="glass rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="font-jaini text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Did You Know?
            </h2>
            <p className="font-montserrat text-responsive-lg text-white/90 leading-relaxed">
              Over 75% of consumers judge a company's credibility based on its website design, and businesses with a strong online presence are more likely to increase sales by reaching their target audience effectively. A well-developed website doesn't just showcase products or services—it acts as a 24/7 salesperson, building trust, attracting the right audience, and guiding visitors into loyal customers.
            </p>
          </div>
        </section>

        <div className="bg-black/80 py-6 overflow-hidden">
          <div className="whitespace-nowrap animate-scroll-strip">
            <p className="inline-block text-white text-2xl md:text-4xl lg:text-5xl font-bold">
              ⭐ Website Development ⭐ App Prototypes ⭐ E-Commerce Sites ⭐ Front-End & UI/UX ⭐
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
