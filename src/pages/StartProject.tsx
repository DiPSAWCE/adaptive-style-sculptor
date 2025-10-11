import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { z } from "zod";
import emailjs from "emailjs-com";

// Validation schema
const projectSchema = z.object({
  userName: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  userEmail: z.string().trim().email("Invalid email address").max(255, "Email too long"),
});

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

const StartProject = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<{ userName?: string; userEmail?: string }>({});
  const [isSending, setIsSending] = useState(false);

  const services: ServiceItem[] = [
    { id: "no-design", name: "No design", price: 0, category: "design" },
    { id: "logo", name: "Logo", price: 1000, category: "design" },
    { id: "full-design", name: "Full design (wireframes + prototype)", price: 6000, category: "design" },
    { id: "backend", name: "Yes, I need back-end development", price: 6000, category: "backend" },
    { id: "no-backend", name: "No back-end needed", price: 0, category: "backend" },
    { id: "2d-animations", name: "Include 2D animations", price: 2000, category: "frontend" },
    { id: "3d-animations", name: "Include 3D animations", price: 3000, category: "frontend" },
    { id: "mates-rates", name: "Mates Rates (10% discount)", price: -1, category: "discount" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    const newSelected = new Set(selectedServices);
    if (newSelected.has(serviceId)) {
      newSelected.delete(serviceId);
    } else {
      newSelected.add(serviceId);
    }
    setSelectedServices(newSelected);
  };

  const calculateTotal = () => {
    let total = 0;
    let hasDiscount = false;

    selectedServices.forEach((id) => {
      const service = services.find((s) => s.id === id);
      if (service) {
        if (service.price === -1) {
          hasDiscount = true;
        } else {
          total += service.price;
        }
      }
    });

    if (hasDiscount) {
      total = total * 0.9;
    }

    return total;
  };

  const getSelectedItems = () => {
    return services
      .filter((service) => selectedServices.has(service.id))
      .map((service) => service.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSending(true);

    // Validate inputs
    const validation = projectSchema.safeParse({ userName, userEmail });
    
    if (!validation.success) {
      const fieldErrors: { userName?: string; userEmail?: string } = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0] === "userName") fieldErrors.userName = issue.message;
        if (issue.path[0] === "userEmail") fieldErrors.userEmail = issue.message;
      });
      setErrors(fieldErrors);
      setIsSending(false);
      return;
    }

    if (selectedServices.size === 0) {
      toast.error("Please select at least one service");
      setIsSending(false);
      return;
    }

    const total = calculateTotal().toFixed(2);
    const items = getSelectedItems().join(", ");

    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      services: items,
      total,
    };

    try {
      await emailjs.send(
        "service_bdnwc5q",
        "template_1e8u7rd",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      toast.success("Quote request sent successfully!");
      setUserName("");
      setUserEmail("");
      setSelectedServices(new Set());
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send quote request. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleQuoteView = () => {
    if (selectedServices.size === 0) {
      toast.error("Please select services to view quote");
      return;
    }
    toast.info(`Total: R${calculateTotal().toFixed(2)}`);
  };

  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main className="container-responsive py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="glass-strong rounded-lg p-6 md:p-8">
            <h1 className="font-jaini text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Start A Project
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Design Section */}
              <fieldset className="space-y-4 border-b border-primary pb-6">
                <legend className="font-jaini text-2xl text-white font-semibold mb-2">
                  1. Design
                </legend>
                <p className="text-white/80 mb-4">
                  Whether you're fully prepared or just starting out, we've got your design needs covered.
                </p>
                {services
                  .filter((s) => s.category === "design")
                  .map((service) => (
                    <div key={service.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.has(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={service.id}
                        className="text-white cursor-pointer text-sm md:text-base"
                      >
                        {service.name} {service.price > 0 && `(R${service.price})`}
                      </label>
                    </div>
                  ))}
              </fieldset>

              {/* Backend Section */}
              <fieldset className="space-y-4 border-b border-primary pb-6">
                <legend className="font-jaini text-2xl text-white font-semibold mb-2">
                  2. Back-end
                </legend>
                <p className="text-white/80 mb-4">
                  Powerful, reliable, and built for performance. Secure database integrations and smooth features.
                </p>
                {services
                  .filter((s) => s.category === "backend")
                  .map((service) => (
                    <div key={service.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.has(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={service.id}
                        className="text-white cursor-pointer text-sm md:text-base"
                      >
                        {service.name} {service.price > 0 && `(R${service.price})`}
                      </label>
                    </div>
                  ))}
              </fieldset>

              {/* Frontend Section */}
              <fieldset className="space-y-4 border-b border-primary pb-6">
                <legend className="font-jaini text-2xl text-white font-semibold mb-2">
                  3. Front-end
                </legend>
                <p className="text-white/80 mb-4">
                  Your website's visual experience coded to perfection.
                </p>
                {services
                  .filter((s) => s.category === "frontend")
                  .map((service) => (
                    <div key={service.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.has(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={service.id}
                        className="text-white cursor-pointer text-sm md:text-base"
                      >
                        {service.name} (R{service.price})
                      </label>
                    </div>
                  ))}
              </fieldset>

              {/* Discount Section */}
              <fieldset className="space-y-4 pb-6">
                <legend className="font-jaini text-2xl text-white font-semibold mb-2">
                  4. Mates Rates
                </legend>
                <p className="text-white/80 mb-4">
                  Friends, freelancers, or folks with tight budgets? Let's talk about that 10% discount.
                </p>
                {services
                  .filter((s) => s.category === "discount")
                  .map((service) => (
                    <div key={service.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.has(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={service.id}
                        className="text-white cursor-pointer text-sm md:text-base"
                      >
                        {service.name}
                      </label>
                    </div>
                  ))}
              </fieldset>

              <Button
                type="button"
                variant="cta-secondary"
                className="w-full mb-4"
                onClick={handleQuoteView}
              >
                View Quote
              </Button>
            </form>
          </div>

          {/* Quote Slip Section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
            <div className="font-jaini text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Project Quote
              </h2>
              <p className="text-muted-foreground" id="slip-date">
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* User Details */}
            <div className="space-y-4 mb-8">
              <div>
                <Label htmlFor="userName" className="text-foreground font-semibold">
                  Name
                </Label>
                <Input
                  id="userName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="mt-2"
                  placeholder="Your name"
                />
                {errors.userName && (
                  <p className="text-destructive text-sm mt-1">{errors.userName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="userEmail" className="text-foreground font-semibold">
                  Email
                </Label>
                <Input
                  id="userEmail"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="mt-2"
                  placeholder="your@email.com"
                />
                {errors.userEmail && (
                  <p className="text-destructive text-sm mt-1">{errors.userEmail}</p>
                )}
              </div>
            </div>

            {/* Selected Items */}
            <div className="border-t border-b border-muted py-6 mb-6">
              <h3 className="font-jaini text-xl font-semibold mb-4">Selected Services:</h3>
              <ul className="space-y-2 font-montserrat" id="slip-items">
                {selectedServices.size === 0 ? (
                  <li className="text-muted-foreground italic">No services selected yet</li>
                ) : (
                  getSelectedItems().map((item, index) => (
                    <li key={index} className="text-foreground">
                      {item}
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* Total */}
            <div className="mb-8">
              <p className="font-jaini text-2xl font-bold text-foreground">
                Total: <span id="slip-total">R{calculateTotal().toFixed(2)}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleSubmit}
                variant="cta"
                className="w-full"
                disabled={!userName || !userEmail || selectedServices.size === 0 || isSending}
              >
                {isSending ? "Sending..." : "Send Quote Request"}
              </Button>
              <Button
                type="button"
                variant="cta-secondary"
                className="w-full"
                onClick={() => window.open(`mailto:hello@banele.dev?subject=Project Quote - R${calculateTotal().toFixed(2)}`, "_blank")}
              >
                Email Quote
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartProject;
