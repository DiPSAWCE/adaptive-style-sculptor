import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import { Github, Linkedin, Twitter } from "lucide-react";

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
    <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main className="container-responsive py-12 md:py-16">
        <div className="glass rounded-lg p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
          <h2 className="font-jaini text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 italic">
            About Us
          </h2>
          
          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose mb-8">
            We are passionate about creating beautiful and functional web experiences. 
            Our team combines creativity with technical expertise to deliver exceptional results.
          </p>

          <p className="font-montserrat text-responsive-xl text-white/90 leading-loose">
            With years of experience in web development and design, we've helped numerous 
            clients bring their visions to life. From concept to deployment, we're with you 
            every step of the way.
          </p>
        </div>

        <SocialLinks links={socialLinks} className="mt-16" />
      </main>
    </div>
  );
};

export default About;
