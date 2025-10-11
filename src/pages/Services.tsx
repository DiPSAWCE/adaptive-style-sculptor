import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Code, Palette, Smartphone, Database, Cloud, Zap } from "lucide-react";

const Services = () => {
  const mainDescription = `As a skilled developer with a focus on HTML, CSS, JavaScript and Java, I offer complete, end-to-end solutions for building websites. From crafting clean, user-friendly designs to coding both the structure and functionality, I create custom sites that align perfectly with your vision. Whether it's structuring pages with HTML, styling them with CSS, or building interactive features using JavaScript, I handle every aspect of the process to deliver a functional and visually appealing web experience tailored to your needs. If you're a small business, creative team, or independent designer looking for a reliable technical partner, I can turn your ideas into fully functional, modern websites that work seamlessly.`;

  const offerings = [
    "Clean, responsive websites built with HTML, CSS, and JavaScript.",
    "From design to code—fast, functional, and modern.",
    "Custom web solutions tailored to your vision.",
  ];

  const services = [
    {
      title: "HTML",
      description: "Semantic, accessible HTML5 markup for solid web foundations.",
      icon: <Code className="w-full h-full text-primary" />,
      ctaLink: "/start-project",
    },
    {
      title: "CSS",
      description: "Modern, responsive styling with CSS3 and animations.",
      icon: <Palette className="w-full h-full text-peachy" />,
      ctaLink: "/start-project",
    },
    {
      title: "JavaScript",
      description: "Interactive features and dynamic functionality.",
      icon: <Zap className="w-full h-full text-primary" />,
      ctaLink: "/start-project",
    },
    {
      title: "Java",
      description: "Robust backend solutions and enterprise applications.",
      icon: <Database className="w-full h-full text-secondary" />,
      ctaLink: "/start-project",
    },
    {
      title: "Adobe Creative Suite",
      description: "Professional design and visual content creation.",
      icon: <Palette className="w-full h-full text-peachy" />,
      ctaLink: "/start-project",
    },
    {
      title: "Canva",
      description: "Quick, effective design solutions for modern branding.",
      icon: <Smartphone className="w-full h-full text-primary" />,
      ctaLink: "/start-project",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main className="container-responsive py-12 md:py-16">
        <div className="glass rounded-lg p-6 md:p-8 lg:p-12 max-w-6xl mx-auto mb-12">
          <h1 className="font-jaini text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Services
          </h1>
          
          <p className="font-montserrat text-responsive-lg text-white/90 leading-relaxed mb-8">
            {mainDescription}
          </p>

          <div className="mt-8">
            <p className="font-jaini text-2xl text-white font-semibold mb-4">I offer you:</p>
            <ul className="space-y-3 font-montserrat text-white/90 text-lg">
              {offerings.map((offering, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  {offering}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              variant="cta"
              size="xl"
              onClick={() => window.location.href = "/start-project"}
            >
              Start-A-Project
            </Button>
          </div>
        </div>

        <h2 className="font-jaini text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              ctaLink={service.ctaLink}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
