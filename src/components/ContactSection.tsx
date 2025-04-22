
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Badge } from "./Badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formState);
    alert("Thanks for your message! This is a demo form.");
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  // Social media links
  const socialLinks = [
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Dribbble", url: "#", icon: "dribbble" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" }
  ];

  return (
    <section id="contact" className="section bg-gradient-to-b from-background/95 to-background pt-20 pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-designer-primary/5 to-transparent"></div>
      
      <div className="absolute top-40 right-0 w-64 h-64 bg-designer-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-designer-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <Badge variant="default" size="md" className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? 
              I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border-designer-primary/10 focus:border-designer-primary"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border-designer-primary/10 focus:border-designer-primary"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border-designer-primary/10 focus:border-designer-primary"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border-designer-primary/10 focus:border-designer-primary min-h-[120px]"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-designer-primary hover:bg-designer-primary/90 button-glow"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal direction="right" delay={100}>
              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-foreground/80">
                    Feel free to reach out through any of the following channels.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm text-foreground/60 uppercase mb-1">Email</h4>
                  <a href="mailto:contact@example.com" className="text-designer-primary hover:underline">
                    contact@example.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm text-foreground/60 uppercase mb-1">Based In</h4>
                  <p>San Francisco, California</p>
                </div>
                
                <div>
                  <h4 className="text-sm text-foreground/60 uppercase mb-1">Work Hours</h4>
                  <p>Monday - Friday: 9AM - 6PM PST</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url}
                      className="bg-white/10 hover:bg-designer-primary/20 transition-colors duration-300 p-3 rounded-md"
                      aria-label={link.name}
                    >
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
