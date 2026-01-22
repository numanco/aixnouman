import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Workflow,
  MessageCircle,
  Youtube,
  Code2,
  Server
} from "lucide-react";

const RecruiterPage = () => {
  const skills = [
    "AI Content Creation",
    "Advanced n8n Automation",
    "WhatsApp AI Agents",
    "YouTube Automation",
    "SaaS Development",
    "Ubuntu Server Management",
    "Short-Form Video (Reels, Shorts, TikTok)",
    "WordPress Hosting & Deployment",
  ];

  const highlights = [
    { icon: Sparkles, text: "Built MyReelGen - AI SaaS for content generation" },
    { icon: Youtube, text: "Automated YouTube content pipelines with n8n" },
    { icon: MessageCircle, text: "Created Agently - WhatsApp AI agent platform" },
    { icon: Code2, text: "Active @aixnouman brand across 5+ platforms" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="mailto:nouman@evalinfo.com"
                className="hidden sm:block"
              >
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
              </a>
              <a href="#contact-section">
                <Button variant="hero" size="sm">
                  Contact Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-400">Open to Opportunities</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Muhammad Nouman
              </h1>
              <p className="text-xl md:text-2xl gradient-text font-semibold mb-6">
                AI Content & Automation Specialist
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                n8n Expert • SaaS Builder • Social Media Automation
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
                <Briefcase className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-semibold">Full-Time / Freelance</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Remote / Hybrid</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
                <Server className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-semibold">Production Systems</p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h2 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-primary" />
                Core Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-secondary text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Highlights */}
            <div className="mb-12">
              <h2 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Key Achievements
              </h2>
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
                  >
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Projects Quick Links */}
            <div className="mb-12">
              <h2 className="text-xl font-heading font-semibold mb-4">Live Projects</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="https://myreelgen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <span className="font-medium">MyReelGen</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://agently.evalinfo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <span className="font-medium">Agently</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact-section" className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20">
              <h2 className="text-2xl font-heading font-bold mb-6 text-center">
                Get in Touch
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:nouman@evalinfo.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">nouman@evalinfo.com</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/923321997882"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium">+92 332 1997882</p>
                  </div>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:nouman@evalinfo.com">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </a>
                <a href="https://wa.me/923321997882" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4" />
                    WhatsApp Me
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Muhammad Nouman • AI Content & Automation Specialist
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RecruiterPage;
