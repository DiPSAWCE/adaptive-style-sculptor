import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import { Github, Linkedin, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: <Github className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main className="container-responsive py-12 md:py-16">
        <div className="glass rounded-lg p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
            <div className="lg:w-1/3">
              <img 
                src={heroImage} 
                alt="Banele Mjayezi" 
                className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fade-in hover-lift"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="font-jaini text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 italic animate-twinkle">
                A little about me
              </h2>
            </div>
          </div>
          
          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose mb-6">
            HI, I'm Banele Mjayezi a developer passionate about creating clean, modern web experiences with a conscience.
          </p>

          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose mb-6">
            My main focus is building efficient, sustainable websites that are lightweight, fast, and environmentally mindful.
          </p>

          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose mb-8">
            I believe that technology can support local makers, reduce waste and promote smarter consumption.
          </p>

          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose mb-6">
            Right now, I'm focused on practical learning and building real-world projects while experimenting with modern tools and exploring.
          </p>
          
          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose mb-8">
            I am currently studying web development, sharpening my skills in both front-end and back-end tech. I thrive in learning by doing.
          </p>

          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose">
            I am constantly iterating and experimenting to bring meaningful digital ideas to life. When I'm not at the laptop, I'm usually outdoors, practising my surfing, reading, or thinking up new ways to blend tech, sustainability, and creativity.
          </p>
        </div>

        <SocialLinks links={socialLinks} className="mt-16" />
      </main>
    </div>
  );
};

export default About;
