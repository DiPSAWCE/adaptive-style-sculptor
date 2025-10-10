import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaLink = "#",
  imageSrc,
  className,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 py-12 md:py-16 lg:py-24 container-responsive",
        className
      )}
    >
      <div className="flex-1 space-y-6 text-white animate-fade-in">
        {subtitle && (
          <span className="text-muted-foreground text-lg md:text-xl font-montserrat">
            {subtitle}
          </span>
        )}
        <h1 className="font-jaini text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-twinkle">
          {title}
        </h1>
        <p className="font-montserrat text-responsive-lg max-w-2xl leading-relaxed text-white/90">
          {description}
        </p>
        <Button
          variant="cta"
          size="xl"
          className="mt-8"
          onClick={() => window.location.href = ctaLink}
        >
          {ctaText}
        </Button>
      </div>

      {imageSrc && (
        <div className="flex-1 max-w-md lg:max-w-lg">
          <img
            src={imageSrc}
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-2xl hover-lift"
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
