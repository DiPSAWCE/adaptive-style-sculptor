import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks = ({ links, className }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-6 md:gap-8 lg:gap-16", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 md:p-4 hover-lift rounded-lg transition-all"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
