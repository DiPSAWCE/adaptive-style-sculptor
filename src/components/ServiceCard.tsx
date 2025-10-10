import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  ctaText = "Learn More",
  ctaLink = "#",
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "glass flex flex-col h-full rounded-lg p-6 md:p-8 text-center hover-lift",
        "transition-all duration-300",
        className
      )}
    >
      {icon && (
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="font-jaini text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h3>
      
      <p className="font-montserrat text-responsive-base text-white/90 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <Button
        variant="cta-secondary"
        className="mt-auto"
        onClick={() => window.location.href = ctaLink}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default ServiceCard;
