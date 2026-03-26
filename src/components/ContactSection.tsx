import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nouman@evalinfo.com",
      href: "mailto:nouman@evalinfo.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+92 332 1997882",
      href: "https://wa.me/923321997882",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lachi, Kohat, KPK, Pakistan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Let's Build Something
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ready to start a project or just want to chat? Reach out and 
              I'll get back to you soon.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h4 className="font-heading font-semibold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/923321997882"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <span className="font-medium">Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="mailto:nouman@evalinfo.com"
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <span className="font-medium">Send an Email</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
