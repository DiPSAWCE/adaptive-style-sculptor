import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { cn } from "@/lib/utils";

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
});

interface ContactFormProps {
  className?: string;
}

const Contact = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate inputs
    const validation = contactSchema.safeParse(formData);
    
    if (!validation.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } = {};
      validation.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        if (field in fieldErrors) {
          fieldErrors[field as keyof typeof fieldErrors] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <main className="container-responsive py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <form
            onSubmit={handleSubmit}
            className={cn("glass-strong rounded-lg p-6 md:p-8 space-y-6", className)}
          >
            <h1 className="font-jaini text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Get In Touch
            </h1>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-montserrat text-lg md:text-xl">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-primary text-white placeholder:text-white/50"
              />
              {errors.name && (
                <p className="text-destructive text-sm">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-montserrat text-lg md:text-xl">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-primary text-white placeholder:text-white/50"
              />
              {errors.email && (
                <p className="text-destructive text-sm">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white font-montserrat text-lg md:text-xl">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/10 border-primary text-white placeholder:text-white/50"
              />
              {errors.message && (
                <p className="text-destructive text-sm">{errors.message}</p>
              )}
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
          
          <div className="glass rounded-lg p-6 md:p-8 lg:p-12 h-full flex flex-col justify-center">
            <h2 className="font-jaini text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Together
            </h2>
            
            <div className="space-y-6 font-montserrat text-white">
              <p className="text-lg text-white/90 leading-relaxed">
                Whether you're looking for a complete website build, need help with a specific feature, 
                or just want to discuss your project ideas, I'm here to help.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:hello@banele.dev" className="text-primary hover:text-peachy transition-colors">
                  hello@banele.dev
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                <p className="text-white/90">
                  I typically respond within 24 hours during business days.
                </p>
              </div>
              
              <div className="pt-6">
                <p className="text-white/80 text-sm italic">
                  "I believe that technology can support local makers, reduce waste and promote smarter consumption."
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
