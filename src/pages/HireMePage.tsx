import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft,
  ArrowRight,
  Mail, 
  Phone, 
  CheckCircle2,
  Zap,
  Target,
  TrendingUp,
  ExternalLink
} from "lucide-react";

const HireMePage = () => {
  const whyHireMe = [
    {
      icon: Zap,
      title: "Execution Over Theory",
      description: "I build real systems that run in production, not just prototypes.",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every project I take on is designed to deliver measurable outcomes.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From automation workflows to SaaS products, I build for growth.",
    },
  ];

  const capabilities = [
    "AI-powered content generation at scale",
    "n8n automation workflows for business processes",
    "WhatsApp AI agents for customer engagement",
    "YouTube automation pipelines",
    "SaaS product development",
    "Server deployment & management",
  ];

  const projects = [
    { name: "MyReelGen", url: "https://myreelgen.com" },
    { name: "Agently", url: "https://agently.evalinfo.com" },
    { name: "YouTube Automation", url: "https://www.youtube.com/@QuickKitchenLabFood" },
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
              <span className="text-sm">Full Portfolio</span>
            </Link>
            <a href="#hire-contact">
              <Button variant="hero" size="sm">
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Hero */}
            <div className="text-center mb-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center glow-effect">
                <span className="text-3xl font-heading font-bold text-primary-foreground">MN</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Looking for an AI & Automation Expert?
              </h1>
              <p className="text-xl text-muted-foreground">
                I turn ideas into <span className="text-foreground font-medium">working systems</span> that 
                scale your content, automate your workflows, and grow your business.
              </p>
            </div>

            {/* Why Hire Me */}
            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold mb-8 text-center">
                Why Work With Me
              </h2>
              <div className="grid gap-6">
                {whyHireMe.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 rounded-xl bg-card border border-border/50"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Can Do */}
            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold mb-8 text-center">
                What I Bring to the Table
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof */}
            <div className="mb-16">
              <h2 className="text-2xl font-heading font-bold mb-8 text-center">
                See My Work in Action
              </h2>
              <div className="grid gap-4">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <span className="font-medium">{project.name}</span>
                    <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                      <span className="text-sm">View Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div id="hire-contact" className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Start?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Whether you need AI content systems, automation workflows, or a complete 
                SaaS solution — I'm here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="mailto:nouman@evalinfo.com">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <Mail className="w-5 h-5" />
                    nouman@evalinfo.com
                  </Button>
                </a>
                <a href="https://wa.me/923321997882" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                Based in Pakistan • Available for Remote & Hybrid roles
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← View Full Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">
              Muhammad Nouman • AI & Automation Specialist
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HireMePage;
