import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Code, Palette, Smartphone, Database, Cloud, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build modern, responsive websites with cutting-edge technologies. From single-page applications to complex web platforms.",
      icon: <Code className="w-full h-full text-primary" />,
      ctaLink: "/contact",
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user interfaces that are both beautiful and intuitive. User experience is at the heart of everything we design.",
      icon: <Palette className="w-full h-full text-peachy" />,
      ctaLink: "/contact",
    },
    {
      title: "Mobile Apps",
      description: "Develop native and cross-platform mobile applications that deliver seamless experiences on any device.",
      icon: <Smartphone className="w-full h-full text-primary" />,
      ctaLink: "/contact",
    },
    {
      title: "Database Solutions",
      description: "Design and implement robust database architectures that scale with your business needs.",
      icon: <Database className="w-full h-full text-secondary" />,
      ctaLink: "/contact",
    },
    {
      title: "Cloud Services",
      description: "Deploy and manage cloud infrastructure for reliability, scalability, and performance.",
      icon: <Cloud className="w-full h-full text-peachy" />,
      ctaLink: "/contact",
    },
    {
      title: "Performance",
      description: "Optimize your applications for lightning-fast load times and smooth user experiences.",
      icon: <Zap className="w-full h-full text-primary" />,
      ctaLink: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main className="container-responsive py-12 md:py-16">
        <h1 className="font-jaini text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16">
          Our Services
        </h1>

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
