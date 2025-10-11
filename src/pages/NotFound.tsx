import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/background.png')] bg-cover bg-center bg-fixed">
      <div className="glass rounded-lg p-8 md:p-12 text-center max-w-md">
        <h1 className="mb-4 text-4xl md:text-5xl font-jaini font-bold text-white">404</h1>
        <p className="mb-6 text-xl text-white/90 font-montserrat">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-peachy transition-colors font-montserrat underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
