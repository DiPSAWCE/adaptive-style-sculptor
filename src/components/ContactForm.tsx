import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      </div>

      <Button type="submit" variant="cta" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
