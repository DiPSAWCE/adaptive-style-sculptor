import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full glass border-b border-primary",
      className
    )}>
      <div className="container-responsive flex items-center justify-between py-4 md:py-5">
        <Link 
          to="/" 
          className="font-jaini text-2xl md:text-3xl lg:text-4xl font-extrabold text-white cursor-pointer transition-colors hover:text-primary"
        >
          Banele.dev
        </Link>

        <div className="hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-16 mx-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/start-project">Start-A-Project</NavLink>
        </div>

        {/* Mobile menu button - implement as needed */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="font-jaini relative text-lg lg:text-xl text-white transition-colors hover:text-peachy link-underline"
    >
      {children}
    </Link>
  );
};

export default Navbar;
