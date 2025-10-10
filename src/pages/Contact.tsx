import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main className="container-responsive py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <ContactForm />
          
          <div className="glass rounded-lg p-6 md:p-8 lg:p-12 h-full flex flex-col justify-center">
            <h2 className="font-jaini text-3xl md:text-4xl font-bold text-white mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6 font-montserrat text-white">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:hello@example.com" className="text-primary hover:text-peachy transition-colors">
                  hello@example.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-primary hover:text-peachy transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-white/90">
                  123 Main Street<br />
                  City, State 12345<br />
                  Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
